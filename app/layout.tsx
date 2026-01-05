// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://homeschoolmath.site'),
  title: {
    default: 'Homeschool Math - Free Worksheets & Resources',
    template: '%s | Homeschool Math'
  },
  description: 'Free printable math worksheets, practice sheets, and educational resources for homeschool families and teachers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Canonical tag is automatically added by Next.js using metadataBase */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Anti-Flash Theme Script: Sets theme BEFORE page paints */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-20S3GKW7QB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-20S3GKW7QB');
            `,
          }}
        ></script>
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4262494597106551"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
