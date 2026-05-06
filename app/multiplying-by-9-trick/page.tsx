// app/multiplying-by-9-trick/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplying by 9 Trick (Fast & Easy Method) | HomeschoolMath.site',
  description: 'Learn the fast and easy trick for multiplying by 9. Step-by-step visual guide for kids and parents. Works every time — because 9 is just 1 less than 10.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplying-by-9-trick',
  },
}

export default function MultiplyingBy9Trick() {
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
      step: '9 × 4 = ?',
      instruction: 'Start with the problem',
      detail: 'We need to find 9 × 4. Instead of memorizing, we use the trick.',
      visual: '9 × 4',
    },
    {
      step: 'Step 1: Multiply by 10 instead',
      instruction: '10 × 4 = 40',
      detail: 'Multiplying by 10 is easy — just add a zero. So 10 × 4 = 40.',
      visual: '🔟 × 4 = 4️⃣0️⃣',
    },
    {
      step: 'Step 2: Subtract the number',
      instruction: '40 − 4 = 36',
      detail: 'Now subtract the number you multiplied by. 40 − 4 = 36.',
      visual: '4️⃣0️⃣ − 4 = 3️⃣6️⃣',
    },
    {
      step: 'So we take one group away',
      instruction: '9 is 1 less than 10',
      detail: 'That is why we multiply by 10 and subtract one group of the number.',
      visual: '9 = 10 − 1',
    },
    {
      step: '9 × 4 = 36 ✓',
      instruction: 'That\'s the answer',
      detail: 'Works every time — for any number.',
      visual: '✅',
    },
  ]

  const examples = [
    { problem: '9 × 7', step1: '10 × 7 = 70', step2: '70 − 7 = 63', answer: '63' },
    { problem: '9 × 6', step1: '10 × 6 = 60', step2: '60 − 6 = 54', answer: '54' },
    { problem: '9 × 8', step1: '10 × 8 = 80', step2: '80 − 8 = 72', answer: '72' },
    { problem: '9 × 3', step1: '10 × 3 = 30', step2: '30 − 3 = 27', answer: '27' },
    { problem: '9 × 9', step1: '10 × 9 = 90', step2: '90 − 9 = 81', answer: '81' },
    { problem: '9 × 12', step1: '10 × 12 = 120', step2: '120 − 12 = 108', answer: '108' },
  ]

  const relatedPages = [
    { name: 'Borrowing in Subtraction', href: '/borrowing-in-subtraction', desc: 'Step-by-step for kids' },
    { name: 'Long Division Steps', href: '/long-division-steps-for-kids', desc: 'Easy guide' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'Multiplication made easy' },
    { name: 'Regrouping in Addition', href: '/regrouping-in-addition-explained', desc: 'With examples' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Math Tricks — Visual Guide
          </div>
          <h1 className="practice-title">
            Multiplying by 9 Trick
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            Fast & Easy Method
          </p>
          <p className="practice-description">
            Most kids freeze on the 9 times table. This trick means they never have to again.
            Works for any number — because <strong>9 is just 1 less than 10</strong>.
          </p>
          <div className="practice-cta-container">
            <Link href="/multiplication-practice" className="practice-button practice-button-blue" aria-label="Practice multiplication worksheets including 9 times table">
              Practice the 9 Times Table
            </Link>
          </div>
        </section>

        {/* Decision Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Rule:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)' }}>
            Multiply by 10, then subtract the number once
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            "9 is 1 less than 10" — so we take one group away.
          </p>
        </div>

        {/* The Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            The Trick — Step by Step
          </h2>
          <p className="practice-section-subtitle">
            Let's use 9 × 4 as our example
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
                    <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
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

        {/* Why It Works */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Why This Works
            </h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              9 is exactly 1 less than 10. So when you multiply any number by 9,
              you're multiplying it by 10 and then <strong>taking away one group of that number</strong>.
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: '2' }}>
              <div>9 × 4 = (10 − 1) × 4</div>
              <div>= (10 × 4) − (1 × 4)</div>
              <div>= 40 − 4</div>
              <div style={{ color: 'var(--primary)', fontWeight: '700' }}>= 36 ✓</div>
            </div>
            <p className="text-p" style={{ fontSize: '1rem', marginTop: '1rem', marginBottom: 0 }}>
              <strong>Visual reminder:</strong> 9 groups of 4 = 10 groups of 4 minus 1 group of 4.
            </p>
          </div>
        </section>

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Try These Examples
          </h2>
          <p className="practice-section-subtitle">
            Same two steps every time — multiply by 10, subtract the number
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  {ex.problem}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.25rem', color: 'var(--primary)' }}>
                  {ex.step1}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                  {ex.step2}
                </div>
                <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1.3rem', fontWeight: '800' }}>
                  = {ex.answer} ✓
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Contextual Link */}
        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Once the trick makes sense, practice with our <Link href="/multiplication-practice" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>multiplication practice worksheets</Link> to build full fluency.
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
              Multiplication is where math confidence gets made or broken for a lot of kids —
              and the biggest mistake is rushing to memorization before the concept is understood.
              This course builds multiplication and division together from the ground up: equal groups,
              arrays, the relationship between the two operations, and then fact fluency built on
              understanding rather than rote drilling.
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
              Ready to Practice the 9s?
            </h2>
            <p className="practice-cta-text">
              Generate free custom multiplication worksheets — mix the 9s with other
              tables for real fluency building.
            </p>
            <div className="practice-cta-container">
              <Link href="/multiplication-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate multiplication practice worksheets">
                Practice the 9 Times Table
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
