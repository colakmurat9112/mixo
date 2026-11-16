/* Bölüm 08 — Bilinmeyen İleri Seviye Teknikler (The Unknown) */
HB.add({
  id: "ileri",
  no: "08",
  title: "İleri Seviye Teknikler",
  en: "The Unknown",
  level: "Uzman",
  lead: "Dünyanın en iyi barlarının laboratuvar teknikleri: vakum altında soğuk damıtma ile 'imkânsız' aromaları yakalamak ve laktik fermentasyon ile umami ve doğal asidite üretmek.",
  blocks: [
    {
      t: "text", h: "Rotovap (Rotary Evaporator) mantığı",
      html: "<p>Bir sıvının kaynama noktası üzerindeki basınca bağlıdır. Basıncı düşürürsen kaynama noktası düşer: deniz seviyesinde su 100 °C'de kaynar, ~50 mbar'da ise ~33 °C'de. Rotovap bu prensibi kullanır:</p><ul><li><b>Vakum pompası</b> sistem basıncını düşürür.</li><li><b>Döner balon</b> ılık su banyosunda (genellikle 30–45 °C) döner; ince bir sıvı filmi oluşur, yüzey alanı artar, buharlaşma hızlanır ve ısı eşit dağılır.</li><li><b>Soğutucu (kondenser)</b>, chiller ile –10 ile +5 °C arasına soğutulur; buhar burada yoğunlaşır.</li><li><b>Toplama balonu</b> berrak distilatı alır.</li></ul><p><b>Neden önemli?</b> Klasik damıtma 78–100 °C ister ve hassas aromaları 'pişirir'. Rotovap ise oda sıcaklığına yakın ısıda çalıştığı için taze çiçek, yeşil ot, ıslak toprak, taş, deniz yosunu gibi çok hassas uçucu bileşikleri bozmadan yakalar. Distilat renksiz, şekersiz, tanensiz ve acılıksızdır: sadece saf aroma.</p>"
    },
    {
      t: "table", h: "Tipik çalışma parametreleri",
      cols: ["Parametre", "Değer", "Not"],
      rows: [
        ["Banyo sıcaklığı", "30–45 °C", "Taze çiçek ve otlarda düşük, kök ve baharatta yüksek"],
        ["Vakum", "~50–150 mbar", "%40 ABV karışım için 40 °C'de ~100–120 mbar civarında kaynama başlar"],
        ["Kondenser sıcaklığı", "–10 ile +5 °C", "Banyodan en az 20 °C soğuk olmalı"],
        ["Dönüş hızı", "100–150 rpm", "İnce, eşit film"],
        ["Balon dolumu", "En fazla yarısı", "Köpürme ve sıçramayı önler"],
        ["Toplama", "Başlangıç hacminin ~%50–70'i", "Önce yüksek dereceli, aromatik kısım gelir; tadarak dur"]
      ]
    },
    {
      t: "steps", h: "Çalışma akışı",
      items: [
        "<b>Maserasyon:</b> Malzemeyi %40–50 ABV alkolde (veya su + alkol karışımında) 1–24 saat beklet. Çiçeklerde kısa, kök ve kabukta uzun.",
        "<b>Yükle:</b> Karışımı (katılarla birlikte veya süzülmüş) balona doldur, en fazla yarısı.",
        "<b>Soğutucuyu çalıştır:</b> Chiller hedef sıcaklığa insin.",
        "<b>Dönüşü başlat, sonra vakumu yavaşça uygula:</b> Ani vakum köpürme ve 'bumping' (ani kaynama) yapar.",
        "<b>Banyoyu ısıt:</b> Damlamanın düzenli olduğu noktayı bul.",
        "<b>Kesimler:</b> İlk distilatı küçük fraksiyonlarda topla ve tat. Aroma zayıflayıp su tadı gelmeye başlayınca dur.",
        "<b>Seyrelt ve harmanla:</b> Distilat yüksek derecelidir; hedef dereceye su ile indir veya baz alkolle harmanla.",
        "<b>Kalıntı (bottoms):</b> Balonda kalan renkli, acı, şekerli sıvı da değerlidir: şurup, bitter veya cordial tabanı olarak kullanılabilir."
      ]
    },
    {
      t: "table", h: "Klasik uygulamalar",
      cols: ["Malzeme", "Elde edilen", "Kullanım"],
      rows: [
        ["Islak kil, çakmaktaşı, nehir taşı", "Mineral, 'petrichor' (yağmur sonrası toprak) aroması", "Martini, berrak highball. Tony Conigliaro'nun ünlü 'Terroir' kokteyli bu fikri işler."],
        ["Orman toprağı / yosun", "Jeosmin ağırlıklı toprak kokusu", "Mezcal, viski twist'leri"],
        ["Taze gül, yasemin, ıhlamur, mürver", "Pişmemiş çiçek aroması", "Spritz, şampanya kokteylleri"],
        ["Bayır turpu, wasabi", "Keskinlik olmadan aroma ya da keskinlik dahil", "Berrak Bloody Mary"],
        ["Bitter kakao, kahve", "Renksiz çikolata/kahve", "'Görünmez' Espresso Martini"],
        ["Deniz yosunu, istiridye kabuğu", "Tuzlu, deniz havası", "Martini, cin & tonik"],
        ["Kızarmış ekmek, kavrulmuş arpa", "Maillard aromaları", "Viski, kahverengi alkol twist'leri"]
      ]
    },
    {
      t: "note", kind: "warn", h: "Yasal ve güvenlik notu",
      html: "<p><b>Almanya:</b> Alkol damıtmak 'Alkoholsteuergesetz' kapsamında üretim sayılır ve izne tabidir. 0,5 litreyi aşan damıtma cihazları gümrüğe (Hauptzollamt) bildirilmelidir. Vergisi ödenmiş alkolü yeniden damıtmak (redistillation) da kapsam dahilinde değerlendirilebilir. Ticari kullanımdan önce yerel Hauptzollamt'a danış.</p><p><b>Güvenlik:</b> Toprak, taş ve bitkiler gıda güvenliği açısından temiz ve bilinen kaynaklı olmalı (pestisit, ağır metal, hayvan dışkısı riski). Vakum cam ekipmanı patlayabilir: koruyucu gözlük ve hasarsız cam kullan. Yüksek dereceli distilat yanıcıdır.</p><p><b>Rotovap'sız alternatifler:</b> iSi infüzyon, sous-vide, suyla hidrosol (sadece su ile damıtma; alkol içermez), vakum infüzyon ve dondurarak konsantre etmeyen yöntemler.</p>"
    },
    {
      t: "text", h: "Laktik fermentasyon (Lacto-fermentation)",
      html: "<p>Doğal olarak meyve ve sebzelerin üzerinde bulunan <b>laktik asit bakterileri (LAB)</b>, oksijensiz ve tuzlu bir ortamda şekerleri <b>laktik aside</b> dönüştürür. Tuz, istenmeyen bakteri ve küfleri baskılarken LAB'ın çoğalmasına izin verir.</p><p>Sonuç:</p><ul><li><b>Asidite:</b> pH 3,2–3,8'e düşer; yumuşak, yoğurtsu bir ekşilik.</li><li><b>Umami ve derinlik:</b> Proteinlerin parçalanmasından gelen glutamatlar ve fermantasyon bileşikleri.</li><li><b>Funk:</b> Hafif peynirimsi, şarap benzeri, karmaşık notalar.</li><li><b>Tuzluluk:</b> Kokteylde tuzlu su (saline) görevini de görür.</li></ul><p>Barda kullanım: fermente meyve suyunu doğrudan asit kaynağı olarak, salamurayı (brine) tuzlu-ekşi bir modifikatör olarak, fermente meyveyi şuruba dönüştürerek.</p>"
    },
    {
      t: "table", h: "Fermentasyon parametreleri",
      cols: ["Parametre", "Değer", "Not"],
      rows: [
        ["Tuz", "Toplam ağırlığın %2–3'ü (meyve + varsa su)", "%2 meyve için standart; %3 sebze ve uzun süreli. İyotsuz tuz kullan."],
        ["Ortam", "Oksijensiz (anaerobik)", "Vakum poşet, ağırlıklı kavanoz veya hava kilitli kavanoz"],
        ["Sıcaklık", "18–24 °C", "Daha sıcak = hızlı ama 'funk' artar; 26 °C üstünden kaçın"],
        ["Süre", "Meyve 3–7 gün · sebze 5–14 gün", "Vakum poşet şişince fermentasyon aktiftir"],
        ["Hedef pH", "≤ 3,8 (ideal 3,4–3,6)", "pH şeritleri veya pH metre ile kontrol et"],
        ["Su (gerekirse)", "Klorsuz", "Musluk suyunu kaynatıp soğut veya filtrele"],
        ["Sonra", "Buzdolabı (2–4 °C)", "Fermentasyonu yavaşlatır; 2–4 hafta"]
      ]
    },
    { t: "calc", h: "Hesaplayıcı: Laktik tuz oranı", id: "lacto" },
    {
      t: "formula", h: "Formül · Fermente Yaban Mersini Suyu", r: {
        id: "f-lacto-blueberry", name: "Fermente Yaban Mersini Suyu", yield: "~350 ml su + posa",
        ing: [["500 g", "Taze yaban mersini (yıkanmamış veya sadece hafif durulanmış; doğal bakteriler kabukta)"], ["10 g", "İyotsuz deniz tuzu (%2)"], ["İsteğe bağlı", "1 küçük dal kekik veya 1 defne yaprağı"]],
        steps: ["Yaban mersinlerini kasede elle veya patates eziciyle hafifçe ez (kabuklar açılsın).", "Tuzu ekle ve iyice karıştır.", "Vakum poşete koyup vakumla (veya kavanoza bastırıp üstünü sıvı kaplayacak şekilde ağırlıkla).", "Karanlık, 20–22 °C bir yerde 4–6 gün beklet. Poşet şişerse açıp havasını al ve tekrar kapat (veya kavanozu günde bir kez 'gazını al').", "4. günden itibaren pH ve tat kontrolü: hoş ekşi, meyveli, hafif şarapsı olmalı.", "Hazır olunca blenderda çek ve superbag ile sıkarak süz.", "Buzdolabında sakla; 2–3 hafta."],
        note: "Şurup olarak: 200 g fermente su + 200 g şeker (1:1), ısıtmadan çöz. Kalan posa kurutulup tuzlu-ekşi bir garnitür tozuna dönüştürülebilir."
      }
    },
    {
      t: "recipe", h: "Trend kokteyl · Laktik", r: {
        id: "r-lacto-blueberry-highball", name: "Fermente Yaban Mersini Gin Highball", en: "Lacto-Blueberry Gin Highball", base: "Cin",
        glass: "Highball", method: "Shake + top (soda)", ice: "Collins buz çubuğu",
        ing: [["45 ml", "Cin (çiçeksi stil)"], ["25 ml", "Fermente yaban mersini suyu"], ["10 ml", "Taze limon suyu"], ["15 ml", "Bal şurubu (3:1)"], ["80 ml", "Soğuk soda"]],
        steps: ["Soda dışındaki malzemeleri buzla 8 sn kısa çalkala.", "Buz dolu highball'a süz.", "Soda ile tamamla, bir kez dipten kaldır."],
        garnish: "Kekik dalı ve 3 taze yaban mersini kürdan üzerinde", note: "Fermente su hem asit hem tuz taşır; ekstra tuzlu suya gerek yok. Asitliği yüksekse limonu tamamen çıkar."
      }
    },
    {
      t: "tips", h: "Fermentasyon güvenliği",
      items: [
        "<b>Kahm mayası:</b> Yüzeyde beyaz, düz, hafif kırışık bir film çoğu zaman zararsızdır ama tadı bozar: kaşıkla al.",
        "<b>Küf:</b> Tüylü, mavi, yeşil, siyah veya pembe lekeler: tamamını at. Sadece üstü almak yetmez.",
        "<b>Koku:</b> Ekşi, meyveli, yoğurtsu = iyi. Çürük, kükürtlü, aseton veya 'kusmuk' kokusu = at.",
        "<b>Temizlik:</b> Kavanoz ve araçları sıcak suyla yıka; mümkünse Star San gibi gıda sanitizerı kullan.",
        "<b>Oksijen:</b> Malzeme her zaman sıvının altında kalmalı. Hava teması küfün başlıca sebebidir.",
        "<b>pH ölç:</b> Barda servis edilecek her fermente üründe pH ≤ 3,8 hedefle ve kayıt tut (HACCP mantığı).",
        "<b>Patlama riski:</b> Kapalı cam kavanozda gaz birikir. Hava kilidi kullan veya günde bir kez gazını al."
      ]
    },
    {
      t: "table", h: "Bonus: diğer ileri teknikler",
      cols: ["Teknik", "Prensip", "Uygulama"],
      rows: [
        ["Vakum sıkıştırma (compression)", "Vakum, meyve hücrelerindeki havayı çeker; sıvı içeri girer", "Karpuz + Campari, salatalık + cin: camsı, yoğun garnitür"],
        ["Zorla karbonasyon", "Soğuk ve berrak sıvıya yüksek basınçta CO2", "Soğuk (≈0 °C), berrak sıvı; karbonasyon şişesi veya keg, 30–45 psi"],
        ["Vakum infüzyon", "Basınç düşürülüp bırakılınca sıvı gözeneklere dolar", "Vakum makinesinde 3–5 döngü: hızlı ot ve meyve infüzyonu"],
        ["Ultrasonik ekstraksiyon", "Kavitasyon kabarcıkları hücre duvarlarını kırar", "Dakikalar içinde 'yıllandırılmış' hissi veren infüzyonlar"],
        ["Enzimatik tatlılık", "İnvertaz ile sukrozu glikoz + fruktoza çevirme", "Kristalleşmeyen, daha tatlı algılanan şuruplar"]
      ]
    }
  ],
  quiz: [
    { q: "Rotovap neden hassas aromaları bozmadan yakalar?", o: ["Daha yüksek ısı kullandığı için", "Vakum ile kaynama noktası düştüğü için düşük ısıda çalışır", "Asit eklediği için", "Fermente ettiği için"], a: 1, why: "Basınç düştükçe kaynama noktası düşer; 30–45 °C'de damıtma yapılabilir." },
    { q: "Rotovap distilatında ne bulunmaz?", o: ["Uçucu aroma", "Alkol", "Renk, şeker ve tanen", "Su"], a: 2, why: "Uçucu olmayan bileşikler balonda (bottoms) kalır." },
    { q: "Laktik fermentasyonda standart tuz oranı nedir?", o: ["%0,2", "%2–3", "%10", "%20"], a: 1, why: "Toplam ağırlığın %2–3'ü istenmeyen mikropları baskılar, LAB'ın çalışmasına izin verir." },
    { q: "Güvenli bir fermente ürün için hedef pH nedir?", o: ["≥ 5", "≤ 3,8", "7", "9"], a: 1, why: "pH 3,8 ve altı çoğu patojenin üremesini engeller." },
    { q: "Fermentasyonda yüzeyde tüylü, renkli lekeler görülürse ne yapılır?", o: ["Üstü alınır, devam edilir", "Tamamı atılır", "Daha fazla tuz eklenir", "Isıtılır"], a: 1, why: "Küf ipliksi yapısıyla ürünün derinlerine yayılır; güvenli değildir." },
    { q: "Rotovap'ta vakum nasıl uygulanmalıdır?", o: ["Aniden tam güçte", "Dönüş başladıktan sonra yavaşça", "Hiç uygulanmaz", "Isıtmadan önce, dönmeden"], a: 1, why: "Ani vakum köpürme ve ani kaynamaya (bumping) yol açar." }
  ]
});
