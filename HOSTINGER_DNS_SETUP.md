# Panduan Setup DNS di Hostinger untuk GitHub Pages

## 📍 Langkah 1: Login ke Hostinger

1. Buka browser dan pergi ke: **https://hpanel.hostinger.com**
2. Login dengan email dan password Hostinger Anda
3. Setelah login, Anda akan lihat dashboard Hostinger

---

## 📍 Langkah 2: Cari Domain Anda

1. Di dashboard Hostinger, cari section **"Domains"** atau **"Domain Overview"**
2. Klik pada domain **`aeronasaerocraft.com`**
3. Atau klik **"Manage"** di sebelah domain tersebut

---

## 📍 Langkah 3: Buka DNS Settings

Setelah masuk ke halaman domain, Anda akan lihat beberapa tab/options:

**Cara 1: Melalui DNS Zone Editor**
- Cari tab/button bernama **"DNS Zone Editor"** atau **"DNS"** atau **"DNS Management"**
- Klik pada tab tersebut

**Cara 2: Melalui Advanced DNS**
- Cari **"Advanced DNS"** atau **"DNS Records"**
- Klik pada option tersebut

**Cara 3: Melalui Domain Settings**
- Klik **"Settings"** atau **"Configure"**
- Scroll ke bawah cari section **"DNS"** atau **"Nameservers"**

---

## 📍 Langkah 4: Edit atau Hapus Nameservers Parking (Jika Ada)

Jika Anda lihat nameservers seperti ini:
- `ns1.dns-parking.com`
- `ns2.dns-parking.com`

**Anda perlu tukar atau hapus ini dulu:**

1. Cari section **"Nameservers"** atau **"DNS Nameservers"**
2. Klik **"Edit"** atau **"Change"**
3. **Pilih option:** **"Use custom nameservers"** atau **"Custom DNS"**
4. Atau **hapus/delete** nameservers parking tersebut

---

## 📍 Langkah 5: Tambah DNS A Records

Sekarang Anda perlu tambah **4 A Records** yang sama:

### Record 1:
- **Type:** Pilih **"A"** dari dropdown
- **Name/Host:** Masukkan **`@`** atau **`aeronasaerocraft.com`** atau kosongkan (bergantung pada interface)
- **Points to/Value/IP:** Masukkan **`185.199.108.153`**
- **TTL:** Biarkan default atau pilih **3600**
- Klik **"Add Record"** atau **"Save"**

### Record 2:
- **Type:** **"A"**
- **Name/Host:** **`@`** atau kosongkan
- **Points to/Value/IP:** **`185.199.109.153`**
- **TTL:** **3600**
- Klik **"Add Record"** atau **"Save"**

### Record 3:
- **Type:** **"A"**
- **Name/Host:** **`@`** atau kosongkan
- **Points to/Value/IP:** **`185.199.110.153`**
- **TTL:** **3600**
- Klik **"Add Record"** atau **"Save"**

### Record 4:
- **Type:** **"A"**
- **Name/Host:** **`@`** atau kosongkan
- **Points to/Value/IP:** **`185.199.111.153`**
- **TTL:** **3600**
- Klik **"Add Record"** atau **"Save"**

---

## 📍 Langkah 6: Tambah CNAME Record (Optional - untuk www)

Jika Anda mahu `www.aeronasaerocraft.com` juga berfungsi:

- **Type:** Pilih **"CNAME"** dari dropdown
- **Name/Host:** Masukkan **`www`**
- **Points to/Value:** Masukkan **`keyyy11.github.io`**
- **TTL:** **3600**
- Klik **"Add Record"** atau **"Save"**

---

## 📍 Langkah 7: Save dan Tunggu

1. Pastikan semua records sudah ditambah
2. Klik **"Save Changes"** atau **"Apply"** (jika ada)
3. **Tunggu 5-10 minit** untuk DNS update

---

## ✅ Checklist - Pastikan Anda Ada:

Setelah setup, pastikan Anda ada **4 A Records** yang kelihatan seperti ini:

```
Type    Name    Points to
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

Dan **1 CNAME Record** (optional):
```
Type    Name    Points to
CNAME   www     keyyy11.github.io
```

---

## 🔍 Cara Check DNS Sudah Aktif

1. Buka: **https://www.whatsmydns.net/#A/aeronasaerocraft.com**
2. Lihat jika semua location menunjukkan IP: `185.199.108.153` atau IP lain dari 4 IP tersebut
3. Jika masih ada yang menunjukkan IP lama, tunggu lagi (boleh ambil masa 24-48 jam)

---

## ⚠️ Masalah Biasa dan Penyelesaian

### Masalah 1: Tidak jumpa DNS Zone Editor
**Penyelesaian:**
- Cari tab **"Advanced"** atau **"DNS Management"**
- Atau cari **"DNS Records"** di sidebar
- Jika masih tidak jumpa, cuba cari di **"Domain Settings"**

### Masalah 2: Tidak boleh edit Nameservers
**Penyelesaian:**
- Pastikan Anda login sebagai pemilik domain
- Check jika domain sudah fully activated
- Contact Hostinger support jika masih tidak boleh

### Masalah 3: Interface berbeza dari panduan
**Penyelesaian:**
- Hostinger kadang update interface mereka
- Cari keyword: **"DNS"**, **"Nameservers"**, **"A Record"**, **"CNAME"**
- Atau contact Hostinger support untuk bantuan

### Masalah 4: Website masih tidak boleh diakses selepas 24 jam
**Penyelesaian:**
- Check kembali semua 4 A Records sudah betul
- Pastikan GitHub Pages sudah setup dengan custom domain
- Check file CNAME sudah ada di GitHub repository
- Clear browser cache dan cuba lagi

---

## 📞 Bantuan Tambahan

Jika masih tidak faham atau ada masalah:

1. **Hostinger Support:**
   - Live chat di dashboard Hostinger
   - Email: support@hostinger.com
   - Beritahu mereka: "Saya nak setup custom DNS untuk GitHub Pages"

2. **Screenshot untuk Rujukan:**
   - Ambil screenshot DNS settings Anda
   - Saya boleh bantu check jika ada yang salah

---

## 🎯 Ringkasan Cepat

1. Login Hostinger → Cari domain → Buka DNS Settings
2. Hapus/tukar nameservers parking (jika ada)
3. Tambah 4 A Records dengan IP GitHub Pages
4. Save dan tunggu 5-10 minit
5. Check DNS propagation di whatsmydns.net

---

**Nota:** Jika interface Hostinger Anda berbeza dari yang saya terangkan, ambil screenshot dan saya boleh bantu adjust panduan ini!


