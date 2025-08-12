import Header from '@/components/Header'
import FormTambahVideo from '@/components/FormTambahVideo'
import Footer from '@/components/Footer'

export default function TambahVideoPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <FormTambahVideo />
      </div>
      <Footer />
    </main>
  )
} 