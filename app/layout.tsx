// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'
import Analytics from './components/Analytics'

export const metadata: Metadata = {
  title: 'HomeschoolMath.site | Free Printable Math Worksheets K-6',
  description:
    'Free printable math worksheets for homeschool parents and teachers. Generate custom addition, subtraction, multiplication, division, fraction, and decimal worksheets.',
}

const globalSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'HomeschoolMath.site',
  url: 'https://homeschoolmath.site',
  description:
    'Free printable math worksheets for homeschool parents and teachers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* AdSense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-4262494597106551"
        />

        {/* GA4 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-20S3GKW7QB"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-20S3GKW7QB', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalSchema),
          }}
        />
      </head>

      <body>
        {/* THIS enables page tracking */}
        <Analytics />

        <Header />
        <main className="main-content-area">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
