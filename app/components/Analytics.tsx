// app/components/Analytics.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react' //

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Separate the logic that triggers the error
function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-20S3GKW7QB', {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Wrap the inner component in Suspense
export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  )
}