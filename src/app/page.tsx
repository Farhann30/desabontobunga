import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BeritaInformasi from '@/components/BeritaInformasi'
import VisiMisi from '@/components/BaganStruktur'
import PetaDesa from '@/components/PetaDesa'
import GaleriDesa from '@/components/GaleriDesa'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <BeritaInformasi />
        <VisiMisi />
        <PetaDesa />
        <GaleriDesa />
      </div>
      <Footer />
    </main>
  )
} 