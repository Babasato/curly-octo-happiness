// app/fractions-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractions Practice Worksheets | Free Printable Math Sheets 3rd-6th Grade',
  description: 'Master fractions with custom practice sheets. Generate free printable fraction worksheets for 3rd through 6th grade with basic concepts, equivalent fractions, and operations.',
  alternates: {
    canonical: 'https://homeschoolmath.site/fractions-practice',
  },
}

export default function FractionsPractice() {
  const faqs = [
    {
      question: 'What fraction skills can I practice with these worksheets?',
      answer: 'Our generator creates fraction worksheets with basic concepts (numerator, denominator), equivalent fractions, comparing fractions, adding and subtracting fractions, multiplying and dividing fractions, and real-world word problems. Three difficulty levels are available for each grade.'
    },
    {
      question: 'Why do fractions seem harder than whole numbers for most children?',
      answer: 'Fractions violate everything children learned about numbers. With whole numbers, larger digits mean larger values (45 &gt; 7). With fractions, a larger denominator can mean a smaller value (1/8 &lt; 1/4). Children must learn a completely new set of rules. The key is visual models — fraction circles and bars make the relationships visible. Without visual models, fractions remain abstract and confusing.'
    },
    {
      question: 'What is the best order to teach fraction skills?',
      answer: 'First: basic concepts — numerator, denominator, parts of a whole using fraction circles. Second: equivalent fractions — understanding that 1/2 = 2/4 = 4/8. Third: comparing fractions — with like denominators, then unlike denominators. Fourth: adding and subtracting fractions — with like denominators, then unlike denominators using equivalent fractions. Fifth: multiplying and dividing fractions. Sixth: fraction word problems. Do not rush — each stage builds on the previous.'
    },
    {
      question: 'My child understands fractions but struggles with finding common denominators. What should I do?',
      answer: 'Finding common denominators requires equivalent fraction fluency. If a child can find that 1/2 = 2/4 = 4/8 easily, common denominators are straightforward. If they struggle, go back to equivalent fraction practice with visual models. Use fraction bars to show that 1/2 and 2/4 cover the same amount of space. The visual makes the abstract procedure concrete. Most children need 2-4 weeks of equivalent fraction practice before common denominators feel natural.'
    },
    {
      question: 'How do I explain adding fractions with unlike denominators to my child?',
      answer: 'Use the pizza analogy. 1/2 of a pizza plus 1/4 of a pizza cannot be added directly because the slices are different sizes. You must cut the 1/2 into 2/4 first. Then 2/4 + 1/4 = 3/4. Always start with visual models (fraction circles) before teaching the procedural rule. The rule (find common denominator, add numerators) makes sense once the child has seen the visual.'
    },
    {
      question: 'When should my child start multiplying fractions?',
      answer: 'Multiply fractions after your child has mastered addition and subtraction of fractions with unlike denominators. Multiplying fractions is actually easier than adding — you do not need common denominators. However, the concept is harder. Use visual models: 1/2 × 1/4 means half of a quarter, which is 1/8. The visual makes the product smaller than both factors — which violates whole number intuition and needs explicit teaching.'
    },
    {
      question: 'Do the answer keys show the work?',
      answer: 'Answer keys provide only the final simplified fraction. This allows students to work through the steps independently while giving parents quick verification. For fraction operations, have your child show their work (common denominators, equivalent fractions, simplification) so you can see where errors occur.'
    },
    {
      question: 'What is the difference between a fraction and a ratio?',
      answer: 'A fraction compares a part to the whole (3/4 means 3 parts out of 4 total). A ratio compares two parts to each other (3 boys to 4 girls) or a part to the whole. Understanding this distinction matters for word problems. Our fraction word problems focus on part-whole relationships; ratio problems are in our pre-algebra section.'
    }
  ]

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
  }

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
              Fractions Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-green">
              Master Fractions with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom fraction worksheets with basic concepts, equivalent fractions, operations, and real-world word problems. 
              Perfect for building fraction fluency and conceptual understanding from 3rd through 6th grade.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">½</div>
                <h3 className="practice-card-title">Basic Concepts</h3>
                <p className="practice-card-text">Numerators and denominators</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📊</div>
                <h3 className="practice-card-title">Visual Models</h3>
                <p className="practice-card-text">Fraction circles and bars</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Operations</h3>
                <p className="practice-card-text">Add, subtract, multiply, divide</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-green">
                Generate Custom Fractions Worksheets
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
                Why Fractions Are the First Real Challenge in Elementary Math
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Fractions are the first time children encounter numbers that don't behave the way whole numbers do. With whole numbers, larger digits mean larger values. With fractions, 1/8 is smaller than 1/4 — the rule is reversed. This cognitive shift is genuinely hard. The children who succeed are not necessarily "better at math" — they were taught fractions with visual models before abstract rules.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The worksheets here are organized to build fraction understanding systematically — starting with fraction circles that make the concept visible, then progressing through equivalent fractions, comparing fractions, and all four operations. For students building toward decimals and percentages, the <Link href="/decimals-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>decimals practice</Link> and <Link href="/word-problems" style={{color: 'var(--primary)', textDecoration: 'underline'}}>word problems</Link> pages support the fraction fluency that higher math requires.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive fraction practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">3rd Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Basic fraction concepts — understanding numerators and denominators</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Fraction circles and bars — visualizing parts of a whole</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Simple equivalent fractions — 1/2 = 2/4 = 4/8</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">4th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Comparing fractions — with like and unlike denominators</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Adding and subtracting fractions — with like denominators</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Decomposing fractions — breaking fractions into sums of unit fractions</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5th-6th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Adding and subtracting fractions — with unlike denominators</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Multiplying and dividing fractions — including mixed numbers</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Fraction word problems — multi-step real-world scenarios</span>
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
              What fraction mastery looks like at each stage, and what sticking points to watch for
            </p>
            
            {/* Grade 3 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Grade 3 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 3 — Basic Concepts and Equivalent Fractions
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 3rd grader who has mastered fractions can identify the numerator and denominator, represent fractions using fraction circles, and generate simple equivalent fractions (1/2 = 2/4). The common sticking point is understanding that the denominator tells how many equal parts make the whole — children who draw unequal parts need explicit instruction on equal partitioning. By the end of 3rd grade, a child should be able to explain that 1/4 is smaller than 1/2 because the whole is cut into more pieces.
                </p>
              </div>
            </div>

            {/* Grade 4 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Grade 4 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  4
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 4 — Comparing and Adding Like Denominators
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 4th grader should compare fractions with like and unlike denominators using benchmarks like 1/2, and add/subtract fractions with like denominators. The common sticking point is comparing fractions with unlike denominators — children who cannot find common denominators often guess based on numerator or denominator size. By the end of 4th grade, a child should use fraction bars to compare fractions and explain that 3/4 &gt; 2/3 because both are more than 1/2 but 3/4 is closer to 1.
                </p>
              </div>
            </div>

            {/* Grades 5-6 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Grade 5 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  5
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 5 — Unlike Denominators and Multiplication
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 5th grader should add and subtract fractions with unlike denominators using equivalent fractions, and multiply fractions including mixed numbers. The common sticking point is finding common denominators — children who struggle need more equivalent fraction practice. By the end of 5th grade, a child should explain that 1/2 × 1/4 = 1/8 because it means half of a quarter, and that multiplying fractions produces a product smaller than both factors.
                </p>
              </div>

              {/* Grade 6 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  6
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 6 — Division and Applications
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  By 6th grade, fractions should be completely fluent as a sub-skill inside ratios, percentages, and multi-step problems. Students still struggling with fraction operations need direct remediation focused on visual models and equivalent fractions — not more complex problem practice. By the end of 6th grade, a child should divide fractions (including mixed numbers) and solve multi-step fraction word problems involving all four operations.
                </p>
              </div>
            </div>
          </section>

          {/* WORKSHEET TYPES SECTION - WITH LINKS */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Worksheet Categories
            </h2>
            <p className="practice-section-subtitle">
              Varied fraction practice materials
            </p>
            <div className="practice-grid">
              <Link href="/fraction-basics-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Basic Concepts
                  </h3>
                  <span className="practice-count-badge practice-count-badge-green">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Understanding numerators, denominators, and parts of a whole with fraction circles
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-green">
                  Grades 3-4
                </div>
              </Link>

              <Link href="/fraction-equivalent-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Equivalent Fractions
                  </h3>
                  <span className="practice-count-badge practice-count-badge-green">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Finding equivalent fractions using visual models and multiplication/division
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-green">
                  Grades 3-5
                </div>
              </Link>

              <Link href="/fraction-comparing-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Comparing Fractions
                  </h3>
                  <span className="practice-count-badge practice-count-badge-green">
                    15+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Comparing fractions with like and unlike denominators using benchmarks
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-green">
                  Grades 4-5
                </div>
              </Link>

              <Link href="/fraction-addition-subtraction-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Addition & Subtraction
                  </h3>
                  <span className="practice-count-badge practice-count-badge-green">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Adding and subtracting fractions with like and unlike denominators
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-green">
                  Grades 4-6
                </div>
              </Link>

              <Link href="/fraction-multiplication-division-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Multiplication & Division
                  </h3>
                  <span className="practice-count-badge practice-count-badge-green">
                    20+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Multiplying and dividing fractions including mixed numbers
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-green">
                  Grades 5-6
                </div>
              </Link>

              <Link href="/fraction-word-problems-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">
                    Word Problems
                  </h3>
                  <span className="practice-count-badge practice-count-badge-green">
                    15+ problems
                  </span>
                </div>
                <p className="practice-worksheet-desc">
                  Real-world fraction scenarios for recipes, measurement, and sharing
                </p>
                <div className="practice-worksheet-grades practice-worksheet-grades-green">
                  Grades 4-6
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
                When Fraction Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the underlying number sense that makes fractions make sense. If your child still thinks 1/8 is larger than 1/4, cannot generate equivalent fractions, or struggles with finding common denominators, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K-2) builds the conceptual groundwork that makes fraction fluency stick. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
                View Number Sense Foundations — $57
              </a>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Frequently Asked Questions
            </h2>
            <p className="practice-section-subtitle">
              Everything you need to know about fraction practice worksheets
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
            <div className="practice-cta-box practice-cta-box-green">
              <h2 className="practice-cta-title">
                Build Fraction Fluency!
              </h2>
              <p className="practice-cta-text">
                Master fraction skills with customized practice sheets that grow with your student. 
                From basic concepts to operations, build the fraction fluency that all higher math depends on.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-green">
                  Create Fraction Worksheets Now
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
              <Link href="/decimals-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
                  0.1
                </div>
                <div className="practice-nav-label">
                  Decimals
                </div>
                <div className="practice-nav-desc">
                  Tenths and hundredths
                </div>
              </Link>

              <Link href="/word-problems" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
                  📝
                </div>
                <div className="practice-nav-label">
                  Word Problems
                </div>
                <div className="practice-nav-desc">
                  Real-world math
                </div>
              </Link>

              <Link href="/grade-3-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
                  3
                </div>
                <div className="practice-nav-label">
                  3rd Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-4-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
                  4
                </div>
                <div className="practice-nav-label">
                  4th Grade
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
