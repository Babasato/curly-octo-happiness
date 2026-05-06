// app/regrouping-in-addition-explained/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regrouping in Addition Explained | Step-by-Step Visual Guide | HomeschoolMath.site',
  description: 'Learn regrouping (carrying) in addition with a simple step-by-step visual guide. Perfect for 2nd-4th graders who struggle with "when do I carry?"',
  alternates: {
    canonical: 'https://homeschoolmath.site/regrouping-in-addition-explained',
  },
}

export default function RegroupingInAddition() {
  // Card style helper
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
      step: '27 + 35 = ?',
      instruction: 'Start with the problem',
      detail: 'We need to add 27 and 35. Write them vertically, lining up the ones and tens.',
      visual: null,
    },
    {
      step: 'Step 1: Add the ones column',
      instruction: '7 + 5 = 12',
      detail: '7 ones + 5 ones = 12 ones. But 12 ones is more than 9 — we need to regroup.',
      visual: '⚫⚫⚫⚫⚫ ⚫⚫⚫⚫⚫ ⚫⚫',
    },
    {
      step: 'Step 2: Regroup 12 ones',
      instruction: '12 ones = 1 ten + 2 ones',
      detail: 'Write the 2 in the ones place. Carry the 1 ten to the tens column.',
      visual: '🔟 + ⚫⚫',
    },
    {
      step: 'Step 3: Add the tens column',
      instruction: '1 + 2 + 3 = 6',
      detail: 'Add the carried 1 ten + 2 tens + 3 tens = 6 tens.',
      visual: '🔟🔟🔟🔟🔟🔟',
    },
    {
      step: 'Step 4: Write the answer',
      instruction: '6 tens + 2 ones = 62',
      detail: 'The answer is 62. The carried ten made the tens column larger.',
      visual: '🔟🔟🔟🔟🔟🔟 + ⚫⚫',
    },
    {
      step: '27 + 35 = 62 ✓',
      instruction: 'We have the answer',
      detail: 'Regrouping works because 10 ones make 1 ten — the value stays the same.',
      visual: null,
    },
  ]

  const examples = [
    { problem: '38 + 26', ones: '8 + 6 = 14 → carry 1', tens: '1 + 3 + 2 = 6', answer: '64' },
    { problem: '47 + 38', ones: '7 + 8 = 15 → carry 1', tens: '1 + 4 + 3 = 8', answer: '85' },
    { problem: '56 + 29', ones: '6 + 9 = 15 → carry 1', tens: '1 + 5 + 2 = 8', answer: '85' },
    { problem: '64 + 27', ones: '4 + 7 = 11 → carry 1', tens: '1 + 6 + 2 = 9', answer: '91' },
    { problem: '79 + 18', ones: '9 + 8 = 17 → carry 1', tens: '1 + 7 + 1 = 9', answer: '97' },
    { problem: '85 + 46', ones: '5 + 6 = 11 → carry 1', tens: '1 + 8 + 4 = 13', answer: '131' },
  ]

  const commonMistakes = [
    {
      mistake: 'Forgetting to add the carried number',
      fix: 'Write the small carried number above the tens column. Say aloud: "1 ten + 2 tens + 3 tens = 6 tens."',
    },
    {
      mistake: 'Regrouping when the sum is less than 10',
      fix: 'Only regroup when the ones sum is 10 or more. If the sum is 9 or less, write it directly.',
    },
    {
      mistake: 'Writing the carried number in the answer',
      fix: 'The carried number is added to the tens column — it is not written as part of the ones answer.',
    },
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
            Addition Guide
          </div>
          <h1 className="practice-title">
            Regrouping in Addition
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            A Step-by-Step Visual Guide for Kids
          </p>
          <p className="practice-description">
            Most regrouping errors happen because children learn the steps without understanding why carrying works.
            This guide shows both — so the procedure actually makes sense.
          </p>
          <div className="practice-cta-container">
            <Link href="/addition-practice" className="practice-button practice-button-blue" aria-label="Practice regrouping addition worksheets">
              Generate Regrouping Addition Worksheets
            </Link>
          </div>
        </section>

        {/* Decision Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Ask this question first:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>
            "Do the ones add up to 10 or more?"
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            If YES → Regroup (carry the ten). If NO → Write the number directly.
          </p>
        </div>

        {/* The Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            How to Regroup — Step by Step
          </h2>
          <p className="practice-section-subtitle">
            Let's use 27 + 35 as our example
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
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
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

        {/* Why Regrouping Works */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Why Regrouping Works
            </h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              Regrouping works because 10 ones make 1 ten. The value stays the same — you're just changing how the number is written.
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.8' }}>
              <div>27 + 35 = (2 tens + 7 ones) + (3 tens + 5 ones)</div>
              <div>= 2 tens + 3 tens + 7 ones + 5 ones</div>
              <div>= 5 tens + 12 ones</div>
              <div>= 5 tens + (1 ten + 2 ones)</div>
              <div>= 6 tens + 2 ones</div>
              <div style={{ color: 'var(--primary)', fontWeight: '700' }}>= 62 ✓</div>
            </div>
            <p className="text-p" style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Visual reminder:</strong> 10 ones (⚫⚫⚫⚫⚫ ⚫⚫⚫⚫⚫) regroup into 1 ten (🔟).
            </p>
          </div>
        </section>

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Try These Examples
          </h2>
          <p className="practice-section-subtitle">
            Follow the same steps: add ones, regroup if needed, add tens
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  {ex.problem}
                </div>
                <div className="text-p" style={{ fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>
                  {ex.ones}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                  {ex.tens}
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

        {/* Internal Contextual Link Example */}
        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Understanding <Link href="/place-value-explained" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>place value</Link> is the key to mastering regrouping.
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
              Regrouping is where addition gets tricky for most kids — and the reason is almost always that place value wasn't fully solid first. This course builds genuine number sense, starting with place value, then moving through composing and decomposing numbers, addition and subtraction concepts, and the mental math strategies that make regrouping feel natural rather than like a magic trick. Every lesson tells you exactly what to say, what to watch for, and what to do when a child is stuck.
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
              Ready to Practice Regrouping?
            </h2>
            <p className="practice-cta-text">
              Generate free custom addition worksheets — with and without regrouping — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/addition-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate regrouping addition worksheets">
                Generate Regrouping Addition Worksheets
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
