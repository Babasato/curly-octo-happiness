// app/decimal-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decimal Word Problems Worksheets | Free Printable 5th-6th Grade Math',
  description: 'Free printable decimal word problems worksheets for 5th-6th grade. Practice real-world decimal scenarios involving money, measurement, and data.',
  alternates: {
    canonical: 'https://homeschoolmath.site/decimal-word-problems-worksheets',
  },
}

export default function DecimalWordProblemsWorksheets() {
  const faqs = [
    {
      question: 'What decimal word problems can I practice with these worksheets?',
      answer: 'Our worksheets cover real-world decimal scenarios including money (calculating change, totals, discounts), measurement (length, weight, volume conversions), data tracking (averages, differences), and multi-step problems that combine addition and subtraction.'
    },
    {
      question: 'My child can solve decimal equations but freezes on word problems. What is happening?',
      answer: 'This is extremely common. The issue is reading comprehension and situation recognition — not decimal skills. Your child has learned what to do when they see a decimal point. But a word problem does not have a decimal point visible. Your child must read the story, identify what is being asked, and decide that decimals are needed. The fix is explicit teaching: read the problem aloud, ask "What is this problem about? Money? Measurement?" and have your child restate the problem in their own words.'
    },
    {
      question: 'What keywords signal decimal word problems?',
      answer: 'Money keywords: "dollars," "cents," "change," "total cost," "price," "discount." Measurement keywords: "meters," "liters," "kilograms," "distance," "weight," "volume." Comparison keywords: "how much more," "how much less," "difference," "remaining." However, warn your child that keywords are clues, not rules — the best strategy is to understand the situation.'
    },
    {
      question: 'Should decimal word problems be taught before or after decimal operations?',
      answer: 'Teach them alongside operations, not after. A child who can add 4.5 + 1.23 but cannot recognize that a word problem requires that calculation has learned a procedure without understanding when to use it. Start with simple money word problems (purchases and change) while teaching decimal addition, then expand to measurement and multi-step problems as skills develop.'
    },
    {
      question: 'How do I help my child who guesses the operation instead of reading carefully?',
      answer: 'Guessing the operation is the most common word problem error. Two fixes work well. First, have your child cover the numbers and read only the words first. Ask: "What is happening in this story? Are we combining things or finding a difference?" Only after answering that should your child uncover the numbers. Second, have your child rewrite the word problem as an equation before solving. Within 2-3 weeks of this explicit strategy, most guessing stops.'
    },
    {
      question: 'What is the difference between one-step and multi-step decimal word problems?',
      answer: 'One-step problems require a single operation: "Sarah bought a book for $12.99 and a pen for $3.50. How much did she spend?" (addition). Multi-step problems require two or more operations: "Sarah had $20.00. She bought a book for $12.99 and a pen for $3.50. How much change did she receive?" (addition then subtraction). Start with one-step problems, then introduce multi-step once those are solid.'
    },
    {
      question: 'How many decimal word problems should my child practice daily?',
      answer: '5-10 word problems per session is effective. Word problems take longer than equations because of the reading and comprehension step. Quality over quantity — it is better to solve 5 problems correctly with full understanding than 15 problems guessed. Spend 15-20 minutes daily on word problems, not more.'
    },
    {
      question: 'Do the answer keys show the steps?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a word problem wrong, do not just show the correct answer. Go back to the problem and ask: "Let\'s read this again. What is happening? What are we trying to find out?" Walking through the reasoning is more valuable than the correct answer.'
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
      stage: 'Money Word Problems — One-Step',
      description: 'Start with simple money scenarios: "Sarah bought a book for $12.99 and a pen for $3.50. How much did she spend?" (addition) or "Sarah had $20.00 and spent $12.99. How much change?" (subtraction). Money is the most familiar decimal context. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Measurement Word Problems — One-Step',
      description: 'Move to measurement scenarios: "A rope is 4.5 meters long. Another rope is 2.3 meters long. How long are they combined?" (addition) or "A 5.0 liter container has 2.35 liters of water. How much more to fill it?" (subtraction). Measurement builds the connection to science. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Multi-Step Decimal Word Problems',
      description: 'Combine multiple operations: "Sarah had $20.00. She bought a book for $12.99 and a pen for $3.50. How much change?" (addition then subtraction). Or comparison problems: "Tom ran 3.45 km. Jerry ran 2.8 km. How much farther did Tom run?" (subtraction). Spend 7-10 days on this stage.'
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
              Decimal Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Real-World Decimal Scenarios
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
              A child can add 4.5 + 1.23. But do they know when to add decimals? Word problems build the skill of recognizing decimal situations — the skill that matters in real life.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=decimals&skill=word-problems" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Decimal Word Problems Worksheets
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

          {/* Why Word Problems Matter */}
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
              Why Decimal Word Problems Are the True Test of Understanding
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              A child can memorize that 4.5 + 1.23 = 5.73. But do they know when to add decimals? Word problems ask children to read a scenario, identify what the problem is asking, and choose the correct operation. This is what real math looks like — not isolated equations, but applying skills to actual situations like shopping, cooking, and measuring.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Many parents focus exclusively on computation worksheets and then wonder why their child freezes on word problems. The answer is simple: word problems require reading comprehension and situation recognition. That is why word problems should run alongside computation practice from the very beginning. For students who need computation fluency alongside word problem practice, see our <Link href="/decimal-addition-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>decimal addition</Link> and <Link href="/decimal-subtraction-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>decimal subtraction</Link> worksheets.
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
              How to Progress Through Decimal Word Problems
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
              Three stages — start with money, the most familiar context
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
              How to Solve Decimal Word Problems
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
              Teach this process — it works for any word problem
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it in their own words. Ask: "What is happening in this story? Is this about money, measurement, or something else?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Operation', desc: 'Ask: "Are we combining things (addition) or finding a difference (subtraction)?" Have your child explain why before solving. "We are adding because Sarah bought two items and we need the total."' },
                { step: '3', title: 'Write the Equation and Solve', desc: 'Write the decimal equation based on the problem. Solve it using alignment and borrowing rules. Then ask: "Does this answer make sense in the story?" If not, go back to step 1.' }
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
                Three Types of Decimal Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Money Problems',
                    who: '4th-5th grade',
                    desc: '"Sarah bought a book for $12.99 and a pen for $3.50. How much did she spend?" (addition) or "Sarah had $20.00. She spent $12.99. How much change?" (subtraction). The most familiar decimal context.'
                  },
                  {
                    title: 'Measurement Problems',
                    who: '5th grade',
                    desc: '"A rope is 4.5 meters long. Another rope is 2.3 meters long. How long are they combined?" (addition) or "A 5.0 liter container has 2.35 liters of water. How much more to fill it?" (subtraction).'
                  },
                  {
                    title: 'Multi-Step Problems',
                    who: '5th-6th grade',
                    desc: '"Sarah had $20.00. She bought a book for $12.99 and a pen for $3.50. How much change did she receive?" (addition then subtraction). Requires multiple operations in sequence.'
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
                When Word Problem Struggles Keep Happening
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child consistently guesses the operation or cannot restate word problems in their own words, the issue may be reading comprehension or language processing — not math. Our <strong>Math Foundations</strong> course (grades 4-6) includes explicit instruction in mathematical language and problem-solving strategies. You can also browse all available courses and planners on the{' '}
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
                View Math Foundations — $57
              </a>
            </div>
          </section>

          {/* Back to Parent Link */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Link href="/decimals-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Decimals Practice Hub
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
                { name: 'Decimal Addition', href: '/decimal-addition-worksheets', desc: 'Build computation fluency for word problems' },
                { name: 'Decimal Subtraction', href: '/decimal-subtraction-worksheets', desc: 'Build subtraction fluency for word problems' },
                { name: 'Decimal Place Value', href: '/decimal-place-value-worksheets', desc: 'Understand what decimals mean before applying them' },
                { name: 'Fraction Word Problems', href: '/fraction-word-problems-worksheets', desc: 'Compare decimal and fraction scenarios' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Full 5th grade math overview' },
                { name: 'Grade 6 Worksheets', href: '/grade-6-worksheets', desc: 'Where decimal word problems become more complex' }
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
              Real questions parents ask about decimal word problems
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
                Apply Decimals to Real-World Situations Today
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
                Generate custom decimal word problems worksheets. Choose your problem type (money, measurement, or multi-step) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=decimals&skill=word-problems" style={{
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
                  Create Decimal Word Problems Worksheets Now
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