// app/subtraction-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction Practice Worksheets | Free Printable Math Sheets K-6',
  description: 'Master subtraction with custom practice sheets. Generate free printable subtraction worksheets for kindergarten through 6th grade with basic facts, borrowing, and visual aids.',
  alternates: {
    canonical: 'https://homeschoolmath.site/subtraction-practice',
  },
}

export default function SubtractionPractice() {
  const faqs = [
    {
      question: 'What subtraction skills can I practice with these worksheets?',
      answer: 'Our generator creates subtraction worksheets with basic facts (1-20), two-digit subtraction with and without borrowing, visual aids like shapes for counting, and real-world word problems. Three difficulty levels are available for each grade.'
    },
    {
      question: 'My child understands addition but freezes when subtraction appears. What is happening?',
      answer: 'This is incredibly common and usually not a math problem — it is a working memory problem. Subtraction asks children to hold two quantities in mind at once: the original amount and the amount being removed. Addition only asks them to combine. A child who seems confused by subtraction often just needs the problem presented visually (with shapes or a number line) so the "taking away" is visible. Once they see what subtraction means, the freeze usually disappears within weeks — not months.'
    },
    {
      question: 'When should a child start learning subtraction with borrowing?',
      answer: 'Most children are ready to learn borrowing in 3rd grade, but only after two conditions are met. First, they must have automatic recall of basic subtraction facts within 20. Second, and more importantly, they must have a solid understanding of place value — meaning they can explain that the "3" in 53 means 3 ones and the "5" means 5 tens, and they can physically trade a ten for ten ones using base-ten blocks. If a child struggles with borrowing, the fix is almost never more borrowing practice. The fix is going back to place value work until trading tens feels obvious.'
    },
    {
      question: 'Do you include negative numbers in subtraction worksheets?',
      answer: 'No. Our worksheets focus on positive results only, which keeps practice age-appropriate for elementary students. This is intentional — fluency with positive subtraction, including multi-digit borrowing, is the foundation students need before negative numbers are introduced in middle school. A child who is shaky on borrowing is not ready for negative numbers, and including negative results would create confusion about both concepts.'
    },
    {
      question: 'What is the difference between subtraction fluency and subtraction understanding?',
      answer: 'Understanding means a child can explain why 13 - 7 = 6 — they can show it on a number line by jumping backward, demonstrate it with objects, or explain it as "what number plus 7 equals 13?" Fluency means they can retrieve 13 - 7 = 6 instantly without any of that. Both matter. Understanding should come first; fluency is built on top of it through practice. A child who only has fluency without understanding will make systematic errors when borrowing appears. A child who has understanding but not fluency will be slow and error-prone under time pressure.'
    },
    {
      question: 'My child keeps making borrowing errors across zeros — like 400 - 137. How do I fix this?',
      answer: 'Borrowing across zeros is the single best diagnostic for whether place value is truly understood. A child who can borrow in problems like 53 - 27 but falls apart on 400 - 137 has been following a procedure without understanding it. The fix is not more worksheets of the same type. Go back to base-ten blocks. Have your child physically trade a hundred for ten tens, then a ten for ten ones, and watch what happens. Once the physical trading makes sense, the written procedure clicks very quickly — often in a single session. If your child is stuck here, our Subtraction in 30 Days course includes explicit place value work designed for this exact gap.'
    },
    {
      question: 'Can I get worksheets with visual models for younger students?',
      answer: 'Yes. Our generator includes shape counting visual aids specifically designed for kindergarten and 1st grade students to build conceptual understanding of subtraction as take-away. These worksheets show groups of shapes with some crossed out — the child counts what remains. This concrete experience is the essential prerequisite for abstract fact work.'
    },
    {
      question: 'How often do worksheets include word problems?',
      answer: 'Approximately 30% of generated worksheets include word problems with real-world subtraction scenarios appropriate for each grade level. Word problems are essential because they teach children to recognize when subtraction is needed — a skill completely separate from computation. A child who can solve 57 - 23 but cannot identify which operation a word problem requires has learned a procedure without understanding when to use it.'
    },
    {
      question: 'What is the difference between "take-away" subtraction and "comparison" subtraction?',
      answer: 'Take-away subtraction is "I had 12 cookies and ate 5 — how many are left?" Comparison subtraction is "I have 12 cookies and you have 5 — how many more do I have?" Both use the same numbers but represent fundamentally different situations. Many children learn take-away first and then freeze when comparison problems appear because the language is different. Our word problems include both types explicitly so children learn to recognize subtraction regardless of how it is presented. If your child can solve take-away but struggles with comparison, the problem is reading comprehension of the situation, not subtraction skill.'
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
            <div className="practice-badge practice-badge-light-green">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Subtraction Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-light-green">
              Master Subtraction with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom subtraction worksheets with basic facts, two-digit problems, and visual models. 
              Perfect for building conceptual understanding with shapes, counting, and real-world scenarios.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">1-20</div>
                <h3 className="practice-card-title">Number Range</h3>
                <p className="practice-card-text">Basic subtraction facts within 1-20 range</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Visual Models</h3>
                <p className="practice-card-text">Shape counting and visual aids</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">➖</div>
                <h3 className="practice-card-title">Two-Digit</h3>
                <p className="practice-card-text">With and without borrowing</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-light-green">
                Generate Custom Subtraction Worksheets
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
                Why Subtraction Is Harder Than Addition — And Why That Is Normal
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Subtraction looks simple on paper — you start with something and take some away. But it is actually one of the trickier concepts in early elementary math, because it asks children to hold two things in their head at once: the original amount and the amount being removed. That working memory demand is real, and it is why kids who breeze through addition can suddenly hit a wall when the minus sign appears. If your child is struggling, the problem is almost never that subtraction is "too hard" for them. The problem is that they need the problem made visible — with shapes, a number line, or physical objects — so the taking-away is something they can see, not just something they have to hold in memory.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The deeper challenge comes later, with borrowing. When a child has to subtract 47 from 83 and the ones column does not work out cleanly, they need to understand what it means to trade a ten for ten ones — not just follow a procedure. Children who are taught the steps before they understand the concept tend to make systematic errors that get harder to untangle as the numbers get bigger. For students building toward multiplication, the <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice</Link> and <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication practice</Link> pages support the arithmetic fluency that higher operations require.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive subtraction practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">K-2 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Basic subtraction facts 1-10 — building automatic recall of foundational facts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Counting back with shapes — connecting take-away to quantities</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Simple take-away problems — understanding subtraction as removal</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Two-digit subtraction without borrowing — mastering place value alignment</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Introduction to borrowing — understanding why trading tens works</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Subtraction word problems — applying skills in real-world contexts</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Multi-digit subtraction with borrowing — borrowing across multiple columns</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Complex word problems — multi-step subtraction scenarios</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Mental math strategies — subtracting efficiently without paper</span>
                </div>
              </div>
            </div>
          </section>

                    {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Subtraction by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What subtraction mastery looks like at each stage, and what sticking points to watch for
            </p>
            
            {/* K-2 Grades Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Grade K */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-light-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  K
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade K — Basic Facts 1-5 with Visuals
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A kindergartener who has mastered subtraction can take away objects from a small group and count what remains without recounting the original group. The common sticking point is understanding that subtraction reduces the quantity — many kindergarteners will cross out shapes but then recount everything on the page. By the end of kindergarten, a child should solve simple take-away problems with objects and describe subtraction as "taking some away makes less."
                </p>
              </div>

              {/* Grade 1 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-light-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 1 — Facts 1-10, Take-Away
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 1st grader should subtract single-digit numbers within 10 reliably, with most facts moving toward automatic recall. The sticking point is counting back accurately — many children count the starting number as the first backward step. By the end of 1st grade, a child should use number lines correctly and have most differences within 10 memorized rather than calculated each time.
                </p>
              </div>

              {/* Grade 2 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-light-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 2 — Facts 1-20, Simple Problems
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 2nd grader should have automatic recall of all subtraction facts within 20 — retrieved in under 3 seconds without counting back. The common sticking point is fact families: children who learned addition separately often do not see that 13-7 is the inverse of 7+6. By the end of 2nd grade, a child should answer any subtraction fact within 20 instantly and connect each to its corresponding addition fact.
                </p>
              </div>
            </div>

            {/* Grades 3-4 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Grade 3 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-light-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 3 — Two-Digit, No Borrowing
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 3rd grader consolidates two-digit subtraction without borrowing and begins encountering problems that require borrowing. The sticking point is place value — children who cannot explain what digits mean will struggle when borrowing appears. By the end of 3rd grade, a child should add and subtract two-digit numbers without borrowing accurately and understand borrowing conceptually before the written procedure is introduced.
                </p>
              </div>

              {/* Grade 4 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-light-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  4
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 4 — Two-Digit with Borrowing
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 4th grader should borrow accurately across two- and three-digit problems. Mastery means understanding why borrowing works — not just following steps. The sticking point is borrowing across zero: problems like 300 - 147 reveal whether place value is truly understood. By the end of 4th grade, a child should borrow confidently across multiple zeros and explain the trading process using place value language.
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
                <div className="practice-grade-badge practice-grade-badge-light-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  5
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 5 — Multi-Digit Subtraction
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 5th grader subtracts larger numbers and begins working with decimals. Mastery means treating decimal subtraction as an extension of whole-number subtraction. The sticking point is decimal alignment — children who don't line up decimal points make systematic errors. By the end of 5th grade, a child should subtract multi-digit numbers and decimals accurately and explain why decimal points must be aligned.
                </p>
              </div>

              {/* Grade 6 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-light-green" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  6
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 6 — Complex Borrowing
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  By 6th grade, subtraction should be completely fluent as a sub-skill inside algebra, ratios, and multi-step problems. Students still making borrowing errors under pressure need direct remediation focused on place value. If a 6th grader is still slow or error-prone with subtraction, the gap is almost always in 2nd-3rd grade place value understanding — not the current material.
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
              Varied subtraction practice materials
            </p>
            <div className="practice-grid">
              <Link href="/subtraction-basic-facts-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Basic Facts</h3>
                  <span className="practice-count-badge practice-count-badge-light-green">25+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Single-digit subtraction within 20 to build automatic recall</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-light-green">Grades K-2</div>
              </Link>

              <Link href="/subtraction-shape-counting-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Shape Counting</h3>
                  <span className="practice-count-badge practice-count-badge-light-green">20+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Visual subtraction with shapes for conceptual understanding</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-light-green">Grades K-1</div>
              </Link>

              <Link href="/subtraction-take-away-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Take-Away Problems</h3>
                  <span className="practice-count-badge practice-count-badge-light-green">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Simple subtraction scenarios connecting symbols to meaning</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-light-green">Grades K-2</div>
              </Link>

              <Link href="/subtraction-two-digit-no-borrowing-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Two-Digit (No Borrowing)</h3>
                  <span className="practice-count-badge practice-count-badge-light-green">20+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Vertical subtraction practice focusing on place value alignment</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-light-green">Grades 2-3</div>
              </Link>

              <Link href="/subtraction-two-digit-borrowing-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Two-Digit (With Borrowing)</h3>
                  <span className="practice-count-badge practice-count-badge-light-green">20+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Borrowing practice to master the regrouping procedure</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-light-green">Grades 3-4</div>
              </Link>

              <Link href="/subtraction-word-problems-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Word Problems</h3>
                  <span className="practice-count-badge practice-count-badge-light-green">10+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Real-world subtraction scenarios appropriate for each grade level</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-light-green">Grades 1-6</div>
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
                When Subtraction Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap is not in practice — it is in the underlying place value understanding that makes borrowing make sense. If your child consistently struggles with subtraction, especially borrowing across zeros or problems where the minuend digit is smaller than the subtrahend digit, worksheets alone will not bridge that gap. These specific error patterns almost always mean the child has memorized a procedure without understanding the place value behind it. Our <strong>Subtraction in 30 Days</strong> course (grades 2–4) walks through the complete progression from basic facts to borrowing across zeros, with explicit place value work at every stage. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/cdhshb"
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
                View Subtraction in 30 Days — $57
              </a>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Frequently Asked Questions
            </h2>
            <p className="practice-section-subtitle">
              Everything you need to know about subtraction practice worksheets
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
            <div className="practice-cta-box practice-cta-box-light-green">
              <h2 className="practice-cta-title">
                Build Subtraction Fluency!
              </h2>
              <p className="practice-cta-text">
                Master subtraction skills with customized practice sheets that grow with your student. 
                From basic take-away to complex borrowing, build the foundational fluency that all higher math depends on.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-light-green">
                  Create Subtraction Worksheets Now
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
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  +
                </div>
                <div className="practice-nav-label">
                  Addition
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/grade-1-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  1
                </div>
                <div className="practice-nav-label">
                  1st Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-2-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  2
                </div>
                <div className="practice-nav-label">
                  2nd Grade
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
