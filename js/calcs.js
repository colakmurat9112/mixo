/* Hesaplayıcı tanımları: her biri alanlar + hesaplama fonksiyonu */
(function () {
  function r(n, d) { if (!isFinite(n)) return "—"; var f = Math.pow(10, d == null ? 1 : d); return (Math.round(n * f) / f).toLocaleString("tr-TR"); }
  function density(bx) { return 1 + 0.00386 * bx + 0.0000173 * bx * bx; }

  window.CALCS = {
    abv: {
      title: "Son ABV ve dilüsyon",
      desc: "Kokteylin buzdan sonraki hacmini ve alkol oranını tahmin eder.",
      fields: [
        { id: "a1", label: "Baz alkol (ml)", value: 60 },
        { id: "p1", label: "Baz alkol ABV (%)", value: 40 },
        { id: "a2", label: "Diğer alkollü malzeme (ml)", value: 0 },
        { id: "p2", label: "Onun ABV'si (%)", value: 16 },
        { id: "n", label: "Alkolsüz malzemeler (ml)", value: 45 },
        { id: "tech", label: "Teknik", type: "select", value: "0.5", options: [["0.5", "Shake (~%50 su)"], ["0.33", "Stir (~%33 su)"], ["0.25", "Throw (~%25 su)"], ["0.6", "Swizzle / kırık buz (~%60)"], ["0.1", "Build (başlangıç ~%10)"]] }
      ],
      compute: function (v) {
        var init = v.a1 + v.a2 + v.n;
        var alc = v.a1 * v.p1 / 100 + v.a2 * v.p2 / 100;
        var water = init * parseFloat(v.tech);
        var total = init + water;
        var abvStart = init ? alc / init * 100 : 0;
        var abv = total ? alc / total * 100 : 0;
        var note = abv > 30 ? "Çok güçlü: dilüsyonu veya karıştırma süresini artırmayı düşün." : abv < 12 && parseFloat(v.tech) >= 0.25 ? "Hafif bir içki; highball veya low-ABV aralığında." : "Klasik kokteyl aralığında.";
        return { results: [
          { label: "Başlangıç hacmi", value: r(init, 0), unit: "ml" },
          { label: "Eklenen su", value: r(water, 0), unit: "ml" },
          { label: "Son hacim", value: r(total, 0), unit: "ml" },
          { label: "Başlangıç ABV", value: r(abvStart), unit: "%" },
          { label: "Son ABV", value: r(abv), unit: "%", hl: true }
        ], note: note };
      }
    },

    brix: {
      title: "Brix / şeker miktarı",
      desc: "Şeker (g) = M × (T − B) ÷ (100 − T). Su bazlı demlemelerde B = 0.",
      fields: [
        { id: "m", label: "Sıvının ağırlığı M (g)", value: 600 },
        { id: "b", label: "Mevcut Brix B (°Bx)", value: 8 },
        { id: "tp", label: "Hedef", type: "select", value: "50", options: [["50", "50 · 1:1 standart"], ["60", "60 · 3:2"], ["66.7", "66,7 · 2:1 rich"], ["40", "40 · hafif"], ["c", "Özel hedef"]] },
        { id: "t", label: "Özel hedef Brix", value: 55 }
      ],
      compute: function (v) {
        var T = v.tp === "c" ? v.t : parseFloat(v.tp);
        if (T >= 100 || T <= v.b) return { results: [{ label: "Eklenecek şeker", value: "0", unit: "g", hl: true }], note: "Hedef Brix mevcut değerden büyük ve 100'den küçük olmalı.", warn: true };
        var s = v.m * (T - v.b) / (100 - T);
        var tot = v.m + s;
        return { results: [
          { label: "Eklenecek şeker", value: r(s, 0), unit: "g", hl: true },
          { label: "Toplam ağırlık", value: r(tot, 0), unit: "g" },
          { label: "Yaklaşık hacim", value: r(tot / density(T), 0), unit: "ml" },
          { label: "Yoğunluk", value: r(density(T), 2), unit: "g/ml" }
        ], note: "İpucu: Taze meyve suyunda refraktometreyle B'yi ölç; olgunluk 3–4 puan fark yaratabilir." };
      }
    },

    acid: {
      title: "Asit ayarı (acid-adjusting)",
      desc: "Bir meyve suyunu hedef asit profiline getirmek için eklenecek toz asitleri hesaplar.",
      fields: [
        { id: "vol", label: "Meyve suyu (ml ≈ g)", value: 1000 },
        { id: "src", label: "Kaynak", type: "select", value: "orange", options: [["orange", "Portakal (~0,8 sitrik + 0,1 malik)"], ["grapefruit", "Greyfurt (~2,3 + 0,1)"], ["pineapple", "Ananas (~0,8 + 0,1)"], ["apple", "Elma (~0 + 0,5)"], ["water", "Su / çay / demleme (0)"], ["cucumber", "Salatalık / sebze (~0,1 + 0)"]] },
        { id: "tgt", label: "Hedef profil", type: "select", value: "lime", options: [["lime", "Misket limonu %6 (2 sitrik : 1 malik)"], ["lemon", "Limon %6 (sitrik)"], ["applep", "Elma profili %6 (1 sitrik : 4 malik)"], ["soft", "Yumuşak %4 (2:1)"], ["champ", "Şampanya asidi %6 (3 tartarik : 1 laktik)"]] }
      ],
      compute: function (v) {
        var S = { orange: [0.8, 0.1], grapefruit: [2.3, 0.1], pineapple: [0.8, 0.1], apple: [0, 0.5], water: [0, 0], cucumber: [0.1, 0] }[v.src];
        var res;
        if (v.tgt === "champ") {
          var need = Math.max(0, 6 - S[0] - S[1]);
          res = [
            { label: "Tartarik asit", value: r(v.vol * need * 0.75 / 100), unit: "g", hl: true },
            { label: "Laktik asit (toz)", value: r(v.vol * need * 0.25 / 100), unit: "g", hl: true }
          ];
          return { results: res, note: "Şampanya asidi; sitrik ve malik yerine şarap benzeri bir yapı verir. Mevcut asitler toplamdan düşüldü." };
        }
        var T = { lime: [4, 2], lemon: [6, 0], applep: [1.2, 4.8], soft: [2.67, 1.33] }[v.tgt];
        var c = Math.max(0, T[0] - S[0]), m = Math.max(0, T[1] - S[1]);
        var cg = v.vol * c / 100, mg = v.vol * m / 100;
        return { results: [
          { label: "Sitrik asit", value: r(cg), unit: "g", hl: true },
          { label: "Malik asit", value: r(mg), unit: "g", hl: true },
          { label: "Toplam asit (son)", value: r(Math.max(T[0], S[0]) + Math.max(T[1], S[1]), 1), unit: "%" }
        ], note: "Asitleri az miktar suda çözüp ekle, karıştır ve tat. Dave Arnold referansı: 1 L portakal suyu + 32 g sitrik + 20 g malik ≈ misket limonu gücü." };
      }
    },

    cordial: {
      title: "Cordial",
      desc: "Taban sıvısının ağırlığına göre şeker, asit ve tuz miktarlarını ölçekler.",
      fields: [
        { id: "base", label: "Taban sıvısı (g)", value: 1000 },
        { id: "style", label: "Stil", type: "select", value: "lime", options: [["lime", "Misket limonu"], ["lemon", "Limon"], ["apple", "Yeşil elma"], ["grape", "Üzüm / şarap tarzı"], ["zero", "Narenciye kabuklu sıfır atık"]] },
        { id: "sweet", label: "Tatlılık", type: "select", value: "1", options: [["0.85", "Daha kuru (-%15 şeker)"], ["1", "Standart"], ["1.15", "Daha tatlı (+%15 şeker)"]] },
        { id: "sour", label: "Ekşilik", type: "select", value: "1", options: [["0.8", "Yumuşak (-%20 asit)"], ["1", "Standart"], ["1.25", "Keskin (+%25 asit)"]] }
      ],
      compute: function (v) {
        var P = { lime: [800, 40, 20, 0, 1], lemon: [800, 60, 0, 0, 1], apple: [700, 15, 45, 0, 1], grape: [700, 10, 10, 35, 1], zero: [850, 45, 15, 0, 1.5] }[v.style];
        var k = v.base / 1000, sw = parseFloat(v.sweet), so = parseFloat(v.sour);
        var sug = P[0] * k * sw, ci = P[1] * k * so, ma = P[2] * k * so, ta = P[3] * k * so, sa = P[4] * k;
        var tot = v.base + sug + ci + ma + ta + sa;
        var out = [
          { label: "Şeker", value: r(sug, 0), unit: "g", hl: true },
          { label: "Sitrik asit", value: r(ci), unit: "g" },
          { label: "Malik asit", value: r(ma), unit: "g" }
        ];
        if (ta) out.push({ label: "Tartarik asit", value: r(ta), unit: "g" });
        out.push({ label: "Tuz", value: r(sa), unit: "g" });
        out.push({ label: "Yaklaşık Brix", value: r(sug / tot * 100, 0), unit: "°Bx" });
        out.push({ label: "Toplam asit", value: r((ci + ma + ta) / tot * 100, 1), unit: "%" });
        return { results: out, note: "Taban sıvısındaki doğal şeker ve asit hesaba katılmadı. Meyve suyu tabanı kullanıyorsan şekeri %10–20 azaltıp tat." };
      }
    },

    superjuice: {
      title: "Super Juice",
      desc: "Kabuk ağırlığına göre asit ve su miktarı.",
      fields: [
        { id: "p", label: "Kabuk ağırlığı (g)", value: 100 },
        { id: "type", label: "Meyve", type: "select", value: "lime", options: [["lime", "Misket limonu (sitrik + malik)"], ["limec", "Misket limonu (sadece sitrik)"], ["lemon", "Limon (sitrik)"]] }
      ],
      compute: function (v) {
        var p = v.p, out;
        if (v.type === "lime") out = [{ label: "Sitrik asit", value: r(p * 0.44), unit: "g", hl: true }, { label: "Malik asit", value: r(p * 0.22), unit: "g", hl: true }];
        else if (v.type === "limec") out = [{ label: "Sitrik asit", value: r(p * 0.66), unit: "g", hl: true }];
        else out = [{ label: "Sitrik asit", value: r(p * 0.6), unit: "g", hl: true }];
        out.push({ label: "Su", value: r(p * 10, 0), unit: "g" });
        out.push({ label: "Yaklaşık verim", value: r(p * 10.6 / 1000, 2), unit: "L" });
        return { results: out, note: "Kabuk + asit 1–2 sa beklet, suyu ekle, 45–60 sn blend et, ince süz. Buzdolabında 3–5 gün." };
      }
    },

    fatwash: {
      title: "Fat-wash ölçekleme",
      desc: "Alkol hacmine göre yağ miktarı ve süreler.",
      fields: [
        { id: "vol", label: "Alkol (ml)", value: 750 },
        { id: "fat", label: "Yağ", type: "select", value: "bbutter", options: [["butter", "Tereyağı"], ["bbutter", "Kahverengi tereyağı"], ["ghee", "Ghee"], ["coco", "Hindistan cevizi yağı"], ["sesame", "Kavrulmuş susam yağı"], ["olive", "Zeytinyağı (sızma)"], ["bacon", "Pastırma yağı"], ["nut", "Fıstık / fındık ezmesi"], ["duck", "Ördek yağı"]] }
      ],
      compute: function (v) {
        var F = {
          butter: [80, "g", "2–4 sa", "8–24 sa"], bbutter: [100, "g", "2 sa", "12+ sa"], ghee: [75, "g", "2–4 sa", "8–24 sa"],
          coco: [80, "ml", "2–4 sa", "4–12 sa"], sesame: [20, "ml", "30–60 dk", "24 sa + dikkatli ayırma"], olive: [60, "ml", "1–2 sa", "12–24 sa"],
          bacon: [45, "ml", "4 sa", "8–24 sa"], nut: [125, "g", "4–6 sa", "24 sa + çift süzme"], duck: [50, "ml", "2–4 sa", "8–24 sa"]
        }[v.fat];
        var amt = F[0] * v.vol / 750;
        return { results: [
          { label: "Yağ miktarı", value: r(amt, 0), unit: F[1], hl: true },
          { label: "Oda sıcaklığında temas", value: F[2], unit: "" },
          { label: "Dondurma", value: F[3], unit: "" },
          { label: "Tahmini kayıp", value: r(v.vol * 0.06, 0), unit: "ml" }
        ], note: "Kayıp, yağ tabakasında ve filtrede kalan alkoldür (~%5–8)." };
      }
    },

    milkpunch: {
      title: "Milk punch",
      desc: "Punch hacmine göre süt miktarı ve asit kontrolü.",
      fields: [
        { id: "punch", label: "Punch hacmi (ml)", value: 925 },
        { id: "pct", label: "Süt oranı (% punch)", value: 25 },
        { id: "citrus", label: "Punch içindeki narenciye suyu (ml)", value: 75 },
        { id: "other", label: "Diğer asitli malzeme, ör. ananas (ml)", value: 250 }
      ],
      compute: function (v) {
        var milk = v.punch * v.pct / 100;
        var acidG = v.citrus * 0.06 + v.other * 0.009;
        var acidPct = v.punch ? acidG / v.punch * 100 : 0;
        var share = v.punch ? v.citrus / v.punch * 100 : 0;
        var warn = acidPct < 0.6;
        return { results: [
          { label: "Soğuk tam yağlı süt", value: r(milk, 0), unit: "ml", hl: true },
          { label: "Narenciye payı", value: r(share, 1), unit: "%" },
          { label: "Tahmini asit", value: r(acidPct, 2), unit: "%" },
          { label: "Beklenen verim", value: r(v.punch * 0.9, 0) + "–" + r(v.punch, 0), unit: "ml" }
        ], note: warn ? "Asit düşük görünüyor: pıhtı zayıf olabilir. Kesilme görülene kadar %15'lik sitrik asit çözeltisinden azar azar ekle." : "Asit yeterli görünüyor. Punch'ı yavaşça soğuk sütün içine dök ve karıştırmadan beklet.", warn: warn };
      }
    },

    hydro: {
      title: "Hidrokolloid dozları",
      desc: "Sıvı ağırlığı × yüzde = gram. 0,1 g hassasiyetli terazi kullan.",
      fields: [
        { id: "w", label: "Sıvı ağırlığı (g)", value: 500 },
        { id: "agent", label: "Uygulama", type: "select", value: "0.5|Sodyum aljinat (doğrudan küre)", options: [
          ["0.2|Agar (berraklaştırma)", "Agar · berraklaştırma %0,2"], ["0.5|Agar (yumuşak jel)", "Agar · yumuşak jel %0,5"], ["1|Agar (küp jel)", "Agar · küp jel %1"], ["1.75|Agar (jel erişte)", "Agar · erişte %1,75"],
          ["3|Jelatin (küp, 220 bloom)", "Jelatin · küp %3"], ["0.5|Sodyum aljinat (doğrudan küre)", "Sodyum aljinat · doğrudan küre %0,5"], ["0.5|Kalsiyum klorür (banyo)", "Kalsiyum klorür · banyo %0,5"],
          ["1|Kalsiyum laktat (banyo)", "Kalsiyum laktat · banyo %1"], ["2|Kalsiyum laktat (ters küre sıvısı)", "Kalsiyum laktat · ters küre sıvısı %2"], ["0.5|Sodyum aljinat (ters küre banyosu)", "Sodyum aljinat · ters banyo %0,5"],
          ["0.5|Soya lesitini (air)", "Soya lesitini · air %0,5"], ["0.2|Ksantan (kıvam)", "Ksantan · kıvam %0,2"], ["0.4|Sodyum sitrat (pH yükseltme)", "Sodyum sitrat · pH %0,4"], ["0.15|Pektinaz (Pectinex)", "Pektinaz · %0,15"]
        ] },
        { id: "pct", label: "Özel yüzde (boş bırak = öneri)", value: "" }
      ],
      compute: function (v) {
        var parts = String(v.agent).split("|");
        var pct = v.pct === "" || isNaN(v.pct) ? parseFloat(parts[0]) : v.pct;
        var g = v.w * pct / 100;
        var out = [{ label: parts[1], value: r(g, 2), unit: "g", hl: true }, { label: "Yüzde", value: r(pct, 2), unit: "%" }];
        if (parts[1].indexOf("Jelatin") === 0) out.push({ label: "Yaprak jelatin", value: r(g / 2, 1), unit: "yaprak" });
        return { results: out, note: "Yaprak jelatin ≈ 2 g. Toz aljinat ve ksantanı blender ile dağıt, sonra köpüğü inmesi için dinlendir." };
      }
    },

    lacto: {
      title: "Laktik fermentasyon tuzu",
      desc: "Tuz, toplam ağırlığın (meyve + su) yüzdesi olarak hesaplanır.",
      fields: [
        { id: "f", label: "Meyve / sebze (g)", value: 500 },
        { id: "w", label: "Eklenen su (g)", value: 0 },
        { id: "p", label: "Tuz oranı (%)", value: 2 }
      ],
      compute: function (v) {
        var tot = v.f + v.w;
        var warn = v.p < 1.5 || v.p > 5;
        return { results: [
          { label: "İyotsuz tuz", value: r(tot * v.p / 100, 1), unit: "g", hl: true },
          { label: "Toplam ağırlık", value: r(tot, 0), unit: "g" }
        ], note: warn ? "%1,5'in altı güvenlik için zayıf, %5'in üstü fermentasyonu yavaşlatır. Önerilen aralık %2–3." : "Hedef pH ≤ 3,8. 18–24 °C'de 3–7 gün; sonra buzdolabı.", warn: warn };
      }
    }
  };
})();
