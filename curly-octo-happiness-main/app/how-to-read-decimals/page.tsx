// app/how-to-read-decimals/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Read Decimals | A Simple Visual Guide for Kids | HomeschoolMath.site',
  description: 'Learn how to read decimals step by step. Understand tenths, hundredths, thousandths, and how to say decimal numbers correctly. Perfect for 4th-5th graders.',
  alternates: {
    canonical: 'https://homeschoolmath.site/how-to-read-decimals',
  },
}

export default function HowToReadDecimals() {
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
      step: 'What is a decimal?',
      instruction: 'A decimal shows part of a whole',
      detail: 'Decimals are like fractions with denominators of 10, 100, or 1000. The decimal point separates the whole number from the part.',
      visual: '3.45 = 3 wholes + 45 hundredths',
    },
    {
      step: 'Tenths — The first place',
      instruction: 'One digit after the decimal',
      detail: '0.1 is one tenth. 0.7 is seven tenths. Say it as "seven tenths" not "point seven."',
      visual: '0.1 = 1/10 | 0.7 = 7/10',
    },
    {
      step: 'Hundredths — The second place',
      instruction: 'Two digits after the decimal',
      detail: '0.01 is one hundredth. 0.45 is forty-five hundredths. Say the whole number then "hundredths."',
      visual: '0.01 = 1/100 | 0.45 = 45/100',
    },
    {
      step: 'Thousandths — The third place',
      instruction: 'Three digits after the decimal',
      detail: '0.001 is one thousandth. 0.375 is three hundred seventy-five thousandths.',
      visual: '0.001 = 1/1000 | 0.375 = 375/1000',
    },
    {
      step: 'Reading decimals correctly',
      instruction: 'Say "and" for the decimal point',
      detail: '3.45 is "three and forty-five hundredths." Never say "three point four five" — that skips the place value meaning.',
      visual: '3.45 → "three and forty-five hundredths"',
    },
    {
      step: 'Common mistake: longer decimal = larger?',
      instruction: '0.7 is larger than 0.45',
      detail: 'Many kids think 0.45 > 0.7 because 45 > 7. But tenths are larger than hundredths. 0.7 = 0.70, which is 70 hundredths.',
      visual: '0.70 > 0.45 ✓',
    },
  ]

  const examples = [
    { decimal: '0.3', reading: 'three tenths', fraction: '3/10' },
    { decimal: '0.25', reading: 'twenty-five hundredths', fraction: '25/100' },
    { decimal: '0.8', reading: 'eight tenths', fraction: '8/10' },
    { decimal: '0.07', reading: 'seven hundredths', fraction: '7/100' },
    { decimal: '1.5', reading: 'one and five tenths', fraction: '1 5/10' },
    { decimal: '3.75', reading: 'three and seventy-five hundredths', fraction: '3 75/100' },
    { decimal: '0.125', reading: 'one hundred twenty-five thousandths', fraction: '125/1000' },
    { decimal: '4.05', reading: 'four and five hundredths', fraction: '4 5/100' },
  ]

  const commonMistakes = [
    {
      mistake: 'Saying "point four five" instead of "forty-five hundredths"',
      fix: 'Always say the place value name. "Point" skips the meaning. "Forty-five hundredths" builds understanding.',
    },
    {
      mistake: 'Thinking 0.45 is larger than 0.7',
      fix: 'Add a zero: 0.7 = 0.70. Now compare 0.70 vs 0.45 — 70 hundredths is larger!',
    },
    {
      mistake: 'Misreading 0.05 as 0.5',
      fix: 'The zero matters. 0.05 is five hundredths. 0.5 is five tenths. Different values!',
    },
  ]

  const relatedPages = [
    { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding digits' },
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'What Is a Numerator?', href: '/what-is-a-numerator', desc: 'Fraction basics' },
    { name: 'How to Simplify Fractions', href: '/how-to-simplify-fractions', desc: 'Reducing fractions' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Decimals Guide
          </div>
          <h1 className="practice-title">
            How to Read Decimals
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            A Simple Visual Guide for Kids
          </p>
          <p className="practice-description">
            Decimals confuse kids when they learn to say "point four five" instead of understanding place value.
            This guide teaches the right way — so decimals actually make sense.
          </p>
          <div className="practice-cta-container">
            <Link href="/decimals-practice" className="practice-button practice-button-blue" aria-label="Practice decimals worksheets">
              Practice Decimals
            </Link>
          </div>
        </section>

        {/* Key Insight Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Golden Rule:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)' }}>
            Say "and" for the decimal point, then say the place value
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            3.45 = "three <strong>and</strong> forty-five <strong>hundredths</strong>"
          </p>
        </div>

        {/* The Explanation */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Understanding Decimal Place Value
          </h2>
          <p className="practice-section-subtitle">
            Each position after the decimal has a special name
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
                    <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
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

        {/* Place Value Chart */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Decimal Place Value Chart
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '0.5rem',
              background: 'var(--surface)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              textAlign: 'center'
            }}>
              <div><strong>Ones</strong></div>
              <div><strong><span style={{ color: 'var(--primary)' }}>·</span> Tenths</strong></div>
              <div><strong>Hundredths</strong></div>
              <div><strong>Thousandths</strong></div>
              <div>3</div>
              <div style={{ color: 'var(--primary)' }}>4</div>
              <div>5</div>
              <div>—</div>
              <div style={{ gridColumn: 'span 4', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>3.45 = 3 ones, 4 tenths, 5 hundredths</div>
            </div>
          </div>
        </section>

        {/* Practice Reading Decimals */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Practice Reading Decimals
          </h2>
          <p className="practice-section-subtitle">
            Cover the answer, read the decimal aloud, then check
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {ex.decimal}
                </div>
                <div className="text-p" style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>
                  = {ex.reading}
                </div>
                <div className="text-p" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  = {ex.fraction}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Common Mistakes (And How to Fix Them)
          </h2>
          <div className="practice-grid">
            {commonMistakes.map((item, index) => (
              <div key={index} className="practice-card">
                <div style={{ 
                  fontSize: '1rem', 
                  fontWeight: '700', 
                  color: 'var(--error)',
                  marginBottom: '0.75rem'
                }}>
                  ❌ {item.mistake}
                </div>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  ✓ {item.fix}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Contextual Link */}
        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Once you can read decimals, learn <Link href="/decimals-practice" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>how to add, subtract, multiply, and divide them</Link>.
        </p>

        {/* Course Card */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Number Sense Foundations
                </h3>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  GRADES K–2
                </p>
              </div>
              <span className="practice-badge practice-badge-blue" style={{ fontSize: '1rem', padding: '6px 12px', whiteSpace: 'nowrap' }}>
                $57
              </span>
            </div>

            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Decimals are built on place value understanding. This course builds genuine number sense — not just counting, but understanding what numbers mean and how they relate to each other. Covers place value, composing and decomposing numbers, and the mental math strategies that make decimals intuitive rather than confusing.
            </p>

            <Link
              href="https://homeschoolmath.gumroad.com/l/mfikwi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
              aria-label="Purchase Number Sense Foundations course on Gumroad"
            >
              Get Number Sense Foundations on Gumroad →
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
              Ready to Practice Decimals?
            </h2>
            <p className="practice-cta-text">
              Generate free custom decimal worksheets — from place value to operations — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/decimals-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate decimal practice worksheets">
                Practice Decimals
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