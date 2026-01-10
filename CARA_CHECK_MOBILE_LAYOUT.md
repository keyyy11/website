# Cara Check Layout Mobile

## 1. Menggunakan Browser Developer Tools (Paling Mudah)

### Chrome/Edge:
1. Buka website di browser (localhost:8080 atau GitHub Pages)
2. Tekan **F12** atau **Ctrl + Shift + I** (Windows) / **Cmd + Option + I** (Mac)
3. Klik ikon **Toggle device toolbar** (atau tekan **Ctrl + Shift + M**)
4. Pilih device dari dropdown:
   - **iPhone 12 Pro** (390 x 844)
   - **iPhone SE** (375 x 667)
   - **Samsung Galaxy S20** (360 x 800)
   - **iPad** (768 x 1024)
   - Atau custom size

### Firefox:
1. Tekan **F12**
2. Klik ikon **Responsive Design Mode** (atau tekan **Ctrl + Shift + M**)
3. Pilih device atau set custom size

### Safari (Mac):
1. Tekan **Cmd + Option + I**
2. Klik **Responsive Design Mode**

---

## 2. Test di Telefon/Tablet Sebenar

### Cara 1: Gunakan Localhost di Network Sama
1. Pastikan telefon dan laptop dalam WiFi yang sama
2. Cari IP address laptop:
   - Windows: Buka Command Prompt, taip `ipconfig`
   - Cari "IPv4 Address" (contoh: 192.168.1.100)
3. Di telefon, buka browser dan taip: `http://192.168.1.100:8080`

### Cara 2: Deploy ke GitHub Pages
1. Push code ke GitHub (sudah dilakukan)
2. Buka website di GitHub Pages
3. Buka URL tersebut di telefon/tablet

---

## 3. Online Tools

### BrowserStack (https://www.browserstack.com)
- Free trial available
- Test di device sebenar secara remote

### Responsively App (https://responsively.app)
- Desktop app untuk test multiple devices sekaligus
- Free download

---

## 4. Browser Resize Manual

1. Buka website di browser
2. Resize browser window secara manual
3. Perhatikan layout berubah pada:
   - **1024px** (tablet)
   - **768px** (mobile)
   - **480px** (small mobile)

---

## 5. Checklist untuk Test Mobile

### Navigation:
- [ ] Hamburger menu muncul di mobile
- [ ] Menu boleh buka/tutup
- [ ] Semua link boleh klik
- [ ] Menu tutup selepas klik link

### Layout:
- [ ] Text mudah dibaca tanpa zoom
- [ ] Images tidak overflow
- [ ] Buttons cukup besar untuk touch (min 44px)
- [ ] Spacing cukup untuk jari

### Hero Section:
- [ ] Title tidak terlalu besar
- [ ] Text readable
- [ ] Buttons full width atau cukup besar

### Social Icons:
- [ ] Icons dalam 2 kolom atau 1 kolom
- [ ] Text di bawah icons readable

### Forms:
- [ ] Input fields cukup besar
- [ ] Buttons full width
- [ ] Easy to fill dan submit

### Timeline (Heritage Page):
- [ ] Timeline items stacked vertically
- [ ] Year text readable
- [ ] Images tidak terlalu besar

### Footer:
- [ ] Contact info stacked vertically
- [ ] Text readable

---

## Tips:

1. **Test di pelbagai device sizes:**
   - Small mobile (320px - 480px)
   - Mobile (481px - 768px)
   - Tablet (769px - 1024px)

2. **Test orientation:**
   - Portrait (tegak)
   - Landscape (mendatar)

3. **Test scrolling:**
   - Pastikan semua content boleh scroll
   - Check untuk horizontal scroll (tidak sepatutnya ada)

4. **Test touch interactions:**
   - Buttons mudah tekan
   - Links tidak terlalu rapat
   - Menu mudah navigate

---

## Quick Test Command

Untuk buka localhost dan test:
```bash
# Start server
python -m http.server 8080

# Buka di browser
# http://localhost:8080
# Tekan F12 untuk mobile view
```









