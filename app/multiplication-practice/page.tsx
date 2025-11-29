// app/multiplication-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication Practice Worksheets | Free Printable Times Tables',
  description: 'Master multiplication with custom practice sheets. Generate free printable multiplication worksheets for 2nd through 6th grade with times tables, arrays, and word problems.',
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

            {/* Features Grid */}
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

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive multiplication practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">2-3 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Times tables 1-5</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Array visualizations</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Equal groups concepts</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Times tables 1-8</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Basic multiplication facts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Simple word problems</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Times tables 1-12</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Multiplication fluency</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Complex word problems</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Multiplication by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              Age-appropriate multiplication practice for every student
            </p>
            <div className="practice-grade-grid">
              {[
                { grade: '2', focus: 'Introduction, arrays, 1-5 tables' },
                { grade: '3', focus: 'Facts 1-8, equal groups' },
                { grade: '4', focus: 'Facts 1-10, word problems' },
                { grade: '5', focus: 'Facts 1-12, fluency' },
                { grade: '6', focus: 'Mastery, applications' }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'center'}}>
                  <div className="practice-grade-badge practice-grade-badge-purple">
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
              Varied multiplication practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Times Tables 1-5', count: '25+ problems', grades: '2-3', desc: 'Easy level multiplication facts' },
                { type: 'Times Tables 1-8', count: '30+ problems', grades: '3-4', desc: 'Medium level multiplication' },
                { type: 'Times Tables 1-12', count: '35+ problems', grades: '4-6', desc: 'Complete times tables' },
                { type: 'Array Visualizations', count: '15+ problems', grades: '2-3', desc: 'Visual multiplication models' },
                { type: 'Word Problems', count: '10+ problems', grades: '3-6', desc: 'Real-world scenarios' },
                { type: 'Mixed Practice', count: '40+ problems', grades: '3-6', desc: 'Varied multiplication problems' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-purple">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-purple">
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
              Everything you need to know about multiplication practice worksheets
            </p>
            <div className="practice-faq-container">
              {[
                {
                  question: 'What multiplication skills can I practice with these worksheets?',
                  answer: 'Our generator creates multiplication worksheets with times tables practice up to 12×12, basic multiplication facts, array visualizations, and real-world word problems. Three difficulty levels: Easy (1-5), Medium (1-8), and Hard (1-12).'
                },
                {
                  question: 'Do you include multi-digit multiplication problems?',
                  answer: 'No, our multiplication worksheets focus on basic multiplication facts and times tables only. We do not include multi-digit multiplication beyond the basic 12×12 facts to ensure age-appropriate practice.'
                },
                {
                  question: 'How do the difficulty levels work for multiplication?',
                  answer: 'Easy level covers times tables 1-5, Medium covers 1-8, and Hard covers the complete 1-12 times tables. Each level includes appropriate problem types and visual aids for the grade range.'
                },
                {
                  question: 'Are array visualizations included in all worksheets?',
                  answer: 'Array visualizations are primarily included in worksheets for grades 2-3 to build conceptual understanding. For older grades, worksheets focus more on fact fluency and word problems.'
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
            <div className="practice-cta-box practice-cta-box-purple">
              <h2 className="practice-cta-title">
                Master Multiplication Facts!
              </h2>
              <p className="practice-cta-text">
                Build multiplication fluency with customized practice sheets. 
                From basic arrays to times tables mastery, develop essential math skills for success.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-purple">
                  Create Multiplication Worksheets Now
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
              <Link href="/addition-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-purple">
                  +
                </div>
                <div className="practice-nav-label">
                  Addition
                </div>
                <div className="practice-nav-desc">
                  Practice sheets
                </div>
              </Link>

              <Link href="/division-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-purple">
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
                <div className="practice-nav-icon practice-nav-icon-purple">
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
                <div className="practice-nav-icon practice-nav-icon-purple">
                  ?
                </div>
                <div className="practice-nav-label">
                  Word Problems
                </div>
                <div className="practice-nav-desc">
                  Story problems
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
