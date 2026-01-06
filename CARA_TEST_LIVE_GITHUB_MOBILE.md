# Cara Test Live Hosting GitHub & Mobile Responsive

## 🚀 Part 1: Enable GitHub Pages (Jika Belum)

### Step 1: Buka GitHub Repository
1. Pergi ke: **https://github.com/keyyy11/website**
2. Pastikan anda sudah login

### Step 2: Enable GitHub Pages
1. Klik tab **Settings** di bahagian atas repository
2. Scroll down ke **Pages** di sidebar kiri
3. Atau terus ke: **https://github.com/keyyy11/website/settings/pages**

### Step 3: Configure Source
1. Di bahagian **Source**, pilih:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
2. Klik **Save**

### Step 4: Tunggu Deployment
- GitHub akan process deployment (1-2 minit)
- Check status di tab **Actions** (jika ada)
- Website akan available di: **https://keyyy11.github.io/website/**

---

## 📱 Part 2: Test Mobile Responsive

### **Cara 1: Test di Browser Desktop (Paling Mudah)**

#### Chrome/Edge:
1. Buka website: **https://keyyy11.github.io/website/**
2. Tekan **F12** atau **Ctrl + Shift + I**
3. Klik ikon **Toggle device toolbar** (atau tekan **Ctrl + Shift + M**)
4. Pilih device dari dropdown:
   - **iPhone 12 Pro** (390 x 844)
   - **iPhone SE** (375 x 667)
   - **Samsung Galaxy S20** (360 x 800)
   - **iPad** (768 x 1024)
   - Atau custom size (contoh: 375 x 667 untuk mobile)

#### Firefox:
1. Tekan **F12**
2. Klik ikon **Responsive Design Mode** (atau tekan **Ctrl + Shift + M**)
3. Pilih device atau set custom size

#### Safari (Mac):
1. Tekan **Cmd + Option + I**
2. Klik **Responsive Design Mode**

---

### **Cara 2: Test di Telefon/Tablet Sebenar**

#### Option A: Buka Langsung dari GitHub Pages
1. Pastikan telefon/tablet ada internet
2. Buka browser di telefon (Chrome, Safari, etc.)
3. Taip URL: **https://keyyy11.github.io/website/**
4. Website akan load dan anda boleh test mobile layout sebenar

#### Option B: Share Link
1. Copy URL: `https://keyyy11.github.io/website/`
2. Share melalui:
   - WhatsApp
   - Email
   - QR Code (generate dari online QR generator)
3. Buka link di telefon

#### Option C: Scan QR Code
1. Generate QR code untuk URL: `https://keyyy11.github.io/website/`
2. Gunakan website seperti: https://www.qr-code-generator.com/
3. Scan dengan telefon camera
4. Website akan buka di browser telefon

---

### **Cara 3: Test di Localhost (Network Sama)**

Jika mahu test di localhost sebelum push:

1. **Start server di laptop:**
   ```bash
   python -m http.server 8080
   ```

2. **Cari IP address laptop:**
   - Windows: Buka Command Prompt, taip `ipconfig`
   - Cari "IPv4 Address" (contoh: 192.168.1.100)
   - Mac/Linux: Buka Terminal, taip `ifconfig` atau `ip addr`

3. **Pastikan telefon dan laptop dalam WiFi yang sama**

4. **Di telefon, buka browser dan taip:**
   ```
   http://192.168.1.100:8080
   ```
   (Ganti dengan IP address laptop anda)

---

## ✅ Checklist Test Mobile Responsive

### **Navigation:**
- [ ] Hamburger menu muncul di mobile (< 768px)
- [ ] Menu boleh buka/tutup dengan smooth
- [ ] Semua navigation items kelihatan (Home, Aircraft, About, Careers, News)
- [ ] Contact Us button kelihatan di tepi kiri
- [ ] Menu tutup selepas klik link
- [ ] Navigation items compact dan fit tanpa scroll

### **Layout:**
- [ ] Text mudah dibaca tanpa zoom
- [ ] Font sizes sesuai untuk mobile (tidak terlalu besar/kecil)
- [ ] Images tidak overflow screen
- [ ] Buttons cukup besar untuk touch (min 44px height)
- [ ] Spacing cukup untuk jari (tidak terlalu rapat)
- [ ] Tiada horizontal scroll (hanya vertical scroll)

### **Hero Section:**
- [ ] Title image tidak terlalu besar
- [ ] Subtitle text readable
- [ ] Buttons full width atau cukup besar
- [ ] Content centered

### **Aircraft Page:**
- [ ] "UNVEILING SOON" text kelihatan di atas
- [ ] Countdown timer kelihatan dan readable
- [ ] Fade effect berfungsi ketika navigate
- [ ] Mobile menu dark background tanpa timer

### **Careers Page:**
- [ ] "Careers" title centered dan di atas
- [ ] "Join Our Team" centered dengan line dibawah
- [ ] Job cards stacked vertically
- [ ] Text readable

### **Forms (Contact Page):**
- [ ] Input fields cukup besar (min 44px height)
- [ ] Buttons full width
- [ ] Easy to fill dan submit
- [ ] Keyboard muncul dengan betul

### **Footer:**
- [ ] Contact info stacked vertically
- [ ] Text readable
- [ ] Links boleh klik

---

## 📊 Test di Pelbagai Device Sizes

### **Small Mobile (320px - 480px):**
- iPhone SE (375 x 667)
- Samsung Galaxy S8 (360 x 740)
- Test: Navigation compact, text readable, buttons touch-friendly

### **Mobile (481px - 768px):**
- iPhone 12 Pro (390 x 844)
- Samsung Galaxy S20 (360 x 800)
- Test: Layout single column, navigation horizontal

### **Tablet (769px - 1024px):**
- iPad (768 x 1024)
- iPad Pro (1024 x 1366)
- Test: Layout boleh 2 columns, navigation masih compact

---

## 🔍 Test Orientation

### **Portrait (Tegak):**
- Test navigation, scrolling, touch interactions
- Pastikan semua content kelihatan

### **Landscape (Mendatar):**
- Test layout adjustment
- Pastikan navigation masih berfungsi
- Check untuk horizontal scroll (tidak sepatutnya ada)

---

## 🛠️ Tools untuk Test Mobile

### **1. Browser DevTools (Recommended)**
- Chrome DevTools (F12 → Toggle device toolbar)
- Firefox Responsive Design Mode
- Safari Web Inspector

### **2. Online Tools:**
- **BrowserStack**: https://www.browserstack.com (Free trial)
- **Responsively App**: https://responsively.app (Desktop app, free)
- **Am I Responsive**: http://ami.responsivedesign.is/

### **3. Real Devices:**
- Test di telefon sendiri (paling accurate)
- Test di tablet
- Test di pelbagai browsers (Chrome, Safari, Firefox)

---

## 🎯 Quick Test Steps

### **Test Live GitHub Pages:**
1. ✅ Enable GitHub Pages (Settings → Pages)
2. ✅ Tunggu 1-2 minit untuk deployment
3. ✅ Buka: **https://keyyy11.github.io/website/**
4. ✅ Test di desktop browser dengan DevTools
5. ✅ Test di telefon sebenar

### **Test Mobile Responsive:**
1. ✅ Buka website di browser
2. ✅ Tekan F12 → Toggle device toolbar
3. ✅ Pilih device (iPhone 12 Pro)
4. ✅ Test navigation, scrolling, touch interactions
5. ✅ Check semua pages (Home, Aircraft, About, Careers, News, Contact)

---

## 📝 Nota Penting

### **GitHub Pages URL:**
- **Main URL**: `https://keyyy11.github.io/website/`
- **Home Page**: `https://keyyy11.github.io/website/index.html`
- **Aircraft Page**: `https://keyyy11.github.io/website/aircraft.html`
- **Careers Page**: `https://keyyy11.github.io/website/services.html`

### **Update Website:**
- Setiap kali push code baru, GitHub Pages akan automatik update
- Changes akan muncul dalam 1-2 minit
- Tidak perlu manual rebuild

### **HTTPS:**
- GitHub Pages automatik provide SSL certificate
- Website menggunakan HTTPS (secure)
- Boleh diakses dengan selamat

---

## 🆘 Troubleshooting

### **Problem: "404 Not Found"**
**Solution:**
- Pastikan GitHub Pages sudah enable
- Check branch yang digunakan (mesti `main`)
- Tunggu beberapa minit untuk deployment complete
- Pastikan `index.html` ada di root folder

### **Problem: "Gambar tidak muncul"**
**Solution:**
- Pastikan semua paths menggunakan relative paths
- Check file names (case-sensitive di GitHub)
- Pastikan file gambar sudah di-push ke GitHub
- Hard refresh browser (Ctrl + Shift + R)

### **Problem: "Mobile layout tidak betul"**
**Solution:**
- Hard refresh browser (Ctrl + Shift + R)
- Clear browser cache
- Check viewport meta tag ada di semua HTML files
- Test di incognito/private mode

### **Problem: "Navigation tidak berfungsi di mobile"**
**Solution:**
- Check JavaScript console untuk errors (F12)
- Pastikan mobile menu toggle button kelihatan
- Test di device sebenar (bukan hanya DevTools)
- Check CSS media queries betul

---

## 🎉 Selamat Test!

Setelah enable GitHub Pages dan test mobile responsive, website anda akan:
- ✅ Live di internet
- ✅ Boleh diakses dari mana-mana device
- ✅ Mobile-friendly dan responsive
- ✅ Automatik update setiap push

**URL Website Anda: https://keyyy11.github.io/website/**



