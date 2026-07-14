// app/weekly-math-planner/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weekly Math Planner Generator | Free Homeschool Planning Tool | HomeschoolMath.site',
  description: 'Free tool that generates unlimited weekly math planners with structured daily lesson blocks, fluency drills, and progress tracking. Plan your week in 2 minutes.',
  alternates: {
    canonical: 'https://homeschoolmath.site/weekly-math-planner',
  },
}

export default function WeeklyMathPlanner() {
  const includes = [
    { icon: '✓', item: 'Custom weekly date range with your "I Can" learning goals' },
    { icon: '✓', item: '5 structured daily lesson blocks, Monday through Friday' },
    { icon: '✓', item: 'Concept, fluency drill, assignment, and materials fields per day' },
    { icon: '✓', item: 'Completion checkboxes and grade tracking built in' },
    { icon: '✓', item: 'Weekly reflection section for struggles, wins, and next steps' },
  ]

  const steps = [
    { step: '1', title: 'Open the tool', desc: 'No installation needed. Opens directly in any web browser.' },
    { step: '2', title: 'Fill in your week', desc: 'Takes about 2 minutes — student, dates, and daily plans.' },
    { step: '3', title: 'Generate and print', desc: 'Your PDF planner downloads instantly, ready to print or save.' },
  ]

  const relatedPages = [
    { name: 'Year-Long Curriculum Planner', href: '/year-long-curriculum-planner', desc: 'Free yearly planning workbook' },
    { name: 'Notion Progress Dashboard', href: '/notion-progress-dashboard', desc: 'Free tracking template' },
    { name: 'All Free Resources', href: '/free-guides', desc: 'View all free guides' },
    { name: 'All Courses & Tools', href: '/resources', desc: 'Full resource hub' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge" style={{ background: '#C2410C' }}>Free Planning Tool</div>
          <h1 className="practice-title">Stop Scrambling to Plan Each Week</h1>
          <p className="practice-subtitle" style={{ color: '#C2410C' }}>
            The Weekly Math Planner Generator
          </p>
          <p className="practice-description">
            Scattered lesson notes and forgotten materials make every week harder than it needs to be.
            This free tool generates unlimited personalized weekly planners in seconds, so you always
            know exactly what today looks like.
          </p>
          <div className="practice-cta-container">
            <a
              href="https://homeschoolmath.gumroad.com/l/bkltc"
              target="_blank"
              rel="noopener noreferrer"
              className="practice-button"
              style={{ background: '#C2410C' }}
              aria-label="Download the free Weekly Math Planner Generator"
            >
              Enter 0 in the price field to download at no cost. No payment information required.
              Download Free — No Registration Required
            </a>
            <p className="practice-info-box">HTML tool · Works in any browser · Unlimited use</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="practice-section">
          <h2 className="practice-section-title">How It Works</h2>
          <p className="practice-section-subtitle">Three steps. A fresh planner every week, forever.</p>
          <div className="practice-grid">
            {steps.map((item, i) => (
              <div key={i} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{
                  background: '#C2410C', color: 'white', fontWeight: '800', fontSize: '1.5rem',
                  width: '48px', height: '48px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem'
                }}>{item.step}</div>
                <p style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {item.title}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included Box */}
        <section className="practice-section">
          <h2 className="practice-section-title">What Is Inside Each Planner</h2>
          <div className="info-card" style={{ border: '2px solid #C2410C' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Weekly Math Planner
              </h3>
              <span style={{ background: '#C2410C', color: 'white', fontWeight: '800', padding: '0.3rem 1rem', borderRadius: '999px' }}>
                FREE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                  <span style={{ color: '#C2410C', fontWeight: '700' }}>{item.icon}</span> {item.item}
                </p>
              ))}
            </div>
            <a
              href="https://homeschoolmath.gumroad.com/l/bkltc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#C2410C' }}
              aria-label="Download the free Weekly Math Planner Generator"
            >
              Download Free Planner →
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              Works on any device · No installation · Generate a new one every week
            </p>
          </div>
        </section>

        {/* Included Free With Courses */}
        <section className="practice-section">
          <div className="info-card" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Already Included Free With Two of Our Courses
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
              This planner comes bundled at no extra cost with{' '}
              <Link href="/number-sense-foundations" style={{ color: '#C2410C', fontWeight: '600' }}>Number Sense Foundations</Link>{' '}
              and{' '}
              <Link href="/subtraction-in-30-days" style={{ color: '#C2410C', fontWeight: '600' }}>Subtraction in 30 Days</Link>.
              If you already own either course, check your Gumroad library — you may already have this.
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="practice-section">
          <h2 className="practice-section-title">More Free Resources</h2>
          <div className="practice-nav-grid">
            {relatedPages.map((page, i) => (
              <Link key={i} href={page.href} className="practice-nav-card" aria-label={`Go to ${page.name}`}>
                <div className="practice-nav-label">{page.name}</div>
                <div className="practice-nav-desc">{page.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="practice-cta-section">
          <div className="practice-cta-box" style={{ background: '#7C2D12' }}>
            <h2 className="practice-cta-title">Download the Free Planner</h2>
            <p className="practice-cta-text">
              Get organized, stay consistent, and track progress all year long — one week at a time.
            </p>
            <div className="practice-cta-container">
              <a
                href="https://homeschoolmath.gumroad.com/l/bkltc"
                target="_blank"
                rel="noopener noreferrer"
                className="practice-cta-button"
                style={{ color: '#7C2D12' }}
                aria-label="Download the free Weekly Math Planner Generator"
              >
                Download Free — Weekly Math Planner
              </a>
              <p className="practice-cta-note">Free · HTML tool · No registration required</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}