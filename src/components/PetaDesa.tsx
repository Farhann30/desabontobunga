import { MapPin, Download, Eye } from 'lucide-react'

const PetaDesa = () => {
  const petaDusun = [
    {
      nama: "Peta Batas Dusun Bonto Bunga",
      file: "/documents/Peta Dusun Bonto Bunga.pdf",
      deskripsi: "Peta detail batas wilayah Dusun Bonto Bunga"
    },
    {
      nama: "Peta Batas Dusun Manjalling", 
      file: "/documents/Peta Dusun Manjalling.pdf",
      deskripsi: "Peta detail batas wilayah Dusun Manjalling"
    },
    {
      nama: "Peta Batas Dusun Je'netallasa",
      file: "/documents/Peta Dusun Jenetallasa.pdf", 
      deskripsi: "Peta detail batas wilayah Dusun Je'netallasa"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Peta Desa Bontobunga</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Informasi lokasi dan peta detail Desa Bontobunga
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Peta Interaktif */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Peta Lokasi</h3>
              <p className="text-gray-600">Lokasi Desa Bontobunga di Kabupaten Maros</p>
            </div>
            <div className="h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31417.77362180384!2d119.54508585299888!3d-5.137557426207044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee52c5489d6af%3A0x946aa3fc48e0d655!2sBonto%20Bunga%2C%20Moncong%20Loe%2C%20Maros%20Regency%2C%20South%20Sulawesi!5e1!3m2!1sen!2sid!4v1755768068314!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Desa Bontobunga"
              />
            </div>
          </div>

          {/* Informasi Lokasi */}
          <div className="space-y-6">
            {/* Lokasi */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informasi Lokasi</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alamat Lengkap:</h4>
                  <p className="text-gray-600">Desa Bontobunga, Kecamatan Maros Baru, Kabupaten Maros, Sulawesi Selatan</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Koordinat:</h4>
                  <p className="text-gray-600">Latitude: -5.1234° S, Longitude: 119.5678° E</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ketinggian:</h4>
                  <p className="text-gray-600">50-100 meter di atas permukaan laut</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Luas Wilayah:</h4>
                  <p className="text-gray-600">± 2.500 hektar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Peta Batas Dusun */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Peta Batas Dusun</h3>
            <p className="text-gray-600">
              Peta detail batas wilayah masing-masing dusun di Desa Bontobunga
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {petaDusun.map((peta, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{peta.nama}</h4>
                  <p className="text-sm text-gray-600 mb-4">{peta.deskripsi}</p>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a
                    href={peta.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    Lihat Peta
                  </a>
                  <a
                    href={peta.file}
                    download
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Peta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PetaDesa 