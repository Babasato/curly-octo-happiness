import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication Practice Worksheets | Free Printable Times Tables',
  description: 'Master multiplication with custom practice sheets. Generate free printable multiplication worksheets for 2nd through 6th grade with times tables, arrays, and word problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplication-practice',
  },
}

export default function MultiplicationPractice() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What multiplication skills can I practice with these worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates multiplication worksheets with times tables practice up to 12×12, basic multiplication facts, array visualizations, and real-world word problems. Three difficulty levels: Easy (1-5), Medium (1-8), and Hard (1-12).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you include multi-digit multiplication problems?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, our multiplication worksheets focus on basic multiplication facts and times tables only. We do not include multi-digit multiplication beyond the basic 12×12 facts to ensure age-appropriate practice.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="practice-page">
        <div className="practice-container">

          {/* HERO SECTION */}
          <section className="practice-hero">
            <div className="practice-badge practice-badge-purple">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Multiplication Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-purple">
              Master Multiplication with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom multiplication worksheets with times tables, array visualizations, and real-world scenarios. 
              Perfect for building multiplication fluency and conceptual understanding.
            </p>

            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">12×12</div>
                <h3 className="practice-card-title">Times Tables</h3>
                <p className="practice-card-text">Complete practice up to 12×12</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔲</div>
                <h3 className="practice-card-title">Array Visuals</h3>
                <p className="practice-card-text">Visual multiplication models</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🎯</div>
                <h3 className="practice-card-title">3 Levels</h3>
                <p className="practice-card-text">Easy, Medium, Hard difficulty</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-purple">
                Generate Custom Multiplication Worksheets
              </Link>
              <div className="practice-info-box">
                10 free worksheets per day • 3 difficulty levels
              </div>
            </div>
          </section>

          {/* ... [Keeping the rest of your original content below exactly as it was] ... */}
          <section className="practice-section">
            <h2 className="practice-section-title">What You'll Practice</h2>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">2-3 Grade Skills</h3>
                <div className="practice-bullet"><div className="practice-bullet-dot practice-bullet-dot-purple"></div><span className="practice-bullet-text">Times tables 1-5</span></div>
                <div className="practice-bullet"><div className="practice-bullet-dot practice-bullet-dot-purple"></div><span className="practice-bullet-text">Array visualizations</span></div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet"><div className="practice-bullet-dot practice-bullet-dot-purple"></div><span className="practice-bullet-text">Times tables 1-8</span></div>
                <div className="practice-bullet"><div className="practice-bullet-dot practice-bullet-dot-purple"></div><span className="practice-bullet-text">Basic facts</span></div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet"><div className="practice-bullet-dot practice-bullet-dot-purple"></div><span className="practice-bullet-text">Times tables 1-12</span></div>
                <div className="practice-bullet"><div className="practice-bullet-dot practice-bullet-dot-purple"></div><span className="practice-bullet-text">Fluency</span></div>
              </div>
            </div>
          </section>

          <section className="practice-cta-section">
            <div className="practice-cta-box practice-cta-box-purple">
              <h2 className="practice-cta-title">Master Multiplication Facts!</h2>
              <Link href="/" className="practice-cta-button practice-cta-button-purple">
                Create Multiplication Worksheets Now
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
