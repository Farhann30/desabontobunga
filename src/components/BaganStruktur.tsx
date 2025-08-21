'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Users, Target, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

const VisiMisi = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const strukturDesa = [
    {
      nama: "H. M. NASIR, S. Ag",
      jabatan: "Kepala Desa",
      email: "nasir11111974@gmail.com",
      foto: "/images/struktur/kepala_desa.jpeg"
    },
    {
      nama: "SITTI SARAH",
      jabatan: "Sekretaris Desa",
      email: "stsarah0412@gmail.com",
      foto: "/images/struktur/sekdes.jpeg"
    },
    {
      nama: "ST. RAMLAH",
      jabatan: "Kasi Pemerintahan",
      email: "stramlah567@gmail.com",
      foto: "/images/struktur/Kasi Pemerintah.jpeg"
    },
    {
      nama: "Muhammad Darwin",
      jabatan: "Kasi Kesejahteraan",
      email: "Wiwing092811@gmail.com",
      foto: "/images/struktur/Kasi Kesejahteraan.jpeg"
    },
    {
      nama: "Munawir S.Pd",
      jabatan: "Kaur Perencanaan",
      email: "nawirnawir61@gmail.com",
      foto: "/images/struktur/Kaur Perencanaan.jpeg"
    },
    {
      nama: "Muh arfa",
      jabatan: "Kaur Umum",
      email: "arfamhmmd34@gmail.com",
      foto: "/images/struktur/kaur umum.jpeg"
    },
    {
      nama: "Sitti Fatimah",
      jabatan: "Kaur Keuangan",
      email: "Sitti.fatimah1357@gmail.com",
      foto: "/images/struktur/kaur keungan.jpeg"
    },
    {
      nama: "Hariani",
      jabatan: "Staff Kaur Keuangan",
      email: "harianianhi6@gmail.com",
      foto: "/images/struktur/staff kaur keuangan.jpeg"
    },
    {
      nama: "ISRAFIL",
      jabatan: "Staf Kasi",
      email: "Apil0124@gmail.com",
      foto: "/images/struktur/WhatsApp Image 2025-08-19 at 09.44.51 (1).jpeg"
    },
    {
      nama: "Nadia",
      jabatan: "Staf Kaur Perencanaan",
      email: "nadiaa14feb06@gmail.com",
      foto: "/images/struktur/WhatsApp Image 2025-08-19 at 09.44.51 (2).jpeg"
    },
    {
      nama: "DJUPRI, HS",
      jabatan: "Kepala Dusun Bonto Bunga",
      email: "sukaenajufri@gmail.com",
      foto: "/images/struktur/WhatsApp Image 2025-08-19 at 09.44.52.jpeg"
    },
    {
      nama: "Mustari",
      jabatan: "Kepala Dusun Manjalling",
      email: "firhanrayyan1234@gmail.com",
      foto: "/images/struktur/WhatsApp Image 2025-08-19 at 09.44.52 (1).jpeg"
    },
    {
      nama: "ABDUL RAHIM",
      jabatan: "Kepala Dusun Je'netallasa",
      email: "ar6492406@gmail.com",
      foto: "/images/struktur/WhatsApp Image 2025-08-19 at 09.44.52 (2).jpeg"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % strukturDesa.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + strukturDesa.length) % strukturDesa.length)
  }

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi Desa Bontobunga</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visi dan misi yang menjadi pedoman dalam pembangunan dan pengembangan Desa Bontobunga
          </p>
        </div>

        {/* Visi Misi Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Visi */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              "Terwujudnya Desa Bontobunga yang Maju, Mandiri, dan Sejahtera dengan Masyarakat yang Berakhlak Mulia"
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">1. Meningkatkan kualitas pendidikan dan kesehatan masyarakat</p>
              <p className="text-gray-700">2. Mengembangkan ekonomi kerakyatan berbasis potensi lokal</p>
              <p className="text-gray-700">3. Membangun infrastruktur desa yang berkelanjutan</p>
              <p className="text-gray-700">4. Meningkatkan pelayanan publik yang transparan dan akuntabel</p>
              <p className="text-gray-700">5. Mempertahankan dan mengembangkan nilai-nilai budaya lokal</p>
            </div>
          </div>
        </div>

        {/* Struktur Pemerintahan Desa - Slider */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Struktur Pemerintahan Desa</h3>
          <p className="text-gray-600">
            Tim kerja yang berdedikasi untuk melayani masyarakat Desa Bontobunga
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {strukturDesa.map((person, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
                    <div className="text-center">
                      {/* Foto */}
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        <img
                          src={person.foto}
                          alt={person.nama}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback jika foto tidak ada
                            const target = e.currentTarget as HTMLImageElement
                            target.style.display = 'none'
                            const nextElement = target.nextElementSibling as HTMLElement
                            if (nextElement) {
                              nextElement.style.display = 'flex'
                            }
                          }}
                        />
                        <div className="w-full h-full bg-primary-100 flex items-center justify-center" style={{ display: 'none' }}>
                          <Users className="w-12 h-12 text-primary-600" />
                        </div>
                      </div>
                      
                      {/* Info */}
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{person.nama}</h4>
                      <p className="text-lg text-primary-600 font-medium mb-4">{person.jabatan}</p>
                      <div className="flex items-center justify-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">{person.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {strukturDesa.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisiMisi 