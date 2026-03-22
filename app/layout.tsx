// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://homeschoolmath.site'),
  title: {
    default: 'HomeschoolMath.site - Free Printable Math Worksheets',
    template: '%s | HomeschoolMath.site'
  },
  description: 'Generate unlimited free printable math worksheets for addition, subtraction, multiplication, and division. Perfect for homeschool families and teachers.',
  alternates: {
    canonical: 'https://homeschoolmath.site',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() { try { var theme = localStorage.getItem('theme'); var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true; if (!theme && supportDarkMode) theme = 'dark'; if (!theme) theme = 'light'; document.documentElement.setAttribute('data-theme', theme); } catch (e) {} })();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-20S3GKW7QB"
  strategy="lazyOnload"
/>
<Script
  id="gtag-init"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-20S3GKW7QB');`,
  }}
/>
      </body>
    </html>
  );
}
