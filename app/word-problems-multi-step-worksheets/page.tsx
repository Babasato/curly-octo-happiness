// app/word-problems-multi-step-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Step Word Problems Worksheets | Free Printable 3-6 Grade Math',
  description: 'Free printable multi-step word problems worksheets for 3rd-6th grade. Practice two or more operations in sequence with real-world math problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/word-problems-multi-step-worksheets',
  },
}

export default function WordProblemsMultiStepWorksheets() {
  const faqs = [
    {
      question: 'What are multi-step word problems?',
      answer: 'Multi-step word problems require two or more operations to solve. For example: "Sarah had $20. She bought a book for $12 and a pen for $3. How much change did she receive?" (addition then subtraction). These problems build the skill of breaking complex situations into smaller steps.'
    },
    {
      question: 'Why does my child struggle with multi-step word problems?',
      answer: 'Multi-step problems require holding intermediate answers in working memory while completing the next step. A child who can solve each individual operation may freeze on multi-step problems due to working memory overload. The fix is explicit step-by-step teaching: "First, what do we need to find? Write that answer. Second, what do we do next?" Breaking the problem into written steps reduces memory load.'
    },
    {
      question: 'When should my child start multi-step word problems?',
      answer: 'Start multi-step word problems after your child can solve one-step word problems reliably. Typically this is in 2nd or 3rd grade for simple two-step problems (addition then subtraction), and 4th grade for more complex multi-step problems. Do not rush — master one-step problems first.'
    },
    {
      question: 'What is the most common multi-step word problem error?',
      answer: 'The most common error is doing operations in the wrong order or skipping a step entirely. For "Sarah had $20. She bought a book for $12 and a pen for $3. How much change?" a child might subtract $12 from $20 ($8) and stop, forgetting the pen. The fix is teaching the "write each step" strategy. Have your child write the intermediate answer before moving to the next step.'
    },
    {
      question: 'How do I teach my child to solve multi-step word problems?',
      answer: 'Teach the step-by-step method: (1) Read the entire problem. (2) Identify the first operation — what happens first? (3) Solve and write the intermediate answer. (4) Identify the next operation using the intermediate answer. (5) Solve and write the final answer. (6) Check: does the answer make sense? Writing each step explicitly prevents skipping.'
    },
    {
      question: 'How many multi-step word problems should my child practice daily?',
      answer: '3-5 multi-step problems per session is effective. Multi-step problems take longer than one-step problems because of the additional reasoning and writing. Quality over quantity — it is better to solve 3 problems correctly with full understanding than 10 problems guessed. Spend 15-20 minutes daily.'
    },
    {
      question: 'What types of multi-step problems should I teach first?',
      answer: 'Start with two-step problems that use the same operation twice (addition then addition). Then two-step problems with different operations (addition then subtraction). Then three-step problems. Then problems that require the child to identify which information is needed and which is extra. Our worksheets progress through these levels.'
    },
    {
      question: 'Do the answer keys show the steps?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a multi-step problem wrong, have them show their intermediate answers so you can see where the error occurred.'
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
      stage: 'Two-Step — Same Operation (2nd-3rd Grade)',
      description: 'Worksheets present problems with two steps of the same operation: "Sarah had 5 apples. She bought 3 more. Then she bought 2 more. How many does she have?" (5 + 3 = 8, then 8 + 2 = 10). Spend 3-5 days on this stage.'
    },
    {
      stage: 'Two-Step — Different Operations (3rd-4th Grade)',
      description: 'Worksheets present problems with two different operations: "Sarah had $20. She bought a book for $12 and a pen for $3. How much change?" (12 + 3 = 15, then 20 - 15 = 5). Spend 5-7 days on this stage.'
    },
    {
      stage: 'Three-Step and Extra Information (4th-6th Grade)',
      description: 'Worksheets present three-step problems and problems with extra information that is not needed. The child must identify which numbers are relevant and perform multiple operations in sequence. Spend 7-10 days on this stage.'
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
              Multi-Step Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Two or More Operations in Sequence
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
              Real-world problems rarely require a single operation. Multi-step word problems build the skill of breaking complex situations into manageable steps.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=word-problems&skill=multi-step" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Multi-Step Word Problems Worksheets
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

          {/* Why Multi-Step Problems Matter */}
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
              Why Multi-Step Word Problems Are the True Test of Problem-Solving
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Real life does not present one-step problems. "You have $20. You buy a book for $12 and a pen for $3. How much change?" requires addition THEN subtraction. Children who can solve each operation individually may freeze on multi-step problems because they cannot hold the intermediate answer in working memory.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build multi-step problem-solving skills systematically — starting with two-step problems using the same operation, then different operations, then three-step problems with extra information. For students who need one-step word problem practice first, see our <Link href="/word-problems-addition-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition</Link>, <Link href="/word-problems-subtraction-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction</Link>, <Link href="/word-problems-multiplication-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication</Link>, and <Link href="/word-problems-division-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division</Link> word problems worksheets.
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
              How to Progress Through Multi-Step Word Problems
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
              Three stages — master two-step before three-step
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
              How to Solve Multi-Step Word Problems
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
              Teach the step-by-step method — write each intermediate answer
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read the Entire Problem', desc: 'Read the problem aloud. Have your child restate it. Ask: "What happens first? What happens next?" Do not start solving yet.' },
                { step: '2', title: 'Solve the First Step', desc: 'Identify the first operation. Solve it. Write the intermediate answer clearly. Do not try to hold it in memory — write it down.' },
                { step: '3', title: 'Solve the Second Step', desc: 'Using the intermediate answer, identify the next operation. Solve it. Write the final answer. Then ask: "Does this answer make sense in the story?"' }
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
                Three Types of Multi-Step Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Same Operation (Two-Step)',
                    who: '2nd-3rd grade',
                    desc: '"Sarah had 5 apples. She bought 3 more. Then she bought 2 more. How many does she have?" (5 + 3 = 8, then 8 + 2 = 10).'
                  },
                  {
                    title: 'Different Operations (Two-Step)',
                    who: '3rd-4th grade',
                    desc: '"Sarah had $20. She bought a book for $12 and a pen for $3. How much change?" (12 + 3 = 15, then 20 - 15 = 5).'
                  },
                  {
                    title: 'Three-Step and Extra Information',
                    who: '4th-6th grade',
                    desc: '"Sarah had $20. She bought a book for $12, a pen for $3, and a pencil for $1. How much change?" (12+3+1=16, then 20-16=4). May include irrelevant numbers.'
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
                When Multi-Step Problem Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with multi-step problems — especially skipping steps or doing operations in the wrong order — the issue may be working memory or executive function. Our <strong>Number Sense Foundations</strong> course (K-2) builds the problem-solving strategies that make multi-step problems manageable. You can also browse all available courses and planners on the{' '}
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
                { name: 'Addition Word Problems', href: '/word-problems-addition-worksheets', desc: 'Practice one-step addition problems first' },
                { name: 'Subtraction Word Problems', href: '/word-problems-subtraction-worksheets', desc: 'Practice one-step subtraction problems first' },
                { name: 'Multiplication Word Problems', href: '/word-problems-multiplication-worksheets', desc: 'Practice one-step multiplication problems first' },
                { name: 'Division Word Problems', href: '/word-problems-division-worksheets', desc: 'Practice one-step division problems first' },
                { name: 'Mixed Operations', href: '/word-problems-mixed-operations-worksheets', desc: 'Identify the correct operation without cues' },
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
              Real questions parents ask about multi-step word problems
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
                Master Multi-Step Word Problems Today
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
                Generate custom multi-step word problems worksheets. Choose your problem type (two-step or three-step) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=word-problems&skill=multi-step" style={{
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
                  Create Multi-Step Word Problems Worksheets Now
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