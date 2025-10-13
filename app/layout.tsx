// app/layout.tsx - FINAL WORKING VERSION
// @ts-ignore - Ignore TypeScript error for CSS import
import './globals.css';

export const metadata = {
  title: 'Math Worksheet Generator',
  description: 'Create beautiful math worksheets instantly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}