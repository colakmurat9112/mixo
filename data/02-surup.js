/* Bölüm 02 — Şurup Yapım Sanatı (Advanced Syrups) */
HB.add({
  id: "surup",
  no: "02",
  title: "Şurup Yapım Sanatı",
  en: "Advanced Syrups",
  level: "Orta",
  lead: "Şurup, şekerin suda çözülmüş hâlinden ibaret değildir: tat taşıyıcı, doku verici ve koruyucudur. Hacimle değil ağırlıkla çalışmak ve Brix'i bilmek, her seferinde aynı şurubu yapmanın tek yoludur.",
  blocks: [
    {
      t: "text", h: "Brix nedir ve neden önemlidir?",
      html: "<p><b>Brix (°Bx)</b>, 100 g çözeltideki çözünmüş şekerin gram cinsinden miktarıdır. 50 Brix'lik bir şurubun 100 gramında 50 g şeker vardır. Ölçmek için bir <b>refraktometre</b> (0–80 °Bx aralıklı, ~20–40 €) yeterlidir.</p><ul><li><b>Tutarlılık:</b> Aynı Brix = aynı tatlılık. Mevsime göre değişen meyve tatlılığını sabitler.</li><li><b>Raf ömrü:</b> Şeker oranı arttıkça serbest su azalır (su aktivitesi düşer), mikroplar zor çoğalır.</li><li><b>Doku:</b> Yüksek Brix daha yoğun ve ipeksi bir ağız hissi verir.</li></ul>"
    },
    {
      t: "table", h: "Standart oranlar",
      cols: ["Oran (şeker : su)", "Ölçü", "Brix", "Kullanım"],
      rows: [
        ["1 : 1 (ağırlık)", "500 g şeker + 500 g su", "50", "Standart simple syrup; sour'lar"],
        ["1 : 1 (hacim)", "1 su bardağı şeker + 1 su bardağı su", "~45", "Eski tarifler; daha zayıf, kaçın"],
        ["3 : 2", "600 g şeker + 400 g su", "60", "Uzun raf ömrü + kolay dökülme"],
        ["2 : 1 (rich)", "1000 g şeker + 500 g su", "66,7", "Stir edilen içkiler (Old Fashioned), daha az dilüsyon"],
        ["Dönüşüm", "15 ml 2:1 ≈ 22 ml 1:1", "—", "Rich şurup ml başına ~1,45 kat daha fazla şeker taşır"]
      ]
    },
    {
      t: "note", kind: "science", h: "Mutlak formül: her katı malzemeyi şuruba çevirmek",
      html: "<p><b>Şeker (g) = M × (T − B) ÷ (100 − T)</b></p><p><b>M</b> = elde ettiğin tatlandırılmamış sıvının ağırlığı (g) · <b>B</b> = o sıvının mevcut Brix'i · <b>T</b> = hedef Brix.</p><p>Örnek: 600 g çilek suyu (B ≈ 8), hedef 50 Brix → 600 × (50 − 8) ÷ 50 = <b>504 g şeker</b>. Su ile yapılan demlemelerde (çay, baharat) B ≈ 0 kabul edilir ve formül 1:1 oranına döner.</p>"
    },
    { t: "calc", h: "Hesaplayıcı: Brix / şeker miktarı", id: "brix" },
    {
      t: "table", h: "Malzeme tipine göre çıkarım yöntemi",
      cols: ["Malzeme tipi", "Örnek", "Yöntem", "Sıcaklık / süre"],
      rows: [
        ["Sulu taze meyve", "Çilek, ahududu, karpuz, ananas", "Soğuk proses: blender + süz, ya da meyveyi şekerle 12–24 sa bekletip ozmozla suyunu çıkar", "Isıtma yok → taze tat"],
        ["Sert meyve", "Elma, armut, ayva", "Meyve suyu çıkar veya sous-vide", "Sous-vide 60 °C, 1–2 sa"],
        ["Kuru baharat / kök / kabuk", "Tarçın, zencefil, karanfil, meyan kökü", "Kaynatma (dekoksiyon): suda 10–20 dk kaynat, 30 dk demle, süz, tart, şeker ekle", "90–100 °C"],
        ["Çiçek / çay / hassas aromatik", "Gül, lavanta, hibiskus, Earl Grey", "Demleme (infüzyon): ocaktan alınmış suda 5–15 dk", "80–95 °C, kapak kapalı"],
        ["Taze yeşil otlar", "Fesleğen, nane, tarhun", "Haşla-şok et-blend: 10–15 sn haşla, buzlu suya at, hazır soğuk şurupla blend, süz", "Parlak yeşil renk korunur"],
        ["Kuruyemiş / tohum", "Badem, Antep fıstığı, susam, fındık", "Kavur veya haşla → suyla blend (kuruyemiş sütü) → süz → şekerle karıştır (orgeat)", "Isıtma minimum"],
        ["Kurutulmuş meyve", "Kayısı, incir, hurma", "Sıcak suda 30 dk şişir, blend, süz, sık", "80 °C"],
        ["Narenciye kabuğu", "Limon, portakal, greyfurt", "Oleo saccharum (aşağıda)", "Soğuk, 4–24 sa"],
        ["Sebze", "Pancar, havuç, salatalık, domates", "Meyve suyu sıkacağı ile suyunu çıkar, Brix ölç", "Soğuk"]
      ]
    },
    {
      t: "steps", h: "Evrensel şurup protokolü",
      items: [
        "<b>Çıkar:</b> Yukarıdaki tabloya göre malzemenin tadını suya ya da kendi suyuna geçir.",
        "<b>Süz ve tart:</b> İnce süzgeç + superbag. Sıvıyı gram olarak tart (M). Isıyla çalıştıysan buharlaşan suyu bu adımda hesaba katmış olursun.",
        "<b>Ölç:</b> Refraktometre ile Brix'i ölç (B). Yoksa tablodaki ortalamayı kullan.",
        "<b>Hedef seç:</b> Bar kullanımı için 50; raf ömrü istiyorsan 60–65 Brix.",
        "<b>Şekeri ekle:</b> Formülle hesapla. Soğuk proseste blender veya çırpıcıyla çöz; ısıtmak gerekiyorsa 60 °C'yi geçme.",
        "<b>Düzelt:</b> Gerekirse 1 L'ye 1–3 g sitrik asit (parlaklık ve koruma) ve bir tutam tuz (0,1%) ekle.",
        "<b>Şişele ve etiketle:</b> Steril şişe, ad, Brix, tarih. Buzdolabında sakla."
      ]
    },
    {
      t: "table", h: "Referans: meyve sularının yaklaşık Brix değerleri",
      cols: ["Meyve", "°Bx", "Meyve", "°Bx"],
      rows: [
        ["Çilek", "7–9", "Ananas", "12–14"],
        ["Ahududu", "9–11", "Mango", "14–16"],
        ["Karpuz", "8–10", "Nar", "15–17"],
        ["Elma", "11–13", "Vişne / kiraz", "12–16"],
        ["Portakal", "10–12", "Üzüm", "16–20"],
        ["Greyfurt", "9–11", "Çarkıfelek", "13–16"],
        ["Şeftali", "10–12", "Yaban mersini", "10–12"]
      ],
      foot: "Değerler olgunluğa ve türe göre değişir. Refraktometre en kesin sonucu verir."
    },
    {
      t: "text", h: "Oleo Saccharum (narenciye yağı çıkarma)",
      html: "<p>Latince 'yağ-şeker'. Şeker, kabuk hücrelerinden yağı ozmoz yoluyla çeker: şeker suyu sever, kabuk hücrelerindeki nemi çekerken uçucu yağlar (limonen, sitral) da dışarı çıkar ve şekerde çözünür. Sonuç, ısı kullanmadan elde edilen çok yoğun bir narenciye şurubudur. Punch'ların klasik tabanıdır.</p>"
    },
    {
      t: "formula", h: "Formül · Oleo Saccharum", r: {
        id: "f-oleo", name: "Oleo Saccharum", yield: "~200 ml",
        ing: [["100 g", "Narenciye kabuğu (sadece renkli kısım; ~5–6 limon)"], ["100 g", "İnce toz şeker (1:1 kabuk ağırlığı)"], ["50–100 g", "Taze sıkılmış narenciye suyu veya su (çözmek için)"]],
        steps: ["Kabukları Y soyucuyla beyaz kısım olmadan soy.", "Kabuk ve şekeri bir kaseye koy, tokmakla 1–2 dk ez (hücreleri kır).", "Streç filmle kapat, oda sıcaklığında 4–24 sa beklet. Şeker tamamen ıslanıp sıvı birikmeli.", "Hızlı versiyon: vakumla 1–2 sa veya sous-vide 50 °C'de 1 sa.", "Narenciye suyu ekle, şeker çözülene kadar karıştır, kabukları sıkarak süz.", "Suyla çözersen 'oleo', meyve suyuyla çözersen klasik 'sherbet' olur."],
        note: "Buzdolabında suyla çözülmüş oleo 1–2 hafta, meyve suyuyla çözülmüş sherbet 3–5 gün dayanır. Kabukların ağırlığı oranı belirler; 'kaç limon' değil 'kaç gram kabuk' diye düşün."
      }
    },
    {
      t: "text", h: "Gomme Syrup (Arap zamkı ile ipeksi şurup)",
      html: "<p>Arap zamkı (gum arabic, akasya reçinesi) bir polisakkarit hidrokolloiddir. Şuruba yoğunluk ve ipeksi bir ağız hissi verir, ayrıca rich şurubun kristalleşmesini yavaşlatır. 19. yüzyıl kokteyllerinde (Sazerac, Japanese Cocktail) standarttı. Stir edilen, yalın içkilerde fark yaratır.</p>"
    },
    {
      t: "formula", h: "Formül · Gomme Syrup", r: {
        id: "f-gomme", name: "Gomme Syrup", yield: "~650 ml",
        ing: [["60 g", "Arap zamkı tozu (gum arabic)"], ["120 g", "Sıcak su (≈ 70 °C)"], ["600 g", "Şeker"], ["300 g", "Su"]],
        steps: ["Arap zamkını sıcak suya yavaşça serperek çırp. Topaklanmaması için blender kullanabilirsin.", "Kapalı kapta 8–12 saat (ya da gece boyu) beklet; tamamen hidratlanıp berrak bir jöleye dönmeli.", "Ayrı bir tencerede 600 g şeker + 300 g suyu (2:1) ısıtarak çöz, kaynatma.", "Şurup ılıkken (~60 °C) zamk karışımını ekle ve iyice karıştır.", "Yüzeydeki köpüğü al, soğut, şişele."],
        note: "Zamk oranı son ürünün yaklaşık %7–8'idir. Daha yoğun doku için %10'a çıkabilirsin. Buzdolabında 1–2 ay."
      }
    },
    {
      t: "table", h: "Switch: şeker değiştirme ile karakter kurma",
      cols: ["Şeker türü", "Karakter", "En iyi eşleşme", "Not"],
      rows: [
        ["Beyaz şeker", "Nötr", "Her şey", "Referans"],
        ["Demerara", "Hafif karamel, melas", "Rom, burbon, Old Fashioned", "2:1 rich olarak kullan"],
        ["Muscovado (koyu)", "Yoğun melas, meyan", "Tiki, koyu rom, kahve", "Yoğun; demerarayla 1:1 karıştır"],
        ["Panela / Rapadura", "Toprak, karamel, mineral", "Cachaça, tekila, mezcal", "Blok şekli rendele"],
        ["Hindistan cevizi / palmiye şekeri", "Karamel, hafif tuzlu", "Rom, Güneydoğu Asya kokteylleri", "Daha düşük tatlılık algısı"],
        ["İnvert şeker", "Nötr, daha tatlı algı", "Raf ömrü uzun şuruplar", "Sukroz → glikoz + fruktoz; kristalleşmez"],
        ["Pekmez (üzüm)", "Kuru üzüm, ekşimsi", "Viski, brendi, sonbahar", "~70–75 Brix; şurup olarak 3:1 sulandır"]
      ],
      foot: "'Switch syrup' standart bir terim değildir. Burada aynı tarifte şeker türünü değiştirerek karakter değiştirme olarak ele alındı. Ayrıca bkz. Switchel: elma sirkesi + zencefil + bal/akçaağaç ile yapılan tarihi ekşi içecek (Cordial & Shrub bölümü ile akraba)."
    },
    {
      t: "table", h: "Bal, agave ve akçaağaç şurubu modifikasyonları",
      cols: ["Tatlandırıcı", "Ham Brix", "Bar oranı", "Neden / Not"],
      rows: [
        ["Bal", "~80–82", "3 bal : 1 su (~61 Brix) veya 1:1 (~41 Brix)", "Saf bal soğukta çözülmez, shaker'da dağılmaz. Sıcak suyla sulandır, kaynatma (aroma kaybolur)."],
        ["Bal-zencefil (Penicillin tipi)", "—", "1 bal : 1 zencefil suyu", "Taze zencefil suyu (sıkacakla) + bal; 1 hafta buzdolabı"],
        ["Agave nektarı", "~75", "2 agave : 1 su", "Fruktoz ağırlıklı, şekerden ~1,3–1,5 kat tatlı. 2:1 seyreltilmiş hali 1:1 simple yerine kullanılır."],
        ["Akçaağaç şurubu", "~66", "Doğrudan veya 3:1", "Zaten rich şurup kıvamında. 1:1 simple'ın ~2/3'ü kadar kullan. Koyu (Grade A Dark) daha karakterli."],
        ["Pekmez", "~70–75", "3 pekmez : 1 su", "Hafif asidik ve meyvemsi; tuz ile çok iyi dengelenir"],
        ["Tatlandırılmış bal infüzyonu", "—", "Bal şurubunu baharatla 60 °C'de 30 dk demle", "Örn. bal + kekik + karabiber; Bee's Knees varyasyonları"]
      ]
    },
    {
      t: "formula", h: "Formül · Antep Fıstığı Orgeat", r: {
        id: "f-orgeat", name: "Antep Fıstığı Orgeat", yield: "~600 ml",
        ing: [["200 g", "Kabuksuz, tuzsuz Antep fıstığı"], ["500 g", "Su (ılık)"], ["~400 g", "Şeker (süzülen sıvının ağırlığına eşit veya %80'i)"], ["3–5 ml", "Portakal çiçeği suyu"], ["15 ml", "Votka veya brendi (koruma, isteğe bağlı)"], ["1 tutam", "Tuz"]],
        steps: ["Fıstıkları 1 dk haşla ve kabuklarını ovarak soy (renk daha yeşil ve tat daha temiz olur). İstersen 150 °C fırında 6 dk hafif kavur.", "Fıstıkları ılık suyla blenderda 2 dk tam güçte çek.", "Oda sıcaklığında 1–2 saat beklet.", "Superbag veya tülbentle iyice sıkarak süz (kalan posa tatlılarda kullanılabilir).", "Sütü tart; aynı ağırlıkta şeker ekle (daha az tatlı için %80'i) ve ısıtmadan çöz.", "Portakal çiçeği suyu, tuz ve votkayı ekle. Şişele."],
        note: "Doğal olarak ayrışır: kullanmadan önce çalkala. Buzdolabında 2–3 hafta. Mai Tai, Japanese Cocktail ve Army & Navy'de klasik bademin yerine kullanılabilir."
      }
    },
    {
      t: "formula", h: "Formül · Parlak Yeşil Fesleğen Şurubu", r: {
        id: "f-basil", name: "Fesleğen Şurubu (haşla-şok et)", yield: "~550 ml",
        ing: [["40 g", "Taze fesleğen yaprağı (saplar olmadan)"], ["500 g", "Soğuk 1:1 şurup"], ["0,5 g", "Askorbik asit (C vitamini, isteğe bağlı, renk koruma)"]],
        steps: ["Yaprakları kaynar suda 10–15 sn haşla.", "Hemen buzlu suya at (enzimleri durdurur, klorofili sabitler).", "Sudan al, kurula.", "Soğuk şurup ve askorbik asitle blenderda 30 sn çek.", "İnce süzgeç + kahve filtresi ile süz."],
        note: "Isıtılmış şuruba ham fesleğen koyarsan kararır. Bu yöntem nane, tarhun ve kişniş için de geçerlidir. Buzdolabında 7–10 gün; buz kalıbında dondurursan 3 ay."
      }
    },
    {
      t: "tips", h: "Kristalleşmeyi önleme",
      items: [
        "<b>Kristalleşmenin nedeni:</b> Aşırı doymuş çözeltide bir 'çekirdek' (toz şeker tanesi, toz, çizik) kristal büyümesini başlatır. Rich (2:1) şuruplar özellikle risklidir.",
        "<b>İnvert et:</b> 1 kg şekere 1–2 g sitrik asit (ya da 1/2 limon suyu) ekleyip 10–15 dk düşük ateşte ısıt. Sukrozun bir kısmı glikoz + fruktoza ayrılır; bu karışım kristalleşmeyi engeller.",
        "<b>Glikoz şurubu ekle:</b> Toplam şekerin %5–10'u kadar glikoz (veya mısır şurubu) kristal yapıyı bozar.",
        "<b>Kenarları yıka:</b> Isıtırken tencere çeperinde kalan şeker kristallerini ıslak fırçayla yıka.",
        "<b>Çözündükten sonra karıştırma:</b> Kaynama sırasında karıştırmak çekirdek oluşturur.",
        "<b>Temiz şişe:</b> Eski şurup kalıntısı yeni kristallerin çekirdeğidir. Şişeleri her seferinde yıka.",
        "<b>Arap zamkı:</b> Gomme syrup kristalleşmeye karşı doğal bir korumadır."
      ]
    },
    {
      t: "table", h: "Raf ömrünü uzatma",
      cols: ["Teknik", "Etki", "Doz / Not"],
      rows: [
        ["Brix artırma", "Su aktivitesi düşer", "50 Brix ~2–4 hafta · 66 Brix ~1–3 ay (buzdolabı)"],
        ["Sıcak doldurma", "Şişe ve tepe boşluğu sterilize olur", "80 °C'nin üstündeki şurubu kaynatılmış şişeye doldur, kapağı kapat, ters çevir"],
        ["Asitlendirme", "pH düşer, bakteri zorlaşır", "1 L'ye 1–3 g sitrik asit"],
        ["Alkol ekleme", "Hafif koruma", "500 ml şuruba 15–30 ml votka (tek başına yetmez, destekleyicidir)"],
        ["Potasyum sorbat", "Maya ve küf önler", "1 g/kg'a kadar (%0,1). AB'de E202 olarak izinli; ticari kullanımda etiketle."],
        ["Sodyum benzoat", "Asidik ürünlerde etkili (pH < 4,5)", "En fazla 1 g/kg (%0,1), E211. Askorbik asitle birlikte kullanma."],
        ["Dondurma", "Pratik olarak sınırsız", "Buz kalıbına porsiyonla, vakumlu poşette sakla"]
      ],
      foot: "Bulanıklık, köpük, ekşi ya da maya kokusu, kapakta basınç: şurubu dök. Meyve şurupları her zaman sade şuruplardan daha kısa ömürlüdür (7–14 gün)."
    }
  ],
  quiz: [
    { q: "500 g şeker + 500 g sudan yapılan şurubun Brix değeri nedir?", o: ["33", "50", "66,7", "100"], a: 1, why: "100 g çözeltide 50 g şeker vardır, yani 50 °Bx." },
    { q: "400 g suyu (B = 0) 50 Brix'e çıkarmak için ne kadar şeker gerekir?", o: ["200 g", "400 g", "800 g", "50 g"], a: 1, why: "400 × (50 − 0) ÷ (100 − 50) = 400 g." },
    { q: "Oleo saccharum hangi prensiple çalışır?", o: ["Isıyla buharlaştırma", "Şekerin ozmozla kabuktan yağ ve nem çekmesi", "Fermentasyon", "Asitle çökertme"], a: 1, why: "Şeker higroskopiktir; kabuk hücrelerinden nemle birlikte uçucu yağları çeker." },
    { q: "Gomme syrup'a ipeksi dokuyu veren malzeme hangisidir?", o: ["Jelatin", "Arap zamkı", "Ksantan", "Yumurta akı"], a: 1, why: "Arap zamkı (akasya reçinesi) bir polisakkarittir, gövde ve ipeksi his verir." },
    { q: "Taze fesleğen şurubunun yeşil kalması için ne yapılır?", o: ["Kaynar şurupta pişirmek", "10–15 sn haşlayıp buzlu suda şoklamak", "Sirke eklemek", "Güneşte bekletmek"], a: 1, why: "Haşlama enzimleri durdurur, şok klorofili sabitler." },
    { q: "Şurupta kristalleşmeyi önlemenin kimyasal yolu hangisidir?", o: ["Daha fazla şeker eklemek", "Şekeri asitle kısmen invert etmek", "Buzdolabında tutmak", "Karıştırmayı artırmak"], a: 1, why: "İnvert şeker (glikoz + fruktoz) sukroz kristallerinin dizilmesini engeller." }
  ]
});
