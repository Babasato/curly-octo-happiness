// app/layout.tsx - SIMPLE VERSION
// @ts-ignore - Ignore TypeScript error for CSS import
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  // ... your existing metadata
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}