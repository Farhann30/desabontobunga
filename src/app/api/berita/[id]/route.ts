import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET - Ambil berita berdasarkan ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'ID berita tidak valid' },
        { status: 400 }
      )
    }

    const berita = await prisma.berita.findUnique({
      where: { id }
    })

    if (!berita) {
      return NextResponse.json(
        { error: 'Berita tidak ditemukan' },
        { status: 404 }
      )
    }

    return NextResponse.json(berita)
  } catch (error) {
    console.error('Error fetching berita:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data berita' },
      { status: 500 }
    )
  }
}

// PUT - Update berita
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { judul, excerpt, konten, kategori, penulis, tanggal, status, image } = body

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'ID berita tidak valid' },
        { status: 400 }
      )
    }

    const berita = await prisma.berita.update({
      where: { id },
      data: {
        judul,
        excerpt,
        konten,
        kategori,
        penulis,
        tanggal: tanggal ? new Date(tanggal) : undefined,
        status,
        image
      }
    })

    return NextResponse.json(berita)
  } catch (error) {
    console.error('Error updating berita:', error)
    return NextResponse.json(
      { error: 'Gagal mengupdate berita' },
      { status: 500 }
    )
  }
}

// DELETE - Hapus berita
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'ID berita tidak valid' },
        { status: 400 }
      )
    }

    await prisma.berita.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Berita berhasil dihapus' })
  } catch (error) {
    console.error('Error deleting berita:', error)
    return NextResponse.json(
      { error: 'Gagal menghapus berita' },
      { status: 500 }
    )
  }
} 