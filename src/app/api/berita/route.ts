import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET - Ambil semua berita
export async function GET() {
  try {
    const berita = await prisma.berita.findMany({
      orderBy: {
        tanggal: 'desc'
      }
    })
    
    return NextResponse.json(berita)
  } catch (error) {
    console.error('Error fetching berita:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data berita' },
      { status: 500 }
    )
  }
}

// POST - Tambah berita baru
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { judul, excerpt, konten, kategori, penulis, tanggal, status, image } = body

    // Validasi input
    if (!judul || !excerpt || !konten || !kategori) {
      return NextResponse.json(
        { error: 'Judul, ringkasan, konten, dan kategori wajib diisi' },
        { status: 400 }
      )
    }

    const berita = await prisma.berita.create({
      data: {
        judul,
        excerpt,
        konten,
        kategori,
        penulis: penulis || 'Admin Desa',
        tanggal: tanggal ? new Date(tanggal) : new Date(),
        status: status || 'published',
        image: image || null
      }
    })

    return NextResponse.json(berita, { status: 201 })
  } catch (error) {
    console.error('Error creating berita:', error)
    return NextResponse.json(
      { error: 'Gagal menambahkan berita' },
      { status: 500 }
    )
  }
} 