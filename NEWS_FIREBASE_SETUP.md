# News Firebase Setup Guide

## 📋 Langkah-langkah Setup News Database

### **Step 1: Buka Firebase Console**
1. Pergi ke [Firebase Console](https://console.firebase.google.com/)
2. Pilih project: **aeronas-aerocraft**
3. Klik **Firestore Database** di sidebar kiri

### **Step 2: Update Security Rules**
1. Klik tab **Rules** di bahagian atas
2. Pastikan rules berikut ada untuk news collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // News collection - read for all, write for authenticated
    match /news/{document=**} {
      allow read: if true;  // ✅ Semua orang boleh baca news
      allow write: if request.auth != null;  // ✅ Hanya authenticated users boleh write
    }
    
    // ... other rules ...
  }
}
```

3. Klik **Publish** untuk save rules

### **Step 3: Setup News Data**
**Gunakan Admin Dashboard untuk add news:**

1. Buka `admin-login.html` di browser
2. Login dengan admin credentials
3. Pergi ke section **"News"** di sidebar
4. Klik butang **"Add New Article"**
5. Isi semua fields dan klik **"Save Article"**
6. Repeat untuk semua news items yang anda nak add

**Nota:** Admin dashboard membenarkan anda add, edit, dan delete news articles dengan mudah.

### **Step 4: Verify Data**
1. Kembali ke Firebase Console > Firestore Database
2. Anda sepatutnya nampak collection **"news"** dengan 6 documents:
   - `kktm` - AERONAS AEROCRAFT - KKTM (23 DECEMBER 2025)
   - `utem` - UTeM - Aeronas Aerocraft (17 DECEMBER 2025)
   - `usim` - USIM - AERONAS AEROCRAFT (10 DECEMBER 2025)
   - `uthm` - Aeronas Aerocraft - UTHM (1 DECEMBER 2025)
   - `gmi` - GMI - AERONAS AEROCRAFT (28 OCTOBER 2025)
   - `chemtron` - CHEMTRON PTE LTD & ARISS - AERONAS AEROCRAFT (17 OCTOBER 2025)

## ✅ Apa yang Sistem Ini Buat:

1. **Load News dari Firestore:**
   - `news.html` akan load news dari Firestore database
   - Jika Firestore kosong, akan guna local data sebagai fallback
   - News disusun mengikut tarikh (terbaru dulu)

2. **News Cards di Index.html:**
   - News cards di `index.html` akan load dari Firestore
   - Setiap card akan display gambar yang sesuai dengan news item
   - Cards akan link ke news page dengan parameter yang betul

3. **Dynamic Background Images:**
   - Gambar pada news cards di index.html akan match dengan news yang dipilih
   - Background images akan update secara automatik berdasarkan data dari Firestore

## 🔄 Update News Data

Untuk update atau tambah news baru:

1. Login ke Firebase Console
2. Pergi ke Firestore Database > news collection
3. Klik "Add document" atau edit document yang sedia ada
4. Isi fields berikut:
   - `id` (string) - unique identifier (contoh: "kktm")
   - `title` (string) - tajuk news
   - `date` (string) - tarikh display (contoh: "23 DECEMBER 2025")
   - `dateSort` (string) - tarikh untuk sorting (contoh: "2025-12-23")
   - `image` (string) - path ke gambar (contoh: "assets/images/KKTM.jpeg")
   - `description` (string) - description news
   - `order` (number) - order untuk display

## 🧪 Test Setup:

1. Buka `index.html` - news cards sepatutnya ada gambar yang betul
2. Klik mana-mana news card - akan redirect ke `news.html` dengan news yang dipilih
3. Buka `news.html` - news cards sepatutnya load dari Firestore
4. Hover pada news cards - background akan berubah mengikut card
5. Click pada news card - fullscreen view akan muncul

## ⚠️ Troubleshooting:

**Problem:** News cards tidak muncul gambar
- **Solution:** Pastikan path gambar betul dalam Firestore data

**Problem:** News tidak load dari Firestore
- **Solution:** 
  - Check browser console untuk errors
  - Pastikan Firestore rules betul (allow read: if true)
  - Check internet connection

**Problem:** Setup button tidak berfungsi
- **Solution:**
  - Pastikan anda telah login sebagai admin
  - Check browser console untuk errors
  - Pastikan Firestore rules membenarkan write untuk authenticated users

