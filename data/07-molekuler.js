/* Bölüm 07 — Moleküler Miksoloji ve Garnitürler (Textures & Molecular) */
HB.add({
  id: "molekuler",
  no: "07",
  title: "Moleküler Miksoloji",
  en: "Textures & Molecular",
  level: "İleri",
  lead: "Hidrokolloidler (aljinat, agar, jelatin, ksantan) ve emülgatörler (lesitin) ile sıvının formunu değiştirmek: havyar, köpük, jel, cam. Kural: her zaman ağırlıkla ve yüzde ile çalış.",
  blocks: [
    { t: "calc", h: "Hesaplayıcı: Hidrokolloid dozları", id: "hydro" },
    {
      t: "text", h: "Spherification (Küreselleştirme) kimyası",
      html: "<p><b>Sodyum aljinat</b>, kahverengi deniz yosunundan elde edilen uzun zincirli bir polisakkarittir. Kalsiyum iyonlarıyla (Ca²⁺) karşılaştığında zincirler kalsiyum köprüleriyle birbirine bağlanır ('yumurta kutusu' modeli) ve anında bir jel zar oluşur. İçi sıvı kalan bu zar, ağızda patlayan 'havyar'ı oluşturur.</p><ul><li><b>Doğrudan (basic) spherification:</b> Aljinat lezzetli sıvının içinde, kalsiyum banyoda. Hızlı, küçük havyarlar için ideal. Jelleşme içeri doğru devam eder: hemen servis edilmeli.</li><li><b>Ters (reverse) spherification:</b> Kalsiyum (kalsiyum laktat) lezzetli sıvının içinde, aljinat banyoda. Zar dışarı doğru oluşur, içerisi asla jelleşmez. Daha büyük küreler, saklanabilir ve asitli/alkollü/kalsiyumlu sıvılarla uyumlu.</li></ul>"
    },
    {
      t: "table", h: "Spherification dozları",
      cols: ["", "Doğrudan (basic)", "Ters (reverse)"],
      rows: [
        ["Lezzetli sıvıya", "%0,5–1 sodyum aljinat", "%1–2 kalsiyum laktat (veya kalsiyum laktat glukonat %2)"],
        ["Banyo", "%0,5–1 kalsiyum klorür veya %1 kalsiyum laktat (su içinde)", "%0,5 sodyum aljinat (kalsiyumsuz su içinde)"],
        ["Banyoda süre", "Havyar 30–60 sn", "Küre 2–3 dk"],
        ["Durulama", "Temiz soğuk su", "Temiz soğuk su"],
        ["Saklama", "Hemen servis (10–15 dk içinde)", "Aynı lezzetli sıvı veya hafif şurup içinde 1–2 gün"],
        ["Uygun sıvılar", "pH > 3,6, kalsiyumsuz, düşük alkol", "Asitli, alkollü, sütlü sıvılar dahil"]
      ],
      foot: "Kalsiyum klorür acı ve tuzlu bir tat bırakır; banyoda kullanılırsa küreler iyi durulanmalı. Kalsiyum laktat neredeyse tatsızdır."
    },
    {
      t: "steps", h: "Patlayan havyar (doğrudan yöntem)",
      items: [
        "<b>Aljinat çözeltisi:</b> 250 g lezzetli sıvı (örn. Campari + su 1:1, ya da meyve şurubu) + 1,25–2,5 g sodyum aljinat (%0,5–1). El blenderıyla 1–2 dk karıştır.",
        "<b>Dinlendir:</b> Hava kabarcıkları çıksın diye buzdolabında 2–12 saat beklet. Kabarcıklı damla yüzer ve şekli bozulur.",
        "<b>pH kontrolü:</b> Sıvı çok asitliyse (pH < 3,6) aljinat jelleşmez. 250 g sıvıya 0,5–1,5 g sodyum sitrat ekleyerek pH'ı yükselt.",
        "<b>Kalsiyum banyosu:</b> 500 g su + 2,5–5 g kalsiyum klorür (veya 5 g kalsiyum laktat). Çözülene kadar karıştır.",
        "<b>Damlat:</b> Şırınga, pipet veya havyar makinesi ile 10–15 cm yükseklikten banyoya damla damla bırak.",
        "<b>Bekle:</b> 30–60 sn. Delikli kaşıkla al.",
        "<b>Durula:</b> Temiz soğuk suya daldır, süzdür.",
        "<b>Servis:</b> Hemen. İçki üzerine veya kaşıkta."
      ]
    },
    {
      t: "steps", h: "Büyük küreler (ters yöntem)",
      items: [
        "<b>Aljinat banyosu:</b> 1000 g distile su (veya kalsiyumu düşük şişe suyu) + 5 g sodyum aljinat. Blenderla çek, 12–24 saat dinlendir (berraklaşsın).",
        "<b>Lezzetli sıvı:</b> 250 g sıvı + 5 g kalsiyum laktat (%2). Sıvı çok inceyse 0,5 g ksantan ekle (küre şeklini tutar).",
        "<b>Dondurma hilesi (frozen reverse):</b> Sıvıyı yarım küre silikon kalıplarda dondur. Donmuş parçaları banyoya at: kusursuz yuvarlak küreler.",
        "<b>Damlat:</b> Ölçü kaşığıyla banyonun yüzeyine yakın bırak.",
        "<b>Bekle:</b> 2–3 dk, kürelerin birbirine değmemesine dikkat et.",
        "<b>Durula ve sakla:</b> Su banyosunda durula; aynı sıvıda veya hafif şurupta sakla."
      ]
    },
    {
      t: "note", kind: "warn", h: "Su sertliği uyarısı (Almanya)",
      html: "Almanya'nın birçok bölgesinde musluk suyu sert ve kalsiyum bakımından zengindir. Aljinat banyosunu musluk suyuyla hazırlarsan banyo kendi kendine jelleşebilir ve kümeler oluşur. Ters spherification banyosu için distile su (eczane, süpermarket: 'destilliertes Wasser') veya düşük kalsiyumlu şişe suyu kullan."
    },
    {
      t: "text", h: "Soya lesitini ile havalı köpükler (air)",
      html: "<p><b>Lesitin</b>, bir ucu suyu seven (hidrofilik) diğer ucu yağı seven (lipofilik) bir fosfolipittir: doğal bir emülgatör. Sıvıya karıştırılıp yüzeyde hava çekildiğinde, lesitin molekülleri her kabarcığın etrafına dizilip yüzey gerilimini düşürür ve kabarcıkları stabilize eder. Sonuç, neredeyse ağırlıksız, birkaç dakika dayanan 'air'.</p>"
    },
    {
      t: "steps", h: "Lesitin air adım adım",
      items: [
        "<b>Taban:</b> İnce, yağsız, düşük alkollü bir sıvı (meyve suyu, çay, sulandırılmış likör). Alkol %15'i geçerse köpük zayıflar.",
        "<b>Doz:</b> Sıvı ağırlığının %0,3–1'i soya lesitini (250 g için 1–2,5 g). Toz lesitin daha kolay çözünür.",
        "<b>Kap:</b> Geniş, alçak bir kap (gastronom küvet). Sıvı derinliği 2–3 cm.",
        "<b>Köpürt:</b> El blenderını eğik tut, bıçağın yarısı yüzeyin üstünde kalsın. 1–2 dk çalıştır; hava çekilir.",
        "<b>Dinlendir:</b> 30–60 sn bekle; büyük kabarcıklar patlar, stabil köpük kalır.",
        "<b>Topla:</b> Kaşıkla en üstteki hafif köpüğü al ve içkinin üzerine koy.",
        "<b>Stabilite:</b> Daha uzun dayanım için %0,1 ksantan ekle. Gerekirse servis anında yeniden köpürt."
      ]
    },
    {
      t: "table", h: "Köpük seçenekleri",
      cols: ["Ajan", "Doz", "Doku", "Not"],
      rows: [
        ["Soya lesitini", "%0,3–1", "Çok hafif 'air', kabarcıklı", "Hızlı, vegan; kısa ömürlü"],
        ["Yumurta akı", "20–30 ml / içki", "Yoğun, kremamsı", "Dry shake gerekir; pastörize kullan"],
        ["Aquafaba (nohut suyu)", "20–30 ml / içki", "Yumurta akına yakın", "Vegan; biraz baklagil kokusu olabilir"],
        ["Quillaja (sabun ağacı) özütü", "2–4 damla / içki", "İnce, kalıcı", "Hazır 'foamer' ürünleri; dozu aşma"],
        ["Versawhip (soya proteini) + ksantan", "%0,5–1 + %0,1", "Bezeye yakın, sıkı", "Asitli ortamda iyi çalışır"],
        ["Jelatin espuma (iSi)", "%1,5–2 jelatin", "Kremamsı, sıkı", "Sıvıyı sifona doldur, 2 kartuş N2O, buzdolabında 4 sa"]
      ]
    },
    {
      t: "text", h: "Kokteyl jelleri ve yenilebilir süslemeler",
      html: "<p><b>Agar-agar</b> (deniz yosunu): 85–95 °C'de çözülür, 35–40 °C'de jelleşir, 80 °C'ye kadar erimez. Sert ve kırılgan bir jel verir; oda sıcaklığında servis edilebilir, vegan.</p><p><b>Jelatin</b> (hayvansal kolajen): 50–60 °C'de çözülür, buzdolabında 4+ saatte jelleşir, <b>vücut sıcaklığında erir</b>. Ağızda eriyen, elastik bir jel verir.</p>"
    },
    {
      t: "table", h: "Jel dozları ve karakter",
      cols: ["Hedef", "Agar", "Jelatin (220 bloom yaprak)", "Not"],
      rows: [
        ["Yumuşak, kaşıkla yenen jel", "%0,4–0,6", "%1,5–2", "Kokteyl üstü katman"],
        ["Kesilebilir küp (jelly shot)", "%0,8–1,2", "%2,5–3,5", "Agar oda sıcaklığında durur"],
        ["İnce jel tabaka / şerit", "%1–1,5", "%3", "Tepsiye 2–3 mm dök, kesici ile şekillendir"],
        ["Jel erişte (spagetti)", "%1,5–2", "—", "Şırınga ile silikon hortuma doldur, buzlu suda 1 dk soğut, hava ile it"],
        ["Yaprak jelatin ölçüsü", "—", "1 yaprak ≈ 2 g", "Soğuk suda 5 dk yumuşat, sık, ılık sıvıda çöz"]
      ]
    },
    {
      t: "tips", h: "Jel püf noktaları",
      items: [
        "<b>Asit:</b> Agarı asitli sıvıyla birlikte kaynatma; zincirler kırılır, jel zayıflar. Agarı suda kaynat, asitli sıvıyı ~60 °C'de ekle.",
        "<b>Alkol:</b> Alkolü en son, karışım 60 °C civarındayken ekle (buharlaşma azalır). Son jelde %20–25 ABV'ye kadar agar iyi tutar.",
        "<b>Enzimli meyveler:</b> Taze ananas, kivi, papaya, mango ve incir proteaz enzimleri (bromelain, aktinidin, papain) taşır ve <b>jelatini parçalar</b>. Bu meyvelerde agar kullan veya suyu önce 1–2 dk kaynat.",
        "<b>Şeffaflık:</b> Agar hafif bulanık, jelatin daha berraktır. Berrak sıvı (önceki bölüm) ile kristal jeller elde edilir.",
        "<b>Katmanlı jel:</b> Her katman yarı sertleşince (dokunuşta yapışkan) yenisini ılık olarak dök.",
        "<b>Jelly shot dozajı:</b> Küp başına alkol miktarını hesapla ve misafire bildir; jel formu alkolün hissedilmesini azaltır."
      ]
    },
    {
      t: "text", h: "İzomalt: cam gibi şeker",
      html: "<p><b>İzomalt</b>, şeker pancarından üretilen bir şeker alkolüdür (E953). Normal şekerden farkları:</p><ul><li>Çok daha az nem çeker (higroskopik değil) → yapışmaz, uzun süre cam gibi kalır.</li><li>Isıtıldığında sararmaz (karamelleşmez) → kristal şeffaflık.</li><li>Tekrar eritilebilir.</li><li>Tatlılığı şekerin ~%50'si kadardır.</li></ul><p><b>Çalışma sıcaklığı:</b> Granül izomalt ~145–150 °C'de erir; döküm için 155–165 °C idealdir. Daha yüksek ısıda sararmaya başlar. Hazır 'izomalt nibs' (önceden pişirilmiş) mikrodalgada 30 sn'lik aralıklarla eritilebilir.</p>"
    },
    {
      t: "steps", h: "İzomalt garnitür ve kadeh yapımı",
      items: [
        "<b>Güvenlik önce:</b> Erimiş izomalt 150 °C'nin üzerindedir, cilde yapışır ve ağır yanık yapar. Isıya dayanıklı silikon eldiven, uzun kollu giysi; yakında soğuk su kabı.",
        "<b>Erit:</b> Granülü kalın tabanlı tencerede, şeker termometresiyle 160 °C'ye kadar ısıt (karıştırmadan, tencereyi döndürerek). Kabarcıklar sönsün diye 1–2 dk beklet.",
        "<b>Renk / aroma:</b> İstenirse bu aşamada 1–2 damla jel renk veya yağ bazlı aroma ekle.",
        "<b>Şeffaf disk / kırık cam:</b> Silikon mat (Silpat) üzerine ince dök. Üstüne kurutulmuş çiçek veya kurutulmuş narenciye dilimi göm. Soğuyunca kır.",
        "<b>Yenilebilir kadeh / kubbe:</b> Silikon kadeh veya yarım küre kalıba dök, kalıbı yavaşça döndürerek iç yüzeyi kapla (döner döküm), fazlasını boşalt. 10–15 dk soğut, kalıptan çıkar.",
        "<b>Çubuk ve spiral:</b> 120–130 °C'ye soğuyunca kaşıkla iplik çek; yağlanmış bir çubuğa sar.",
        "<b>Sakla:</b> Hava geçirmez kapta, silika jel paketi ile. Nem en büyük düşmandır: kokteylin üzerine servis anında koy."
      ]
    },
    {
      t: "note", kind: "warn", h: "İzomalt tüketim notu",
      html: "Şeker alkolleri büyük miktarda (bir oturumda ~20–30 g üzeri) laksatif etki yapabilir. Garnitür ölçüsünde (2–5 g) sorun olmaz; tam bir yenilebilir kadeh 30–60 g olabilir, misafiri bilgilendir."
    },
    {
      t: "table", h: "Diğer modern garnitürler",
      cols: ["Teknik", "Nasıl", "Not"],
      rows: [
        ["Kurutulmuş narenciye dilimi", "2–3 mm dilim, kurutucuda 55–60 °C 8–12 sa veya fırında 70 °C 3–4 sa", "Hava geçirmez kapta haftalarca"],
        ["Meyve tozu", "Kurutulmuş meyveyi öğüt, ince elekten geçir", "Bardak kenarı ve 'toz' süslemeler"],
        ["Yenilebilir film (pullulan / şekerli film)", "Hazır yenilebilir kâğıt üzerine gıda boyasıyla baskı", "Marka logosu, mesaj"],
        ["Tütsü / duman", "Duman tabancası, odun talaşı (meşe, kiraz, elma)", "Kapalı kapta 10–20 sn yeter"],
        ["Karbonatlı meyve", "Üzüm veya narenciye dilimini iSi soda sifonunda CO2 ile 2–24 sa", "Ağızda çıtırdayan 'fizzy fruit'"],
        ["Sıkıştırılmış meyve", "Meyveyi şurup veya likörle vakum makinesinde sıkıştır", "Renk koyulaşır, doku camsı olur"]
      ],
      foot: "Sıvı azot (LN2) ile hazırlanan içkiler, içinde azot kalmışken içilirse mideyi delme riski taşır. Bar ortamında servis edilen içkide sıvı azot bulunmamalıdır."
    }
  ],
  quiz: [
    { q: "Ters (reverse) spherification'da kalsiyum nerede bulunur?", o: ["Banyoda", "Lezzetli sıvının içinde", "Hiçbir yerde", "Hem banyoda hem sıvıda"], a: 1, why: "Ters yöntemde kalsiyum laktat lezzetli sıvıda, aljinat banyodadır." },
    { q: "Doğrudan spherification'da sıvı çok asitliyse ne yapılır?", o: ["Daha fazla aljinat eklenir", "Sodyum sitrat ile pH yükseltilir", "Isıtılır", "Alkol eklenir"], a: 1, why: "Aljinat pH 3,6'nın altında jelleşmez; sodyum sitrat pH'ı yükseltir." },
    { q: "Soya lesitini köpüğü nasıl stabilize eder?", o: ["Şeker ekleyerek", "Kabarcıkların etrafına dizilip yüzey gerilimini düşürerek", "Isı ile", "Kalsiyumla bağ kurarak"], a: 1, why: "Lesitin bir emülgatördür; hava-su ara yüzeyine yerleşir." },
    { q: "Taze ananas ile neden jelatinli jel yapılamaz?", o: ["Çok tatlı olduğu için", "Bromelain enzimi jelatini parçalar", "Rengi bozar", "Asitsiz olduğu için"], a: 1, why: "Proteaz enzimleri jelatin proteinini keser; agar kullan veya suyu kaynat." },
    { q: "İzomaltın şekere göre en büyük avantajı nedir?", o: ["Daha tatlıdır", "Nem çekmez ve sararmaz", "Daha düşük ısıda erir", "Suda çözünmez"], a: 1, why: "Düşük higroskopiklik ve karamelleşmeme kristal, uzun ömürlü garnitürler sağlar." },
    { q: "Agar jeli hangi sıcaklıkta erir?", o: ["~37 °C", "~80 °C üzeri", "~10 °C", "Asla"], a: 1, why: "Agar sıcağa dayanıklıdır; ~80–85 °C'ye kadar jel kalır. Jelatin ise vücut ısısında erir." }
  ]
});
