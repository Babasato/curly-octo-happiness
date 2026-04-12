// app/division-basic-facts-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basic Division Facts Worksheets | Free Printable 3-4 Grade Math',
  description: 'Free printable basic division facts worksheets for 3rd-4th grade. Practice division within the 12×12 multiplication table. Build automatic recall of division facts.',
  alternates: {
    canonical: 'https://homeschoolmath.site/division-basic-facts-worksheets',
  },
}

export default function DivisionBasicFactsWorksheets() {
  const faqs = [
    {
      question: 'What are basic division facts?',
      answer: 'Basic division facts are quotients of two numbers within the 12×12 multiplication table. For example, 56÷7=8, 72÷9=8, 36÷6=6. A child who has mastered basic division facts can recall any fact instantly without skip-counting or using multiplication to derive the answer. This automaticity is what makes long division and fraction work manageable — when basic division facts are effortless, working memory is free for the rest of the problem.'
    },
    {
      question: 'When should my child start basic division facts practice?',
      answer: 'Do not start division facts until your child has automatic recall of multiplication facts within the 12×12 table. A child who still pauses on 7×8 will struggle with 56÷7 because division asks the question in reverse. If you teach division before multiplication is solid, the child will have to memorize twice as many facts (100 multiplication + 100 division = 200 total). If you wait until multiplication is automatic, the child can learn division in half the time by using fact families. The typical readiness benchmark: 90%+ accuracy on mixed multiplication facts within 3 seconds per fact.'
    },
    {
      question: 'What order should I teach basic division facts?',
      answer: 'Teach division facts in the same order you taught multiplication facts, but always attached to multiplication. Start with division facts from the easy tables: 2s, 5s, 10s (e.g., 20÷2=10, 20÷5=4, 20÷10=2). Then move to division facts from the pattern tables: 3s, 4s, 9s. Finally, teach division facts from the hard tables: 6s, 7s, 8s, 12s. Never teach division facts in isolation — always present them alongside their multiplication fact family: "7×8=56, so 56÷7=8 and 56÷8=7."'
    },
    {
      question: 'My child knows multiplication facts but freezes on division. What is the problem?',
      answer: 'This is called one-directional learning. Your child has learned multiplication as forward operation (factors → product) but has not learned to run it backward (product ÷ factor = other factor). The fix is not more division drills — it is fact family practice that explicitly teaches the relationship. Show your child: "If you know 7×8=56, then you also know 56÷7=8 and 56÷8=7. Division is just multiplication backward." Within 2-4 weeks of fact family practice, most children make the connection and division becomes as easy as multiplication.'
    },
    {
      question: 'How many division facts should my child practice daily?',
      answer: '20-30 division facts per session is the effective range. Practice should be short and daily — 10 to 15 minutes every day beats one long session per week. However, if your child is still building multiplication fluency, prioritize multiplication practice over division. Division practice is most effective when multiplication is already automatic. Once multiplication is solid, 4-6 weeks of daily division fact practice (using fact families) is usually enough for full automaticity.'
    },
    {
      question: 'Should I use timed tests for division fact practice?',
      answer: 'Timed tests are useful only after accuracy is already high — never before. If your child answers 90% or more of division facts correctly but slowly, timed drills will build speed. If accuracy is below 90%, timed tests will create anxiety and reinforce errors. The correct sequence is: multiplication facts first, then division understanding through fact families, then division accuracy, then division speed. Many parents skip the fact family step and go directly to division drills, which creates frustration.'
    },
    {
      question: 'What is the difference between division fluency and division understanding?',
      answer: 'Understanding means a child can explain why 56÷7=8 — they can say "56 split into 7 equal groups gives 8 in each group" or "7×8=56, so 56÷7=8." Fluency means they can retrieve 56÷7=8 instantly without any explanation. Both matter. Understanding should come first (through equal sharing and fact families); fluency is built on top of it through practice. A child who only has fluency without understanding will hit a wall when division appears in word problems or fractions. A child who has understanding but not fluency will be slow and error-prone under time pressure.'
    },
    {
      question: 'What division facts are the hardest for most children?',
      answer: 'The hardest division facts correspond to the hardest multiplication facts: 56÷7=8, 56÷8=7, 42÷6=7, 42÷7=6, 72÷8=9, 72÷9=8, 63÷7=9, 63÷9=7, 54÷6=9, 54÷9=6. These are hard because they involve the larger numbers (6s, 7s, 8s, 9s) and have no strong patterns. For these specific facts, teach the connection to multiplication explicitly: "56÷7 asks what times 7 equals 56. 7×8=56, so the answer is 8." Never drill these facts in isolation — always teach them as part of the fact family with multiplication.'
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
      stage: 'Prerequisite — Automatic Multiplication Facts',
      description: 'Before division facts will make sense, multiplication facts must be automatic. A child who still pauses on 7×8 will not be able to answer 56÷7 quickly because division requires running the multiplication fact backward. Test: Can your child answer any multiplication fact through 12×12 in under 3 seconds? If not, spend 2-4 weeks on multiplication mixed facts and fact families before starting division. This prerequisite is not negotiable — skipping it is the #1 cause of division struggles.'
    },
    {
      stage: 'Fact Family Introduction — Division as Inverse',
      description: 'Once multiplication facts are automatic, introduce division through fact families. For each multiplication fact (7×8=56), teach the two division facts (56÷7=8, 56÷8=7). Do not drill division facts in isolation. Use worksheets that show all three numbers (7, 8, 56) and have the child write all four equations. Spend 2-3 weeks on this stage before moving to standard division worksheets.'
    },
    {
      stage: 'Basic Division Facts Practice',
      description: 'After fact families are understood, move to standard division worksheets (56÷7=___). Start with easy tables (2s, 5s, 10s) then gradually expand to harder tables. Practice should be daily and short (10-15 minutes). The goal is automaticity — answering any division fact within 3 seconds. Most children need 4-6 weeks of daily division fact practice after multiplication is automatic to achieve full fluency.'
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
              Basic Division Facts Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Build Automatic Recall of Division Facts Within 144
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
              Division is multiplication backward. If your child knows multiplication facts, division can be learned in half the time through fact families.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=division&skill=basic-facts" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Basic Division Facts Worksheets
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

          {/* Why Basic Division Facts Matter */}
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
              Why Basic Division Facts Are the Key to Long Division and Fractions
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Division facts look simple, but they are the gatekeeper to long division, fractions, ratios, and algebra. A child who has to pause to figure out 56÷7 cannot keep up with long division (which requires estimating, multiplying, subtracting, and bringing down — each step depending on automatic fact retrieval). The cognitive load of retrieving a division fact should be zero.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              However, most division practice is done incorrectly — drilling division facts in isolation without connecting them to multiplication. This doubles the memorization burden and creates one-directional learners who can multiply but cannot divide. Our approach is different: division facts are taught as the inverse of multiplication, through fact families. For students who need to build multiplication fluency before division, see our{' '}
              <Link href="/multiplication-mixed-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>mixed multiplication facts worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to connect division to multiplication explicitly, our{' '}
              <Link href="/division-fact-families-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>fact families worksheets</Link>{' '}
              are the essential first step before basic division facts practice.
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
              How to Build Division Fact Fluency
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
              Three stages — do not skip the first two
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
              How to Solve Basic Division Facts
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
              Teach this script — it connects division to multiplication
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read as a Question', desc: 'For 56÷7=___, say: "7 times what equals 56?" Have your child repeat this question. This reframes division as a missing factor multiplication problem.' },
                { step: '2', title: 'Recall the Multiplication Fact', desc: 'Ask: "What number times 7 gives 56?" Your child recalls 7×8=56. Say: "That means 56÷7=8."' },
                { step: '3', title: 'Write and Check', desc: 'Write the answer (8). Check by multiplying: 7×8=56. If it works, the answer is correct. This check builds self-monitoring skills.' }
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

          {/* Fact Difficulty Guide */}
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
                Division Facts by Difficulty
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    level: 'Easy Facts',
                    examples: '20÷2=10, 20÷5=4, 20÷10=2, 12÷3=4, 12÷4=3, 24÷4=6',
                    strategy: 'Start here. These come from the 2s, 5s, 10s, 3s, and 4s multiplication tables. Most children find these facts easy because the multiplication patterns are familiar.'
                  },
                  {
                    level: 'Medium Facts',
                    examples: '36÷6=6, 49÷7=7, 64÷8=8, 81÷9=9, 18÷3=6, 18÷6=3',
                    strategy: 'These often involve squares (6×6, 7×7, 8×8, 9×9) or small numbers. Teach the connection to multiplication squares explicitly.'
                  },
                  {
                    level: 'Hard Facts',
                    examples: '56÷7=8, 56÷8=7, 42÷6=7, 42÷7=6, 72÷8=9, 72÷9=8, 63÷7=9, 63÷9=7, 54÷6=9, 54÷9=6',
                    strategy: 'Save these for last. They come from the hardest multiplication tables (6s, 7s, 8s, 9s). Teach each hard fact as part of a fact family with its multiplication partner.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {item.level}
                    </h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {item.examples}
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
                When Division Fact Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with division facts despite knowing multiplication facts, the issue is almost always one-directional learning — they have not internalized that division is multiplication backward. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from multiplication fluency through fact families to division automaticity. You can also browse all available courses and planners on the{' '}
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
                { name: 'Fact Families', href: '/division-fact-families-worksheets', desc: 'The essential prerequisite — connect division to multiplication' },
                { name: 'Missing Divisors', href: '/division-missing-divisors-worksheets', desc: 'Build flexible thinking with find-the-missing-number problems' },
                { name: 'Equal Sharing', href: '/division-equal-sharing-worksheets', desc: 'Real-world word problems that make division meaningful' },
                { name: 'Mixed Multiplication Facts', href: '/multiplication-mixed-facts-worksheets', desc: 'Build multiplication fluency before division' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview — where division is introduced' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Where division facts are consolidated' }
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
              Real questions parents ask about basic division facts
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
                Build Division Fact Fluency Today
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
                Generate custom basic division facts worksheets. Choose your fact range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=division&skill=basic-facts" style={{
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
                  Create Basic Division Facts Worksheets Now
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