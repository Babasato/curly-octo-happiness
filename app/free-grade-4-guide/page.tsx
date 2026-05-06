// app/free-grade-4-guide/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Is My Child Ready for Grade 4 Math? Free Diagnostic Guide | HomeschoolMath.site',
  description: 'Free diagnostic guide for homeschool parents. 20-item checklist, 15 practice problems, scoring guide, and 4-week action plan. Know exactly where your child stands before Grade 4.',
  alternates: {
    canonical: 'https://homeschoolmath.site/free-grade-4-guide',
  },
}

export default function FreeGrade4Guide() {
  const includes = [
    { icon: '✓', item: '20-item diagnostic checklist across 5 skill areas' },
    { icon: '✓', item: '15 diagnostic practice problems with full answer key' },
    { icon: '✓', item: 'Scoring guide — know exactly what the results mean' },
    { icon: '✓', item: '4-week targeted action plan based on your results' },
    { icon: '✓', item: 'Notes pages for your own observations' },
  ]

  const skills = [
    { label: 'Times Tables to 10×10', desc: 'Recall speed and accuracy across all facts' },
    { label: 'Place Value to 1,000', desc: 'Hundreds, tens, ones — including expanded form and zero as placeholder' },
    { label: 'Addition & Subtraction with Regrouping', desc: '3-digit operations with full carrying and borrowing' },
    { label: 'Basic Fraction Concepts', desc: 'Numerator, denominator, comparing simple fractions' },
    { label: 'Word Problem Strategy', desc: 'Reading, identifying the question, choosing the operation' },
  ]

  const relatedPages = [
    { name: 'Multiplication Made Simple', href: '/free-multiplication-guide', desc: 'Free 5-day starter guide' },
    { name: 'Fractions from Scratch', href: '/free-fractions-guide', desc: 'Free concept foundation guide' },
    { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Free printable practice' },
    { name: 'All Free Resources', href: '/free-guides', desc: 'View all free guides' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge" style={{ background: '#C8973A' }}>Free Diagnostic Guide</div>
          <h1 className="practice-title">Is My Child Ready for Grade 4 Math?</h1>
          <p className="practice-subtitle" style={{ color: '#C8973A' }}>
            A Complete Readiness Guide for Homeschool Parents
          </p>
          <p className="practice-description">
            One of the hardest questions in homeschooling is knowing whether your child is truly ready
            for the next level — not just keeping up, but genuinely ready. This free guide answers
            that question specifically for Grade 4 math, with a diagnostic checklist, practice problems,
            and a concrete action plan based on what you find.
          </p>
          <div className="practice-cta-container">
            <a
              href="https://homeschoolmath.gumroad.com/l/pkwmua"
              target="_blank"
              rel="noopener noreferrer"
              className="practice-button"
              style={{ background: '#C8973A' }}
              aria-label="Download the free Grade 4 readiness guide"
            >
              Download Free — No Registration Required
            </a>
            <p className="practice-info-box">PDF · Instant download · Print at home</p>
          </div>
        </section>

        {/* What Grade 4 Requires */}
        <section className="practice-section">
          <h2 className="practice-section-title">What Grade 4 Math Actually Requires</h2>
          <p className="practice-section-subtitle">
            Grade 4 is a significant step up. Here is what your child will encounter.
          </p>
          <div className="practice-grid">
            {[
              { title: 'Multi-digit multiplication', desc: 'Multiplying 2 and 3-digit numbers — requires solid times table fluency' },
              { title: 'Long division', desc: 'Dividing by single digits with and without remainders' },
              { title: 'Fraction foundations', desc: 'Identifying, comparing, and adding fractions with like denominators' },
              { title: 'Decimal introduction', desc: 'Tenths and hundredths as extensions of place value' },
              { title: 'Multi-step word problems', desc: 'Problems requiring two or more operations — reading comprehension matters' },
              { title: 'Geometry basics', desc: 'Area, perimeter, angles, and shape identification' },
            ].map((item, i) => (
              <div key={i} className="practice-card" style={{ padding: '1.25rem' }}>
                <div style={{ fontWeight: '700', color: '#C8973A', marginBottom: '0.4rem', fontSize: '1rem' }}>
                  {item.title}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The 5 Prerequisite Skills */}
        <section className="practice-section">
          <h2 className="practice-section-title">The 5 Skills Grade 4 Builds On</h2>
          <p className="practice-section-subtitle">
            A child who is shaky on any of these will struggle in Grade 4 — not because the
            content is too hard, but because the foundation underneath it is not set.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {skills.map((skill, i) => (
              <div key={i} className="info-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem' }}>
                <span style={{
                  background: '#C8973A', color: 'white', fontWeight: '800',
                  fontSize: '1rem', width: '32px', height: '32px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>{i + 1}</span>
                <div>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.25rem', fontSize: '1rem' }}>
                    {skill.label}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Inside */}
        <section className="practice-section">
          <h2 className="practice-section-title">What Is Inside the Guide</h2>
          <div className="info-card" style={{ border: '2px solid #C8973A' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Is My Child Ready for Grade 4 Math?
              </h3>
              <span style={{ background: '#C8973A', color: 'white', fontWeight: '800', padding: '0.3rem 1rem', borderRadius: '999px' }}>
                FREE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                  <span style={{ color: '#C8973A', fontWeight: '700' }}>{item.icon}</span> {item.item}
                </p>
              ))}
            </div>
            <a
              href="https://homeschoolmath.gumroad.com/l/pkwmua"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#C8973A' }}
              aria-label="Download the free Grade 4 readiness guide"
            >
              Download Free Guide →
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              PDF format · No registration · No email required · Print at home
            </p>
          </div>
        </section>

        {/* How to Use It */}
        <section className="practice-section">
          <h2 className="practice-section-title">How to Use This Guide</h2>
          <p className="practice-section-subtitle">Three steps. One honest picture of where your child stands.</p>
          <div className="practice-grid">
            {[
              { step: '1', title: 'Run the checklist', desc: 'Work through the 20-item checklist with your child over 2–3 short sessions. Tick only what they can do confidently and independently.' },
              { step: '2', title: 'Score and interpret', desc: 'Count your ticks and read the scoring guide. It tells you exactly what the result means and which sections to focus on.' },
              { step: '3', title: 'Follow the action plan', desc: 'The 4-week action plan gives you specific daily tasks based on your child\'s gaps. Four weeks of targeted work makes a bigger difference than starting Grade 4 immediately.' },
            ].map((item, i) => (
              <div key={i} className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{
                  background: '#C8973A', color: 'white', fontWeight: '800', fontSize: '1.5rem',
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
          <div className="practice-cta-box" style={{ background: '#1B2A4A' }}>
            <h2 className="practice-cta-title">Download the Free Guide</h2>
            <p className="practice-cta-text">
              Know exactly where your child stands before Grade 4 begins.
              Print it, work through it together, and follow the plan.
            </p>
            <div className="practice-cta-container">
              <a
                href="https://homeschoolmath.gumroad.com/l/pkwmua"
                target="_blank"
                rel="noopener noreferrer"
                className="practice-cta-button"
                style={{ color: '#1B2A4A' }}
                aria-label="Download the free Grade 4 readiness guide"
              >
                Download Free — Grade 4 Readiness Guide
              </a>
              <p className="practice-cta-note">Free · PDF · No registration required</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
