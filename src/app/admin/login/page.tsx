'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, Lock, User } from 'lucide-react'
import toast from 'react-hot-toast'

interface AdminUser {
  username: string
  password: string
  name: string
  email: string
}

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Cek apakah sudah ada admin yang terdaftar
  useEffect(() => {
    const adminUsers = localStorage.getItem('adminUsers')
    if (!adminUsers) {
      // Jika belum ada admin, buat admin default
      const defaultAdmin = [{
        username: 'admin',
        password: 'admin123',
        name: 'Administrator',
        email: 'admin@bontobunga.com'
      }]
      localStorage.setItem('adminUsers', JSON.stringify(defaultAdmin))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulasi delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Ambil data admin dari localStorage
    const adminUsers = localStorage.getItem('adminUsers')
    if (adminUsers) {
      const users: AdminUser[] = JSON.parse(adminUsers)
      const user = users.find(u => u.username === formData.username && u.password === formData.password)
      
      if (user) {
        localStorage.setItem('adminLoggedIn', 'true')
        localStorage.setItem('adminUsername', user.username)
        localStorage.setItem('adminName', user.name)
        
        toast.success('Login berhasil!')
        router.push('/admin')
      } else {
        toast.error('Username atau password salah!')
      }
    } else {
      toast.error('Belum ada akun admin yang terdaftar!')
    }

    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 relative">
            <Image
              src="/images/logo.png"
              alt="Logo Desa Bontobunga"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login Admin
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Masuk ke panel admin Desa Bontobunga
        </p>
      </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                      <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleInputChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Masukkan username"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Masukkan password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Memproses...' : 'Masuk'}
                </button>
              </div>
            </form>



          <div className="mt-6 text-center">
            <Link href="/" className="text-primary-600 hover:text-primary-500 text-sm">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 