// app/free-fractions-guide/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractions from Scratch — Free Concept Foundation Guide | HomeschoolMath.site',
  description: 'Free fractions guide for homeschool parents. Build the four core fraction concepts properly — what fractions are, comparing, equivalence, and number lines. Grades 3–5.',
  alternates: {
    canonical: 'https://homeschoolmath.site/free-fractions-guide',
  },
}

export default function FreeFractionsGuide() {
  const concepts = [
    {
      number: '1',
      title: 'What a Fraction Actually Is',
      desc: 'Parts of a whole — the numerator counts, the denominator names. Built with folded paper and physical models before any written symbols.',
    },
    {
      number: '2',
      title: 'The Denominator Trap',
      desc: 'Bigger denominator means smaller pieces — the most counterintuitive fraction truth and the most commonly skipped. Taught with a pizza demonstration.',
    },
    {
      number: '3',
      title: 'Equivalent Fractions',
      desc: 'Same amount, different appearance. Why ½ = 2/4 = 3/6 — proven visually with paper folding, then explained with the multiply/divide rule.',
    },
    {
      number: '4',
      title: 'Fractions on a Number Line',
      desc: 'Fractions as actual numbers with a precise position — not just shapes. Bridges conceptual understanding to number sense.',
    },
  ]

  const includes = [
    '4 core concept lessons with teaching scripts',
    '4 worksheets — one per concept — with full answer keys',
    'Common mistakes guide for each concept',
    'Visual teaching methods that work without manipulatives',
    'Notes pages for your observations',
  ]

  const whyHard = [
    { reason: 'Symbols before concepts', fix: 'This guide always starts with a physical model before introducing written fractions.' },
    { reason: 'The denominator confusion', fix: 'Bigger denominators are explicitly taught as smaller pieces — multiple times, multiple ways.' },
    { reason: 'Procedures without understanding', fix: 'Every rule is explained with a why — so your child can reconstruct it, not just retrieve it.' },
  ]

  const relatedPages = [
    { name: 'What Is a Numerator?', href: '/what-is-a-numerator', desc: 'Free visual guide' },
    { name: 'What Is a Denominator?', href: '/what-is-a-denominator', desc: 'Free visual guide' },
    { name: 'How to Simplify Fractions', href: '/how-to-simplify-fractions', desc: 'Step-by-step guide' },
    { name: 'All Free Resources', href: '/free-guides', desc: 'View all free guides' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge" style={{ background: '#2D6A4F' }}>Free Foundation Guide</div>
          <h1 className="practice-title">Fractions from Scratch</h1>
          <p className="practice-subtitle" style={{ color: '#2D6A4F' }}>
            A Concept Foundation Guide for Grades 3–5
          </p>
          <p className="practice-description">
            Fractions feel hard when the foundation is missing. Almost every fraction difficulty
            traces back to one root cause — the concept was never fully established before
            the procedures started. This free guide fixes that, building four core fraction
            concepts properly from the ground up.
          </p>
          <div className="practice-cta-container">
            <a
              href="https://homeschoolmath.gumroad.com/l/qntlb"
              target="_blank"
              rel="noopener noreferrer"
              className="practice-button"
              style={{ background: '#2D6A4F' }}
              aria-label="Download the free fractions guide"
            >
              Download Free — No Registration Required
            </a>
            <p className="practice-info-box">PDF · Instant download · Print at home</p>
          </div>
        </section>

        {/* Why Fractions Feel Hard */}
        <section className="practice-section">
          <h2 className="practice-section-title">Why Fractions Feel Hard</h2>
          <p className="practice-section-subtitle">
            And exactly what this guide does about it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {whyHard.map((item, i) => (
              <div key={i} className="info-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem 1.25rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#cc4444', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    The problem
                  </p>
                  <p style={{ fontWeight: '600', color: 'var(--text-primary)', margin: 0, fontSize: '0.95rem' }}>
                    {item.reason}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2D6A4F', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    The fix
                  </p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {item.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 4 Concepts */}
        <section className="practice-section">
          <h2 className="practice-section-title">The 4 Core Concepts</h2>
          <p className="practice-section-subtitle">
            Work through one concept per session — 20–25 minutes each.
            Do not rush the early ones. They carry everything else.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {concepts.map((item, i) => (
              <div key={i} className="info-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem' }}>
                <span style={{
                  background: '#2D6A4F', color: 'white', fontWeight: '800',
                  fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>{item.number}</span>
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

        {/* What's Inside */}
        <section className="practice-section">
          <div className="info-card" style={{ border: '2px solid #2D6A4F' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Fractions from Scratch — Free Guide
              </h3>
              <span style={{ background: '#2D6A4F', color: 'white', fontWeight: '800', padding: '0.3rem 1rem', borderRadius: '999px' }}>
                FREE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                  <span style={{ color: '#2D6A4F', fontWeight: '700' }}>✓</span> {item}
                </p>
              ))}
            </div>
            <a
              href="https://homeschoolmath.gumroad.com/l/qntlb"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#2D6A4F' }}
              aria-label="Download the free fractions guide"
            >
              Download Free Guide →
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              PDF format · No registration · No email required · Print at home
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="practice-section">
          <h2 className="practice-section-title">More Fraction Resources</h2>
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
          <div className="practice-cta-box" style={{ background: '#1B4332' }}>
            <h2 className="practice-cta-title">Build the Foundation That Sticks</h2>
            <p className="practice-cta-text">
              Four concepts. Four sessions. The fraction understanding that makes
              operations make sense — not just steps to follow.
            </p>
            <div className="practice-cta-container">
              <a
                href="https://homeschoolmath.gumroad.com/l/qntlb"
                target="_blank"
                rel="noopener noreferrer"
                className="practice-cta-button"
                style={{ color: '#1B4332' }}
                aria-label="Download the free fractions guide"
              >
                Download Free — Fractions from Scratch
              </a>
              <p className="practice-cta-note">Free · PDF · No registration required</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
