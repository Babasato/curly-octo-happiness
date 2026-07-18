// app/search/page.tsx
import type { Metadata } from 'next'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search Math Worksheets & Guides for K-6 | Printable Resources',
  description: 'Search printable math worksheets, trick guides, and teaching resources for grades K-6.',
  alternates: {
    canonical: 'https://homeschoolmath.site/search',
  },
}

export default function SearchPage() {
  return <SearchClient />
}
