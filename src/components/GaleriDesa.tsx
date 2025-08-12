'use client'

import { useState, useEffect } from 'react'
import { Image, Video, Play, X } from 'lucide-react'
import { getGaleriFotoFromStorage, getGaleriVideoFromStorage, GaleriFoto, GaleriVideo } from '@/lib/localStorage'

const GaleriDesa = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [galeriFoto, setGaleriFoto] = useState<GaleriFoto[]>([])
  const [galeriVideo, setGaleriVideo] = useState<GaleriVideo[]>([])

  useEffect(() => {
    const foto = getGaleriFotoFromStorage()
    const video = getGaleriVideoFromStorage()
    setGaleriFoto(foto)
    setGaleriVideo(video)
  }, [])

  const categories = ['Semua', 'Infrastruktur', 'Sosial', 'Pertanian', 'Kesehatan', 'Ekonomi', 'Keagamaan', 'Pendidikan', 'Lainnya']

  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const filteredPhotos = selectedCategory === 'Semua' 
    ? galeriFoto 
    : galeriFoto.filter(photo => photo.category === selectedCategory)

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri Desa</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dokumentasi kegiatan dan keindahan Desa Bontobunga dalam bentuk foto dan video
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Galeri Foto */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Image className="w-6 h-6 mr-2" />
            Galeri Foto
          </h3>
          {filteredPhotos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div 
                    className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden"
                    onClick={() => setSelectedImage(photo.image)}
                  >
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{photo.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{photo.description}</p>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">
                      {photo.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <Image className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Foto</h3>
                <p className="text-gray-600 mb-4">Belum ada foto yang ditambahkan ke galeri. Silakan tambahkan foto melalui admin panel.</p>
                <a href="/admin" className="btn-primary">
                  Tambah Foto Pertama
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Galeri Video */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Video className="w-6 h-6 mr-2" />
            Galeri Video
          </h3>
          {galeriVideo.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {galeriVideo.map((video) => (
                <div key={video.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedVideo(video.videoUrl)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
                    >
                      <Play className="w-16 h-16 text-white" />
                    </button>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{video.title}</h4>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <Video className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Video</h3>
                <p className="text-gray-600 mb-4">Belum ada video yang ditambahkan ke galeri. Silakan tambahkan video melalui admin panel.</p>
                <a href="/admin" className="btn-primary">
                  Tambah Video Pertama
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bagikan Dokumentasi Anda</h3>
            <p className="text-gray-600 mb-6">
              Punya foto atau video kegiatan desa yang ingin dibagikan? Silakan hubungi admin untuk upload ke galeri.
            </p>
            <button className="btn-primary">
              Hubungi Admin
            </button>
          </div>
        </div>
      </div>

      {/* Modal Foto */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Modal Video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <iframe
              src={selectedVideo}
              title="Video"
              className="w-full h-96"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default GaleriDesa 