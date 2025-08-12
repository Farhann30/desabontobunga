import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react'

const PetaDesa = () => {
  const informasiLokasi = {
    alamat: 'Jl. Desa Bontobunga No. 123, Kecamatan Bontobunga, Kabupaten Bontobunga',
    koordinat: '-5.147665, 119.432732',
    luas: '125 Hektar',
    batas: {
      utara: 'Desa Bontobunga Utara',
      selatan: 'Desa Bontobunga Selatan',
      barat: 'Desa Bontobunga Barat',
      timur: 'Desa Bontobunga Timur'
    },
    dusun: [
      'Dusun Bontobunga I',
      'Dusun Bontobunga II', 
      'Dusun Bontobunga III'
    ],
    kontak: {
      telepon: '+62 812-3456-7890',
      email: 'info@desabontobunga.id',
      jamKerja: 'Senin - Jumat: 08:00 - 16:00 WITA'
    }
  }

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Peta & Lokasi Desa</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan lokasi dan informasi geografis Desa Bontobunga
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Peta */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Peta Desa</h3>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Peta Interaktif Desa Bontobunga</p>
                <p className="text-sm text-gray-500 mt-2">Koordinat: {informasiLokasi.koordinat}</p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn-primary">
                <Navigation className="w-4 h-4 mr-2" />
                Buka di Google Maps
              </button>
            </div>
          </div>

          {/* Informasi Lokasi */}
          <div className="space-y-6">
            {/* Alamat */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informasi Lokasi</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Alamat Lengkap:</h4>
                  <p className="text-gray-600">{informasiLokasi.alamat}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Luas Wilayah:</h4>
                  <p className="text-gray-600">{informasiLokasi.luas}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Koordinat:</h4>
                  <p className="text-gray-600">{informasiLokasi.koordinat}</p>
                </div>
              </div>
            </div>

            {/* Batas Wilayah */}
            <div className="card p-6">
              <h4 className="font-medium text-gray-900 mb-4">Batas Wilayah:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-700">Utara:</span>
                  <p className="text-sm text-gray-600">{informasiLokasi.batas.utara}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Selatan:</span>
                  <p className="text-sm text-gray-600">{informasiLokasi.batas.selatan}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Barat:</span>
                  <p className="text-sm text-gray-600">{informasiLokasi.batas.barat}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Timur:</span>
                  <p className="text-sm text-gray-600">{informasiLokasi.batas.timur}</p>
                </div>
              </div>
            </div>

            {/* Dusun */}
            <div className="card p-6">
              <h4 className="font-medium text-gray-900 mb-4">Dusun:</h4>
              <ul className="space-y-2">
                {informasiLokasi.dusun.map((dusun, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {dusun}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Kontak & Jam Kerja */}
        <div className="mt-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontak & Jam Kerja</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Telepon</h4>
                  <p className="text-gray-600">{informasiLokasi.kontak.telepon}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">{informasiLokasi.kontak.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Jam Kerja</h4>
                  <p className="text-gray-600">{informasiLokasi.kontak.jamKerja}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Akses Transportasi */}
        <div className="mt-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Akses Transportasi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Dari Kota:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bus: 45 menit</li>
                  <li>• Mobil Pribadi: 30 menit</li>
                  <li>• Motor: 25 menit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Angkutan Umum:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bus Kota: Rute A-B</li>
                  <li>• Angkot: Rute 1, 2, 3</li>
                  <li>• Ojek Online: Tersedia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PetaDesa 