// Local Storage utility untuk development (tanpa database)

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

export interface GaleriFoto {
  id: number
  title: string
  description: string
  image: string
  category: string
  createdAt: string
  updatedAt: string
}

export interface GaleriVideo {
  id: number
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  duration: string
  createdAt: string
  updatedAt: string
}

const BERITA_STORAGE_KEY = 'bontobunga_berita'
const GALERI_FOTO_STORAGE_KEY = 'bontobunga_galeri_foto'
const GALERI_VIDEO_STORAGE_KEY = 'bontobunga_galeri_video'

// ===== BERITA FUNCTIONS =====

// Ambil semua berita dari localStorage
export function getBeritaFromStorage(): Berita[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(BERITA_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return []
  }
}

// Simpan berita ke localStorage
export function saveBeritaToStorage(berita: Berita[]): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(BERITA_STORAGE_KEY, JSON.stringify(berita))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

// Tambah berita baru
export function addBerita(beritaData: Omit<Berita, 'id' | 'createdAt' | 'updatedAt'>): Berita {
  const beritaList = getBeritaFromStorage()
  const newId = beritaList.length > 0 ? Math.max(...beritaList.map(b => b.id)) + 1 : 1
  const now = new Date().toISOString()

  const newBerita: Berita = {
    ...beritaData,
    id: newId,
    createdAt: now,
    updatedAt: now
  }

  beritaList.unshift(newBerita) // Tambah di awal array
  saveBeritaToStorage(beritaList)

  return newBerita
}

// Update berita
export function updateBerita(id: number, beritaData: Partial<Berita>): Berita | null {
  const beritaList = getBeritaFromStorage()
  const index = beritaList.findIndex(b => b.id === id)

  if (index === -1) return null

  beritaList[index] = {
    ...beritaList[index],
    ...beritaData,
    updatedAt: new Date().toISOString()
  }

  saveBeritaToStorage(beritaList)
  return beritaList[index]
}

// Hapus berita
export function deleteBerita(id: number): boolean {
  const beritaList = getBeritaFromStorage()
  const filtered = beritaList.filter(b => b.id !== id)

  if (filtered.length === beritaList.length) return false

  saveBeritaToStorage(filtered)
  return true
}

// Ambil berita berdasarkan ID
export function getBeritaById(id: number): Berita | null {
  const beritaList = getBeritaFromStorage()
  return beritaList.find(b => b.id === id) || null
}

// Filter berita berdasarkan status
export function getPublishedBerita(): Berita[] {
  const beritaList = getBeritaFromStorage()
  return beritaList.filter(b => b.status === 'published')
}

// ===== GALERI FOTO FUNCTIONS =====

// Ambil semua galeri foto dari localStorage
export function getGaleriFotoFromStorage(): GaleriFoto[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(GALERI_FOTO_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading galeri foto from localStorage:', error)
    return []
  }
}

// Simpan galeri foto ke localStorage
export function saveGaleriFotoToStorage(galeriFoto: GaleriFoto[]): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(GALERI_FOTO_STORAGE_KEY, JSON.stringify(galeriFoto))
  } catch (error) {
    console.error('Error saving galeri foto to localStorage:', error)
  }
}

// Tambah galeri foto baru
export function addGaleriFoto(fotoData: Omit<GaleriFoto, 'id' | 'createdAt' | 'updatedAt'>): GaleriFoto {
  const fotoList = getGaleriFotoFromStorage()
  const newId = fotoList.length > 0 ? Math.max(...fotoList.map(f => f.id)) + 1 : 1
  const now = new Date().toISOString()

  const newFoto: GaleriFoto = {
    ...fotoData,
    id: newId,
    createdAt: now,
    updatedAt: now
  }

  fotoList.unshift(newFoto) // Tambah di awal array
  saveGaleriFotoToStorage(fotoList)

  return newFoto
}

// Update galeri foto
export function updateGaleriFoto(id: number, fotoData: Partial<GaleriFoto>): GaleriFoto | null {
  const fotoList = getGaleriFotoFromStorage()
  const index = fotoList.findIndex(f => f.id === id)

  if (index === -1) return null

  fotoList[index] = {
    ...fotoList[index],
    ...fotoData,
    updatedAt: new Date().toISOString()
  }

  saveGaleriFotoToStorage(fotoList)
  return fotoList[index]
}

// Hapus galeri foto
export function deleteGaleriFoto(id: number): boolean {
  const fotoList = getGaleriFotoFromStorage()
  const filtered = fotoList.filter(f => f.id !== id)

  if (filtered.length === fotoList.length) return false

  saveGaleriFotoToStorage(filtered)
  return true
}

// Ambil galeri foto berdasarkan ID
export function getGaleriFotoById(id: number): GaleriFoto | null {
  const fotoList = getGaleriFotoFromStorage()
  return fotoList.find(f => f.id === id) || null
}

// ===== GALERI VIDEO FUNCTIONS =====

// Ambil semua galeri video dari localStorage
export function getGaleriVideoFromStorage(): GaleriVideo[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(GALERI_VIDEO_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading galeri video from localStorage:', error)
    return []
  }
}

// Simpan galeri video ke localStorage
export function saveGaleriVideoToStorage(galeriVideo: GaleriVideo[]): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(GALERI_VIDEO_STORAGE_KEY, JSON.stringify(galeriVideo))
  } catch (error) {
    console.error('Error saving galeri video to localStorage:', error)
  }
}

// Tambah galeri video baru
export function addGaleriVideo(videoData: Omit<GaleriVideo, 'id' | 'createdAt' | 'updatedAt'>): GaleriVideo {
  const videoList = getGaleriVideoFromStorage()
  const newId = videoList.length > 0 ? Math.max(...videoList.map(v => v.id)) + 1 : 1
  const now = new Date().toISOString()

  const newVideo: GaleriVideo = {
    ...videoData,
    id: newId,
    createdAt: now,
    updatedAt: now
  }

  videoList.unshift(newVideo) // Tambah di awal array
  saveGaleriVideoToStorage(videoList)

  return newVideo
}

// Update galeri video
export function updateGaleriVideo(id: number, videoData: Partial<GaleriVideo>): GaleriVideo | null {
  const videoList = getGaleriVideoFromStorage()
  const index = videoList.findIndex(v => v.id === id)

  if (index === -1) return null

  videoList[index] = {
    ...videoList[index],
    ...videoData,
    updatedAt: new Date().toISOString()
  }

  saveGaleriVideoToStorage(videoList)
  return videoList[index]
}

// Hapus galeri video
export function deleteGaleriVideo(id: number): boolean {
  const videoList = getGaleriVideoFromStorage()
  const filtered = videoList.filter(v => v.id !== id)

  if (filtered.length === videoList.length) return false

  saveGaleriVideoToStorage(filtered)
  return true
}

// Ambil galeri video berdasarkan ID
export function getGaleriVideoById(id: number): GaleriVideo | null {
  const videoList = getGaleriVideoFromStorage()
  return videoList.find(v => v.id === id) || null
} 