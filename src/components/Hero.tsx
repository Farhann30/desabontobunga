import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Selamat Datang di Desa Bontobunga
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Desa yang maju, mandiri, dan sejahtera dengan masyarakat yang berbudaya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/berita" className="btn-primary text-lg px-8 py-3">
              Baca Berita Terbaru
            </Link>
            <Link href="/profil" className="btn-secondary text-lg px-8 py-3 bg-white text-primary-600 hover:bg-gray-100">
              Kenali Desa Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 