/* Bölüm 00 — Temel Teknikler (Foundations) */
HB.add({
  id: "temel",
  no: "00",
  title: "Temel Teknikler",
  en: "Foundations",
  level: "Başlangıç",
  lead: "İleri tekniklerin hepsi aynı dört dengeye dayanır: tatlı, ekşi, güç (alkol) ve su (dilüsyon). Bu bölüm hızlı bir tekrar; ölçüler ml cinsindendir.",
  blocks: [
    {
      t: "text", h: "Denge üçgeni: Tatlı – Ekşi – Güç",
      html: "<p>Bir kokteyl, alkolün sertliği ile şekerin yumuşatıcı etkisi ve asidin canlılığı arasındaki dengedir. Su (buzdan gelen dilüsyon) dördüncü, görünmeyen malzemedir. Şeker ve asit birbirini maskeler: asidi artırırsan daha fazla şeker gerekir, şekeri artırırsan daha fazla asit.</p><p>Referans noktası olarak <b>%6 asit</b> (taze misket limonu / limon suyu) ve <b>1:1 şurup (yaklaşık 50 Brix)</b> kabul edilir. Diğer bütün bölümlerdeki hesaplar bu iki referansa göre yapılır.</p>"
    },
    {
      t: "table", h: "Klasik oran aileleri",
      cols: ["Aile", "Oran", "Örnek ölçü", "Not"],
      rows: [
        ["Sour (Ekşi)", "8 : 3 : 3", "60 ml alkol · 22,5 ml asit · 22,5 ml 1:1 şurup", "Daiquiri, Whiskey Sour, Gimlet tabanı"],
        ["Eski usul Sour", "2 : 1 : 1", "50 · 25 · 25", "Daha tatlı-ekşi, düşük alkollü bazlarda iyi"],
        ["Old Fashioned", "Alkol + şeker + bitter", "60 ml · 5–7,5 ml 2:1 şurup · 2–3 dash", "Karıştırılır (stir), büyük buz"],
        ["Martini / Manhattan", "Alkol : aromatize şarap", "Martini 50:10 – 40:20 · Manhattan 50:25", "Karıştırılır, buzsuz servis"],
        ["Highball", "1 : 3", "50 ml alkol · 150 ml soda/tonik", "Bardakta kurulur (build)"],
        ["Negroni ailesi", "1 : 1 : 1", "30 · 30 · 30", "Eşit parça, karıştırılır"],
        ["Fizz / Collins", "Sour + soda", "50 · 25 · 20 + 60–90 ml soda", "Önce çalkalanır, sonra soda eklenir"]
      ]
    },
    {
      t: "table", h: "Dilüsyon ve son alkol oranı",
      cols: ["Teknik", "Eklenen su (başlangıç hacmine göre)", "Son ABV", "Süre"],
      rows: [
        ["Çalkalama (shake)", "~%40–60", "~%15–20", "10–15 sn sert çalkalama"],
        ["Karıştırma (stir)", "~%25–40", "~%21–29", "20–40 sn (buzun ıslaklığına göre)"],
        ["Fırlatma (throw)", "~%20–30", "~%22–27", "6–10 aktarma, az soğuma ama aerasyon"],
        ["Bardakta kurma (build)", "Servis sırasında artar", "~%8–12 (highball)", "—"],
        ["Swizzle / pebble buz", "~%50+", "~%12–16", "Bardak buğulanana kadar"]
      ],
      foot: "Rakamlar kullanılan buzun sıcaklığına, boyutuna ve ıslaklığına göre değişir. Asıl kural: aynı buz + aynı süre = tutarlı kokteyl."
    },
    {
      t: "steps", h: "Çalkalama teknikleri",
      items: [
        "<b>Standart shake:</b> Shaker'ı 2/3 oranında sert, kuru buzla doldur. 10–15 sn güçlü ve ritmik çalkala. Amaç soğutma + dilüsyon + aerasyon.",
        "<b>Dry shake (yumurta akı / aquafaba):</b> Önce buzsuz 10 sn çalkala (proteinler açılır), sonra buzla 10–12 sn çalkala.",
        "<b>Reverse dry shake:</b> Önce buzla çalkala, süz, buzu at, sonra buzsuz tekrar çalkala. Daha yoğun ve kalıcı köpük verir.",
        "<b>Whip shake:</b> 2–3 parça kırık buzla kısa ve sert çalkalama. Kırık buz üzerine servis edilen (tiki, swizzle) içkiler için kullanılır, aşırı dilüsyonu önler.",
        "<b>Double strain:</b> Hawthorne süzgeç + ince süzgeç. Buz kristallerini ve ot parçalarını tutar; şeffaf ve ipeksi içkiler için şarttır."
      ]
    },
    {
      t: "steps", h: "Karıştırma, fırlatma ve ezme",
      items: [
        "<b>Stir:</b> Mixing glass'ı buzla soğut, suyu dök, malzemeleri ekle, bar kaşığını camın iç çeperinde kaydırarak 20–40 sn karıştır. Kaşık buzu döndürmeli, çarpmamalı.",
        "<b>Throwing (lanzado):</b> Süzgeçle tutulan buzlu kaptan diğer kaba 30–50 cm yükseklikten akıt, 6–10 kez tekrarla. Şarap bazlı ve vermut ağırlıklı içkilerde aromayı açar.",
        "<b>Rolling:</b> İki kap arasında yavaşça aktarma. Domates suyu gibi kıvamlı sıvılarda köpüklenmeyi önler (Bloody Mary).",
        "<b>Muddle (ezme):</b> Naneyi ezme, bastır. Yaprak parçalanırsa klorofil ve acı tanenler çıkar. Narenciye ve meyve daha güçlü ezilebilir.",
        "<b>Swizzle:</b> Kırık buz ile bardakta swizzle çubuğunu avuçlar arasında döndürerek bardağın dışı buğulanana kadar karıştır."
      ]
    },
    {
      t: "table", h: "Buz rehberi",
      cols: ["Buz tipi", "Kullanım", "Özellik"],
      rows: [
        ["Büyük şeffaf blok (5×5 cm)", "Old Fashioned, sek servisler", "Yüzey alanı düşük → yavaş erime, düşük dilüsyon"],
        ["Standart küp (Kold-Draft tipi, 3 cm)", "Shake ve stir için", "Sert, kuru, öngörülebilir dilüsyon"],
        ["Collins çubuğu", "Highball", "Bardak boyunca tek parça, karbonasyonu korur"],
        ["Kırık / pebble buz", "Tiki, julep, swizzle", "Hızlı soğutma, yüksek dilüsyon"],
        ["Islak (erimekte olan) buz", "Kaçın", "Hesaplanmamış su ekler, tutarlılığı bozar"]
      ]
    },
    {
      t: "note", kind: "tip", h: "Şeffaf buz: yönlü dondurma (directional freezing)",
      html: "Küçük bir soğutma kutusunu (izotermik kutu) kapağı açık şekilde suyla doldur ve dondurucuya koy. Kutunun yanları yalıttığı için su yukarıdan aşağıya donar; hava kabarcıkları ve mineraller aşağı itilir. 24–36 saat sonra, alt kısım tamamen donmadan çıkar, bulanık alt kısmı ayır, bloğu ekmek bıçağı ve tokmakla kes. Kesmeden önce bloğu 10–15 dk oda sıcaklığında bekletmek çatlamayı önler."
    },
    {
      t: "tips", h: "Hızlı püf noktaları",
      items: [
        "<b>Narenciye suyu:</b> Aynı gün kullan. Misket limonu suyu sıkıldıktan 2–4 saat sonra en dengeli tadını verir, 24 saatten sonra acılaşır ve aroması düşer.",
        "<b>Tuzlu su (saline) %20:</b> 20 g tuz + 80 g su. Kokteyle 1–2 damla eklemek acılığı bastırır, meyve aromalarını öne çıkarır.",
        "<b>Bardağı soğut:</b> Dondurucuda tutulan bardak veya buzlu su ile 1 dk soğutma. Sıcak bardak içkiyi hızla ısıtır.",
        "<b>Önce ucuz malzeme:</b> Shaker'a önce şurup ve asidi, en son alkolü koy. Hata yaparsan pahalı malzeme kaybolmaz.",
        "<b>Kalibrasyon:</b> 1 oz = 29,6 ml (~30 ml), 1 dash ≈ 0,8–1 ml, 1 bar kaşığı ≈ 5 ml. Jigger'larını suyla tartarak kontrol et (1 ml su = 1 g).",
        "<b>Tadım:</b> Her içkiyi servis öncesi pipetle tat. Pipetin ucunu parmakla kapatarak birkaç damla al.",
        "<b>Yumurta güvenliği:</b> Pastörize yumurta akı ya da aquafaba (nohut suyu, içki başına 20–30 ml) kullan."
      ]
    },
    { t: "calc", h: "Hesaplayıcı: Son ABV ve dilüsyon", id: "abv" }
  ],
  quiz: [
    { q: "Klasik bir Sour için modern standart oran hangisidir?", o: ["60 ml alkol, 22,5 ml asit, 22,5 ml 1:1 şurup", "30 ml alkol, 30 ml asit, 30 ml şurup", "60 ml alkol, 10 ml asit, 40 ml şurup", "45 ml alkol, 45 ml asit, 7,5 ml şurup"], a: 0, why: "8:3:3 oranı (60 / 22,5 / 22,5) taze %6 asitli narenciye ve 1:1 şurupla dengeli bir Sour verir." },
    { q: "Çalkalanmış (shaken) bir kokteylin yaklaşık son alkol oranı nedir?", o: ["%30–35", "%15–20", "%5–8", "%40"], a: 1, why: "Çalkalama karıştırmaya göre daha fazla su ekler; sour'lar genelde %15–20 ABV civarında biter." },
    { q: "Reverse dry shake neden tercih edilir?", o: ["Daha hızlı soğuttuğu için", "Daha yoğun ve kalıcı köpük verdiği için", "Daha az şeker gerektirdiği için", "Alkolü artırdığı için"], a: 1, why: "Soğumuş sıvı buzsuz çalkalandığında proteinler daha stabil köpük oluşturur." },
    { q: "Nane ezilirken neden yaprak parçalanmamalı?", o: ["Rengi kaybolur", "Klorofil ve acı bileşikler çıkar", "Şeker çözülmez", "Buz erir"], a: 1, why: "Parçalanan yaprak hücreleri acı, otsu bileşikler bırakır. Sadece bastırmak aromatik yağları çıkarmak için yeterlidir." },
    { q: "Şeffaf buzun temel prensibi nedir?", o: ["Kaynatılmış su kullanmak", "Suyun tek yönden donması (yönlü dondurma)", "Tuz eklemek", "Çok hızlı dondurmak"], a: 1, why: "Yalıtımlı kutuda su yukarıdan aşağı donar, kabarcıklar ve mineraller alta itilir." }
  ]
});
