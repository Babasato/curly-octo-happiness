// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'HomeschoolMath.site | Free Printable Math Worksheets K-6',
  description: 'Free printable math worksheets for homeschool parents and teachers. Generate custom addition, subtraction, multiplication, division, fraction, and decimal worksheets.',
  keywords: 'math worksheets, homeschool math, printable worksheets, addition practice, subtraction worksheets, multiplication times tables, division facts, fractions, decimals',
  authors: [{ name: 'HomeschoolMath.site' }],
  robots: 'index, follow',
  openGraph: {
    title: 'HomeschoolMath.site | Free Printable Math Worksheets K-6',
    description: 'Free printable math worksheets for homeschool parents and teachers.',
    url: 'https://homeschoolmath.site',
    siteName: 'HomeschoolMath.site',
    type: 'website',
  },
}

const globalSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'HomeschoolMath.site',
  url: 'https://homeschoolmath.site',
  description: 'Free printable math worksheets for homeschool parents and teachers. Generate custom addition, subtraction, multiplication, division, fraction, and decimal worksheets.',
  audience: {
    '@type': 'EducationalAudience',
    'educationalRole': 'student',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4262494597106551" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        <Header />
        <main className="main-content-area">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
