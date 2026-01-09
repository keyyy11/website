# 📋 Summary Perubahan Sejak Semalam

## 🗓️ Tanggal: 4-5 Januari 2026

---

## 🎨 **1. Event Page - Transformasi ke Announcement Page**

### **Perubahan Struktur:**
- ✅ Mengubah `event.html` dari simple grid layout ke announcement page style
- ✅ Menambahkan front page hero section dengan dynamic background
- ✅ Implementasi fullscreen view untuk event details
- ✅ Background image berubah saat hover pada event cards

### **Fitur yang Ditambahkan:**
- Dynamic background image yang berubah berdasarkan event yang di-hover
- Hero section dengan label dan title yang berubah
- Category cards layout horizontal dengan hover effects
- Fullscreen view dengan layout: image kiri, text kanan
- Smooth transitions dan animations

### **Files Modified:**
- `event.html` - Struktur HTML dan JavaScript
- `assets/css/style.css` - Styling untuk event page

---

## 🖼️ **2. Fix Image Display Issues**

### **Masalah yang Diperbaiki:**
- ❌ Error: "Not allowed to load local resource" untuk event images
- ❌ Gambar tidak muncul di event page

### **Solusi:**
- ✅ Path normalization untuk convert absolute Windows paths ke relative paths
- ✅ Handle `file:///` prefix removal
- ✅ Convert `C:\Users\...` paths ke `assets/images/filename.png`
- ✅ Error handling dengan fallback ke default image
- ✅ HTML escaping untuk security

### **Files Modified:**
- `event.html` - Image path normalization logic

---

## 🏢 **3. Company Page - Update Content**

### **Perubahan:**
- ✅ Mengganti "My Company" menjadi "Company" di about page
- ✅ Menghapus text lama di company page
- ✅ Menambahkan section "About Us" dengan 2 paragraphs baru
- ✅ Menambahkan section "Our Capabilities" dengan 5 bullet points

### **Content Baru:**
**About Us:**
- AERONAS Aerocraft Sdn. Bhd. is a subsidiary of PETRAX5 Group...
- As the exclusive agent and main OEM contractor...

**Our Capabilities:**
- Ownership and utilization of FAA-certified AMT & Type Certificate Part 23
- Full-scale light aircraft manufacturing and assembly
- Aircraft design, engineering, fabrication and final assembly
- Global marketing, sales and distribution network
- Technology transfer, training and workforce development

### **Files Modified:**
- `about.html` - "My Company" → "Company"
- `company.html` - Content update

---

## 🏠 **4. Home Page - Hero Section Update**

### **Perubahan:**
- ✅ Menghapus text lama di hero section
- ✅ Menambahkan text baru tentang AERONAS

### **Text Baru:**
> "AERONAS is a full-scale light aircraft manufacturer driving the transformation of Malaysia's aerospace landscape. Backed by proprietary Aircraft Manufacturing Technology (AMT) and an FAA-certified Type Certificate Part 23, AERONAS is positioned as a game changer and catalyst for the regional and global aviation industry."

### **Files Modified:**
- `index.html` - Hero section text

---

## 🎨 **5. Heritage Page - Front Page & Timeline Redesign**

### **Front Page Hero Section:**
- ✅ Menambahkan fullscreen hero section dengan:
  - Logo di atas (centered)
  - Title "Our Heritage." di tengah (italic, stylized)
  - 5 paragraphs text content
  - Scroll indicator di bawah dengan bounce animation

### **Timeline Section:**
- ✅ Title "Our Heritage" dipindahkan ke atas dan centered
- ✅ Timeline items dibuat lebih besar dan centered
- ✅ Background sama dengan front page (dark gradient)
- ✅ Timeline items di tepi kiri dengan vertical line
- ✅ Scroll indicator bar di tepi kiri yang bergerak dengan scroll
- ✅ Auto-scroll snap ke next timeline item

### **Scroll Features:**
- Scroll indicator dengan dots untuk setiap year
- Line indicator yang bergerak mengikuti scroll position
- Active dot highlight untuk timeline item yang sedang dilihat
- Smooth scroll snap ke timeline items

### **Files Modified:**
- `heritage.html` - Struktur HTML dan JavaScript
- `assets/css/style.css` - Styling untuk heritage page

---

## 🎯 **6. Icon Section - Update Icons**

### **Perubahan:**
- ✅ Mengubah dari 7 icons ke 6 icons
- ✅ Menghapus "AMBITIOUS" icon
- ✅ Reorder icons sesuai gambar:
  1. FIRST IN MALAYSIA
  2. ENGINEERING
  3. CERTIFICATION & SAFETY
  4. MANUFACTURING
  5. PERFORMANCE
  6. RELIABILITY

### **Icon Styling:**
- ✅ Warna: Hitam putih (dari hijau)
- ✅ Ukuran: 60px (dari 80px) untuk fit dalam satu baris
- ✅ Gap: 40px (dari 100px)
- ✅ Layout: Semua icon dalam satu baris (flex-wrap: nowrap)

### **Icon Images:**
- ✅ ENGINEERING: Menggunakan `engineering icon.png`
- ✅ MANUFACTURING: Menggunakan `manufacturing.png`
- ✅ PERFORMANCE: Menggunakan `perfomance.png`
- ✅ Lain-lain: CSS shapes (hitam putih)

### **Files Modified:**
- `index.html` - Icon section HTML
- `assets/css/style.css` - Icon styling

---

## 🎨 **7. Background Gradient Removal**

### **Perubahan:**
- ✅ Menghapus gradient background dari body
- ✅ Menghapus gradient background dari header
- ✅ Menggunakan solid dark color (#05060a) untuk body
- ✅ Header background: transparent

### **Files Modified:**
- `assets/css/style.css` - Body dan header background

---

## 📊 **8. Admin Dashboard - Navigation Features**

### **Fitur yang Ditambahkan:**
- ✅ Stat cards di dashboard sekarang clickable
- ✅ Click pada stat card akan navigate ke section yang sesuai:
  - News Articles → News section
  - Job Applications → Applications section
  - Contact Messages → Contacts section
  - Career Postings → Careers section
  - Upcoming Events → Events section
- ✅ Hover effects pada stat cards
- ✅ Auto-update page title dan active nav item

### **Files Modified:**
- `admin-dashboard.html` - Navigation logic

---

## 🚀 **9. GitHub Pages Deployment**

### **Issues yang Diperbaiki:**
- ❌ Error: "No url found for submodule path 'Aeronas' in .gitmodules"
- ❌ Build failed di GitHub Actions

### **Solusi:**
- ✅ Remove invalid submodule 'Aeronas' dari Git index
- ✅ Remove submodule 'website' dari Git index
- ✅ Tambah `.gitignore` untuk exclude folders
- ✅ Commit dan push fixes ke GitHub

### **Files Created/Modified:**
- `.gitignore` - Exclude Aeronas dan website folders
- Git commands untuk remove submodules

---

## 📚 **10. Documentation Files**

### **Files yang Dibuat:**
1. ✅ `CARA_BUKA_LOCALHOST.md` - Panduan lengkap untuk buka localhost
2. ✅ `CARA_DEPLOY_GITHUB_PAGES.md` - Panduan deploy ke GitHub Pages
3. ✅ `DEPLOY_INSTRUCTIONS.md` - Instructions untuk enable GitHub Pages
4. ✅ `ADMIN_DASHBOARD_LINKS.md` - Link dan info admin dashboard
5. ✅ `SUMMARY_PERUBAHAN_SEMALAM.md` - File ini

---

## 🐛 **11. Bug Fixes**

### **Favicon Error:**
- ✅ Menambahkan favicon link ke `heritage.html`
- ✅ Menambahkan favicon link ke `about.html`
- ✅ Menambahkan favicon link ke `company.html`
- ✅ Fix 404 error untuk favicon.ico

### **Image Path Issues:**
- ✅ Normalize image paths untuk event page
- ✅ Handle absolute Windows paths
- ✅ Error handling untuk failed image loads

---

## 📝 **12. Heritage Page - Color Updates**

### **Perubahan:**
- ✅ Tahun (year) di timeline: Biru → Putih
- ✅ Milestone year: Biru → Putih
- ✅ Timeline year hover: Biru → Putih
- ✅ Text shadow: Biru → Putih

### **Files Modified:**
- `assets/css/style.css` - Timeline year colors

---

## ✅ **Summary Total Perubahan**

### **Files Modified:**
- `index.html` - Hero text, icon section
- `about.html` - "My Company" → "Company"
- `company.html` - Content update
- `heritage.html` - Front page, timeline, scroll features
- `event.html` - Announcement page style, image fixes
- `admin-dashboard.html` - Navigation features
- `assets/css/style.css` - Multiple styling updates

### **Files Created:**
- `.gitignore`
- `CARA_BUKA_LOCALHOST.md`
- `CARA_DEPLOY_GITHUB_PAGES.md`
- `DEPLOY_INSTRUCTIONS.md`
- `ADMIN_DASHBOARD_LINKS.md`
- `SUMMARY_PERUBAHAN_SEMALAM.md`

### **Images Added:**
- `engineering icon.png`
- `manufacturing.png`
- `perfomance.png`

---

## 🎯 **Fitur Utama yang Ditambahkan**

1. ✅ Event page dengan announcement page style
2. ✅ Heritage page dengan front page hero dan interactive timeline
3. ✅ Scroll indicator dengan auto-scroll snap
4. ✅ Icon section dengan 6 icons (hitam putih)
5. ✅ Admin dashboard navigation dengan clickable stat cards
6. ✅ Company page dengan content baru
7. ✅ Home page dengan hero text baru
8. ✅ GitHub Pages deployment fixes

---

## 📊 **Statistics**

- **Files Modified:** 7 files
- **Files Created:** 6 files
- **Images Added:** 3 images
- **Major Features:** 8 features
- **Bug Fixes:** 5 fixes

---

**Last Updated:** 5 Januari 2026









