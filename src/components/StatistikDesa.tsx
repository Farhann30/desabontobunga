import { Users, Home, MapPin, TrendingUp } from 'lucide-react'

const StatistikDesa = () => {
  const statistik = [
    {
      icon: Users,
      label: 'Jumlah Penduduk',
      value: '2,450',
      description: 'Jiwa'
    },
    {
      icon: Home,
      label: 'Jumlah KK',
      value: '650',
      description: 'Kartu Keluarga'
    },
    {
      icon: MapPin,
      label: 'Luas Wilayah',
      value: '125',
      description: 'Hektar'
    },
    {
      icon: TrendingUp,
      label: 'Pertumbuhan',
      value: '2.5%',
      description: 'Per Tahun'
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Statistik Desa</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Data terkini seputar kependudukan dan perkembangan Desa Bontobunga
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistik.map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.value}</h3>
            <p className="text-gray-600 font-medium mb-1">{item.label}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatistikDesa 