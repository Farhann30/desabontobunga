'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Cek status login dari localStorage
    const adminLoggedIn = localStorage.getItem('adminLoggedIn')
    
    if (adminLoggedIn === 'true') {
      setIsAuthenticated(true)
    } else {
      // Redirect ke halaman login jika belum login
      router.push('/admin/login')
    }
    
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-600" />
          <p className="text-gray-600">Memverifikasi...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Akan redirect ke login
  }

  return <>{children}</>
}

export default AuthGuard 