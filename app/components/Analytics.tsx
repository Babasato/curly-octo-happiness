// app/components/Analytics.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// 👇 THIS FIXES THE ERROR
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() || '')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-20S3GKW7QB', {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}