// app/search/page.tsx
import type { Metadata } from 'next'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search Worksheets & Math Guides | HomeschoolMath',
  description: 'Search printable math worksheets, trick guides, and resources for grades K–6.',
  alternates: {
    canonical: 'https://homeschoolmath.site/search',
  },
}

export default function SearchPage() {
  return <SearchClient />
}