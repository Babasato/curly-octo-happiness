// app/search/SearchClient.tsx
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Page = {
  title: string
  description: string
  href: string
  tags: string[]
  category: 'worksheet' | 'guide' | 'resource'
}

const ALL_PAGES: Page[] = [
  { title: 'Kindergarten Math Worksheets', description: 'Counting, number recognition, and basic shapes for K.', href: '/kindergarten-math-worksheets', tags: ['kindergarten', 'counting', 'numbers', 'k'], category: 'worksheet' },
  { title: 'Grade 1 Math Worksheets', description: 'Addition, subtraction, and place value for Grade 1.', href: '/grade-1-math-worksheets', tags: ['grade 1', 'addition', 'subtraction', 'place value'], category: 'worksheet' },
  { title: 'Grade 2 Math Worksheets', description: 'Two-digit addition, subtraction, and time for Grade 2.', href: '/grade-2-math-worksheets', tags: ['grade 2', 'addition', 'subtraction', 'time'], category: 'worksheet' },
  { title: 'Grade 3 Math Worksheets', description: 'Multiplication, division, and fractions for Grade 3.', href: '/grade-3-math-worksheets', tags: ['grade 3', 'multiplication', 'division', 'fractions'], category: 'worksheet' },
  { title: 'Grade 4 Math Worksheets', description: 'Long division, decimals, and geometry for Grade 4.', href: '/grade-4-math-worksheets', tags: ['grade 4', 'long division', 'decimals', 'geometry'], category: 'worksheet' },
  { title: 'Grade 5 Math Worksheets', description: 'Fractions, decimals, percentages, and word problems for Grade 5.', href: '/grade-5-math-worksheets', tags: ['grade 5', 'fractions', 'decimals', 'percentages'], category: 'worksheet' },
  { title: 'Grade 6 Math Worksheets', description: 'Ratios, expressions, and introductory algebra for Grade 6.', href: '/grade-6-math-worksheets', tags: ['grade 6', 'ratios', 'algebra', 'expressions'], category: 'worksheet' },
  { title: 'Addition Worksheets', description: 'Printable addition practice, single- and multi-digit, with answer keys.', href: '/addition-worksheets', tags: ['addition', 'adding', 'sums'], category: 'worksheet' },
  { title: 'Subtraction Worksheets', description: 'Subtraction practice including borrowing and regrouping.', href: '/subtraction-worksheets', tags: ['subtraction', 'borrowing', 'regrouping', 'minus'], category: 'worksheet' },
  { title: 'Multiplication Worksheets', description: 'Times tables and multi-digit multiplication practice sheets.', href: '/multiplication-worksheets', tags: ['multiplication', 'times tables', 'multiply'], category: 'worksheet' },
  { title: 'Division Worksheets', description: 'Long and short division practice with answer keys.', href: '/division-worksheets', tags: ['division', 'long division', 'divide'], category: 'worksheet' },
  { title: 'Fractions Worksheets', description: 'Identifying, comparing, simplifying, and adding fractions.', href: '/fractions-worksheets', tags: ['fractions', 'numerator', 'denominator', 'simplify'], category: 'worksheet' },
  { title: 'Decimals Worksheets', description: 'Reading, comparing, and adding decimals practice.', href: '/decimals-worksheets', tags: ['decimals', 'decimal point', 'tenths', 'hundredths'], category: 'worksheet' },
  { title: 'Place Value Worksheets', description: 'Ones, tens, hundreds, and thousands place value practice.', href: '/place-value-worksheets', tags: ['place value', 'ones', 'tens', 'hundreds'], category: 'worksheet' },
  { title: 'Word Problems Worksheets', description: 'Multi-step word problems across all operations.', href: '/word-problems-worksheets', tags: ['word problems', 'story problems', 'problem solving'], category: 'worksheet' },
  { title: 'Telling Time Worksheets', description: 'Reading clocks to the hour, half hour, and minute.', href: '/telling-time-worksheets', tags: ['time', 'clock', 'hours', 'minutes'], category: 'worksheet' },
  { title: 'Money Worksheets', description: 'Counting coins and bills, making change.', href: '/money-worksheets', tags: ['money', 'coins', 'dollars', 'change'], category: 'worksheet' },
  { title: 'Geometry Worksheets', description: 'Shapes, angles, area, and perimeter practice.', href: '/geometry-worksheets', tags: ['geometry', 'shapes', 'area', 'perimeter', 'angles'], category: 'worksheet' },
  { title: 'Measurement Worksheets', description: 'Length, weight, and volume measurement practice.', href: '/measurement-worksheets', tags: ['measurement', 'length', 'weight', 'volume', 'ruler'], category: 'worksheet' },
  { title: 'Skip Counting Worksheets', description: 'Skip counting by 2s, 5s, 10s and more.', href: '/skip-counting-worksheets', tags: ['skip counting', 'counting', 'patterns', '2s 5s 10s'], category: 'worksheet' },
  { title: 'Multiplying by 9 Trick', description: 'The finger trick that makes the 9 times table effortless.', href: '/multiplying-by-9-trick', tags: ['multiplication', '9 times table', 'trick', 'fingers', 'mental math'], category: 'guide' },
  { title: 'How to Tell Time', description: 'Step-by-step guide to reading analog and digital clocks.', href: '/how-to-tell-time', tags: ['time', 'clock', 'analog', 'hours', 'minutes'], category: 'guide' },
  { title: 'How to Read Decimals', description: 'Simple method for reading and understanding decimal numbers.', href: '/how-to-read-decimals', tags: ['decimals', 'tenths', 'hundredths', 'decimal point'], category: 'guide' },
  { title: 'Borrowing in Subtraction', description: 'How to regroup when subtracting larger digits from smaller ones.', href: '/borrowing-in-subtraction', tags: ['subtraction', 'borrowing', 'regrouping', 'carrying'], category: 'guide' },
  { title: 'Long Division Steps for Kids', description: 'Divide, multiply, subtract, bring down — explained clearly.', href: '/long-division-steps-for-kids', tags: ['long division', 'division', 'steps', 'kids'], category: 'guide' },
  { title: 'Place Value Explained', description: 'What each digit position means and why it matters.', href: '/place-value-explained', tags: ['place value', 'ones', 'tens', 'hundreds', 'thousands'], category: 'guide' },
  { title: 'Regrouping in Addition Explained', description: 'Carrying in addition — what is happening and why.', href: '/regrouping-in-addition-explained', tags: ['addition', 'regrouping', 'carrying', 'column addition'], category: 'guide' },
  { title: 'What Is a Numerator', description: 'Understanding the top number in a fraction.', href: '/what-is-a-numerator', tags: ['fractions', 'numerator', 'denominator', 'top number'], category: 'guide' },
  { title: 'Skip Counting Explained', description: 'Why skip counting matters and how to build the skill fast.', href: '/skip-counting-explained', tags: ['skip counting', 'patterns', 'multiplication', 'counting'], category: 'guide' },
  { title: 'How to Simplify Fractions', description: 'Finding the GCF and reducing fractions to lowest terms.', href: '/how-to-simplify-fractions', tags: ['fractions', 'simplify', 'reduce', 'GCF', 'lowest terms'], category: 'guide' },
  { title: 'Math Tricks & Guides Hub', description: 'All math trick guides in one place — perfect for parents and kids.', href: '/math-tricks', tags: ['guides', 'tricks', 'mental math', 'hub'], category: 'resource' },
  { title: 'Resources & Support', description: 'Homeschool planners, Notion templates, and curriculum tools.', href: '/resources', tags: ['resources', 'planner', 'curriculum', 'support', 'notion'], category: 'resource' },
  { title: 'About HomeschoolMath', description: 'Why we built free printable math worksheets for homeschool families.', href: '/about', tags: ['about', 'homeschool', 'mission'], category: 'resource' },
]

const CATEGORY_LABELS: Record<Page['category'], string> = {
  worksheet: 'Worksheet',
  guide: 'Guide',
  resource: 'Resource',
}

const CATEGORY_COLORS: Record<Page['category'], string> = {
  worksheet: 'badge-worksheet',
  guide: 'badge-guide',
  resource: 'badge-resource',
}

export default function SearchClient() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Page['category'] | 'all'>('all')

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    return ALL_PAGES.filter((page) => {
      const matchesCategory = activeCategory === 'all' || page.category === activeCategory
      if (!matchesCategory) return false
      if (!q) return true
      return (
        page.title.toLowerCase().includes(q) ||
        page.description.toLowerCase().includes(q) ||
        page.tags.some((t) => t.includes(q))
      )
    })
  }, [query, activeCategory])

  return (
    <main className="search-page">
      <div className="search-hero">
        <h1>Search</h1>
        <p className="search-subtitle">Find worksheets, guides, and resources across 100+ pages.</p>
        <div className="search-input-wrap">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="search-input"
            placeholder='Try "fractions", "grade 3", "long division"…'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            aria-label="Search worksheets and guides"
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>

        <div className="search-filters" role="group" aria-label="Filter by type">
          {(['all', 'worksheet', 'guide', 'resource'] as const).map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'All' : CATEGORY_LABELS[cat] + 's'}
            </button>
          ))}
        </div>
      </div>

      <div className="search-results-area">
        <p className="results-count">
          {query || activeCategory !== 'all'
            ? `${results.length} result${results.length !== 1 ? 's' : ''}${query ? ` for "${query}"` : ''}`
            : `Showing all ${results.length} pages`}
        </p>

        {results.length === 0 ? (
          <div className="no-results">
            <p>No results found for &ldquo;{query}&rdquo;.</p>
            <p className="no-results-hint">Try a different word — for example, &ldquo;multiply&rdquo; instead of &ldquo;times tables&rdquo;.</p>
          </div>
        ) : (
          <ul className="results-list">
            {results.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="result-link">
                  <div className="result-header">
                    <span className="result-title">{page.title}</span>
                    <span className={`result-badge ${CATEGORY_COLORS[page.category]}`}>
                      {CATEGORY_LABELS[page.category]}
                    </span>
                  </div>
                  <p className="result-desc">{page.description}</p>
                  <span className="result-url">homeschoolmath.site{page.href}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}