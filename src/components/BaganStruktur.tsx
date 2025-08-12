import { Users, Shield, Award, UserCheck } from 'lucide-react'

const BaganStruktur = () => {
  const strukturPemerintahan = [
    {
      level: 1,
      title: 'Kepala Desa',
      name: 'Ahmad Sulaiman',
      period: '2021 - 2027',
      icon: Shield,
      description: 'Pemimpin tertinggi di tingkat desa yang bertanggung jawab atas seluruh penyelenggaraan pemerintahan desa.'
    },
    {
      level: 2,
      title: 'Sekretaris Desa',
      name: 'Siti Nurhaliza',
      period: '2021 - 2027',
      icon: Users,
      description: 'Membantu kepala desa dalam melaksanakan urusan pemerintahan, pembangunan, dan kemasyarakatan.'
    },
    {
      level: 3,
      title: 'Kasi Pemerintahan',
      name: 'Budi Santoso',
      period: '2021 - 2027',
      icon: UserCheck,
      description: 'Bertanggung jawab atas urusan administrasi kependudukan, pertanahan, dan ketentraman.'
    },
    {
      level: 3,
      title: 'Kasi Kesejahteraan',
      name: 'Dewi Sartika',
      period: '2021 - 2027',
      icon: Award,
      description: 'Bertanggung jawab atas urusan sosial, kesehatan, pendidikan, dan pemberdayaan masyarakat.'
    },
    {
      level: 3,
      title: 'Kasi Pelayanan',
      name: 'Rudi Hartono',
      period: '2021 - 2027',
      icon: Users,
      description: 'Bertanggung jawab atas urusan pelayanan administrasi dan pelayanan umum kepada masyarakat.'
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktur Pemerintahan Desa</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kenali struktur organisasi dan perangkat desa yang mengelola pemerintahan Desa Bontobunga
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Kepala Desa - Level Tertinggi */}
        <div className="flex justify-center mb-8">
          <div className="card p-6 text-center max-w-md">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{strukturPemerintahan[0].title}</h3>
            <p className="text-lg font-semibold text-primary-600 mb-1">{strukturPemerintahan[0].name}</p>
            <p className="text-sm text-gray-500 mb-3">{strukturPemerintahan[0].period}</p>
            <p className="text-gray-600 text-sm">{strukturPemerintahan[0].description}</p>
          </div>
        </div>

        {/* Sekretaris Desa */}
        <div className="flex justify-center mb-8">
          <div className="card p-6 text-center max-w-md">
            <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-secondary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{strukturPemerintahan[1].title}</h3>
            <p className="text-lg font-semibold text-secondary-600 mb-1">{strukturPemerintahan[1].name}</p>
            <p className="text-sm text-gray-500 mb-3">{strukturPemerintahan[1].period}</p>
            <p className="text-gray-600 text-sm">{strukturPemerintahan[1].description}</p>
          </div>
        </div>

        {/* Kasi - Level Ketiga */}
        <div className="grid md:grid-cols-3 gap-6">
          {strukturPemerintahan.slice(2).map((kasi, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <kasi.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{kasi.title}</h3>
              <p className="text-md font-semibold text-green-600 mb-1">{kasi.name}</p>
              <p className="text-sm text-gray-500 mb-3">{kasi.period}</p>
              <p className="text-gray-600 text-sm">{kasi.description}</p>
            </div>
          ))}
        </div>

        {/* Informasi Tambahan */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Struktur</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Tugas & Fungsi:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Melaksanakan urusan pemerintahan desa</li>
                  <li>• Melaksanakan pembangunan desa</li>
                  <li>• Melaksanakan pembinaan kemasyarakatan</li>
                  <li>• Melaksanakan pemberdayaan masyarakat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Periode Jabatan:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kepala Desa: 6 tahun (2021-2027)</li>
                  <li>• Perangkat Desa: Sesuai masa jabatan</li>
                  <li>• Dapat dipilih kembali untuk 1 kali masa jabatan</li>
                  <li>• Pemilihan melalui musyawarah desa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BaganStruktur 