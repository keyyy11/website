# Job Application Firebase Setup Guide

## ⚠️ PENTING: Anda PERLU Update Firebase Rules!

Untuk job application form berfungsi, anda **MESTI** update Firestore Security Rules di Firebase Console.

---

## 📋 Langkah-langkah Setup:

### **Step 1: Buka Firebase Console**
1. Pergi ke [Firebase Console](https://console.firebase.google.com/)
2. Pilih project: **aeronas-aerocraft**
3. Klik **Firestore Database** di sidebar kiri

### **Step 2: Update Security Rules**
1. Klik tab **Rules** di bahagian atas
2. Gantikan rules yang ada dengan code di bawah:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // News collection - read for all, write for authenticated
    match /news/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Settings collection - read for all, write for authenticated
    match /settings/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Job Applications collection - write for all (public), read for authenticated only
    match /jobApplications/{document=**} {
      allow create: if true;  // ✅ Sesiapa boleh submit job applications
      allow read: if request.auth != null;  // ✅ Hanya admin boleh baca
      allow update, delete: if request.auth != null;  // ✅ Hanya admin boleh update/delete
    }
  }
}
```

3. Klik **Publish** untuk save rules

---

## ✅ Apa yang Rules Ini Buat:

1. **`allow create: if true`** 
   - ✅ Sesiapa boleh submit job application (tanpa login)
   - ✅ Form akan berfungsi untuk semua visitors

2. **`allow read: if request.auth != null`**
   - ✅ Hanya admin yang login boleh lihat applications
   - ✅ Data applications selamat dari public access

3. **`allow update, delete: if request.auth != null`**
   - ✅ Hanya admin boleh update status atau delete applications

---

## 🧪 Test Setup:

### Test 1: Submit Form
1. Buka `job-application.html` di browser
2. Isi form dan submit
3. Check browser console (F12) - sepatutnya tiada error
4. Form sepatutnya berjaya submit dan redirect ke `services.html`

### Test 2: Check Firestore
1. Buka Firebase Console > Firestore Database
2. Klik tab **Data**
3. Seharusnya ada collection baru bernama **`jobApplications`**
4. Klik collection tersebut - sepatutnya ada document baru dengan data form anda

### Test 3: Check Admin Dashboard
1. Login ke `admin-login.html`
2. Pergi ke section **Applications** di dashboard
3. Sepatutnya boleh lihat application yang baru submit

---

## ❌ Jika Masih Ada Masalah:

### Error: "Permission denied"
- ✅ Pastikan rules sudah di-publish
- ✅ Check console untuk error code yang spesifik
- ✅ Pastikan collection name betul: `jobApplications` (case-sensitive)

### Error: "Service unavailable"
- ✅ Check internet connection
- ✅ Pastikan Firebase project masih active
- ✅ Check Firebase quota/billing

### Form stuck pada "Submitting..."
- ✅ Buka browser console (F12) untuk lihat error
- ✅ Check Network tab untuk lihat request status
- ✅ Pastikan Firestore Database sudah enabled

---

## 📝 Collection Structure:

Setiap job application akan disimpan dengan structure ini:

```javascript
{
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "+60123456789",
  address: "123 Main St",
  position: "Mobile Developer",
  experience: "5 years",
  education: "Bachelor's Degree",
  coverLetter: "I am interested in...",
  resumeFileName: "resume.pdf",
  resumeFileSize: 123456,
  resumeFileType: "application/pdf",
  submittedAt: Timestamp,
  status: "pending"
}
```

---

## 🔒 Security Notes:

⚠️ **Untuk Production:**
- Rules sekarang allow public write - ini OK untuk job applications
- Tapi pastikan ada validation di frontend
- Consider adding rate limiting untuk prevent spam
- Monitor Firestore usage untuk unusual activity

✅ **Current Setup:**
- Public boleh submit (needed untuk job applications)
- Hanya admin boleh read/update/delete (secure)
- Data tidak exposed kepada public

---

## 📞 Support:

Jika masih ada masalah selepas setup, check:
1. Browser console untuk error messages
2. Firebase Console > Firestore > Usage untuk lihat requests
3. Firebase Console > Firestore > Rules untuk verify rules sudah betul

















