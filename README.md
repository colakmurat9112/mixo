# Ultimate Modern Mixology Handbook

Başlangıçtan moleküler miksolojiye kadar interaktif bar el kitabı. Kurulabilir bir web uygulamasıdır (PWA): telefonda ana ekrana eklenir ve internet olmadan da çalışır.

## İçerik

- 9 bölüm: Temel Teknikler, İnfüzyonlar (100 eşleşme), Şuruplar, Cordial & Shrub, Bitter & Tentür, Fat-Washing, Berraklaştırma, Moleküler Miksoloji, İleri Teknikler
- 10 kokteyl, 12 formül, 9 hesaplayıcı, 54 quiz sorusu ve flashcard modu
- Favoriler, "öğrendim" işaretleri ve kişisel notlar (cihazda saklanır)

## Dosya yapısı

```
index.html             Uygulama kabuğu ve tasarım
manifest.webmanifest   Uygulama adı, ikonlar, renkler (ana ekrana ekleme)
sw.js                  Service worker (çevrimdışı çalışma)
js/app.js              Arayüz, arama, quiz, favoriler
js/calcs.js            Hesaplayıcılar
data/00-…08-*.js       Bölüm içerikleri (her bölüm ayrı modül)
icons/                 Uygulama ikonları
.nojekyll              GitHub Pages'in dosyaları olduğu gibi sunması için
```

## GitHub Pages'e yükleme

1. GitHub'da yeni bir repo oluştur (ör. `mixology-handbook`). Public olmalı (ücretsiz planda Pages için).
2. **Add file → Upload files** ile bu klasörün **içindeki** her şeyi sürükle bırak (`index.html` repo kökünde olmalı, `js`, `data`, `icons` klasörleriyle birlikte). Commit et.
3. **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, klasör = `/ (root)`. Kaydet.
4. 1–2 dakika sonra adres: `https://KULLANICI-ADIN.github.io/mixology-handbook/`

> Not: `.nojekyll` gizli bir dosyadır; bazı bilgisayarlarda sürüklerken görünmeyebilir. Yüklenmese de uygulama çalışır.

## Telefona uygulama olarak ekleme

**iPhone (Safari):** Adresi Safari'de aç → Paylaş butonu → **Ana Ekrana Ekle**.
**Android (Chrome):** Adresi aç → sağ üst menü → **Uygulamayı yükle** veya **Ana ekrana ekle**.

İlk açılıştan sonra bütün içerik telefona kaydedilir; barda internet olmasa da çalışır.

## İçeriği güncelleme

1. `data/` içindeki ilgili dosyayı düzenle.
2. `sw.js` dosyasının başındaki `const VERSION = "v1";` değerini artır (ör. `"v2"`). Bunu yapmazsan telefonlar eski dosyaları göstermeye devam edebilir.
3. Commit et. Telefonda uygulamayı bir kez açıp kapattıktan sonra yeni içerik görünür.

## Notlar

- Favoriler, notlar ve ilerleme cihazın tarayıcısında saklanır; cihazlar arasında senkronize olmaz. iPhone'da ana ekran uygulaması ile Safari ayrı depolama kullanır.
- Yazı tipleri Google Fonts'tan yüklenir ve ilk açılışta önbelleğe alınır; çevrimdışıyken önbellekte yoksa sistem yazı tipi kullanılır.
