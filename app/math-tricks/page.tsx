// app/math-tricks/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Math Tricks & Explanations | Free Visual Guides for Kids | HomeschoolMath.site',
  description: 'Free visual guides explaining key math concepts: multiplication tricks, borrowing in subtraction, place value, long division, fractions, and more. Perfect for homeschool parents.',
  alternates: {
    canonical: 'https://homeschoolmath.site/math-tricks',
  },
}

export default function MathTricksHub() {
  const trickCategories = [
    {
      title: 'Multiplication & Division',
      description: 'Tricks and explanations for mastering times tables and division facts.',
      items: [
        { name: 'Multiplying by 9 Trick', href: '/multiplying-by-9-trick', desc: 'Fast method that works every time' },
        { name: 'Multiplying by 11 Trick', href: '/multiplying-by-11-trick', desc: 'Single and double digit patterns' },
        { name: 'Long Division Steps', href: '/long-division-steps-for-kids', desc: 'Step-by-step visual guide' },
        { name: 'Long Division with Remainders', href: '/long-division-with-remainders', desc: 'What to do when it doesn\'t divide evenly' },
        { name: 'Skip Counting Explained', href: '/skip-counting-explained', desc: 'The foundation of multiplication' },
      ]
    },
    {
      title: 'Addition & Subtraction',
      description: 'Clear explanations for regrouping, borrowing, and place value.',
      items: [
        { name: 'Borrowing in Subtraction', href: '/borrowing-in-subtraction', desc: 'When and how to borrow' },
        { name: 'Regrouping in Addition', href: '/regrouping-in-addition-explained', desc: 'Why carrying works' },
        { name: 'Place Value Explained', href: '/place-value-explained', desc: 'Understanding tens, hundreds, and beyond' },
      ]
    },
    {
      title: 'Fractions & Decimals',
      description: 'Visual guides for understanding parts of a whole.',
      items: [
        { name: 'What Is a Numerator?', href: '/what-is-a-numerator', desc: 'Understanding the top number' },
        { name: 'What Is a Denominator?', href: '/what-is-a-denominator', desc: 'Understanding the bottom number' },
        { name: 'How to Multiply Fractions', href: '/how-to-multiply-fractions', desc: 'Multiply tops, multiply bottoms, simplify' },
        { name: 'How to Divide Fractions', href: '/how-to-divide-fractions', desc: 'Keep Change Flip explained simply' },
        { name: 'How to Simplify Fractions', href: '/how-to-simplify-fractions', desc: 'Reducing fractions step by step' },
        { name: 'How to Read Decimals', href: '/how-to-read-decimals', desc: 'Tenths, hundredths, and place value' },
      ]
    },
    {
      title: 'Measurement & Time',
      description: 'Essential skills for everyday math.',
      items: [
        { name: 'How to Tell Time', href: '/how-to-tell-time', desc: 'Reading analog clocks with ease' },
      ]
    },
  ]

  return (
    <div className="main-content-area" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="practice-container">

        {/* Hero Section */}
        <section className="practice-hero">
          <div className="practice-badge practice-badge-blue">
            Free Visual Guides
          </div>
          <h1 className="practice-title">
            Math Tricks & Explanations
          </h1>
          <p className="practice-subtitle practice-subtitle-blue">
            Clear, Step-by-Step Guides for Kids & Parents
          </p>
          <p className="practice-description">
            Most math struggles come from missing one key connection — not from lack of practice.
            These guides show the "why" behind the procedure, so concepts actually stick.
          </p>
        </section>

        {/* All Tricks Grid */}
        {trickCategories.map((category, catIndex) => (
          <section key={catIndex} className="practice-section">
            <h2 className="practice-section-title">
              {category.title}
            </h2>
            <p className="practice-section-subtitle">
              {category.description}
            </p>
            <div className="practice-grid">
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="practice-worksheet-card"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    border: '2px solid var(--border)',
                    borderRadius: '12px',
                    background: 'var(--surface)',
                  }}
                >
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title" style={{ color: 'var(--text-primary)' }}>
                      {item.name}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-blue">
                      Free
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {item.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-blue" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    Free Guide
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="practice-cta-section">
          <div className="practice-cta-box practice-cta-box-blue">
            <h2 className="practice-cta-title">
              Need More Than a Trick?
            </h2>
            <p className="practice-cta-text">
              Tricks are great for getting unstuck. But true math confidence comes from understanding.
              Our courses build the conceptual foundation that makes tricks unnecessary — and math genuinely intuitive.
            </p>
            <div className="practice-cta-container">
              <Link href="/resources" className="practice-cta-button practice-cta-button-blue">
                View All Courses & Resources
              </Link>
              <p className="practice-cta-note">
                Homeschool parents • No prep required • 30-day programs
              </p>
            </div>
          </div>
        </section>

        {/* Related Navigation */}
        <section className="practice-nav-section">
          <h2 className="practice-nav-title">
            Practice What You Learn
          </h2>
          <div className="practice-nav-grid">
            <Link href="/multiplication-practice" className="practice-nav-card">
              <div className="practice-nav-icon practice-nav-icon-blue">×</div>
              <div className="practice-nav-label">Multiplication</div>
              <div className="practice-nav-desc">Times tables & facts</div>
            </Link>
            <Link href="/division-practice" className="practice-nav-card">
              <div className="practice-nav-icon practice-nav-icon-blue">÷</div>
              <div className="practice-nav-label">Division</div>
              <div className="practice-nav-desc">Basic facts & long division</div>
            </Link>
            <Link href="/fractions-practice" className="practice-nav-card">
              <div className="practice-nav-icon practice-nav-icon-blue">½</div>
              <div className="practice-nav-label">Fractions</div>
              <div className="practice-nav-desc">Parts of a whole</div>
            </Link>
            <Link href="/decimals-practice" className="practice-nav-card">
              <div className="practice-nav-icon practice-nav-icon-blue">0.1</div>
              <div className="practice-nav-label">Decimals</div>
              <div className="practice-nav-desc">Place value & operations</div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
