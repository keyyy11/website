# Cara Buka Localhost

## 📋 Langkah-langkah untuk Membuka Website di Localhost

### **Cara 1: Menggunakan Python HTTP Server (Disyorkan)**

#### **Step 1: Buka Terminal/Command Prompt**
- Tekan `Windows + R`
- Taip `cmd` atau `powershell`
- Tekan Enter

#### **Step 2: Navigate ke Folder Project**
```bash
cd C:\Users\User\Documents\GitHub\gitHub-main
```

#### **Step 3: Start HTTP Server**
```bash
python -m http.server 8000
```

#### **Step 4: Buka Browser**
- Buka web browser (Chrome, Firefox, Edge, etc.)
- Taip di address bar: `http://localhost:8000`
- Tekan Enter

#### **Step 5: Akses Halaman Website**
- **Home Page**: `http://localhost:8000/index.html`
- **About Page**: `http://localhost:8000/about.html`
- **Company Page**: `http://localhost:8000/company.html`
- **News Page**: `http://localhost:8000/news.html`
- **Event Page**: `http://localhost:8000/event.html`
- **Careers Page**: `http://localhost:8000/services.html`
- **Contact Page**: `http://localhost:8000/contact.html`
- **Admin Dashboard**: `http://localhost:8000/admin-dashboard.html`
- **Admin Login**: `http://localhost:8000/admin-login.html`

---

### **Cara 2: Menggunakan Live Server (VS Code Extension)**

#### **Step 1: Install Live Server Extension**
1. Buka VS Code
2. Klik Extensions icon (atau tekan `Ctrl + Shift + X`)
3. Cari "Live Server"
4. Klik Install

#### **Step 2: Start Live Server**
1. Buka file `index.html` di VS Code
2. Klik kanan pada file
3. Pilih "Open with Live Server"
4. Browser akan automatik buka dengan localhost

---

### **Cara 3: Menggunakan Node.js HTTP Server**

#### **Step 1: Install Node.js** (jika belum ada)
- Download dari: https://nodejs.org/
- Install Node.js

#### **Step 2: Install http-server**
```bash
npm install -g http-server
```

#### **Step 3: Start Server**
```bash
cd C:\Users\User\Documents\GitHub\gitHub-main
http-server -p 8000
```

#### **Step 4: Buka Browser**
- Buka: `http://localhost:8000`

---

## ⚠️ Troubleshooting

### **Problem: "python is not recognized"**
**Solution:**
- Install Python dari https://www.python.org/
- Pastikan "Add Python to PATH" dicentang semasa install
- Restart terminal/command prompt

### **Problem: "Port 8000 already in use"**
**Solution:**
- Gunakan port lain, contoh:
  ```bash
  python -m http.server 8080
  ```
- Atau tutup program yang menggunakan port 8000

### **Problem: "localhost refused to connect"**
**Solution:**
1. Pastikan server masih running di terminal
2. Check port yang digunakan (8000, 8080, etc.)
3. Pastikan firewall tidak block connection
4. Cuba restart server:
   - Tekan `Ctrl + C` di terminal untuk stop server
   - Start semula dengan `python -m http.server 8000`

### **Problem: "File not found" atau gambar tidak muncul**
**Solution:**
- Pastikan anda berada di folder project yang betul
- Check path file dan folder structure
- Pastikan semua assets (images, CSS, JS) ada di folder yang betul

---

## 📝 Nota Penting

1. **Server mesti running** - Terminal/Command Prompt mesti tetap dibuka semasa menggunakan localhost
2. **Port number** - Default port adalah 8000, tapi boleh guna port lain (8080, 3000, etc.)
3. **File path** - Pastikan anda berada di root folder project sebelum start server
4. **Browser cache** - Jika perubahan tidak muncul, cuba hard refresh dengan `Ctrl + Shift + R`

---

## 🚀 Quick Start Command

Untuk cepat start server, buka terminal dan run:

```bash
cd C:\Users\User\Documents\GitHub\gitHub-main && python -m http.server 8000
```

Kemudian buka browser dan taip: `http://localhost:8000`

---

## 📌 Tips

- **Bookmark localhost** - Bookmark `http://localhost:8000` untuk akses cepat
- **Multiple tabs** - Boleh buka multiple tabs dengan localhost untuk test different pages
- **Auto-reload** - Live Server extension akan auto-reload bila file diubah
- **Network access** - Untuk akses dari device lain dalam network yang sama, guna IP address komputer anda (contoh: `http://192.168.1.100:8000`)

---

## ✅ Checklist

Sebelum start server, pastikan:
- [ ] Python sudah install
- [ ] Terminal/Command Prompt sudah dibuka
- [ ] Sudah navigate ke folder project yang betul
- [ ] Port 8000 tidak digunakan oleh program lain
- [ ] Browser sudah sedia untuk digunakan

---

---

## ❓ Soalan Lazim (FAQ)

### **Q: Kalau takde file dalam laptop, boleh buka localhost?**
**A: TIDAK BOLEH.** 

Localhost memerlukan file-file website (HTML, CSS, JS, images) berada di dalam laptop/komputer anda. Localhost adalah cara untuk serve file-file yang ada di komputer anda melalui web server.

**Kenapa perlu file di laptop?**
- Localhost membaca file dari folder project di komputer anda
- Server (Python/Node.js) serve file-file tersebut kepada browser
- Tanpa file, server tidak ada apa-apa untuk serve

**Alternatif jika file tidak ada di laptop:**

#### **Option 1: Clone dari GitHub**
Jika project ada di GitHub, anda boleh clone:
```bash
git clone https://github.com/keyyy11/website.git
cd website
python -m http.server 8000
```

#### **Option 2: Download Project**
- Download project sebagai ZIP dari GitHub
- Extract ke folder di laptop
- Ikut langkah-langkah di atas untuk start localhost

#### **Option 3: Deploy ke Hosting Online**
Jika file tidak ada di laptop, anda boleh:
- Deploy ke GitHub Pages (percuma)
- Deploy ke Netlify, Vercel, atau hosting lain
- Akses melalui URL online (bukan localhost)

#### **Option 4: Gunakan Remote Server**
- Upload file ke server online
- Akses melalui domain/IP address server
- Bukan localhost, tapi boleh akses dari mana-mana

---

**Selamat mencuba! 🎉**

