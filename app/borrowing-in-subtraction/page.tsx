// app/borrowing-in-subtraction/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Borrowing in Subtraction | Step-by-Step Visual Guide for Kids | HomeschoolMath.site',
  description: 'Learn borrowing in subtraction with a simple step-by-step visual guide. Perfect for 2nd-4th graders who struggle with "when do I borrow?"',
  alternates: {
    canonical: 'https://homeschoolmath.site/borrowing-in-subtraction',
  },
}

export default function BorrowingInSubtraction() {
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
      step: '53 − 27 = ?',
      instruction: 'Start with the problem',
      detail: 'We need to subtract 27 from 53. Look at the ones column: 3 − 7.',
      visual: '5️⃣3️⃣ − 2️⃣7️⃣',
    },
    {
      step: 'Ask: Can we subtract?',
      instruction: 'Is 3 smaller than 7?',
      detail: 'YES — 3 is less than 7. We cannot subtract. We need to borrow.',
      visual: '3️⃣ < 7️⃣ → BORROW',
    },
    {
      step: 'Step 2: Borrow from the tens',
      instruction: '5 tens becomes 4 tens',
      detail: 'Take 1 ten from the tens column. Cross out 5 and write 4 above it.',
      visual: '🔟🔟🔟🔟🔟 → 🔟🔟🔟🔟 + 1 ten to ones',
    },
    {
      step: 'Step 3: Add 10 to the ones',
      instruction: '3 ones becomes 13 ones',
      detail: 'The borrowed ten becomes 10 ones. Add to the existing 3 ones: 10 + 3 = 13.',
      visual: '⚫⚫⚫ + 🔟 = ⚫⚫⚫⚫⚫ ⚫⚫⚫⚫⚫ ⚫⚫⚫',
    },
    {
      step: 'Step 4: Subtract the ones',
      instruction: '13 − 7 = 6',
      detail: 'Now we can subtract: 13 − 7 = 6. Write 6 in the ones place.',
      visual: '1️⃣3️⃣ − 7️⃣ = 6️⃣',
    },
    {
      step: 'Step 5: Subtract the tens',
      instruction: '4 − 2 = 2',
      detail: 'Now subtract the tens column: 4 − 2 = 2.',
      visual: '4️⃣ − 2️⃣ = 2️⃣',
    },
    {
      step: '53 − 27 = 26 ✓',
      instruction: 'We have the answer',
      detail: 'Borrowing works because we traded 1 ten for 10 ones — the value stays the same.',
      visual: '✅',
    },
  ]

  const examples = [
    { problem: '42 − 18', borrow: '2 − 8 → borrow', afterBorrow: '12 − 8 = 4', tens: '3 − 1 = 2', answer: '24' },
    { problem: '35 − 19', borrow: '5 − 9 → borrow', afterBorrow: '15 − 9 = 6', tens: '2 − 1 = 1', answer: '16' },
    { problem: '64 − 28', borrow: '4 − 8 → borrow', afterBorrow: '14 − 8 = 6', tens: '5 − 2 = 3', answer: '36' },
    { problem: '81 − 37', borrow: '1 − 7 → borrow', afterBorrow: '11 − 7 = 4', tens: '7 − 3 = 4', answer: '44' },
    { problem: '56 − 29', borrow: '6 − 9 → borrow', afterBorrow: '16 − 9 = 7', tens: '4 − 2 = 2', answer: '27' },
    { problem: '73 − 45', borrow: '3 − 5 → borrow', afterBorrow: '13 − 5 = 8', tens: '6 − 4 = 2', answer: '28' },
  ]

  const commonMistakes = [
    {
      mistake: 'Subtracting the smaller digit from the larger digit',
      fix: 'Always subtract the bottom digit from the top digit. If the top is smaller, borrow first — never switch the numbers.',
    },
    {
      mistake: 'Forgetting to reduce the tens column after borrowing',
      fix: 'Cross out the tens digit and write the new number above it. Say aloud: "5 tens becomes 4 tens."',
    },
    {
      mistake: 'Borrowing when not needed',
      fix: 'Ask: "Is the top number smaller?" If YES → borrow. If NO → subtract directly.',
    },
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding digits' },
    { name: 'Regrouping in Addition', href: '/regrouping-in-addition-explained', desc: 'Why carrying works' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'Multiplication made easy' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-light-green">
            Subtraction Guide
          </div>
          <h1 className="practice-title">
            Borrowing in Subtraction
          </h1>
          <p className="practice-subtitle practice-subtitle-light-green">
            A Step-by-Step Visual Guide for Kids
          </p>
          <p className="practice-description">
            Most borrowing errors happen because children learn the steps without understanding why borrowing works.
            This guide shows both — so the procedure actually makes sense.
          </p>
          <div className="practice-cta-container">
            <Link href="/subtraction-practice" className="practice-button practice-button-light-green" aria-label="Practice subtraction with borrowing worksheets">
              Practice Borrowing Step by Step
            </Link>
          </div>
        </section>

        {/* Decision Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Ask this question first:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>
            "Is the top number smaller than the bottom number?"
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            If YES → Borrow. If NO → Subtract directly.
          </p>
        </div>

        {/* The Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            How to Borrow — Step by Step
          </h2>
          <p className="practice-section-subtitle">
            Let's use 53 − 27 as our example
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
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
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

        {/* Why Borrowing Works */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Why Borrowing Works
            </h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              Borrowing works because you are trading 1 ten for 10 ones. The value stays the same — you're just changing how the number is written.
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: '2' }}>
              <div>53 = 5 tens + 3 ones</div>
              <div>= 4 tens + 13 ones</div>
              <div style={{ color: 'var(--primary)', fontWeight: '700' }}>= 40 + 13 = 53 ✓</div>
            </div>
            <p className="text-p" style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Visual reminder:</strong> 1 ten (🔟) traded for 10 ones (⚫⚫⚫⚫⚫ ⚫⚫⚫⚫⚫).
            </p>
          </div>
        </section>

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Try These Examples
          </h2>
          <p className="practice-section-subtitle">
            Follow the same steps: borrow, subtract ones, subtract tens
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  {ex.problem}
                </div>
                <div className="text-p" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  {ex.borrow}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.25rem' }}>
                  {ex.afterBorrow}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.75rem' }}>
                  {ex.tens}
                </div>
                <div className="practice-subtitle practice-subtitle-light-green" style={{ fontSize: '1.3rem', fontWeight: '800' }}>
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
          Strong <Link href="/place-value-explained" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>place value</Link> skills make borrowing much easier to understand.
        </p>

        {/* Course Card */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Subtraction in 30 Days
                </h3>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  GRADES 2–4
                </p>
              </div>
              <span className="practice-badge practice-badge-light-green" style={{ fontSize: '1rem', padding: '6px 12px', whiteSpace: 'nowrap' }}>
                $57
              </span>
            </div>

            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Subtraction trips up more kids than almost any other early math skill — and the reason is almost always that borrowing was introduced before the concept was solid. This 30-day course fixes that. It starts with the meaning of subtraction, builds toward two-digit problems with and without regrouping, and ends with borrowing across zeros — the step where most kids (and parents) hit a wall.
            </p>

            <Link
              href="https://homeschoolmath.gumroad.com/l/cdhshb"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
              aria-label="Purchase Subtraction in 30 Days course on Gumroad"
            >
              Get Subtraction in 30 Days on Gumroad →
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
          <div className="practice-cta-box practice-cta-box-light-green">
            <h2 className="practice-cta-title">
              Ready to Practice Borrowing?
            </h2>
            <p className="practice-cta-text">
              Generate free custom subtraction worksheets — with or without borrowing — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/subtraction-practice" className="practice-cta-button practice-cta-button-light-green" aria-label="Generate subtraction worksheets with borrowing">
                Practice Borrowing Step by Step
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
