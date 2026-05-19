// app/contact/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | HomeschoolMath.site',
  description: 'Get in touch with the HomeschoolMath.site team. We are happy to help with questions about worksheets, courses, or anything else.',
  alternates: {
    canonical: 'https://homeschoolmath.site/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}