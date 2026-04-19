// app/multiplication-times-tables-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Times Tables Worksheets | Free Printable Multiplication Practice 2-4 Grade',
  description: 'Free printable times tables worksheets for 2nd-4th grade. Practice each multiplication table from 2s through 12s with systematic worksheets. Perfect for initial learning of multiplication facts.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplication-times-tables-worksheets',
  },
}

export default function MultiplicationTimesTablesWorksheets() {
  const faqs = [
    {
      question: 'What are times tables worksheets?',
      answer: 'Times tables worksheets focus on one multiplication table at a time — all the 3s, all the 4s, etc. For example, a 3s worksheet includes 3×1, 3×2, 3×3, up to 3×12. These worksheets are useful for initial learning of a new table because they reduce cognitive load — the child only needs to learn one set of facts at a time. However, once a table is introduced, the child should quickly move to mixed-fact practice. Staying on single-table worksheets for too long builds sequential chanting, not true retrieval.'
    },
    {
      question: 'What order should I teach the times tables?',
      answer: 'The most effective order is not 1s, 2s, 3s in sequence — that builds chanting, not retrieval. Start with 2s and 5s because children often already have a sense of skip-counting these from everyday experiences (counting by 2s for shoes, by 5s for fingers). Then move to 10s, 11s, and squares (3×3, 4×4, 5×5, 6×6, 7×7, 8×8, 9×9, 10×10, 11×11, 12×12) because these have memorable patterns. Then teach 3s and 4s using derived fact strategies (3×7 is 2×7 plus one more 7). Save 6s, 7s, and 8s for last — these are the hardest because they have no strong patterns. The 9s can be taught anytime using the finger trick or the pattern of digits summing to 9.'
    },
    {
      question: 'How long should my child practice one times table before moving on?',
      answer: 'For initial learning of a new table, 3-5 days of focused practice is usually enough. Day 1: introduce the table using skip-counting and patterns. Day 2: practice with a times table worksheet (single table). Day 3: review the table in isolation. After day 3-5, begin mixing the new table with previously learned tables in mixed-fact worksheets. Do not wait until the table is "perfect" before mixing — mixing accelerates true automaticity. A child who spends 3 weeks on only the 3s before seeing any other numbers will learn the chant, not the facts.'
    },
    {
      question: 'My child knows each table in isolation but mixes them up on mixed worksheets. What is the problem?',
      answer: 'This is not a problem — it is a sign that your child is ready to build true fluency. Knowing tables in isolation is like knowing vocabulary words only on flashcards in the order you learned them. Mixed practice is the real test. The fix is to stop using single-table worksheets entirely and switch exclusively to mixed-fact practice. Within 2-4 weeks of daily mixed practice, the confusion between tables usually resolves completely. If your child is still mixing up facts after 4 weeks of mixed practice, add fact family worksheets to build connections between related facts.'
    },
    {
      question: 'What are the trickiest times tables facts?',
      answer: 'Research consistently shows that the hardest multiplication facts are 6×7=42, 6×8=48, 7×8=56, 7×9=63, and 8×9=72. These are hard because they have no strong patterns and involve the larger digits. For these specific facts, teach derived fact strategies: "I know 5×7=35, so 6×7 is one more 7 — 42." "I know 6×8=48, so 7×8 is 48 plus one more 8 — 56." "I know 8×8=64, so 8×9 is 64 plus one more 8 — 72." These strategies give children a reliable backup when direct retrieval fails, and the practice of using them actually accelerates direct retrieval over time.'
    },
    {
      question: 'Should I use skip-counting to teach times tables?',
      answer: 'Yes — but only as a bridge, not as the final goal. Skip-counting (3, 6, 9, 12, 15) helps children see the pattern of a table and is useful for initial learning. However, skip-counting is still a strategy, not automatic retrieval. A child who solves 3×7 by skip-counting "3, 6, 9, 12, 15, 18, 21" is not fluent — they are just counting on fingers in their head. Use skip-counting to introduce a new table, then move to random-order practice as quickly as possible. The goal is to skip the skip-counting.'
    },
    {
      question: 'Do you have worksheets for each times table individually?',
      answer: 'Yes, our generator can create worksheets for any single times table from 2s through 12s. However, we recommend using these single-table worksheets only during the first 3-5 days of learning a new table. After that, switch to mixed-fact worksheets that combine multiple tables. Many parents make the mistake of keeping their child on single-table worksheets for weeks or months — this builds chanting, not retrieval, and creates sequential dependency that is difficult to break later.'
    },
    {
      question: 'What comes after mastering individual times tables?',
      answer: 'After a child can correctly answer most facts in a single table, the next step is mixed-fact practice that combines all learned tables. Then missing factors (3 × ___ = 21), which builds algebraic thinking. Then fact families (3×7=21, 7×3=21, 21÷3=7, 21÷7=3), which connects multiplication to division. Then word problems that apply multiplication in real-world contexts. Our mixed facts, missing factors, fact families, and word problems worksheets are the natural progression after single-table mastery.'
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
      stage: 'Introduction — Skip-Counting and Patterns',
      description: 'Before using worksheets, introduce the new table through skip-counting and patterns. For the 3s: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36. Have your child notice patterns: digits repeat every 10, the sum of digits in two-digit products often relates to the multiplier. Use this stage for 1-2 days only — it is a bridge, not the destination.'
    },
    {
      stage: 'Single-Table Practice — First 3-5 Days',
      description: 'Use a times table worksheet focusing on one table only. The goal is accuracy, not speed. Your child should be able to answer all facts in the table correctly, even if they are using skip-counting or strategies. Do not time these worksheets. Once your child gets 90% or higher on a single-table worksheet, they are ready to mix that table with previously learned tables.'
    },
    {
      stage: 'Mixed Practice — Building Automaticity',
      description: 'After 3-5 days on a single table, move to mixed-fact worksheets that include the new table alongside previously learned tables. This is where true fluency develops. The confusion your child experiences when tables are mixed is not a setback — it is the learning process. Stay on mixed practice for 2-4 weeks per new table, gradually increasing the range as more tables are mastered.'
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
              Times Tables Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Learn Each Multiplication Table One at a Time
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
              Systematic practice with individual times tables — perfect for initial learning of new facts. Use for 3-5 days per table, then move to mixed practice.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=multiplication&skill=times-tables" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Times Tables Worksheets
              </Link>
              <div style={{
                background: 'var(--surface)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600'
              }}>
                <span style={{color: 'var(--primary)'}}>10</span> free worksheets per day • <span style={{color: 'var(--primary)'}}>3</span> difficulty levels
              </div>
            </div>
          </section>

          {/* Why Times Tables Matter */}
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
              Why Times Tables Are the Gateway to All Higher Math
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Times tables look like a memorization task, but they are actually the single strongest predictor of success in fractions, algebra, and beyond. A child who has to pause to figure out 7×8 cannot keep up with fraction multiplication, cannot simplify ratios, and will struggle with factoring quadratics. The cognitive load of retrieving a multiplication fact should be zero — automatic, effortless, instant. When times tables are automatic, working memory is entirely free for the harder parts of the problem.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              However, most times tables practice is done incorrectly. Drilling the 3s in order (3×1, 3×2, 3×3) builds chanting, not retrieval. A child who learns this way can get to 3×7 by running through the chant from the beginning — but that is not fluency. That is just a longer version of counting on fingers. Our approach is to introduce each table systematically, then quickly move to random-order mixed practice. For students who need visual conceptual understanding before facts, see our{' '}
              <Link href="/multiplication-array-visuals-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>array visuals worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to mix tables and build automaticity, our{' '}
              <Link href="/multiplication-mixed-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>mixed facts worksheets</Link>{' '}
              are the essential next step after single-table introduction.
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
              How to Learn a New Times Table
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
              Three stages — spend most of your time in Stage 3
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
              How to Use a Times Tables Worksheet
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
              Teach this process — use single-table worksheets for 3-5 days only
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Skip-Count First', desc: 'Before writing anything, have your child skip-count the table aloud: "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36." Write the products as they say them. Do this for the first 1-2 days only.' },
                { step: '2', title: 'Practice the Worksheet', desc: 'Complete the times table worksheet. For the first few days, allow skip-counting as a strategy. Do not time the worksheet — accuracy first. The goal is correct answers, not speed.' },
                { step: '3', title: 'Move to Mixed Practice', desc: 'After 3-5 days (or when your child gets 90%+ correct), switch to mixed-fact worksheets. Never stay on single-table worksheets for more than a week — that builds chanting, not retrieval.' }
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

          {/* Table Difficulty Guide */}
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
                Times Tables by Difficulty
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    level: 'Easy Tables',
                    tables: '2s, 5s, 10s, 11s',
                    strategy: 'Start here. Most children already have some skip-counting exposure to 2s, 5s, and 10s from everyday life. The 11s follow a clear pattern (11×3=33). These build confidence before harder tables.'
                  },
                  {
                    level: 'Pattern Tables',
                    tables: '3s, 4s, 9s, Squares',
                    strategy: 'Teach these next. The 3s and 4s can be derived from 2s (3×7 = 2×7 + 7). The 9s have the finger trick and the digit-sum pattern. Squares (3×3, 4×4) are memorable anchor points.'
                  },
                  {
                    level: 'Hard Tables',
                    tables: '6s, 7s, 8s, 12s',
                    strategy: 'Save these for last. They have no strong patterns and must be memorized directly or derived from easier tables (6×7 = 5×7 + 7). Spend extra time on mixed practice with these tables.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {item.level}
                    </h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {item.tables}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontSize: '0.9rem' }}>
                      {item.strategy}
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
                When Times Tables Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For some children, the gap is not in practice — it is in the conceptual foundation that makes multiplication make sense. If your child can recite a table in order but freezes on random facts, or does not understand what multiplication means beyond the chant, worksheets alone will not build true fluency. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact fluency and into division as the inverse operation. You can also browse all available courses and planners on the{' '}
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
            <Link href="/multiplication-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Multiplication Practice Hub
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
                { name: 'Array Visuals', href: '/multiplication-array-visuals-worksheets', desc: 'Build conceptual understanding before memorizing facts' },
                { name: 'Mixed Facts', href: '/multiplication-mixed-facts-worksheets', desc: 'The essential next step after single-table introduction' },
                { name: 'Missing Factors', href: '/multiplication-missing-factors-worksheets', desc: 'Build algebraic thinking with find-the-missing-number problems' },
                { name: 'Fact Families', href: '/multiplication-fact-families-worksheets', desc: 'Connect multiplication to division' },
                { name: 'Multiplication Word Problems', href: '/multiplication-word-problems-worksheets', desc: 'Apply times tables in real-world contexts' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview — where times tables are a major focus' }
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
              Real questions parents ask about times tables practice
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
                Master Each Times Table Step by Step
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
                Generate custom times tables worksheets for any table from 2s through 12s. Choose your table, difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=multiplication&skill=times-tables" style={{
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
                  Create Times Tables Worksheets Now
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