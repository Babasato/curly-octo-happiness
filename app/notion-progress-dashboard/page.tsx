// app/notion-progress-dashboard/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Notion Math Progress Dashboard | Tracking Hours, Mastery & Compliance',
  description: 'Free Notion template for homeschool math tracking with auto-calculating hours, visual mastery bars, and 30-second compliance portfolio exports.',
  alternates: {
    canonical: 'https://homeschoolmath.site/notion-progress-dashboard',
  },
}

export default function NotionProgressDashboard() {
  const includes = [
    { icon: '✓', item: '7 complete pages — dashboard, student profiles, skills tracker, and more' },
    { icon: '✓', item: 'Auto-calculating teaching hours for compliance tracking' },
    { icon: '✓', item: 'Visual mastery progress bars with stuck-skill alerts' },
    { icon: '✓', item: '13 pre-built views including mobile-friendly daily lesson view' },
    { icon: '✓', item: 'Sample data included — 2 students, 10 skills, 10 lessons, ready to explore' },
  ]

  const pages = [
    { label: 'Main Dashboard', desc: 'See everything at a glance' },
    { label: 'Student Profiles', desc: 'Auto-calculating teaching hours per student' },
    { label: 'Skills Mastery Tracker', desc: 'Visual progress bars plus stuck-skill alerts' },
    { label: 'Lesson Plans & Schedule', desc: 'Calendar and daily views in one place' },
    { label: 'Assessment Log', desc: 'Track tests, scores, and follow-ups' },
    { label: 'Resource Library', desc: 'Organize every material you use' },
    { label: 'Curriculum Planning', desc: 'Map your entire year at a glance' },
  ]

  const relatedPages = [
    { name: 'Weekly Math Planner', href: '/weekly-math-planner', desc: 'Free weekly planner generator' },
    { name: 'Year-Long Curriculum Planner', href: '/year-long-curriculum-planner', desc: 'Free yearly planning workbook' },
    { name: 'All Free Resources', href: '/free-guides', desc: 'View all free guides' },
    { name: 'All Courses & Tools', href: '/resources', desc: 'Full resource hub' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge" style={{ background: '#0D9488' }}>Free Notion Template</div>
          <h1 className="practice-title">Stop Tracking Math Progress in Spreadsheets</h1>
          <p className="practice-subtitle" style={{ color: '#0D9488' }}>
            The Notion Math Progress Dashboard
          </p>
          <p className="practice-description">
            Spreadsheets get messy fast, especially once you are tracking hours, skills, and assessments
            for more than one child. This free Notion template automates the tedious parts of homeschool
            math tracking so you can spend your time teaching instead of formatting cells.
          </p>
          <div className="practice-cta-container">
            <a
              href="https://homeschoolmath.gumroad.com/l/ahxceu"
              target="_blank"
              rel="noopener noreferrer"
              className="practice-button"
              style={{ background: '#0D9488' }}
              aria-label="Download the free Notion Math Progress Dashboard"
            >
              Enter 0 in the price field to download at no cost. No payment information required.
              Download Free — No Registration Required
            </a>
            <p className="practice-info-box">Notion template · Instant duplicate link · Free Notion account works</p>
          </div>
        </section>

        {/* What's Inside */}
        <section className="practice-section">
          <h2 className="practice-section-title">7 Complete Pages, Fully Connected</h2>
          <p className="practice-section-subtitle">
            Add a lesson and hours update automatically. Mark a skill mastered and it appears in your
            portfolio export. Every page is linked, so there is no duplicate data entry.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {pages.map((page, i) => (
              <div key={i} className="info-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem' }}>
                <span style={{
                  background: '#0D9488', color: 'white', fontWeight: '800',
                  fontSize: '1rem', width: '32px', height: '32px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>{i + 1}</span>
                <div>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.25rem', fontSize: '1rem' }}>
                    {page.label}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {page.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included Box */}
        <section className="practice-section">
          <h2 className="practice-section-title">What Is Inside the Template</h2>
          <div className="info-card" style={{ border: '2px solid #0D9488' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Notion Math Progress Dashboard
              </h3>
              <span style={{ background: '#0D9488', color: 'white', fontWeight: '800', padding: '0.3rem 1rem', borderRadius: '999px' }}>
                FREE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                  <span style={{ color: '#0D9488', fontWeight: '700' }}>{item.icon}</span> {item.item}
                </p>
              ))}
            </div>
            <a
              href="https://homeschoolmath.gumroad.com/l/ahxceu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#0D9488' }}
              aria-label="Download the free Notion Math Progress Dashboard"
            >
              Download Free Template →
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              Free Notion account works · No coding required · One-time setup
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
              This dashboard comes bundled at no extra cost with{' '}
              <Link href="/number-sense-foundations" style={{ color: '#0D9488', fontWeight: '600' }}>Number Sense Foundations</Link>{' '}
              and{' '}
              <Link href="/multiplication-division-foundations" style={{ color: '#0D9488', fontWeight: '600' }}>Multiplication & Division Foundations</Link>.
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
          <div className="practice-cta-box" style={{ background: '#134E4A' }}>
            <h2 className="practice-cta-title">Download the Free Dashboard</h2>
            <p className="practice-cta-text">
              Track hours, skills, and assessments in one connected system — no more spreadsheet chaos.
            </p>
            <div className="practice-cta-container">
              <a
                href="https://homeschoolmath.gumroad.com/l/ahxceu"
                target="_blank"
                rel="noopener noreferrer"
                className="practice-cta-button"
                style={{ color: '#134E4A' }}
                aria-label="Download the free Notion Math Progress Dashboard"
              >
                Download Free — Notion Progress Dashboard
              </a>
              <p className="practice-cta-note">Free · Notion template · No registration required</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}