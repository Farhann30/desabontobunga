'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Upload, X } from 'lucide-react'
import toast from 'react-hot-toast'
import { addBerita } from '@/lib/localStorage'

const FormTambahBerita = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    judul: '',
    excerpt: '',
    konten: '',
    kategori: '',
    penulis: 'Admin Desa',
    tanggal: new Date().toISOString().split('T')[0],
    status: 'published',
    image: ''
  })

  const categories = [
    'Pengumuman',
    'Infrastruktur', 
    'Kesehatan',
    'Ekonomi',
    'Sosial',
    'Pendidikan',
    'Pertanian',
    'Lainnya'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validasi ukuran file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Ukuran file terlalu besar. Maksimal 5MB.')
      return
    }

    // Validasi tipe file
    if (!file.type.startsWith('image/')) {
      toast.error('File harus berupa gambar.')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      setImagePreview(result)
      setFormData(prev => ({
        ...prev,
        image: result
      }))
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setImagePreview(null)
    setFormData(prev => ({
      ...prev,
      image: ''
    }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      addBerita({
        judul: formData.judul,
        excerpt: formData.excerpt,
        konten: formData.konten,
        kategori: formData.kategori,
        penulis: formData.penulis,
        tanggal: formData.tanggal,
        status: formData.status,
        image: formData.image || undefined
      })
      
      toast.success('Berita berhasil ditambahkan!')
      router.push('/admin')
    } catch (error: any) {
      toast.error('Gagal menambahkan berita')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link href="/admin" className="flex items-center text-primary-600 hover:text-primary-700 mb-4">
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tambah Berita Baru</h1>
        <p className="text-gray-600">Buat berita baru untuk website Desa Bontobunga</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="card p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Judul */}
          <div className="md:col-span-2">
            <label htmlFor="judul" className="block text-sm font-medium text-gray-700 mb-2">
              Judul Berita *
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
              value={formData.judul}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Masukkan judul berita"
            />
          </div>

          {/* Kategori */}
          <div>
            <label htmlFor="kategori" className="block text-sm font-medium text-gray-700 mb-2">
              Kategori *
            </label>
            <select
              id="kategori"
              name="kategori"
              value={formData.kategori}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Pilih kategori</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Tanggal */}
          <div>
            <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Publikasi
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Penulis */}
          <div>
            <label htmlFor="penulis" className="block text-sm font-medium text-gray-700 mb-2">
              Penulis
            </label>
            <input
              type="text"
              id="penulis"
              name="penulis"
              value={formData.penulis}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Nama penulis"
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="published">Diterbitkan</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Excerpt */}
          <div className="md:col-span-2">
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Ringkasan Berita *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Ringkasan singkat berita (akan ditampilkan di daftar berita)"
            />
          </div>

          {/* Upload Gambar */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gambar Berita
            </label>
            
            {imagePreview ? (
              <div className="relative">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-64 object-cover rounded-lg border border-gray-300"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-primary-600 hover:text-primary-700 font-medium">
                      Upload gambar
                    </span>
                    <span className="text-gray-500"> atau drag and drop</span>
                  </label>
                  <input 
                    id="file-upload" 
                    name="file-upload" 
                    type="file" 
                    className="sr-only" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF hingga 5MB</p>
              </div>
            )}
          </div>

          {/* Konten */}
          <div className="md:col-span-2">
            <label htmlFor="konten" className="block text-sm font-medium text-gray-700 mb-2">
              Konten Berita *
            </label>
            <textarea
              id="konten"
              name="konten"
              value={formData.konten}
              onChange={handleChange}
              required
              rows={12}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Tulis konten berita lengkap di sini..."
            />
            <p className="text-sm text-gray-500 mt-1">
              Gunakan format teks biasa. Untuk paragraf baru, gunakan baris kosong.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
          <Link
            href="/admin"
            className="btn-secondary"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Menyimpan...
              </>
            ) : (
              <>
                <Save size={20} />
                Simpan Berita
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormTambahBerita 