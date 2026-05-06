// app/how-to-simplify-fractions/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Simplify Fractions | Step-by-Step Visual Guide for Kids | HomeschoolMath.site',
  description: 'Learn how to simplify fractions (reduce to lowest terms) with a simple step-by-step visual guide. Perfect for 4th-6th graders mastering fractions.',
  alternates: {
    canonical: 'https://homeschoolmath.site/how-to-simplify-fractions',
  },
}

export default function HowToSimplifyFractions() {
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
      step: 'What does it mean to simplify?',
      instruction: 'Write the fraction in lowest terms',
      detail: 'Simplifying means finding the smallest possible numerator and denominator that still name the same amount.',
      visual: '4/8 = 1/2',
    },
    {
      step: 'Step 1: Find the Greatest Common Factor (GCF)',
      instruction: 'What is the biggest number that divides evenly into both?',
      detail: 'For 4/8, the GCF is 4. (4 and 8 both divide by 4)',
      visual: '4 ÷ ? = 1, 8 ÷ ? = 2 → GCF = 4',
    },
    {
      step: 'Step 2: Divide numerator and denominator by GCF',
      instruction: '4 ÷ 4 = 1, 8 ÷ 4 = 2',
      detail: 'Divide both the top and bottom by the same number (the GCF).',
      visual: '4/8 ÷ 4/4 = 1/2',
    },
    {
      step: 'Step 3: Check if it can be simplified further',
      instruction: 'Can 1 and 2 be divided by any number besides 1?',
      detail: 'No — 1 and 2 have no common factors other than 1. The fraction is simplified.',
      visual: '1/2 ✓ (lowest terms)',
    },
    {
      step: 'What if you pick a smaller factor?',
      instruction: 'You can simplify in multiple steps',
      detail: 'For 12/18, divide by 2 → 6/9, then divide by 3 → 2/3. Same result, just more steps.',
      visual: '12/18 → 6/9 → 2/3',
    },
    {
      step: 'When is a fraction fully simplified?',
      instruction: 'No common factors between numerator and denominator',
      detail: 'The numerator and denominator share no number that divides both evenly except 1.',
      visual: '1/2, 2/3, 3/4, 5/6 are simplified',
    },
  ]

  const examples = [
    { fraction: '6/8', gcf: '2', simplified: '3/4', visual: '⚫⚫⚫⚫⚫⚫/8 → 3/4' },
    { fraction: '9/12', gcf: '3', simplified: '3/4', visual: '🍕🍕🍕🍕🍕🍕🍕🍕🍕/12 → 3/4' },
    { fraction: '10/15', gcf: '5', simplified: '2/3', visual: '🔟/15 → 2/3' },
    { fraction: '8/12', gcf: '4', simplified: '2/3', visual: '8/12 → 2/3' },
    { fraction: '16/20', gcf: '4', simplified: '4/5', visual: '16/20 → 4/5' },
    { fraction: '18/24', gcf: '6', simplified: '3/4', visual: '18/24 → 3/4' },
  ]

  const commonMistakes = [
    {
      mistake: 'Dividing only the numerator or only the denominator',
      fix: 'Whatever you do to the top, you MUST do to the bottom. Divide both by the same number.',
    },
    {
      mistake: 'Simplifying a fraction that is already in lowest terms',
      fix: 'Check if the numerator and denominator share any common factors (like 2, 3, 5, etc.). If not, it is already simplified.',
    },
    {
      mistake: 'Stopping too early',
      fix: 'After dividing, check again. Can you divide further? 6/9 → 2/3 is simplified. 6/9 → 3/4.5 is wrong — whole numbers only!',
    },
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'Borrowing in Subtraction', href: '/borrowing-in-subtraction', desc: 'Step-by-step for kids' },
    { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding digits' },
    { name: 'What Is a Numerator', href: '/what-is-a-numerator', desc: 'Fraction basics' },
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
            How to Simplify Fractions
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            Reduce Fractions to Lowest Terms — Step by Step
          </p>
          <p className="practice-description">
            Simplifying fractions makes them easier to work with. This guide shows you how to find the smallest possible numbers — using the GCF method.
          </p>
          <div className="practice-cta-container">
            <Link href="/fractions-practice" className="practice-button practice-button-blue" aria-label="Practice fractions worksheets">
              Practice Simplifying Fractions
            </Link>
          </div>
        </section>

        {/* Key Insight Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Goal:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)' }}>
            Find the smallest numerator and denominator that still name the same amount
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            4/8 = 1/2 • 6/9 = 2/3 • 10/25 = 2/5
          </p>
        </div>

        {/* The Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            How to Simplify — Step by Step
          </h2>
          <p className="practice-section-subtitle">
            Let's simplify 4/8 using the Greatest Common Factor (GCF)
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

        {/* Visual Example */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Visual Example: 4/8 = 1/2
            </h2>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '2rem',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem' }}>🍕🍕🍕🍕</div>
                <div style={{ fontWeight: 'bold' }}>4/8</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>4 slices out of 8</div>
              </div>
              <div style={{ fontSize: '2rem' }}>→</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem' }}>🍕</div>
                <div style={{ fontWeight: 'bold' }}>1/2</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>1 slice out of 2 (same amount!)</div>
              </div>
            </div>
            <p className="text-p" style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: 0 }}>
              4/8 of a pizza is the same amount as 1/2 of a pizza.
            </p>
          </div>
        </section>

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Practice Simplifying
          </h2>
          <p className="practice-section-subtitle">
            Find the GCF, then divide to simplify each fraction
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {ex.fraction}
                </div>
                <div className="text-p" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  GCF = {ex.gcf}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                  {ex.fraction} ÷ {ex.gcf}/{ex.gcf} = {ex.simplified}
                </div>
                <div className="text-p" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {ex.visual}
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

        {/* Quick Reference Card */}
        <section className="practice-section">
          <div className="info-card" style={{ textAlign: 'center', background: 'var(--surface)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
              Quick Reference
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
              gap: '0.5rem',
              marginTop: '1rem'
            }}>
              <div><strong>2/4</strong> → 1/2</div>
              <div><strong>3/9</strong> → 1/3</div>
              <div><strong>4/6</strong> → 2/3</div>
              <div><strong>5/10</strong> → 1/2</div>
              <div><strong>6/8</strong> → 3/4</div>
              <div><strong>8/12</strong> → 2/3</div>
            </div>
          </div>
        </section>

        {/* Internal Contextual Link */}
        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          First learn <Link href="/what-is-a-numerator" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>what a numerator is</Link>, then master simplifying fractions.
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
              Ready to Practice Simplifying?
            </h2>
            <p className="practice-cta-text">
              Generate free custom fraction worksheets — from basic concepts to simplification to operations — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/fractions-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate fraction practice worksheets">
                Practice Simplifying Fractions
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
