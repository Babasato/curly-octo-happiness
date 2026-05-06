// app/what-is-a-denominator/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a Denominator? | Easy Explanation for Kids | HomeschoolMath.site',
  description: 'Learn what a denominator is and why it matters. Simple visual guide for kids in grades 3–5 with real-life examples. The perfect pair to our numerator guide.',
  alternates: {
    canonical: 'https://homeschoolmath.site/what-is-a-denominator',
  },
}

export default function WhatIsADenominator() {
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

  const concepts = [
    {
      step: 'Look at ¾',
      instruction: 'The bottom number is 4',
      detail: 'The 4 tells us the whole has been cut into 4 equal pieces. That\'s the denominator.',
      visual: '3 ← numerator\n─\n4 ← denominator',
    },
    {
      step: 'The denominator names the piece',
      instruction: '4 equal pieces = "fourths"',
      detail: 'When something is cut into 4 equal parts, each part is called a "fourth." The denominator names what kind of piece we have.',
      visual: '🍕🍕🍕🍕',
    },
    {
      step: 'Denominator = the total cuts',
      instruction: 'How many equal pieces altogether?',
      detail: 'If a pizza is cut into 8 slices, the denominator is 8 — regardless of how many slices you have.',
      visual: '_ / 8 → cut into 8 pieces',
    },
    {
      step: 'Different denominators = different sizes',
      instruction: '½ is bigger than ¼',
      detail: 'A pizza cut into 2 pieces gives bigger slices than one cut into 4. Bigger denominator = smaller pieces.',
      visual: '½ > ¼ > ⅛',
    },
  ]

  const examples = [
    { fraction: '½', denominator: '2', meaning: 'Cut into 2 equal pieces', pieceName: 'halves' },
    { fraction: '⅓', denominator: '3', meaning: 'Cut into 3 equal pieces', pieceName: 'thirds' },
    { fraction: '¼', denominator: '4', meaning: 'Cut into 4 equal pieces', pieceName: 'fourths' },
    { fraction: '⅕', denominator: '5', meaning: 'Cut into 5 equal pieces', pieceName: 'fifths' },
    { fraction: '⅛', denominator: '8', meaning: 'Cut into 8 equal pieces', pieceName: 'eighths' },
    { fraction: '1/10', denominator: '10', meaning: 'Cut into 10 equal pieces', pieceName: 'tenths' },
  ]

  const commonMistakes = [
    {
      mistake: 'Thinking a bigger denominator means a bigger fraction',
      fix: 'The opposite is true. ⅛ is smaller than ½ — because cutting into 8 pieces makes each piece smaller than cutting into 2.',
    },
    {
      mistake: 'Confusing numerator and denominator',
      fix: 'Remember: Denominator is on the Down side (bottom). It tells you how many equal pieces the whole was divided into.',
    },
    {
      mistake: 'Thinking the denominator can be zero',
      fix: 'You cannot divide something into 0 pieces — so the denominator can never be 0. It must always be 1 or more.',
    },
  ]

  const relatedPages = [
    { name: 'What Is a Numerator?', href: '/what-is-a-numerator', desc: 'The top number explained' },
    { name: 'How to Simplify Fractions', href: '/how-to-simplify-fractions', desc: 'Reducing fractions step by step' },
    { name: 'How to Read Decimals', href: '/how-to-read-decimals', desc: 'Tenths, hundredths and beyond' },
    { name: 'Fractions Worksheets', href: '/fractions-practice', desc: 'Practice what you learned' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-green">Fractions Guide</div>
          <h1 className="practice-title">What Is a Denominator?</h1>
          <p className="practice-subtitle practice-subtitle-green">The Bottom Number Explained</p>
          <p className="practice-description">
            The denominator is the bottom number in a fraction — and it has one job: to tell you how many equal pieces the whole was cut into.
            Once that clicks, fractions stop being confusing.
          </p>
          <div className="practice-cta-container">
            <Link href="/fractions-practice" className="practice-button practice-button-green" aria-label="Practice fractions worksheets">
              Practice Fractions Worksheets
            </Link>
          </div>
        </section>

        {/* Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The One Rule:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '0.25rem' }}>
            Denominator = how many equal pieces the whole is divided into
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            It lives on the bottom. It names the size of each piece. Bigger denominator = smaller pieces.
          </p>
        </div>

        {/* Numerator vs Denominator visual */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Numerator vs Denominator — Side by Side</h2>
            <div className="info-card" style={{ background: 'var(--background)', textAlign: 'center', fontSize: '1.1rem', lineHeight: '2.2' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', fontFamily: 'monospace' }}>3</div>
              <div style={{ fontSize: '1.5rem', color: 'var(--border)', fontFamily: 'monospace' }}>─────</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary)', fontFamily: 'monospace' }}>4</div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '0.75rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.95rem' }}>↑ Numerator<br />how many pieces you have</div>
                <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.95rem' }}>↑ Denominator<br />how many pieces in total</div>
              </div>
            </div>
          </div>
        </section>

        {/* Concepts */}
        <section className="practice-section">
          <h2 className="practice-section-title">Understanding the Denominator</h2>
          <p className="practice-section-subtitle">Four ideas that make the bottom number make sense</p>
          <div className="practice-grid">
            {concepts.map((item, index) => {
              const { bgColor, textColor, borderStyle, stepColor, detailColor } = getCardStyle(index)
              return (
                <div key={index} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem', background: bgColor, color: textColor, border: borderStyle }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: stepColor }}>{item.step}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: textColor }}>{item.instruction}</div>
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'monospace', whiteSpace: 'pre-line' }}>{item.visual}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: detailColor }}>{item.detail}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Examples */}
        <section className="practice-section">
          <h2 className="practice-section-title">Denominators in Action</h2>
          <p className="practice-section-subtitle">Each denominator names a different piece size</p>
          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '0.25rem' }}>{ex.fraction}</div>
                <div className="practice-grade-title" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Denominator: {ex.denominator}</div>
                <div className="text-p" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{ex.meaning}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: '600' }}>Each piece = {ex.pieceName}</div>
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
          Read our <Link href="/what-is-a-numerator" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>numerator guide</Link> alongside this one — together they complete the picture of how fractions work.
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
              Fractions make sense when children have a strong sense of "parts of a whole" from early on. This course builds the number sense foundation — composing and decomposing numbers, equal sharing, and the conceptual groundwork that makes numerators and denominators feel natural rather than arbitrary.
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
            <h2 className="practice-cta-title">Ready to Practice Fractions?</h2>
            <p className="practice-cta-text">Generate free custom fractions worksheets — identifying, comparing, and simplifying — to build real understanding.</p>
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
