// app/free-multiplication-guide/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication Made Simple — Free 5-Day Starter Guide | HomeschoolMath.site',
  description: 'Free 5-day multiplication guide for homeschool parents. Teach equal groups, arrays, skip counting, and derived facts — no maths teaching experience required. Grades 2–4.',
  alternates: {
    canonical: 'https://homeschoolmath.site/free-multiplication-guide',
  },
}

export default function FreeMultiplicationGuide() {
  const days = [
    { day: 'Day 1', title: 'What Multiplication Actually Means', desc: 'Equal groups — the core concept that makes everything else make sense. Includes physical activity with objects.' },
    { day: 'Day 2', title: 'Arrays — Seeing Multiplication', desc: 'Visual models that prove why 3×4 and 4×3 give the same answer. Graph paper activity included.' },
    { day: 'Day 3', title: 'Multiplication and Skip Counting', desc: 'The connection between skip counting and times tables — your child may already know more than they think.' },
    { day: 'Day 4', title: 'The 2s, 5s, and 10s Tables', desc: 'The three easiest tables first — with patterns that make them memorable without pure memorisation.' },
    { day: 'Day 5', title: 'Building the Other Tables', desc: 'Derived fact strategies so your child can figure out any fact they forget — not just retrieve it.' },
  ]

  const includes = [
    '5 days of structured parent-led teaching',
    '5 worksheets — one per day — with full answer keys',
    'Derived fact strategies for the harder tables',
    'Parent tips for every session',
    'Next steps guide for building full fluency',
  ]

  const relatedPages = [
    { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'The fast finger method' },
    { name: 'Multiplying by 11 Trick', href: '/multiplying-by-11-trick', desc: 'Single and double digit patterns' },
    { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'Foundation of multiplication' },
    { name: 'All Free Resources', href: '/free-guides', desc: 'View all free guides' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge" style={{ background: '#2A7F7F' }}>Free 5-Day Guide</div>
          <h1 className="practice-title">Multiplication Made Simple</h1>
          <p className="practice-subtitle" style={{ color: '#2A7F7F' }}>
            A 5-Day Starter Guide for Homeschool Parents
          </p>
          <p className="practice-description">
            Multiplication fluency is not about speed — it is about understanding equal groups.
            This free guide teaches multiplication from the ground up in five focused daily sessions,
            each taking 15–20 minutes. No maths teaching experience required.
          </p>
          <div className="practice-cta-container">
            <a
              href="https://homeschoolmath.gumroad.com/l/wdkid"
              target="_blank"
              rel="noopener noreferrer"
              className="practice-button"
              style={{ background: '#2A7F7F' }}
              aria-label="Download the free multiplication guide"
            >
              Download Free — No Registration Required
            </a>
            <p className="practice-info-box">PDF · Instant download · Print at home</p>
          </div>
        </section>

        {/* The 5 Days */}
        <section className="practice-section">
          <h2 className="practice-section-title">Your 5-Day Plan</h2>
          <p className="practice-section-subtitle">
            15–20 minutes per day. Each day builds on the last.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {days.map((item, i) => (
              <div key={i} className="info-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem' }}>
                <span style={{
                  background: '#2A7F7F', color: 'white', fontWeight: '800',
                  fontSize: '0.8rem', padding: '0.3rem 0.6rem', borderRadius: '6px',
                  flexShrink: 0, whiteSpace: 'nowrap', marginTop: '2px'
                }}>{item.day}</span>
                <div>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.25rem', fontSize: '1rem' }}>
                    {item.title}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Approach */}
        <section className="practice-section">
          <h2 className="practice-section-title">Why Concept First, Then Fluency</h2>
          <div className="practice-grid">
            {[
              { title: 'Understanding sticks', desc: 'A child who understands equal groups can reconstruct any forgotten fact. A child who only memorised cannot.' },
              { title: 'Less anxiety', desc: 'When multiplication makes sense, it stops feeling like a test of how much you\'ve memorised and starts feeling like a skill you\'ve built.' },
              { title: 'Faster fluency', desc: 'Counterintuitively, children who learn the concept first become fluent faster — because understanding supports memory.' },
            ].map((item, i) => (
              <div key={i} className="practice-card" style={{ padding: '1.25rem' }}>
                <p style={{ fontWeight: '700', color: '#2A7F7F', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {item.title}
                </p>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Inside */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid #2A7F7F' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Multiplication Made Simple — Free Guide
              </h3>
              <span style={{ background: '#2A7F7F', color: 'white', fontWeight: '800', padding: '0.3rem 1rem', borderRadius: '999px' }}>
                FREE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                  <span style={{ color: '#2A7F7F', fontWeight: '700' }}>✓</span> {item}
                </p>
              ))}
            </div>
            <a
              href="https://homeschoolmath.gumroad.com/l/wdkid"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#2A7F7F' }}
              aria-label="Download the free multiplication guide"
            >
              Download Free Guide →
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              PDF format · No registration · No email required · Print at home
            </p>
          </div>
        </section>

        {/* Also helpful */}
        <section className="practice-section">
          <h2 className="practice-section-title">Also Helpful for Multiplication</h2>
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
          <div className="practice-cta-box" style={{ background: '#1E5F5F' }}>
            <h2 className="practice-cta-title">Start Teaching Multiplication Today</h2>
            <p className="practice-cta-text">
              Download the guide, print it, and start Day 1 this afternoon.
              Five focused days builds the foundation your child needs.
            </p>
            <div className="practice-cta-container">
              <a
                href="https://homeschoolmath.gumroad.com/l/wdkid"
                target="_blank"
                rel="noopener noreferrer"
                className="practice-cta-button"
                style={{ color: '#1E5F5F' }}
                aria-label="Download the free multiplication guide"
              >
                Download Free — Multiplication Made Simple
              </a>
              <p className="practice-cta-note">Free · PDF · No registration required</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
