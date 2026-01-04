# 📋 Setup Checklist - News Firebase System

## ✅ Langkah-langkah Setup (Ikut Urutan)

### **STEP 1: Setup Firebase Console** ⚠️ PENTING

1. **Buka Firebase Console**
   - Pergi ke: https://console.firebase.google.com/
   - Login dengan Google account anda
   - Pilih project: **aeronas-aerocraft**

2. **Enable Firestore Database** (jika belum)
   - Klik **Firestore Database** di sidebar kiri
   - Jika belum ada, klik **Create database**
   - Pilih **Start in test mode** (untuk development)
   - Pilih location (pilih yang terdekat dengan Malaysia, contoh: `asia-southeast1`)

3. **Update Security Rules** ⚠️ PENTING
   - Klik tab **Rules** di bahagian atas
   - Gantikan rules dengan code berikut:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // News collection - read for all, write for authenticated
    match /news/{document=**} {
      allow read: if true;  // ✅ Semua orang boleh baca
      allow write: if request.auth != null;  // ✅ Hanya authenticated users boleh write
    }
    
    // Job Applications collection
    match /jobApplications/{document=**} {
      allow create: if true;
      allow read: if request.auth != null;
      allow update, delete: if request.auth != null;
    }
    
    // Contact Messages collection
    match /contactMessages/{document=**} {
      allow create: if true;  // ✅ Semua orang boleh submit contact messages
      allow read: if request.auth != null;  // ✅ Hanya admin boleh baca
      allow update, delete: if request.auth != null;  // ✅ Hanya admin boleh update/delete
    }
  }
}
```

   - Klik **Publish** untuk save rules

---

### **STEP 2: Setup Admin Account** (jika belum)

1. **Enable Authentication**
   - Di Firebase Console, klik **Authentication**
   - Klik **Get started** (jika pertama kali)
   - Pergi ke tab **Sign-in method**
   - Enable **Email/Password** provider
   - Klik **Save**

2. **Create Admin User**
   - Pergi ke tab **Users**
   - Klik **Add user**
   - Masukkan email dan password untuk admin
   - Klik **Add user**
   - **Simpan email dan password ini!**

---

### **STEP 3: Muatkan Data News ke Firestore**

**Gunakan Admin Dashboard untuk add news:**

1. **Login ke Admin Dashboard**
   - Buka `admin-login.html` di browser
   - Login dengan email dan password admin yang anda buat tadi

2. **Add News Articles**
   - Selepas login, anda akan dibawa ke admin dashboard
   - Klik **"News"** di sidebar
   - Klik butang **"Add New Article"**
   - Isi semua fields:
     - **ID**: unique identifier (contoh: `kktm`, `utem`, `usim`)
     - **Title**: tajuk news (contoh: `AERONAS AEROCRAFT - KKTM`)
     - **Display Date**: tarikh untuk display (contoh: `23 DECEMBER 2025`)
     - **Sort Date**: tarikh untuk sorting (pilih dari date picker)
     - **Image Path**: path ke gambar (contoh: `assets/images/KKTM.jpeg`)
     - **Description**: description news
   - Klik **"Save Article"**

3. **Repeat untuk semua news items**
   - Add semua 6 news items:
     - `kktm` - AERONAS AEROCRAFT - KKTM (23 DECEMBER 2025)
     - `utem` - UTeM - Aeronas Aerocraft (17 DECEMBER 2025)
     - `usim` - USIM - AERONAS AEROCRAFT (10 DECEMBER 2025)
     - `uthm` - Aeronas Aerocraft - UTHM (1 DECEMBER 2025)
     - `gmi` - GMI - AERONAS AEROCRAFT (28 OCTOBER 2025)
     - `chemtron` - CHEMTRON PTE LTD & ARISS - AERONAS AEROCRAFT (17 OCTOBER 2025)

4. **Verify di Firebase Console** (optional)
   - Kembali ke Firebase Console > Firestore Database
   - Anda sepatutnya nampak collection **"news"** dengan semua documents yang anda add

---

### **STEP 4: Test Sistem**

1. **Test News Page**
   - Buka `news.html` di browser
   - News cards sepatutnya muncul dengan data dari Firestore
   - Hover pada cards - background akan berubah
   - Click pada card - fullscreen view akan muncul

2. **Test Index Page**
   - Buka `index.html`
   - Scroll ke bahagian news cards
   - News cards sepatutnya ada gambar yang betul
   - Click pada card - akan redirect ke news.html dengan news yang dipilih

3. **Test Admin Dashboard**
   - Buka `admin-login.html`
   - Login dengan admin credentials
   - Pergi ke section **"News"**
   - Anda sepatutnya nampak semua news items
   - Test **Edit** - update maklumat news
   - Test **Delete** - delete news item (optional)
   - Test **Add New Article** - tambah news baru

4. **Verify Changes Reflect**
   - Selepas edit di admin dashboard, buka `news.html`
   - Perubahan sepatutnya muncul secara automatik

---

## 🎯 Checklist Siap

- [ ] Firebase project created
- [ ] Firestore Database enabled
- [ ] Security Rules updated
- [ ] Authentication enabled (Email/Password)
- [ ] Admin user created
- [ ] News data loaded to Firestore (6 items)
- [ ] Tested news.html - news cards appear
- [ ] Tested index.html - news cards with images appear
- [ ] Tested admin dashboard - can view/edit news
- [ ] Verified changes reflect in news.html

---

## ⚠️ Troubleshooting

### Problem: Setup button tidak berfungsi
**Solution:**
- Pastikan anda telah login sebagai admin
- Check browser console (F12) untuk errors
- Pastikan Firestore rules betul

### Problem: News tidak muncul di news.html
**Solution:**
- Check browser console untuk errors
- Pastikan Firestore ada data (check di Firebase Console)
- Pastikan internet connection aktif
- Refresh page (Ctrl+F5)

### Problem: Gambar tidak muncul di index.html
**Solution:**
- Pastikan path gambar betul dalam Firestore
- Check browser console untuk 404 errors
- Pastikan gambar files wujud di folder `assets/images/`

### Problem: Cannot login to admin dashboard
**Solution:**
- Pastikan Email/Password authentication enabled
- Pastikan admin user telah dibuat
- Check email dan password betul
- Lihat `ADMIN_LOGIN_TROUBLESHOOTING.md` untuk lebih details

---

## 📞 Next Steps Selepas Setup

Selepas semua checklist siap:

1. **Customize News Content**
   - Edit news di admin dashboard
   - Update gambar jika perlu
   - Tambah news baru

2. **Test Full Workflow**
   - Add news di admin dashboard
   - Verify muncul di news.html
   - Verify muncul di index.html

3. **Production Ready**
   - Update Firestore rules untuk production (lebih strict)
   - Setup proper authentication
   - Backup data

---

## 📝 Notes

- Semua perubahan di admin dashboard akan **automatically sync** ke news.html dan index.html
- Data disimpan di Firestore, jadi semua pages akan load data yang sama
- Jika Firestore kosong, system akan guna local data sebagai fallback

