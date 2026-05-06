// app/how-to-tell-time/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Tell Time | A Simple Visual Guide for Kids | HomeschoolMath.site',
  description: 'Learn how to tell time on an analog clock step by step. Understand the hour hand, minute hand, and how to read minutes past and minutes to the hour.',
  alternates: {
    canonical: 'https://homeschoolmath.site/how-to-tell-time',
  },
}

export default function HowToTellTime() {
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
      step: 'The clock face',
      instruction: 'Two hands and 12 numbers',
      detail: 'The short hand is the hour hand. The long hand is the minute hand. The numbers 1-12 go around the clock.',
      visual: '🕐 12 at top, 6 at bottom',
    },
    {
      step: 'Read the hour first',
      instruction: 'Look at the short hand',
      detail: 'The hour hand tells what hour it is. It points to a number or between two numbers.',
      visual: 'Short hand → hour',
    },
    {
      step: 'Count by 5s for minutes',
      instruction: 'Each number = 5 minutes',
      detail: '12 = 0 min, 1 = 5 min, 2 = 10 min, 3 = 15 min, 4 = 20 min, 5 = 25 min, 6 = 30 min...',
      visual: '1→5, 2→10, 3→15, 4→20, 5→25, 6→30',
    },
    {
      step: 'Read the minutes',
      instruction: 'Look at the long hand',
      detail: 'Count how many minutes past the hour. If the long hand points to 4, it is 20 minutes past the hour.',
      visual: 'Long hand at 4 → :20',
    },
    {
      step: 'Put it together',
      instruction: 'Hour + Minutes = The time',
      detail: 'Hour hand past 3, minute hand at 4 = 3:20 (twenty past three).',
      visual: '3:20 → "twenty past three"',
    },
    {
      step: 'Minutes to the next hour',
      instruction: 'When minute hand passes 6',
      detail: 'After 30 minutes, we say minutes TO the next hour. 3:45 = "quarter to four".',
      visual: '3:45 → "quarter to four"',
    },
  ]

  const examples = [
    { time: '2:10', hourHand: 'past 2', minuteHand: '2 → 10 min', reading: 'ten past two' },
    { time: '4:15', hourHand: 'past 4', minuteHand: '3 → 15 min', reading: 'quarter past four' },
    { time: '6:30', hourHand: 'between 6 and 7', minuteHand: '6 → 30 min', reading: 'half past six' },
    { time: '8:45', hourHand: 'between 8 and 9', minuteHand: '9 → 45 min', reading: 'quarter to nine' },
    { time: '10:50', hourHand: 'between 10 and 11', minuteHand: '10 → 50 min', reading: 'ten to eleven' },
    { time: '12:05', hourHand: 'at 12', minuteHand: '1 → 5 min', reading: 'five past twelve' },
  ]

  const commonMistakes = [
    {
      mistake: 'Confusing the hour and minute hands',
      fix: 'Remember: short = hour, long = minutes. The short hand moves slowly.',
    },
    {
      mistake: 'Reading 3:45 as "forty-five past three"',
      fix: 'After 30 minutes, say minutes TO the next hour. 3:45 = "quarter to four."',
    },
    {
      mistake: 'Not counting by 5s for minutes',
      fix: 'Each number is 5 minutes. Practice: 1=5, 2=10, 3=15, 4=20, 5=25, 6=30, 7=35, 8=40, 9=45, 10=50, 11=55, 12=60/0.',
    },
  ]

  const relatedPages = [
    { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding digits' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'Multiplication made easy' },
    { name: 'What Is a Numerator?', href: '/what-is-a-numerator', desc: 'Fraction basics' },
    { name: 'How to Read Decimals', href: '/how-to-read-decimals', desc: 'Decimal place value' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Time Guide
          </div>
          <h1 className="practice-title">
            How to Tell Time
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            A Simple Visual Guide for Kids
          </p>
          <p className="practice-description">
            Telling time on an analog clock takes practice. This guide breaks it down — hour hand, minute hand, and how to read minutes past and minutes to the hour.
          </p>
          <div className="practice-cta-container">
            <Link href="/" className="practice-button practice-button-blue" aria-label="Generate time-telling worksheets">
              Practice Telling Time
            </Link>
          </div>
        </section>

        {/* Key Insight Card */}
        <div className="info-card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Two Rules:</h3>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary)' }}>
            1. Short hand = HOUR
          </p>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: 0 }}>
            2. Long hand = MINUTES (count by 5s)
          </p>
        </div>

        {/* The Explanation */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            How to Read an Analog Clock
          </h2>
          <p className="practice-section-subtitle">
            Step by step — from the clock face to telling exact time
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
                    <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
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

        {/* Minute Reference Chart */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
              Minute Reference — Count by 5s
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '0.5rem',
              background: 'var(--surface)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              textAlign: 'center'
            }}>
              <div>1 → 5 min</div>
              <div>2 → 10 min</div>
              <div>3 → 15 min</div>
              <div>4 → 20 min</div>
              <div>5 → 25 min</div>
              <div>6 → 30 min</div>
              <div>7 → 35 min</div>
              <div>8 → 40 min</div>
              <div>9 → 45 min</div>
              <div>10 → 50 min</div>
              <div>11 → 55 min</div>
              <div>12 → 60/0 min</div>
            </div>
            <p className="text-p" style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.85rem', textAlign: 'center' }}>
              💡 When the long hand points to a number, multiply by 5 to get the minutes!
            </p>
          </div>
        </section>

        {/* Practice Examples */}
        <section className="practice-section">
          <h2 className="practice-section-title">
            Practice Telling Time
          </h2>
          <p className="practice-section-subtitle">
            Cover the reading, say the time aloud, then check
          </p>

          <div className="practice-grid">
            {examples.map((ex, index) => (
              <div key={index} className="practice-card" style={{ textAlign: 'center' }}>
                <div className="practice-grade-title" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {ex.time}
                </div>
                <div className="text-p" style={{ fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>
                  {ex.reading}
                </div>
                <div className="text-p" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {ex.hourHand} • {ex.minuteHand}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vocabulary Guide */}
        <section className="practice-section">
          <div className="info-card" style={{ textAlign: 'center' }}>
            <h2 className="contact-section-title" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
              Time-Telling Vocabulary
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '0.5rem',
              marginTop: '1rem'
            }}>
              <div><strong>o'clock</strong><br/>:00 (exactly on the hour)</div>
              <div><strong>half past</strong><br/>:30 (thirty minutes past)</div>
              <div><strong>quarter past</strong><br/>:15 (fifteen minutes past)</div>
              <div><strong>quarter to</strong><br/>:45 (fifteen minutes to next hour)</div>
              <div><strong>ten past</strong><br/>:10</div>
              <div><strong>twenty to</strong><br/>:40</div>
            </div>
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
          Telling time uses skip counting! Learn <Link href="/skip-counting-explained" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>skip counting</Link> to read minutes faster.
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
              Telling time requires number sense, skip counting, and understanding fractions (quarter past, half past). This course builds the foundational math skills that make time-telling intuitive — along with place value, composing numbers, and mental math strategies.
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
              Ready to Practice Telling Time?
            </h2>
            <p className="practice-cta-text">
              Generate free custom time-telling worksheets — from reading clocks to elapsed time — to build fluency and confidence.
            </p>
            <div className="practice-cta-container">
              <Link href="/" className="practice-cta-button practice-cta-button-blue" aria-label="Generate time-telling worksheets">
                Practice Telling Time
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