// app/word-problems-multiplication-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication Word Problems Worksheets | Free Printable 3-5 Grade Math',
  description: 'Free printable multiplication word problems worksheets for 3rd-5th grade. Practice equal groups, arrays, and "each" scenarios with real-world math problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/word-problems-multiplication-worksheets',
  },
}

export default function WordProblemsMultiplicationWorksheets() {
  const faqs = [
    {
      question: 'What multiplication word problems can I practice with these worksheets?',
      answer: 'Our worksheets cover equal groups scenarios ("There are 5 bags with 4 apples in each"), array scenarios ("There are 6 rows of seats with 8 seats in each row"), and comparison scenarios ("Tom has 4 times as many stickers as Lisa"). Problems range from basic facts through two-digit multiplication.'
    },
    {
      question: 'What keywords signal multiplication in word problems?',
      answer: 'Teach your child to look for: "each," "per," "total," "in all" (when combined with equal groups), "rows of," "columns of," "array," "area," "double," "triple," "times," "multiply," "product," "groups of." However, warn your child that keywords are clues, not rules — the best strategy is to understand the situation (equal groups or arrays).'
    },
    {
      question: 'How do I teach the difference between multiplication and addition word problems?',
      answer: 'Both can use the keyword "total" or "in all." The difference is the structure. Addition combines different groups (4 red + 3 blue). Multiplication combines equal groups (5 bags with 4 apples each). Teach your child to ask: "Are the groups equal?" If yes, it is multiplication. If the groups are different sizes, it is addition. This distinction is more reliable than keywords.'
    },
    {
      question: 'Why does my child add when the problem says "each"?',
      answer: 'Children see "each" and know it relates to multiplication, but they may add the numbers instead of multiplying. For "5 bags with 4 apples each," a child might add 5 + 4 = 9. The fix is visual models. Draw 5 bags, put 4 apples in each, and count: 4, 8, 12, 16, 20. The visual shows that multiplication is repeated addition, not a single addition.'
    },
    {
      question: 'When should my child start multiplication word problems?',
      answer: 'Start multiplication word problems as soon as your child can multiply basic facts (typically 3rd grade). Start with equal groups problems using small numbers. Then introduce array problems (rows and columns). Finally, introduce comparison problems ("times as many"). Do not rush — spend 2-3 weeks on equal groups before moving to arrays.'
    },
    {
      question: 'How many multiplication word problems should my child practice daily?',
      answer: '5-10 word problems per session is effective. Multiplication word problems take longer because children must identify the equal groups structure. Quality over quantity — it is better to solve 5 problems correctly with full understanding than 15 problems guessed. Spend 10-15 minutes daily.'
    },
    {
      question: 'What is the difference between equal groups and array word problems?',
      answer: 'Equal groups problems: "There are 5 bags with 4 apples in each bag. How many apples total?" (5 × 4 = 20). Array problems: "There are 5 rows of seats with 4 seats in each row. How many seats total?" (5 × 4 = 20). Both use multiplication, but arrays connect to area models used in later math. Teach both types so children recognize multiplication in any context.'
    },
    {
      question: 'Do the answer keys show the work?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a word problem wrong, go back to the problem and ask: "Are the groups equal? How many groups? How many in each group?" Walking through the reasoning is more valuable than the correct answer.'
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
      stage: 'Equal Groups Problems (3rd Grade)',
      description: 'Worksheets present equal groups scenarios: "There are 5 bags with 4 apples in each bag. How many apples total?" The child identifies the number of groups and the size of each group, then multiplies. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Array Problems (3rd-4th Grade)',
      description: 'Worksheets present array scenarios: "There are 6 rows of seats with 8 seats in each row. How many seats total?" The child identifies rows and columns, then multiplies. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Comparison Problems (4th-5th Grade)',
      description: 'Worksheets present comparison scenarios: "Tom has 4 times as many stickers as Lisa. Lisa has 7 stickers. How many does Tom have?" (4 × 7 = 28). This is the hardest type. Spend 5-7 days on this stage.'
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
              Multiplication Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Equal Groups, Arrays, and "Each" Scenarios
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
              A child can multiply 5 × 4 = 20. But do they know when to multiply? Word problems build the skill of recognizing equal groups — the essential structure of multiplication.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=word-problems&skill=multiplication" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Multiplication Word Problems Worksheets
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

          {/* Why Multiplication Word Problems Matter */}
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
              Why Multiplication Word Problems Require Recognizing Equal Groups
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many children learn multiplication as memorized facts. But real-life multiplication problems require recognizing the structure of equal groups. "5 bags with 4 apples each" is multiplication. "5 red apples and 4 green apples" is addition. The distinction is the structure, not the numbers.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build multiplication word problem skills systematically — from equal groups to arrays to comparison problems. For students who need computation fluency alongside word problems, see our <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication practice worksheets</Link>.
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
              How to Progress Through Multiplication Word Problems
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
              Three stages — master equal groups first
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
              How to Solve Multiplication Word Problems
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
              Teach the 3-step method — look for equal groups
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it. Ask: "Are there equal groups? How many groups? How many in each group?"' },
                { step: '2', title: 'Identify the Numbers', desc: 'Find the number of groups and the size of each group. For arrays: rows = number of groups, columns = size of each group.' },
                { step: '3', title: 'Write and Solve', desc: 'Write the multiplication equation (groups × size). Solve it. Then ask: "Does this answer make sense?" For arrays, it should match the total objects.' }
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

          {/* Problem Types */}
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
                Three Types of Multiplication Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Equal Groups Problems',
                    who: '3rd grade',
                    desc: '"There are 5 bags with 4 apples in each bag. How many apples total?" (5 × 4 = 20). The situation is combining equal groups.'
                  },
                  {
                    title: 'Array Problems',
                    who: '3rd-4th grade',
                    desc: '"There are 6 rows of seats with 8 seats in each row. How many seats total?" (6 × 8 = 48). The situation is rows and columns.'
                  },
                  {
                    title: 'Comparison Problems',
                    who: '4th-5th grade',
                    desc: '"Tom has 4 times as many stickers as Lisa. Lisa has 7 stickers. How many does Tom have?" (4 × 7 = 28). The situation is scaling.'
                  }
                ].map((type, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {type.title}
                    </h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
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
                When Word Problem Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child consistently adds instead of multiplies when equal groups are present, the issue may be that they have not internalized the structure of multiplication. Our <strong>Number Sense Foundations</strong> course (K-2) builds the conceptual groundwork that makes multiplication word problems manageable. You can also browse all available courses and planners on the{' '}
                <Link href="/resources" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/mfikwi"
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
                View Number Sense Foundations — $57
              </a>
            </div>
          </section>

          {/* Back to Parent Link */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Link href="/word-problems" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Word Problems Hub
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
                { name: 'Addition Word Problems', href: '/word-problems-addition-worksheets', desc: 'Practice combining different groups' },
                { name: 'Subtraction Word Problems', href: '/word-problems-subtraction-worksheets', desc: 'Practice take-away and comparison' },
                { name: 'Division Word Problems', href: '/word-problems-division-worksheets', desc: 'Practice sharing equally' },
                { name: 'Multi-Step Word Problems', href: '/word-problems-multi-step-worksheets', desc: 'Two or more operations in sequence' },
                { name: 'Multiplication Practice', href: '/multiplication-practice', desc: 'Build computation fluency for word problems' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview' }
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
              Real questions parents ask about multiplication word problems
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
                Master Multiplication Word Problems Today
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
                Generate custom multiplication word problems worksheets. Choose your problem type (equal groups, arrays, or comparison) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=word-problems&skill=multiplication" style={{
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
                  Create Multiplication Word Problems Worksheets Now
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