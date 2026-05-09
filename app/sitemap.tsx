// app/sitemap.tsx
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homeschoolmath.site'
  
  const allPages = [
    // Core pages (priority 1.0)
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 1.0 },
    { path: '/contact', priority: 1.0 },
    { path: '/resources', priority: 1.0 },
    { path: '/how-to-use', priority: 1.0 },
    { path: '/teaching-tips', priority: 1.0 },
    { path: '/privacy-policy', priority: 1.0 },
    { path: '/terms-of-service', priority: 1.0 },
    { path: '/cookies', priority: 1.0 },
    
    // Math trick pages (priority 0.95)
    { path: '/multiplying-by-9-trick', priority: 0.95 },
    { path: '/borrowing-in-subtraction', priority: 0.95 },
    { path: '/place-value-explained', priority: 0.95 },
    { path: '/regrouping-in-addition-explained', priority: 0.95 },
    { path: '/long-division-steps-for-kids', priority: 0.95 },
    { path: '/what-is-a-numerator', priority: 0.95 },
    { path: '/skip-counting-explained', priority: 0.95 },
    { path: '/how-to-simplify-fractions', priority: 0.95 },
    { path: '/how-to-read-decimals', priority: 0.95 },
    { path: '/how-to-tell-time', priority: 0.95 },
    { path: '/math-tricks', priority: 0.95 },
    // NEW Math trick pages (priority 0.95)
    { path: '/multiplying-by-11-trick', priority: 0.95 },
    { path: '/long-division-with-remainders', priority: 0.95 },
    { path: '/what-is-a-denominator', priority: 0.95 },
    { path: '/how-to-multiply-fractions', priority: 0.95 },
    { path: '/how-to-divide-fractions', priority: 0.95 },
    // Free guides pages (priority 0.9)
    { path: '/free-guides', priority: 0.9 },
    { path: '/free-grade-4-guide', priority: 0.9 },
    { path: '/free-multiplication-guide', priority: 0.9 },
    { path: '/free-fractions-guide', priority: 0.9 },
    { path: '/free-word-problems-guide', priority: 0.9 },
    
    // Operation practice hubs (priority 0.9)
    { path: '/addition-practice', priority: 0.9 },
    { path: '/subtraction-practice', priority: 0.9 },
    { path: '/multiplication-practice', priority: 0.9 },
    { path: '/division-practice', priority: 0.9 },
    { path: '/fractions-practice', priority: 0.9 },
    { path: '/decimals-practice', priority: 0.9 },
    { path: '/word-problems', priority: 0.9 },
    { path: '/place-value', priority: 0.9 },
    { path: '/area-perimeter', priority: 0.9 },
    
    // Grade level hubs (priority 0.85)
    { path: '/kindergarten-worksheets', priority: 0.85 },
    { path: '/grade-1-worksheets', priority: 0.85 },
    { path: '/grade-2-worksheets', priority: 0.85 },
    { path: '/grade-3-worksheets', priority: 0.85 },
    { path: '/grade-4-worksheets', priority: 0.85 },
    { path: '/grade-5-worksheets', priority: 0.85 },
    { path: '/grade-6-worksheets', priority: 0.85 },
    
    // Addition child pages (priority 0.7)
    { path: '/addition-basic-facts-worksheets', priority: 0.7 },
    { path: '/addition-number-lines-worksheets', priority: 0.7 },
    { path: '/addition-shape-counting-worksheets', priority: 0.7 },
    { path: '/addition-two-digit-no-regrouping-worksheets', priority: 0.7 },
    { path: '/addition-two-digit-regrouping-worksheets', priority: 0.7 },
    { path: '/addition-word-problems-worksheets', priority: 0.7 },
    
    // Subtraction child pages (priority 0.7)
    { path: '/subtraction-basic-facts-worksheets', priority: 0.7 },
    { path: '/subtraction-shape-counting-worksheets', priority: 0.7 },
    { path: '/subtraction-take-away-worksheets', priority: 0.7 },
    { path: '/subtraction-two-digit-no-borrowing-worksheets', priority: 0.7 },
    { path: '/subtraction-two-digit-borrowing-worksheets', priority: 0.7 },
    { path: '/subtraction-word-problems-worksheets', priority: 0.7 },
    
    // Multiplication child pages (priority 0.7)
    { path: '/multiplication-array-visuals-worksheets', priority: 0.7 },
    { path: '/multiplication-fact-families-worksheets', priority: 0.7 },
    { path: '/multiplication-missing-factors-worksheets', priority: 0.7 },
    { path: '/multiplication-mixed-facts-worksheets', priority: 0.7 },
    { path: '/multiplication-times-tables-worksheets', priority: 0.7 },
    { path: '/multiplication-word-problems-worksheets', priority: 0.7 },
    
    // Division child pages (priority 0.7)
    { path: '/division-basic-facts-worksheets', priority: 0.7 },
    { path: '/division-equal-sharing-worksheets', priority: 0.7 },
    { path: '/division-fact-families-worksheets', priority: 0.7 },
    { path: '/division-inverse-operations-worksheets', priority: 0.7 },
    { path: '/division-missing-divisors-worksheets', priority: 0.7 },
    { path: '/division-mixed-practice-worksheets', priority: 0.7 },
    
    // Fractions child pages (priority 0.7)
    { path: '/fraction-basics-worksheets', priority: 0.7 },
    { path: '/fraction-equivalent-worksheets', priority: 0.7 },
    { path: '/fraction-comparing-worksheets', priority: 0.7 },
    { path: '/fraction-addition-subtraction-worksheets', priority: 0.7 },
    { path: '/fraction-multiplication-division-worksheets', priority: 0.7 },
    { path: '/fraction-word-problems-worksheets', priority: 0.7 },
    
    // Decimals child pages (priority 0.7)
    { path: '/decimal-addition-worksheets', priority: 0.7 },
    { path: '/decimal-subtraction-worksheets', priority: 0.7 },
    { path: '/decimal-place-value-worksheets', priority: 0.7 },
    { path: '/decimal-word-problems-worksheets', priority: 0.7 },
    { path: '/decimals-multiplication-worksheets', priority: 0.7 },
    { path: '/decimals-division-worksheets', priority: 0.7 },
    
    // Word problems child pages (priority 0.7)
    { path: '/word-problems-addition-worksheets', priority: 0.7 },
    { path: '/word-problems-subtraction-worksheets', priority: 0.7 },
    { path: '/word-problems-multiplication-worksheets', priority: 0.7 },
    { path: '/word-problems-division-worksheets', priority: 0.7 },
    { path: '/word-problems-multi-step-worksheets', priority: 0.7 },
    { path: '/word-problems-mixed-operations-worksheets', priority: 0.7 },
    
    // Grade level operation pages (priority 0.6)
    { path: '/kindergarten-addition-worksheets', priority: 0.6 },
    { path: '/kindergarten-counting-worksheets', priority: 0.6 },
    { path: '/kindergarten-subtraction-worksheets', priority: 0.6 },
    { path: '/grade-1-addition-worksheets', priority: 0.6 },
    { path: '/grade-1-subtraction-worksheets', priority: 0.6 },
    { path: '/grade-1-word-problems-worksheets', priority: 0.6 },
    { path: '/grade-2-addition-worksheets', priority: 0.6 },
    { path: '/grade-2-subtraction-worksheets', priority: 0.6 },
    { path: '/grade-2-word-problems-worksheets', priority: 0.6 },
    { path: '/grade-3-addition-worksheets', priority: 0.6 },
    { path: '/grade-3-division-worksheets', priority: 0.6 },
    { path: '/grade-3-multiplication-worksheets', priority: 0.6 },
    { path: '/grade-3-subtraction-worksheets', priority: 0.6 },
    { path: '/grade-3-word-problems-worksheets', priority: 0.6 },
    { path: '/grade-4-division-worksheets', priority: 0.6 },
    { path: '/grade-4-fractions-worksheets', priority: 0.6 },
    { path: '/grade-4-multiplication-worksheets', priority: 0.6 },
    { path: '/grade-4-word-problems-worksheets', priority: 0.6 },
    { path: '/grade-5-decimals-worksheets', priority: 0.6 },
    { path: '/grade-5-division-worksheets', priority: 0.6 },
    { path: '/grade-5-fractions-worksheets', priority: 0.6 },
    { path: '/grade-5-multiplication-worksheets', priority: 0.6 },
    { path: '/grade-5-word-problems-worksheets', priority: 0.6 },
    { path: '/grade-6-division-worksheets', priority: 0.6 },
    { path: '/grade-6-multiplication-worksheets', priority: 0.6 },
    { path: '/grade-6-percent-worksheets', priority: 0.6 },
    { path: '/grade-6-word-problems-worksheets', priority: 0.6 },
  ]
  
  return allPages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }))
}
