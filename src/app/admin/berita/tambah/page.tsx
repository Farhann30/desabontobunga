import AuthGuard from '@/components/AuthGuard'
import FormTambahBerita from '@/components/FormTambahBerita'

export default function TambahBeritaPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8">
        <FormTambahBerita />
      </div>
    </AuthGuard>
  )
} 