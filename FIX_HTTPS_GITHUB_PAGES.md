# Fix Masalah HTTPS Tidak Boleh Diaktifkan di GitHub Pages

## ⚠️ Masalah
"Enforce HTTPS" tidak boleh diaktifkan kerana domain `www.aeronasaerocraft.com` tidak properly configured untuk support HTTPS.

## ✅ Penyelesaian Step-by-Step

### Step 1: Fix CNAME File

**Masalah:** CNAME file sekarang ada `www.aeronasaerocraft.com` - ini mungkin menyebabkan masalah.

**Fix:**
1. Buka file `CNAME` di repository
2. Tukar kepada `aeronasaerocraft.com` (tanpa www)
3. Commit dan push perubahan

**Atau** jika nak guna www, pastikan DNS setup betul (lihat Step 2).

### Step 2: Check dan Fix DNS Records di Hostinger

**Untuk GitHub Pages HTTPS, Anda PERLU ada:**

#### ✅ 4 A Records untuk Root Domain (aeronasaerocraft.com):

```
Type: A
Name: @ (atau kosongkan)
Points to: 185.199.108.153
TTL: 3600

Type: A
Name: @ (atau kosongkan)
Points to: 185.199.109.153
TTL: 3600

Type: A
Name: @ (atau kosongkan)
Points to: 185.199.110.153
TTL: 3600

Type: A
Name: @ (atau kosongkan)
Points to: 185.199.111.153
TTL: 3600
```

#### ✅ CNAME Record untuk WWW (www.aeronasaerocraft.com):

```
Type: CNAME
Name: www
Points to: keyyy11.github.io
TTL: 3600
```

**PENTING:** 
- Pastikan TIDAK ada A record untuk `www` (conflict dengan CNAME)
- Pastikan semua 4 A records untuk root domain sudah ada
- Jika ada conflict, hapus records yang conflict dulu

### Step 3: Verify Domain di GitHub Pages Settings

1. **Pergi ke GitHub Repository:**
   - Buka: https://github.com/keyyy11/website
   - Klik **Settings** → **Pages**

2. **Check Custom Domain:**
   - Pastikan custom domain sudah ditambah
   - Jika ada `www.aeronasaerocraft.com`, tukar kepada `aeronasaerocraft.com`
   - Atau tambah kedua-dua (root dan www)

3. **Wait untuk Domain Verification:**
   - GitHub akan verify domain automatically
   - Boleh ambil masa 10-30 minit
   - Check status - jika ada warning, klik "Remove" dan tambah semula

### Step 4: Check DNS Propagation

**Test DNS propagation:**
1. Buka: https://www.whatsmydns.net/#A/aeronasaerocraft.com
2. Check jika semua 4 IP addresses muncul:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

**Jika belum semua IP muncul:**
- Tunggu 1-24 jam untuk DNS propagation
- Clear DNS cache: `ipconfig /flushdns` (Windows) atau restart router

### Step 5: Enable HTTPS

**Setelah DNS betul dan domain verified:**

1. **Tunggu beberapa jam** (biasanya 1-24 jam) untuk GitHub generate SSL certificate
2. **Refresh GitHub Pages settings page**
3. **Check "Enforce HTTPS" checkbox** - sepatutnya sudah boleh diaktifkan
4. **Centang "Enforce HTTPS"**
5. **Save**

## 🔍 Troubleshooting

### Masalah: HTTPS masih tidak boleh diaktifkan

**Checklist:**
- ✅ CNAME file ada di root repository?
- ✅ CNAME file contain domain yang betul?
- ✅ 4 A records untuk root domain sudah betul?
- ✅ DNS sudah fully propagated? (check dengan whatsmydns.net)
- ✅ Domain sudah verified di GitHub? (tiada warning/error)
- ✅ Sudah tunggu 24 jam untuk SSL certificate generation?

### Masalah: Domain tidak verified

**Fix:**
1. Remove custom domain dari GitHub Pages settings
2. Wait 5 minit
3. Tambah semula custom domain
4. Pastikan DNS records betul
5. Wait untuk verification (10-30 minit)

### Masalah: DNS tidak propagate

**Fix:**
1. Check DNS records di Hostinger - pastikan semua betul
2. Clear DNS cache: `ipconfig /flushdns` (Windows)
3. Restart router/modem
4. Tunggu lebih lama (boleh ambil hingga 48 jam)

## 📝 Checklist Final

**Pastikan semua ini betul:**

- [ ] CNAME file ada di root repository dengan domain yang betul
- [ ] 4 A records untuk root domain (@) sudah ditambah di Hostinger
- [ ] CNAME record untuk www sudah ditambah (optional)
- [ ] TIDAK ada conflict DNS records
- [ ] DNS sudah propagated (check dengan whatsmydns.net)
- [ ] Domain sudah verified di GitHub Pages settings (tiada warning)
- [ ] Sudah tunggu 24 jam untuk SSL certificate generation
- [ ] "Enforce HTTPS" checkbox sudah boleh diaktifkan

## 💡 Tips

1. **Guna root domain sahaja:** Jika masih error, guna `aeronasaerocraft.com` sahaja (tanpa www) dalam CNAME file
2. **Wait patiently:** DNS propagation dan SSL certificate generation boleh ambil masa 24-48 jam
3. **Check GitHub status:** Kadang-kadang GitHub ada maintenance, check status: https://www.githubstatus.com

## 🎯 Quick Fix (Jika Masih Error)

**Cuba cara ni:**

1. **Remove custom domain** dari GitHub Pages settings
2. **Tukar CNAME file** kepada `aeronasaerocraft.com` (tanpa www)
3. **Commit dan push** CNAME file
4. **Tambah custom domain** semula di GitHub Pages: `aeronasaerocraft.com`
5. **Pastikan 4 A records** untuk root domain sudah betul di Hostinger
6. **Wait 24 jam** untuk DNS propagation dan SSL certificate
7. **Enable HTTPS** selepas 24 jam

---

**Jika masih tidak boleh selepas cuba semua ni, share screenshot DNS records dari Hostinger dan saya bantu troubleshoot lebih lanjut!**

