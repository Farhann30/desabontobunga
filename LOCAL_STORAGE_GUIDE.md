# Panduan Penggunaan LocalStorage untuk Development

## 📋 Overview
Website Desa Bontobunga menggunakan localStorage untuk menyimpan data berita selama development. Ini memungkinkan Anda untuk:
- Menambah berita yang tersimpan
- Berita tidak hilang saat refresh browser
- Test semua fitur tanpa database

## 🗄️ Cara Kerja LocalStorage

### Data yang Disimpan
- **Key**: `bontobunga_berita`
- **Format**: JSON array berita
- **Lokasi**: Browser localStorage
- **Gambar**: Base64 encoding (tersimpan dalam JSON)

### Struktur Data
```json
[
  {
    "id": 1,
    "judul": "Judul Berita",
    "excerpt": "Ringkasan berita...",
    "konten": "Konten lengkap berita...",
    "kategori": "Pengumuman",
    "penulis": "Admin Desa",
    "tanggal": "2024-01-15T00:00:00.000Z",
    "status": "published",
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

## 🚀 Cara Menggunakan

### 1. Tambah Berita
1. Buka: `http://localhost:3000/admin`
2. Klik "Tambah Berita"
3. Isi form berita
4. Klik "Simpan Berita"
5. Berita akan tersimpan di localStorage

### 2. Lihat Berita
- **Halaman Utama**: Berita terbaru (3 berita)
- **Halaman Berita**: Semua berita dengan search & filter
- **Detail Berita**: Klik "Baca Selengkapnya"

### 3. Edit/Hapus Berita
- **Dashboard Admin**: `http://localhost:3000/admin`
- **Edit**: Klik icon edit (✏️)
- **Hapus**: Klik icon hapus (🗑️)

## 🔧 Fitur yang Tersedia

### ✅ Sudah Berfungsi
- ✅ Tambah berita baru
- ✅ Lihat daftar berita
- ✅ Detail berita
- ✅ Edit berita
- ✅ Hapus berita
- ✅ Search berita
- ✅ Filter berdasarkan kategori
- ✅ Status published/draft
- ✅ Data tersimpan di browser

### ✅ Sudah Berfungsi
- ✅ Upload gambar (base64)
- ✅ Preview gambar
- ✅ Validasi ukuran file (max 5MB)
- ✅ Validasi tipe file (hanya gambar)
- ✅ Hapus gambar
- ✅ Tampil gambar di semua halaman

### ⚠️ Belum Berfungsi
- ❌ Autentikasi admin
- ❌ Backup data otomatis

## 📱 Responsive Design
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🔄 Migrasi ke Database

Ketika sudah siap deploy ke Hostinger:

1. **Setup Database MySQL**
2. **Ganti localStorage dengan API calls**
3. **Upload gambar ke cloud storage**
4. **Setup autentikasi admin**

## 🛠️ Troubleshooting

### Berita Tidak Muncul
- Cek browser console untuk error
- Pastikan localStorage tidak di-disable
- Coba refresh halaman

### Data Hilang
- LocalStorage hanya tersimpan di browser yang sama
- Data hilang jika clear browser data
- Backup data secara manual jika perlu

### Form Tidak Berfungsi
- Pastikan semua field required diisi
- Cek browser console untuk error
- Pastikan JavaScript enabled

## 📊 Monitoring Data

### Cek Data di Browser
1. Buka Developer Tools (F12)
2. Tab Application/Storage
3. Local Storage
4. Cari key: `bontobunga_berita`

### Export Data
```javascript
// Di browser console
const data = localStorage.getItem('bontobunga_berita')
console.log(JSON.parse(data))
```

### Import Data
```javascript
// Di browser console
localStorage.setItem('bontobunga_berita', JSON.stringify(data))
```

## 🎯 Tips Penggunaan

1. **Test Semua Fitur**: Coba tambah, edit, hapus berita
2. **Test Responsive**: Cek di mobile dan desktop
3. **Backup Data**: Export data secara berkala
4. **Prepare Content**: Siapkan konten berita asli

## 🔒 Security Notes
- LocalStorage hanya untuk development
- Data tersimpan di browser user
- Tidak aman untuk production
- Gunakan database untuk production 