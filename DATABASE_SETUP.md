# Setup Database untuk Website Desa Bontobunga

## 📋 Prerequisites
- MySQL database (bisa dari Hostinger)
- Node.js dan npm sudah terinstall

## 🗄️ Setup Database

### 1. Buat Database di Hostinger
1. Login ke Hostinger Control Panel
2. Buka phpMyAdmin
3. Buat database baru dengan nama: `bontobunga_desa`
4. Catat username, password, dan host database

### 2. Setup Environment Variables
Buat file `.env` di root project:

```env
# Database
DATABASE_URL="mysql://username:password@host:3306/bontobunga_desa"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Next Auth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

**Ganti dengan data Hostinger Anda:**
- `username`: username database Hostinger
- `password`: password database Hostinger  
- `host`: host database Hostinger (biasanya `localhost` atau IP server)

### 3. Generate Prisma Client
```bash
npx prisma generate
```

### 4. Jalankan Migration
```bash
npx prisma db push
```

### 5. Verifikasi Database
```bash
npx prisma studio
```

## 🚀 Cara Menggunakan

### Development (Local)
1. Setup database sesuai langkah di atas
2. Jalankan: `npm run dev`
3. Akses admin panel: `http://localhost:3000/admin`
4. Tambah berita melalui form

### Production (Hostinger)
1. Upload semua file ke hosting
2. Setup environment variables di hosting panel
3. Jalankan migration di server
4. Build dan deploy

## 📊 Struktur Database

### Tabel: berita
- `id` - Primary key (auto increment)
- `judul` - Judul berita (VARCHAR 255)
- `excerpt` - Ringkasan berita (TEXT)
- `konten` - Konten lengkap (LONGTEXT)
- `kategori` - Kategori berita (VARCHAR 100)
- `penulis` - Nama penulis (VARCHAR 100)
- `tanggal` - Tanggal publikasi (DATETIME)
- `status` - Status berita: published/draft (VARCHAR 20)
- `image` - URL gambar (VARCHAR 255, nullable)
- `createdAt` - Waktu dibuat (DATETIME)
- `updatedAt` - Waktu diupdate (DATETIME)

### Tabel: admin
- `id` - Primary key (auto increment)
- `username` - Username admin (VARCHAR 100, unique)
- `password` - Password (hashed) (VARCHAR 255)
- `nama` - Nama lengkap (VARCHAR 100)
- `email` - Email (VARCHAR 100, unique)
- `role` - Role: admin/super_admin (VARCHAR 20)
- `createdAt` - Waktu dibuat (DATETIME)
- `updatedAt` - Waktu diupdate (DATETIME)

## 🔧 Troubleshooting

### Error: "Unknown database"
- Pastikan database sudah dibuat di Hostinger
- Cek koneksi database di `.env`

### Error: "Access denied"
- Cek username dan password database
- Pastikan user memiliki akses ke database

### Error: "Table doesn't exist"
- Jalankan: `npx prisma db push`
- Atau: `npx prisma migrate dev`

## 📝 Contoh Data

### Tambah Admin Pertama
```sql
INSERT INTO admin (username, password, nama, email, role) 
VALUES ('admin', '$2b$10$hashedpassword', 'Admin Desa', 'admin@desabontobunga.id', 'admin');
```

### Tambah Berita Contoh
```sql
INSERT INTO berita (judul, excerpt, konten, kategori, penulis, status) 
VALUES (
  'Selamat Datang di Website Desa Bontobunga',
  'Website resmi Desa Bontobunga telah diluncurkan...',
  'Konten lengkap berita...',
  'Pengumuman',
  'Admin Desa',
  'published'
);
```

## 🔒 Security Notes
- Ganti JWT_SECRET dengan string yang kuat
- Gunakan HTTPS di production
- Backup database secara berkala
- Monitor log database untuk aktivitas mencurigakan 