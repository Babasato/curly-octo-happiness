// app/word-problems/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Math Word Problems Worksheets | Free Printable K-6 Math Practice',
  description: 'Free printable math word problems worksheets for K-6. Practice addition, subtraction, multiplication, and division word problems with real-world scenarios.',
  alternates: {
    canonical: 'https://homeschoolmath.site/word-problems',
  },
}

export default function WordProblems() {
  const faqs = [
    {
      question: 'What types of word problems can I practice with these worksheets?',
      answer: 'Our generator creates word problems for all four operations: addition, subtraction, multiplication, and division. You can choose one-step problems, multi-step problems, or mixed operations. Each worksheet includes real-world scenarios appropriate for the grade level.'
    },
    {
      question: 'Why does my child freeze on word problems when they can solve equations easily?',
      answer: 'This is the most common math complaint, and the reason is simple: word problems require reading comprehension AND math skills simultaneously. A child who can solve 23 + 47 = 70 may still freeze on "Sarah had 23 apples and bought 47 more" because they have to read, comprehend, identify the operation, and then compute. The fix is explicit strategy teaching: read the problem aloud, restate it in their own words, cover the numbers first, and identify the situation before solving.'
    },
    {
      question: 'What is the best strategy for solving word problems?',
      answer: 'Teach the CUBES strategy: Circle the numbers, Underline the question, Box the key words, Evaluate the operation, Solve and check. Or teach the simpler 3-step method: (1) Read and restate — what is happening? (2) Identify the operation — are we combining, comparing, sharing? (3) Write the equation and solve. The key is to read the words before looking at the numbers.'
    },
    {
      question: 'What keywords signal each operation?',
      answer: 'Addition: "in all," "total," "altogether," "combined," "sum." Subtraction: "left," "remain," "difference," "how many more," "fewer." Multiplication: "each," "per," "groups of," "rows of," "total." Division: "share equally," "split," "each gets," "how many groups." Warn your child that keywords are clues, not rules — the best strategy is to understand the situation.'
    },
    {
      question: 'When should my child start multi-step word problems?',
      answer: 'Start multi-step word problems after your child can solve one-step problems reliably. Typically this is in 2nd or 3rd grade for simple two-step problems (addition then subtraction), and 4th grade for more complex multi-step problems. The common error is doing operations in the wrong order. Teach your child to break the problem into parts: "First, what happens? Then, what happens next?" Write each step separately.'
    },
    {
      question: 'How many word problems should my child practice daily?',
      answer: '5-10 word problems per session is effective. Word problems take longer than equations because of the reading and comprehension step. Quality over quantity — it is better to solve 5 problems correctly with full understanding than 15 problems guessed. Spend 15-20 minutes daily on word problems, not more.'
    },
    {
      question: 'Do the answer keys show the steps?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a word problem wrong, do not just show the correct answer. Go back to the problem and ask: "Let\'s read this again. What is happening? What are we trying to find out?" Walking through the reasoning is more valuable than the correct answer.'
    },
    {
      question: 'What is the difference between one-step and multi-step word problems?',
      answer: 'One-step problems require a single operation: "Sarah has 12 apples. She buys 5 more. How many does she have?" (addition). Multi-step problems require two or more operations: "Sarah has 12 apples. She buys 5 more. Then she gives 3 to her friend. How many are left?" (addition then subtraction). Teach one-step problems first, then multi-step once those are solid.'
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
            <div className="practice-badge practice-badge-purple">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Math Word Problems Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-purple">
              Practice Real-World Math Scenarios
            </p>
            <p className="practice-description">
              Generate custom word problem worksheets for addition, subtraction, multiplication, and division. 
              Perfect for building reading comprehension and math skills simultaneously.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">➕</div>
                <h3 className="practice-card-title">All Operations</h3>
                <p className="practice-card-text">Addition, subtraction, multiplication, division</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📖</div>
                <h3 className="practice-card-title">CUBES Strategy</h3>
                <p className="practice-card-text">Circle, Underline, Box, Evaluate, Solve</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Multi-Step</h3>
                <p className="practice-card-text">One-step and multi-step problems</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-purple">
                Generate Custom Word Problems Worksheets
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
                Why Word Problems Are the True Test of Math Understanding
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                A child can memorize that 23 + 47 = 70. But do they know when to add? Word problems ask children to read a scenario, identify what the problem is asking, and choose the correct operation. This is what real math looks like — not isolated equations, but applying skills to actual situations like shopping, cooking, and measuring.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                Many parents focus exclusively on computation worksheets and then wonder why their child freezes on word problems. The answer is simple: word problems require reading comprehension and situation recognition. That is why word problems should run alongside computation practice from the very beginning. For students who need computation fluency alongside word problem practice, see our <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition</Link>, <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction</Link>, <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication</Link>, and <Link href="/division-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division</Link> practice pages.
              </p>
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
                <h3 className="practice-card-heading">K-2 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Simple addition and subtraction word problems — combining and taking away</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Picture-based word problems — connecting stories to numbers</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">One-step problems — single operation scenarios</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Multiplication and division word problems — equal groups and sharing</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Two-step problems — combining two operations</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Comparing problems — "how many more" and "how many fewer"</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Multi-step problems — three or more operations</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Fraction and decimal word problems — real-world applications</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Mixed operations — choosing the correct operation without cues</span>
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
              What word problem mastery looks like at each stage, and what sticking points to watch for
            </p>
            
            {/* K-2 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  K-2
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  K-2 — Picture-Based and Simple One-Step
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  In K-2, word problems should include pictures. Children learn to identify addition ("in all," "total") and subtraction ("left," "remain") situations. The common sticking point is reading comprehension — children who can solve 3+2 may freeze on "Sam has 3 toys and gets 2 more." Read problems aloud and have your child restate them in their own words.
                </p>
              </div>
            </div>

            {/* 3-4 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  3-4
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  3-4 — Multiplication, Division, and Two-Step
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  In 3-4, word problems introduce multiplication ("each," "per," "total") and division ("share equally," "split"). Two-step problems appear (addition then subtraction). The common sticking point is identifying which operation to use when multiple operations are possible. Teach the CUBES strategy and have your child underline the question before solving.
                </p>
              </div>
            </div>

            {/* 5-6 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  5-6
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  5-6 — Multi-Step, Fractions, and Mixed Operations
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  By 5-6, word problems include fractions, decimals, and multi-step scenarios with three or more operations. The common sticking point is doing operations in the wrong order. Teach your child to break the problem into parts: "First, what do we need to find? Then, what do we do next?" Write each step separately.
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
              Varied word problem practice materials
            </p>
            <div className="practice-grid">
              <Link href="/word-problems-addition-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Addition Word Problems</h3>
                  <span className="practice-count-badge practice-count-badge-purple">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Combining, totaling, and "in all" scenarios</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades K-4</div>
              </Link>

              <Link href="/word-problems-subtraction-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Subtraction Word Problems</h3>
                  <span className="practice-count-badge practice-count-badge-purple">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Taking away, comparing, and "how many left" scenarios</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades K-4</div>
              </Link>

              <Link href="/word-problems-multiplication-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Multiplication Word Problems</h3>
                  <span className="practice-count-badge practice-count-badge-purple">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Equal groups, arrays, and "each" scenarios</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 3-5</div>
              </Link>

              <Link href="/word-problems-division-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Division Word Problems</h3>
                  <span className="practice-count-badge practice-count-badge-purple">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Sharing equally, grouping, and "each gets" scenarios</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 3-5</div>
              </Link>

              <Link href="/word-problems-multi-step-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Multi-Step Problems</h3>
                  <span className="practice-count-badge practice-count-badge-purple">10+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Two or more operations in sequence</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 3-6</div>
              </Link>

              <Link href="/word-problems-mixed-operations-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Mixed Operations</h3>
                  <span className="practice-count-badge practice-count-badge-purple">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Choose the correct operation — no operation cues</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 4-6</div>
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
                When Word Problem Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in reading comprehension or language processing. If your child consistently guesses the operation or cannot restate word problems in their own words, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K-2) builds the language and problem-solving strategies that make word problems manageable. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
              Everything you need to know about word problem practice worksheets
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
            <div className="practice-cta-box practice-cta-box-purple">
              <h2 className="practice-cta-title">
                Master Math Word Problems!
              </h2>
              <p className="practice-cta-text">
                Build reading comprehension and math skills simultaneously with customized word problem practice sheets. From simple one-step to complex multi-step problems.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-purple">
                  Create Word Problems Worksheets Now
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
                  Parts of a whole
                </div>
              </Link>

              <Link href="/grade-3-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-purple">
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
                <div className="practice-nav-icon practice-nav-icon-purple">
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
