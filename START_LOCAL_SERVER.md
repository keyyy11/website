# 🚀 Cara Start Local Server

## ⚠️ PENTING: Jangan Buka File dengan Double-Click!

Browser tidak boleh load ES6 modules dari `file://` protocol. Anda **MESTI** guna local server.

---

## ✅ Solution: Gunakan Local Server

### **Option 1: VS Code Live Server** (Paling Mudah) ⭐

1. **Install VS Code** (jika belum ada)
   - Download: https://code.visualstudio.com/

2. **Install Live Server Extension**
   - Buka VS Code
   - Klik **Extensions** icon (atau tekan `Ctrl+Shift+X`)
   - Search: **"Live Server"**
   - Install extension oleh **Ritwick Dey**

3. **Start Server**
   - Buka folder project di VS Code
   - Right-click pada `index.html`
   - Pilih **"Open with Live Server"**
   - Browser akan auto-buka dengan `http://localhost:5500`

4. **Done!** ✅
   - Sekarang semua files akan load dengan betul
   - Tiada CORS errors

---

### **Option 2: Python HTTP Server** (Jika ada Python)

1. **Open Terminal/Command Prompt**
   - Navigate ke project folder:
   ```bash
   cd C:\Users\User\Documents\GitHub\gitHub-main
   ```

2. **Start Server**
   ```bash
   python -m http.server 8000
   ```
   
   Atau jika Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Buka Browser**
   - Pergi ke: `http://localhost:8000`
   - Buka `index.html` dari sana

4. **Stop Server**
   - Tekan `Ctrl+C` di terminal

---

### **Option 3: Node.js http-server** (Jika ada Node.js)

1. **Install http-server** (sekali sahaja)
   ```bash
   npm install -g http-server
   ```

2. **Start Server**
   ```bash
   cd C:\Users\User\Documents\GitHub\gitHub-main
   http-server
   ```

3. **Buka Browser**
   - Pergi ke: `http://localhost:8080`
   - Buka `index.html` dari sana

---

### **Option 4: PHP Built-in Server** (Jika ada PHP)

1. **Open Terminal**
   ```bash
   cd C:\Users\User\Documents\GitHub\gitHub-main
   php -S localhost:8000
   ```

2. **Buka Browser**
   - Pergi ke: `http://localhost:8000`
   - Buka `index.html` dari sana

---

## 🔍 Verify Server Berfungsi

Selepas start server, check:

1. **URL di browser** sepatutnya:
   - ✅ `http://localhost:8000/index.html` (betul)
   - ❌ `file:///C:/Users/.../index.html` (salah - ini sebab error!)

2. **Browser Console** (F12)
   - Tiada CORS errors
   - Files load dengan betul

3. **Network Tab** (F12 → Network)
   - Semua files return status `200 OK`
   - Tiada `ERR_FAILED` errors

---

## ⚠️ Common Mistakes

❌ **Jangan buka file dengan:**
- Double-click pada `index.html`
- Drag & drop ke browser
- File → Open File

✅ **Guna local server:**
- VS Code Live Server
- Python http.server
- Node.js http-server
- PHP built-in server

---

## 💡 Quick Fix untuk Sekarang

**Paling cepat - guna Python:**

1. Buka Command Prompt atau PowerShell
2. Type:
   ```bash
   cd "C:\Users\User\Documents\GitHub\gitHub-main"
   python -m http.server 8000
   ```
3. Buka browser, pergi ke: `http://localhost:8000/index.html`

**Done!** Tiada lagi CORS errors! 🎉














