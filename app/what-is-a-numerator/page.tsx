// app/what-is-a-numerator/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a Numerator? | Simple Fraction Guide for Kids | HomeschoolMath.site',
  description: 'Learn what a numerator is with a simple visual guide. Understand the top number of a fraction — how many parts we have. Perfect for 2nd-4th graders.',
  alternates: {
    canonical: 'https://homeschoolmath.site/what-is-a-numerator',
  },
}

export default function WhatIsANumerator() {
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
      step: 'What is a fraction?',
      instruction: 'A fraction shows part of a whole',
      detail: 'Imagine a pizza cut into equal slices. The fraction tells you how many slices you have out of the total.',
      visual: '🍕 → 8 slices',
    },
    {
      step: 'The Numerator',
      instruction: 'The top number — how many parts we HAVE',
      detail: 'In 3/4, the numerator is 3. It means we have 3 out of 4 equal parts.',
      visual: '3️⃣/4 → 3 parts shaded',
    },
    {
      step: 'The Denominator',
      instruction: 'The bottom number — total parts the whole is cut into',
      detail: 'In 3/4, the denominator is 4. It means the whole is cut into 4 equal parts.',
      visual: '3/4️⃣ → 4 total slices',
    },
    {
      step: 'Putting It Together',
      instruction: 'Numerator = how many you have',
      detail: 'If you have 5 slices out of 8, the fraction is 5/8. Numerator 5, denominator 8.',
      visual: '5️⃣/8 → 🍕🍕🍕🍕🍕 (5 slices)',
    },
    {
      step: 'What if numerator equals denominator?',
      instruction: 'All parts = the whole',
      detail: 'If numerator = denominator, the fraction equals 1. 4/4 of a pizza means the whole pizza.',
      visual: '4️⃣/4 = 1 whole 🍕',
    },
    {
      step: 'What if numerator is larger?',
      instruction: 'Improper fractions',
      detail: 'If you have more than one whole, like 5/4 means one whole pizza plus 1/4 of another.',
      visual: '5️⃣/4 = 1 whole 🍕 + 1/4 slice',
    },
  ]

  const examples = [
    { fraction: '2/5', numerator: '2', denominator: '5', meaning: '2 parts out of 5 total' },
    { fraction: '7/10', numerator: '7', denominator: '10', meaning: '7 parts out of 10 total' },
    { fraction: '1/3', numerator: '1', denominator: '3', meaning: '1 part out of 3 total' },
    { fraction: '4/8', numerator: '4', denominator: '8', meaning: '4 parts out of 8 total (1/2)' },
    { fraction: '6/6', numerator: '6', denominator: '6', meaning: 'All parts — the whole' },
    { fraction: '3/2', numerator: '3', denominator: '2', meaning: 'More than one whole (1 and 1/2)' },
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'Borrowing in Subtraction', href: '/borrowing-in-subtraction', desc: 'Step-by-step for kids' },
    { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding digits' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'Multiplication made easy' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Fraction Guide
          </div>
          <h1 className="practice-title">
            What Is a Numerator?
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            The Top Number of a Fraction — How Many Parts You Have
          </p>
          <p className="practice-description">
            Fractions confuse kids when they only memorize the numbers without understanding what they mean.
            This guide makes the numerator — the "how many" number — completely clear.
          </p>
          <div className="practice-cta-container">
            <Link href="/fractions-practice" className="practice-button practice-button-blue" aria-label="Practice fractions worksheets">
              Practice Fractions
            </Link>
          </div>
        </section>

        {/* Key Insight Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Simple Rule:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)' }}>
            Numerator = How many you HAVE
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
            Denominator = How many total parts the whole is cut into
          </p>
        </div>

        {/* The Explanation */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Understanding the Numerator
          </h2>
          <p className="practice-section-subtitle">
            Let's use a pizza cut into 4 slices
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
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
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

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Identify the Numerator
          </h2>
          <p className="practice-section-subtitle">
            For each fraction, find the numerator and understand what it means
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {ex.fraction}
                </div>
                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                  Numerator: {ex.numerator}
                </div>
                <div className="text-p" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  Denominator: {ex.denominator}
                </div>
                <div className="text-p" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
                  {ex.meaning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Help Section */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Remember the Numerator
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--surface)', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem' }}>🍕🍕🍕</div>
                <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>3/8</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>You have 3 slices</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--surface)', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem' }}>🍕🍕🍕🍕🍕</div>
                <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>5/8</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>You have 5 slices</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--surface)', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem' }}>🍕🍕🍕🍕🍕🍕🍕🍕</div>
                <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>8/8 = 1</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>The whole pizza</div>
              </div>
            </div>
            <p className="text-p" style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.9rem', textAlign: 'center' }}>
              <strong>The numerator tells you how many slices you have.</strong> The denominator tells you how many slices make a whole pizza.
            </p>
          </div>
        </section>

        {/* Internal Contextual Link */}
        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Once you understand numerators, learn <Link href="/how-to-simplify-fractions" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>how to simplify fractions</Link>.
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
              Fractions are built on number sense — understanding parts and wholes, equal sharing, and how numbers relate. This course builds the conceptual foundation that makes fractions intuitive rather than confusing. Every lesson tells you exactly what to say, what to watch for, and what to do when a child is stuck.
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
              Ready to Practice Fractions?
            </h2>
            <p className="practice-cta-text">
              Generate free custom fraction worksheets — from basic concepts to operations — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/fractions-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate fraction worksheets">
                Practice Fractions
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