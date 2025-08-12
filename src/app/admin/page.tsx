import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminDashboard from '@/components/AdminDashboard'

export default function AdminPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <AdminDashboard />
      </div>
      <Footer />
    </main>
  )
} 