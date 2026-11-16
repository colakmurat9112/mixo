/* Bölüm 04 — Bitter ve Tentür Yapımı (Bitters & Tinctures) */
HB.add({
  id: "bitter",
  no: "04",
  title: "Bitter & Tentür",
  en: "Bitters & Tinctures",
  level: "Orta → İleri",
  lead: "Bitter, kokteylin 'baharatı'dır: birkaç damla, tatlıyı ve ekşiyi birbirine bağlar. Yüksek dereceli alkolde çıkarılan acı ajanlar (gövde) ve aromatik ajanlar (karakter) dengeli bir oranda birleştirilir.",
  blocks: [
    {
      t: "text", h: "Bitter ile tentür arasındaki fark",
      html: "<ul><li><b>Tentür (tincture):</b> Tek bir malzemenin yüksek dereceli alkoldeki özütü. Örneğin sadece kakule tentürü. Bir yapı taşıdır.</li><li><b>Bitter:</b> En az bir acı ajan + aromatik ajanlardan oluşan, dengelenmiş karışım. Birkaç tentürün harmanı olabilir.</li></ul><p>Profesyonel yaklaşım: her malzemeyi ayrı tentür olarak hazırlayıp sonra mililitre ile harmanlamak. Böylece her tentür kendi ideal süresinde çıkarılır ve tarif tekrarlanabilir olur.</p>"
    },
    {
      t: "table", h: "Acılık verici ajanlar (bittering agents)",
      cols: ["Ajan", "Acılık / karakter", "Kullanım oranı", "Not"],
      rows: [
        ["Gentiyan kökü (gentian root)", "Çok acı, topraksı, hafif tatlımsı son", "Botanik karışımın %10–20'si", "En yaygın ve en güvenli acı ajan. Angostura, Aperol, Suze tabanı."],
        ["Kuassia kabuğu (quassia bark)", "Aşırı acı, temiz, aromasız", "%2–5", "Bilinen en acı doğal maddelerden biri. Aroma eklemeden acılık verir."],
        ["Pelin otu (wormwood)", "Acı, otsu, kafurlu", "%1–3", "Tujon içerir. Az kullan; AB'de tujon limiti: Artemisia'dan üretilen alkollü içkilerde 35 mg/kg, diğerlerinde 10 mg/kg. Hamilelerde kaçın."],
        ["Kına kına kabuğu (cinchona)", "Acı, kuru, tanenli", "%2–5", "Kinin kaynağı. Yüksek dozda sağlık riski (kalp ritmi, alerji). Az kullan ve damla ile servis et."],
        ["Melek otu kökü (angelica root)", "Hafif acı, misk, toprak", "%5–10", "Cinin de temel botaniği; acı ile aromatik arasında köprü."],
        ["Enginar yaprağı (cynara)", "Bitkisel acı, tatlımsı son", "%5–10", "Cynar ve amaro profili."],
        ["Karahindiba kökü (dandelion)", "Hafif acı, kahvemsi", "%5–10", "Kavrulursa kahve tadı verir."],
        ["Acı portakal kabuğu (Seville)", "Acı + narenciye", "%10–20", "Hem acı hem aromatik; turuncu bitterlerin tabanı."],
        ["Dulavratotu kökü (burdock)", "Hafif acı, toprak", "%5–10", "Topraksı bitterler için."]
      ],
      foot: "Kaçınılacaklar: Calamus (β-asaron, birçok ülkede gıdada yasak), tonka fasulyesi yüksek doz (kumarin), tansy. Botanikleri gıda sınıfı tedarikçiden al (Almanya: Apotheke, Kräuterhaus, gıda sertifikalı online satıcılar)."
    },
    {
      t: "table", h: "Aromatik ajanlar",
      cols: ["Aile", "Örnekler", "Çıkarım süresi (tek tentür)"],
      rows: [
        ["Sıcak baharatlar", "Tarçın, karanfil, yenibahar, muskat, yıldız anason", "5–10 gün"],
        ["Ferah baharatlar", "Kakule, kişniş, karabiber, pembe biber, zencefil", "3–7 gün"],
        ["Narenciye (kurutulmuş kabuk)", "Portakal, limon, greyfurt, bergamot", "3–5 gün"],
        ["Kavrulmuş", "Kahve, kakao çekirdeği, kavrulmuş fındık", "1–3 gün (kahve 24–48 sa)"],
        ["Çiçekler", "Gül, lavanta, papatya, ıhlamur", "1–3 gün"],
        ["Otlar", "Adaçayı, biberiye, kekik, nane", "1–3 gün"],
        ["Tatlı/yuvarlak", "Vanilya, meyan kökü, kuru meyve", "7–14 gün"],
        ["Kök ve kabuklar", "Gentiyan, kuassia, kına kına", "10–14 gün"]
      ]
    },
    {
      t: "text", h: "Maserasyon ve perkolasyon",
      html: "<p><b>Maserasyon (bekletme):</b> Botanikler alkolde 1–3 hafta bekletilir, günde bir kez çalkalanır. Basit, ekipmansız ve affedicidir. Dezavantaj: çözücü zamanla doygunlaşır, çıkarım yavaşlar.</p><p><b>Perkolasyon:</b> Öğütülmüş botanikler bir kolona (perkolatör, ters şişe veya filtreli huni) sıkıca yerleştirilir; alkol yukarıdan yavaşça damlar ve her zaman 'taze' çözücü malzemeyle temas eder. Sonuç: saatler içinde daha yoğun ve tam bir çıkarım.</p>"
    },
    {
      t: "table", h: "Karşılaştırma",
      cols: ["", "Maserasyon", "Perkolasyon"],
      rows: [
        ["Süre", "7–21 gün", "6–24 saat"],
        ["Öğütme", "İri kırık", "Orta-ince öğütülmüş (kahve çekirdeği kalınlığı)"],
        ["Verim", "Orta; posada alkol kalır", "Yüksek"],
        ["Ekipman", "Kavanoz", "Perkolatör / huni + filtre + musluk veya kelepçe"],
        ["Hata payı", "Düşük", "Orta; çok sıkı ya da gevşek doldurma sorun çıkarır"],
        ["En iyi", "Ev, başlangıç, karışık tarifler", "Seri üretim, sert kök ve kabuklar"]
      ]
    },
    {
      t: "steps", h: "Perkolasyon adımları",
      items: [
        "Botanikleri orta-ince öğüt. Çok ince olursa akış tıkanır.",
        "<b>Islatma (imbibition):</b> Öğütülmüş malzemeyi alkolün ~%30'u ile nemlendir, kapalı kapta 1–2 saat beklet. Malzeme şişer; kolonda kanal oluşmasını önler.",
        "Kolonun dibine filtre (kahve filtresi + pamuk) yerleştir, nemli malzemeyi kat kat bastırarak doldur. Üstüne bir filtre kâğıdı daha koy.",
        "Alkolü yavaşça üstten ekle; malzemenin üzerinde 1–2 cm sıvı kalsın.",
        "Musluğu aç ve akışı dakikada yaklaşık 1–2 ml'ye (saniyede 1 damla) ayarla.",
        "Toplanan perkolatı tat; renk açılıp tat zayıflayana kadar devam et.",
        "Kalan posayı istersen suyla kaynatıp (aşağıdaki su ekstraksiyonu) ayrıca değerlendir."
      ]
    },
    {
      t: "table", h: "Alkol derecesi seçimi",
      cols: ["ABV", "Ne çeker?", "Kullanım"],
      rows: [
        ["%40–50", "Suda çözünen acılık, tanen, şeker", "Kök, kabuk, kuru meyve"],
        ["%55–65", "Dengeli; çoğu bitter için ideal", "Genel bitter tabanı"],
        ["%70–95", "Uçucu yağlar, reçineler, apolar aromalar", "Narenciye yağları, reçineler, vanilya, taze otlar (renk sabit kalır)"]
      ],
      foot: "Almanya'da 96° 'Primasprit' (Weingeist) süpermarket ve eczanede bulunur. Votkayla sulandırarak hedef dereceyi ayarla. Yüksek dereceli alkol yanıcıdır: ateş ve sıcak ocaktan uzak tut."
    },
    {
      t: "steps", h: "Ev yapımı aromatik bitter: altın oranlar",
      items: [
        "<b>Altın oran 1 – Kütle:</b> Toplam kuru botanik ağırlığı, alkol hacminin ~%8–10'u (500 ml için 40–50 g).",
        "<b>Altın oran 2 – Denge:</b> Ağırlıkça <b>%25 acı ajan / %75 aromatik</b>. Daha 'amaro' bir sonuç için %35'e çıkar.",
        "<b>Altın oran 3 – Alkol:</b> Maserasyonda %55–65 ABV.",
        "<b>Maserasyon:</b> Hepsini kavanoza koy, 14 gün karanlıkta beklet, günde bir kez çalkala. Hassas aromatikleri (çiçek, kahve) ayrı tentür yap ve sonradan harmanla.",
        "<b>Süz:</b> Kaba süzgeç + tülbent. Sıvıyı ayır (A).",
        "<b>Su ekstraksiyonu:</b> Posayı 250 ml suyla 10 dk kaynat, kapalı kapta soğut, süz (B). Suda çözünen tat ve renkleri alır, sonuçta dereceyi düşürür.",
        "<b>Birleştir:</b> A + B. Bulanıklık normaldir.",
        "<b>Tatlandır ve doku ver:</b> 1–2 yk zengin demerara şurubu veya yanık şeker (karamel) ekle; acılığı yuvarlar ve 'yapışkan' bir doku verir.",
        "<b>Dinlendir:</b> 3–5 gün beklet, tortu çöksün, kahve filtresinden geçir. Son ABV ~%40–45 olmalı.",
        "<b>Şişele:</b> Koyu cam damlalık veya dash şişesi. Alkol sayesinde yıllarca dayanır."
      ]
    },
    {
      t: "formula", h: "Formül · Ev Yapımı Aromatik Bitter", r: {
        id: "f-aromatic-bitters", name: "Ev Yapımı Aromatik Bitter", yield: "~600 ml",
        ing: [["500 ml", "%60 ABV alkol (örn. 180 ml %96 + 320 ml %40 votka)"], ["8 g", "Gentiyan kökü (kıyılmış)"], ["2 g", "Kuassia kabuğu"], ["1 g", "Pelin otu (isteğe bağlı)"], ["10 g", "Kurutulmuş portakal kabuğu"], ["6 g", "Tarçın (1–2 çubuk, kırık)"], ["6 g", "Yeşil kakule (ezik)"], ["3 g", "Yenibahar"], ["3 g", "Karabiber"], ["1 g", "Karanfil (3–4 adet)"], ["2 g", "Yıldız anason (1 adet)"], ["1/2", "Vanilya çubuğu"], ["250 ml", "Su (ekstraksiyon için)"], ["15–30 ml", "Zengin demerara şurubu veya karamel"]],
        steps: ["Tüm botanikleri havanda iri kır.", "Alkolle kavanozda karıştır, 14 gün karanlık yerde beklet, günde bir kez çalkala.", "7. günden sonra her 2–3 günde bir tat; acılık çok baskınsa kökleri çıkarabilirsin.", "Süz; alkolü ayır.", "Posayı suyla 10 dk kaynat, soğut, süz; alkolle birleştir.", "Şurup ekle, 5 gün dinlendir, kahve filtresinden geçir ve şişele."],
        note: "Acı oranı: 11 g acı / 32,5 g aromatik ≈ 25:75. Kendi tarifinde bu oranı koru ve aromatikleri değiştir."
      }
    },
    {
      t: "formula", h: "Trend tarif · Kahve & Kakule Bitter", r: {
        id: "f-coffee-cardamom-bitters", name: "Kahve & Kakule Bitter", yield: "~280 ml",
        ing: [["Tentür A — Acı taban", ""], ["150 ml", "%60 ABV alkol"], ["6 g", "Gentiyan kökü"], ["1 g", "Kuassia kabuğu"], ["5 g", "Kurutulmuş portakal kabuğu"], ["Tentür B — Kakule", ""], ["60 ml", "%60 ABV alkol"], ["10 g", "Yeşil kakule (ezik)"], ["Tentür C — Kahve", ""], ["60 ml", "%60 ABV alkol"], ["40 g", "Koyu kavrulmuş kahve çekirdeği (iri kırık)"], ["3 g", "Kakao çekirdeği"], ["1/4", "Vanilya çubuğu"], ["Bitirme", ""], ["10–15 ml", "Zengin demerara şurubu"]],
        steps: ["Üç tentürü ayrı kavanozlarda hazırla.", "A: 14 gün; B: 5–7 gün; C: 24–48 saat (kahve fazla beklerse buruklaşır). Her birini süz.", "Harmanlama: başlangıç oranı A 2 : B 1 : C 1. 10 ml'lik küçük harmanlar yapıp suyla seyrelterek (1:10) tat.", "Beğendiğin oranı tam miktarda karıştır, şurubu ekle.", "3–5 gün dinlendir, kahve filtresinden geçir, dash şişesine doldur."],
        note: "Kakule baskın gelirse B'yi azalt; kahve çok kavrulmuş geliyorsa C'ye 1–2 damla portakal tentürü ekle. Tentürleri ayrı tutmak, gelecekte oranı tekrar ayarlamanı sağlar."
      }
    },
    {
      t: "recipe", h: "Old Fashioned varyasyonu", r: {
        id: "r-coffee-cardamom-of", name: "Kahve & Kakule Old Fashioned", en: "Coffee & Cardamom Old Fashioned", base: "Burbon / Rye",
        glass: "Rocks (double old fashioned)", method: "Stir (30 sn)", ice: "Büyük şeffaf blok",
        ing: [["60 ml", "Burbon (veya %50 rye)"], ["7,5 ml", "2:1 demerara şurubu"], ["3 dash", "Kahve & kakule bitter"], ["1 dash", "Portakal bitter (isteğe bağlı)"]],
        steps: ["Mixing glass'a malzemeleri koy.", "Buzla 30 sn karıştır.", "Büyük buz bloğu olan bardağa süz.", "Portakal kabuğunu içkinin üzerinde sık, kenara sür, garnitür olarak bırak."],
        garnish: "Portakal kabuğu + ezilmiş 1 kakule tanesi buzun üzerinde", note: "Daha yoğun kahve için şurubu kahve şurubuyla (1 soğuk demleme kahve : 1 şeker) değiştirebilirsin. Fat-wash bölümündeki kahverengi tereyağlı burbon ile de çok iyi uyum sağlar."
      }
    },
    {
      t: "tips", h: "Bitter püf noktaları",
      items: [
        "<b>Tadım:</b> Bitteri asla düz tatma. 1 dash'ı 30 ml soda veya suya damlat; kokteyldeki etkisini daha doğru gösterir.",
        "<b>Kayıt tut:</b> Her tentürün tarih, ağırlık, ABV ve süresini not et. Harmanlama oranını ml olarak kaydet.",
        "<b>Kurutulmuş kabuk:</b> Taze kabuk su getirir ve dereceyi düşürür. Kabukları fırında 60–70 °C'de 1–2 saat kurut.",
        "<b>Renk:</b> Daha koyu bir bitter için karamel (yanık şeker) veya kurutulmuş vişne ekle.",
        "<b>Hızlı tentür:</b> iSi sifonda 2 kartuşla 5–10 dk; ön deneme için iyidir ama derinlik maserasyondan az olur.",
        "<b>Dozaj:</b> 1 dash ≈ 0,8–1 ml. Damlalıkla 1 ml ≈ 20 damla."
      ]
    }
  ],
  quiz: [
    { q: "Bitter ve tentür arasındaki temel fark nedir?", o: ["Tentür tek malzemedir; bitter acı + aromatik karışımıdır", "Bitter alkolsüzdür", "Tentür tatlıdır", "Fark yoktur"], a: 0, why: "Tentür bir yapı taşıdır; bitter bunların dengelenmiş harmanıdır." },
    { q: "En temiz, aromasız acılığı veren ajan hangisidir?", o: ["Gentiyan", "Kuassia kabuğu", "Tarçın", "Vanilya"], a: 1, why: "Kuassia çok acıdır ve neredeyse hiç aroma eklemez." },
    { q: "Perkolasyonun maserasyona göre avantajı nedir?", o: ["Daha az alkol kullanır", "Taze çözücü sürekli temas ettiği için daha hızlı ve tam çıkarım", "Ekipman gerektirmez", "Daha tatlıdır"], a: 1, why: "Çözücü doygunlaşmaz; saatler içinde yüksek verim alınır." },
    { q: "Altın oranda acı ve aromatik ajanların ağırlıkça dengesi nedir?", o: ["%75 acı / %25 aromatik", "%25 acı / %75 aromatik", "%50 / %50", "%5 / %95"], a: 1, why: "Yaklaşık %25 acı gövde, %75 aromatik karakter dengeli bir bitter verir." },
    { q: "Kahve tentürü neden kısa (24–48 sa) tutulur?", o: ["Renk kaybolur", "Fazla beklerse buruk ve acı bileşikler çıkar", "Alkol uçar", "Kafein kaybolur"], a: 1, why: "Kahve hızlı çıkar; uzun bekleme tanen ve aşırı acılık getirir." },
    { q: "Su ekstraksiyonu adımı ne işe yarar?", o: ["Şeker eklemek", "Posadaki suda çözünen tat ve renkleri almak", "Alkolü artırmak", "Köpük yapmak"], a: 1, why: "Bazı bileşikler suda daha iyi çözünür; posa kaynatılarak bunlar da alınır." }
  ]
});
