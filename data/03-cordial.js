/* Bölüm 03 — Cordial ve Shrub (Asit-Şeker Dengesi) */
HB.add({
  id: "cordial",
  no: "03",
  title: "Cordial & Shrub",
  en: "Acid-Sugar Balance",
  level: "Orta → İleri",
  lead: "Cordial, asit ve şekerin önceden dengelendiği, raf ömrü uzun bir tatlı-ekşi konsantredir. Taze narenciye yerine toz asitlerle çalışmak hem tutarlılık hem sıfır atık sağlar.",
  blocks: [
    {
      t: "table", h: "Üç temel asit",
      cols: ["Asit", "Doğal kaynak", "Tat profili", "Kullanım"],
      rows: [
        ["Sitrik (citric, E330)", "Limon, misket limonu, portakal", "Keskin, hızlı başlar, çabuk biter", "Narenciye taklidi, temel ekşilik"],
        ["Malik (malic, E296)", "Yeşil elma, misket limonu, ravent, sumak", "Uzun süren, 'sulu', kalıcı ekşilik", "Misket limonu profili, elma ve sebze cordial'ları"],
        ["Tartarik (tartaric, E334)", "Üzüm, demirhindi", "Kuru, sert, hafif buruk", "Şarap benzeri yapı, 'champagne acid'"],
        ["Laktik (lactic, E270)", "Yoğurt, fermente ürünler", "Yumuşak, sütlü, yuvarlak", "Champagne acid'e eklenir; fermente notalar"],
        ["Askorbik (ascorbic, E300)", "C vitamini", "Zayıf ekşilik", "Tat için değil, oksidasyonu (kararmayı) önlemek için"]
      ]
    },
    {
      t: "table", h: "Narenciye sularının asit profili (yaklaşık)",
      cols: ["Meyve suyu", "Toplam asit", "Bileşim", "Misket limonu gücüne getirmek (1 L için)"],
      rows: [
        ["Misket limonu", "~%6", "~%4 sitrik + ~%2 malik", "Referans"],
        ["Limon", "~%6", "Neredeyse tamamı sitrik", "Referans"],
        ["Greyfurt", "~%2,4", "Çoğunlukla sitrik", "+ ~17 g sitrik + ~19 g malik"],
        ["Portakal", "~%0,9", "Sitrik + az malik", "+ 32 g sitrik + 20 g malik"],
        ["Ananas", "~%0,9", "Sitrik + az malik", "+ ~32 g sitrik + ~19 g malik"],
        ["Elma", "~%0,5", "Çoğunlukla malik", "+ ~12 g sitrik + ~43 g malik (elma profili korunur)"]
      ],
      foot: "Kaynak mantık: Dave Arnold'un 'Liquid Intelligence' yaklaşımı. Değerler meyveye göre değişir; nihai karar her zaman tadımdır."
    },
    { t: "calc", h: "Hesaplayıcı: Asit ayarı", id: "acid" },
    {
      t: "text", h: "Cordial yapımının temel taşı",
      html: "<p>Modern bar cordial'ı üç değişkenle tanımlanır:</p><ul><li><b>Şeker:</b> 40–55 Brix (taban sıvısının ağırlığına göre %70–100 şeker).</li><li><b>Toplam asit:</b> %2,5–4 (son ürün ağırlığına göre). Misket limonu suyu %6'dır; cordial'lar daha tatlı olduğu için asit daha düşüktür.</li><li><b>Asit karışımı:</b> Misket limonu profili için 2 sitrik : 1 malik; limon için tamamen sitrik; şarap/üzüm profili için tartarik ağırlıklı.</li></ul><p>Taban sıvısı (su, demleme, meyve suyu) aromayı taşır. Kabuk ve otlar ısıtılmadan eklenirse aroma daha taze kalır.</p>"
    },
    {
      t: "table", h: "Başlangıç oranları (1000 g taban sıvısı için)",
      cols: ["Stil", "Şeker", "Sitrik", "Malik", "Tartarik", "Tuz"],
      foot: "Bu oranlar ~43–45 Brix ve ~%3–3,4 toplam asit verir. Daha tatlı veya ekşi bir cordial için hesaplayıcıyı kullan.",
      rows: [
        ["Misket limonu cordial", "800 g", "40 g", "20 g", "—", "1 g"],
        ["Limon cordial", "800 g", "60 g", "—", "—", "1 g"],
        ["Yeşil elma cordial", "700 g", "15 g", "45 g", "—", "1 g"],
        ["Üzüm / şarap tarzı", "700 g", "10 g", "10 g", "35 g", "1 g"],
        ["Narenciye kabuklu sıfır atık", "850 g", "45 g", "15 g", "—", "1,5 g"]
      ]
    },
    { t: "calc", h: "Hesaplayıcı: Cordial", id: "cordial" },
    {
      t: "tips", h: "Toz asitlerle çalışma kuralları",
      items: [
        "<b>Hassas terazi şart:</b> 0,1 g hassasiyetli dijital terazi (takı terazisi) kullan. Toz asitlerde 2 g hata tadı tamamen bozar.",
        "<b>Önce çöz, sonra ekle:</b> Asitleri az miktar ılık suda çözüp sonra karışıma ekle. Doğrudan şuruba atarsan dibe çöker.",
        "<b>Isı ve asit:</b> Asitli şurubu uzun süre kaynatma; sukrozu invert eder ve tat değişir. Asitleri şurup ılıyınca ekle.",
        "<b>Aroma ısıdan sonra:</b> Kabuk, ot ve çiçekleri şurup 40 °C altına indikten sonra ekle ya da oleo saccharum olarak ayrı hazırla.",
        "<b>Tuz:</b> %0,1 tuz ekşiliği yuvarlar ve meyveyi 'açar'. Tuzu hissetmemelisin.",
        "<b>Gıda sınıfı:</b> Asitleri gıda kalitesinde (E-numaralı) al. Almanya'da 'Zitronensäure', 'Apfelsäure', 'Weinsäure' olarak eczane, gıda toptancısı veya online satılır.",
        "<b>Güvenlik:</b> Toz asit gözü ve mukozayı tahriş eder; tartarken yüzünü yaklaştırma, kavanozu kapalı ve etiketli tut."
      ]
    },
    {
      t: "formula", h: "Trend tarif · Kavrulmuş Kişniş & Misket Limonu Cordial", r: {
        id: "f-coriander-cordial", name: "Kavrulmuş Kişniş & Misket Limonu Cordial", yield: "~1,1 L",
        ing: [["500 g", "Su"], ["15 g", "Kişniş tohumu"], ["~25 g", "6 misket limonunun kabuğu (sadece yeşil kısım)"], ["450 g", "Şeker"], ["20 g", "Sitrik asit"], ["8 g", "Malik asit"], ["1 g", "Tuz"], ["(isteğe bağlı) 50 ml", "Taze misket limonu suyu"]],
        steps: ["Kişniş tohumlarını kuru tavada orta ateşte 2–3 dk, kokusu çıkıp hafif kızarana kadar kavur. Havanda iri kır.", "Suyu 80 °C'ye ısıt, kişnişi ekle, kapağı kapat ve 20 dk demle.", "Şekeri ekleyip çöz, karışımı 40 °C'nin altına soğut.", "Bu sırada misket limonu kabuklarını 50 g şekerin bir kısmıyla (toplam şekerden) ezerek 30 dk oleo saccharum yap ve şuruba ekle.", "Sitrik, malik asit ve tuzu az ılık suda çöz, şuruba karıştır.", "Oda sıcaklığında 2 sa beklet, sonra superbag + kahve filtresinden süz.", "İsteğe bağlı: taze misket limonu suyu eklemek canlılık verir ama raf ömrünü 2 haftaya düşürür."],
        note: "Kişnişteki linalool cinin içindeki kişnişle aynı moleküldür; bu yüzden Gimlet'te cinle 'kaynaşır'. Buzdolabında 4–6 hafta."
      }
    },
    {
      t: "recipe", h: "Modern Gimlet", r: {
        id: "r-modern-gimlet", name: "Kişnişli Modern Gimlet", en: "Toasted Coriander Gimlet", base: "Cin",
        glass: "Soğutulmuş Nick & Nora", method: "Stir (20–25 sn) veya kısa shake", ice: "Servis buzsuz",
        ing: [["50 ml", "London Dry cin"], ["25 ml", "Kavrulmuş kişniş & misket limonu cordial"], ["5 ml", "Taze misket limonu suyu (isteğe bağlı)"], ["1 damla", "%20 tuzlu su"]],
        steps: ["Mixing glass'a malzemeleri koy, buzla 20–25 sn karıştır.", "Soğuk bardağa süz.", "Misket limonu kabuğunu içkinin üzerine sık, at."],
        garnish: "Misket limonu kabuğu yağı; varsa kişniş çiçeği", note: "Batch / dondurucu Gimlet: 500 ml cin + 250 ml cordial + 150 ml su (dilüsyon) karıştır, şişede dondurucuda tut, doğrudan soğuk bardağa dök."
      }
    },
    {
      t: "text", h: "Super Juice: asit ayarlı narenciye",
      html: "<p>Nickle Morris'in popülerleştirdiği teknik: misket limonunun kabuğundaki yağlar ve toz asitler suyla birleştirilerek, aynı miktar meyveden <b>yaklaşık 10 kat daha fazla</b> 'misket limonu suyu' elde edilir. Kabuktan gelen aroma + doğru asit oranı = taze suya çok yakın bir tat ve daha uzun dayanım (buzdolabında 3–5 gün, taze suda 1 gün).</p>"
    },
    {
      t: "formula", h: "Formül · Misket Limonu Super Juice", r: {
        id: "f-super-juice", name: "Misket Limonu Super Juice", yield: "~1,1 L",
        ing: [["100 g", "Misket limonu kabuğu (~10 meyve; kabuk + bir miktar beyaz kısım olabilir)"], ["44 g", "Sitrik asit"], ["22 g", "Malik asit (yoksa toplam 66 g sitrik)"], ["1000 g", "Su"], ["İsteğe bağlı", "Aynı limonların sıkılmış suyu"]],
        steps: ["Limonları soy, kabukları tart.", "Kabukları toz asitlerle bir kapta karıştır, 1–2 saat beklet (oleo citrate: asit, kabuktan yağı çeker).", "Suyu ekle, blenderda 45–60 sn çek.", "İnce süzgeç + superbag ile süz.", "İstersen limonların kendi suyunu da ekle (oranı az değiştirir; tat al)."],
        note: "Limon için: 100 g limon kabuğu + 60 g sitrik asit + 1000 g su. Hesaplayıcıyı kullanarak kendi kabuk ağırlığına göre ölçekle."
      }
    },
    { t: "calc", h: "Hesaplayıcı: Super Juice", id: "superjuice" },
    {
      t: "text", h: "Shrub: sirke ile korunan meyve",
      html: "<p>Shrub, meyve + şeker + sirkeden yapılan tatlı-ekşi bir 'içme sirkesi'dir. Asit kaynağı sirkedeki asetik asittir (~%5–6). Klasik oran <b>1 meyve : 1 şeker : 1 sirke</b> (ağırlıkça). pH genellikle 3,0–3,5 arasıdır; bu yüzden buzdolabında aylarca dayanır.</p><ul><li><b>Soğuk proses:</b> Meyve + şeker 1–2 gün buzdolabında, oluşan şurup süzülür, sirke eklenir. Taze, canlı tat.</li><li><b>Sıcak proses:</b> Meyve + şeker + su kaynatılır, süzülür, sirke eklenir. Hızlı, reçel tadına yakın.</li><li><b>Dinlendirme:</b> Sirke keskinliği 1 haftada yumuşar.</li></ul>"
    },
    {
      t: "table", h: "Sirke seçimi",
      cols: ["Sirke", "Karakter", "Eşleşme"],
      rows: [
        ["Elma sirkesi", "Meyveli, yumuşak", "Her şey; başlangıç için en güvenli"],
        ["Beyaz şarap / şampanya sirkesi", "Temiz, zarif", "Çilek, şeftali, çiçekler"],
        ["Kırmızı şarap sirkesi", "Tanenli, koyu", "Vişne, erik, böğürtlen"],
        ["Balzamik", "Tatlı, yoğun", "Çilek, incir (küçük oranda karıştır)"],
        ["Pirinç sirkesi", "Hafif, düşük asit", "Asya profilli, salatalık, zencefil"],
        ["Üzüm sirkesi (ev yapımı)", "Köy tipi, canlı", "Anadolu meyveleri: dut, erik, ayva"]
      ]
    },
    {
      t: "table", h: "Fire (atık) değerlendirme: sıfır atık shrub",
      cols: ["Fire", "Nasıl kullanılır", "Oran (fire : şeker : sirke)"],
      rows: [
        ["Narenciye kabuğu ve sıkılmış kabukları", "Şekerle oleo yap, sirkeyle çöz", "1 : 1 : 0,7"],
        ["Çilek sapları ve uçları", "Şekerle 24 sa beklet", "1 : 1 : 1"],
        ["Ananas kabuğu ve göbeği", "Doğra, şekerle 48 sa", "1 : 0,8 : 0,8"],
        ["Karpuz kabuğu (beyaz kısım)", "Rendele, şekerle 24 sa", "1 : 0,8 : 0,6"],
        ["Elma ve armut kabuk-çekirdek evi", "Sıcak proses, 10 dk kaynat", "1 : 1 : 1"],
        ["Mango kabuğu", "Şekerle 24 sa", "1 : 1 : 0,8"],
        ["Ot sapları (fesleğen, nane, kişniş)", "Sıcak şuruba demle", "1 : 5 : 3 (çok aromatik)"]
      ],
      foot: "Uyarı: Şeftali, kayısı, kiraz gibi sert çekirdekli meyvelerin çekirdek içleri amigdalin taşır ve parçalandığında siyanür açığa çıkarabilir. Çekirdekleri kırma ve öğütme."
    },
    {
      t: "formula", h: "Formül · Ananas Kabuğu Shrub", r: {
        id: "f-pineapple-shrub", name: "Ananas Kabuğu & Karabiber Shrub", yield: "~800 ml",
        ing: [["500 g", "Ananas kabuğu + göbek (iyice yıkanmış)"], ["400 g", "Şeker"], ["5 g", "İri kırılmış karabiber"], ["400 g", "Elma sirkesi"]],
        steps: ["Kabukları 2–3 cm doğra, şeker ve karabiberle bir kavanozda karıştır.", "Kapağı kapat, buzdolabında 48 saat beklet; günde bir kez çalkala.", "Oluşan şurubu kabukları sıkarak süz.", "Sirkeyi ekle, çözünmemiş şeker kalmayana kadar karıştır.", "1 hafta buzdolabında dinlendir."],
        note: "Kullanım: 50 ml rom + 25 ml shrub + soda = ananaslı highball. Buzdolabında 3–6 ay."
      }
    }
  ],
  quiz: [
    { q: "Misket limonu suyunun yaklaşık asit bileşimi nedir?", o: ["%6 sitrik", "%4 sitrik + %2 malik", "%2 tartarik", "%1 malik"], a: 1, why: "Misket limonu sitrik ve malik asidi yaklaşık 2:1 oranında taşır." },
    { q: "Hangi asit en uzun süren, 'sulu' ekşilik verir?", o: ["Sitrik", "Malik", "Askorbik", "Asetik"], a: 1, why: "Malik asit damakta daha uzun kalır; yeşil elma karakterinin kaynağıdır." },
    { q: "Portakal suyunu misket limonu gücüne getirmek için 1 L'ye yaklaşık ne eklenir?", o: ["5 g sitrik", "32 g sitrik + 20 g malik", "60 g tartarik", "100 g şeker"], a: 1, why: "Portakal ~%0,9 asit taşır; ~5 puan eklemek gerekir." },
    { q: "Super Juice'ta aroma nereden gelir?", o: ["Toz asitlerden", "Kabuktaki uçucu yağlardan", "Şekerden", "Sirkeden"], a: 1, why: "Toz asitler ekşiliği, kabuk yağları ise narenciye aromasını sağlar." },
    { q: "Klasik shrub oranı nedir (ağırlıkça)?", o: ["1 meyve : 1 şeker : 1 sirke", "2 : 1 : 0,1", "1 : 3 : 1", "1 : 0 : 1"], a: 0, why: "Eşit oranlar dengeli, uzun ömürlü bir shrub verir." },
    { q: "Askorbik asit cordial'da ne amaçla kullanılır?", o: ["Ana ekşilik", "Oksidasyonu ve kararmayı önlemek", "Tatlılık", "Köpük"], a: 1, why: "C vitamini antioksidandır; renk ve tazeliği korur." }
  ]
});
