import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Math Resources for Homeschool | Courses, Planners & Teaching Tools',
  description: 'Discover structured math courses and planning tools for homeschool parents, including Number Sense Foundations and Multiplication & Division Foundations.',
  alternates: {
    canonical: 'https://homeschoolmath.site/resources',
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
