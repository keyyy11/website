# Admin Dashboard Links

## 🔗 URL untuk Admin Dashboard

### **Localhost (Development)**
- **Admin Login**: `http://localhost:8000/admin-login.html`
- **Admin Dashboard**: `http://localhost:8000/admin-dashboard.html`

### **GitHub Pages (Production)**
- **Admin Login**: `https://keyyy11.github.io/website/admin-login.html`
- **Admin Dashboard**: `https://keyyy11.github.io/website/admin-dashboard.html`

---

## 📝 Nota Penting

### **Tidak Ada Link di Website**
Admin dashboard **TIDAK** ada link di navigation website untuk security reasons:
- Admin dashboard adalah private area
- Hanya admin yang tahu URL untuk akses
- Mencegah unauthorized access

### **Cara Akses Admin Dashboard**
1. **Type URL secara langsung** di browser:
   - Localhost: `http://localhost:8000/admin-login.html`
   - GitHub Pages: `https://keyyy11.github.io/website/admin-login.html`

2. **Bookmark URL** untuk akses cepat:
   - Bookmark admin login page
   - Bookmark admin dashboard (setelah login)

---

## 🔐 Security

- Admin dashboard **TIDAK** ditampilkan di public navigation
- User perlu tahu URL untuk akses
- Login required dengan Firebase Authentication
- Hanya authenticated users boleh akses dashboard

---

## 📌 Quick Access

**Untuk Development:**
```
http://localhost:8000/admin-login.html
```

**Untuk Production (GitHub Pages):**
```
https://keyyy11.github.io/website/admin-login.html
```

---

## ✅ Checklist

- [ ] Start local server: `python -m http.server 8000`
- [ ] Buka browser
- [ ] Type URL: `http://localhost:8000/admin-login.html`
- [ ] Login dengan Firebase credentials
- [ ] Redirect ke `admin-dashboard.html` automatik

---

**Selamat menggunakan Admin Dashboard! 🔐**



