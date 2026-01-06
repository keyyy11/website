# Cara Deploy Website ke GitHub Pages

## 📋 Apa itu GitHub Pages?

GitHub Pages adalah servis percuma dari GitHub yang membolehkan anda host website statik secara percuma. Website anda akan boleh diakses melalui URL seperti:
- `https://keyyy11.github.io/website/`
- Atau custom domain jika anda ada

---

## ✅ Apa yang Akan Jadi Jika Deploy ke GitHub?

### **1. Website Boleh Diakses Secara Online**
- ✅ Website anda akan live di internet
- ✅ Boleh diakses dari mana-mana device (laptop, phone, tablet)
- ✅ Boleh share link dengan orang lain
- ✅ Tidak perlu localhost - website sentiasa online

### **2. URL Website Anda**
- **Format**: `https://[username].github.io/[repository-name]/`
- **Contoh**: `https://keyyy11.github.io/website/`
- **Home page**: `https://keyyy11.github.io/website/index.html`

### **3. Automatik Update**
- Setiap kali anda push code ke GitHub, website akan automatik update
- Tidak perlu manual upload file
- Changes akan muncul dalam beberapa minit

### **4. Percuma & Unlimited**
- ✅ Percuma untuk public repositories
- ✅ Unlimited bandwidth
- ✅ SSL certificate (HTTPS) automatik
- ✅ Custom domain support

### **5. Version Control**
- Semua perubahan disimpan dalam Git history
- Boleh rollback ke version sebelumnya jika ada masalah
- Boleh collaborate dengan team

---

## 🚀 Cara Deploy ke GitHub Pages

### **Step 1: Pastikan Code Sudah di GitHub**
```bash
# Check jika sudah ada remote
git remote -v

# Jika belum, add remote
git remote add origin https://github.com/keyyy11/website.git
git push -u origin main
```

### **Step 2: Enable GitHub Pages**

1. **Buka GitHub Repository**
   - Pergi ke: https://github.com/keyyy11/website
   - Login ke GitHub account

2. **Buka Settings**
   - Klik tab **Settings** di bahagian atas repository

3. **Pergi ke Pages Section**
   - Scroll down ke **Pages** di sidebar kiri
   - Atau terus ke: https://github.com/keyyy11/website/settings/pages

4. **Configure Source**
   - Di bahagian **Source**, pilih:
     - **Branch**: `main` (atau `master`)
     - **Folder**: `/ (root)` atau `/docs` jika anda mahu
   - Klik **Save**

5. **Tunggu Deployment**
   - GitHub akan build dan deploy website anda
   - Biasanya mengambil 1-2 minit
   - Anda akan dapat URL: `https://keyyy11.github.io/website/`

---

## 📝 Langkah-langkah Lengkap

### **Step 1: Commit & Push Code**
```bash
# Pastikan semua perubahan sudah di-commit
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### **Step 2: Enable GitHub Pages**
1. Buka: https://github.com/keyyy11/website/settings/pages
2. Di **Source**, pilih branch `main` dan folder `/ (root)`
3. Klik **Save**

### **Step 3: Tunggu Deployment**
- GitHub akan process deployment
- Check status di tab **Actions** (jika ada)
- Biasanya siap dalam 1-2 minit

### **Step 4: Akses Website**
- Buka: `https://keyyy11.github.io/website/`
- Website anda sudah live!

---

## ⚠️ Perkara Penting untuk Diperhatikan

### **1. Firebase Configuration**
- ✅ Firebase akan berfungsi dengan baik di GitHub Pages
- ✅ Pastikan Firebase security rules sudah betul
- ✅ Check Firebase console untuk ensure API keys betul

### **2. File Paths**
- ✅ Pastikan semua paths menggunakan relative paths
- ✅ Contoh: `assets/images/logo.png` (bukan `/assets/images/logo.png`)
- ✅ GitHub Pages serve dari root repository

### **3. Custom Domain (Optional)**
- Boleh setup custom domain seperti `www.aeronas.com`
- Tambah file `CNAME` di root folder dengan domain name
- Update DNS settings di domain provider

### **4. HTTPS Automatik**
- GitHub Pages automatik provide SSL certificate
- Website akan menggunakan HTTPS (secure)
- Tidak perlu setup SSL sendiri

---

## 🔄 Update Website

Setiap kali anda update code:

```bash
# 1. Commit perubahan
git add .
git commit -m "Update website content"

# 2. Push ke GitHub
git push origin main

# 3. GitHub Pages akan automatik rebuild
# 4. Changes akan muncul dalam 1-2 minit
```

---

## 📊 Kelebihan vs Localhost

| Feature | Localhost | GitHub Pages |
|---------|-----------|--------------|
| **Akses** | Hanya dari laptop sendiri | Dari mana-mana device |
| **URL** | `http://localhost:8000` | `https://keyyy11.github.io/website/` |
| **Server** | Mesti running di laptop | Sentiasa online |
| **Share** | Tidak boleh share | Boleh share link |
| **Cost** | Percuma | Percuma |
| **Update** | Manual refresh | Automatik update |

---

## 🎯 Kesimpulan

**Jika anda deploy ke GitHub Pages:**
- ✅ Website akan live di internet
- ✅ Boleh diakses dari mana-mana
- ✅ Automatik update setiap push
- ✅ Percuma dan unlimited
- ✅ Secure dengan HTTPS
- ✅ Boleh share dengan client/stakeholders

**Tapi perlu ingat:**
- ⚠️ Code akan public (jika public repository)
- ⚠️ Perlu pastikan Firebase security rules betul
- ⚠️ Perlu pastikan semua paths relative

---

## 🆘 Troubleshooting

### **Problem: "404 Not Found"**
**Solution:**
- Pastikan `index.html` ada di root folder
- Check branch yang digunakan (mesti `main` atau `master`)
- Tunggu beberapa minit untuk deployment complete

### **Problem: "Gambar tidak muncul"**
**Solution:**
- Pastikan semua paths menggunakan relative paths
- Check file names (case-sensitive di GitHub)
- Pastikan file gambar sudah di-push ke GitHub

### **Problem: "Firebase tidak berfungsi"**
**Solution:**
- Check Firebase security rules
- Pastikan API keys betul
- Check browser console untuk errors

---

**Selamat deploy! 🚀**




