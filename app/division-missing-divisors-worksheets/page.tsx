// app/division-missing-divisors-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Missing Divisors Worksheets | Free Printable 3-5 Grade Math',
  description: 'Free printable missing divisors worksheets for 3rd-5th grade. Practice finding the missing number in division equations. Build flexible thinking and algebraic reasoning.',
  alternates: {
    canonical: 'https://homeschoolmath.site/division-missing-divisors-worksheets',
  },
}

export default function DivisionMissingDivisorsWorksheets() {
  const faqs = [
    {
      question: 'What are missing divisors worksheets?',
      answer: 'Missing divisors worksheets present division equations with one number missing — either the divisor (56 ÷ ___ = 8) or the quotient (56 ÷ 7 = ___). For example: 56 ÷ ___ = 7 asks "56 divided by what number equals 7?" The answer is 8. These problems require flexible thinking about the division relationship and are excellent preparation for algebra. They are harder than basic division facts because the child must think backward: "If 56 divided by something equals 7, then 7 times something equals 56."'
    },
    {
      question: 'When should my child start missing divisors practice?',
      answer: 'Start missing divisors practice after your child has achieved 90%+ accuracy on basic division facts (within the 12×12 table). Missing divisors are significantly harder than standard division problems because they require the child to think in two directions. If your child struggles with missing divisors, it often reveals which division facts are not truly automatic — the facts they can answer forward (56÷7=8) but not backward (56÷8=7). This is valuable diagnostic information. Most children need 2-4 weeks of missing divisors practice after basic division facts are solid.'
    },
    {
      question: 'How do missing divisors connect to algebra?',
      answer: 'Missing divisors are direct preparation for algebra. The equation 56 ÷ ___ = 8 is structurally identical to 56 ÷ x = 8 in algebra. The skill of isolating an unknown variable — understanding that if 56 ÷ d = 8, then d = 56 ÷ 8 — is exactly the algebraic thinking required for solving equations. Children who master missing divisors in 3rd-4th grade find algebra significantly easier in middle school. This is not just division practice; it is algebraic reasoning practice.'
    },
    {
      question: 'My child can solve 56÷7=8 but freezes on 56÷___=8. What is happening?',
      answer: 'This is extremely common and tells you that your child has learned division facts in one direction only (dividend ÷ divisor = quotient). Missing divisors require backward thinking: given the dividend and quotient, find the divisor. This is a different cognitive skill — essentially solving "what number times the quotient equals the dividend?" The fix is explicit teaching: "56 divided by what equals 8? That means 8 times what equals 56? 8×7=56, so the missing number is 7." After 2-4 weeks of this explicit strategy, most children develop the flexibility to solve missing divisor problems automatically.'
    },
    {
      question: 'What is the difference between missing divisor and missing quotient problems?',
      answer: 'Missing quotient problems (56 ÷ 7 = ___) are standard division facts. The child knows the dividend (56) and divisor (7), and must find the quotient (8). Missing divisor problems (56 ÷ ___ = 8) are harder. The child knows the dividend (56) and quotient (8), and must find the divisor (7). Missing divisor problems require the child to reframe: "What number times 8 equals 56?" This is the same thinking required for solving 8x = 56 in algebra. Start with missing quotient problems, then introduce missing divisor problems after those are automatic.'
    },
    {
      question: 'Should missing divisors worksheets include word problems?',
      answer: 'Yes — word problems are where missing divisors shine. For example: "There are 56 apples. They are packed into baskets with 8 apples in each basket. How many baskets are needed?" This is 56 ÷ ___ = 8 (find the number of baskets). Or: "56 apples are shared equally among 7 children. How many apples does each child get?" This is 56 ÷ 7 = ___ (find the quotient). Word problems help children see that missing divisors represent real situations like "how many groups?" while missing quotients represent "how many in each group?"'
    },
    {
      question: 'What order should I teach missing divisor problems?',
      answer: 'Start with missing quotient problems (56 ÷ 7 = ___) — these are standard division facts. Once those are automatic, introduce missing divisor problems with small numbers (12 ÷ ___ = 3, 20 ÷ ___ = 4). Then progress to larger numbers (56 ÷ ___ = 7, 72 ÷ ___ = 8). Finally, mix both missing quotient and missing divisor problems on the same worksheet. Most children need 2-3 weeks on missing quotient facts before moving to missing divisors, then 2-4 weeks on missing divisors before mixing both types.'
    },
    {
      question: 'What comes after missing divisors worksheets?',
      answer: 'After missing divisors, the next step is division word problems (applying division in real-world contexts), then multi-step word problems that combine division with other operations. Missing divisors are the bridge from basic division facts to algebraic thinking. Once your child can solve 56 ÷ ___ = 8 quickly, they are ready for equations like 56 ÷ x = 8 in algebra, and for understanding that division and multiplication are inverse operations at a deep level.'
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
      stage: 'Missing Quotient (Standard Division)',
      description: 'Problems like 56 ÷ 7 = ___. The child knows the dividend and divisor, and must find the quotient. This is standard division fact practice. Ensure your child has 90%+ accuracy on these before moving to missing divisors. Spend 2-3 weeks on this stage if needed — do not rush to missing divisors.'
    },
    {
      stage: 'Missing Divisor (Backward Thinking)',
      description: 'Problems like 56 ÷ ___ = 8. The child knows the dividend and quotient, and must find the divisor. Teach the reframing strategy: "56 divided by what equals 8? That means 8 times what equals 56? 8×7=56, so the answer is 7." Spend 2-4 weeks on this stage. The confusion your child experiences is the learning process.'
    },
    {
      stage: 'Mixed Missing Numbers',
      description: 'Combine both missing quotient and missing divisor problems on the same worksheet. The child must determine which number is missing and choose the correct strategy. This stage builds the most flexible understanding and best prepares children for algebra. Spend 2-3 weeks on this stage before moving to word problems.'
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
              Missing Divisors Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Find the Missing Number — Build Algebraic Thinking
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
              56 ÷ ___ = 8. This is the bridge from basic division to algebra. If your child knows division facts, missing divisors teach them to think flexibly about the relationship.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=division&skill=missing-divisors" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Missing Divisors Worksheets
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

          {/* Why Missing Divisors Matter */}
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
              Why Missing Divisors Are the Bridge from Division to Algebra
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many children can solve 56÷7=8 without hesitation. But ask them 56÷___=8 and they freeze. This is not a math problem — it is a thinking-direction problem. Standard division practice teaches forward thinking: dividend ÷ divisor = quotient. Missing divisors teach backward thinking: given the dividend and quotient, find the divisor. This is exactly the skill required for solving equations like 8x = 56 in algebra.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Missing divisors also reveal which division facts are truly automatic. A child who can answer 56÷7=8 instantly but takes 10 seconds to solve 56÷___=8 does not have automatic retrieval — they have forward-only retrieval. The fix is missing divisors practice, not more standard division drills. For students who need to build basic division fact fluency before missing divisors, see our{' '}
              <Link href="/division-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic division facts worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to connect missing divisors to real-world situations, our{' '}
              <Link href="/division-equal-sharing-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>equal sharing worksheets</Link>{' '}
              include missing divisor word problems.
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
              How to Progress Through Missing Number Problems
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
              Three stages — do not skip the first stage
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
              How to Solve Missing Divisor Problems
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
              Teach this script — it reframes division as multiplication
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read the Problem Aloud', desc: 'For 56 ÷ ___ = 8, say: "56 divided by what number equals 8?" Have your child repeat the question. This verbal reframing is critical for backward thinking.' },
                { step: '2', title: 'Rewrite as Multiplication', desc: 'Say: "If 56 divided by something equals 8, then 8 times that something equals 56." Write: 8 × ___ = 56. Ask: "8 times what equals 56?"' },
                { step: '3', title: 'Find the Missing Number', desc: 'Your child recalls 8×7=56. Say: "That means 56 ÷ 7 = 8. The missing divisor is 7." Check: 56 ÷ 7 = 8. This builds self-monitoring.' }
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
                Three Types of Missing Number Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Missing Quotient',
                    format: '56 ÷ 7 = ___',
                    who: 'Basic division facts',
                    desc: 'The child knows the dividend and divisor, and must find the quotient. This is standard division practice. Master this first.'
                  },
                  {
                    title: 'Missing Divisor',
                    format: '56 ÷ ___ = 8',
                    who: 'Intermediate missing numbers',
                    desc: 'The child knows the dividend and quotient, and must find the divisor. Teach the reframing strategy: "8 × ___ = 56."'
                  },
                  {
                    title: 'Mixed Missing Numbers',
                    format: '56 ÷ ___ = 8 and 56 ÷ 7 = ___',
                    who: 'Advanced missing numbers',
                    desc: 'Both types mixed on the same worksheet. The child must determine which number is missing and choose the correct strategy.'
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
                When Missing Number Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with missing divisors despite having solid basic division facts, the issue may be that they never truly understood the inverse relationship between multiplication and division. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact fluency to missing numbers and algebra readiness. You can also browse all available courses and planners on the{' '}
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
                { name: 'Basic Division Facts', href: '/division-basic-facts-worksheets', desc: 'Build forward division fluency before missing divisors' },
                { name: 'Fact Families', href: '/division-fact-families-worksheets', desc: 'Connect division to multiplication — essential prerequisite' },
                { name: 'Equal Sharing', href: '/division-equal-sharing-worksheets', desc: 'Apply missing divisors in real-world word problems' },
                { name: 'Missing Factors', href: '/multiplication-missing-factors-worksheets', desc: 'The multiplication version of missing numbers' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview — where missing divisors appear' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Where missing divisors connect to algebra' }
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
              Real questions parents ask about missing divisors
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
                Generate custom missing divisors worksheets. Choose your fact range and problem type, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=division&skill=missing-divisors" style={{
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
                  Create Missing Divisors Worksheets Now
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
