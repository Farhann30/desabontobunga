# Website Desa Bontobunga

Website resmi Desa Bontobunga yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

### Frontend
- **Halaman Utama** - Hero section, berita terbaru, statistik desa
- **Halaman Berita** - Daftar berita dengan fitur pencarian dan filter
- **Detail Berita** - Halaman detail berita dengan berita terkait
- **Profil Desa** - Informasi tentang desa (akan dikembangkan)
- **Layanan** - Informasi layanan masyarakat (akan dikembangkan)
- **Galeri** - Galeri foto kegiatan desa (akan dikembangkan)
- **Kontak** - Informasi kontak desa (akan dikembangkan)

### Admin Panel
- **Dashboard Admin** - Statistik dan manajemen konten
- **Manajemen Berita** - Tambah, edit, hapus berita
- **Upload Gambar** - Upload gambar untuk berita

## 🛠️ Teknologi yang Digunakan

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **React Hot Toast** - Notifications
- **Prisma** - Database ORM (akan diimplementasikan)

## 📦 Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd bontobunga-desa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

## 📁 Struktur Proyek

```
src/
├── app/                    # App Router pages
│   ├── admin/             # Admin pages
│   ├── berita/            # Berita pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── BeritaTerbaru.tsx  # Latest news component
│   ├── StatistikDesa.tsx  # Village statistics
│   ├── BeritaList.tsx     # News list with search
│   ├── BeritaDetail.tsx   # News detail page
│   ├── AdminDashboard.tsx # Admin dashboard
│   └── FormTambahBerita.tsx # Add news form
└── types/                 # TypeScript types
```

## 🎨 Customization

### Warna
Warna utama dapat diubah di `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  }
}
```

### Font
Font default menggunakan Inter. Dapat diubah di `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

## 📱 Responsive Design

Website sudah responsive untuk:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🚀 Deployment

### Hostinger
1. Build project:
   ```bash
   npm run build
   ```

2. Upload folder `.next` dan file konfigurasi ke hosting

3. Setup environment variables di hosting panel

### Vercel (Recommended)
1. Connect repository ke Vercel
2. Deploy otomatis saat push ke main branch

## 🔧 Development

### Scripts
- `npm run dev` - Development server
- `npm run build` - Build untuk production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Menambah Halaman Baru
1. Buat file di `src/app/[nama-halaman]/page.tsx`
2. Import komponen yang diperlukan
3. Export default component

### Menambah Komponen Baru
1. Buat file di `src/components/[NamaKomponen].tsx`
2. Gunakan TypeScript interface untuk props
3. Export default component

## 📝 TODO

- [ ] Implementasi database dengan Prisma
- [ ] Sistem autentikasi admin
- [ ] Upload gambar dengan cloud storage
- [ ] Halaman profil desa
- [ ] Halaman layanan masyarakat
- [ ] Halaman galeri foto
- [ ] Halaman kontak
- [ ] SEO optimization
- [ ] PWA features
- [ ] Analytics integration

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Proyek ini dibuat untuk Desa Bontobunga. Semua hak dilindungi.

## 📞 Kontak

Untuk pertanyaan atau dukungan, silakan hubungi:
- Email: info@desabontobunga.id
- Phone: +62 812-3456-7890 