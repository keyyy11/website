# ⚡ QUICK FIX: CORS Error di index.html

## 🔴 Masalah Anda:
```
Access to script at 'file:///...' from origin 'null' has been blocked by CORS policy
```

**Sebab:** Anda buka `index.html` dengan double-click (file:// protocol), tapi ES6 modules memerlukan HTTP server.

---

## ✅ SOLUTION: Start Local Server

### **Cara Paling Mudah - Python Server:**

1. **Buka Terminal/PowerShell di folder project ini**

2. **Type command ini:**
   ```bash
   python -m http.server 8000
   ```

3. **Buka browser, pergi ke:**
   ```
   http://localhost:8000/index.html
   ```

4. **Done!** ✅ Tiada lagi CORS errors!

---

### **Atau Guna VS Code Live Server:**

1. Install extension **"Live Server"** di VS Code
2. Right-click `index.html` → **"Open with Live Server"**
3. Browser akan auto-buka dengan local server

---

## 🎯 Yang Perlu Anda Buat SEKARANG:

**Option 1: Saya start server untuk anda**
- Saya boleh start Python server sekarang
- Anda cuma perlu buka `http://localhost:8000/index.html`

**Option 2: Anda start sendiri**
- Buka terminal di folder project
- Type: `python -m http.server 8000`
- Buka browser: `http://localhost:8000/index.html`

---

## ⚠️ PENTING:

**JANGAN buka file dengan:**
- ❌ Double-click pada index.html
- ❌ Drag & drop ke browser
- ❌ File → Open File

**GUNA local server:**
- ✅ `http://localhost:8000/index.html`
- ✅ VS Code Live Server
- ✅ Python http.server

---

Nak saya start server untuk anda sekarang? Atau anda nak start sendiri?















