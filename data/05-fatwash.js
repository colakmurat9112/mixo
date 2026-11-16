/* Bölüm 05 — Fat-Washing (Yağ Yıkama) */
HB.add({
  id: "fatwash",
  no: "05",
  title: "Fat-Washing",
  en: "Yağ Yıkama",
  level: "Orta",
  lead: "Yağ yıkama, yağda çözünen aroma bileşiklerini alkole aktarıp yağın kendisini geri almaktır. Sonuç: tereyağı, susam veya pastırma tadında ama yağsız, berrak ve daha yumuşak bir içki.",
  blocks: [
    {
      t: "text", h: "Bağlama kimyası",
      html: "<p>Yağdaki aroma bileşiklerinin çoğu <b>apolar (lipofilik)</b> moleküllerdir: laktonlar, aldehitler, ketonlar, pirazinler. Etanol, su ile yağ arasında bir ara çözücü gibi davranır; bu moleküller yağ ile alkol arasında <b>dağılır (partition)</b>. Karıştırdıkça temas yüzeyi artar ve aromanın bir kısmı alkole geçer.</p><p>Ardından karışım dondurulur: yağ katılaşır, alkol donmaz. Katı yağ tabakası alınır ve sıvı süzülür. Alkolde çok az miktarda yağ asidi ve emülsiye yağ kalır; bu, içkiye daha yuvarlak, kadifemsi bir ağız hissi verir ve sert tanen algısını yumuşatır.</p><p>Bu yüzden yağ yıkanmış bir alkol hem <b>tat</b> kazanır hem <b>doku</b> değiştirir.</p>"
    },
    {
      t: "table", h: "Yağ türleri ve oranlar (750 ml alkol için)",
      cols: ["Yağ", "Miktar", "Eşleşen alkol", "Karakter", "Donma davranışı"],
      rows: [
        ["Tereyağı (tuzsuz)", "60–100 g", "Burbon, rom, konyak", "Kremamsı, sütlü", "Kolay katılaşır"],
        ["Kahverengi tereyağı (brown butter)", "80–100 g", "Burbon, rye, eski rom", "Fındık, karamel, tost", "Kolay katılaşır; süt katıları ince süzme ister"],
        ["Ghee (sade yağ)", "60–90 g", "Viski, rom", "Temiz tereyağı, süt katısı yok", "Kolay; en temiz sonuç"],
        ["Hindistan cevizi yağı (rafine edilmemiş)", "60–100 ml", "Beyaz rom, cin, tekila", "Tropikal, laktonlu", "Buzdolabında bile katılaşır (24 °C'nin altında)"],
        ["Susam yağı (kavrulmuş)", "15–30 ml", "Japon viskisi, votka, rom", "Çok güçlü, kavrulmuş", "Tam donmaz → dikkatli süzme"],
        ["Zeytinyağı (sızma)", "45–75 ml", "Cin, votka, mezcal", "Yeşil, biberli, meyvemsi", "Dondurucuda katılaşır/bulutlanır"],
        ["Pastırma yağı (bacon)", "45 ml (~1,5 oz)", "Burbon, mezcal", "İsli, tuzlu, umami", "Kolay katılaşır"],
        ["Fıstık ezmesi / fındık ezmesi", "100–150 g", "Burbon, rom", "Kavrulmuş kuruyemiş", "Katı ama tortulu; çift süzme şart"],
        ["Ördek yağı", "45–60 ml", "Armagnac, burbon", "Zengin, et suyu", "Kolay katılaşır"]
      ],
      foot: "Klasik referans: PDT barının Benton's Old Fashioned'ı, 750 ml burbona ~45 ml pastırma yağı kullanır."
    },
    { t: "calc", h: "Hesaplayıcı: Fat-wash ölçekleme", id: "fatwash" },
    {
      t: "steps", h: "Standart yöntem",
      items: [
        "<b>Yağı hazırla:</b> Katı yağları erit (60–70 °C). Pastırmayı kızart, yağını süz. Tereyağını kahverengileştireceksen aşağıdaki adımları izle.",
        "<b>Geniş kap seç:</b> Ağzı geniş, düz tabanlı plastik veya cam kap (gastronom küvet ideal). Yüzey alanı ne kadar genişse yağ tabakası o kadar ince ve kolay ayrılır.",
        "<b>Birleştir:</b> Ilık yağı oda sıcaklığındaki alkole dök, iyice karıştır veya kapalı kapta 30 sn çalkala.",
        "<b>Bekle:</b> Oda sıcaklığında 2–4 saat, her 30 dk'da bir karıştır. Güçlü yağlarda (susam) 30–60 dk yeter.",
        "<b>Dondur:</b> Kapağı kapat, dondurucuda 8–24 saat (en az yağ tamamen katılaşana kadar).",
        "<b>Yağ tabakasını kaldır:</b> Katı yağ 'disk'ini kaşık ya da spatulayla kır ve al. Bu yağı yemeklerde kullanabilirsin (alkol kokusu taşır).",
        "<b>Süz:</b> Alkol hâlâ soğukken önce ince süzgeç, sonra superbag, en son kahve filtresi.",
        "<b>Cilala:</b> Hâlâ bulanıksa tekrar 2–4 saat dondur ve kahve filtresinden ikinci kez süz."
      ]
    },
    {
      t: "table", h: "Süzme araçları",
      cols: ["Araç", "Gözenek", "Ne tutar?", "Hız"],
      rows: [
        ["İnce süzgeç (chinois)", "~1 mm", "Yağ parçaları, katılar", "Çok hızlı"],
        ["Superbag (100–250 mikron)", "0,1–0,25 mm", "Yağ kırıntıları, süt katıları", "Hızlı"],
        ["Tülbent (çift kat)", "Değişken", "Orta boy partiküller", "Orta"],
        ["Kahve filtresi (kâğıt)", "~10–20 mikron", "İnce emülsiyon, bulanıklık", "Yavaş (1 L için 1–3 saat)"],
        ["Pamuk tıkaçlı huni", "Çok ince", "Son cilalama", "Çok yavaş"]
      ]
    },
    {
      t: "tips", h: "Yağdan tamamen arındırma püf noktaları",
      items: [
        "<b>Soğukken süz:</b> Alkol ısındıkça kalan mikro yağ partikülleri tekrar sıvılaşır ve filtreden geçer. Süzme kabını da buzdolabında tut.",
        "<b>Filtreyi değiştir:</b> Kahve filtresi yağla tıkanınca akış durur. Sık değiştir; filtreyi sıkma.",
        "<b>Çift dondurma:</b> İlk süzmeden sonra 4 saat daha dondur; ikinci süzme pürüzsüz sonuç verir.",
        "<b>Süt katıları:</b> Tereyağında süt proteinleri bulanıklık ve bozulma kaynağıdır. Mümkünse ghee kullan veya brown butter'ı tülbentten geçirerek kat.",
        "<b>Sıvı yağlar (susam):</b> Donmayan yağlarda ayırma hunisi (separatory funnel) kullan veya şırınga ile alttaki alkolü çek. Ayrıca miktarı düşük tut.",
        "<b>Kokteylde test:</b> Yıkanmış alkolü buzla karıştırıp tat; yağlı bir film veya 'mumsu' his varsa bir kez daha süz.",
        "<b>Raf ömrü:</b> Kalan yağ zamanla oksitlenip ransit (acımsı) olabilir. Buzdolabında sakla, 1–3 ay içinde tüket. Koyu şişe ve dolu şişe (az hava) kullan.",
        "<b>Alerjen:</b> AB gıda mevzuatı (LMIV) 14 alerjeni tanımlar: süt, susam, yer fıstığı, sert kabuklu yemişler dahil. Menüde fat-wash malzemesini belirt."
      ]
    },
    {
      t: "steps", h: "Kahverengi tereyağı (brown butter) nasıl yapılır?",
      items: [
        "Tuzsuz tereyağını kalın tabanlı açık renkli bir tavada orta ateşte erit (rengini görebilmek için).",
        "Köpürecek: bu suyun buharlaşmasıdır. Sürekli çevir.",
        "Köpük azalınca dipteki süt katıları önce altın, sonra fındık kahvesi rengini alır (yaklaşık 6–8 dk). Fındık ve karamel kokusu: Maillard reaksiyonu.",
        "Siyahlaşmadan hemen ocaktan al ve soğuk bir kaba aktar (tava ısısı pişirmeye devam eder).",
        "Lezzetin çoğu kahverengi katılardadır: alkole onlarla birlikte ekle, süzme aşamasında ayır."
      ]
    },
    {
      t: "formula", h: "Trend tarif · Brown Butter & Sage Washed Bourbon", r: {
        id: "f-brown-butter-bourbon", name: "Kahverengi Tereyağı & Adaçayı Burbon", yield: "~700 ml",
        ing: [["750 ml", "Burbon (yüksek mısırlı, %45+ tercih)"], ["100 g", "Tuzsuz tereyağı"], ["8", "Taze adaçayı yaprağı"]],
        steps: ["Tereyağını tavada erit; köpürmeye başlayınca adaçayı yapraklarını ekle.", "Tereyağı fındık rengine dönüp adaçayı çıtırlaşana kadar (6–8 dk) pişir.", "Ocaktan al, 2–3 dk dinlendir (~60–70 °C).", "Burbonu geniş bir kaba koy, tereyağını katılarla ve adaçayıyla birlikte ekle, karıştır.", "Oda sıcaklığında 2 saat beklet, her 30 dk'da bir karıştır.", "Gece boyu (12+ saat) dondurucuya koy.", "Yağ diskini kaldır; soğukken süzgeç → superbag → kahve filtresi ile süz.", "Temiz şişeye doldur, buzdolabında sakla."],
        note: "Adaçayının kafurlu-otsu notası tereyağının ağırlığını keser. Kalan adaçaylı tereyağını makarnada kullan."
      }
    },
    {
      t: "recipe", h: "Trend kokteyl · Brown Butter Manhattan", r: {
        id: "r-sage-manhattan", name: "Adaçayı & Kahverengi Tereyağı Manhattan", en: "Brown Butter Sage Manhattan", base: "Burbon",
        glass: "Soğutulmuş coupe veya Nick & Nora", method: "Stir (25–30 sn)", ice: "Servis buzsuz",
        ing: [["50 ml", "Kahverengi tereyağı & adaçayı yıkanmış burbon"], ["20 ml", "Tatlı vermut (zengin, vanilyalı bir tür)"], ["5 ml", "Amaro (örn. Averna tipi karamel-portakal)"], ["2 dash", "Aromatik bitter"], ["1 dash", "Portakal bitter"]],
        steps: ["Tüm malzemeleri buz dolu mixing glass'a koy.", "25–30 sn karıştır.", "Soğuk bardağa süz."],
        garnish: "Kızarmış (tereyağında) tek adaçayı yaprağı veya portakal kabuğu yağı", note: "Fat-wash alkolün tanenlerini yumuşattığı için vermut oranı klasik 2:1'den daha düşük tutuldu; içki ağır değil, kadifemsi kalır."
      }
    },
    {
      t: "table", h: "Hızlı eşleşme fikirleri",
      cols: ["Kombinasyon", "Kokteyl önerisi"],
      rows: [
        ["Pastırma yağı + burbon", "Benton's tarzı Old Fashioned (akçaağaç şurubu + aromatik bitter)"],
        ["Hindistan cevizi yağı + beyaz rom", "Clarified Piña Colada (sonraki bölüm), Daiquiri"],
        ["Zeytinyağı + cin", "Zeytinyağlı Martini (kuru vermut, limon kabuğu)"],
        ["Kavrulmuş susam yağı + Japon viskisi", "Highball (soda + 1 damla tuzlu su)"],
        ["Fıstık ezmesi + burbon", "PB&J Sour (frenk üzümü/ahududu şurubu)"],
        ["Ghee + kakule + rom", "Hint baharatlı Hot Buttered Rum (soğuk servis)"],
        ["Ördek yağı + Armagnac", "Sidecar varyasyonu"],
        ["Kahverengi tereyağı + mezcal", "Mezcal Old Fashioned (agave şurubu + mole bitter)"]
      ]
    }
  ],
  quiz: [
    { q: "Fat-washing'de aromayı alkole aktaran prensip nedir?", o: ["Fermentasyon", "Apolar aroma bileşiklerinin yağ ve alkol arasında dağılması", "Isıyla buharlaştırma", "Asitle çöktürme"], a: 1, why: "Lipofilik moleküller hem yağda hem etanolde çözünebilir; temas süresince alkole geçerler." },
    { q: "Yağı alkolden ayırmanın temel adımı hangisidir?", o: ["Kaynatmak", "Dondurmak ve katılaşan yağı almak", "Şeker eklemek", "Karbonatlamak"], a: 1, why: "Yağ donar, alkol donmaz; katı yağ tabakası mekanik olarak ayrılır." },
    { q: "750 ml burbon için klasik pastırma yağı miktarı yaklaşık nedir?", o: ["5 ml", "45 ml", "300 ml", "750 ml"], a: 1, why: "Benton's Old Fashioned referansı ~1,5 oz (45 ml)." },
    { q: "Neden geniş ağızlı bir kap tercih edilir?", o: ["Daha hızlı ısınsın diye", "Yağ ince bir tabaka oluşturur ve kolay ayrılır", "Alkol buharlaşsın diye", "Daha estetik"], a: 1, why: "Geniş yüzey, temas alanını artırır ve katı yağ diskini ince yapar." },
    { q: "Kahverengi tereyağının fındık-karamel tadını veren reaksiyon nedir?", o: ["Fermentasyon", "Maillard reaksiyonu", "Oksidasyon", "Hidroliz"], a: 1, why: "Süt katılarındaki proteinler ve şekerler ısıyla Maillard ürünleri oluşturur." },
    { q: "Hangi yağ dondurucuda tam katılaşmaz ve dikkatli süzme ister?", o: ["Tereyağı", "Hindistan cevizi yağı", "Kavrulmuş susam yağı", "Pastırma yağı"], a: 2, why: "Susam yağı doymamış yağ asidi oranı yüksek olduğundan düşük sıcaklıkta da sıvı kalır." }
  ]
});
