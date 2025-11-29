// app/fractions-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractions Practice Worksheets | Free Printable Math Sheets 3rd-6th Grade',
  description: 'Master fractions with custom practice sheets. Generate free printable fractions worksheets for 3rd through 6th grade with basic concepts, visual models, and finding fractions of wholes.',
}

export default function FractionsPractice() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What fraction skills can I practice with these worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates fractions worksheets with basic fraction concepts (1/2, 1/3, 1/4, 2/3, 3/4), finding fractions of whole numbers, visual aids like fraction bars, and simple fraction calculations. We do not include fraction operations.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you include fraction addition, subtraction, multiplication, or division?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, our fractions worksheets focus on basic fraction concepts and finding fractional parts only. We do not include any fraction operations (addition, subtraction, multiplication, or division) to ensure age-appropriate practice.'
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
            <div className="practice-badge practice-badge-red">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Fractions Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-red">
              Master Fractions with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom fractions worksheets with basic concepts, visual models, and finding fractional parts. 
              Perfect for building foundational understanding of fractions.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">½ ¼ ⅓</div>
                <h3 className="practice-card-title">Basic Fractions</h3>
                <p className="practice-card-text">Common fractions: 1/2, 1/3, 1/4, 2/3, 3/4</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📊</div>
                <h3 className="practice-card-title">Visual Models</h3>
                <p className="practice-card-text">Fraction bars and visual aids</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Parts of Wholes</h3>
                <p className="practice-card-text">Finding fractions of numbers</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-red">
                Generate Custom Fractions Worksheets
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
              Comprehensive fractions practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">3rd Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Basic fraction recognition</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Parts of a whole</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Fraction bar models</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">4th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Common fractions practice</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Finding fractions of numbers</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Simple fraction problems</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5th-6th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Fraction concepts mastery</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Complex fraction of whole numbers</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Visual model applications</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Fractions by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              Age-appropriate fractions practice for every student
            </p>
            <div className="practice-grade-grid">
              {[
                { grade: '3', focus: 'Basic concepts, visual models' },
                { grade: '4', focus: 'Common fractions, parts of wholes' },
                { grade: '5', focus: 'Fraction concepts, applications' },
                { grade: '6', focus: 'Mastery, complex problems' }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'center'}}>
                  <div className="practice-grade-badge practice-grade-badge-red">
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
              Varied fractions practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Basic Fraction Recognition', count: '20+ problems', grades: '3-4', desc: 'Identify common fractions' },
                { type: 'Fraction Bar Models', count: '15+ problems', grades: '3-5', desc: 'Visual fraction representations' },
                { type: 'Parts of a Whole', count: '18+ problems', grades: '3-4', desc: 'Fractional parts concepts' },
                { type: 'Finding Fractions of Numbers', count: '20+ problems', grades: '4-6', desc: 'Calculate fractional amounts' },
                { type: 'Simple Fraction Problems', count: '15+ problems', grades: '4-6', desc: 'Basic fraction calculations' },
                { type: 'Mixed Fraction Practice', count: '25+ problems', grades: '4-6', desc: 'Varied fraction problems' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-red">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-red">
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
              Everything you need to know about fractions practice worksheets
            </p>
            <div className="practice-faq-container">
              {[
                {
                  question: 'What fraction skills can I practice with these worksheets?',
                  answer: 'Our generator creates fractions worksheets with basic fraction concepts (1/2, 1/3, 1/4, 2/3, 3/4), finding fractions of whole numbers, visual aids like fraction bars, and simple fraction calculations. We do not include fraction operations.'
                },
                {
                  question: 'Do you include fraction addition, subtraction, multiplication, or division?',
                  answer: 'No, our fractions worksheets focus on basic fraction concepts and finding fractional parts only. We do not include any fraction operations (addition, subtraction, multiplication, or division) to ensure age-appropriate practice.'
                },
                {
                  question: 'What visual models are included for fractions?',
                  answer: 'We include fraction bars and simple visual representations to help students understand fractions as parts of a whole. These visual aids are designed to build conceptual understanding before moving to abstract fraction concepts.'
                },
                {
                  question: 'Are the worksheets suitable for students who struggle with fractions?',
                  answer: 'Yes! Our worksheets start with basic fraction recognition and visual models, gradually building to more abstract concepts. The progression helps struggling students develop confidence and understanding step by step.'
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
            <div className="practice-cta-box practice-cta-box-red">
              <h2 className="practice-cta-title">
                Build Fraction Understanding!
              </h2>
              <p className="practice-cta-text">
                Master fraction concepts with customized practice sheets. 
                From basic recognition to finding parts of wholes, develop essential math skills.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-red">
                  Create Fractions Worksheets Now
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
              <Link href="/division-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-red">
                  ÷
                </div>
                <div className="practice-nav-label">
                  Division
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-red">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/word-problems" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-red">
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
                <div className="practice-nav-icon practice-nav-icon-red">
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
