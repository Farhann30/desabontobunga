import AuthGuard from '@/components/AuthGuard'
import FormTambahFoto from '@/components/FormTambahFoto'

export default function TambahFotoPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8">
        <FormTambahFoto />
      </div>
    </AuthGuard>
  )
} 