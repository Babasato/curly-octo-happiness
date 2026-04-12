// app/division-mixed-practice-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mixed Division Practice Worksheets | Free Printable 4-6 Grade Math',
  description: 'Free printable mixed division practice worksheets for 4th-6th grade. Interleaved division problems with facts through 144. Build durable, automatic fluency for long division readiness.',
  alternates: {
    canonical: 'https://homeschoolmath.site/division-mixed-practice-worksheets',
  },
}

export default function DivisionMixedPracticeWorksheets() {
  const faqs = [
    {
      question: 'What are mixed division practice worksheets?',
      answer: 'Mixed division practice worksheets combine division facts from multiple tables in random order on the same page. For example, a single worksheet might include 56÷7, 72÷8, 36÷6, 42÷7, 81÷9, 24÷4 — all mixed together. This is the opposite of single-table division worksheets (all the 7s together). Mixed practice forces the child to retrieve each fact directly without relying on patterns or sequences. This is the single most important type of practice for building durable, automatic division fluency that transfers to long division.'
    },
    {
      question: 'When should my child start mixed division practice?',
      answer: 'Start mixed division practice after your child has completed fact families, basic division facts, missing divisors, and inverse operations — typically in late 4th grade or early 5th grade. Mixed practice is the final stage of division fact fluency. It is harder than single-table practice because the child cannot rely on patterns. The confusion your child experiences when switching to mixed practice is not a problem — it is the learning process. Most children need 4-8 weeks of mixed division practice before facts are truly automatic.'
    },
    {
      question: 'Why is mixed practice better than single-table division practice?',
      answer: 'Single-table practice (all the 7s) builds pattern recognition — children learn that the answers to 14÷7, 21÷7, 28÷7 follow a sequence. But that pattern does not help when the problem is 56÷8. Mixed practice breaks this dependency. Each fact appears in random order, so the child cannot rely on patterns. Research consistently shows that mixed (interleaved) practice produces faster, more durable learning than blocked (single-table) practice. The discomfort your child feels is not a setback — it is the learning process.'
    },
    {
      question: 'How many division facts should be on a mixed practice worksheet?',
      answer: '25-40 problems per worksheet is the effective range for division mixed practice. Fewer than 25 does not provide enough retrieval practice. More than 40 becomes fatiguing, and fatigued practice reinforces errors rather than facts. The session should take 10-15 minutes. If your child is taking longer than 15 minutes, reduce the number of problems or focus on a smaller range of facts. Speed will come with practice — do not rush it.'
    },
    {
      question: 'My child is slower on mixed division worksheets than on single-table worksheets. Is this a problem?',
      answer: 'No — this is expected and actually a good sign. Slower speed on mixed worksheets means your child was relying on patterns in single-table practice. The patterns are gone now, and your child has to actually retrieve each fact. This is the real work of building fluency. Within 4-8 weeks of daily mixed practice, speed will improve dramatically. If your child is getting most answers correct but is slow, stay on mixed practice and do not return to single-table worksheets. Speed comes from retrieval practice, not from patterns.'
    },
    {
      question: 'Should I time mixed division practice worksheets?',
      answer: 'Timed tests are useful only after accuracy is already high — never before. If your child answers 90% or more of division facts correctly on mixed worksheets but slowly (over 3 seconds per fact), timed drills will build speed. If accuracy is below 90%, timed tests will create anxiety and reinforce errors. The correct sequence is: conceptual understanding first (equal sharing), accuracy second (mixed practice without timing), speed third (timed mixed practice). Many parents skip to speed too early and create math anxiety.'
    },
    {
      question: 'What range of division facts should mixed practice cover?',
      answer: 'Start with a narrow range (division facts from 2s, 5s, 10s only) when first introducing mixed division practice. Gradually expand the range as your child masters each set of facts. A typical progression: Week 1-2: 2s, 5s, 10s. Week 3-4: add 3s and 4s. Week 5-6: add 6s and 9s. Week 7-8: add 7s, 8s, 11s, 12s. Do not include division facts from a table until your child has mastered the corresponding multiplication facts and basic division facts for that table.'
    },
    {
      question: 'What comes after mixed division practice worksheets?',
      answer: 'After your child can answer 90%+ of mixed division facts correctly within 3 seconds per fact, they are ready for long division. Mixed division practice is the final stage of basic fact fluency. Long division requires estimating, multiplying, subtracting, and bringing down — each step depends on automatic division fact retrieval. A child who pauses on 56÷7 will struggle with every step of long division. Once mixed division facts are automatic, long division becomes dramatically easier. See our grade-level worksheets for long division practice.'
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

  const progressionLevels = [
    {
      stage: 'Narrow Mixed Practice (2-3 Tables)',
      description: 'Start with just 2-3 division tables that your child knows well — typically 2s, 5s, and 10s. The worksheet includes only division facts from these tables, but mixed randomly. This introduces the concept of mixed practice without overwhelming the child. Spend 1-2 weeks at this stage. The goal is not speed but the habit of looking at each fact individually rather than relying on patterns.'
    },
    {
      stage: 'Expanding Mixed Practice (4-6 Tables)',
      description: 'As each new set of division facts is mastered, add it to the mixed rotation. The worksheet now includes division facts from 4-6 tables mixed randomly. This is where most of the learning happens. Your child will experience confusion when new facts appear alongside known facts — that confusion is the learning process. Stay at this stage for 4-6 weeks as you gradually add more tables.'
    },
    {
      stage: 'Full Mixed Practice (All Tables 2-12)',
      description: 'Once all division tables have been introduced, switch to full mixed practice covering all division facts with dividends up to 144. This is the final fluency stage. Your child should practice full mixed division facts daily for 4-8 weeks until they can answer 90%+ of problems correctly within 3 seconds each. At this point, division facts are truly automatic, and your child is ready for long division.'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div style={{
        minHeight: '100vh',
        background: 'var(--background)',
        padding: '2rem 0'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          {/* Hero Section */}
          <section style={{
            textAlign: 'center',
            padding: '3rem 0',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--primary)',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '600',
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              marginBottom: '1.5rem'
            }}>
              Free Printable Worksheets
            </div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Mixed Division Practice Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Interleaved Practice for Automatic Division Fluency
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Single-table worksheets build patterns. Mixed worksheets build automatic retrieval. This is the final stage of division fact fluency — the gateway to long division.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=fourth&topic=division&skill=mixed-practice" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Mixed Division Practice Worksheets
              </Link>
              <div style={{
                background: '#f1f5f9',
                color: '#1e293b',
                border: '1px solid #e2e8f0',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600'
              }}>
                <span style={{color: 'var(--primary)'}}>10</span> free worksheets per day • <span style={{color: 'var(--primary)'}}>3</span> difficulty levels
              </div>
            </div>
          </section>

          {/* Why Mixed Practice Matters */}
          <section style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Why Mixed Practice Is the Only Way to Build Long Division Readiness
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Most division practice is done incorrectly. Children spend weeks on single-table worksheets — all the 7s, then all the 8s, then all the 9s. They learn the patterns but not the facts. Ask them 56÷7 in isolation and they have to think "7, 14, 21, 28, 35, 42, 49, 56 — that's 8." That is not fluency; it is counting by 7s. Mixed practice is the fix. When facts appear in random order, the child cannot rely on patterns. They must retrieve each fact directly from memory.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              The discomfort your child feels when switching from single-table to mixed division worksheets is not a problem — it is the learning process. The confusion is what forces the brain to build separate memory traces for each fact. Within 4-8 weeks of daily mixed practice, most children transition from pattern-based to true retrieval. For students who need conceptual understanding before mixed practice, see our{' '}
              <Link href="/division-equal-sharing-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>equal sharing worksheets</Link>{' '}
              and{' '}
              <Link href="/division-fact-families-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>fact families worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to apply mixed division fluency to long division, see our grade-level worksheets for long division practice.
            </p>
          </section>

          {/* Progression */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              How to Progress Through Mixed Division Practice
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Gradually expand the range — do not add all tables at once
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {progressionLevels.map((level, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                    {level.stage}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How To Steps */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              How to Use Mixed Division Practice Worksheets
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Three principles — follow these for best results
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Start Narrow, Expand Gradually', desc: 'Begin with only 2-3 division tables that your child knows well. After 1-2 weeks, add a new table. Wait 1-2 weeks before adding another. Adding all tables at once causes frustration and overload.' },
                { step: '2', title: 'Prioritize Accuracy Over Speed', desc: 'Do not time mixed division worksheets until accuracy is 90% or higher. Timed practice before accuracy is solid creates anxiety and reinforces errors. Let your child work at their own pace initially.' },
                { step: '3', title: 'Practice Daily, Keep Sessions Short', desc: '10-15 minutes of mixed division practice daily is far more effective than one long session per week. Stop when attention drops — fatigued practice reinforces errors. Consistency over months builds fluency.' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>{item.step}</div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Progression Guide */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                Suggested Mixed Division Practice Progression by Week
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    weeks: 'Weeks 1-2',
                    tables: '2s, 5s, 10s',
                    focus: 'Introduce mixed division practice with the easiest tables. Your child may be slower at first — this is normal. Do not time.'
                  },
                  {
                    weeks: 'Weeks 3-4',
                    tables: 'Add 3s and 4s',
                    focus: 'Confusion between 3s and 4s division facts is common. Stay on mixed practice for 2 weeks before adding more tables.'
                  },
                  {
                    weeks: 'Weeks 5-6',
                    tables: 'Add 6s and 9s',
                    focus: 'These are harder. Use fact family connections: if 6×7=42, then 42÷6=7 and 42÷7=6.'
                  },
                  {
                    weeks: 'Weeks 7-8',
                    tables: 'Add 7s, 8s, 11s, 12s',
                    focus: 'These are the hardest division facts. Spend extra time on mixed practice with these facts — 4-6 weeks may be needed.'
                  },
                  {
                    weeks: 'Weeks 9-12',
                    tables: 'Full range 2-12',
                    focus: 'Begin timing once accuracy is 90%+. Goal: under 3 seconds per fact. This is long division readiness.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {item.weeks}
                    </h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {item.tables}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontSize: '0.9rem' }}>
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Course Mention */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{ fontSize: '1.375rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                When Mixed Division Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with mixed division facts after 8-12 weeks of daily practice, the issue may be that the underlying conceptual foundation was never solid — they may not truly understand the relationship between multiplication and division. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact families to mixed practice and long division readiness. You can also browse all available courses and planners on the{' '}
                <Link href="/resources" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>resources page</Link>.
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

          {/* Back to Parent Link */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Link href="/division-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Division Practice Hub
            </Link>
          </section>

          {/* Related Pages */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}>
              Related Worksheet Pages
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Basic Division Facts', href: '/division-basic-facts-worksheets', desc: 'Build single-table fluency before mixed practice' },
                { name: 'Fact Families', href: '/division-fact-families-worksheets', desc: 'Connect division to multiplication — essential prerequisite' },
                { name: 'Missing Divisors', href: '/division-missing-divisors-worksheets', desc: 'Build flexible thinking alongside mixed practice' },
                { name: 'Inverse Operations', href: '/division-inverse-operations-worksheets', desc: 'Use multiplication to check division facts' },
                { name: 'Equal Sharing', href: '/division-equal-sharing-worksheets', desc: 'Conceptual understanding before fluency' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview — where mixed division practice is used' }
              ].map((item, index) => (
                <Link key={index} href={item.href} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textDecoration: 'none'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Real questions parents ask about mixed division practice
            </p>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                Build Long Division Readiness Today
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6'
              }}>
                Generate custom mixed division practice worksheets. Choose your fact range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=fourth&topic=division&skill=mixed-practice" style={{
                  background: 'white',
                  color: 'var(--primary)',
                  border: 'none',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '1.125rem'
                }}>
                  Create Mixed Division Practice Worksheets Now
                </Link>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  margin: '0'
                }}>
                  Free • No registration required • 10 worksheets per day
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}