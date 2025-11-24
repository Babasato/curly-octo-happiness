// app/layout.tsx - FINAL FIXED VERSION
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">  {/* Remove suppressHydrationWarning */}
      <head>
        <link rel="canonical" href="https://homeschoolmath.site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>  {/* Remove suppressHydrationWarning */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
