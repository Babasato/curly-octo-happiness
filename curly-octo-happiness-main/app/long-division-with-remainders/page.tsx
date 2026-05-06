// app/long-division-with-remainders/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Long Division with Remainders Explained | Step-by-Step Guide | HomeschoolMath.site',
  description: 'Learn how to do long division with remainders step by step. Clear visual guide for kids in grades 4–6. Includes worked examples and common mistakes to avoid.',
  alternates: {
    canonical: 'https://homeschoolmath.site/long-division-with-remainders',
  },
}

export default function LongDivisionWithRemainders() {
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
      step: '85 ÷ 4 = ?',
      instruction: 'Start with the problem',
      detail: 'We need to divide 85 by 4. The chant is: Divide → Multiply → Subtract → Bring down. Repeat.',
      visual: '85 ÷ 4',
    },
    {
      step: 'Step 1: Divide',
      instruction: 'How many times does 4 go into 8?',
      detail: '4 goes into 8 exactly 2 times. Write 2 above the 8 in the tens place.',
      visual: '8 ÷ 4 = 2',
    },
    {
      step: 'Step 2: Multiply',
      instruction: '2 × 4 = 8',
      detail: 'Multiply your answer (2) by the divisor (4). Write 8 below the 8.',
      visual: '2 × 4 = 8',
    },
    {
      step: 'Step 3: Subtract',
      instruction: '8 − 8 = 0',
      detail: 'Subtract. The result is 0. Bring down the next digit (5).',
      visual: '8 − 8 = 0 → bring down 5',
    },
    {
      step: 'Step 4: Divide again',
      instruction: 'How many times does 4 go into 5?',
      detail: '4 goes into 5 once (4 × 1 = 4). Write 1 above the 5. Multiply: 1 × 4 = 4.',
      visual: '5 ÷ 4 = 1 remainder 1',
    },
    {
      step: 'Step 5: Find the remainder',
      instruction: '5 − 4 = 1',
      detail: 'Subtract: 5 − 4 = 1. Nothing left to bring down. The remainder is 1.',
      visual: '85 ÷ 4 = 21 R1 ✓',
    },
  ]

  const examples = [
    { problem: '47 ÷ 3', workthrough: '3 into 4 = 1 r1 → bring 7 → 3 into 17 = 5 r2', answer: '15 R2' },
    { problem: '63 ÷ 5', workthrough: '5 into 6 = 1 r1 → bring 3 → 5 into 13 = 2 r3', answer: '12 R3' },
    { problem: '91 ÷ 6', workthrough: '6 into 9 = 1 r3 → bring 1 → 6 into 31 = 5 r1', answer: '15 R1' },
    { problem: '78 ÷ 7', workthrough: '7 into 7 = 1 r0 → bring 8 → 7 into 8 = 1 r1', answer: '11 R1' },
    { problem: '100 ÷ 9', workthrough: '9 into 10 = 1 r1 → bring 0 → 9 into 10 = 1 r1', answer: '11 R1' },
    { problem: '58 ÷ 4', workthrough: '4 into 5 = 1 r1 → bring 8 → 4 into 18 = 4 r2', answer: '14 R2' },
  ]

  const commonMistakes = [
    {
      mistake: 'Forgetting the remainder at the end',
      fix: 'After the final subtraction, if there is a number left over that is smaller than the divisor — that is your remainder. Write it as "R" followed by the number.',
    },
    {
      mistake: 'Writing a remainder larger than the divisor',
      fix: 'The remainder must always be smaller than the divisor. If it isn\'t, you haven\'t divided enough times — go back and increase your quotient by 1.',
    },
    {
      mistake: 'Forgetting to bring down the next digit',
      fix: 'After every subtraction, ask: "Is there another digit to bring down?" If yes, bring it down before dividing again.',
    },
  ]

  const relatedPages = [
    { name: 'Long Division Steps for Kids', href: '/long-division-steps-for-kids', desc: 'The basic method without remainders' },
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding digit positions' },
    { name: 'Division Worksheets', href: '/division-practice', desc: 'Practice what you learned' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">Division Guide</div>
          <h1 className="practice-title">Long Division with Remainders</h1>
          <p className="practice-subtitle practice-subtitle-blue">Step-by-Step Visual Guide</p>
          <p className="practice-description">
            Remainders trip up most kids because they don't know what to do when the number doesn't divide evenly.
            This guide shows exactly what a remainder means — and how to find it every time without guessing.
          </p>
          <div className="practice-cta-container">
            <Link href="/division-practice" className="practice-button practice-button-blue" aria-label="Practice division worksheets">
              Practice Division Worksheets
            </Link>
          </div>
        </section>

        {/* Rule Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Chant:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '0.25rem' }}>
            Divide → Multiply → Subtract → Bring Down → Repeat
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            When nothing is left to bring down and you can't divide again — that leftover number is your remainder.
          </p>
        </div>

        {/* Steps */}
        <section className="practice-section">
          <h2 className="practice-section-title">How to Divide with Remainders</h2>
          <p className="practice-section-subtitle">Let's use 85 ÷ 4 as our example</p>
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

        {/* What remainder means */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What Does a Remainder Actually Mean?</h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              A remainder is what is left over when a number cannot be divided into perfectly equal groups.
              It is always smaller than the divisor — if it isn't, you haven't divided enough times.
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '2' }}>
              <div>85 ÷ 4 = ?</div>
              <div>4 × 21 = 84 (closest without going over)</div>
              <div>85 − 84 = 1 left over</div>
              <div style={{ color: 'var(--primary)', fontWeight: '700' }}>= 21 remainder 1 → written as 21 R1 ✓</div>
            </div>
            <p className="text-p" style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: 0 }}>
              <strong>Real world example:</strong> 85 sweets shared equally between 4 children. Each child gets 21 sweets and 1 is left over.
            </p>
          </div>
        </section>

        {/* Examples */}
        <section className="practice-section">
          <h2 className="practice-section-title">Try These Examples</h2>
          <p className="practice-section-subtitle">Same four steps every time — the remainder appears at the very end</p>
          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{ex.problem}</div>
                <div className="text-p" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace', marginBottom: '0.5rem', lineHeight: '1.6' }}>{ex.workthrough}</div>
                <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1.3rem', fontWeight: '800' }}>= {ex.answer} ✓</div>
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
          Build on the basics first with our <Link href="/long-division-steps-for-kids" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>long division steps guide</Link>, then come back here for remainders.
        </p>

        {/* Course Card */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Multiplication & Division Foundations</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>GRADES 3–5</p>
              </div>
              <span className="practice-badge practice-badge-blue" style={{ fontSize: '1rem', padding: '6px 12px', whiteSpace: 'nowrap' }}>$57</span>
            </div>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Long division with remainders is the point where many kids hit a wall — not because it's too hard, but because the conceptual link between multiplication and division was never made solid. This course builds both operations together from equal groups through to long division, so the procedure makes sense rather than being a set of steps to memorise.
            </p>
            <Link href="https://homeschoolmath.gumroad.com/l/csfto" target="_blank" rel="noopener noreferrer" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', width: '100%' }} aria-label="Purchase Multiplication and Division Foundations course on Gumroad">
              Get Multiplication & Division Foundations on Gumroad →
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
          <div className="practice-cta-box practice-cta-box-blue">
            <h2 className="practice-cta-title">Ready to Practice Division?</h2>
            <p className="practice-cta-text">Generate free custom division worksheets — with and without remainders — to build real fluency.</p>
            <div className="practice-cta-container">
              <Link href="/division-practice" className="practice-cta-button practice-cta-button-blue" aria-label="Generate division practice worksheets">
                Practice Division Worksheets
              </Link>
              <p className="practice-cta-note">Free • No registration required • 10 worksheets per day</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}