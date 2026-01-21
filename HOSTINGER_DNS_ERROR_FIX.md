# Fix Error: "DNS resource record is not valid or conflicts with another resource record"

## ⚠️ Masalah yang Anda Alami

Error ini muncul kerana:
1. Sudah ada DNS record yang sama
2. Ada conflict antara A record dan CNAME record
3. Format DNS record tidak betul

---

## ✅ Penyelesaian Step-by-Step

### Step 1: Check DNS Records yang Sedia Ada

1. Di halaman DNS settings Hostinger, **lihat semua DNS records yang sudah ada**
2. **Cari jika ada record untuk:**
   - Name: `www` (ada A record atau CNAME record?)
   - Name: `@` atau kosong (root domain)
   - Name: `aeronasaerocraft.com`

### Step 2: Hapus Records yang Conflict

**Jika ada record untuk `www` yang sudah wujud:**
- **Hapus/Delete** record tersebut dulu
- Kemudian tambah baru

**Jika ada banyak A records untuk root domain:**
- Biarkan yang sedia ada jika sudah betul
- Atau hapus semua dan tambah fresh

### Step 3: Setup Betul-betul

**Untuk Root Domain (`aeronasaerocraft.com`):**

Tambah **4 A Records** dengan cara ini:

**Record 1:**
```
Type: A
Name: @              (atau kosongkan sepenuhnya)
Points to: 185.199.108.153
TTL: 3600 (atau default)
```

**Record 2:**
```
Type: A
Name: @              (atau kosongkan sepenuhnya)
Points to: 185.199.109.153
TTL: 3600
```

**Record 3:**
```
Type: A
Name: @              (atau kosongkan sepenuhnya)
Points to: 185.199.110.153
TTL: 3600
```

**Record 4:**
```
Type: A
Name: @              (atau kosongkan sepenuhnya)
Points to: 185.199.111.153
TTL: 3600
```

**Untuk WWW Subdomain (`www.aeronasaerocraft.com`):**

**SEBELUM tambah CNAME untuk www, pastikan:**
- **TIDAK ada** A record untuk `www`
- **TIDAK ada** CNAME record untuk `www` yang lain

Kemudian tambah:

```
Type: CNAME
Name: www            (JANGAN masukkan "www.aeronasaerocraft.com")
Points to: keyyy11.github.io
TTL: 3600
```

---

## 🔍 Cara Check dan Hapus Records yang Conflict

### Jika Anda Nak Hapus Record yang Conflict:

1. **Cari record yang conflict** di dalam list DNS records
2. Klik **"Delete"** atau **"Remove"** di sebelah record tersebut
3. Confirm delete
4. **Kemudian tambah record baru** dengan betul

---

## ⚡ Alternatif: Skip WWW untuk Sekarang

**Jika masih error untuk www, Anda boleh skip dulu:**

1. **Setup hanya 4 A Records untuk root domain:**
   - Type: A
   - Name: @ (atau kosong)
   - Value: 4 IP addresses GitHub Pages

2. **Jangan tambah CNAME untuk www dulu**
   - GitHub Pages akan auto handle www subdomain
   - Atau kita setup kemudian

3. **Test root domain dulu:**
   - `aeronasaerocraft.com` akan berfungsi
   - `www.aeronasaerocraft.com` mungkin akan redirect atau kita setup kemudian

---

## 📝 Checklist Setup

**Pastikan setup Anda macam ni:**

✅ **4 A Records untuk root domain:**
- A | @ | 185.199.108.153
- A | @ | 185.199.109.153
- A | @ | 185.199.110.153
- A | @ | 185.199.111.153

❌ **TIDAK ada:**
- A record untuk `www`
- Multiple CNAME untuk www
- A record dan CNAME untuk www (conflict!)

✅ **CNAME untuk www (optional - skip jika error):**
- CNAME | www | keyyy11.github.io

---

## 🎯 Cara Paling Selamat

**Jika masih error, cuba cara ni:**

1. **Hapus SEMUA DNS records yang sedia ada** (backup dulu jika nak)
2. **Tambah 4 A Records fresh:**
   - Semua dengan Name: `@` atau kosong
   - 4 IP berbeza
3. **Save dan test**
4. **Kemudian tambah CNAME www** (jika perlu)

---

## 💡 Tips

- **Name field:** Untuk root domain, guna `@` atau **kosongkan sepenuhnya**
- **Name field:** Untuk www, guna `www` sahaja (bukan `www.aeronasaerocraft.com`)
- **TTL:** Biarkan default atau guna 3600
- **Save satu-satu:** Jangan tambah semua sekali gus, tambah satu-satu dan save

---

**Jika masih error selepas cuba semua ni, share screenshot DNS records yang sedia ada dan saya bantu check apa yang conflict!**


