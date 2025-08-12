'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, Calendar, User, Image, Video } from 'lucide-react'
import { 
  getBeritaFromStorage, 
  deleteBerita, 
  Berita,
  getGaleriFotoFromStorage,
  deleteGaleriFoto,
  GaleriFoto,
  getGaleriVideoFromStorage,
  deleteGaleriVideo,
  GaleriVideo
} from '@/lib/localStorage'

const AdminDashboard = () => {
  const [berita, setBerita] = useState<Berita[]>([])
  const [galeriFoto, setGaleriFoto] = useState<GaleriFoto[]>([])
  const [galeriVideo, setGaleriVideo] = useState<GaleriVideo[]>([])

  useEffect(() => {
    const allBerita = getBeritaFromStorage()
    const allFoto = getGaleriFotoFromStorage()
    const allVideo = getGaleriVideoFromStorage()
    setBerita(allBerita)
    setGaleriFoto(allFoto)
    setGaleriVideo(allVideo)
  }, [])

  const handleDeleteBerita = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      const success = deleteBerita(id)
      if (success) {
        setBerita(getBeritaFromStorage())
      }
    }
  }

  const handleDeleteFoto = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus foto ini?')) {
      const success = deleteGaleriFoto(id)
      if (success) {
        setGaleriFoto(getGaleriFotoFromStorage())
      }
    }
  }

  const handleDeleteVideo = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus video ini?')) {
      const success = deleteGaleriVideo(id)
      if (success) {
        setGaleriVideo(getGaleriVideoFromStorage())
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Admin</h1>
        <p className="text-gray-600">Kelola konten website Desa Bontobunga</p>
      </div>

      {/* Statistik */}
      <div className="grid md:grid-cols-6 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Berita</p>
              <p className="text-2xl font-bold text-gray-900">{berita.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Diterbitkan</p>
              <p className="text-2xl font-bold text-gray-900">{berita.filter(b => b.status === 'published').length}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Image className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Galeri Foto</p>
              <p className="text-2xl font-bold text-gray-900">{galeriFoto.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <Video className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Galeri Video</p>
              <p className="text-2xl font-bold text-gray-900">{galeriVideo.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <User className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pengunjung</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Edit className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Draft</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabel Berita */}
      <div className="card">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Daftar Berita</h2>
            <Link href="/admin/berita/tambah" className="btn-primary flex items-center gap-2">
              <Plus size={20} />
              Tambah Berita
            </Link>
          </div>
        </div>
        {berita.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {berita.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                                      <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.judul}
                            className="w-12 h-12 object-cover rounded"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-500">No img</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.judul}</div>
                        <div className="text-sm text-gray-500">{item.excerpt.substring(0, 50)}...</div>
                      </div>
                    </div>
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {item.kategori}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.tanggal).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {item.status === 'published' ? 'Diterbitkan' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/berita/${item.id}`}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          href={`/admin/berita/edit/${item.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteBerita(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Berita</h3>
            <p className="text-gray-600 mb-4">Mulai dengan menambahkan berita pertama Anda.</p>
            <Link href="/admin/berita/tambah" className="btn-primary">
              Tambah Berita Pertama
            </Link>
          </div>
        )}
      </div>

      {/* Tabel Galeri Foto */}
      <div className="card mt-8">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Galeri Foto</h2>
            <Link href="/admin/galeri/foto/tambah" className="btn-primary flex items-center gap-2">
              <Plus size={20} />
              Tambah Foto
            </Link>
          </div>
        </div>
        {galeriFoto.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Foto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {galeriFoto.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description.substring(0, 50)}...</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/galeri/foto/edit/${item.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteFoto(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="text-gray-400 mb-4">
              <Image className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Foto</h3>
            <p className="text-gray-600 mb-4">Mulai dengan menambahkan foto pertama ke galeri.</p>
            <Link href="/admin/galeri/foto/tambah" className="btn-primary">
              Tambah Foto Pertama
            </Link>
          </div>
        )}
      </div>

      {/* Tabel Galeri Video */}
      <div className="card mt-8">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Galeri Video</h2>
            <Link href="/admin/galeri/video/tambah" className="btn-primary flex items-center gap-2">
              <Plus size={20} />
              Tambah Video
            </Link>
          </div>
        </div>
        {galeriVideo.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thumbnail
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Durasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {galeriVideo.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex-shrink-0">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description.substring(0, 50)}...</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/galeri/video/edit/${item.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteVideo(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="text-gray-400 mb-4">
              <Video className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Video</h3>
            <p className="text-gray-600 mb-4">Mulai dengan menambahkan video pertama ke galeri.</p>
            <Link href="/admin/galeri/video/tambah" className="btn-primary">
              Tambah Video Pertama
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard 