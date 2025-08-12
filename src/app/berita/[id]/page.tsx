import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BeritaDetail from '@/components/BeritaDetail'

export default function BeritaDetailPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <BeritaDetail id={params.id} />
      </div>
      <Footer />
    </main>
  )
} 