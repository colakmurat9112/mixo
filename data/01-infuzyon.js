/* Bölüm 01 — Alkol İnfüzyonları (Mastering Infusions)
   Yöntem kodları: oda = oda sıcaklığı maserasyon · buz = soğuk (buzdolabı) · ilik = ılık su banyosu
                   sv = sous-vide · isi = iSi sifon hızlı infüzyon (N2O)
   Tüm miktarlar 750 ml şişe içindir. */
HB.add({
  id: "infuzyon",
  no: "01",
  title: "Alkol İnfüzyonları",
  en: "Mastering Infusions",
  level: "Başlangıç → Orta",
  lead: "Etanol hem polar (suda çözünen) hem apolar (yağda çözünen) aroma bileşiklerini çözebilen bir çözücüdür. İnfüzyon, bu çözücüye hangi bileşiği, ne hızda ve ne kadar çektirdiğini kontrol etme sanatıdır.",
  blocks: [
    {
      t: "text", h: "İnfüzyonun kimyası",
      html: "<p>Bir malzemeden alkole geçen şey; uçucu aroma bileşikleri (terpenler, esterler, aldehitler), renk pigmentleri (antosiyaninler, klorofil), acı ve buruk bileşikler (tanenler, alkaloidler) ve şekerlerdir. Bunların her biri farklı hızda çözünür:</p><ul><li><b>Hızlı çıkanlar (dakikalar–saatler):</b> narenciye kabuğundaki limonen, taze otların uçucu yağları, acı biberdeki kapsaisin, çay ve kahve aromaları.</li><li><b>Yavaş çıkanlar (günler):</b> kuru meyve şekerleri, vanilin, kuruyemiş yağları, kök ve kabuklar.</li><li><b>İstenmeyen ama sonradan çıkanlar:</b> tanenler, klorofil, narenciyenin beyaz kısmındaki (albedo) acı flavonoidler (naringin), otların sap kısımları.</li></ul><p>Bu yüzden altın kural: <b>Hızlı çıkanı erken çıkar, yavaş çıkanı uzun beklet.</b> Karışık infüzyonlarda malzemeleri farklı zamanlarda ekle veya çıkar.</p>"
    },
    {
      t: "table", h: "Değişkenler ve etkileri",
      cols: ["Değişken", "Artınca ne olur?", "Pratik kural"],
      rows: [
        ["Alkol derecesi", "Apolar bileşikler (yağlar, reçineler) daha iyi çözünür", "%40–50 ABV ideal. Reçineli malzemelerde (sakız, vanilya) daha yüksek derece daha hızlıdır."],
        ["Yüzey alanı", "Çıkarım hızlanır", "Baharatları kır, meyveyi dilimle. Toz haline getirme: süzmesi zor ve bulanık olur."],
        ["Sıcaklık", "Hız artar ama pişmiş/reçel notaları ve acılık da artar", "Taze meyve ve otlarda soğuk/oda; kök, kabuk ve baharatlarda ılık ya da sous-vide."],
        ["Süre", "Önce aroma, sonra acılık ve burukluk", "Her 2–6 saatte bir tat. Doğru noktada süz."],
        ["Çalkalama", "Konsantrasyon farkını yeniler, hızlandırır", "Günde 1–2 kez kavanozu çalkala."],
        ["Basınç (iSi)", "Gözeneklere sıvı itilir, dakikalar içinde çıkarım", "Kısa süre = taze, temiz aroma; tanen çıkmaz."]
      ]
    },
    {
      t: "table", h: "Yöntem karşılaştırması: süre ve dereceler",
      cols: ["Yöntem", "Sıcaklık", "Tipik süre", "En uygun", "Dikkat"],
      rows: [
        ["Oda sıcaklığı maserasyon", "18–22 °C", "Otlar 30 dk–8 sa · narenciye kabuğu 24–48 sa · meyve 2–5 gün · kuru meyve/kuruyemiş 3–7 gün", "Çoğu malzeme", "Güneş ışığından uzak, cam kavanoz"],
        ["Soğuk infüzyon", "2–6 °C", "Oda süresinin 2–3 katı", "Taze meyve, çiçekler, çay", "Daha temiz, daha az tanen; yavaş"],
        ["Ilık su banyosu", "45–55 °C", "30 dk–3 sa", "Baharat, kök, kabuk, kuru malzeme", "Kavanoz kapağı hafif kapalı, alkol kaybını önle"],
        ["Sous-vide", "Meyve 55–60 °C · baharat ve kök 60–65 °C", "1–3 sa", "Elma, armut, ayva, vanilya, kahve", "70 °C üstüne çıkma. Etanol buharı poşeti şişirir. Cam kavanoz (parmak sıkılığında kapak) kullan. Açmadan önce buzlu suda soğut."],
        ["iSi sifon (N2O)", "Oda ya da soğuk", "1–5 dk", "Otlar, kakao, kahve, biber, çay", "Maks. dolum çizgisine uy; hızlı tahliye şart"]
      ]
    },
    {
      t: "steps", h: "iSi Rapid Infusion: adım adım",
      items: [
        "Katı malzemeyi sifon şişesine koy, ardından alkolü ekle. Toplam miktar maksimum dolum çizgisini geçmesin (0,5 L sifonda en fazla 500 ml).",
        "Kapağı kapat, 1 adet N2O kartuşu tak (1 L sifonda 2 kartuş). Hassas otlarda tek kartuş yeterli.",
        "30 sn çalkala. Toplam bekleme süresi (çalkalama dahil) 1–2 dk. Kakao ve kahvede 1,5–3 dk, sert baharatlarda 3–5 dk.",
        "Şişeyi dik tut, nozulu bir bardağa çevir ve gazı <b>hızlıca</b> boşalt. Ani basınç düşüşü, gözeneklerdeki sıvının kaynamasını sağlar ve aromayı dışarı taşır.",
        "Kapağı aç ve kabarcıklanmanın bitmesini bekle (1–2 dk). Kabarcıklar sürerken süzersen aroma hâlâ malzemenin içindedir.",
        "İnce süzgeç veya superbag ile süz. Tadı zayıfsa aynı malzemeyle işlemi tekrarla."
      ]
    },
    {
      t: "tips", h: "İnfüzyon püf noktaları",
      items: [
        "<b>Narenciye kabuğu:</b> Sadece renkli kısmı (flavedo) kullan. Beyaz kısım (albedo) 24 saatten sonra acılık verir. Y soyucu kullan.",
        "<b>Acı biber:</b> 15 dk'da bir tat. Jalapeño 20–60 dk, habanero 5–15 dk. Çekirdek ve damarlar acılığın çoğunu taşır; az acı istiyorsan çıkar.",
        "<b>Taze otlar:</b> Fesleğen ve nane 30 dk–2 sa'ten sonra otsu ve acı bir tada döner. Biberiye ve kekik 6–8 saate kadar dayanır.",
        "<b>Çay:</b> 750 ml'ye 8–12 g kuru çay, oda sıcaklığında 1–2 sa. Uzarsa tanen ve burukluk artar.",
        "<b>Meyve:</b> Sulu meyve alkolün derecesini düşürür ve suyunu verir. Kurutulmuş meyve konsantre tat ve şeker verir.",
        "<b>Kombinasyonlarda:</b> Ana tatlı/meyve malzemeyi uzun beklet, hassas otu son 1–2 saatte ekle.",
        "<b>Süzme sırası:</b> Kaba süzgeç → superbag/tülbent → kahve filtresi. Bastırma, tortu bulanıklık yapar.",
        "<b>Raf ömrü:</b> Süzülmüş infüzyonu koyu renkli cam şişede, serin yerde tut. Meyve infüzyonları renk kaybı yaşar: 3–6 ay içinde tüket. Etiketle: malzeme, tarih, süre.",
        "<b>Oran başlangıcı:</b> 750 ml için otlarda 10–20 g, kabuklarda 1–2 meyve, taze meyvede 200–400 g, baharatlarda 5–15 g, kuru meyvede 100–200 g."
      ]
    },
    {
      t: "pairings", h: "Votka · 20 eşleşme", spirit: "Votka",
      intro: "Nötr bir tuval. Votka aromayı 'taşır' ama üstünü örtmez; bu yüzden hassas, temiz ve meyveli eşleşmeler en net sonucu verir.",
      items: [
        { n: "Vanilya & Portakal Kabuğu", q: "2 vanilya çubuğu (yarılmış) + 1 portakal kabuğu", m: "oda", t: "Kabuk 24 sa (çıkar), vanilya 3–5 gün", alt: "Sous-vide 60 °C, 2 sa", why: "Vanilin ve limonen birbirini yumuşatır; tatlımsı ama şekersiz bir gövde verir." },
        { n: "Salatalık & Dereotu", q: "1 büyük salatalık (dilimli, kabuklu) + 5 g dereotu", m: "oda", t: "Dereotu 1–2 sa, salatalık 12–24 sa", alt: "iSi: 1 kartuş, 2 dk", why: "Salatalığın yeşil aldehitleri (nonadienal) ile dereotundaki karvon taze, serin bir profil oluşturur." },
        { n: "Çilek & Fesleğen", q: "300 g çilek (ikiye kesilmiş) + 10 fesleğen yaprağı", m: "oda", t: "Fesleğen 1–2 sa, çilek 2–3 gün", alt: "Soğuk infüzyon 4–5 gün", why: "Fesleğendeki linalool çileğin çiçeksi esterleriyle örtüşür." },
        { n: "Espresso Çekirdeği & Kakao Çekirdeği", q: "50 g iri çekilmiş kahve + 25 g kakao çekirdeği (nibs)", m: "isi", t: "iSi 1,5–2 dk (2 kartuş/1 L)", alt: "Oda: kahve 18–24 sa", why: "Kavrulmadan gelen pirazinler her ikisinde de ortak; Espresso Martini için ideal." },
        { n: "Limon Otu & Zencefil", q: "3 sap limon otu (ezilmiş) + 30 g zencefil (dilimli)", m: "sv", t: "Sous-vide 60 °C, 1,5 sa", alt: "Oda 24–48 sa", why: "Her ikisi de sitral taşır; zencefildeki gingerol sıcaklık ekler." },
        { n: "Jalapeño & Kişniş", q: "1 jalapeño (dilimli) + 1 küçük demet kişniş", m: "oda", t: "Jalapeño 30–60 dk, kişniş 1 sa", alt: "iSi 1 dk", why: "Jalapeño'nun yeşil biber pirazini ile kişnişin aldehitleri 'yeşil' bir eksende buluşur." },
        { n: "Ahududu & Gül", q: "200 g ahududu + 2 yk kurutulmuş gül yaprağı", m: "oda", t: "Gül 4–6 sa, ahududu 2–3 gün", alt: "Soğuk 4 gün", why: "Ahudududaki iyononlar ve gülün geraniol/feniletanolü çiçeksi-meyveli bir uyum kurar." },
        { n: "Armut & Tarçın", q: "2 olgun armut (dilimli) + 1 çubuk tarçın", m: "oda", t: "Tarçın 24 sa, armut 3–5 gün", alt: "Sous-vide 57 °C, 2 sa", why: "Armut esterleri tarçındaki sinnamaldehitle sonbahar profiline döner." },
        { n: "Vişne & Tarçın", q: "250 g çekirdeksiz vişne + 1 çubuk tarçın", m: "oda", t: "4–6 gün (tarçın 2. gün çıkar)", alt: "Sous-vide 58 °C, 2 sa", why: "Vişnenin benzaldehit (badem) notası ve asiditesi tarçınla dengelenir. Ev yapımı vişne likörünün kuru versiyonu." },
        { n: "Earl Grey", q: "10 g Earl Grey çayı", m: "oda", t: "1–2 sa", alt: "iSi 2 dk", why: "Bergamot yağındaki linalool ve linalil asetat votkayı parfümlü ve kuru yapar." },
        { n: "Bayır Turpu & Karabiber", q: "30 g taze rendelenmiş bayır turpu (horseradish) + 10 g karabiber tanesi", m: "oda", t: "Bayır turpu 6–12 sa, karabiber 24 sa", alt: "—", why: "İzotiyosiyanatlar (keskinlik) + rotundon (karabiber). Bloody Mary bazı." },
        { n: "Karpuz & Nane", q: "400 g karpuz (küp) + 6–8 nane yaprağı", m: "buz", t: "Nane 1 sa, karpuz 24–36 sa", alt: "iSi (sadece nane) 1 dk", why: "Karpuzun sulu, hafif aldehitleri mentolün serinliğiyle güçlenir. Votka derecesi düşer: buzdolabında sakla." },
        { n: "Yaban Mersini & Lavanta", q: "200 g yaban mersini (hafif ezilmiş) + 1 çk lavanta", m: "oda", t: "Lavanta 2–4 sa (fazlası sabun tadı), mersin 3 gün", alt: "—", why: "Lavantadaki linalool az kullanıldığında meyveyi 'parfümler', fazlası sabunsu olur." },
        { n: "Közlenmiş Kırmızı Biber & Füme Paprika", q: "1 közlenmiş kırmızı biber (kabuksuz) + 1 çk füme paprika", m: "oda", t: "24 sa", alt: "—", why: "Maillard ve is notaları; tuzlu (savory) kokteyller ve Bloody Mary twist'leri için." },
        { n: "İncir & Ceviz", q: "150 g kuru incir (dörde bölünmüş) + 50 g kavrulmuş ceviz", m: "oda", t: "5–7 gün", alt: "Sous-vide 60 °C, 2 sa", why: "İncirin bal-karamel notaları ve cevizin yağlı tanenleri; kış votkası." },
        { n: "Greyfurt Kabuğu & Mürver Çiçeği", q: "1 greyfurt kabuğu + 5 g kuru mürver çiçeği", m: "oda", t: "Çiçek 12 sa, kabuk 24 sa", alt: "—", why: "Mürverin rose oxide ve linalool'u, greyfurdun nootkatonuyla çiçeksi-acımsı bir uyum yapar." },
        { n: "Hibiskus & Portakal", q: "10 g kuru hibiskus + 1 portakal kabuğu", m: "oda", t: "Hibiskus 1–2 sa (renk çok hızlı), kabuk 24 sa", alt: "iSi 2 dk", why: "Hibiskus organik asitler ve yoğun yakut renk verir; portakal tatlılık algısı katar." },
        { n: "Karamelize Elma & Karanfil", q: "2 elma (tereyağsız, tavada kurutularak karamelize) + 3 karanfil", m: "sv", t: "Sous-vide 60 °C, 2 sa", alt: "Oda 3–4 gün (karanfil 12 sa)", why: "Karanfilin öjenolü elmanın karamelize şekerleriyle 'elmalı turta' algısı oluşturur." },
        { n: "Kivi & Kafir Limon Yaprağı", q: "3 kivi (soyulmuş, dilimli) + 4 kafir limon yaprağı (makrut)", m: "oda", t: "Yaprak 6 sa, kivi 24–36 sa", alt: "—", why: "Makrut yaprağındaki sitronellal kivinin yeşil-ekşi profilini aydınlatır." },
        { n: "Kavrulmuş Hindistan Cevizi & Pandan", q: "100 g kavrulmuş hindistan cevizi rendesi + 2 pandan yaprağı", m: "oda", t: "Pandan 6 sa, hindistan cevizi 24–48 sa", alt: "Sous-vide 60 °C, 1,5 sa", why: "Pandandaki 2-asetil-1-pirolin (basmati/patlamış mısır kokusu) laktonlu hindistan cevizini 'pastane' tadına çevirir." }
      ]
    },
    {
      t: "recipe", h: "Trend kokteyl · Votka", r: {
        id: "r-espresso-martini", name: "Kakao & Espresso Martini", en: "Cacao-Coffee Espresso Martini", base: "Votka",
        glass: "Soğutulmuş coupe veya Nick & Nora", method: "Shake (sert, 15 sn) · double strain", ice: "Servis buzsuz",
        ing: [["45 ml", "Espresso çekirdeği & kakao çekirdeği infüzyonlu votka"], ["30 ml", "Taze espresso (oda sıcaklığına inmiş)"], ["15 ml", "Kahve likörü"], ["7,5 ml", "2:1 demerara şurubu"], ["1 damla", "%20 tuzlu su"]],
        steps: ["Espressoyu çek ve 1–2 dk bekletip ılıt (sıcak espresso buzu eritir, köpüğü bozar).", "Tüm malzemeleri shaker'a koy, buzu tam doldur.", "15 sn sert çalkala; köpük kahvedeki yağlar ve CO2'den gelir.", "Soğuk bardağa double strain yap."],
        garnish: "3 kahve çekirdeği veya rendelenmiş kakao çekirdeği", note: "Infüzyon kahve aromasını ikiye katlar; bu yüzden kahve likörünü azaltıp şekeri düşük tutabilirsin. Daha kuru bir versiyon için şurubu 5 ml'ye indir."
      }
    },
    {
      t: "pairings", h: "Cin · 20 eşleşme", spirit: "Cin",
      intro: "Cin zaten bir infüzyondur (ardıç, kişniş, angelika, narenciye). En iyi eşleşmeler ardıcın terpenleriyle (α-pinen, mirsen, limonen) aynı aileden gelen veya onları tamamlayan malzemelerdir.",
      items: [
        { n: "Pembe Greyfurt & Biberiye", q: "1 pembe greyfurt kabuğu + 2 dal biberiye", m: "oda", t: "Biberiye 6–8 sa, kabuk 24 sa", alt: "iSi 2 kartuş, 2 dk", why: "Biberiyedeki α-pinen ve 1,8-sineol ardıçla aynı terpen ailesinden. Greyfurdun nootkatonu acımsı bir parlaklık ekler." },
        { n: "Salatalık & Nane", q: "1 salatalık + 8 nane yaprağı", m: "oda", t: "Nane 1 sa, salatalık 12 sa", alt: "iSi 1,5 dk", why: "Yeşil, serin bir profil; Gin & Tonic ve Southside için." },
        { n: "Kelebek Bezelyesi Çiçeği (Butterfly Pea)", q: "2 g kuru çiçek", m: "oda", t: "1–2 sa (renk)", alt: "—", why: "Antosiyaninler (ternatinler) pH göstergesidir: nötrde mavi, asit ekleyince mor-pembe. Tadı çok hafif, toprak notalı. Görsel şov için." },
        { n: "Damla Sakızı & Limon Kabuğu", q: "2–3 g damla sakızı (dondurup havanda dövülmüş) + 1 limon kabuğu", m: "oda", t: "24 sa", alt: "Ilık 45 °C, 1 sa", why: "Sakızda α-pinen oranı çok yüksektir, ardıçla doğrudan akrabadır. Reçine alkolde çözünür; fazla kullanırsan bulanıklaşır." },
        { n: "Ravent & Zencefil", q: "300 g ravent (doğranmış) + 20 g zencefil", m: "oda", t: "3–5 gün (zencefil 24 sa)", alt: "Sous-vide 57 °C, 2 sa", why: "Raventteki malik ve okzalik asit ekşiliği zencefilin ısısıyla dengelenir; pembe renk verir." },
        { n: "Earl Grey (MarTEAni bazı)", q: "750 ml'ye 1/4 su bardağı (~12 g) Earl Grey", m: "oda", t: "2 sa", alt: "iSi 2 dk", why: "Bergamottaki linalool, cindeki kişniş ile aynı molekül. Audrey Saunders'ın Earl Grey MarTEAni'si bu yöntemle yapılır." },
        { n: "Frenk Üzümü & Defne Yaprağı", q: "200 g siyah frenk üzümü + 3 defne yaprağı", m: "oda", t: "Defne 12 sa, frenk üzümü 3–4 gün", alt: "—", why: "Defnenin sineol ve öjenolü, frenk üzümünün sülfürlü-meyveli notalarına (kedi otu/cassis) derinlik verir." },
        { n: "Kan Portakalı & Kekik", q: "2 kan portakalı kabuğu + 4 dal kekik", m: "oda", t: "Kekik 6 sa, kabuk 24 sa", alt: "—", why: "Kekiğin timolü narenciyenin tatlılığını keser, Akdeniz profili." },
        { n: "Lavanta & Limon", q: "1 çk kuru lavanta + 1 limon kabuğu", m: "oda", t: "Lavanta 2–3 sa, kabuk 24 sa", alt: "iSi 1 dk", why: "Linalool + limonen. Aviation ve French 75 varyasyonları." },
        { n: "Pembe Biber & Çilek", q: "1 yk pembe biber + 250 g çilek", m: "oda", t: "Biber 24 sa, çilek 2–3 gün", alt: "—", why: "Pembe biberin fellandren ve mirseni hem ardıçla hem çilekle köprü kurar." },
        { n: "Kakule & Bergamot", q: "8 yeşil kakule (ezilmiş) + 1 bergamot kabuğu (yoksa 5 g Earl Grey)", m: "oda", t: "24 sa", alt: "Ilık 50 °C, 45 dk", why: "Kakulenin sineol ve terpinil asetatı cinin baharatlı yanını güçlendirir." },
        { n: "Mürver Çiçeği & Armut", q: "5 g kuru mürver çiçeği + 1 armut", m: "oda", t: "Çiçek 12 sa, armut 3 gün", alt: "—", why: "Mürver ve armut esterleri bahar, beyaz şarap benzeri bir profil verir." },
        { n: "Rezene Tohumu & Yeşil Elma", q: "1 çk rezene tohumu + 1 yeşil elma (dilimli)", m: "oda", t: "Rezene 12 sa, elma 2–3 gün", alt: "—", why: "Anetol tatlımsı anason verir; yeşil elmanın heksanal ve malik asit tazeliğiyle birleşir." },
        { n: "Adaçayı & Böğürtlen", q: "6 adaçayı yaprağı + 200 g böğürtlen", m: "oda", t: "Adaçayı 4 sa, böğürtlen 3 gün", alt: "—", why: "Adaçayının kafurlu, odunsu notası böğürtlenin koyu meyvesine çerçeve olur." },
        { n: "Yuzu Kabuğu & Şiso", q: "2 yuzu kabuğu (yoksa 1 limon + 1 mandalina) + 6 şiso yaprağı", m: "oda", t: "Şiso 1–2 sa, kabuk 24 sa", alt: "iSi 1,5 dk", why: "Şisodaki perilaldehit, yuzunun terpinen ağırlıklı kabuğuyla Japon tarzı ferah bir profil." },
        { n: "Hibiskus & Gül (Pembe Cin)", q: "5 g hibiskus + 1 yk kuru gül", m: "oda", t: "1–2 sa", alt: "iSi 2 dk", why: "Renk ve hafif ekşilik; tatlandırıcısız 'pink gin' alternatifi." },
        { n: "Kereviz & Karabiber", q: "2 sap kereviz + 1 çk iri kırılmış karabiber", m: "oda", t: "Karabiber 12 sa, kereviz 24 sa", alt: "—", why: "Kerevizdeki ftalidler ve karabiberdeki rotundon; tuzlu Martini ve Red Snapper için." },
        { n: "Kafir Limon Yaprağı & Limon Otu", q: "6 makrut yaprağı + 2 sap limon otu", m: "oda", t: "12–24 sa", alt: "Sous-vide 60 °C, 1 sa", why: "Sitronellal + sitral. Tay usulü Gimlet ve highball." },
        { n: "Yeşil Zeytin & Biberiye", q: "100 g yeşil zeytin (Castelvetrano tipi, durulanmış) + 1 dal biberiye", m: "oda", t: "Biberiye 6 sa, zeytin 24–48 sa", alt: "—", why: "Zeytinin tuzlu-yağlı notası ve biberiyenin pineni. Dirty Martini'nin salamura suyu olmadan yapılan versiyonu." },
        { n: "Papatya & Kayısı", q: "5 g kuru papatya + 100 g kuru kayısı", m: "oda", t: "Papatya 2 sa, kayısı 4–5 gün", alt: "—", why: "Papatya elma benzeri esterler taşır, kayısının laktonlarıyla bal tadında bir uyum." }
      ]
    },
    {
      t: "recipe", h: "Trend kokteyl · Cin", r: {
        id: "r-rosemary-collins", name: "Biberiye & Greyfurt Collins", en: "Rosemary Grapefruit Collins", base: "Cin",
        glass: "Highball / Collins", method: "Shake + top (soda)", ice: "Collins buz çubuğu veya taze küp",
        ing: [["50 ml", "Pembe greyfurt & biberiye infüzyonlu cin"], ["20 ml", "Taze limon suyu"], ["15 ml", "1:1 şurup"], ["30 ml", "Taze pembe greyfurt suyu"], ["60–80 ml", "Soğuk soda"], ["1 damla", "%20 tuzlu su"]],
        steps: ["Soda dışındaki her şeyi shaker'a koy.", "Buzla 8–10 sn kısa çalkala (soda dilüsyonu tamamlayacak).", "Buz dolu highball'a süz.", "Soğuk soda ile tamamla, bar kaşığıyla bir kez dipten kaldır."],
        garnish: "Ucu hafifçe yakılmış biberiye dalı + greyfurt kabuğu", note: "Biberiyeyi servis önünde çakmakla 2 sn yakmak terpenleri buharlaştırır; ilk koku içkinin algısını değiştirir."
      }
    },
    {
      t: "pairings", h: "Beyaz Rom · 20 eşleşme", spirit: "Beyaz Rom",
      intro: "Şeker kamışı/melastan gelen esterler (meyveli, muzlu) ve hafif tatlılık. Tropikal meyveler, baharatlar ve laktonlu (hindistan cevizi) malzemelerle doğal uyum.",
      items: [
        { n: "Ananas & Vanilya", q: "1/2 ananas (kabuksuz, küp) + 1 vanilya çubuğu", m: "oda", t: "4–5 gün", alt: "Sous-vide 57 °C, 2 sa", why: "Ananasın etil bütanoat esterleri rom esterleriyle örtüşür; vanilin yuvarlaklık verir." },
        { n: "Közlenmiş Muz & Tarçın", q: "2 muz (kabuklu ızgarada kararana kadar, sonra soyulmuş) + 1 tarçın", m: "oda", t: "3 gün", alt: "Sous-vide 60 °C, 2 sa", why: "Muzdaki izoamil asetat romun doğal esteridir; közleme karamel notası katar. İnce süzme gerektirir." },
        { n: "Kavrulmuş Hindistan Cevizi", q: "150 g şekersiz rende, altın rengi kavrulmuş", m: "oda", t: "24–48 sa", alt: "Ilık 50 °C, 1 sa", why: "δ-oktalakton (hindistan cevizi laktonu). Ardından dondurup süzersen yağ kalıntısı da ayrılır." },
        { n: "Çarkıfelek & Kafir Limon Yaprağı", q: "6 çarkıfelek meyvesi (içi) + 4 makrut yaprağı", m: "oda", t: "Yaprak 6 sa, çarkıfelek 2 gün", alt: "—", why: "Çarkıfeleğin tiyolleri ve esterleri tropikal; makrut ferahlık katar." },
        { n: "Mango & Kırmızı Biber", q: "1 olgun mango (küp) + 1 kırmızı acı biber", m: "oda", t: "Biber 1–2 sa, mango 3 gün", alt: "—", why: "Mangonun mirsen ve terpenleri kapsaisinin ısısını taşır." },
        { n: "Limon Otu & Misket Limonu Kabuğu", q: "3 sap limon otu + 3 misket limonu kabuğu", m: "oda", t: "24 sa", alt: "iSi 2 dk", why: "Sitral ekseni; Daiquiri ve Mojito'yu aydınlatır." },
        { n: "Hibiskus & Yenibahar", q: "10 g hibiskus + 6 tane yenibahar", m: "oda", t: "Hibiskus 2 sa, yenibahar 24 sa", alt: "Ilık 50 °C, 45 dk", why: "Jamaika usulü sorrel içeceğinin tabanı; yenibaharın öjenolü hibiskus asitliğini ısıtır." },
        { n: "Zencefil & Zerdeçal", q: "40 g zencefil + 15 g taze zerdeçal (dilimli)", m: "oda", t: "24–48 sa", alt: "Sous-vide 60 °C, 1,5 sa", why: "Gingerol ısı, ar-turmeron toprak notası ve altın renk. Zerdeçal leke yapar, eldiven kullan." },
        { n: "Nane & Misket Limonu Kabuğu", q: "15 nane yaprağı + 2 misket limonu kabuğu", m: "isi", t: "iSi 1 dk", alt: "Oda: nane 1 sa", why: "Hazır Mojito bazı; iSi naneyi otsu acılık olmadan çeker." },
        { n: "Guava & Pembe Biber", q: "300 g guava (küp) + 1 yk pembe biber", m: "oda", t: "Biber 24 sa, guava 3 gün", alt: "—", why: "Guavanın esterleri pembe biberin reçinemsi notalarıyla parlar." },
        { n: "Kakao Çekirdeği & Portakal", q: "40 g kakao çekirdeği + 1 portakal kabuğu", m: "isi", t: "iSi 2 dk (kabuk sonra 24 sa oda)", alt: "Oda 2–3 gün", why: "Kakao pirazinleri ve portakal limoneni klasik 'Jaffa' uyumu." },
        { n: "Pandan & Hindistan Cevizi", q: "3 pandan yaprağı (doğranmış) + 80 g kavrulmuş hindistan cevizi", m: "sv", t: "Sous-vide 60 °C, 1,5 sa", alt: "Oda 24 sa", why: "2-asetil-1-pirolin + laktonlar; bu bölümün trend kokteyli bunu kullanır." },
        { n: "Ananas Kabuğu & Yıldız Anason", q: "1 ananasın kabuğu ve göbeği + 1 yıldız anason", m: "oda", t: "Anason 12 sa, kabuk 2–3 gün", alt: "—", why: "Fire değerlendirme: kabukta da esterler var. Anetol romun tatlılığını uzatır." },
        { n: "Karpuz & Fesleğen", q: "400 g karpuz + 8 fesleğen yaprağı", m: "buz", t: "Fesleğen 1 sa, karpuz 24 sa", alt: "—", why: "Hafif, yazlık; daiquiri ve highball için." },
        { n: "Rooibos & Vanilya", q: "10 g rooibos + 1/2 vanilya çubuğu", m: "oda", t: "Rooibos 2 sa, vanilya 3 gün", alt: "iSi (rooibos) 2 dk", why: "Rooibos tanen oranı düşük bir çaydır; bal ve vanilya notaları romu 'yaşlanmış' gibi gösterir." },
        { n: "Kuru İncir & Karanfil", q: "150 g kuru incir + 3 karanfil", m: "oda", t: "Karanfil 12 sa, incir 5 gün", alt: "Sous-vide 60 °C, 2 sa", why: "İncirin karamel şekerleri ve karanfil öjenolü romu koyulaştırır." },
        { n: "Liçi & Gül", q: "250 g liçi (soyulmuş) + 1 yk kuru gül", m: "oda", t: "Gül 4 sa, liçi 2–3 gün", alt: "—", why: "Liçi ve gül aynı molekülleri (cis-rose oxide, geraniol) taşır; neredeyse 'aynı' kokuyu verirler." },
        { n: "Çilek & Tarhun", q: "250 g çilek + 3 dal tarhun", m: "oda", t: "Tarhun 2 sa, çilek 2 gün", alt: "—", why: "Tarhunun estragolü (anasonsu) çileğin furaneolünü tatlı ve otsu dengeler." },
        { n: "Vişne & Badem", q: "200 g vişne + 40 g kavrulmuş badem", m: "oda", t: "4–5 gün", alt: "—", why: "Benzaldehit her ikisinde de var: marzipan-vişne profili." },
        { n: "Demirhindi & Acı Biber", q: "100 g demirhindi (tamarind) özü + 1 kuru acı biber", m: "oda", t: "Biber 2 sa, demirhindi 2–3 gün", alt: "—", why: "Demirhindi tartarik asit kaynağıdır: ekşi-tatlı-meyveli; biber ısısı ile Meksika/Tay sokak tadı." }
      ]
    },
    {
      t: "recipe", h: "Trend kokteyl · Beyaz Rom", r: {
        id: "r-pandan-daiquiri", name: "Pandan Daiquiri", en: "Pandan Coconut Daiquiri", base: "Beyaz Rom",
        glass: "Soğutulmuş coupe", method: "Shake (sert, 12 sn) · double strain", ice: "Servis buzsuz",
        ing: [["60 ml", "Pandan & hindistan cevizi infüzyonlu beyaz rom"], ["25 ml", "Taze misket limonu suyu"], ["15 ml", "1:1 şurup (veya pandan şurubu)"], ["1 damla", "%20 tuzlu su"]],
        steps: ["Malzemeleri shaker'a koy.", "Kuru, sert buzla 12 sn çalkala.", "Soğuk coupe'ye double strain yap."],
        garnish: "İnce misket limonu dilimi veya bir pandan yaprağı düğümü", note: "Infüzyondaki hindistan cevizinden yağ kalıntısı geliyorsa infüzyonu 2 saat dondurucuda tutup kahve filtresinden geçir (mini fat-wash)."
      }
    },
    {
      t: "pairings", h: "Tekila & Mezcal · 20 eşleşme", spirit: "Tekila/Mezcal",
      intro: "Blanco tekila otsu, biberli ve topraksı (pişmiş agave); mezcal bunlara is ve fenolik notalar ekler (guaiakol). Yeşil, acı, topraksı ve tropikal eşleşmeler doğal olarak çalışır.",
      items: [
        { n: "Jalapeño (Klasik)", q: "1–2 jalapeño (halka)", m: "oda", t: "20–60 dk (15 dk'da bir tat)", alt: "iSi 1 dk", why: "Agavenin yeşil biber notasıyla aynı pirazin ailesi. Spicy Margarita'nın bazı." },
        { n: "Karpuz & Pul Biber", q: "400 g karpuz + 1 yk pul biber (veya isot)", m: "buz", t: "Pul biber 2–4 sa, karpuz 24 sa", alt: "—", why: "Karpuzun sulu tatlılığı ve pul biberin meyvemsi ısısı. Bu bölümün trend kokteylinde kullanılır." },
        { n: "Ananas & Tarçın", q: "1/2 ananas + 1 tarçın", m: "oda", t: "3–4 gün", alt: "Sous-vide 57 °C, 2 sa", why: "Tepache (ananas kabuğu fermente içeceği) tadının alkollü versiyonu." },
        { n: "Hibiskus (Jamaica) & Portakal", q: "10 g hibiskus + 1 portakal kabuğu", m: "oda", t: "Hibiskus 2 sa, kabuk 24 sa", alt: "iSi 2 dk", why: "Meksika'nın agua de jamaica içeceği; asidite ve renk." },
        { n: "Salatalık & Kişniş", q: "1 salatalık + 1 demet kişniş", m: "oda", t: "Kişniş 1 sa, salatalık 12 sa", alt: "iSi 1,5 dk", why: "Kişnişin dekenal aldehitleri blanco tekilanın otsu yanını güçlendirir." },
        { n: "Greyfurt Kabuğu & Pembe Biber", q: "1 greyfurt kabuğu + 1 yk pembe biber", m: "oda", t: "24 sa", alt: "—", why: "Paloma bazı; nootkaton + pembe biber terpenleri." },
        { n: "Mango & Habanero", q: "1 mango + 1/4 habanero", m: "oda", t: "Habanero 5–15 dk, mango 2–3 gün", alt: "—", why: "Habanero meyvemsi esterler taşır, mangoyla tropikal-ateşli bir eksen." },
        { n: "Chipotle & Kakao (Mezcal)", q: "1 kuru chipotle + 30 g kakao çekirdeği", m: "oda", t: "Chipotle 6–12 sa, kakao 2 gün", alt: "iSi 2 dk", why: "Füme jalapeño (chipotle) mezcalin guaiakol isiyle akraba; kakao mole sosu tadı katar." },
        { n: "Kahve & Portakal (Mezcal)", q: "40 g iri çekilmiş kahve + 1 portakal kabuğu", m: "oda", t: "Kahve 12–18 sa, kabuk 24 sa", alt: "iSi 1,5 dk", why: "Kavrulmuş ve isli notaların uyumu; mezcal Espresso Martini veya Old Fashioned." },
        { n: "Çilek & Karabiber", q: "250 g çilek + 1 çk karabiber", m: "oda", t: "2–3 gün", alt: "—", why: "Karabiberdeki rotundon çileği 'baharatlı' yapar; reposado ile de iyi." },
        { n: "Kan Portakalı & Yıldız Anason", q: "2 kan portakalı kabuğu + 1 yıldız anason", m: "oda", t: "Anason 8 sa, kabuk 24 sa", alt: "—", why: "Anetolün tatlımsılığı agave acılığını yuvarlar." },
        { n: "Limon Otu & Zencefil", q: "2 sap limon otu + 30 g zencefil", m: "sv", t: "Sous-vide 60 °C, 1 sa", alt: "Oda 24 sa", why: "Sitral ve gingerol; tekila Mule ve highball." },
        { n: "Közlenmiş Mısır & Vanilya (Mezcal)", q: "1 koçan közlenmiş mısır (taneleri) + 1/2 vanilya", m: "oda", t: "2–3 gün", alt: "Sous-vide 60 °C, 2 sa", why: "Mısırın pirolin ve Maillard notaları mezcalin isiyle 'esquites' (Meksika mısırı) profili." },
        { n: "Frenk İnciri & Misket Limonu", q: "4 frenk inciri (kaktüs meyvesi, soyulmuş) + 2 misket limonu kabuğu", m: "oda", t: "2 gün", alt: "—", why: "Kaktüs meyvesi kavun-karpuz arası hafif bir tat ve parlak macenta renk verir." },
        { n: "Nar & Sumak", q: "150 g nar tanesi + 1 yk sumak", m: "oda", t: "Sumak 12 sa, nar 3 gün", alt: "—", why: "Sumak malik asit bakımından zengindir; narın tanenleriyle ekşi-buruk Anadolu profili." },
        { n: "Guava & Ancho Biberi", q: "250 g guava + 1 kuru ancho biberi", m: "oda", t: "Ancho 12 sa, guava 3 gün", alt: "—", why: "Ancho kuru üzüm benzeri tatlı bir acılık verir." },
        { n: "Armut & Kakule (Reposado)", q: "2 armut + 6 kakule", m: "oda", t: "Kakule 24 sa, armut 3 gün", alt: "Sous-vide 57 °C, 2 sa", why: "Reposado'nun meşe vanilyası armut ve kakuleyle tatlı-baharatlı bir yapı oluşturur." },
        { n: "İncir & Tarçın (Añejo/Reposado)", q: "120 g kuru incir + 1 tarçın", m: "oda", t: "4–5 gün", alt: "—", why: "Yaşlandırılmış agavenin karamel notalarını derinleştirir." },
        { n: "Pancar & Zencefil", q: "1 küçük pancar (rendelenmiş) + 20 g zencefil", m: "oda", t: "24 sa", alt: "iSi 2 dk", why: "Pancarın jeosmini (toprak kokusu) mezcalin topraksılığıyla örtüşür; derin bordo renk." },
        { n: "Kereviz & Yeşil Elma", q: "2 sap kereviz + 1 yeşil elma", m: "oda", t: "24–36 sa", alt: "—", why: "Yeşil, tuzlu ve ekşi; Bloody Maria ve 'yeşil margarita' için." }
      ]
    },
    {
      t: "recipe", h: "Trend kokteyl · Tekila", r: {
        id: "r-watermelon-margarita", name: "Karpuz & Pul Biber Margarita", en: "Spicy Watermelon Margarita", base: "Tekila",
        glass: "Rocks, yarım tuz-pul biber kenarlı", method: "Shake · strain", ice: "Taze küp buz",
        ing: [["50 ml", "Karpuz & pul biber infüzyonlu blanco tekila"], ["25 ml", "Taze misket limonu suyu"], ["15 ml", "Agave şurubu (2 agave : 1 su)"], ["30 ml", "Taze karpuz suyu (isteğe bağlı)"], ["10 ml", "Portakal likörü (isteğe bağlı)"]],
        steps: ["Bardağın dış kenarının yarısını misket limonuyla ıslat, tuz + pul biber (3:1) karışımına batır.", "Malzemeleri buzla 10–12 sn çalkala.", "Taze buz dolu bardağa süz."],
        garnish: "Üçgen karpuz dilimi, üzerine pul biber serpilmiş", note: "Karpuz suyunu eklersen şurubu 10 ml'ye düşür. Pul biberi kendi damak eşiğine göre ayarla; Urfa isotu daha isli ve kuru üzümsü bir sonuç verir."
      }
    },
    {
      t: "pairings", h: "Viski & Burbon · 20 eşleşme", spirit: "Viski/Burbon",
      intro: "Meşe fıçıdan gelen vanilin, öjenol (karanfil), meşe laktonları (hindistan cevizi) ve karamelize şekerler. En iyi eşleşmeler bu molekülleri yansıtan ya da yumuşatan malzemelerdir.",
      items: [
        { n: "Vanilya & Vişne (Burbon)", q: "1 vanilya + 150 g kurutulmuş vişne", m: "oda", t: "5–7 gün", alt: "Sous-vide 60 °C, 2 sa", why: "Vanilin fıçıdan zaten gelir; infüzyon onu yoğunlaştırır, vişne asit ve benzaldehit ekler." },
        { n: "Elma & Tarçın", q: "2 elma (dilimli) + 2 tarçın", m: "sv", t: "Sous-vide 60 °C, 2 sa", alt: "Oda 3–4 gün", why: "Sous-vide elmayı pişirmeden ılık meyve tadı verir. Bu bölümün trend kokteyli bunu kullanır." },
        { n: "Kavrulmuş Pekan Cevizi", q: "120 g pekan (160 °C fırında 8 dk)", m: "oda", t: "3–5 gün", alt: "Ilık 50 °C, 1,5 sa", why: "Kavrulmuş kuruyemiş pirazinleri; ardından dondurup süz (yağ ayrılır)." },
        { n: "Kahve & Kakule", q: "40 g kahve + 8 kakule", m: "oda", t: "Kahve 12–18 sa, kakule 24 sa", alt: "iSi 2 dk", why: "Türk kahvesi ritüelinin viski versiyonu; kakulenin sineolü kahveyi ferahlatır." },
        { n: "Portakal Kabuğu & Karanfil", q: "2 portakal kabuğu + 4 karanfil", m: "oda", t: "Karanfil 12 sa, kabuk 24–48 sa", alt: "—", why: "Karanfildeki öjenol meşe fıçının öjenolüyle aynı molekül; Old Fashioned derinliği." },
        { n: "İncir & Siyah Çay", q: "120 g kuru incir + 8 g siyah çay (Rize/Assam)", m: "oda", t: "Çay 1 sa, incir 5 gün", alt: "—", why: "Çay tanenleri burbonun tatlılığını kurutur; incir bal notası katar." },
        { n: "Kuru Kayısı & Antep Fıstığı", q: "150 g kuru kayısı + 60 g kavrulmuş Antep fıstığı", m: "oda", t: "5–7 gün", alt: "—", why: "Kayısı laktonları meşe laktonlarıyla akraba; fıstık yağlı, yeşilimsi bir derinlik verir." },
        { n: "Şeftali & Kekik", q: "2 olgun şeftali + 3 dal kekik", m: "oda", t: "Kekik 6 sa, şeftali 3 gün", alt: "Sous-vide 57 °C, 1,5 sa", why: "Şeftalideki γ-dekalakton ile meşe laktonları neredeyse aynı aileden. Kekik timolü tatlılığı keser." },
        { n: "Kakao Çekirdeği & Ancho", q: "40 g kakao çekirdeği + 1 ancho biberi", m: "isi", t: "iSi 2,5 dk", alt: "Oda 2 gün", why: "Bitter çikolata + kuru üzümsü biber; Mole Old Fashioned." },
        { n: "Lapsang Souchong (İsli Çay)", q: "6 g lapsang souchong", m: "oda", t: "45–60 dk", alt: "iSi 1,5 dk", why: "Çam dumanıyla kurutulmuş çay guaiakol taşır; burbona turba benzeri is notası ekler." },
        { n: "Muz & Ceviz", q: "2 olgun muz + 60 g kavrulmuş ceviz", m: "oda", t: "3 gün", alt: "Sous-vide 60 °C, 2 sa", why: "Muz esterleri ve ceviz tanenleri: 'banana bread' profili." },
        { n: "Erik & Yıldız Anason", q: "200 g mürdüm eriği (kuru) + 1 yıldız anason", m: "oda", t: "Anason 12 sa, erik 5 gün", alt: "—", why: "Kuru erik şeker ve hafif tütsü notası verir, anason tatlılığı uzatır." },
        { n: "Chai Baharatları", q: "1 tarçın, 6 kakule, 3 karanfil, 10 g zencefil, 1 çk karabiber", m: "ilik", t: "Ilık 50 °C, 1 sa", alt: "Oda 24–36 sa", why: "Baharat karışımı burbonun karamel notalarıyla bütünleşir; kış Hot Toddy bazı." },
        { n: "Armut & Zencefil", q: "2 armut + 25 g zencefil", m: "oda", t: "Zencefil 24 sa, armut 3 gün", alt: "—", why: "Armut esterleri yumuşaklık, zencefil canlılık verir." },
        { n: "Böğürtlen & Adaçayı", q: "200 g böğürtlen + 6 adaçayı yaprağı", m: "oda", t: "Adaçayı 4 sa, böğürtlen 3 gün", alt: "—", why: "Koyu meyve ve kafurlu ot; Bramble tarzı viski kokteylleri." },
        { n: "Patlamış Mısır", q: "3 su bardağı tuzsuz patlamış mısır (yağsız)", m: "oda", t: "24 sa", alt: "—", why: "Patlamış mısırdaki 2-asetil-1-pirolin, burbonun mısır tabanını yansıtır. Mısır çok sıvı emer: iyi sık." },
        { n: "Karadeniz Fındığı & Kakao", q: "100 g kavrulmuş fındık (kabuksuz) + 20 g kakao çekirdeği", m: "oda", t: "4–5 gün", alt: "Sous-vide 60 °C, 2 sa", why: "Fındıktaki filberton kavrulmuş kuruyemiş aromasının anahtarıdır; kakaoyla 'gianduja' profili." },
        { n: "Vişne & Vanilya", q: "200 g taze vişne + 1/2 vanilya", m: "oda", t: "5 gün", alt: "—", why: "Ekşi vişne burbonun tatlılığını dengeler; Manhattan'da maraschino yerine kullanılabilir." },
        { n: "Kuru Üzüm & Tarçın", q: "150 g kuru üzüm (koyu) + 1 tarçın", m: "oda", t: "5–7 gün", alt: "—", why: "Pedro Ximénez şeri fıçısı etkisi: kuru üzüm, melas ve baharat." },
        { n: "Urfa İsotu & Bitter Kakao", q: "1 yk isot + 15 g kakao çekirdeği", m: "oda", t: "İsot 6–8 sa, kakao 2 gün", alt: "—", why: "İsotun fermente-isli, kuru üzümsü acılığı viskinin fıçı notalarıyla örtüşür." }
      ]
    },
    {
      t: "recipe", h: "Trend kokteyl · Burbon", r: {
        id: "r-apple-sour", name: "Elma & Tarçın Burbon Sour", en: "Sous-vide Apple Cinnamon Whiskey Sour", base: "Burbon",
        glass: "Rocks, büyük şeffaf buz", method: "Dry shake + shake · double strain", ice: "Büyük blok buz",
        ing: [["60 ml", "Sous-vide elma & tarçın infüzyonlu burbon"], ["25 ml", "Taze limon suyu"], ["15 ml", "2:1 demerara şurubu"], ["20 ml", "Yumurta akı veya aquafaba"], ["2 dash", "Aromatik bitter"]],
        steps: ["Bitter dışındaki her şeyi shaker'a koy.", "Buzsuz 10 sn çalkala (dry shake).", "Buz ekle, 12 sn sert çalkala.", "Büyük buz bloğu olan bardağa double strain yap.", "Köpüğün üstüne 2 dash bitter damlat ve kürdanla desen çiz."],
        garnish: "İnce kurutulmuş elma dilimi", note: "Daha yoğun elma tadı için 10 ml calvados veya elma brendisi ekle, burbonu 50 ml'ye indir."
      }
    }
  ],
  quiz: [
    { q: "Narenciye kabuğu infüzyonunda acılığın ana kaynağı nedir?", o: ["Renkli kabuk (flavedo)", "Beyaz kısım (albedo)", "Limonen", "Meyve suyu"], a: 1, why: "Albedodaki naringin gibi flavonoidler zamanla acılık verir. Sadece renkli kısmı kullan." },
    { q: "iSi hızlı infüzyonda aromayı dışarı taşıyan kritik an hangisidir?", o: ["Kartuşun takılması", "Hızlı gaz tahliyesi", "Süzme", "Buzdolabında bekleme"], a: 1, why: "Ani basınç düşüşü gözeneklere itilen sıvının köpürerek dışarı çıkmasını sağlar." },
    { q: "Sous-vide infüzyonda neden 70 °C üstüne çıkılmamalı?", o: ["Şeker karamelize olur", "Etanol buharı poşeti şişirir ve aroma kaybolur", "Renk değişmez", "Su kaynar"], a: 1, why: "Etanolün buhar basıncı yüksektir; yüksek ısıda poşet şişer, alkol ve uçucu aromalar kaçar." },
    { q: "Cin + biberiye eşleşmesinin kimyasal temeli nedir?", o: ["İkisi de şeker içerir", "Ortak terpenler (α-pinen, 1,8-sineol)", "İkisi de asittir", "Renk uyumu"], a: 1, why: "Ardıç ve biberiye aynı terpen ailesinden moleküller taşır." },
    { q: "Kelebek bezelyesi çiçeği infüzyonlu cin neden renk değiştirir?", o: ["Alkol oranı değişir", "Antosiyaninler pH'a duyarlıdır", "Şeker ekleniyor", "Buz eriyor"], a: 1, why: "Asit (narenciye) eklendiğinde pH düşer ve mavi renk mor-pembeye döner." },
    { q: "Habanero infüzyonunda ilk tadım ne zaman yapılmalı?", o: ["24 saat sonra", "5–15 dakika içinde", "3 gün sonra", "1 hafta sonra"], a: 1, why: "Habanero çok güçlüdür; 5–15 dk çoğu zaman yeterlidir." },
    { q: "Burbon + karanfil uyumunun ortak molekülü hangisidir?", o: ["Vanilin", "Öjenol", "Limonen", "Kapsaisin"], a: 1, why: "Meşe fıçılar öjenol bırakır; karanfil de öjenol bakımından en zengin baharattır." }
  ]
});
