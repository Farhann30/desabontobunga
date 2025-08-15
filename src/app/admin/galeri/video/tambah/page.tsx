import AuthGuard from '@/components/AuthGuard'
import FormTambahVideo from '@/components/FormTambahVideo'

export default function TambahVideoPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8">
        <FormTambahVideo />
      </div>
    </AuthGuard>
  )
} 