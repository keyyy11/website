# Setup GitHub Pages dengan Domain Custom (aeronasaerocraft.com)

## ✅ Step 1: Commit dan Push File CNAME

File `CNAME` sudah dibuat dengan domain `aeronasaerocraft.com`. Sekarang push ke GitHub:

```bash
git add CNAME
git commit -m "Add CNAME file for custom domain aeronasaerocraft.com"
git push origin main
```

## ✅ Step 2: Setup GitHub Pages di Repository

1. **Pergi ke GitHub Repository:**
   - Buka: https://github.com/keyyy11/website
   - Login ke GitHub account Anda

2. **Buka Settings:**
   - Klik tab **Settings** di bagian atas repository
   - Scroll ke bawah ke section **Pages** (sidebar kiri)

3. **Configure GitHub Pages:**
   - Di bagian **Source**, pilih:
     - Branch: `main`
     - Folder: `/ (root)`
   - Klik **Save**

4. **Add Custom Domain:**
   - Di bagian **Custom domain**, masukkan: `aeronasaerocraft.com`
   - Klik **Save**
   - ✅ Centang kotak **Enforce HTTPS** (akan aktif setelah DNS selesai)

## ✅ Step 3: Update DNS di Hostinger

1. **Login ke Hostinger:**
   - Buka: https://hpanel.hostinger.com
   - Login dengan akun Anda

2. **Buka Domain Management:**
   - Cari domain: `aeronasaerocraft.com`
   - Klik **Manage** atau **DNS Zone Editor**

3. **Update DNS Records:**
   
   **Hapus atau edit existing records:**
   - Hapus/disable nameservers: `ns1.dns-parking.com` dan `ns2.dns-parking.com`
   
   **Tambah DNS Records baru:**
   
   **A Records (untuk root domain):**
   ```
   Type: A
   Name: @
   Points to: 185.199.108.153
   TTL: 3600
   
   Type: A
   Name: @
   Points to: 185.199.109.153
   TTL: 3600
   
   Type: A
   Name: @
   Points to: 185.199.110.153
   TTL: 3600
   
   Type: A
   Name: @
   Points to: 185.199.111.153
   TTL: 3600
   ```
   
   **CNAME Record (untuk www subdomain - optional):**
   ```
   Type: CNAME
   Name: www
   Points to: keyyy11.github.io
   TTL: 3600
   ```

4. **Save Changes:**
   - Klik **Save** atau **Add Record** untuk setiap record
   - Tunggu 5-10 menit untuk DNS update

## ✅ Step 4: Verifikasi Setup

1. **Tunggu DNS Propagation:**
   - Bisa mengambil masa 24-48 jam (biasanya 1-2 jam)
   - Check DNS propagation: https://www.whatsmydns.net/#A/aeronasaerocraft.com

2. **Test Website:**
   - Buka: http://aeronasaerocraft.com
   - Buka: https://aeronasaerocraft.com (setelah HTTPS aktif)
   - Buka: https://keyyy11.github.io/website (harus redirect ke domain custom)

3. **Enable HTTPS di GitHub Pages:**
   - Setelah DNS aktif, kembali ke GitHub Pages settings
   - ✅ Centang **Enforce HTTPS**
   - Tunggu beberapa minit untuk SSL certificate aktif

## 🔍 Troubleshooting

### DNS belum aktif?
- Check DNS propagation: https://www.whatsmydns.net
- Pastikan semua 4 A records sudah ditambah
- Tunggu lebih lama (kadang ambil masa hingga 48 jam)

### Website masih tidak boleh diakses?
- Check apakah GitHub Pages sudah aktif: https://keyyy11.github.io/website
- Pastikan file `CNAME` sudah ada di root repository
- Check GitHub Pages settings - pastikan custom domain sudah ditambah

### HTTPS tidak aktif?
- Pastikan DNS sudah fully propagated
- Pastikan custom domain sudah verified di GitHub
- Tunggu beberapa jam untuk SSL certificate generation

## 📝 Catatan Penting

- File `CNAME` HARUS berada di root folder repository
- File `CNAME` hanya boleh contain satu domain per baris
- GitHub Pages akan automatic redirect `www` jika Anda setup CNAME untuk root domain
- DNS changes boleh ambil masa 24-48 jam untuk fully propagate

## 🎉 Setelah Selesai

Website Anda akan accessible di:
- ✅ https://aeronasaerocraft.com
- ✅ https://www.aeronasaerocraft.com (redirect dari www)
- ✅ https://keyyy11.github.io/website (redirect ke custom domain)


