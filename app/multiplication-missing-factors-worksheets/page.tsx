// app/multiplication-missing-factors-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Missing Factors Multiplication Worksheets | Free Printable 3-5 Grade Math',
  description: 'Free printable missing factors multiplication worksheets for 3rd-5th grade. Practice solving for the unknown number in multiplication equations. Build algebraic thinking skills.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplication-missing-factors-worksheets',
  },
}

export default function MultiplicationMissingFactorsWorksheets() {
  const faqs = [
    {
      question: 'What are missing factors worksheets?',
      answer: 'Missing factors worksheets present multiplication equations with one factor missing. For example: 3 × ___ = 21 or ___ × 7 = 42. The child must find the missing number. This is the bridge from basic fact fluency to algebraic thinking. Instead of "what is 3×7?" the question becomes "what number times 3 equals 21?" This is exactly the same thinking required for solving equations like 3x = 21 in algebra.'
    },
    {
      question: 'When should my child start missing factors practice?',
      answer: 'Start missing factors practice after your child has achieved 90%+ accuracy on mixed multiplication facts (but before speed is fully automatic). Typically this is after 4-8 weeks of mixed practice. Missing factors are harder than standard fact problems because they require the child to think backward. If your child struggles with missing factors, it often reveals which facts are not truly automatic — the facts they can answer forward but not backward. This is valuable diagnostic information.'
    },
    {
      question: 'How do missing factors connect to division?',
      answer: 'Missing factors are division in disguise. The equation 3 × ___ = 21 is asking the same question as 21 ÷ 3 = ___. Teaching missing factors alongside division helps children see that multiplication and division are inverse operations. In fact, many children understand missing factors more easily than division notation because the multiplication structure is familiar. Use missing factors as a bridge: first solve 3 × ___ = 21, then introduce 21 ÷ 3 = ___ as the same question written differently.'
    },
    {
      question: 'My child can solve 3×7=21 but freezes on 3×___=21. What is happening?',
      answer: 'This is extremely common and tells you that your child has learned multiplication facts in one direction only — forward from factors to product. Missing factors require backward thinking: given the product and one factor, find the other factor. This is a different cognitive skill. The fix is explicit teaching: "3 times what number equals 21? Let\'s think: 3×1=3, 3×2=6, 3×3=9, 3×4=12, 3×5=15, 3×6=18, 3×7=21. So the missing number is 7." After a few weeks of this practice, most children develop backward retrieval automatically.'
    },
    {
      question: 'What is the difference between missing factors and division?',
      answer: 'Missing factors use multiplication notation (3 × ___ = 21). Division uses division notation (21 ÷ 3 = 7). Both ask the same question: "What number times 3 equals 21?" Missing factors are often easier for children because they stay within the familiar multiplication format. Use missing factors to introduce the concept, then transition to division notation once the child understands the relationship. Our fact families worksheets explicitly teach both notations together.'
    },
    {
      question: 'Should missing factors worksheets include word problems?',
      answer: 'Yes — word problems are where missing factors really shine. For example: "A farmer puts apples into 3 baskets. Each basket has the same number of apples. There are 21 apples total. How many apples are in each basket?" This is a missing factors problem (3 × ___ = 21) in a real-world context. Word problems help children see that missing factors are not just abstract puzzles but represent real situations like sharing equally (division) or finding an unknown quantity (algebra).'
    },
    {
      question: 'What order should I teach missing factors?',
      answer: 'Start with missing factors where the known factor is small (2s, 3s, 4s, 5s) and the product is within the child\'s known facts. For example: 2 × ___ = 16, 5 × ___ = 35. Then progress to larger known factors: 7 × ___ = 56, 8 × ___ = 72. Then introduce problems where the missing factor is the first number: ___ × 7 = 42. This is harder because the equation structure is less familiar. Finally, mix both types on the same worksheet. Most children need 4-6 weeks of missing factors practice before the skill feels automatic.'
    },
    {
      question: 'What comes after missing factors worksheets?',
      answer: 'After missing factors, the next step is fact families (3×7=21, 7×3=21, 21÷3=7, 21÷7=3), which explicitly connect multiplication and division. Then division facts practice, then multi-step word problems that require both operations. Missing factors are the bridge from basic fact fluency to algebraic thinking — once your child can solve 3 × ___ = 21 quickly, they are ready for 3x = 21 in algebra.'
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
      stage: 'Missing Factor Last (3 × ___ = 21)',
      description: 'Start with problems where the missing factor is the second number. This format is closest to standard multiplication (3×7=21), so it is easier for children to understand. The child knows the first factor and the product, and must find the second factor. Spend 2-3 weeks on this format. The most common error is guessing randomly rather than using fact recall or skip-counting.'
    },
    {
      stage: 'Missing Factor First (___ × 7 = 42)',
      description: 'Once the first format is solid, introduce problems where the missing factor is the first number. This is harder because the equation reads backward from what children are used to. Teach the commutative property: ___ × 7 = 42 is the same question as 7 × ___ = 42. Use this connection to help your child reframe the problem into the familiar format. Spend 2-3 weeks on this format.'
    },
    {
      stage: 'Mixed Missing Factors and Word Problems',
      description: 'Combine both formats on the same worksheet and add word problems that require missing factors. For example: "A gardener plants 6 rows of lettuce with the same number in each row. There are 54 lettuce plants total. How many are in each row?" (6 × ___ = 54). This stage builds the connection to real-world problem-solving and prepares children for division and algebra.'
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
              Missing Factors Multiplication Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Solve for the Unknown Number — Build Algebraic Thinking
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
              3 × ___ = 21. This is the bridge from basic facts to algebra. If your child knows multiplication facts, missing factors teach them to think backward.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=multiplication&skill=missing-factors" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Missing Factors Worksheets
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

          {/* Why Missing Factors Matter */}
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
              Why Missing Factors Are the Bridge from Facts to Algebra
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many children can answer 3×7=21 without hesitation. But ask them 3×___=21 and they freeze. This is not a math problem — it is a thinking-direction problem. Standard fact practice teaches forward thinking: factors → product. Missing factors teach backward thinking: product and one factor → the other factor. This is exactly the skill required for division and for solving equations like 3x = 21 in algebra.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Missing factors also reveal which facts are truly automatic. A child who can answer 3×7=21 instantly but takes 10 seconds to solve 3×___=21 does not have automatic retrieval — they have forward-only retrieval. The fix is missing factors practice, not more forward fact drills. For students who need to build forward fact fluency before missing factors, see our{' '}
              <Link href="/multiplication-mixed-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>mixed facts worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to connect missing factors to division, our{' '}
              <Link href="/multiplication-fact-families-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>fact families worksheets</Link>{' '}
              teach multiplication and division together.
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
              How to Progress Through Missing Factors
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
              Three stages — spend 2-3 weeks on each
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
              How to Solve Missing Factor Problems
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
              Teach this script — it works for both formats
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read the Equation Aloud', desc: 'For 3 × ___ = 21, say: "3 times what number equals 21?" Have your child repeat the question. This verbal reframing is critical for backward thinking.' },
                { step: '2', title: 'Use Known Facts or Skip-Count', desc: 'Ask: "What do I multiply 3 by to get 21?" Skip-count: 3, 6, 9, 12, 15, 18, 21. The seventh number is 21, so the answer is 7.' },
                { step: '3', title: 'Check the Answer', desc: 'Plug the answer back into the equation: 3 × 7 = 21. Does that work? If yes, write the answer. This check builds self-monitoring skills.' }
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

          {/* Problem Type Guide */}
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
                Three Types of Missing Factors Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Missing Factor Last',
                    format: '3 × ___ = 21',
                    who: 'Beginning missing factors',
                    desc: 'The missing number is the second factor. This format is closest to standard multiplication and should be taught first.'
                  },
                  {
                    title: 'Missing Factor First',
                    format: '___ × 7 = 42',
                    who: 'Intermediate missing factors',
                    desc: 'The missing number is the first factor. Teach the commutative property to reframe as 7 × ___ = 42.'
                  },
                  {
                    title: 'Missing Factors Word Problems',
                    format: 'Word problem + equation',
                    who: 'Advanced missing factors',
                    desc: 'Real-world scenarios that require solving for an unknown number. Builds connection to division and algebra.'
                  }
                ].map((type, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {type.title}
                    </h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {type.format}
                    </p>
                    <p style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                      {type.who}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontSize: '0.9rem' }}>
                      {type.desc}
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
                When Missing Factors Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with missing factors despite having solid forward fact recall, the issue may be that they never truly understood multiplication conceptually — they memorized the chant but not the relationships. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact fluency to missing factors and division. You can also browse all available courses and planners on the{' '}
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
                { name: 'Mixed Facts', href: '/multiplication-mixed-facts-worksheets', desc: 'Build forward fact fluency before missing factors' },
                { name: 'Fact Families', href: '/multiplication-fact-families-worksheets', desc: 'Connect missing factors to division' },
                { name: 'Multiplication Word Problems', href: '/multiplication-word-problems-worksheets', desc: 'Apply missing factors in real-world contexts' },
                { name: 'Times Tables', href: '/multiplication-times-tables-worksheets', desc: 'Introduce each table before missing factors' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview — where missing factors appear' },
                { name: 'Division Practice', href: '/division-practice', desc: 'The next step after missing factors' }
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
              Real questions parents ask about missing factors
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
                Build Algebraic Thinking Today
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
                Generate custom missing factors worksheets. Choose your fact range and problem type, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=multiplication&skill=missing-factors" style={{
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
                  Create Missing Factors Worksheets Now
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