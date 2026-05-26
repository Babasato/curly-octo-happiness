import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homeschool Math Resources | Courses, Planners & Teaching Tools',
  description: 'Discover structured math courses and professional planning tools for homeschooling parents. Number Sense Foundations, Multiplication & Division Foundations, and more.',
  alternates: {
    canonical: 'https://homeschoolmath.site/resources',
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}