// app/multiplication-practice/page.tsx
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
  const faqs = [
    {
      question: 'What multiplication skills can I practice with these worksheets?',
      answer: 'Our generator creates multiplication worksheets with times tables practice up to 12×12, basic multiplication facts, array visualizations, and real-world word problems. Three difficulty levels are available for each grade: Easy (1-5), Medium (1-8), and Hard (1-12).'
    },
    {
      question: 'What order should I teach the times tables in?',
      answer: 'The most effective order is not 1s, 2s, 3s in sequence — that builds chanting, not retrieval. Start with 2s and 5s because children often already have a sense of skip-counting these from everyday experiences. Then move to 10s, 11s, and squares (3×3, 4×4, etc.) because these have memorable patterns. Then teach 3s and 4s using derived fact strategies (3×7 is 2×7 plus one more 7). Save 6s, 7s, and 8s for last — these are the hardest because they have no strong patterns and must be memorized directly or broken down from known facts. Never teach all tables simultaneously in numerical order.'
    },
    {
      question: 'My child knows the times tables in order but freezes on random fact quizzes. What is the problem?',
      answer: 'This is called sequential dependency. Your child has memorized the tables as a chant — "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36" — so they can get to 3×7 by running through the chant from the beginning, but they cannot retrieve the fact directly when asked "What is 3×7?" in isolation. The fix is exclusive practice in random order. Our mixed facts worksheets mix facts across all tables so your child must retrieve each fact directly rather than reciting a sequence. This is why sequential worksheets (all the 3s together) are actively harmful for building true fluency.'
    },
    {
      question: 'Do you include multi-digit multiplication problems?',
      answer: 'No. Our multiplication worksheets focus on basic multiplication facts and times tables only (products up to 12×12 = 144). The goal at this stage is fluency with core facts, which then becomes the foundation for multi-digit work. Attempting multi-digit multiplication before basic facts are automatic is the single most common cause of errors and frustration. A child who is still calculating 7×8 by counting up will have no working memory left for the multi-digit procedure. Once facts are automatic, see our grade-level worksheets for multi-digit multiplication practice.'
    },
    {
      question: 'How long should multiplication fact practice take each day?',
      answer: 'Ten to fifteen minutes of focused multiplication practice daily will build fluency faster than an hour once a week. The key is that practice should stop when focus drops — a child drilling facts while mentally checked out is not building automaticity, they are just passing time. Consistency over months builds fluency faster than intensity over weeks. For most children, 10 minutes of random-order fact practice daily for 8-12 weeks is enough to achieve full automaticity of all facts through 12×12.'
    },
    {
      question: 'Are array visualizations included in all worksheets?',
      answer: 'Array visualizations are primarily included in worksheets for grades 2-3 to build conceptual understanding of multiplication as equal groups. For older grades, worksheets focus more on fact fluency and word problems, since the concept is established and the goal becomes automaticity. However, if an older student is still struggling with the meaning of multiplication, array worksheets remain useful regardless of grade — conceptual gaps should be addressed directly, not skipped.'
    },
    {
      question: 'What is the difference between knowing multiplication facts and understanding multiplication?',
      answer: 'Understanding means a child can explain why 3×4 = 12 — they can draw an array, show equal groups, or connect it to repeated addition (3+3+3+3 or 4+4+4). Fluency means they can retrieve 3×4 = 12 instantly without any of that. Both matter. Understanding should come first; fluency is built on top of it through practice. A child who only has fluency without understanding will hit a wall when multiplication gets more complex (area, fractions, algebra). A child who has understanding but not fluency will be slow and error-prone under time pressure. Our array worksheets build understanding; our mixed facts worksheets build fluency.'
    },
    {
      question: 'My child knows some tables perfectly but others are completely blank. What should I do?',
      answer: 'This is extremely common and tells you exactly where to focus. The hard tables (6s, 7s, 8s) are almost always the weak spots. The most effective strategy is not to drill the weak tables in isolation — that is boring and inefficient. Instead, focus on derived fact strategies. For 6×7, teach: "I know 5×7 = 35, so 6×7 is one more 7 — 42." For 8×7, teach: "I know 2×7 = 14, so 8×7 is 4 times that — wait, that is too complex. Better: 8×7 = 7×8, and I know 7×8 = 56." Using known facts to derive unknown ones builds both retrieval and number sense simultaneously.'
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
                Why Times Tables Are Hard — and Why Most Practice Makes It Harder
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Most children who struggle with multiplication facts are not struggling with the numbers — they are struggling with how they are being practiced. The most common mistake is drilling tables in sequence (3×1, 3×2, 3×3, 3×4). Children learn the chant but not the facts. Ask them 3×7 in isolation and they have to start from the beginning and count up. That is not fluency; that is just a longer version of counting on fingers. The child is not "bad at math" — they have simply been taught in a way that builds sequential dependency instead of direct retrieval.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The worksheets here are organized to build both understanding and fluency — starting with arrays that make the concept visible, then progressing to random-order fact practice that breaks sequential dependency. For students building toward division, the <Link href="/division-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division practice</Link> and <Link href="/fractions-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>fractions practice</Link> pages support the arithmetic fluency that higher operations require.
              </p>
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
                  <span className="practice-bullet-text">Times tables 1-5 and introductory arrays — building conceptual understanding of equal groups</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Understanding equal groups and skip counting — connecting repeated addition to multiplication</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Times tables 1-8 and fact retrieval — moving from counting to automatic recall</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Solving simple word problems with products to 64 — applying facts in context</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Full 1-12 times tables mastery — automatic recall of all facts without hesitation</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Complex multi-step word problems — using multiplication as a tool in extended problems</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION - REDESIGNED */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Multiplication by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What multiplication mastery looks like at each stage, and what sticking points to watch for
            </p>
            
            {/* Grades 2-3 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Grade 2 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 2 — Arrays & Equal Groups
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 2nd grader who has mastered multiplication readiness can draw an array for a fact and write the equation. The common sticking point is understanding that rows represent equal groups — children who draw the correct total but cannot explain the grouping have not yet grasped the concept. By the end of 2nd grade, a child should be able to represent multiplication as equal groups and repeated addition, and have some exposure to 2s, 5s, and 10s through skip-counting.'
                </p>
              </div>

              {/* Grade 3 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 3 — Core Fact Retrieval
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  This is the critical year for multiplication. Mastery means recalling facts through 8×8 without counting up or skip-counting — retrieval should be automatic. The common sticking point is the 6s, 7s, and 8s — these are the hardest to memorize because they have no strong patterns. By the end of 3rd grade, a child should have most core facts automatic and be able to use derived fact strategies (like "I know 5×7=35, so 6×7 is one more 7 — 42") for the few facts they haven't yet memorized.'
                </p>
              </div>
            </div>

            {/* Grades 4-5 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Grade 4 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  4
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 4 — Automaticity to 12×12
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  A 4th grader should have all facts through 12×12 fully automatic. This is essential because multi-digit multiplication and long division require so much working memory that basic facts must be effortless. The sticking point is usually the 7s and 8s — if these are not solid, multi-digit work will be frustrating for both the child and the parent. By the end of 4th grade, a child should answer any multiplication fact through 12×12 in under 3 seconds without any strategy use — pure retrieval.'
                </p>
              </div>

              {/* Grade 5 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  5
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 5 — Tool for Application
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  By 5th grade, multiplication is a sub-skill used in fractions, area, volume, and ratio problems. Mastery means facts are so automatic that the child never notices them as separate steps — they are simply part of the background. Students still slow with basic facts at this stage benefit from direct fluency work before attempting more complex problems. If a 5th grader pauses on 7×8, the gap is fact fluency, not fraction understanding, and drilling fractions will not fix it.'
                </p>
              </div>
            </div>

            {/* Grade 6 Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Grade 6 */}
              <div className="practice-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div className="practice-grade-badge practice-grade-badge-purple" style={{ textAlign: 'center', margin: '0 auto 0.75rem' }}>
                  6
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Grade 6 — Fluent Sub-Skill
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                  By 6th grade, multiplication should be completely fluent as a sub-skill inside algebra, ratios, proportions, and multi-step word problems. Students still making basic fact errors under pressure need direct remediation rather than more complex problem practice. If a 6th grader is still slow with 7×8 or 6×9, the intervention is 10-15 minutes of daily random-order fact practice for 4-8 weeks — not more 6th-grade-level worksheets that assume fluency.'
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
              Varied multiplication practice materials
            </p>
            <div className="practice-grid">
              <Link href="/multiplication-times-tables-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Times Tables</h3>
                  <span className="practice-count-badge practice-count-badge-purple">25+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Systematic practice with each times table in isolation — use only for initial learning, not for fluency</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 2-4</div>
              </Link>

              <Link href="/multiplication-array-visuals-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Array Visuals</h3>
                  <span className="practice-count-badge practice-count-badge-purple">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Multiplication as equal groups with visual models — builds conceptual understanding</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 2-3</div>
              </Link>

              <Link href="/multiplication-mixed-facts-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Mixed Facts</h3>
                  <span className="practice-count-badge practice-count-badge-purple">30+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Random-order fact practice to build automaticity and break sequential dependency</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 3-5</div>
              </Link>

              <Link href="/multiplication-missing-factors-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Missing Factors</h3>
                  <span className="practice-count-badge practice-count-badge-purple">20+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Find the missing number in multiplication equations — builds algebraic thinking</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 3-5</div>
              </Link>

              <Link href="/multiplication-word-problems-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Word Problems</h3>
                  <span className="practice-count-badge practice-count-badge-purple">15+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Real-world multiplication scenarios appropriate for each grade level</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 3-6</div>
              </Link>

              <Link href="/multiplication-fact-families-worksheets" className="practice-worksheet-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="practice-worksheet-header">
                  <h3 className="practice-worksheet-title">Fact Families</h3>
                  <span className="practice-count-badge practice-count-badge-purple">20+ problems</span>
                </div>
                <p className="practice-worksheet-desc">Connect multiplication to division through fact families — builds both operations</p>
                <div className="practice-worksheet-grades practice-worksheet-grades-purple">Grades 3-5</div>
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
                When Multiplication Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap is not in practice — it is in the conceptual foundation that makes multiplication make sense. If your child can recite the times tables in order but freezes on random facts, or does not connect multiplication to equal groups and arrays, worksheets alone will not bridge that gap. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact fluency and into division as the inverse operation. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/csfto"
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
                View Multiplication & Division Foundations — $57
              </a>
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
                Build Multiplication Fluency!
              </h2>
              <p className="practice-cta-text">
                Master multiplication facts with customized practice sheets that grow with your student. 
                From basic arrays to complete times tables fluency, build the foundational skills that all higher math depends on.
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