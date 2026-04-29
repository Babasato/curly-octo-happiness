// app/how-to-multiply-fractions/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Multiply Fractions Step by Step | Visual Guide | HomeschoolMath.site',
  description: 'Learn how to multiply fractions with a simple step-by-step visual guide. Multiply tops, multiply bottoms, simplify. Works every time for kids in grades 4–6.',
  alternates: {
    canonical: 'https://homeschoolmath.site/how-to-multiply-fractions',
  },
}

export default function HowToMultiplyFractions() {
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
      step: '⅔ × ¾ = ?',
      instruction: 'Start with the problem',
      detail: 'Multiplying fractions is simpler than adding them — no common denominator needed.',
      visual: '⅔ × ¾',
    },
    {
      step: 'Step 1: Multiply the numerators',
      instruction: '2 × 3 = 6',
      detail: 'Multiply the top numbers together. This becomes the numerator of your answer.',
      visual: '2 × 3 = 6 (top)',
    },
    {
      step: 'Step 2: Multiply the denominators',
      instruction: '3 × 4 = 12',
      detail: 'Multiply the bottom numbers together. This becomes the denominator of your answer.',
      visual: '3 × 4 = 12 (bottom)',
    },
    {
      step: 'Step 3: Write the new fraction',
      instruction: '6/12',
      detail: 'Put the new numerator over the new denominator. Now check if you can simplify.',
      visual: '6 / 12',
    },
    {
      step: 'Step 4: Simplify if possible',
      instruction: '6/12 = ½',
      detail: 'Both 6 and 12 divide by 6. So 6/12 simplifies to ½.',
      visual: '6 ÷ 6 = 1 / 12 ÷ 6 = 2',
    },
    {
      step: '⅔ × ¾ = ½ ✓',
      instruction: 'That\'s the answer',
      detail: 'Multiply tops, multiply bottoms, simplify. That\'s the whole method.',
      visual: '✅',
    },
  ]

  const examples = [
    { problem: '½ × ½', numerator: '1×1=1', denominator: '2×2=4', simplified: '', answer: '¼' },
    { problem: '⅔ × ⅗', numerator: '2×3=6', denominator: '3×5=15', simplified: '÷3 = ⅖', answer: '⅖' },
    { problem: '¾ × ⅔', numerator: '3×2=6', denominator: '4×3=12', simplified: '÷6 = ½', answer: '½' },
    { problem: '⅘ × ½', numerator: '4×1=4', denominator: '5×2=10', simplified: '÷2 = ⅖', answer: '⅖' },
    { problem: '⅓ × ¾', numerator: '1×3=3', denominator: '3×4=12', simplified: '÷3 = ¼', answer: '¼' },
    { problem: '⅝ × ⅔', numerator: '5×2=10', denominator: '8×3=24', simplified: '÷2 = 5/12', answer: '5/12' },
  ]

  const commonMistakes = [
    {
      mistake: 'Adding denominators instead of multiplying them',
      fix: 'When multiplying fractions, multiply BOTH the top and bottom. Never add the denominators — that\'s only needed when adding fractions.',
    },
    {
      mistake: 'Forgetting to simplify the answer',
      fix: 'Always check if the numerator and denominator share a common factor. Divide both by the GCF to get the simplest form.',
    },
    {
      mistake: 'Thinking you need a common denominator',
      fix: 'Common denominators are only needed for addition and subtraction. For multiplication, just multiply straight across.',
    },
  ]

  const relatedPages = [
    { name: 'What Is a Numerator?', href: '/what-is-a-numerator', desc: 'Understand the top number first' },
    { name: 'What Is a Denominator?', href: '/what-is-a-denominator', desc: 'Understand the bottom number' },
    { name: 'How to Simplify Fractions', href: '/how-to-simplify-fractions', desc: 'Reducing fractions step by step' },
    { name: 'Fractions Worksheets', href: '/fractions-practice', desc: 'Practice what you learned' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-green">Fractions Guide</div>
          <h1 className="practice-title">How to Multiply Fractions</h1>
          <p className="practice-subtitle practice-subtitle-green">Step-by-Step Visual Guide</p>
          <p className="practice-description">
            Multiplying fractions is actually the easiest fraction operation — no common denominator needed.
            Multiply the tops, multiply the bottoms, simplify. That's the whole method.
          </p>
          <div className="practice-cta-container">
            <Link href="/fractions-practice" className="practice-button practice-button-green" aria-label="Practice fractions worksheets">
              Practice Fractions Worksheets
            </Link>
          </div>
        </section>

        {/* Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Rule:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '0.25rem' }}>
            Multiply numerator × numerator → new numerator
          </p>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.25rem' }}>
            Multiply denominator × denominator → new denominator
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            Then simplify if possible. No common denominator needed — ever.
          </p>
        </div>

        {/* Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">How to Multiply Fractions — Step by Step</h2>
          <p className="practice-section-subtitle">Let's use ⅔ × ¾ as our example</p>
          <div className="practice-grid">
            {steps.map((item, index) => {
              const { bgColor, textColor, borderStyle, stepColor, detailColor } = getCardStyle(index)
              return (
                <div key={index} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem', background: bgColor, color: textColor, border: borderStyle }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: stepColor }}>{item.step}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: textColor }}>{item.instruction}</div>
                  <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>{item.visual}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: detailColor }}>{item.detail}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Why it works */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why Multiplying Fractions Works This Way</h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              "½ of ½" means you take half of something that is already half — which gives you a quarter. Fraction multiplication is always asking "what fraction of this fraction do I have?"
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '2' }}>
              <div>⅔ × ¾ means "two thirds OF three quarters"</div>
              <div>= take ⅔ of ¾</div>
              <div>= (2 × 3) / (3 × 4)</div>
              <div>= 6/12</div>
              <div style={{ color: 'var(--secondary)', fontWeight: '700' }}>= ½ ✓</div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="practice-section">
          <h2 className="practice-section-title">Try These Examples</h2>
          <p className="practice-section-subtitle">Multiply across, then simplify — same method every time</p>
          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{ex.problem}</div>
                <div className="text-p" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{ex.numerator}</div>
                <div className="text-p" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{ex.denominator}</div>
                {ex.simplified && <div className="text-p" style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontFamily: 'monospace', marginBottom: '0.25rem' }}>{ex.simplified}</div>}
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
          Make sure you can <Link href="/how-to-simplify-fractions" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>simplify fractions</Link> confidently — it's the final step in most multiplication problems.
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
              Fraction operations make sense when children genuinely understand what a fraction represents — equal parts of a whole, part of a group, a point on a number line. This course builds that conceptual foundation in the early years so that multiplying and dividing fractions later on feels logical rather than like rules to memorise.
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
            <h2 className="practice-cta-title">Ready to Practice Fraction Multiplication?</h2>
            <p className="practice-cta-text">Generate free custom fractions worksheets including multiplication — with answer keys included.</p>
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