// app/division-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Division Practice Worksheets | Free Printable Math Sheets 3rd-6th Grade',
  description: 'Master division with custom practice sheets. Generate free printable division worksheets for 3rd through 6th grade with basic facts, inverse operations, and sharing scenarios.',
}

export default function DivisionPractice() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What division skills can I practice with these worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates division worksheets with basic division facts, division as the inverse of multiplication, equal sharing word problems, and practice within multiplication fact families. Three difficulty levels available.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you include long division or problems with remainders?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, our division worksheets focus on basic division facts only. We do not include long division, remainders, or complex fraction division to ensure age-appropriate practice for elementary students.'
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
            <div className="practice-badge practice-badge-orange">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Division Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-orange">
              Master Division with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom division worksheets with basic facts, inverse operations, and equal sharing scenarios. 
              Perfect for building division fluency and conceptual understanding.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">÷</div>
                <h3 className="practice-card-title">Basic Facts</h3>
                <p className="practice-card-text">Division within fact families</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔄</div>
                <h3 className="practice-card-title">Inverse Operations</h3>
                <p className="practice-card-text">Connection to multiplication</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📝</div>
                <h3 className="practice-card-title">Word Problems</h3>
                <p className="practice-card-text">Equal sharing scenarios</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-orange">
                Generate Custom Division Worksheets
              </Link>
              <div className="practice-info-box">
                10 free worksheets per day • 3 difficulty levels
              </div>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive division practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">3rd Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Basic division concepts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Division as sharing</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Connection to multiplication</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">4th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Division facts practice</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Fact families mastery</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Simple word problems</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5th-6th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Division fluency</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Complex word problems</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Inverse operations mastery</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Division by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              Age-appropriate division practice for every student
            </p>
            <div className="practice-grade-grid">
              {[
                { grade: '3', focus: 'Basic concepts, sharing' },
                { grade: '4', focus: 'Facts practice, families' },
                { grade: '5', focus: 'Fluency, word problems' },
                { grade: '6', focus: 'Mastery, applications' }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'center'}}>
                  <div className="practice-grade-badge practice-grade-badge-orange">
                    {level.grade}
                  </div>
                  <div className="practice-grade-title">
                    Grade {level.grade}
                  </div>
                  <div className="practice-grade-focus">
                    {level.focus}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WORKSHEET TYPES SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Worksheet Categories
            </h2>
            <p className="practice-section-subtitle">
              Varied division practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Basic Division Facts', count: '25+ problems', grades: '3-4', desc: 'Division within multiplication families' },
                { type: 'Fact Families', count: '20+ problems', grades: '3-5', desc: 'Related multiplication and division' },
                { type: 'Equal Sharing', count: '15+ problems', grades: '3-4', desc: 'Division as fair sharing' },
                { type: 'Inverse Operations', count: '20+ problems', grades: '4-6', desc: 'Multiplication-division connection' },
                { type: 'Word Problems', count: '10+ problems', grades: '3-6', desc: 'Real-world sharing scenarios' },
                { type: 'Mixed Practice', count: '30+ problems', grades: '4-6', desc: 'Varied division problems' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-orange">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-orange">
                    Grades {worksheet.grades}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Frequently Asked Questions
            </h2>
            <p className="practice-section-subtitle">
              Everything you need to know about division practice worksheets
            </p>
            <div className="practice-faq-container">
              {[
                {
                  question: 'What division skills can I practice with these worksheets?',
                  answer: 'Our generator creates division worksheets with basic division facts, division as the inverse of multiplication, equal sharing word problems, and practice within multiplication fact families. Three difficulty levels available.'
                },
                {
                  question: 'Do you include long division or problems with remainders?',
                  answer: 'No, our division worksheets focus on basic division facts only. We do not include long division, remainders, or complex fraction division to ensure age-appropriate practice for elementary students.'
                },
                {
                  question: 'Are visual aids included for division worksheets?',
                  answer: 'While we focus on numerical practice, we do not include specific visual aids for division. The worksheets emphasize the relationship between multiplication and division through fact families and inverse operations.'
                },
                {
                  question: 'How do you ensure division problems are age-appropriate?',
                  answer: 'All division problems stay within basic multiplication fact families (up to 12×12). We avoid complex algorithms and focus on conceptual understanding through equal sharing scenarios and inverse operations.'
                }
              ].map((faq, index) => (
                <div key={index} className="practice-faq-card">
                  <h3 className="practice-faq-question">
                    {faq.question}
                  </h3>
                  <p className="practice-faq-answer">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="practice-cta-section">
            <div className="practice-cta-box practice-cta-box-orange">
              <h2 className="practice-cta-title">
                Build Division Fluency!
              </h2>
              <p className="practice-cta-text">
                Master division concepts with customized practice sheets. 
                From basic sharing to fact families, develop essential math skills for problem-solving.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-orange">
                  Create Division Worksheets Now
                </Link>
                <p className="practice-cta-note">
                  Free • No registration required • 10 worksheets per day
                </p>
              </div>
            </div>
          </section>

          {/* RELATED SKILLS NAVIGATION */}
          <section className="practice-nav-section">
            <h2 className="practice-nav-title">
              Explore Other Math Skills
            </h2>
            <div className="practice-nav-grid">
              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/fractions-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  ½
                </div>
                <div className="practice-nav-label">
                  Fractions
                </div>
                <div className="practice-nav-desc">
                  Basic concepts
                </div>
              </Link>

              <Link href="/word-problems" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  ?
                </div>
                <div className="practice-nav-label">
                  Word Problems
                </div>
                <div className="practice-nav-desc">
                  Story problems
                </div>
              </Link>

              <Link href="/addition-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  +
                </div>
                <div className="practice-nav-label">
                  Addition
                </div>
                <div className="practice-nav-desc">
                  Practice sheets
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
