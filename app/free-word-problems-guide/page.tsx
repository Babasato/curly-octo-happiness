// app/free-word-problems-guide/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Word Problems Made Easy — Free Strategy Guide | HomeschoolMath.site',
  description: 'Free word problems guide for homeschool parents. The 4-step READ method, signal word lists for all four operations, 20 practice problems with answer key. Grades K–6, no registration required.',
  alternates: {
    canonical: 'https://homeschoolmath.site/free-word-problems-guide',
  },
}

export default function FreeWordProblemsGuide() {
  const includes = [
    { item: 'The 4-step READ method — works on every problem type' },
    { item: 'Signal word lists for addition, subtraction, multiplication and division' },
    { item: 'Worked examples at Grade K–2, 3–4, and 5–6 levels' },
    { item: '20 mixed practice problems with full answer key' },
    { item: 'Quick reference card — print and post it on the wall' },
  ]

  const problemTypes = [
    { label: 'Addition', signal: 'in all · altogether · total · sum · combined · both · plus' },
    { label: 'Subtraction', signal: 'left · remain · difference · fewer · less than · how many more · spent' },
    { label: 'Multiplication', signal: 'each · every · per · groups of · rows of · times · double · triple' },
    { label: 'Division', signal: 'share equally · split · divide · average · how many groups · cut into · per' },
  ]

  const readSteps = [
    {
      letter: 'R',
      title: 'Read the whole problem',
      desc: 'Read the entire problem before touching a pencil. Read it twice if needed. Rushing past this step causes most mistakes.',
    },
    {
      letter: 'E',
      title: 'Extract every number',
      desc: 'Underline or circle every number in the problem. Write them to the side. Note what each number represents — 12 apples, not just 12.',
    },
    {
      letter: 'A',
      title: 'Ask which operation',
      desc: 'Look for signal words. Ask: am I putting together, taking away, grouping, or splitting? This tells you whether to add, subtract, multiply, or divide.',
    },
    {
      letter: 'D',
      title: 'Do the maths and check',
      desc: 'Write the number sentence, solve it, then ask: does this answer make sense? If you started with 12 and gave some away, the answer should be less than 12.',
    },
  ]

  const relatedPages = [
    { name: 'Word Problems Worksheets', href: '/word-problems', desc: 'Free printable practice' },
    { name: 'Division Word Problems', href: '/word-problems-division-worksheets', desc: 'Grades 2–6' },
    { name: 'Fractions from Scratch', href: '/free-fractions-guide', desc: 'Free foundation guide' },
    { name: 'All Free Guides', href: '/free-guides', desc: 'View all free resources' },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <section className="practice-hero">
          <div className="practice-badge" style={{ background: '#92400E' }}>Free Strategy Guide</div>
          <h1 className="practice-title">Word Problems Made Easy</h1>
          <p className="practice-subtitle" style={{ color: '#92400E' }}>
            A Step-by-Step Method for Grades K–6
          </p>
          <p className="practice-description">
            Word problems trip up children who are perfectly capable of doing the arithmetic.
            The problem is almost never the maths — it is not having a reliable method for
            reading and unpacking the problem. This free guide gives your child one framework
            that works on every word problem type from Kindergarten through Grade 6.
          </p>
          <div className="practice-cta-container">
            <a
              href="https://homeschoolmath.gumroad.com/l/xcwol"
              target="_blank"
              rel="noopener noreferrer"
              className="practice-button"
              style={{ background: '#92400E' }}
            >
              Download Free — No Registration Required
            </a>
            <p className="practice-info-box">PDF · Instant download · Print at home</p>
          </div>
        </section>

        {/* The READ Method */}
        <section className="practice-section">
          <h2 className="practice-section-title">The 4-Step READ Method</h2>
          <p className="practice-section-subtitle">
            One framework. Every problem type. Every grade level.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {readSteps.map((step, i) => (
              <div
                key={i}
                className="info-card"
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem' }}
              >
                <span style={{
                  background: '#92400E',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {step.letter}
                </span>
                <div>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.25rem', fontSize: '1rem' }}>
                    {step.title}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Signal Words */}
        <section className="practice-section">
          <h2 className="practice-section-title">Signal Words by Operation</h2>
          <p className="practice-section-subtitle">
            These are the words inside a problem that tell your child which operation to use.
            Knowing them removes most of the guesswork.
          </p>
          <div className="practice-grid">
            {problemTypes.map((type, i) => (
              <div key={i} className="info-card" style={{ borderTop: '4px solid #92400E' }}>
                <p style={{ fontWeight: '700', color: '#92400E', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {type.label}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.7' }}>
                  {type.signal}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Inside */}
        <section className="practice-section">
          <h2 className="practice-section-title">What Is Inside the Guide</h2>
          <div className="info-card" style={{ border: '2px solid #92400E' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                Word Problems Made Easy
              </h3>
              <span style={{
                background: '#92400E',
                color: 'white',
                fontWeight: '800',
                padding: '0.3rem 1rem',
                borderRadius: '999px',
              }}>
                FREE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                  <span style={{ color: '#92400E', fontWeight: '700' }}>✓</span> {item.item}
                </p>
              ))}
            </div>
            <a
              href="https://homeschoolmath.gumroad.com/l/xcwol"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit-button"
              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#92400E' }}
            >
              Download Free Guide →
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              PDF format · No registration · No email required · Print at home
            </p>
          </div>
        </section>

        {/* Why word problems are hard */}
        <section className="practice-section">
          <h2 className="practice-section-title">Why Word Problems Feel Hard</h2>
          <p className="practice-section-subtitle">
            It is almost never the maths — it is one of these three things.
          </p>
          <div className="practice-grid">
            {[
              {
                title: 'No method',
                desc: 'Children who freeze usually have no framework for approaching the problem. They see words and numbers and do not know where to start.',
              },
              {
                title: 'Skipping the read',
                desc: 'The most common mistake at every grade level — reading the problem once, too fast, then guessing the operation.',
              },
              {
                title: 'Ignoring the check',
                desc: 'Writing an answer without asking whether it makes sense. An answer of 0.5 apples or -3 children should trigger a re-read.',
              },
            ].map((item, i) => (
              <div key={i} className="practice-card" style={{ padding: '1.25rem' }}>
                <div style={{ fontWeight: '700', color: '#92400E', marginBottom: '0.4rem', fontSize: '1rem' }}>
                  {item.title}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="practice-section">
          <h2 className="practice-section-title">More Free Resources</h2>
          <div className="practice-nav-grid">
            {relatedPages.map((page, i) => (
              <Link key={i} href={page.href} className="practice-nav-card">
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
              One method. Every word problem type. Grades K through 6.
              Print it, work through it together, and watch the freezing stop.
            </p>
            <div className="practice-cta-container">
              <a
                href="https://homeschoolmath.gumroad.com/l/xcwol"
                target="_blank"
                rel="noopener noreferrer"
                className="practice-cta-button"
                style={{ color: '#1B2A4A' }}
              >
                Download Free — Word Problems Made Easy
              </a>
              <p className="practice-cta-note">Free · PDF · No registration required</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}