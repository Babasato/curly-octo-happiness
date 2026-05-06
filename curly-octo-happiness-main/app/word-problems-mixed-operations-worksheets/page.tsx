// app/word-problems-mixed-operations-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mixed Operations Word Problems Worksheets | Free Printable 4-6 Grade Math',
  description: 'Free printable mixed operations word problems worksheets for 4th-6th grade. Practice choosing the correct operation without cues with real-world math problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/word-problems-mixed-operations-worksheets',
  },
}

export default function WordProblemsMixedOperationsWorksheets() {
  const faqs = [
    {
      question: 'What are mixed operations word problems?',
      answer: 'Mixed operations word problems present scenarios that could be solved with addition, subtraction, multiplication, or division — but the worksheet does not tell the child which operation to use. The child must read the problem, understand the situation, and choose the correct operation. This is the highest level of word problem skill.'
    },
    {
      question: 'Why are mixed operations problems the hardest word problems?',
      answer: 'Single-operation worksheets (all addition problems) give the child a cue: "I am practicing addition, so I should add." Mixed operations remove that cue. The child must rely entirely on reading comprehension and situation recognition. This is what real life looks like — no one tells you which operation to use. Mixed operations problems reveal true understanding.'
    },
    {
      question: 'When should my child start mixed operations word problems?',
      answer: 'Start mixed operations word problems after your child has mastered one-step problems for each operation individually. Typically this is in 4th or 5th grade. Do not start mixed operations until your child can solve addition, subtraction, multiplication, and division word problems reliably when the operation is known.'
    },
    {
      question: 'What is the most common mixed operations error?',
      answer: 'The most common error is choosing the wrong operation based on keywords alone. For example, a child sees "more" and adds, but the problem might require multiplication ("Tom has 3 times more"). The fix is teaching situation recognition, not keyword memorization. Have your child ask: "What is happening? Are we combining, comparing, grouping, or sharing?"'
    },
    {
      question: 'How do I teach my child to choose the correct operation?',
      answer: 'Teach the situation-based approach: (1) Read and restate the problem. (2) Identify the situation: combining (add), taking away or comparing (subtract), equal groups (multiply), sharing or grouping (divide). (3) Choose the operation based on the situation, not keywords. (4) Write the equation and solve. This takes practice — start with 3-5 problems daily.'
    },
    {
      question: 'How many mixed operations problems should my child practice daily?',
      answer: '5-10 problems per session is effective. Mixed operations problems take longer because the child must first choose the operation. Quality over quantity — it is better to solve 5 problems correctly with full understanding than 10 problems guessed. Spend 15-20 minutes daily.'
    },
    {
      question: 'What types of mixed operations problems should I teach first?',
      answer: 'Start with problems that clearly signal one operation (e.g., "in all" clearly suggests addition). Then introduce problems where keywords are ambiguous. Then introduce problems where the child must identify extra information. Then introduce multi-step mixed operations. Our worksheets progress through these levels.'
    },
    {
      question: 'Do the answer keys show the operation?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child chooses the wrong operation, go back to the problem and ask: "What is happening in this story?" Walking through the reasoning is more valuable than the correct answer.'
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
      stage: 'Clear Operation Cues (4th Grade)',
      description: 'Worksheets present problems with clear operation cues: "in all" (addition), "left" (subtraction), "each" (multiplication), "share equally" (division). The child practices identifying the operation. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Ambiguous Cues (4th-5th Grade)',
      description: 'Worksheets present problems where keywords could signal multiple operations. "How many more" could be subtraction (comparison) or multiplication (scaling). The child must understand the situation. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Mixed Operations with Extra Information (5th-6th Grade)',
      description: 'Worksheets include problems with irrelevant numbers and multi-step mixed operations. The child must identify which numbers are needed and which operation to use for each step. Spend 7-10 days on this stage.'
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
              Mixed Operations Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Choose the Correct Operation — No Cues Given
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
              Real life does not tell you which operation to use. Mixed operations word problems build the highest level of problem-solving skill — choosing the correct operation based on the situation.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=word-problems&skill=mixed" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Mixed Operations Word Problems Worksheets
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

          {/* Why Mixed Operations Matter */}
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
              Why Mixed Operations Problems Are the Highest Level of Word Problem Skill
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Single-operation worksheets give the child a hidden cue: "This is the addition page, so I should add." Mixed operations remove that cue entirely. The child must read the problem, understand the situation, and choose the correct operation. This is what real life looks like — no one tells you which operation to use when you are at the grocery store or measuring ingredients for a recipe.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build mixed operations skills systematically — starting with clear cues, then ambiguous cues, then problems with extra information. For students who need operation-specific practice first, see our <Link href="/word-problems-addition-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition</Link>, <Link href="/word-problems-subtraction-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction</Link>, <Link href="/word-problems-multiplication-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication</Link>, and <Link href="/word-problems-division-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division</Link> word problems worksheets.
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
              How to Progress Through Mixed Operations
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
              Three stages — master clear cues before ambiguous
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
              How to Choose the Correct Operation
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
              Teach situation recognition — not keyword memorization
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it in their own words. Ask: "What is happening in this story?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Situation', desc: 'Ask: Are we combining (add), taking away or comparing (subtract), making equal groups (multiply), or sharing/grouping (divide)? Choose the operation based on the situation, not keywords.' },
                { step: '3', title: 'Write and Solve', desc: 'Write the equation based on the chosen operation. Solve it. Then ask: "Does this answer make sense in the story?" If not, reconsider the operation.' }
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

          {/* Operation Guide */}
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
                How to Identify Each Operation by Situation
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    operation: 'Addition',
                    situation: 'Combining groups, totaling, joining',
                    example: '"Sarah has 5 apples and gets 3 more."',
                    cue: 'Ask: "Are we putting things together?"'
                  },
                  {
                    operation: 'Subtraction',
                    situation: 'Taking away, comparing, finding difference',
                    example: '"Sarah had 8 cookies and ate 3." or "Tom has 8, Lisa has 5 — how many more?"',
                    cue: 'Ask: "Is something being removed or compared?"'
                  },
                  {
                    operation: 'Multiplication',
                    situation: 'Equal groups, arrays, scaling',
                    example: '"5 bags with 4 apples each."',
                    cue: 'Ask: "Are there equal groups?"'
                  },
                  {
                    operation: 'Division',
                    situation: 'Sharing equally, grouping',
                    example: '"12 cookies shared among 3 friends."',
                    cue: 'Ask: "Are we sharing equally or making equal groups?"'
                  }
                ].map((item, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.25rem' }}>
                      {item.operation}
                    </h3>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {item.situation}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                      {item.example}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontStyle: 'italic' }}>
                      {item.cue}
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
                When Mixed Operations Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to choose the wrong operation despite practice, the issue may be reading comprehension or situation recognition — not math. Our <strong>Number Sense Foundations</strong> course (K-2) builds the language and problem-solving strategies that make mixed operations problems manageable. You can also browse all available courses and planners on the{' '}
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
                { name: 'Addition Word Problems', href: '/word-problems-addition-worksheets', desc: 'Practice addition-specific word problems' },
                { name: 'Subtraction Word Problems', href: '/word-problems-subtraction-worksheets', desc: 'Practice subtraction-specific word problems' },
                { name: 'Multiplication Word Problems', href: '/word-problems-multiplication-worksheets', desc: 'Practice multiplication-specific word problems' },
                { name: 'Division Word Problems', href: '/word-problems-division-worksheets', desc: 'Practice division-specific word problems' },
                { name: 'Multi-Step Word Problems', href: '/word-problems-multi-step-worksheets', desc: 'Practice multiple operations in sequence' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview' }
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
              Real questions parents ask about mixed operations word problems
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
                Master Mixed Operations Word Problems Today
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
                Generate custom mixed operations word problems worksheets. Choose your difficulty level (clear cues, ambiguous cues, or extra information) and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=word-problems&skill=mixed" style={{
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
                  Create Mixed Operations Word Problems Worksheets Now
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