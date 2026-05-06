// app/division-fact-families-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Division Fact Families Worksheets | Free Printable 3-5 Grade Math',
  description: 'Free printable division fact families worksheets for 3rd-5th grade. Practice the relationship between multiplication and division. Learn division as the inverse of multiplication.',
  alternates: {
    canonical: 'https://homeschoolmath.site/division-fact-families-worksheets',
  },
}

export default function DivisionFactFamiliesWorksheets() {
  const faqs = [
    {
      question: 'What are division fact families?',
      answer: 'A fact family is a set of four related equations using the same three numbers. For example, with the numbers 7, 8, and 56: 7×8=56, 8×7=56, 56÷7=8, 56÷8=7. Teaching fact families together helps children see that division is multiplication backward. Instead of learning 100 division facts separately, fact families show that every multiplication fact gives you two division facts automatically. This is the single most efficient way to learn division.'
    },
    {
      question: 'When should my child start fact families practice?',
      answer: 'Start fact families practice as soon as your child has automatic recall of multiplication facts through 12×12. Do not start division practice of any kind before fact families. Many children who know multiplication facts still struggle with division because they were never taught the inverse relationship explicitly. Fact families are the bridge. Spend 2-3 weeks on fact families worksheets before moving to basic division facts worksheets. This investment of time will make division take half as long overall.'
    },
    {
      question: 'How do fact families help with division?',
      answer: 'Fact families make division familiar by keeping it within the multiplication context. When a child sees 56÷7=?, they can reframe it as "7 times what equals 56?" which is a missing factor problem. Fact families explicitly teach this reframing strategy. Research shows that children who learn fact families learn division facts in half the time compared to children who learn division in isolation. More importantly, fact family learning produces flexible understanding that transfers to word problems and fractions.'
    },
    {
      question: 'What order should I teach fact families?',
      answer: 'Start with fact families from the easy multiplication tables (2s, 5s, 10s). For each family, have your child write all four equations. Then move to medium tables (3s, 4s, 9s, squares). Finally, teach fact families from the hard tables (6s, 7s, 8s, 12s). For each stage, spend 3-5 days on fact families before moving to division drills. Never teach division facts without first teaching the fact family — that creates one-directional learners who can multiply but not divide.'
    },
    {
      question: 'My child can write fact families but still struggles with division. What is happening?',
      answer: 'This is normal. Writing fact families is the first step — understanding the relationship conceptually. But automatic retrieval of division facts requires practice with the division equations specifically. Your child may know that 56 and 7 and 8 belong together, but retrieving 56÷7=8 instantly is a separate skill. The solution: after fact families are understood, move to basic division facts worksheets that focus specifically on the division equations while still emphasizing the connection to multiplication.'
    },
    {
      question: 'Should fact families worksheets include word problems?',
      answer: 'Yes — word problems are where fact families shine. For example: "There are 56 apples. They are packed into 7 baskets with the same number in each basket. How many apples per basket?" (56÷7=8). Then: "If there are 8 apples per basket, how many baskets are needed for 56 apples?" (56÷8=7). The same three numbers (7, 8, 56) appear in both problems, showing the relationship. Word problems help children see that fact families are not just abstract patterns but represent real situations.'
    },
    {
      question: 'What comes after fact families worksheets?',
      answer: 'After fact families, the next step is basic division facts worksheets (56÷7=___), then missing divisors (___÷7=8 or 56÷___=8), then division word problems. Fact families are the essential first step. Without them, division practice is twice as hard. With them, division becomes a natural extension of multiplication. Most children need 2-3 weeks of fact families practice before moving to basic division facts.'
    },
    {
      question: 'Do you have fact families for all division facts?',
      answer: 'Yes, our generator can create fact families worksheets for any range of facts from 2×2 through 12×12. You can focus on specific tables (e.g., fact families for the 6s) or create mixed fact families covering all tables. We recommend starting with narrow ranges (2s, 5s, 10s) and gradually expanding to full range 2-12. Most children need 2-3 weeks of fact families practice before the relationship feels automatic.'
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
      stage: 'Complete Fact Families (All Four Equations)',
      description: 'The worksheet shows three numbers (7, 8, 56). The child writes all four equations: 7×8=56, 8×7=56, 56÷7=8, 56÷8=7. Start with this format. The goal is understanding that the same three numbers appear in all four equations. Spend 1-2 weeks on this format before moving to missing number families.'
    },
    {
      stage: 'Missing Number Fact Families',
      description: 'The worksheet shows two equations from a fact family with one number missing. For example: 7×___=56 and 56÷7=___. The child must find the missing number (8) and then complete the remaining equations. This builds the connection between multiplication and division more explicitly. Spend 1-2 weeks on this format.'
    },
    {
      stage: 'Fact Family Word Problems',
      description: 'The worksheet presents a word problem that implies a fact family. For example: "There are 56 apples in 7 baskets with the same number in each. How many apples per basket?" (56÷7=8). Then: "If there are 8 apples per basket, how many baskets for 56 apples?" (56÷8=7). The child writes all four equations from the situation.'
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
              Division Fact Families Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Connect Multiplication and Division Through Fact Families
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
              7×8=56, 8×7=56, 56÷7=8, 56÷8=7. Four equations, three numbers. Fact families show that division is multiplication backward.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=division&skill=fact-families" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Fact Families Worksheets
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

          {/* Why Fact Families Matter */}
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
              Why Fact Families Are the Most Efficient Way to Learn Division
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many children learn multiplication facts and then struggle with division as if it were a completely new subject. Division is not new — it is multiplication backward. Fact families make this explicit. A child who knows 7×8=56 already knows 56÷7=8 and 56÷8=7. They just do not know that they know it. Fact families bridge this gap by showing all four equations together.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Fact families also reduce the total number of facts to memorize. Instead of learning 100 multiplication facts and 100 division facts (200 total), a child learns 100 fact families. Each family gives two multiplication facts and two division facts. This is not just efficient — it is how mathematicians actually think about numbers. For students who need multiplication fact fluency before fact families, see our{' '}
              <Link href="/multiplication-mixed-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>mixed multiplication facts worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to apply fact families to division practice, our{' '}
              <Link href="/division-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic division facts worksheets</Link>{' '}
              are the natural next step.
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
              How to Progress Through Fact Families
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
              Three stages — spend 1-2 weeks on each
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
              How to Use Fact Families Worksheets
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
              Teach this script — the language matters
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Identify the Three Numbers', desc: 'For the fact family 7, 8, 56, say: "These three numbers are a family. They always appear together in multiplication and division equations." Have your child identify the largest number (product/dividend).' },
                { step: '2', title: 'Write the Multiplication Equations', desc: 'Write the two multiplication equations: smallest × middle = largest and middle × smallest = largest. Say: "7 times 8 equals 56. 8 times 7 also equals 56."' },
                { step: '3', title: 'Write the Division Equations', desc: 'Write the two division equations: largest ÷ smallest = middle and largest ÷ middle = smallest. Say: "56 divided into 7 groups gives 8 in each. 56 divided into 8 groups gives 7 in each."' }
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

          {/* Fact Family Guide */}
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
                Three Types of Fact Families Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Complete Fact Families',
                    format: '7, 8, 56 → 4 equations',
                    who: 'Beginning fact families',
                    desc: 'Given three numbers, the child writes all four equations. Builds the understanding that the same numbers appear in multiplication and division.'
                  },
                  {
                    title: 'Missing Number Families',
                    format: '7 × ___ = 56, 56 ÷ 7 = ___',
                    who: 'Intermediate fact families',
                    desc: 'Given two equations with a missing number, the child finds the missing number and completes the family. Builds inverse relationship explicitly.'
                  },
                  {
                    title: 'Fact Family Word Problems',
                    format: 'Word problem → 4 equations',
                    who: 'Advanced fact families',
                    desc: 'Given a real-world scenario, the child writes all four equations. Builds connection to division and algebraic thinking.'
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
                When Fact Families Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with fact families despite knowing multiplication facts, the issue may be that they never truly understood the inverse relationship conceptually. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact fluency to fact families and division. You can also browse all available courses and planners on the{' '}
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
                { name: 'Basic Division Facts', href: '/division-basic-facts-worksheets', desc: 'The next step after fact families — division practice' },
                { name: 'Missing Divisors', href: '/division-missing-divisors-worksheets', desc: 'Find the missing number in division equations' },
                { name: 'Equal Sharing', href: '/division-equal-sharing-worksheets', desc: 'Real-world word problems that make division meaningful' },
                { name: 'Mixed Multiplication Facts', href: '/multiplication-mixed-facts-worksheets', desc: 'Build multiplication fluency before fact families' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview — where fact families are introduced' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Where fact families support division fluency' }
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
              Real questions parents ask about division fact families
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
                Connect Multiplication and Division Today
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
                Generate custom fact families worksheets. Choose your fact range and worksheet type, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=division&skill=fact-families" style={{
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
                  Create Fact Families Worksheets Now
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
