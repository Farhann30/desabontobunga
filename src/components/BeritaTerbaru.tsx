'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { getPublishedBerita, Berita } from '@/lib/localStorage'

const BeritaTerbaru = () => {
  const [beritaTerbaru, setBeritaTerbaru] = useState<Berita[]>([])

  useEffect(() => {
    const publishedBerita = getPublishedBerita()
    setBeritaTerbaru(publishedBerita.slice(0, 3)) // Ambil 3 berita terbaru
  }, [])

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita Terbaru</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dapatkan informasi terbaru seputar kegiatan dan perkembangan Desa Bontobunga
        </p>
      </div>

      {beritaTerbaru.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaTerbaru.map((berita) => (
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

          <div className="text-center mt-12">
            <Link href="/berita" className="btn-primary">
              Lihat Semua Berita
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Berita</h3>
            <p className="text-gray-600 mb-4">Belum ada berita yang dipublikasikan. Silakan tambahkan berita melalui admin panel.</p>
            <Link href="/admin" className="btn-primary">
              Tambah Berita Pertama
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default BeritaTerbaru 