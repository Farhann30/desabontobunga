import Header from '@/components/Header'
import FormTambahFoto from '@/components/FormTambahFoto'
import Footer from '@/components/Footer'

export default function TambahFotoPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <FormTambahFoto />
      </div>
      <Footer />
    </main>
  )
} 