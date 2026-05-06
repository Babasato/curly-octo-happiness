// app/skip-counting-explained/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skip Counting Explained | Multiplication Foundation for Kids | HomeschoolMath.site',
  description: 'Learn skip counting — the foundation of multiplication. Step-by-step visual guide for 2nd-3rd graders. Count by 2s, 5s, 10s, and more.',
  alternates: {
    canonical: 'https://homeschoolmath.site/skip-counting-explained',
  },
}

export default function SkipCountingExplained() {
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

  const steps = [
    {
      step: 'What is skip counting?',
      instruction: 'Counting by a number other than 1',
      detail: 'Instead of 1, 2, 3, 4... you count 2, 4, 6, 8... (counting by 2s).',
      visual: '1️⃣→2️⃣→3️⃣→4️⃣ vs 2️⃣→4️⃣→6️⃣→8️⃣',
    },
    {
      step: 'Counting by 2s',
      instruction: '2, 4, 6, 8, 10, 12...',
      detail: 'Every number is 2 more than the last. This is the same as the 2 times table.',
      visual: '⚫⚫ → ⚫⚫⚫⚫ → ⚫⚫⚫⚫⚫⚫ → ...',
    },
    {
      step: 'Counting by 5s',
      instruction: '5, 10, 15, 20, 25, 30...',
      detail: 'Each step adds 5. This is the foundation of telling time (5-minute intervals).',
      visual: '✋✋ (hands) → 5, 10, 15, 20...',
    },
    {
      step: 'Counting by 10s',
      instruction: '10, 20, 30, 40, 50, 60...',
      detail: 'The easiest skip counting — just add a zero. 3 tens = 30.',
      visual: '🔟🔟🔟 = 3️⃣0️⃣',
    },
    {
      step: 'How skip counting helps multiplication',
      instruction: '3 × 4 means skip count by 3 four times',
      detail: '3, 6, 9, 12 → 3 × 4 = 12. Skip counting is repeated addition.',
      visual: '3️⃣ → 6️⃣ → 9️⃣ → 1️⃣2️⃣',
    },
    {
      step: 'Practice skip counting',
      instruction: 'Try it yourself',
      detail: 'Pick a number and count forward. The more you practice, the faster multiplication becomes.',
      visual: 'Start: ___ → +___ → +___ → +___',
    },
  ]

  const examples = [
    { countBy: '2s', sequence: '2, 4, 6, 8, 10, 12, 14, 16, 18, 20', helper: 'Even numbers' },
    { countBy: '5s', sequence: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50', helper: 'Ends in 0 or 5' },
    { countBy: '10s', sequence: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100', helper: 'Adds a zero' },
    { countBy: '3s', sequence: '3, 6, 9, 12, 15, 18, 21, 24, 27, 30', helper: 'Sum of digits = multiple of 3' },
    { countBy: '4s', sequence: '4, 8, 12, 16, 20, 24, 28, 32, 36, 40', helper: 'Double the 2s' },
    { countBy: '6s', sequence: '6, 12, 18, 24, 30, 36, 42, 48, 54, 60', helper: '5s + 1 more' },
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'Borrowing in Subtraction', href: '/borrowing-in-subtraction', desc: 'Step-by-step for kids' },
    { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding digits' },
    { name: 'Regrouping in Addition', href: '/regrouping-in-addition-explained', desc: 'Why carrying works' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Multiplication Guide
          </div>
          <h1 className="practice-title">
            Skip Counting Explained
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            The Foundation of Multiplication
          </p>
          <p className="practice-description">
            Skip counting is how children learn to multiply before they memorize the times tables.
            This guide makes it visual and intuitive.
          </p>
          <div className="practice-cta-container">
            <Link href="/multiplication-practice" className="practice-button practice-button-blue" aria-label="Practice multiplication worksheets">
              Practice Multiplication
            </Link>
          </div>
        </section>

        {/* Key Insight Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Simple Rule:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)' }}>
            Skip counting = adding the same number over and over
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            That is exactly what multiplication means.
          </p>
        </div>

        {/* The Explanation */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            How Skip Counting Works
          </h2>
          <p className="practice-section-subtitle">
            Instead of counting by 1s, we jump by larger numbers
          </p>

          <div className="practice-grid">
            {steps.map((item, index) => {
              const { bgColor, textColor, borderStyle, stepColor, detailColor } = getCardStyle(index)
              
              return (
                <div 
                  key={index} 
                  className="practice-card" 
                  style={{ 
                    textAlign: 'center', 
                    padding: '1.5rem',
                    background: bgColor,
                    color: textColor,
                    border: borderStyle,
                  }}
                >
                  <div style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '800', 
                    marginBottom: '0.5rem',
                    color: stepColor,
                  }}>
                    {item.step}
                  </div>
                  <div style={{ 
                    fontSize: '1.35rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: textColor,
                  }}>
                    {item.instruction}
                  </div>
                  {item.visual && (
                    <div style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                      {item.visual}
                    </div>
                  )}
                  <p style={{ 
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    color: detailColor,
                  }}>
                    {item.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Skip Counting Chart */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Practice Skip Counting
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem',
              marginTop: '1rem'
            }}>
              {examples.map((ex, index) => (
                <div key={index} style={{ padding: '1rem', background: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    Count by {ex.countBy}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                    {ex.sequence}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    💡 {ex.helper}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Number Lines */}
        <section className="practice-section">
          <div className="info-card" style={{ textAlign: 'center' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Skip Counting on a Number Line
            </h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Counting by 3s:</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
                0 → 3 → 6 → 9 → 12 → 15 → 18 → 21 → 24 → 27 → 30
              </div>
            </div>
            <div>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>3 × 4 means:</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                3 → 6 → 9 → 12
              </div>
              <div style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                Jump 3 steps, 4 times!
              </div>
            </div>
          </div>
        </section>

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Turn Skip Counting into Multiplication
          </h2>
          <p className="practice-section-subtitle">
            Every skip count sequence is a times table
          </p>

          <div className="practice-grid">
            <div className="practice-card" style={{ textAlign: 'center' }}>
              <div className="practice-grade-title" style={{ fontWeight: '800', marginBottom: '0.5rem' }}>
                Skip Count by 2s
              </div>
              <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                2, 4, 6, 8, 10, 12, 14...
              </div>
              <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1rem' }}>
                = 2 × 1, 2 × 2, 2 × 3...
              </div>
            </div>
            <div className="practice-card" style={{ textAlign: 'center' }}>
              <div className="practice-grade-title" style={{ fontWeight: '800', marginBottom: '0.5rem' }}>
                Skip Count by 5s
              </div>
              <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                5, 10, 15, 20, 25, 30, 35...
              </div>
              <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1rem' }}>
                = 5 × 1, 5 × 2, 5 × 3...
              </div>
            </div>
            <div className="practice-card" style={{ textAlign: 'center' }}>
              <div className="practice-grade-title" style={{ fontWeight: '800', marginBottom: '0.5rem' }}>
                Skip Count by 10s
              </div>
              <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                10, 20, 30, 40, 50, 60, 70...
              </div>
              <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1rem' }}>
                = 10 × 1, 10 × 2, 10 × 3...
              </div>
            </div>
          </div>
        </section>

        {/* Internal Contextual Link */}
        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Once you master skip counting, learn the <Link href="/multiplying-by-9-trick" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>multiplying by 9 trick</Link> for the hardest facts.
        </p>

        {/* Course Card */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Multiplication & Division Foundations
                </h3>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  GRADES 3–5
                </p>
              </div>
              <span className="practice-badge practice-badge-blue" style={{ fontSize: '1rem', padding: '6px 12px', whiteSpace: 'nowrap' }}>
                $57
              </span>
            </div>

            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Skip counting is just the beginning. This course builds multiplication and division together from the ground up: equal groups, arrays, the relationship between the two operations, and then fact fluency built on understanding rather than rote drilling. By the end, students aren't just reciting facts — they know why they work.
            </p>

            <Link
              href="https://homeschoolmath.gumroad.com/l/csfto"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
              aria-label="Purchase Multiplication and Division Foundations course on Gumroad"
            >
              Get Multiplication & Division Foundations on Gumroad →
            </Link>
          </div>
        </section>

        {/* Related Pages */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            More Math Tricks & Guides
          </h2>
          <div className="practice-nav-grid">
            {relatedPages.map((page, index) => (
              <Link key={index} href={page.href} className="practice-nav-card" aria-label={`Read ${page.name}`}>
                <div className="practice-nav-label">
                  {page.name}
                </div>
                <div className="practice-nav-desc">
                  {page.desc}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="practice-cta-section">
          <div className="practice-cta-box practice-cta-box-blue">
            <h2 className="practice-cta-title">
              Ready to Master Multiplication?
            </h2>
            <p className="practice-cta-text">
              Generate free custom multiplication worksheets — from skip counting to times tables — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/multiplication-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate multiplication practice worksheets">
                Practice Multiplication
              </Link>
              <p className="practice-cta-note">
                Free • No registration required • 10 worksheets per day
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
