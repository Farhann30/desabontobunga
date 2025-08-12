import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FormTambahBerita from '@/components/FormTambahBerita'

export default function TambahBeritaPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <FormTambahBerita />
      </div>
      <Footer />
    </main>
  )
} 