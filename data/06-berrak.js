/* Bölüm 06 — Clarification (Berraklaştırma) */
HB.add({
  id: "berrak",
  no: "06",
  title: "Berraklaştırma",
  en: "Clarification",
  level: "İleri",
  lead: "Berraklaştırma, bir sıvıdaki askıda katıları, pektini, proteinleri ve polifenolleri uzaklaştırıp tadı korumaktır. Berrak içkiler daha temiz görünür, karbonatlanabilir, uzun süre dayanır ve ağızda daha ipeksi hissedilir.",
  blocks: [
    {
      t: "table", h: "Yöntem haritası",
      cols: ["Yöntem", "Prensip", "Süre", "Ne için?"],
      rows: [
        ["Süt ile (milk washing / milk punch)", "Asit kazeini pıhtılaştırır, pıhtı filtre görevi görür", "2–24 sa", "Bütün kokteyller, tanenli içkiler, punch"],
        ["Agar-agar", "Jel ağı katıları hapseder, sıvı dışarı süzülür", "~1 sa", "Meyve suları, püreler"],
        ["Jelatin donup-çözme", "Donmuş jel yavaşça çözülürken berrak sıvı süzülür", "2–3 gün", "Hassas meyve suları, et suyu"],
        ["Pektinaz + çöktürme", "Enzim pektini parçalar, katılar dibe çöker", "Saatler", "Elma, armut, ananas suları"],
        ["Santrifüj", "Yüksek ivme katıları dibe yapıştırır", "10–20 dk", "Yüksek hacim, profesyonel bar"],
        ["İkili berraklaştırıcı (Kieselsol + Chitosan)", "Zıt yükler partikülleri topaklayıp çöktürür", "12–24 sa", "Santrifüjsüz büyük hacim"]
      ]
    },
    {
      t: "text", h: "Sütle berraklaştırmanın kimyası",
      html: "<p>Süt proteinlerinin ~%80'i <b>kazein</b>dir. Kazein, sütte 'misel' adı verilen küçük kümeler halinde, negatif yüklü ve kalsiyumla dengelenmiş olarak yüzer. Ortamın pH'ı <b>4,6</b>'ya (kazeinin izoelektrik noktası) düştüğünde yükler nötrleşir, miseller birbirine yapışır ve <b>pıhtı (curd)</b> oluşur. Alkol de bu pıhtılaşmayı hızlandırır.</p><p>Pıhtı oluşurken bir ağ gibi davranır: içkideki <b>polifenolleri, tanenleri, pigmentleri ve partikülleri</b> hapseder. Sıvı kısım, yani <b>peynir altı suyu (whey)</b> proteinleri (laktalbumin, laktoglobulin) ve laktoz ise içkide kalır. Sonuç:</p><ul><li>Kristal berraklık</li><li>Buruklukta belirgin azalma (tanenler pıhtıda kalır)</li><li>Peynir altı suyu proteinlerinden gelen ipeksi ağız hissi</li><li>Uzun raf ömrü (doğru ABV ve şekerde aylarca)</li></ul>"
    },
    {
      t: "table", h: "Milk punch parametreleri",
      cols: ["Parametre", "Değer", "Neden"],
      rows: [
        ["Süt oranı", "Punch hacminin %20–25'i (1 süt : 4 punch)", "Daha az süt = yetersiz filtre; fazlası = tat sulanır"],
        ["Süt türü", "Tam yağlı (%3,5) inek sütü", "Kazein ve yağ en iyi filtreyi kurar. Yağsız süt daha zayıf pıhtı yapar."],
        ["Asit", "Punch pH'ı ≤ 3,5; tipik olarak toplam hacmin %8–15'i narenciye suyu", "pH 4,6'nın belirgin altına inmezse pıhtı eksik olur, bulanık kalır"],
        ["Sıcaklık", "Soğuk süt (4–6 °C) + oda sıcaklığında punch", "Soğuk süt temiz, iri pıhtı verir. Sıcak süt daha hızlı ama süt tadı daha belirgin."],
        ["Bekleme", "Karıştırmadan 30 dk – gece boyu (buzdolabı)", "Pıhtı sıkılaşır, daha iyi süzer"],
        ["Süzme", "Kahve filtresi; ilk bulanık kısım tekrar pıhtının üstünden geçirilir", "Pıhtı yatağı asıl filtredir"]
      ]
    },
    {
      t: "steps", h: "Milk punch adım adım",
      items: [
        "<b>Punch'ı hazırla:</b> Alkol, narenciye, şeker, çay, baharat ve diğer malzemeleri karıştır. Asidin yeterli olduğundan emin ol; tatlı ve asitsiz içkiyse %15'lik sitrik asit çözeltisi hazırla.",
        "<b>Sütü ölç:</b> Punch hacminin %25'i kadar soğuk tam yağlı süt.",
        "<b>Birleştir:</b> En yaygın modern yöntem: punch'ı sütün içine yavaşça dök (iri ve temiz pıhtı). Alternatif (Dave Arnold yöntemi): sütü içkiye ekle; asit fazlayken ani pıhtılaşma olur. İki yöntem de çalışır; tutarlılık için birini seç.",
        "<b>Bir kez karıştır:</b> Hafifçe karıştır ve pıhtıların oluştuğunu gör. Asitsiz içkide sitrik çözeltisini kesilme görülene kadar azar azar ekle.",
        "<b>Beklet:</b> Karıştırmadan en az 30 dk, ideali buzdolabında gece boyu.",
        "<b>Süz:</b> Kahve filtresi (veya superbag + kahve filtresi) olan huniye yavaşça dök. İlk gelen bulanık kısmı topla ve tekrar filtrenin üstüne dök.",
        "<b>Sabret:</b> Pıhtı yatağı oturdukça sıvı berraklaşır. 1 L için 2–6 saat sürebilir. Filtreye dokunma veya sıkma.",
        "<b>Son ayar:</b> Berraklaştırma tatlılık ve asitliği bir miktar düşürür. Şeker ve asit pıhtıdan geçer; gerekirse son üründe ayarla.",
        "<b>Şişele:</b> Temiz şişede buzdolabında. %20+ ABV ve yeterli şekerde aylarca dayanır."
      ]
    },
    { t: "calc", h: "Hesaplayıcı: Milk punch", id: "milkpunch" },
    {
      t: "text", h: "Agar-agar ile berraklaştırma",
      html: "<p>Dave Arnold'un hızlı yöntemi. Agar, deniz yosunundan elde edilen bir jelleştiricidir: 85–95 °C'de çözülür, ~35–40 °C'de jel olur. Meyve suyuna çok düşük oranda (<b>%0,2</b>) eklendiğinde zayıf, kırılgan bir jel oluşur. Bu jel bütün katıları hapseder; jel kırılıp süzüldüğünde berrak sıvı dışarı akar.</p>"
    },
    {
      t: "steps", h: "Agar berraklaştırma (1 L meyve suyu / püre)",
      items: [
        "<b>Ölç:</b> 1000 g meyve suyu veya sulandırılmış püre için 2 g agar (%0,2).",
        "<b>Çöz:</b> Sıvının ~1/4'ünü (250 g) veya 250 g suyu tencereye al, agarı çırparak ekle, 2 dk kaynat (agar tamamen çözülmeli).",
        "<b>Temperle:</b> Kalan meyve suyunu oda sıcaklığında tut (soğuk değil). Sıcak agar karışımını sürekli çırparak meyve suyuna dök. Soğuk suya dökersen agar anında topaklanır.",
        "<b>Jelleştir:</b> Kabı buzlu su banyosuna koy, karıştırmadan jel olmasını bekle (10–20 dk).",
        "<b>Kır:</b> Jeli çırpma teliyle küçük parçalara böl (yoğurt kıvamı).",
        "<b>Süz:</b> Tülbent veya superbag içine dök, çok hafif sık (aşırı sıkarsan jel parçaları geçer). Berrak sıvı süzülür.",
        "<b>Verim:</b> ~%75–80. Kalan jel tatlılarda kullanılabilir."
      ]
    },
    {
      t: "note", kind: "tip", h: "Berrak misket limonu suyu",
      html: "Aynı yöntem misket limonu suyu için de çalışır (%0,2 agar). Berrak misket limonu suyu karbonatlanabilir: berrak bir 'Gimlet highball' veya karbonatlı Margarita için kullanılır. Tadı taze suya çok yakındır ama aynı gün kullanılmalıdır."
    },
    {
      t: "text", h: "Pektinaz (Pectinex) ve santrifüj mantığı",
      html: "<p><b>Pektin</b>, meyve hücre duvarındaki uzun zincirli bir polisakkarittir; katı parçacıkları askıda tutan 'ağ'ı oluşturur ve suyu bulanık, kıvamlı yapar. <b>Pektinaz</b> enzimi (örn. Pectinex Ultra SP-L) bu zincirleri keser: viskozite düşer, parçacıklar serbest kalıp çökebilir.</p><ul><li><b>Doz:</b> Meyve suyu ağırlığının ~%0,1–0,2'si (1 kg için 1–2 g).</li><li><b>Süre:</b> Oda sıcaklığında 15–30 dk (enzim 45–50 °C'de en aktif, 60 °C üstünde ölür).</li><li><b>Sonra:</b> Santrifüj veya dinlendirme (buzdolabında gece boyu) + sifonla üstten alma.</li></ul><p><b>Santrifüj:</b> Sıvıyı dakikada binlerce devirde döndürerek yer çekiminin binlerce katı ivme uygular (bar kullanımında tipik olarak ~4000 × g, 10–15 dk). Ağır katılar tüpün dibine 'pellet' olarak yapışır, berrak sıvı üstten dökülür. Pektinaz + santrifüj birlikte kullanıldığında en hızlı ve en yüksek verimli yöntemdir (~%85–95 verim).</p>"
    },
    {
      t: "table", h: "Pratik dozlar",
      cols: ["Malzeme", "Doz", "Süre", "Not"],
      rows: [
        ["Pectinex Ultra SP-L", "1–2 g / kg", "15–30 dk", "Önce enzim, sonra santrifüj"],
        ["Agar-agar", "2 g / kg (%0,2)", "~1 sa", "Kaynatıp temperle"],
        ["Jelatin (donup-çözme)", "5 g / kg (~%0,5)", "Dondur + 24–48 sa çözme", "Buzdolabında tülbent üstünde çözdür"],
        ["Kieselsol + Chitosan", "Ürün etiketine göre (şarap berraklaştırıcı)", "12–24 sa", "Önce Kieselsol, 1 sa sonra Chitosan"],
        ["Süt (milk washing)", "Punch'ın %20–25'i", "30 dk – 12 sa", "pH ≤ 3,5 olmalı"]
      ]
    },
    {
      t: "formula", h: "Trend tarif · Clarified Piña Colada (Batch)", r: {
        id: "f-clear-pina-colada", name: "Clarified Piña Colada — Batch", yield: "~1 L (10–11 servis × 90 ml)",
        ing: [["300 ml", "Beyaz rom (tercihen hindistan cevizi yağıyla yıkanmış)"], ["100 ml", "Yıllanmış / koyu rom"], ["250 ml", "Taze ananas suyu"], ["150 ml", "Hindistan cevizi kreması (tatlandırılmış, Coco López tipi)"], ["75 ml", "Taze misket limonu suyu"], ["25 ml", "1:1 şurup"], ["2 ml", "%20 tuzlu su"], ["225 ml", "Soğuk tam yağlı süt (punch'ın ~%25'i)"]],
        steps: ["Süt dışındaki tüm malzemeleri bir sürahide iyice karıştır. Hindistan cevizi kreması tamamen dağılmalı.", "Soğuk sütü ayrı bir kaba koy. Punch'ı yavaşça sütün içine dök; hemen pıhtılaşma görülür.", "Bir kez hafifçe karıştır, buzdolabında 2–12 saat beklet.", "Kahve filtresi olan huniye pıhtıyla birlikte yavaşça dök. İlk bulanık kısmı tekrar üstten geçir.", "Süzülme bittikten sonra tat; gerekirse 10–15 ml şurup ve birkaç damla tuzlu su ekleyerek ayarla.", "Şişele ve buzdolabında sakla."],
        note: "Hindistan cevizi kremasındaki yağ, süt pıhtısının içinde hapsolur; bu yüzden içki tamamen şeffaf olur ama hindistan cevizi aroması kalır. Servis: büyük şeffaf buz üzerine 90 ml, ya da buzla 10 sn karıştırıp coupe'ye. Garnitür: kurutulmuş ananas dilimi veya ananas yaprağı."
      }
    },
    {
      t: "recipe", h: "Servis kartı", r: {
        id: "r-clear-pina-colada", name: "Clarified Piña Colada", en: "Crystal Clear Piña Colada", base: "Rom",
        glass: "Rocks veya highball, büyük şeffaf buz", method: "Bardakta kur veya 10 sn stir", ice: "Şeffaf blok veya collins buz",
        ing: [["90 ml", "Clarified Piña Colada batch"], ["İsteğe bağlı 30 ml", "Soğuk soda (highball versiyonu)"]],
        steps: ["Batch'i buzlu bardağa dök.", "Highball istiyorsan soda ekle, bir kez dipten kaldır."],
        garnish: "Kurutulmuş ananas dilimi, ananas yaprağı", note: "Misafire önce görmeden tattırmak klasik bir 'wow' anıdır: görünüm su, tat Piña Colada."
      }
    },
    {
      t: "tips", h: "Berraklaştırma püf noktaları",
      items: [
        "<b>Sabır = berraklık:</b> Süt yöntemi aceleye gelmez. Filtreyi sıkmak veya karıştırmak bütün işi bozar.",
        "<b>Pıhtıyı filtre gibi kullan:</b> Filtrenin altında oturan pıhtı katmanı en iyi filtredir; ilk bulanık kısmı her zaman tekrar üstten dök.",
        "<b>Vegan alternatif:</b> Soya sütü veya yulaf sütü bazen çalışır ama pıhtı zayıftır. Hindistan cevizi sütü pıhtılaşmaz. Vegan için agar veya pektinaz + santrifüj tercih et.",
        "<b>Alerjen:</b> Süt ile berraklaştırılmış içkiler laktoz ve süt proteini taşır. Menüde belirt.",
        "<b>Karbonasyon:</b> Sadece berrak sıvılar iyi karbonatlanır; partiküller CO2 için çekirdek oluşturup köpürme yapar.",
        "<b>Isı:</b> Santrifüj ve agar dışında hiçbir yöntem ısı gerektirmez; taze meyve tadı korunur."
      ]
    }
  ],
  quiz: [
    { q: "Kazein hangi pH değerinde pıhtılaşır (izoelektrik nokta)?", o: ["7,0", "6,5", "4,6", "2,0"], a: 2, why: "pH 4,6'da kazein misellerinin yükü nötrleşir ve birbirine yapışırlar." },
    { q: "Milk punch'ta tipik süt oranı nedir?", o: ["Punch hacminin %5'i", "Punch hacminin %20–25'i", "%50", "%100"], a: 1, why: "Yaklaşık 1 süt : 4 punch dengeli bir filtre oluşturur." },
    { q: "Agar ile berraklaştırmada standart oran nedir?", o: ["%0,2", "%2", "%5", "%10"], a: 0, why: "Çok zayıf ve kırılgan bir jel istenir: ~2 g/kg." },
    { q: "Pektinaz ne işe yarar?", o: ["Şeker ekler", "Pektin zincirlerini parçalayıp katıların çökmesini sağlar", "Rengi koyulaştırır", "Alkolü artırır"], a: 1, why: "Enzim, parçacıkları askıda tutan pektin ağını keser." },
    { q: "Milk punch'ta tanenler nereye gider?", o: ["İçkide kalır", "Süt pıhtısında hapsolur", "Buharlaşır", "Şekere dönüşür"], a: 1, why: "Kazein polifenol ve tanenlere bağlanır; bu yüzden içki daha az buruk olur." },
    { q: "Agar karışımını neden soğuk meyve suyuna dökmemeliyiz?", o: ["Renk değişir", "Agar anında topaklanır", "Asit kaybolur", "Alkol buharlaşır"], a: 1, why: "Agar ~35–40 °C'de jelleşir; soğuk sıvıda kontrolsüz topaklar oluşur." }
  ]
});
