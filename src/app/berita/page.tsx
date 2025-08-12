import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BeritaList from '@/components/BeritaList'

export default function BeritaPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Berita & Pengumuman</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dapatkan informasi terbaru seputar kegiatan, pengumuman, dan perkembangan Desa Bontobunga
          </p>
        </div>
        <BeritaList />
      </div>
      <Footer />
    </main>
  )
} 