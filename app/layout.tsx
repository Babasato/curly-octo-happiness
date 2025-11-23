// app/layout.tsx - UPDATED WITH DARK MODE
// @ts-ignore - Ignore TypeScript error for CSS import
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: 'Math Worksheet Generator - Create Custom Math Worksheets for Homeschool',
  description: 'Generate custom math worksheets for grades K-6. Addition, subtraction, multiplication, division worksheets with answer keys. Free PDF downloads instantly.',
  keywords: 'math worksheets, homeschool math, printable worksheets, addition, subtraction, multiplication, division, word problems, kindergarten, elementary math',
  authors: [{ name: 'Homeschool Math Worksheets' }],
  openGraph: {
    title: 'Math Worksheet Generator - Create Custom Math Worksheets',
    description: 'Generate custom math worksheets for homeschool. Free PDF downloads for grades K-6.',
    url: 'https://homeschoolmath.site',
    siteName: 'Homeschool Math Worksheets',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Math Worksheet Generator - Create Custom Math Worksheets',
    description: 'Generate custom math worksheets for homeschool',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://homeschoolmath.site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
