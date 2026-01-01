# Cara Menggunakan Admin Dashboard dengan Localhost

## Langkah 1: Start Local Server

Buka terminal/PowerShell di folder project dan run:

```powershell
python -m http.server 8000
```

Atau jika menggunakan Python 3:
```powershell
python3 -m http.server 8000
```

## Langkah 2: Akses Admin Dashboard

### Login Page:
```
http://localhost:8000/admin-login.html
```

### Dashboard (setelah login):
```
http://localhost:8000/admin-dashboard.html
```

## Langkah 3: Login Credentials

Gunakan email dan password yang telah didaftarkan di Firebase Authentication.

**Penting:** Pastikan:
1. Email/Password authentication sudah enabled di Firebase Console
2. User admin sudah dibuat di Firebase Authentication
3. Internet connection aktif (untuk Firebase)

## Troubleshooting

### Masalah: "Firebase initialization failed"
**Penyelesaian:**
- Pastikan internet connection aktif
- Check browser console (F12) untuk error details
- Pastikan Firebase config betul

### Masalah: "Cannot access admin-login.html"
**Penyelesaian:**
- Pastikan local server sudah running
- Check port 8000 tidak digunakan oleh aplikasi lain
- Gunakan `http://localhost:8000` bukan `file://`

### Masalah: "Login failed"
**Penyelesaian:**
1. Check email dan password betul
2. Pastikan user sudah dibuat di Firebase Authentication
3. Check Firebase Console → Authentication → Users

## Cara Buat Admin User di Firebase

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Pilih project: `aeronas-aerocraft`
3. Pergi ke **Authentication** → **Users**
4. Klik **Add user**
5. Masukkan email dan password
6. Klik **Add user**

## Quick Start Command

```powershell
# Di folder project
cd C:\Users\User\Documents\GitHub\gitHub-main
python -m http.server 8000
```

Kemudian buka browser:
- Login: http://localhost:8000/admin-login.html
- Dashboard: http://localhost:8000/admin-dashboard.html

## Features yang Tersedia

1. **Dashboard** - Overview statistics
2. **News** - Manage news articles (Add, Edit, Delete)
3. **Job Applications** - View and manage job applications
4. **Settings** - Admin settings

## Notes

- Admin dashboard menggunakan Firebase untuk authentication dan data storage
- Pastikan internet connection aktif untuk Firebase
- Semua data disimpan di Firebase Firestore
- Images untuk news perlu menggunakan relative path: `assets/images/filename.jpeg`

