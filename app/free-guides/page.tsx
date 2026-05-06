//app\free-guides\page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Homeschool Math Guides | Download Free Parent Resources | HomeschoolMath.site',
  description: 'Download free printable math guides for homeschool parents. Grade 4 readiness checklist, multiplication starter guide, and fractions foundation guide — all free, no registration required.',
  alternates: {
    canonical: 'https://homeschoolmath.site/free-guides',  // Changed from free-courses
  },
}

export default function FreeResourcesHub() {
  const freeGuides = [
    {
      title: 'Is My Child Ready for Grade 4 Math?',
      subtitle: 'Free Diagnostic Guide',
      description: 'A complete readiness checklist covering the 5 skills Grade 4 builds on — times tables, place value, addition and subtraction, fractions, and word problems. Includes a 15-problem diagnostic worksheet and a 4-week action plan.',
      href: '/free-grade-4-guide',
      downloadHref: 'https://homeschoolmath.gumroad.com/l/pkwmua',
      color: 'gold',
      badge: 'Grades 3–4',
      includes: ['20-item diagnostic checklist', '15 practice problems with answer key', 'Scoring guide + action plan', '2 notes pages'],
    },
    {
      title: 'Multiplication Made Simple',
      subtitle: '5-Day Starter Guide',
      description: 'Five focused days of multiplication teaching — from equal groups to arrays to derived facts. Each day includes a teaching section, worked examples, and a short worksheet. Designed for parents with no maths teaching experience required.',
      href: '/free-multiplication-guide',
      downloadHref: 'https://homeschoolmath.gumroad.com/l/wdkid',
      color: 'teal',
      badge: 'Grades 2–4',
      includes: ['5 days of structured teaching', '5 worksheets with answer keys', 'Derived facts strategies', 'Daily tips for parents'],
    },
    {
      title: 'Fractions from Scratch',
      subtitle: 'Concept Foundation Guide',
      description: 'Four core fraction concepts built properly from the ground up — what fractions are, why bigger denominators mean smaller pieces, equivalent fractions, and fractions on a number line. The foundation that makes fraction operations make sense.',
      href: '/free-fractions-guide',
      downloadHref: 'https://homeschoolmath.gumroad.com/l/qntlb',
      color: 'green',
      badge: 'Grades 3–5',
      includes: ['4 core concept lessons', '4 worksheets with answer keys', 'Common mistakes guide', 'Visual teaching methods'],
    },
  ]

  const colorMap: Record<string, { badge: string; border: string; accent: string }> = {
    gold:  { badge: '#C8973A', border: '#C8973A', accent: '#FDF3E3' },
    teal:  { badge: '#2A7F7F', border: '#2A7F7F', accent: '#E8F4F4' },
    green: { badge: '#2D6A4F', border: '#2D6A4F', accent: '#E8F5EE' },
  }

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-green">Free Downloads</div>
          <h1 className="practice-title">Free Homeschool Math Guides</h1>
          <p className="practice-subtitle practice-subtitle-green">
            Practical Resources for Parents Who Teach
          </p>
          <p className="practice-description">
            Three free guides built for homeschool parents — no experience required, no email needed.
            Download, print, and start teaching today.
          </p>
        </section>

        {/* Guide Cards */}
        {freeGuides.map((guide, index) => {
          const colors = colorMap[guide.color]
          return (
            <section key={index} className="practice-section" style={{ marginBottom: '2rem' }}>
              <div className="info-card" style={{ border: `2px solid ${colors.border}`, padding: '2rem' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span style={{
                      display: 'inline-block', background: colors.badge, color: 'white',
                      fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem',
                      borderRadius: '999px', marginBottom: '0.5rem'
                    }}>
                      {guide.badge}
                    </span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.25rem', fontWeight: '600' }}>
                      {guide.subtitle}
                    </p>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                      {guide.title}
                    </h2>
                  </div>
                  <span style={{
                    background: colors.accent, color: colors.badge,
                    fontSize: '1rem', fontWeight: '800', padding: '0.4rem 1rem',
                    borderRadius: '999px', whiteSpace: 'nowrap'
                  }}>
                    FREE
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {guide.description}
                </p>

                <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    What&apos;s included:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.4rem' }}>
                    {guide.includes.map((item, i) => (
                      <p key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                        ✓ {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={guide.downloadHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: colors.badge, color: 'white', padding: '0.875rem 2rem',
                      borderRadius: '8px', fontWeight: '700', textDecoration: 'none',
                      fontSize: '1rem', display: 'inline-block'
                    }}
                  >
                    Download Free →
                  </a>
                  <Link
                    href={guide.href}
                    style={{
                      background: 'var(--surface)', color: colors.badge,
                      border: `2px solid ${colors.border}`,
                      padding: '0.875rem 2rem', borderRadius: '8px',
                      fontWeight: '600', textDecoration: 'none', fontSize: '1rem',
                      display: 'inline-block'
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>
          )
        })}

        {/* Why Free */}
        <section className="practice-section">
          <div className="info-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Why Are These Free?
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              HomeschoolMath.site is built on one belief: every homeschool family deserves access to
              quality math resources regardless of budget. These guides are free because the information
              in them should be freely available. If they help you, our paid courses go deeper — but
              these guides are complete and useful on their own.
            </p>
          </div>
        </section>

        {/* Paid Courses CTA - Changed to "View All Resources" */}
        <section className="practice-cta-section">
          <div className="practice-cta-box practice-cta-box-blue">
            <h2 className="practice-cta-title">Need a Full Programme?</h2>
            <p className="practice-cta-text">
              Our paid courses go deeper — structured modules, more worksheets, full assessments,
              and parent guides for every lesson. Built for homeschool families who want a
              complete, done-for-you curriculum.
            </p>
            <div className="practice-cta-container">
              <Link href="/resources" className="practice-cta-button practice-cta-button-blue">
                View All Resources
              </Link>
              <p className="practice-cta-note">
                Grades K–6  ·  No prep required  ·  Instant download
              </p>
            </div>
          </div>
        </section>

        {/* Free worksheets nav */}
        <section className="practice-nav-section">
          <h2 className="practice-nav-title">Free Printable Worksheets</h2>
          <div className="practice-nav-grid">
            {[
              { href: '/multiplication-practice', icon: '×', label: 'Multiplication', desc: 'Times tables & facts' },
              { href: '/fractions-practice', icon: '½', label: 'Fractions', desc: 'All levels' },
              { href: '/division-practice', icon: '÷', label: 'Division', desc: 'Including remainders' },
              { href: '/word-problems', icon: '?', label: 'Word Problems', desc: 'Grades 1–6' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">{item.icon}</div>
                <div className="practice-nav-label">{item.label}</div>
                <div className="practice-nav-desc">{item.desc}</div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
