import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homeschoolmath.site'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/contact',
    '/cookies',
    '/how-to-use',
    '/teaching-tips',
    '/resources',
    '/privacy-policy',
    '/terms-of-service',

    // Addition
    '/addition-practice',
    '/addition-basic-facts-worksheets',
    '/addition-number-lines-worksheets',
    '/addition-shape-counting-worksheets',
    '/addition-two-digit-no-regrouping-worksheets',
    '/addition-two-digit-regrouping-worksheets',
    '/addition-word-problems-worksheets',

    // Subtraction
    '/subtraction-practice',
    '/subtraction-basic-facts-worksheets',
    '/subtraction-shape-counting-worksheets',
    '/subtraction-take-away-worksheets',
    '/subtraction-two-digit-no-borrowing-worksheets',
    '/subtraction-two-digit-borrowing-worksheets',
    '/subtraction-word-problems-worksheets',

    // Multiplication
    '/multiplication-practice',
    '/multiplication-times-tables-worksheets',
    '/multiplication-array-visuals-worksheets',
    '/multiplication-fact-families-worksheets',
    '/multiplication-missing-factors-worksheets',
    '/multiplication-mixed-facts-worksheets',
    '/multiplication-word-problems-worksheets',

    // Division
    '/division-practice',
    '/division-basic-facts-worksheets',
    '/division-equal-sharing-worksheets',
    '/division-fact-families-worksheets',
    '/division-inverse-operations-worksheets',
    '/division-missing-divisors-worksheets',
    '/division-mixed-practice-worksheets',

    // Fractions
    '/fractions-practice',
    '/fraction-basics-worksheets',
    '/fraction-equivalent-worksheets',
    '/fraction-comparing-worksheets',
    '/fraction-addition-subtraction-worksheets',
    '/fraction-multiplication-division-worksheets',
    '/fraction-word-problems-worksheets',

    // Decimals
    '/decimals-practice',
    '/decimal-place-value-worksheets',
    '/decimal-addition-worksheets',
    '/decimal-subtraction-worksheets',
    '/decimals-multiplication-worksheets',
    '/decimals-division-worksheets',
    '/decimal-word-problems-worksheets',

    // Word Problems
    '/word-problems',
    '/word-problems-addition-worksheets',
    '/word-problems-subtraction-worksheets',
    '/word-problems-multiplication-worksheets',
    '/word-problems-division-worksheets',
    '/word-problems-multi-step-worksheets',
    '/word-problems-mixed-operations-worksheets',

    // Measurement & Number Sense
    '/area-perimeter',
    '/place-value',

    // Kindergarten
    '/kindergarten-worksheets',
    '/kindergarten-addition-worksheets',
    '/kindergarten-counting-worksheets',
    '/kindergarten-subtraction-worksheets',

    // Grade 1
    '/grade-1-worksheets',
    '/grade-1-addition-worksheets',
    '/grade-1-subtraction-worksheets',
    '/grade-1-word-problems-worksheets',

    // Grade 2
    '/grade-2-worksheets',
    '/grade-2-addition-worksheets',
    '/grade-2-subtraction-worksheets',
    '/grade-2-word-problems-worksheets',

    // Grade 3
    '/grade-3-worksheets',
    '/grade-3-addition-worksheets',
    '/grade-3-subtraction-worksheets',
    '/grade-3-multiplication-worksheets',
    '/grade-3-division-worksheets',
    '/grade-3-word-problems-worksheets',

    // Grade 4
    '/grade-4-worksheets',
    '/grade-4-multiplication-worksheets',
    '/grade-4-division-worksheets',
    '/grade-4-fractions-worksheets',
    '/grade-4-word-problems-worksheets',

    // Grade 5
    '/grade-5-worksheets',
    '/grade-5-multiplication-worksheets',
    '/grade-5-division-worksheets',
    '/grade-5-fractions-worksheets',
    '/grade-5-decimals-worksheets',
    '/grade-5-word-problems-worksheets',

    // Grade 6
    '/grade-6-worksheets',
    '/grade-6-multiplication-worksheets',
    '/grade-6-division-worksheets',
    '/grade-6-percent-worksheets',
    '/grade-6-word-problems-worksheets',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' || route.includes('practice') || route.includes('worksheets') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/resources' ? 0.9 : route.includes('worksheets') || route.includes('practice') ? 0.8 : 0.7,
  }))
}
