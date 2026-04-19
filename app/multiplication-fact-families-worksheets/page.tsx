// app/multiplication-fact-families-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication Fact Families Worksheets | Free Printable 3-5 Grade Math',
  description: 'Free printable multiplication fact families worksheets for 3rd-5th grade. Practice the relationship between multiplication and division. Build both operations simultaneously.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplication-fact-families-worksheets',
  },
}

export default function MultiplicationFactFamiliesWorksheets() {
  const faqs = [
    {
      question: 'What are fact families?',
      answer: 'A fact family is a set of four related equations using the same three numbers. For example, with the numbers 3, 7, and 21: 3×7=21, 7×3=21, 21÷3=7, 21÷7=3. Teaching fact families together helps children see that multiplication and division are inverse operations. Instead of learning 100 multiplication facts and 100 division facts separately (200 total), fact families show that every multiplication fact gives you a division fact automatically.'
    },
    {
      question: 'When should my child start fact families practice?',
      answer: 'Start fact families practice after your child has achieved 90%+ accuracy on mixed multiplication facts (typically after 8-12 weeks of mixed practice). Fact families are more advanced because they require the child to generate four equations from three numbers. However, fact families are also the most efficient way to learn division facts — a child who knows 3×7=21 automatically knows 21÷3=7 and 21÷7=3. If your child is struggling with division, fact families are the specific intervention needed.'
    },
    {
      question: 'How do fact families help with division?',
      answer: 'Many children find division harder than multiplication because it requires backward thinking. Fact families make division familiar by keeping it within the multiplication context. When a child sees 21÷3=?, they can ask "3 times what equals 21?" which is a missing factors problem (3×___=21). Fact families explicitly teach this connection. In fact, research shows that children who learn fact families learn division facts in half the time compared to children who learn division in isolation.'
    },
    {
      question: 'What order should I teach fact families?',
      answer: 'Start with fact families where the product is within the child\'s known facts (up to 12×12). Present the three numbers (3, 7, 21) and have your child write all four equations. Then progress to missing number fact families, where one number is missing and your child must find it. Finally, use fact family word problems: "3×7=21, so 21÷3=___ and 21÷7=___." Most children need 4-6 weeks of fact families practice before the relationship feels automatic.'
    },
    {
      question: 'My child knows multiplication facts but struggles with fact families. What is happening?',
      answer: 'This tells you that your child has learned multiplication facts in isolation but has not yet internalized the inverse relationship with division. They know 3×7=21 as a fact, but they have not connected it to 21÷3=7. The fix is explicit teaching: "If 3×7=21, then 21 divided into 3 groups gives 7 in each group. And 21 divided into 7 groups gives 3 in each group." Use arrays to show this visually — an array that is 3 rows of 7 dots can be seen as 3 groups of 7 (multiplication) or 21 divided into 3 rows (division).'
    },
    {
      question: 'Should fact families worksheets include word problems?',
      answer: 'Yes — word problems are where fact families shine. For example: "There are 21 apples. They are packed into 3 baskets with the same number in each basket. How many apples per basket?" (21÷3=7). Then: "If there are 7 apples per basket, how many baskets are needed for 21 apples?" (21÷7=3). The same three numbers (3, 7, 21) appear in both problems, showing the relationship. Word problems help children see that fact families are not just abstract patterns but represent real situations.'
    },
    {
      question: 'What comes after fact families worksheets?',
      answer: 'After fact families, the next step is division facts practice (using the fact families connection), then multi-step word problems that combine multiplication and division, then long division. Fact families are the bridge from multiplication to division — once your child can generate all four equations from any three numbers, they are ready for formal division instruction. Our division practice page is the natural next step.'
    },
    {
      question: 'Do you have fact families for all multiplication facts?',
      answer: 'Yes, our generator can create fact families worksheets for any range of facts from 2×2 through 12×12. You can focus on specific tables (e.g., fact families for the 6s) or create mixed fact families covering all tables. We recommend starting with narrow ranges (2s, 5s, 10s) and gradually expanding to full range 2-12. Most children need 4-6 weeks of fact families practice before the relationship feels automatic.'
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
      description: 'The worksheet shows three numbers (3, 7, 21). The child writes all four equations: 3×7=21, 7×3=21, 21÷3=7, 21÷7=3. Start with this format. The goal is understanding that the same three numbers appear in all four equations. Spend 2-3 weeks on this format.'
    },
    {
      stage: 'Missing Number Fact Families',
      description: 'The worksheet shows two equations from a fact family with one number missing. For example: 3×___=21 and 21÷3=___. The child must find the missing number (7) and then complete the remaining equations. This builds the connection between multiplication and division more explicitly.'
    },
    {
      stage: 'Fact Family Word Problems',
      description: 'The worksheet presents a word problem that implies a fact family. For example: "There are 21 apples in 3 baskets with the same number in each. How many apples per basket?" (21÷3=7). Then: "If there are 7 apples per basket, how many baskets for 21 apples?" (21÷7=3). The child writes all four equations from the situation.'
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
              Multiplication Fact Families Worksheets
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
              3×7=21, 7×3=21, 21÷3=7, 21÷7=3. Four equations, three numbers. Fact families show the inverse relationship between multiplication and division.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=multiplication&skill=fact-families" style={{
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
              Many children learn multiplication facts and then struggle with division as if it were a completely new subject. Division is not new — it is multiplication backward. Fact families make this explicit. A child who knows 3×7=21 already knows 21÷3=7 and 21÷7=3. They just do not know that they know it. Fact families bridge this gap.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Fact families also reduce the total number of facts to memorize. Instead of learning 100 multiplication facts and 100 division facts (200 total), a child learns 100 fact families. Each family gives two multiplication facts and two division facts. This is not just efficient — it is how mathematicians actually think about numbers. For students who need multiplication fact fluency before fact families, see our{' '}
              <Link href="/multiplication-mixed-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>mixed facts worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to apply fact families to division, our{' '}
              <Link href="/division-practice" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>division practice page</Link>{' '}
              is the natural next step.
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
                { step: '1', title: 'Identify the Three Numbers', desc: 'For the fact family 3, 7, 21, say: "These three numbers are a family. They always appear together in multiplication and division equations." Have your child identify the smallest and largest numbers.' },
                { step: '2', title: 'Write the Multiplication Equations', desc: 'Write the two multiplication equations: smallest × middle = largest and middle × smallest = largest. Say: "3 times 7 equals 21. 7 times 3 also equals 21."' },
                { step: '3', title: 'Write the Division Equations', desc: 'Write the two division equations: largest ÷ smallest = middle and largest ÷ middle = smallest. Say: "21 divided into 3 groups gives 7 in each. 21 divided into 7 groups gives 3 in each."' }
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
                    format: '3, 7, 21 → 4 equations',
                    who: 'Beginning fact families',
                    desc: 'Given three numbers, the child writes all four equations. Builds the understanding that the same numbers appear in multiplication and division.'
                  },
                  {
                    title: 'Missing Number Families',
                    format: '3 × ___ = 21, 21 ÷ 3 = ___',
                    who: 'Intermediate fact families',
                    desc: 'Given two equations with a missing number, the child finds the missing number and completes the family. Builds inverse relationship explicitly.'
                  },
                  {
                    title: 'Fact Family Word Problems',
                    format: 'Word problem → 4 equations',
                    who: 'Advanced fact families',
                    desc: 'Given a real-world scenario, the child writes all four equations. Builds connection to division and algebra.'
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
                { name: 'Mixed Facts', href: '/multiplication-mixed-facts-worksheets', desc: 'Build multiplication fact fluency before fact families' },
                { name: 'Missing Factors', href: '/multiplication-missing-factors-worksheets', desc: 'The bridge from multiplication to division' },
                { name: 'Multiplication Word Problems', href: '/multiplication-word-problems-worksheets', desc: 'Apply fact families in real-world contexts' },
                { name: 'Division Practice', href: '/division-practice', desc: 'The next step after fact families' },
                { name: 'Times Tables', href: '/multiplication-times-tables-worksheets', desc: 'Introduce each table before fact families' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview — where fact families are used' }
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
              Real questions parents ask about multiplication fact families
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
                <Link href="/?grade=third&topic=multiplication&skill=fact-families" style={{
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