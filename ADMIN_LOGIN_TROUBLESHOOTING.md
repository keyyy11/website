# Admin Login Troubleshooting Guide

## Masalah: Tidak boleh login ke admin-dashboard.html

### Penyelesaian yang telah dibuat:
1. ✅ Firebase config telah di-inline (tidak lagi import dari module)
2. ✅ Error handling yang lebih baik ditambah
3. ✅ Console logging untuk debugging

### Langkah-langkah untuk menyelesaikan masalah:

#### 1. Pastikan Firebase Authentication sudah di-setup:
- Buka [Firebase Console](https://console.firebase.google.com/)
- Pilih project: `aeronas-aerocraft`
- Pergi ke **Authentication** > **Sign-in method**
- Pastikan **Email/Password** sudah enabled

#### 2. Buat Admin User:
- Pergi ke **Authentication** > **Users**
- Klik **Add user**
- Masukkan:
  - Email: (contoh: admin@aeronasgrp.com)
  - Password: (buat password yang kuat)
- Klik **Add user**

#### 3. Test Login:
- Buka `admin-login.html` di browser
- Masukkan email dan password yang baru dibuat
- Check browser console (F12) untuk melihat error messages

#### 4. Common Errors:

**Error: "auth/user-not-found"**
- User belum dibuat dalam Firebase Authentication
- Buat user mengikut langkah 2 di atas

**Error: "auth/wrong-password"**
- Password salah
- Pastikan password betul atau reset password dalam Firebase Console

**Error: "auth/invalid-email"**
- Format email tidak betul
- Pastikan email format betul (contoh: admin@aeronasgrp.com)

**Error: "Firebase initialization failed"**
- Check console untuk error details
- Pastikan Firebase config betul dalam code

#### 5. Check Browser Console:
- Tekan F12 untuk buka Developer Tools
- Pergi ke tab **Console**
- Lihat untuk error messages
- Error messages akan menunjukkan masalah sebenar

#### 6. Check Network Tab:
- Dalam Developer Tools, pergi ke tab **Network**
- Try login lagi
- Check untuk failed requests ke Firebase
- Pastikan tidak ada CORS errors

### Notes:
- Pastikan anda menggunakan email dan password yang betul
- Password mesti sekurang-kurangnya 6 characters
- Jika masih tidak boleh, check Firebase Console untuk melihat jika user sudah dibuat







