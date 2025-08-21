import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logo.png"
                  alt="Logo Desa Bontobunga"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Desa Bontobunga</h3>
                <p className="text-sm text-gray-400">Website Resmi</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Desa Bontobunga adalah desa yang terletak di kecamatan yang maju dan berkembang. 
              Kami berkomitmen untuk memberikan pelayanan terbaik kepada masyarakat.
            </p>
          </div>

          {/* Menu Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/berita" className="text-gray-300 hover:text-white transition-colors">
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-300 hover:text-white transition-colors">
                  Galeri Foto
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary-400" />
                <span className="text-gray-300">Jl. Desa Bontobunga No. 123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400" />
                <span className="text-gray-300">info@desabontobunga.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Desa Bontobunga. | KKNT 114 Desa Bontobunga Universitas Hasanuddin.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 