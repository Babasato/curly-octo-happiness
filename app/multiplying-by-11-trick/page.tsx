// app/multiplying-by-11-trick/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplying by 11 Trick (Fast & Visual Method) | HomeschoolMath.site',
  description: 'Learn the fast trick for multiplying any number by 11. Step-by-step visual guide for kids and parents. Works for single and double digits — because 11 is just 1 + 10.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplying-by-11-trick',
  },
}

export default function MultiplyingBy11Trick() {
  const getCardStyle = (index: number) => {
    const colorIndex = index % 3
    const isBlue = colorIndex === 0
    const isLight = colorIndex === 1
    const isGreen = colorIndex === 2
    const bgColor = isBlue ? 'var(--primary)' : (isGreen ? 'var(--secondary)' : 'var(--surface)')
    const textColor = (isBlue || isGreen) ? 'white' : 'var(--text-primary)'
    const borderStyle = (isBlue || isGreen) ? 'none' : '1px solid var(--border)'
    const stepColor = (isBlue || isGreen) ? 'white' : 'var(--primary)'
    const detailColor = isLight ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)'
    return { bgColor, textColor, borderStyle, stepColor, detailColor }
  }

  const singleDigitSteps = [
    {
      step: '11 × 6 = ?',
      instruction: 'Start with the problem',
      detail: 'We need to find 11 × 6. Single digit numbers have a beautifully simple pattern.',
      visual: '11 × 6',
    },
    {
      step: 'The Pattern',
      instruction: 'Just repeat the digit — twice',
      detail: '11 × 6 = 66. The digit simply appears in both the tens and ones place.',
      visual: '6 → 66',
    },
    {
      step: 'Why it works',
      instruction: '11 = 10 + 1',
      detail: '11 × 6 = (10 × 6) + (1 × 6) = 60 + 6 = 66. The digit appears in both columns.',
      visual: '60 + 6 = 66',
    },
    {
      step: '11 × 6 = 66 ✓',
      instruction: 'Done instantly',
      detail: 'Works for 11 × 2 through 11 × 9 — always just double the digit.',
      visual: '✅',
    },
  ]

  const doubleDigitSteps = [
    {
      step: '11 × 25 = ?',
      instruction: 'Double digits need one extra step',
      detail: 'Split the number: take the first digit (2) and last digit (5) and put the sum in the middle.',
      visual: '2 _ 5',
    },
    {
      step: 'Step 1: Split the number',
      instruction: 'Write the first and last digit',
      detail: 'For 25: write 2 on the left and 5 on the right, leaving a gap in the middle.',
      visual: '2 __ 5',
    },
    {
      step: 'Step 2: Add the two digits',
      instruction: '2 + 5 = 7',
      detail: 'Add the first and last digit together. Place the sum in the middle.',
      visual: '2 + 5 = 7 → 275',
    },
    {
      step: '11 × 25 = 275 ✓',
      instruction: 'That\'s the answer',
      detail: 'If the middle sum is 10 or more, carry 1 to the left digit. Example: 11 × 85 → 8+5=13 → 935.',
      visual: '✅',
    },
  ]

  const singleExamples = [
    { problem: '11 × 2', answer: '22', pattern: 'repeat the 2' },
    { problem: '11 × 4', answer: '44', pattern: 'repeat the 4' },
    { problem: '11 × 7', answer: '77', pattern: 'repeat the 7' },
    { problem: '11 × 9', answer: '99', pattern: 'repeat the 9' },
  ]

  const doubleExamples = [
    { problem: '11 × 13', middle: '1+3=4', answer: '143' },
    { problem: '11 × 32', middle: '3+2=5', answer: '352' },
    { problem: '11 × 54', middle: '5+4=9', answer: '594' },
    { problem: '11 × 47', middle: '4+7=11 → carry 1', answer: '517' },
    { problem: '11 × 85', middle: '8+5=13 → carry 1', answer: '935' },
    { problem: '11 × 63', middle: '6+3=9', answer: '693' },
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast method that works every time' },
    { name: 'Long Division Steps', href: '/long-division-steps-for-kids', desc: 'Step-by-step visual guide' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'The foundation of multiplication' },
    { name: 'Multiplication & Division Worksheets', href: '/multiplication-practice', desc: 'Practice what you learned' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">Math Tricks — Visual Guide</div>
          <h1 className="practice-title">Multiplying by 11 Trick</h1>
          <p className="practice-subtitle practice-subtitle-blue">Fast & Visual Method</p>
          <p className="practice-description">
            The 11 times table looks intimidating — until you see the pattern. Single digits repeat themselves.
            Double digits use a simple middle-digit trick. Once you see it, you can't unsee it.
          </p>
          <div className="practice-cta-container">
            <Link href="/multiplication-practice" className="practice-button practice-button-blue" aria-label="Practice multiplication worksheets">
              Practice Multiplication Worksheets
            </Link>
          </div>
        </section>

        {/* Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Two Rules:</h3>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
            Single digit × 11 → repeat the digit (6 × 11 = 66)
          </p>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary)', marginBottom: 0 }}>
            Double digit × 11 → split it, put the sum in the middle (25 × 11 = 275)
          </p>
        </div>

        {/* Single Digit Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">Part 1 — Single Digits</h2>
          <p className="practice-section-subtitle">The simplest times table pattern in all of math</p>
          <div className="practice-grid">
            {singleDigitSteps.map((item, index) => {
              const { bgColor, textColor, borderStyle, stepColor, detailColor } = getCardStyle(index)
              return (
                <div key={index} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem', background: bgColor, color: textColor, border: borderStyle }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: stepColor }}>{item.step}</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem', color: textColor }}>{item.instruction}</div>
                  <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>{item.visual}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: detailColor }}>{item.detail}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Single digit examples */}
        <section className="practice-section">
          <h2 className="practice-section-title">Single Digit Examples</h2>
          <p className="practice-section-subtitle">Just repeat the digit — works every time for 1–9</p>
          <div className="practice-grid">
            {singleExamples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{ex.problem}</div>
                <div className="text-p" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{ex.pattern}</div>
                <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1.3rem', fontWeight: '800' }}>= {ex.answer} ✓</div>
              </div>
            ))}
          </div>
        </section>

        {/* Double Digit Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">Part 2 — Double Digits</h2>
          <p className="practice-section-subtitle">Split, add, insert — three moves and you're done</p>
          <div className="practice-grid">
            {doubleDigitSteps.map((item, index) => {
              const { bgColor, textColor, borderStyle, stepColor, detailColor } = getCardStyle(index)
              return (
                <div key={index} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem', background: bgColor, color: textColor, border: borderStyle }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: stepColor }}>{item.step}</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem', color: textColor }}>{item.instruction}</div>
                  <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>{item.visual}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: detailColor }}>{item.detail}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Double digit examples */}
        <section className="practice-section">
          <h2 className="practice-section-title">Double Digit Examples</h2>
          <p className="practice-section-subtitle">Note how carrying works when the middle sum is 10 or more</p>
          <div className="practice-grid">
            {doubleExamples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{ex.problem}</div>
                <div className="text-p" style={{ color: 'var(--primary)', fontSize: '0.85rem', fontFamily: 'monospace', marginBottom: '0.5rem' }}>{ex.middle}</div>
                <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1.3rem', fontWeight: '800' }}>= {ex.answer} ✓</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why it works */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why This Works</h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              11 = 10 + 1. So multiplying by 11 means adding one copy of the number to ten copies of it.
              That's why the digits "spread out" — one copy lands in the ones place, one in the tens place.
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: '2' }}>
              <div>11 × 25 = (10 + 1) × 25</div>
              <div>= (10 × 25) + (1 × 25)</div>
              <div>= 250 + 25</div>
              <div style={{ color: 'var(--primary)', fontWeight: '700' }}>= 275 ✓</div>
            </div>
          </div>
        </section>

        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Once the trick makes sense, practice with our <Link href="/multiplication-practice" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>multiplication worksheets</Link> to build full fluency.
        </p>

        {/* Course Card */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Multiplication & Division Foundations</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>GRADES 3–5</p>
              </div>
              <span className="practice-badge practice-badge-blue" style={{ fontSize: '1rem', padding: '6px 12px', whiteSpace: 'nowrap' }}>$57</span>
            </div>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Tricks are great for getting unstuck — but real multiplication confidence comes from understanding equal groups, arrays, and the relationship between multiplication and division. This course builds that foundation from the ground up, then develops fact fluency on top of it. Every lesson tells you exactly what to say, what to watch for, and what to do when a child is stuck.
            </p>
            <Link href="https://homeschoolmath.gumroad.com/l/csfto" target="_blank" rel="noopener noreferrer" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', width: '100%' }} aria-label="Purchase Multiplication and Division Foundations course on Gumroad">
              Get Multiplication & Division Foundations on Gumroad →
            </Link>
          </div>
        </section>

        {/* Related Pages */}
        <section className="practice-section">
          <h2 className="practice-section-title">More Math Tricks & Guides</h2>
          <div className="practice-nav-grid">
            {relatedPages.map((page, index) => (
              <Link key={index} href={page.href} className="practice-nav-card" aria-label={`Read ${page.name}`}>
                <div className="practice-nav-label">{page.name}</div>
                <div className="practice-nav-desc">{page.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="practice-cta-section">
          <div className="practice-cta-box practice-cta-box-blue">
            <h2 className="practice-cta-title">Ready to Practice the 11s?</h2>
            <p className="practice-cta-text">Generate free custom multiplication worksheets — mix the 11s with other tables for real fluency building.</p>
            <div className="practice-cta-container">
              <Link href="/multiplication-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate multiplication practice worksheets">
                Practice Multiplication Worksheets
              </Link>
              <p className="practice-cta-note">Free • No registration required • 10 worksheets per day</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}