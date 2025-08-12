// API utility functions

export interface Berita {
  id: number
  judul: string
  excerpt: string
  konten: string
  kategori: string
  penulis: string
  tanggal: string
  status: string
  image?: string
  createdAt: string
  updatedAt: string
}

// Ambil semua berita
export async function getBerita(): Promise<Berita[]> {
  try {
    const response = await fetch('/api/berita', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Gagal mengambil data berita')
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching berita:', error)
    return []
  }
}

// Ambil berita berdasarkan ID
export async function getBeritaById(id: string): Promise<Berita | null> {
  try {
    const response = await fetch(`/api/berita/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error('Gagal mengambil data berita')
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching berita:', error)
    return null
  }
}

// Tambah berita baru
export async function createBerita(data: Omit<Berita, 'id' | 'createdAt' | 'updatedAt'>): Promise<Berita | null> {
  try {
    const response = await fetch('/api/berita', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Gagal menambahkan berita')
    }

    return response.json()
  } catch (error) {
    console.error('Error creating berita:', error)
    throw error
  }
}

// Update berita
export async function updateBerita(id: number, data: Partial<Berita>): Promise<Berita | null> {
  try {
    const response = await fetch(`/api/berita/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Gagal mengupdate berita')
    }

    return response.json()
  } catch (error) {
    console.error('Error updating berita:', error)
    throw error
  }
}

// Hapus berita
export async function deleteBerita(id: number): Promise<boolean> {
  try {
    const response = await fetch(`/api/berita/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Gagal menghapus berita')
    }

    return true
  } catch (error) {
    console.error('Error deleting berita:', error)
    throw error
  }
} 