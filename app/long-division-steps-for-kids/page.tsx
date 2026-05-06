// app/long-division-steps-for-kids/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Long Division Steps | Step-by-Step Visual Guide for Kids | HomeschoolMath.site',
  description: 'Learn long division with a simple step-by-step visual guide using the "Does McDonalds Sell Burgers?" method. Perfect for 4th-6th graders.',
  alternates: {
    canonical: 'https://homeschoolmath.site/long-division-steps-for-kids',
  },
}

export default function LongDivisionSteps() {
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
      step: 'Divide',
      instruction: 'How many times does 4 go into 9?',
      detail: '4 goes into 9 two times (2 × 4 = 8). Write 2 above the 9.',
      visual: '4 ⟌ 9 4 5',
    },
    {
      step: 'Multiply',
      instruction: '2 × 4 = 8',
      detail: 'Multiply the quotient (2) by the divisor (4). Write 8 below the 9.',
      visual: '9 - 8 = 1',
    },
    {
      step: 'Subtract',
      instruction: '9 − 8 = 1',
      detail: 'Subtract to find the remainder. Write 1 below the 8.',
      visual: '1 → bring down 4 → 14',
    },
    {
      step: 'Bring Down',
      instruction: 'Bring down the next digit (4)',
      detail: 'Bring down the 4 to make the new number 14.',
      visual: '4 ⟌ 1 4',
    },
    {
      step: 'Divide Again',
      instruction: '4 goes into 14 three times',
      detail: '3 × 4 = 12. Write 3 above. Subtract 14 − 12 = 2.',
      visual: '14 - 12 = 2 → bring down 5 → 25',
    },
    {
      step: 'Divide Again',
      instruction: '4 goes into 25 six times',
      detail: '6 × 4 = 24. Write 6 above. Subtract 25 − 24 = 1.',
      visual: '25 - 24 = 1',
    },
    {
      step: 'Complete',
      instruction: '945 ÷ 4 = 236 remainder 1',
      detail: 'No more digits to bring down. The remainder is 1.',
      visual: '✅ 236 R1',
    },
  ]

  const examples = [
    { problem: '84 ÷ 3', steps: '3 into 8 = 2 → 2×3=6 → 8-6=2 → bring down 4 → 24 → 3 into 24=8', answer: '28' },
    { problem: '96 ÷ 4', steps: '4 into 9 = 2 → 2×4=8 → 9-8=1 → bring down 6 → 16 → 4 into 16=4', answer: '24' },
    { problem: '75 ÷ 5', steps: '5 into 7 = 1 → 1×5=5 → 7-5=2 → bring down 5 → 25 → 5 into 25=5', answer: '15' },
    { problem: '168 ÷ 7', steps: '7 into 16 = 2 → 2×7=14 → 16-14=2 → bring down 8 → 28 → 7 into 28=4', answer: '24' },
    { problem: '255 ÷ 5', steps: '5 into 25 = 5 → 5×5=25 → 25-25=0 → bring down 5 → 5 into 5=1', answer: '51' },
    { problem: '432 ÷ 6', steps: '6 into 43 = 7 → 7×6=42 → 43-42=1 → bring down 2 → 12 → 6 into 12=2', answer: '72' },
  ]

  const commonMistakes = [
    {
      mistake: 'Skipping the bring-down step',
      fix: 'Always bring down the next digit before dividing again. Write it clearly below.',
    },
    {
      mistake: 'Forgetting to write a digit in the quotient',
      fix: 'Write a digit above every digit in the dividend. If a digit is too small, write 0.',
    },
    {
      mistake: 'Subtracting incorrectly',
      fix: 'Double-check your subtraction at each step. Small errors compound quickly in long division.',
    },
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'Borrowing in Subtraction', href: '/borrowing-in-subtraction', desc: 'Step-by-step for kids' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'Multiplication made easy' },
    { name: 'Regrouping in Addition', href: '/regrouping-in-addition-explained', desc: 'Why carrying works' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Division Guide
          </div>
          <h1 className="practice-title">
            Long Division Steps
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            A Step-by-Step Visual Guide for Kids
          </p>
          <p className="practice-description">
            Long division looks intimidating — but it's just four steps repeated over and over.
            This guide breaks it down so the process actually makes sense.
          </p>
          <div className="practice-cta-container">
            <Link href="/division-practice" className="practice-button practice-button-blue" aria-label="Practice long division worksheets">
              Practice Long Division Step by Step
            </Link>
          </div>
        </section>

        {/* The Mnemonic */}
        <section className="practice-section">
          <div className="info-card" style={{ textAlign: 'center', border: '2px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Remember the Steps
            </h2>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>
              Does McDonalds Sell Burgers?
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(5, 1fr)', 
              gap: '0.5rem',
              marginTop: '1rem',
              background: 'var(--surface)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div><strong style={{ color: 'var(--primary)' }}>Does</strong><br/>Divide</div>
              <div><strong style={{ color: 'var(--primary)' }}>McDonalds</strong><br/>Multiply</div>
              <div><strong style={{ color: 'var(--primary)' }}>Sell</strong><br/>Subtract</div>
              <div><strong style={{ color: 'var(--primary)' }}>Burgers</strong><br/>Bring Down</div>
              <div><strong style={{ color: 'var(--primary)' }}>Repeat</strong><br/>Start Over</div>
            </div>
          </div>
        </section>

        {/* Full Example Walkthrough */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Long Division Step by Step
          </h2>
          <p className="practice-section-subtitle">
            Let's solve 945 ÷ 4 together
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

        {/* Why Long Division Works */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Why Long Division Works
            </h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              Long division is just repeated subtraction — but organized so you don't have to subtract hundreds of times.
              Each step subtracts the largest possible multiple of the divisor.
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.8' }}>
              <div>945 ÷ 4 = ?</div>
              <div>= (800 ÷ 4) + (120 ÷ 4) + (25 ÷ 4)</div>
              <div>= 200 + 30 + 6, with 1 left over</div>
              <div style={{ color: 'var(--primary)', fontWeight: '700' }}>= 236 remainder 1 ✓</div>
            </div>
            <p className="text-p" style={{ fontSize: '1rem', marginTop: '1rem', marginBottom: 0 }}>
              Long division breaks a big problem into small, manageable steps. Master these four steps,
              and you can divide any number.
            </p>
          </div>
        </section>

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Try These Examples
          </h2>
          <p className="practice-section-subtitle">
            Follow the same steps: Divide → Multiply → Subtract → Bring Down → Repeat
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  {ex.problem}
                </div>
                <div className="text-p" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  {ex.steps}
                </div>
                <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1.3rem', fontWeight: '800' }}>
                  = {ex.answer} ✓
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
          Mastering <Link href="/multiplication-practice" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>multiplication facts</Link> makes long division much faster.
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
              Long division is where many kids hit a wall — and the reason is almost always that multiplication and division facts aren't automatic yet. This course builds multiplication and division together from the ground up: equal groups, arrays, the relationship between the two operations, and then fact fluency built on understanding rather than rote drilling.
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
              Ready to Practice Long Division?
            </h2>
            <p className="practice-cta-text">
              Generate free custom division worksheets — from basic facts to long division — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/division-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate long division worksheets">
                Practice Long Division Step by Step
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
