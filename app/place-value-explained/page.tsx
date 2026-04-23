// app/place-value-explained/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Place Value Explained | Free Visual Guide for Kids | HomeschoolMath.site',
  description: 'Learn place value with a simple visual guide. Understand ones, tens, hundreds, and why the position of a digit matters. Perfect for 1st-3rd graders.',
  alternates: {
    canonical: 'https://homeschoolmath.site/place-value-explained',
  },
}

export default function PlaceValueExplained() {
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
      step: 'What is Place Value?',
      instruction: 'Position tells the value',
      detail: 'In the number 47, the digit 4 means 40 (4 tens) and the digit 7 means 7 (7 ones). The same digit can mean different things depending on where it sits.',
      visual: '4️⃣7️⃣ → 4️⃣0️⃣ + 7️⃣',
    },
    {
      step: 'Ones Place',
      instruction: 'The rightmost position',
      detail: 'The ones place tells you how many single units. In 47, the 7 is in the ones place — it means 7 ones, which is just 7.',
      visual: '⚫⚫⚫⚫⚫ ⚫⚫ (7 ones)',
    },
    {
      step: 'Tens Place',
      instruction: 'The second position from the right',
      detail: 'The tens place tells you how many groups of ten. In 47, the 4 is in the tens place — it means 4 tens, which is 40.',
      visual: '🔟🔟🔟🔟 (4 tens)',
    },
    {
      step: 'Putting It Together',
      instruction: '4 tens + 7 ones = 47',
      detail: 'When you combine 4 tens (40) and 7 ones (7), you get the full number: 40 + 7 = 47.',
      visual: '🔟🔟🔟🔟 + ⚫⚫⚫⚫⚫ ⚫⚫ = 4️⃣7️⃣',
    },
    {
      step: 'Hundreds Place',
      instruction: 'The third position from the right',
      detail: 'In 347, the 3 is in the hundreds place — it means 3 hundreds, which is 300.',
      visual: '🟩🟩🟩 (3 hundreds)',
    },
    {
      step: 'The Zero Matters',
      instruction: 'Zero is a placeholder',
      detail: 'In 205, the 0 means there are no tens. 205 is 2 hundreds + 0 tens + 5 ones = 200 + 5.',
      visual: '2️⃣0️⃣5️⃣ → 2️⃣0️⃣0️⃣ + 0️⃣ + 5️⃣',
    },
    {
      step: 'Thousands and Beyond',
      instruction: 'Same pattern continues',
      detail: 'Each position is 10 times larger than the one to its right: ones → tens → hundreds → thousands.',
      visual: '1️⃣,0️⃣0️⃣0️⃣ | 1️⃣0️⃣0️⃣ | 1️⃣0️⃣ | 1️⃣',
    },
  ]

  const examples = [
    { number: '52', breakdown: '5 tens + 2 ones', value: '50 + 2 = 52' },
    { number: '84', breakdown: '8 tens + 4 ones', value: '80 + 4 = 84' },
    { number: '136', breakdown: '1 hundred + 3 tens + 6 ones', value: '100 + 30 + 6 = 136' },
    { number: '205', breakdown: '2 hundreds + 0 tens + 5 ones', value: '200 + 0 + 5 = 205' },
    { number: '470', breakdown: '4 hundreds + 7 tens + 0 ones', value: '400 + 70 + 0 = 470' },
    { number: '3,284', breakdown: '3 thousands + 2 hundreds + 8 tens + 4 ones', value: '3,000 + 200 + 80 + 4 = 3,284' },
  ]

  const commonMistakes = [
    {
      mistake: 'Writing 52 as 5 + 2 = 7',
      fix: 'Remember: 5 is in the tens place, so it means 50, not 5. 52 = 50 + 2, not 5 + 2.',
    },
    {
      mistake: 'Confusing 305 with 35',
      fix: 'The zero matters. 305 has 3 hundreds (300) and 5 ones. 35 has 3 tens (30) and 5 ones. They are different numbers.',
    },
    {
      mistake: 'Saying "and" for the tens place',
      fix: 'When reading 47, say "forty-seven" not "four seven." The word "forty" means 4 tens.',
    },
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast multiplication method' },
    { name: 'Borrowing in Subtraction', href: '/borrowing-in-subtraction', desc: 'Step-by-step for kids' },
    { name: 'Regrouping in Addition', href: '/regrouping-in-addition-explained', desc: 'Why carrying works' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'Multiplication made easy' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Place Value Guide
          </div>
          <h1 className="practice-title">
            Place Value Explained
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            Why the Position of a Digit Changes Its Value
          </p>
          <p className="practice-description">
            Most kids learn to read numbers without understanding why 4 in 47 means forty.
            This guide makes place value visible — so the "why" clicks.
          </p>
          <div className="practice-cta-container">
            <Link href="/place-value" className="practice-button practice-button-blue" aria-label="Practice place value worksheets">
              Build Place Value Fluency
            </Link>
          </div>
        </section>

        {/* Key Insight Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Key Insight:</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary)' }}>
            The same digit • different position • different value
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            3 means 3, but 30 means 3 tens, and 300 means 3 hundreds.
          </p>
        </div>

        {/* The Explanation */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Understanding Place Value
          </h2>
          <p className="practice-section-subtitle">
            Each position has a different value — 10 times greater than the position to its right
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

        {/* Why Place Value Matters */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Why Place Value Matters
            </h2>
            <p className="text-p" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              Without place value, numbers wouldn't work. The digit "3" means different things in different numbers:
            </p>
            <div className="info-card" style={{ background: 'var(--background)', fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: '2' }}>
              <div>3 = 3 ones = 3</div>
              <div>30 = 3 tens = 30</div>
              <div>300 = 3 hundreds = 300</div>
              <div style={{ color: 'var(--primary)', fontWeight: '700' }}>3,000 = 3 thousands = 3,000</div>
            </div>
            <p className="text-p" style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Visual:</strong> ⚫ (one) → 🔟 (ten) → 🟩 (hundred) → 🔲 (thousand)
            </p>
          </div>
        </section>

        {/* Try It Yourself */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Try These Examples
          </h2>
          <p className="practice-section-subtitle">
            Break down each number into its place values
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  {ex.number}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  {ex.breakdown}
                </div>
                <div className="text-p" style={{ fontFamily: 'monospace', marginBottom: '0.75rem' }}>
                  {ex.value}
                </div>
                <div className="practice-subtitle practice-subtitle-blue" style={{ fontSize: '1rem', fontWeight: '600' }}>
                  ✓
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

        {/* Visual Place Value Chart */}
        <section className="practice-section">
          <div className="info-card" style={{ textAlign: 'center' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Place Value Chart
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '0.5rem',
              background: 'var(--surface)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontWeight: '700', color: 'var(--primary)' }}>Thousands</div>
              <div style={{ fontWeight: '700', color: 'var(--primary)' }}>Hundreds</div>
              <div style={{ fontWeight: '700', color: 'var(--primary)' }}>Tens</div>
              <div style={{ fontWeight: '700', color: 'var(--primary)' }}>Ones</div>
              <div>🔲</div>
              <div>🟩</div>
              <div>🔟</div>
              <div>⚫</div>
              <div>1,000</div>
              <div>100</div>
              <div>10</div>
              <div>1</div>
            </div>
            <p className="text-p" style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.9rem' }}>
              Each place is 10 times larger than the place to its right.
            </p>
          </div>
        </section>

        {/* Internal Contextual Link */}
        <p className="text-p" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Place value is the foundation for <Link href="/regrouping-in-addition-explained" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>regrouping in addition</Link> and <Link href="/borrowing-in-subtraction" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>borrowing in subtraction</Link>.
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
              Place value is the foundation that all other math sits on. This course builds genuine number sense — not just counting, but understanding what numbers mean and how they relate to each other. Covers place value, composing and decomposing numbers, addition and subtraction concepts, and the mental math strategies that make later arithmetic feel intuitive rather than effortful.
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
              Ready to Practice Place Value?
            </h2>
            <p className="practice-cta-text">
              Generate free custom place value worksheets — ones, tens, hundreds — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/place-value" className="practice-cta-button practice-cta-button-blue" aria-label="Generate place value worksheets">
                Build Place Value Fluency
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