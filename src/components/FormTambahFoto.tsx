'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Upload, X } from 'lucide-react'
import toast from 'react-hot-toast'
import { addGaleriFoto } from '@/lib/localStorage'

const FormTambahFoto = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: ''
  })

  const categories = [
    'Infrastruktur', 'Sosial', 'Pertanian', 'Kesehatan', 'Ekonomi', 'Keagamaan', 'Pendidikan', 'Lainnya'
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
      if (!formData.image) {
        toast.error('Gambar wajib diupload')
        setLoading(false)
        return
      }

      addGaleriFoto({
        title: formData.title,
        description: formData.description,
        category: formData.category,
        image: formData.image
      })

      toast.success('Foto berhasil ditambahkan ke galeri!')
      router.push('/admin')
    } catch (error: any) {
      toast.error('Gagal menambahkan foto')
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tambah Foto ke Galeri</h1>
        <p className="text-gray-600">Upload foto untuk ditampilkan di galeri desa</p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Judul */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Foto *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Masukkan judul foto"
              required
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            >
              <option value="">Pilih kategori</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
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
              placeholder="Deskripsikan foto ini..."
            />
          </div>

          {/* Upload Gambar */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Foto *
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
                      Upload foto
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
            {loading ? 'Menyimpan...' : 'Simpan Foto'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormTambahFoto 