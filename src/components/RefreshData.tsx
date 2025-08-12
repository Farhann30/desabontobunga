'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface RefreshDataProps {
  onRefresh?: () => void
}

const RefreshData = ({ onRefresh }: RefreshDataProps) => {
  const router = useRouter()

  useEffect(() => {
    // Refresh data setiap kali komponen mount
    if (onRefresh) {
      onRefresh()
    }
  }, [onRefresh])

  return null
}

export default RefreshData 