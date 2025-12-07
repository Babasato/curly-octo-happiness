// app/layout.tsx - FIXED VERSION
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="canonical" href="https://homeschoolmath.site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
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
