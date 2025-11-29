// app/word-problems/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Math Word Problems Worksheets | Story Problems Practice 1st-6th Grade',
  description: 'Master math word problems with custom practice sheets. Generate free printable story problem worksheets for 1st through 6th grade with real-world scenarios and multiple operations.',
}

export default function WordProblems() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What types of word problems are included in the worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates word problem worksheets with real-world scenarios involving addition, subtraction, multiplication, and division. Problems include shopping, sharing, time, money, and everyday situations appropriate for each grade level.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How often do worksheets include word problems?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Word problems have a 30% chance of appearing in any generated worksheet. This ensures students get regular practice with story problems while maintaining variety in their math practice.'
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
            <div className="practice-badge practice-badge-green">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Math Word Problems Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-green">
              Master Story Problems with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom word problem worksheets with real-world scenarios and multiple operations. 
              Perfect for developing critical thinking and problem-solving skills.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">30%</div>
                <h3 className="practice-card-title">Inclusion Rate</h3>
                <p className="practice-card-text">Word problems in any worksheet</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🌍</div>
                <h3 className="practice-card-title">Real-World</h3>
                <p className="practice-card-text">Everyday scenarios and contexts</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">➕➖✖️➗</div>
                <h3 className="practice-card-title">All Operations</h3>
                <p className="practice-card-text">Addition, subtraction, multiplication, division</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-green">
                Generate Custom Word Problem Worksheets
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
              Comprehensive word problem practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">1st-2nd Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Single-step addition problems</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Simple subtraction scenarios</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Counting and sharing stories</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3rd-4th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Multi-step word problems</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Multiplication and division</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Money and time problems</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5th-6th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Complex multi-step problems</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Multiple operations required</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Real-world applications</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Word Problems by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              Age-appropriate story problem practice for every student
            </p>
            <div className="practice-grade-grid">
              {[
                { grade: '1-2', focus: 'Single-step, addition/subtraction' },
                { grade: '3-4', focus: 'Multi-step, all operations' },
                { grade: '5-6', focus: 'Complex, real-world scenarios' }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'center'}}>
                  <div className="practice-grade-badge practice-grade-badge-green">
                    {level.grade.split('-')[0]}
                  </div>
                  <div className="practice-grade-title">
                    Grades {level.grade}
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
              Varied word problem practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Addition Word Problems', count: '8-12 problems', grades: '1-4', desc: 'Combining and adding scenarios' },
                { type: 'Subtraction Word Problems', count: '8-12 problems', grades: '1-4', desc: 'Take-away and difference stories' },
                { type: 'Multiplication Word Problems', count: '8-12 problems', grades: '3-6', desc: 'Equal groups and arrays' },
                { type: 'Division Word Problems', count: '8-12 problems', grades: '3-6', desc: 'Sharing and grouping scenarios' },
                { type: 'Multi-Step Problems', count: '6-10 problems', grades: '3-6', desc: 'Multiple operations required' },
                { type: 'Money and Time Problems', count: '8-12 problems', grades: '2-6', desc: 'Real-world financial scenarios' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-green">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-green">
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
              Everything you need to know about word problem worksheets
            </p>
            <div className="practice-faq-container">
              {[
                {
                  question: 'What types of word problems are included in the worksheets?',
                  answer: 'Our generator creates word problem worksheets with real-world scenarios involving addition, subtraction, multiplication, and division. Problems include shopping, sharing, time, money, and everyday situations appropriate for each grade level.'
                },
                {
                  question: 'How often do worksheets include word problems?',
                  answer: 'Word problems have a 30% chance of appearing in any generated worksheet. This ensures students get regular practice with story problems while maintaining variety in their math practice.'
                },
                {
                  question: 'Are the word problems age-appropriate for different grade levels?',
                  answer: 'Yes! We carefully design problems with appropriate vocabulary, number ranges, and complexity for each grade level. Younger students get simple, concrete scenarios while older students tackle more complex, multi-step problems.'
                },
                {
                  question: 'Do word problems include visual aids or supports?',
                  answer: 'While the primary focus is on reading comprehension and problem-solving, some word problems for younger grades may include simple visual context. The main emphasis is developing the ability to extract mathematical information from text.'
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
            <div className="practice-cta-box practice-cta-box-green">
              <h2 className="practice-cta-title">
                Develop Problem-Solving Skills!
              </h2>
              <p className="practice-cta-text">
                Master real-world math applications with customized word problem worksheets. 
                Build critical thinking and mathematical reasoning skills for academic success.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-green">
                  Create Word Problem Worksheets Now
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
                <div className="practice-nav-icon practice-nav-icon-green">
                  +
                </div>
                <div className="practice-nav-label">
                  Addition
                </div>
                <div className="practice-nav-desc">
                  Practice sheets
                </div>
              </Link>

              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
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
                <div className="practice-nav-icon practice-nav-icon-green">
                  ½
                </div>
                <div className="practice-nav-label">
                  Fractions
                </div>
                <div className="practice-nav-desc">
                  Basic concepts
                </div>
              </Link>

              <Link href="/division-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
                  ÷
                </div>
                <div className="practice-nav-label">
                  Division
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
