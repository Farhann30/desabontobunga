'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Video, ExternalLink } from 'lucide-react'
import toast from 'react-hot-toast'
import { addGaleriVideo } from '@/lib/localStorage'

const FormTambahVideo = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    duration: '',
    thumbnail: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Jika URL YouTube berubah, coba ambil thumbnail otomatis
    if (name === 'videoUrl') {
      const videoId = extractYouTubeId(value)
      if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        setThumbnailPreview(thumbnailUrl)
        setFormData(prev => ({
          ...prev,
          thumbnail: thumbnailUrl
        }))
      } else {
        setThumbnailPreview(null)
        setFormData(prev => ({
          ...prev,
          thumbnail: ''
        }))
      }
    }
  }

  // Fungsi untuk mengekstrak video ID dari URL YouTube
  const extractYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!formData.videoUrl) {
        toast.error('URL video YouTube wajib diisi')
        setLoading(false)
        return
      }

      const videoId = extractYouTubeId(formData.videoUrl)
      if (!videoId) {
        toast.error('URL YouTube tidak valid')
        setLoading(false)
        return
      }

      // Pastikan thumbnail ada
      if (!formData.thumbnail) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        setFormData(prev => ({
          ...prev,
          thumbnail: thumbnailUrl
        }))
      }

      addGaleriVideo({
        title: formData.title,
        description: formData.description,
        videoUrl: formData.videoUrl,
        duration: formData.duration,
        thumbnail: formData.thumbnail
      })

      toast.success('Video berhasil ditambahkan ke galeri!')
      router.push('/admin')
    } catch (error: any) {
      toast.error('Gagal menambahkan video')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link href="/admin" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tambah Video YouTube ke Galeri</h1>
        <p className="text-gray-600">Tambahkan video YouTube untuk ditampilkan di galeri desa</p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Judul */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Video *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Masukkan judul video"
              required
            />
          </div>

          {/* URL Video YouTube */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Video YouTube *
            </label>
            <div className="relative">
              <input
                type="url"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://www.youtube.com/watch?v=..."
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Masukkan URL video YouTube. Thumbnail akan diambil otomatis.
            </p>
          </div>

          {/* Durasi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Durasi Video
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Contoh: 5:30"
            />
            <p className="text-xs text-gray-500 mt-1">Format: MM:SS (opsional)</p>
          </div>

          {/* Deskripsi */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Deskripsikan video ini..."
            />
          </div>

          {/* Preview Thumbnail */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Thumbnail Video
            </label>
            {thumbnailPreview ? (
              <div className="border border-gray-300 rounded-lg p-4">
                <img
                  src={thumbnailPreview}
                  alt="YouTube Thumbnail"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Thumbnail diambil otomatis dari YouTube
                </p>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Video className="mx-auto h-12 w-12 text-gray-400" />
                <p className="text-gray-500 mt-2">
                  Masukkan URL YouTube untuk melihat thumbnail
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
          <Link href="/admin" className="btn-secondary">
            Batal
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            <Save size={20} />
            {loading ? 'Menyimpan...' : 'Simpan Video'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormTambahVideo 