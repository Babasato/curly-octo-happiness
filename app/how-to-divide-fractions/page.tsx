// app/how-to-divide-fractions/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Divide Fractions for Kids (Keep Change Flip) | HomeschoolMath.site',
  description: 'Learn how to divide fractions using the Keep Change Flip method. Simple step-by-step visual guide for kids in grades 5–6. Includes worked examples and why it works.',
  alternates: {
    canonical: 'https://homeschoolmath.site/how-to-divide-fractions',
  },
}

export default function HowToDivideFractions() {
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
      step: '¾ ÷ ½ = ?',
      instruction: 'Start with the problem',
      detail: 'We need to divide ¾ by ½. The Keep Change Flip method makes this straightforward.',
      visual: '¾ ÷ ½',
    },
    {
      step: 'KEEP the first fraction',
      instruction: 'Keep ¾ exactly as it is',
      detail: 'The first fraction never changes. Write it down and leave it alone.',
      visual: '¾ ___',
    },
    {
      step: 'CHANGE the division sign',
      instruction: 'Change ÷ to ×',
      detail: 'Replace the division sign with a multiplication sign. Division becomes multiplication.',
      visual: '¾ × ___',
    },
    {
      step: 'FLIP the second fraction',
      instruction: 'Flip ½ to become 2/1',
      detail: 'Swap the numerator and denominator of the second fraction. ½ becomes 2/1 (which is just 2).',
      visual: '¾ × 2/1',
    },
    {
      step: 'Now multiply as normal',
      instruction: '3×2 = 6, 4×1 = 4',
      detail: 'Multiply across the top and multiply across the bottom.',
      visual: '6/4',
    },
    {
      step: 'Simplify the answer',
      instruction: '6/4 = 3/2 = 1½',
      detail: 'Both 6 and 4 divide by 2. So 6/4 = 3/2. As a mixed number that\'s 1½.',
      visual: '¾ ÷ ½ = 1½ ✓',
    },
  ]

  const examples = [
    { problem: '½ ÷ ¼', keepChange: '½ × 4/1', answer: '2' },
    { problem: '⅔ ÷ ⅓', keepChange: '⅔ × 3/1', answer: '2' },
    { problem: '¾ ÷ ⅓', keepChange: '¾ × 3/1', answer: '9/4 = 2¼' },
    { problem: '⅗ ÷ ½', keepChange: '⅗ × 2/1', answer: '6/5 = 1⅕' },
    { problem: '⅘ ÷ ⅖', keepChange: '⅘ × 5/2', answer: '20/10 = 2' },
    { problem: '⅔ ÷ ¾', keepChange: '⅔ × 4/3', answer: '8/9' },
  ]

  const commonMistakes = [
    {
      mistake: 'Flipping the first fraction instead of the second',
      fix: 'Always KEEP the first fraction unchanged. Only the second fraction (the divisor) gets flipped.',
    },
    {
      mistake: 'Forgetting to change the sign before flipping',
      fix: 'The order matters: Keep → Change the sign → Flip. All three steps are needed. Missing the sign change gives a wrong answer.',
    },
    {
      mistake: 'Not simplifying the final answer',
      fix: 'After multiplying, check if your answer can be simplified. Also check if an improper fraction should be written as a mixed number.',
    },
  ]

  const relatedPages = [
    { name: 'How to Multiply Fractions', href: '/how-to-multiply-fractions', desc: 'The easier operation — start here' },
    { name: 'How to Simplify Fractions', href: '/how-to-simplify-fractions', desc: 'Reducing to lowest terms' },
    { name: 'What Is a Denominator?', href: '/what-is-a-denominator', desc: 'Understand the bottom number' },
    { name: 'Fractions Worksheets', href: '/fractions-practice', desc: 'Practice what you learned' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-green">Fractions Guide</div>
          <h1 className="practice-title">How to Divide Fractions</h1>
          <p className="practice-subtitle practice-subtitle-green">Keep Change Flip — Explained Simply</p>
          <p className="practice-description">
            Dividing fractions confuses most kids because the method feels like a trick with no reason behind it.
            This guide shows both the method AND why it works — so it actually sticks.
          </p>
          <div className="practice-cta-container">
            <Link href="/fractions-practice" className="practice-button practice-button-green" aria-label="Practice fractions worksheets">
              Practice Fractions Worksheets
            </Link>
          </div>
        </section>

        {/* Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Method:</h3>
          <p style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>
            KEEP → CHANGE → FLIP
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            Keep the first fraction. Change ÷ to ×. Flip the second fraction. Then multiply as normal.
          </p>
        </div>

        {/* Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">Keep Change Flip — Step by Step</h2>
          <p className="practice-section-subtitle">Let's use ¾ ÷ ½ as our example</p>
          <div className="practice-grid">
            {steps.map((item, index) => {
              const { bgColor, textColor, borderStyle, stepColor, detailColor } = getCardStyle(index)
              return (
                <div key={index} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem', background: bgColor, color: textColor, border: borderStyle }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: stepColor }}>{item.step}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: textColor }}>{item.instruction}</div>
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>{item.visual}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: detailColor }}>{item.detail}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Why it works */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why Keep Change Flip Works</h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              Dividing by a fraction is the same as multiplying by its reciprocal. The reciprocal is just the fraction flipped upside down.
              This is because division and multiplication are inverse operations — they undo each other.
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '2' }}>
              <div>¾ ÷ ½</div>
              <div>= ¾ × (1 ÷ ½)</div>
              <div>= ¾ × 2/1</div>
              <div>= ¾ × 2</div>
              <div style={{ color: 'var(--secondary)', fontWeight: '700' }}>= 6/4 = 1½ ✓</div>
            </div>
            <p className="text-p" style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: 0 }}>
              <strong>Plain English:</strong> "How many halves fit into three quarters?" The answer is 1½ — because one half fits once, with a quarter left over which is half of a half.
            </p>
          </div>
        </section>

        {/* Examples */}
        <section className="practice-section">
          <h2 className="practice-section-title">Try These Examples</h2>
          <p className="practice-section-subtitle">Keep Change Flip then multiply — same method every time</p>
          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{ex.problem}</div>
                <div className="text-p" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontFamily: 'monospace', marginBottom: '0.5rem' }}>→ {ex.keepChange}</div>
                <div className="practice-subtitle practice-subtitle-green" style={{ fontSize: '1.3rem', fontWeight: '800' }}>= {ex.answer} ✓</div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="practice-section">
          <h2 className="practice-section-title">Common Mistakes (And How to Fix Them)</h2>
          <div className="practice-grid">
            {commonMistakes.map((item, index) => (
              <div key={index} className="practice-card">
                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--error)', marginBottom: '0.75rem' }}>❌ {item.mistake}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>✓ {item.fix}</div>
              </div>
            ))}
          </div>
        </section>

        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Make sure you're confident with <Link href="/how-to-multiply-fractions" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>multiplying fractions</Link> first — dividing fractions uses the exact same multiplication step.
        </p>

        {/* Course Card */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Number Sense Foundations</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>GRADES K–2</p>
              </div>
              <span className="practice-badge practice-badge-blue" style={{ fontSize: '1rem', padding: '6px 12px', whiteSpace: 'nowrap' }}>$57</span>
            </div>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Keep Change Flip is memorable — but children who truly understand fractions as quantities don't need to rely on it. This course builds the conceptual foundation from the ground up: what fractions mean, how they relate to division, and why operations on fractions work the way they do.
            </p>
            <Link href="https://homeschoolmath.gumroad.com/l/mfikwi" target="_blank" rel="noopener noreferrer" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', width: '100%' }} aria-label="Purchase Number Sense Foundations course on Gumroad">
              Get Number Sense Foundations on Gumroad →
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
          <div className="practice-cta-box practice-cta-box-green">
            <h2 className="practice-cta-title">Ready to Practice Fraction Division?</h2>
            <p className="practice-cta-text">Generate free custom fractions worksheets — including multiplication and division — with answer keys included.</p>
            <div className="practice-cta-container">
              <Link href="/fractions-practice" className="practice-cta-button practice-cta-button-green" aria-label="Generate fractions practice worksheets">
                Practice Fractions Worksheets
              </Link>
              <p className="practice-cta-note">Free • No registration required • 10 worksheets per day</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
