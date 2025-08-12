'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'
import { getBeritaById, getPublishedBerita, Berita } from '@/lib/localStorage'

interface BeritaDetailProps {
  id: string
}

const BeritaDetail = ({ id }: BeritaDetailProps) => {
  const [berita, setBerita] = useState<Berita | null>(null)
  const [loading, setLoading] = useState(true)
  const [allBerita, setAllBerita] = useState<Berita[]>([])

  useEffect(() => {
    const beritaId = parseInt(id)
    const foundBerita = getBeritaById(beritaId)
    const publishedBerita = getPublishedBerita()
    
    setBerita(foundBerita)
    setAllBerita(publishedBerita)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Memuat berita...</p>
      </div>
    )
  }

  if (!berita) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-6">Berita yang Anda cari tidak ditemukan atau telah dihapus.</p>
        <Link href="/berita" className="btn-primary">
          Kembali ke Daftar Berita
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/berita" className="flex items-center text-primary-600 hover:text-primary-700">
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Daftar Berita
        </Link>
      </nav>

      {/* Header Berita */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            {berita.kategori}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {berita.judul}
        </h1>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(berita.tanggal).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{berita.penulis}</span>
            </div>
          </div>
          <button className="flex items-center gap-1 text-primary-600 hover:text-primary-700">
            <Share2 size={16} />
            <span>Bagikan</span>
          </button>
        </div>
      </header>

      {/* Gambar Berita */}
      <div className="mb-8">
        {berita.image ? (
          <div className="h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={berita.image} 
              alt={berita.judul}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Gambar Berita</span>
          </div>
        )}
      </div>

      {/* Konten Berita */}
      <article className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {berita.konten}
        </div>
      </article>

      {/* Berita Terkait */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Berita Terkait</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {allBerita
            .filter(b => b.id !== berita.id)
            .slice(0, 2)
            .map((relatedBerita) => (
              <Link 
                key={relatedBerita.id}
                href={`/berita/${relatedBerita.id}`}
                className="card p-4 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {relatedBerita.judul}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {relatedBerita.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                  <Calendar size={14} />
                  <span>{new Date(relatedBerita.tanggal).toLocaleDateString('id-ID')}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}

export default BeritaDetail 