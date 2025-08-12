'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, User, Search, Filter } from 'lucide-react'
import { getPublishedBerita, Berita } from '@/lib/localStorage'

const BeritaList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [allBerita, setAllBerita] = useState<Berita[]>([])

  useEffect(() => {
    const publishedBerita = getPublishedBerita()
    setAllBerita(publishedBerita)
  }, [])

  const categories = ['Semua', 'Pengumuman', 'Infrastruktur', 'Kesehatan', 'Ekonomi', 'Sosial']

  // Filter berita berdasarkan pencarian dan kategori
  const filteredBerita = allBerita.filter(berita => {
    const matchesSearch = berita.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         berita.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Semua' || 
                           berita.kategori === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Search dan Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Daftar Berita */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBerita.map((berita) => (
          <article key={berita.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
              {berita.image ? (
                <img 
                  src={berita.image} 
                  alt={berita.judul}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Gambar Berita</span>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {berita.kategori}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {berita.judul}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {berita.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(berita.tanggal).toLocaleDateString('id-ID')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{berita.penulis}</span>
                </div>
              </div>
              <Link 
                href={`/berita/${berita.id}`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredBerita.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Tidak ada berita yang ditemukan.</p>
        </div>
      )}
    </div>
  )
}

export default BeritaList 