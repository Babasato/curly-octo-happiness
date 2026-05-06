// app/decimals-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decimal Practice Worksheets | Free Printable Math Sheets 4-6',
  description: 'Master decimals with custom practice sheets. Generate free printable decimal worksheets for 4th through 6th grade covering addition, subtraction, and place value alignment.',
  alternates: {
    canonical: 'https://homeschoolmath.site/decimals-practice',
  },
}

export default function DecimalsPractice() {
  const faqs = [
    {
      question: 'What decimal skills can I practice with these worksheets?',
      answer: 'Our generator creates worksheets for decimal place value, comparing decimals, adding and subtracting decimals with different place values, and multiplying/dividing by powers of ten. You can choose specific levels of precision (tenths, hundredths, or thousandths).'
    },
    {
      question: 'What is the biggest challenge for students starting decimals?',
      answer: 'The most common hurdle is "spatial alignment." Many students are used to lining up the right edge of numbers from their work with whole numbers. With decimals, they must learn to line up the decimal points. If a child is struggling, have them use grid paper or draw vertical lines through the decimal points to keep columns organized.'
    },
    {
      question: 'How do I explain the value of a decimal to a beginner?',
      answer: 'The most effective way is through money or base-ten blocks. Relating 0.1 to a dime and 0.01 to a penny makes the abstract concept of "parts of a whole" immediately tangible. Always emphasize that moving to the right of the decimal point means the pieces are getting smaller, even if the digits themselves look larger.'
    },
    {
      question: 'Why does my child keep saying 0.45 is larger than 0.7?',
      answer: 'This is known as "whole-number thinking." Students see 45 and 7 and instinctively pick the larger digit. To fix this, teach them to "pad with zeros" so both numbers have the same number of digits (0.45 vs 0.70). This makes the comparison obvious and reinforces the concept of place value.'
    },
    {
      question: 'When should students move from basic addition to decimal addition?',
      answer: 'Once a student has mastered multi-digit addition with regrouping and has a firm grasp of place value up to the thousands, they are usually ready for decimals. Decimals are simply an extension of the base-ten system they already know.'
    },
    {
      question: 'Does the generator include word problems with decimals?',
      answer: 'Yes. Decimals are highly relevant to real-world math. Approximately 30% of the worksheets include scenarios involving money, measurement, and data tracking to show how decimals function outside the classroom.'
    },
    {
      question: 'Do the answer keys show the decimal alignment?',
      answer: 'Answer keys provide the final correctly formatted decimal answer. This allows for quick grading while ensuring students focus on the precision of their own work.'
    },
    {
      question: 'How many decimal places can the generator handle?',
      answer: 'You can generate problems ranging from simple tenths (4.2) up to thousandths (4.258), depending on the grade level and difficulty selected.'
    }
  ];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
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
              Decimal Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-blue">
              Master Decimals with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom decimal worksheets covering addition, subtraction, and place value. 
              Perfect for building precision with tenths, hundredths, and thousandths using clear vertical alignment.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">0.01</div>
                <h3 className="practice-card-title">Precision</h3>
                <p className="practice-card-text">Practice tenths through thousandths</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📏</div>
                <h3 className="practice-card-title">Alignment</h3>
                <p className="practice-card-text">Focus on decimal point verticality</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">💰</div>
                <h3 className="practice-card-title">Real World</h3>
                <p className="practice-card-text">Money and measurement word problems</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-blue">
                Generate Custom Decimal Worksheets
              </Link>
              <div className="practice-info-box">
                10 free worksheets per day • 3 difficulty levels
              </div>
            </div>
          </section>

          {/* WHY THIS MATTERS SECTION */}
          <section className="practice-section">
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem',
              marginBottom: '1rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Why Decimals Require a Shift in Mathematical Thinking
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                For many students, decimals are the first time that "longer" numbers aren't necessarily "bigger" numbers. This shift is a major cognitive milestone. Mastery isn't just about getting the sum right; it’s about understanding that the decimal point is an anchor. If a child treats 0.5 and 0.05 as the same because "they both have a five," the issue isn't their arithmetic—it's their conceptual model of the base-ten system.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                This precision is the bridge to middle school science and advanced finance. A child who can confidently add decimals with varying place values (like 1.2 + 0.45) has mastered the discipline of alignment and the logic of place value. To strengthen the foundations before moving to decimals, visit our <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice</Link> and <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice</Link> pages to ensure whole-number fluency is solid.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive decimal mastery for upper elementary
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">Introduction Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Place value identification — understanding tenths and hundredths</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Comparing decimals — identifying which value is larger regardless of length</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Decimal number lines — visualizing decimals between whole numbers</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">Operation Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Vertical addition — mastering the "line up the dot" rule</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Regrouping with decimals — carrying across the decimal point</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Subtracting decimals — handling "invisible" trailing zeros</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">Advanced Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Multi-step word problems — applying decimals to money and weights</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Powers of ten — mental math for shifting decimal points</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Rounding decimals — estimating sums for quick verification</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Decimals by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              The progression of decimal mastery from 4th to 6th grade
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {/* Grade 4 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-blue" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  4
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 4 — Intro to Tenths & Hundredths
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  In 4th grade, decimals are introduced alongside fractions. Students learn that 0.7 is the same as 7/10. The focus is on simple addition of tenths and understanding that the decimal point separates whole numbers from parts.
                </p>
              </div>

              {/* Grade 5 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-blue" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  5
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 5 — Thousandths & Alignment
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  5th graders expand to thousandths and must add/subtract decimals with different lengths (e.g., 4.5 + 1.235). This is where the alignment of the decimal point becomes the primary skill and the most frequent source of errors.
                </p>
              </div>

              {/* Grade 6 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-blue" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  6
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 6 — Fluency & Multi-step Problems
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  By 6th grade, students should be fluent in all four operations with decimals. They apply these skills to solve complex word problems involving unit rates, budgets, and scientific measurements where precision is vital.
                </p>
              </div>
            </div>
          </section>

                    {/* WORKSHEET TYPES SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Worksheet Categories
            </h2>
            <p className="practice-section-subtitle">
              Targeted decimal practice materials
            </p>
            <div className="practice-grid">
              <Link href="/decimal-addition-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Decimal Addition
                  </h3>
                  <span className="practice-count-badge practice-count-badge-blue">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Vertical addition with tenths and hundredths alignment practice
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-blue">
                  Grades 4-5
                </div>
              </Link>

              <Link href="/decimal-subtraction-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Decimal Subtraction
                  </h3>
                  <span className="practice-count-badge practice-count-badge-blue">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Practice regrouping with decimals and handling unequal lengths
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-blue">
                  Grades 4-6
                </div>
              </Link>

              <Link href="/decimal-place-value-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Place Value
                  </h3>
                  <span className="practice-count-badge practice-count-badge-blue">
                    15+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Identify digit values and compare decimal magnitudes
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-blue">
                  Grades 4-5
                </div>
              </Link>

              <Link href="/decimals-multiplication-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Decimal Multiplication
                  </h3>
                  <span className="practice-count-badge practice-count-badge-blue">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Multiply decimals by whole numbers and decimals with decimal point placement
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-blue">
                  Grades 5-6
                </div>
              </Link>

              <Link href="/decimals-division-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Decimal Division
                  </h3>
                  <span className="practice-count-badge practice-count-badge-blue">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Divide decimals by whole numbers and decimals using the "move the decimal" rule
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-blue">
                  Grades 5-6
                </div>
              </Link>

              <Link href="/decimal-word-problems-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Word Problems
                  </h3>
                  <span className="practice-count-badge practice-count-badge-blue">
                    15+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Apply decimals to money, measurement, and real-world scenarios
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-blue">
                  Grades 5-6
                </div>
              </Link>
            </div>
          </section>

          {/* COURSE MENTION */}
          <section className="practice-section">
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Beyond Decimals: Advanced Number Sense
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                Mastering decimals is often the final step in elementary number sense. If your student is ready to take these skills further into fractions, percentages, and ratios, our <strong>Middle School Math Foundations</strong> course provides the deep dive needed for success in Pre-Algebra. You can also browse all available curricula on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/mfikwi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                View Math Foundations — $57
              </a>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Frequently Asked Questions
            </h2>
            <p className="practice-section-subtitle">
              Common questions about teaching and practicing decimals
            </p>
            <div className="practice-faq-container">
              {faqs.map((faq, index) => (
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
                Master Decimal Operations!
              </h2>
              <p className="practice-cta-text">
                Build confidence and precision with customized decimal practice sheets.
                From basic place value to complex multi-digit addition and subtraction, ensure your student is ready for the precision of higher math.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-blue">
                  Create Decimal Worksheets Now
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
                <div className="practice-nav-icon practice-nav-icon-blue">
                  +
                </div>
                <div className="practice-nav-label">
                  Addition
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
                  Parts of a whole
                </div>
              </Link>

              <Link href="/grade-4-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
                  4
                </div>
                <div className="practice-nav-label">
                  4th Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-5-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
                  5
                </div>
                <div className="practice-nav-label">
                  5th Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}