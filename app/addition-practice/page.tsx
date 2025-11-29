// app/addition-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Addition Practice Worksheets | Free Printable Math Sheets K-6',
  description: 'Master addition with custom practice sheets. Generate free printable addition worksheets for kindergarten through 6th grade with basic facts, regrouping, and visual aids.',
}

export default function AdditionPractice() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What addition skills can I practice with these worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates addition worksheets with basic facts (1-20), two-digit addition with and without regrouping, visual aids like number lines and shapes, and real-world word problems. Three difficulty levels available for each grade.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do the answer keys include step-by-step explanations?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, answer keys provide only the final answers. This allows students to work through problems independently while giving parents and teachers quick verification.'
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
            <div className="practice-badge practice-badge-blue">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Addition Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-blue">
              Master Addition with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom addition worksheets with basic facts, two-digit problems, and visual aids. 
              Perfect for building foundational math skills with number lines, shapes, and real-world scenarios.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">1-20</div>
                <h3 className="practice-card-title">Number Range</h3>
                <p className="practice-card-text">Basic addition facts within 1-20 range</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📊</div>
                <h3 className="practice-card-title">Visual Aids</h3>
                <p className="practice-card-text">Number lines and shape counting</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Two-Digit</h3>
                <p className="practice-card-text">With and without regrouping</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-blue">
                Generate Custom Addition Worksheets
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
              Comprehensive addition practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">K-2 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Basic addition facts 1-10</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Counting with shapes and pictures</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Number line addition</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Two-digit addition without regrouping</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Introduction to regrouping</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Addition word problems</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Multi-digit addition with regrouping</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Complex word problems</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Mental math strategies</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Addition by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              Age-appropriate addition practice for every student
            </p>
            <div className="practice-grade-grid">
              {[
                { grade: 'K', focus: 'Basic facts 1-5 with visuals' },
                { grade: '1', focus: 'Facts 1-10, number lines' },
                { grade: '2', focus: 'Facts 1-20, simple word problems' },
                { grade: '3', focus: 'Two-digit, no regrouping' },
                { grade: '4', focus: 'Two-digit with regrouping' },
                { grade: '5', focus: 'Multi-digit addition' },
                { grade: '6', focus: 'Complex regrouping' }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'center'}}>
                  <div className="practice-grade-badge practice-grade-badge-blue">
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
              Varied addition practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Basic Facts', count: '25+ problems', grades: 'K-2', desc: 'Single-digit addition within 20' },
                { type: 'Number Lines', count: '15+ problems', grades: 'K-2', desc: 'Visual addition using number lines' },
                { type: 'Shape Counting', count: '20+ problems', grades: 'K-1', desc: 'Count and add with shapes' },
                { type: 'Two-Digit (No Regrouping)', count: '20+ problems', grades: '2-3', desc: 'Vertical addition practice' },
                { type: 'Two-Digit (With Regrouping)', count: '20+ problems', grades: '3-4', desc: 'Carrying practice' },
                { type: 'Word Problems', count: '10+ problems', grades: '1-6', desc: 'Real-world addition scenarios' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-blue">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-blue">
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
              Everything you need to know about addition practice worksheets
            </p>
            <div className="practice-faq-container">
              {[
                {
                  question: 'What addition skills can I practice with these worksheets?',
                  answer: 'Our generator creates addition worksheets with basic facts (1-20), two-digit addition with and without regrouping, visual aids like number lines and shapes, and real-world word problems. Three difficulty levels available for each grade.'
                },
                {
                  question: 'Do the answer keys include step-by-step explanations?',
                  answer: 'No, answer keys provide only the final answers. This allows students to work through problems independently while giving parents and teachers quick verification.'
                },
                {
                  question: 'Can I get worksheets with visual aids for younger students?',
                  answer: 'Yes! Our generator includes number lines and shape counting visual aids specifically designed for kindergarten and 1st grade students to build conceptual understanding.'
                },
                {
                  question: 'How often do worksheets include word problems?',
                  answer: 'Approximately 30% of generated worksheets will include word problems with real-world addition scenarios appropriate for each grade level.'
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
            <div className="practice-cta-box practice-cta-box-blue">
              <h2 className="practice-cta-title">
                Build Math Confidence with Addition!
              </h2>
              <p className="practice-cta-text">
                Master addition skills with customized practice sheets that grow with your student. 
                From basic counting to complex regrouping, build a strong mathematical foundation.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-blue">
                  Create Addition Worksheets Now
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
              <Link href="/subtraction-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
                  −
                </div>
                <div className="practice-nav-label">
                  Subtraction
                </div>
                <div className="practice-nav-desc">
                  Practice sheets
                </div>
              </Link>

              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/division-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
                  ÷
                </div>
                <div className="practice-nav-label">
                  Division
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/fractions-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
                  ½
                </div>
                <div className="practice-nav-label">
                  Fractions
                </div>
                <div className="practice-nav-desc">
                  Basic concepts
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
