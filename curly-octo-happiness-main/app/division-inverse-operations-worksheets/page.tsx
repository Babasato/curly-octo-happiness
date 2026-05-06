// app/division-inverse-operations-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inverse Operations Division Worksheets | Free Printable 4-5 Grade Math',
  description: 'Free printable inverse operations worksheets for 4th-5th grade. Practice the relationship between multiplication and division. Build flexible thinking with fact families.',
  alternates: {
    canonical: 'https://homeschoolmath.site/division-inverse-operations-worksheets',
  },
}

export default function DivisionInverseOperationsWorksheets() {
  const faqs = [
    {
      question: 'What are inverse operations?',
      answer: 'Inverse operations are operations that undo each other. Multiplication and division are inverse operations: multiplication combines equal groups, division separates equal groups. For example, if 7×8=56, then 56÷7=8 and 56÷8=7. Understanding inverse operations means a child can use multiplication to check division and vice versa. This is a key algebraic concept that makes fact families make sense and prepares children for solving equations.'
    },
    {
      question: 'When should my child start inverse operations practice?',
      answer: 'Start inverse operations practice after your child understands equal sharing and has begun basic division fact practice — typically in 4th grade. Inverse operations are more abstract than basic division facts, but they are essential for building flexible mathematical thinking. Children who understand inverse operations can check their own work (using multiplication to verify division) and solve for missing numbers more easily. Most children need 2-4 weeks of inverse operations practice after basic division facts are solid.'
    },
    {
      question: 'How do inverse operations help with problem-solving?',
      answer: 'Inverse operations give children a way to check their work independently. After solving 56÷7=8, a child who understands inverse operations can check by asking "Does 7×8=56?" This self-checking skill reduces errors dramatically and builds mathematical confidence. Inverse operations also help with missing number problems: to solve 56÷___=8, the child can reframe as 8×___=56 using the inverse relationship. This is exactly the thinking required for algebra.'
    },
    {
      question: 'My child can solve division facts but doesn\'t check with multiplication. How do I teach this?',
      answer: 'Teach the checking habit explicitly. After your child solves a division problem, ask: "How can we check if that answer is correct?" Guide them to multiply the quotient by the divisor. Say: "If 56÷7=8 is correct, then 7×8 should equal 56." Have your child do the multiplication check for every problem for 1-2 weeks. After this explicit practice, most children internalize the checking habit and use it automatically. This is one of the most valuable math habits you can teach.'
    },
    {
      question: 'What is the difference between inverse operations and fact families?',
      answer: 'Fact families show the four related equations (7×8=56, 8×7=56, 56÷7=8, 56÷8=7). Inverse operations emphasize the relationship between multiplication and division as opposites. Fact families are the content; inverse operations are the concept. Our inverse operations worksheets focus specifically on using multiplication to check division and rewriting division problems as multiplication problems (e.g., 56÷7=8 becomes 7×8=56). This skill is essential for algebra.'
    },
    {
      question: 'Should inverse operations worksheets include word problems?',
      answer: 'Yes — word problems are where inverse operations become clearly useful. For example: "A baker puts 56 cookies into 7 boxes with the same number in each. How many cookies per box?" (56÷7=8). Then: "How can you check your answer?" (7×8=56). Word problems help children see that inverse operations are not just abstract rules but practical checking strategies. Our inverse operations worksheets include word problems where children must both solve and check using the inverse operation.'
    },
    {
      question: 'What comes after inverse operations worksheets?',
      answer: 'After inverse operations, the next step is missing divisors (56÷___=8) using the inverse relationship, then division word problems that require checking, then algebra readiness (solving equations like 56÷x=8). Inverse operations are the bridge from basic division facts to algebraic thinking. Once your child automatically checks division with multiplication, they are ready to solve equations with unknown variables.'
    },
    {
      question: 'How do inverse operations connect to algebra?',
      answer: 'Algebra is built on inverse operations. To solve 3x = 15, you divide both sides by 3 (the inverse of multiplication). To solve x/3 = 5, you multiply both sides by 3 (the inverse of division). Children who understand that multiplication and division are inverses learn algebra much faster because they already understand the core operation: to undo multiplication, divide; to undo division, multiply. Inverse operations worksheets in elementary school directly prepare children for middle school algebra.'
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
      stage: 'Division with Multiplication Check',
      description: 'The worksheet presents division problems (56÷7=___). After solving, the child writes the corresponding multiplication fact to check: 7×8=56. This builds the checking habit explicitly. Spend 1-2 weeks on this stage, requiring the check for every problem.'
    },
    {
      stage: 'Rewriting Division as Multiplication',
      description: 'The worksheet presents division equations (56÷7=8). The child rewrites each as a multiplication equation (7×8=56) without solving — just recognizing the inverse relationship. This builds flexible thinking about the relationship. Spend 1-2 weeks on this stage.'
    },
    {
      stage: 'Mixed Inverse Operations',
      description: 'The worksheet mixes problems where the child must solve division, then check with multiplication; and problems where the child must rewrite division as multiplication. This stage builds automatic use of inverse operations. Spend 2-3 weeks on this stage before moving to missing divisors.'
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
              Inverse Operations Division Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              See the Relationship Between Multiplication and Division
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
              Multiplication and division are inverses. If 7×8=56, then 56÷7=8. Understanding this relationship allows children to check their work and solve for missing numbers.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=fourth&topic=division&skill=inverse-operations" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Inverse Operations Worksheets
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

          {/* Why Inverse Operations Matter */}
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
              Why Inverse Operations Are the Key to Algebra Readiness
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many children learn multiplication and division as separate subjects. They memorize 100 multiplication facts and 100 division facts, but they never learn that division is multiplication backward. Inverse operations worksheets teach this relationship explicitly. A child who understands inverse operations can check division with multiplication, rewrite division problems as multiplication, and solve for missing numbers with confidence.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              More importantly, inverse operations are the foundation of algebra. To solve 3x = 15, you divide both sides by 3 (the inverse of multiplication). To solve x/3 = 5, you multiply both sides by 3 (the inverse of division). Children who understand inverse operations in elementary school learn algebra much faster. For students who need to build division fact fluency before inverse operations, see our{' '}
              <Link href="/division-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic division facts worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to apply inverse operations to missing number problems, our{' '}
              <Link href="/division-missing-divisors-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>missing divisors worksheets</Link>{' '}
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
              How to Build Inverse Operations Understanding
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
              Three stages — teach the checking habit first
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
              How to Use Inverse Operations
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
              Teach this script — make checking a habit
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Solve the Division Problem', desc: 'Solve 56÷7=___. Your child writes the answer: 8. Say: "Great. Now let\'s check if that\'s correct."' },
                { step: '2', title: 'Check with Multiplication', desc: 'Say: "If 56÷7=8 is correct, then 7×8 should equal 56." Have your child multiply 7×8=56. Say: "It checks! Our answer is correct."' },
                { step: '3', title: 'Rewrite Division as Multiplication', desc: 'For any division equation, have your child write the corresponding multiplication equation: 56÷7=8 becomes 7×8=56. This builds flexible thinking about the relationship.' }
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

          {/* Worksheet Types */}
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
                Three Types of Inverse Operations Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Division with Multiplication Check',
                    format: '56÷7=___ → Check: 7×___=56',
                    who: 'Beginning inverse operations',
                    desc: 'Solve the division problem, then write the multiplication fact that checks it. Builds the checking habit explicitly.'
                  },
                  {
                    title: 'Rewrite Division as Multiplication',
                    format: '56÷7=8 → 7×8=56',
                    who: 'Intermediate inverse operations',
                    desc: 'Given a division equation, rewrite it as a multiplication equation. Builds flexible thinking about the relationship.'
                  },
                  {
                    title: 'Mixed Inverse Operations',
                    format: 'Mix of both types',
                    who: 'Advanced inverse operations',
                    desc: 'Problems requiring solving-and-checking and rewriting. Builds automatic use of the inverse relationship.'
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
                When Inverse Operations Understanding Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with inverse operations despite knowing division facts, the issue may be that they never truly understood the conceptual relationship between multiplication and division. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact families to inverse operations and algebra readiness. You can also browse all available courses and planners on the{' '}
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
                { name: 'Fact Families', href: '/division-fact-families-worksheets', desc: 'The foundation for inverse operations' },
                { name: 'Basic Division Facts', href: '/division-basic-facts-worksheets', desc: 'Build fluency before inverse operations' },
                { name: 'Missing Divisors', href: '/division-missing-divisors-worksheets', desc: 'Apply inverse operations to find missing numbers' },
                { name: 'Equal Sharing', href: '/division-equal-sharing-worksheets', desc: 'Conceptual understanding before inverse operations' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview — where inverse operations are introduced' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Where inverse operations support algebra readiness' }
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
              Real questions parents ask about inverse operations
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
                Build Algebra Readiness Today
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
                Generate custom inverse operations worksheets. Choose your fact range and worksheet type, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=fourth&topic=division&skill=inverse-operations" style={{
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
                  Create Inverse Operations Worksheets Now
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