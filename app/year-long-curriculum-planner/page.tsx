// app/year-long-curriculum-planner/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Year-Long Curriculum Planner | Free Homeschool Workbook Generator',
  description: 'Free tool that generates a complete 6-16 page curriculum workbook with unit tracking, assessment logs, and quarterly reflections.',
  alternates: {
    canonical: 'https://homeschoolmath.site/year-long-curriculum-planner',
  },
}

export default function YearLongCurriculumPlanner() {
  const includes = [
    { icon: '✓', item: 'Cover page with student name, grade, subject, and yearly goals' },
    { icon: '✓', item: 'One detail page per unit — timeline, standards, materials, progress notes' },
    { icon: '✓', item: 'Complete assessment tracker with target and actual scores' },
    { icon: '✓', item: 'Quarterly reflection pages for pacing and goal adjustments' },
    { icon: '✓', item: '16 page sample planner included so you know exactly what you will get' },
  ]

  const steps = [
    { step: '1', title: 'Open the tool', desc: 'No installation needed. Opens directly in any web browser.' },
    { step: '2', title: 'Fill in your year', desc: 'Student info, curriculum source, yearly goals, and unit count.' },
    { step: '3', title: 'Generate your PDF', desc: 'Your complete 6 to 16 page workbook downloads instantly.' },
  ]

  const relatedPages = [
    { name: 'Weekly Math Planner', href: '/weekly-math-planner', desc: 'Free weekly planner generator' },
    { name: 'Notion Progress Dashboard', href: '/notion-progress-dashboard', desc: 'Free tracking template' },
    { name: 'All Free Resources', href: '/free-guides', desc: 'View all free guides' },
    { name: 'All Courses & Tools', href: '/resources', desc: 'Full resource hub' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge" style={{ background: '#1B2A4A' }}>Free Planning Tool</div>
          <h1 className="practice-title">Plan Your Entire Homeschool Year in 20 Minutes</h1>
          <p className="practice-subtitle" style={{ color: '#3B82F6' }}>
            The Year-Long Curriculum Planner Generator
          </p>
          <p className="practice-description">
            No more juggling spreadsheets, sticky notes, and vague curriculum guides. This free tool
            generates a professional multi-page workbook that keeps your entire school year organized
            in one place, so you never have to wonder what you covered last quarter.
          </p>
          <div className="practice-cta-container">
            <a
              href="https://homeschoolmath.gumroad.com/l/btoecv"
              target="_blank"
              rel="noopener noreferrer"
              className="practice-button"
              style={{ background: '#1B2A4A' }}
              aria-label="Download the free Year-Long Curriculum Planner Generator"
            >
              Enter 0 in the price field to download at no cost. No payment information required.
              Download Free — No Registration Required
            </a>
            <p className="practice-info-box">HTML tool · Works in any browser · Instant download</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="practice-section">
          <h2 className="practice-section-title">How It Works</h2>
          <p className="practice-section-subtitle">Three steps. One organized year.</p>
          <div className="practice-grid">
            {steps.map((item, i) => (
              <div key={i} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{
                  background: '#1B2A4A', color: 'white', fontWeight: '800', fontSize: '1.5rem',
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
          <h2 className="practice-section-title">What Is Inside the Workbook</h2>
          <div className="info-card" style={{ border: '2px solid #1B2A4A' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Year-Long Curriculum Planner
              </h3>
              <span style={{ background: '#1B2A4A', color: 'white', fontWeight: '800', padding: '0.3rem 1rem', borderRadius: '999px' }}>
                FREE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                  <span style={{ color: '#1B2A4A', fontWeight: '700' }}>{item.icon}</span> {item.item}
                </p>
              ))}
            </div>
            <a
              href="https://homeschoolmath.gumroad.com/l/btoecv"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#1B2A4A' }}
              aria-label="Download the free Year-Long Curriculum Planner Generator"
            >
              Download Free Planner →
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              Works on any device · No installation · Use every year, for every student
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
              <Link href="/subtraction-in-30-days" style={{ color: '#3B82F6', fontWeight: '600' }}>Subtraction in 30 Days</Link>{' '}
              and{' '}
              <Link href="/multiplication-division-foundations" style={{ color: '#3B82F6', fontWeight: '600' }}>Multiplication & Division Foundations</Link>.
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
          <div className="practice-cta-box" style={{ background: '#0D1B33' }}>
            <h2 className="practice-cta-title">Download the Free Planner</h2>
            <p className="practice-cta-text">
              Stop planning on the fly. Map out your entire year and know exactly what you have covered.
            </p>
            <div className="practice-cta-container">
              <a
                href="https://homeschoolmath.gumroad.com/l/btoecv"
                target="_blank"
                rel="noopener noreferrer"
                className="practice-cta-button"
                style={{ color: '#0D1B33' }}
                aria-label="Download the free Year-Long Curriculum Planner Generator"
              >
                Download Free — Year-Long Curriculum Planner
              </a>
              <p className="practice-cta-note">Free · HTML tool · No registration required</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}