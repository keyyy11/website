# 🔧 Troubleshooting: News Tidak Muncul & Gambar Tidak Muncul

## Problem 1: News Tidak Muncul di news.html

### ✅ Checklist:

1. **Check Browser Console (F12)**
   - Buka `news.html` di browser
   - Tekan **F12** untuk buka Developer Tools
   - Pergi ke tab **Console**
   - Lihat jika ada error messages (warna merah)
   - Screenshot atau copy error messages

2. **Check Firestore Data**
   - Buka Firebase Console: https://console.firebase.google.com/
   - Pergi ke **Firestore Database**
   - Check jika collection **"news"** wujud
   - Check jika ada documents dalam collection
   - Jika kosong, anda perlu add news melalui admin dashboard

3. **Check Internet Connection**
   - Pastikan internet connection aktif
   - Firestore memerlukan internet untuk load data

4. **Check File Paths**
   - Pastikan files ini wujud:
     - `assets/js/news-firebase.js`
     - `assets/js/news-data.js`
   - Pastikan path betul dalam HTML

5. **Check Browser Compatibility**
   - Pastikan browser support ES6 modules
   - Try buka dengan Chrome atau Firefox
   - Pastikan tidak buka dengan `file://` protocol (gunakan local server)

### 🔍 Common Errors & Solutions:

**Error: "Failed to fetch" atau "Network error"**
- **Solution:** Check internet connection, pastikan Firestore rules betul

**Error: "Cannot find module" atau "Failed to resolve module"**
- **Solution:** Pastikan files `news-firebase.js` dan `news-data.js` wujud di folder `assets/js/`

**Error: "CORS policy"**
- **Solution:** Jangan buka file dengan `file://`, gunakan local server (contoh: VS Code Live Server, Python http.server)

**News cards kosong tapi tiada error**
- **Solution:** Firestore mungkin kosong, guna admin dashboard untuk add news

---

## Problem 2: Gambar Tidak Muncul di index.html

### ✅ Checklist:

1. **Check Browser Console (F12)**
   - Buka `index.html` di browser
   - Tekan **F12** untuk buka Developer Tools
   - Pergi ke tab **Console**
   - Lihat jika ada 404 errors untuk images
   - Pergi ke tab **Network** → filter **Img**
   - Lihat jika ada images yang failed to load

2. **Check Image Paths dalam Firestore**
   - Buka Firebase Console > Firestore Database > news collection
   - Check field **"image"** dalam setiap document
   - Pastikan path betul, contoh: `assets/images/KKTM.jpeg`
   - Jangan ada space atau special characters yang salah

3. **Check Image Files Wujud**
   - Pastikan files ini wujud di folder `assets/images/`:
     - `KKTM.jpeg`
     - `UTEM.jpeg`
     - `USIM.jpeg`
     - `UTHM.jpeg`
     - `GMI.jpeg`
     - `CHEMTRON.jpeg`

4. **Check Path Format**
   - Path mesti relative dari root folder
   - Format betul: `assets/images/KKTM.jpeg`
   - Format salah: `/assets/images/KKTM.jpeg` atau `./assets/images/KKTM.jpeg`

### 🔍 Common Errors & Solutions:

**Error: 404 Not Found untuk images**
- **Solution:** 
  - Check path dalam Firestore betul
  - Check file name betul (case-sensitive)
  - Check file wujud di folder

**Images tidak load tapi path betul**
- **Solution:** 
  - Check browser console untuk CORS errors
  - Pastikan menggunakan local server, bukan `file://`

**Images muncul di news.html tapi tidak di index.html**
- **Solution:** 
  - Check JavaScript di index.html untuk renderNewsCards function
  - Check browser console untuk JavaScript errors

---

## 🚀 Quick Fix Steps:

### Step 1: Verify Files Exist
```bash
# Check if these files exist:
- assets/js/news-firebase.js
- assets/js/news-data.js
- assets/images/KKTM.jpeg
- assets/images/UTEM.jpeg
- assets/images/USIM.jpeg
- assets/images/UTHM.jpeg
- assets/images/GMI.jpeg
- assets/images/CHEMTRON.jpeg
```

### Step 2: Check Firestore
1. Buka Firebase Console
2. Pergi ke Firestore Database
3. Check collection "news" ada dan ada documents
4. Jika kosong, login ke admin dashboard dan add news

### Step 3: Use Local Server
**Jangan buka file dengan double-click!** Gunakan local server:

**Option 1: VS Code Live Server**
- Install extension "Live Server"
- Right-click pada `index.html` → "Open with Live Server"

**Option 2: Python Server**
```bash
# Di terminal, navigate ke project folder
cd path/to/your/project
python -m http.server 8000
# Buka browser: http://localhost:8000
```

**Option 3: Node.js http-server**
```bash
npx http-server
# Buka browser: http://localhost:8080
```

### Step 4: Check Browser Console
1. Buka page (news.html atau index.html)
2. Tekan F12
3. Lihat Console tab untuk errors
4. Lihat Network tab untuk failed requests

---

## 📝 Debug Checklist:

- [ ] Files wujud (news-firebase.js, news-data.js, images)
- [ ] Firestore collection "news" ada dan ada data
- [ ] Firestore rules betul (allow read: if true)
- [ ] Internet connection aktif
- [ ] Menggunakan local server (bukan file://)
- [ ] Browser console tiada errors
- [ ] Image paths dalam Firestore betul
- [ ] Image files wujud di folder assets/images/

---

## 🆘 Still Not Working?

Jika masih tidak berfungsi selepas semua steps di atas:

1. **Copy error messages** dari browser console
2. **Screenshot** masalah yang berlaku
3. **Check** sama ada Firestore ada data:
   - Buka Firebase Console
   - Firestore Database > news collection
   - Screenshot documents yang ada

4. **Test dengan local data:**
   - Buka `assets/js/news-firebase.js`
   - Comment out Firebase code
   - Pastikan `newsData` dari `news-data.js` digunakan

---

## 💡 Tips:

- **Selalu check browser console** - ini adalah tempat pertama untuk cari masalah
- **Gunakan local server** - jangan buka file dengan double-click
- **Check Firestore rules** - pastikan allow read: if true
- **Verify data structure** - pastikan fields dalam Firestore match dengan code

