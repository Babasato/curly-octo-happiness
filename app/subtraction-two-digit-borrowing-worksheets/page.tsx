// app/subtraction-two-digit-borrowing-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Two-Digit Subtraction With Borrowing Worksheets | Free Printable 3-4 Grade Math',
  description: 'Free printable two-digit subtraction with borrowing worksheets for 3rd and 4th grade. Practice borrowing tens from the ones column with vertical format problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/subtraction-two-digit-borrowing-worksheets',
  },
}

export default function SubtractionTwoDigitBorrowingWorksheets() {
  const faqs = [
    {
      question: 'What is two-digit subtraction with borrowing?',
      answer: 'Two-digit subtraction with borrowing happens when the top digit in the ones column is smaller than the bottom digit. For example, in 53 - 27, you cannot subtract 7 from 3. So you borrow 1 ten from the tens column — turning 5 tens into 4 tens, and 3 ones into 13 ones. Then subtract: 13 - 7 = 6 in the ones column, and 4 - 2 = 2 in the tens column. The answer is 26. Borrowing is also called regrouping or trading, and it is the most complex subtraction skill in elementary math because it combines place value understanding, basic fact fluency, and multi-step procedure.'
    },
    {
      question: 'When should my child learn borrowing?',
      answer: 'Most children are ready for borrowing in late 2nd grade or early 3rd grade, but only after two conditions are met. First, they must have automatic recall of basic subtraction facts within 20 — no counting back. Second, they must have a solid understanding of place value, meaning they can explain that the "5" in 53 means 5 tens and the "3" means 3 ones, and they can physically trade a ten for ten ones using base-ten blocks. If either condition is missing, borrowing practice will be frustrating and errors will persist. Shoring up facts and place value first makes borrowing much easier to learn.'
    },
    {
      question: 'My child keeps forgetting to borrow. How do I fix this?',
      answer: 'The most common borrowing error is forgetting to reduce the tens column after borrowing. Three fixes work together. First, have your child cross out the tens digit and write the new number above it — this makes the change visible. Second, have your child say the steps aloud every time: "3 is less than 7, so I need to borrow. 5 tens becomes 4 tens. 3 ones becomes 13 ones. Now subtract." Third, use base-ten blocks to show what borrowing actually means — a child who has physically traded a ten for ten ones will not forget to reduce the tens column. The verbal script alone often fixes the error within 2-3 sessions.'
    },
    {
      question: 'What is the difference between borrowing and regrouping?',
      answer: 'They are the same thing. "Borrowing" is the traditional term — you borrow a ten from the tens column. "Regrouping" is the more modern term — you regroup 1 ten as 10 ones. Both describe the same procedure. Our worksheets use both terms so your child recognizes borrowing regardless of what their teacher calls it. The important thing is understanding why it works, not what it is called.'
    },
    {
      question: 'My child can borrow in two-digit problems but struggles with three-digit borrowing across zeros. What should I do?',
      answer: 'Borrowing across zeros (like 400 - 137) is the single best diagnostic for whether place value is truly understood. A child who can borrow in 53 - 27 but falls apart on 400 - 137 has been following a procedure without understanding it. The fix is not more worksheets — it is base-ten blocks. Have your child physically trade a hundred for ten tens, then a ten for ten ones, and watch what happens. Once the physical trading makes sense, the written procedure clicks very quickly, often in a single session. Our Subtraction in 30 Days course includes explicit place value work designed for this exact gap.'
    },
    {
      question: 'Should borrowing worksheets be vertical or horizontal?',
      answer: 'Start with vertical format (column subtraction) because that is how borrowing is taught. The vertical format shows the place value alignment clearly. Once the vertical procedure is solid, introduce horizontal problems (53 - 27 = ?) where your child must rewrite the problem vertically before solving. Children who can only do vertical format will struggle when subtraction appears inside equations and word problems. The transition to horizontal should happen when vertical borrowing is accurate, usually within 2-3 weeks of starting borrowing practice.'
    },
    {
      question: 'How do I know my child is ready for three-digit borrowing?',
      answer: 'Your child is ready for three-digit borrowing when they can solve any two-digit borrowing problem quickly and accurately without reminders. Speed matters here: if borrowing is still slow or effortful, adding a third digit will overload working memory. A child who solves 53 - 27 in under 10 seconds with no errors is ready for three-digit work. A child who still hesitates or forgets steps needs more two-digit practice. The errors that appear in three-digit borrowing are almost always the same errors that were present in two-digit borrowing but hidden by smaller numbers.'
    },
    {
      question: 'What comes after two-digit borrowing?',
      answer: 'The natural progression is: two-digit borrowing → three-digit borrowing → borrowing across zeros → decimal subtraction (aligning decimal points and borrowing across decimal places). Most children need 4-6 weeks of two-digit borrowing practice before moving to three-digit problems. Three-digit borrowing typically takes another 4-6 weeks. Borrowing across zeros can take 2-4 weeks of focused practice. By the end of 4th grade, a child should borrow confidently across multiple zeros and explain the trading process using place value language.'
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
      stage: 'Prerequisites — Basic Facts and Place Value',
      description: 'Before borrowing will make sense, two conditions must be in place. First: automatic subtraction facts within 20. If your child still counts back for 13-7, borrowing problems will overload their working memory before they even get to the borrowing step. Second: solid place value understanding — your child should be able to explain that 53 means 5 tens and 3 ones, and physically trade a ten for ten ones using base-ten blocks. These are not negotiable prerequisites; they are the difference between a child who picks up borrowing in a week and one who struggles for months.'
    },
    {
      stage: 'Beginning Borrowing — Two-Digit Problems',
      description: 'Start with problems where only the ones column requires borrowing (like 53 - 27). The tens column should subtract cleanly after borrowing. Use base-ten blocks alongside worksheets for the first 2-3 sessions so your child sees the connection between the physical trade and the written procedure. Expect errors in the first week — the most common is forgetting to reduce the tens column. The verbal script ("5 tens becomes 4 tens") fixes this quickly. Most children need 4-6 weeks of two-digit borrowing practice before the procedure feels automatic.'
    },
    {
      stage: 'Advanced Borrowing — Three Digits and Zeros',
      description: 'Once two-digit borrowing is automatic, introduce three-digit problems (like 453 - 278). The procedure is the same, but more steps mean more opportunities for error. Then introduce borrowing across zeros (like 400 - 137). This is the hardest borrowing skill because zeros cannot be reduced — your child must borrow across multiple place values. If your child struggles here, go back to base-ten blocks and physically trade a hundred for ten tens, then a ten for ten ones. This gap almost always indicates a place value gap, not a borrowing procedure gap.'
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
              Two-Digit Subtraction With Borrowing Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Master Borrowing Tens from the Ones Column
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
              Borrowing is the most complex subtraction skill in elementary math — it combines place value understanding, basic fact fluency, and multi-step procedure. Master it here.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=subtraction&skill=two-digit-borrowing" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Borrowing Subtraction Worksheets
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

          {/* Why Borrowing Matters */}
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
              Why Borrowing Is the Hardest Subtraction Skill — And the Most Important
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Borrowing requires place value understanding, basic fact fluency, and working memory — all at once. A child who can borrow reliably can subtract any two-digit numbers and is ready for three-digit subtraction, decimal subtraction, and more complex math. A child who struggles with borrowing will hit a wall that affects everything from long division to algebra.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              The most common borrowing errors — forgetting to reduce the tens column, subtracting the borrowed number incorrectly, borrowing when not needed — almost always signal a place value gap, not a procedure gap. The fix is not more worksheets. The fix is base-ten blocks and explicit place value work. For students who need to build place value understanding before borrowing, see our{' '}
              <Link href="/place-value" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>place value page</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to apply borrowing in more complex contexts, our{' '}
              <Link href="/subtraction-word-problems-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>subtraction word problems worksheets</Link>{' '}
              include multi-digit borrowing scenarios.
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
              How Borrowing Skills Develop
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
              What needs to be in place, what to teach first, and when to move on
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
              How to Subtract with Borrowing
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
              Teach this script — have your child say it aloud every time
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Check the Ones Column', desc: 'Look at the top digit in the ones column. Is it smaller than the bottom digit? If yes, you need to borrow. Say: "3 is less than 7, so I need to borrow."' },
                { step: '2', title: 'Borrow from the Tens', desc: 'Cross out the tens digit. Reduce it by 1. Write the new tens digit above it. Add 10 to the ones digit. Say: "5 tens becomes 4 tens. 3 ones becomes 13 ones."' },
                { step: '3', title: 'Subtract Both Columns', desc: 'Subtract the ones column first: 13 - 7 = 6. Then subtract the tens column: 4 - 2 = 2. Write both answers. Say: "13 minus 7 is 6. 4 minus 2 is 2. The answer is 26."' }
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
                When Borrowing Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with borrowing despite practice, the root cause is almost always place value understanding — they do not yet have an internalized sense of what it means to trade a ten for ten ones. Our <strong>Subtraction in 30 Days</strong> course (grades 2–4) includes systematic place value instruction that resolves this at the conceptual level rather than through procedural drilling. You can also browse all available courses and planners on the{' '}
                <Link href="/resources" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/cdhshb"
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
                View Subtraction in 30 Days — $57
              </a>
            </div>
          </section>

          {/* Back to Parent Link */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Link href="/subtraction-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Subtraction Practice Hub
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
                { name: 'Two-Digit Subtraction (No Borrowing)', href: '/subtraction-two-digit-no-borrowing-worksheets', desc: 'The prerequisite — master column alignment before borrowing' },
                { name: 'Place Value', href: '/place-value', desc: 'The other prerequisite — understand what tens and ones mean' },
                { name: 'Basic Subtraction Facts', href: '/subtraction-basic-facts-worksheets', desc: 'The fluency prerequisite — automatic facts within 20' },
                { name: 'Subtraction Word Problems', href: '/subtraction-word-problems-worksheets', desc: 'Apply borrowing in real-world contexts' },
                { name: 'Three-Digit Subtraction', href: '/subtraction-three-digit-borrowing-worksheets', desc: 'The next step after two-digit borrowing is solid' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview — where borrowing is introduced' }
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
              Real questions parents ask about subtraction borrowing
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
                Master Borrowing Today
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
                Generate custom two-digit subtraction with borrowing worksheets. Build the place value understanding and procedural fluency that make all subtraction work.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=subtraction&skill=two-digit-borrowing" style={{
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
                  Create Borrowing Worksheets Now
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