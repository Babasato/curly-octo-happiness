// app/decimal-subtraction-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decimal Subtraction Worksheets | Free Printable 4th-6th Grade Math',
  description: 'Free printable decimal subtraction worksheets for 4th-6th grade. Practice subtracting tenths, hundredths, and thousandths with borrowing and decimal point alignment.',
  alternates: {
    canonical: 'https://homeschoolmath.site/decimal-subtraction-worksheets',
  },
}

export default function DecimalSubtractionWorksheets() {
  const faqs = [
    {
      question: 'What decimal subtraction skills can I practice with these worksheets?',
      answer: 'Our worksheets cover subtracting tenths from tenths, hundredths from hundredths, and mixed place value problems where numbers have different lengths. We also include problems requiring borrowing across decimal places (4.2 - 1.8) and across zeros (5.0 - 2.35).'
    },
    {
      question: 'Why does my child struggle with decimal subtraction but not decimal addition?',
      answer: 'This is common. Subtraction requires borrowing, which adds cognitive load. If a child is still shaky on whole number subtraction with borrowing, decimal subtraction will be frustrating. The fix is not more decimal practice — it is whole number subtraction practice until borrowing feels automatic. Use our subtraction basic facts and two-digit subtraction worksheets first.'
    },
    {
      question: 'How do I teach decimal subtraction with borrowing across zeros?',
      answer: 'Problems like 5.0 - 2.35 are the hardest decimal subtraction skill. Teach the "zero padding" strategy: write 5.0 as 5.00 so both numbers have hundredths. Then borrow from the ones to the tenths to the hundredths. Use grid paper to keep columns organized. Most children need 1-2 weeks of explicit practice on borrowing across zeros.'
    },
    {
      question: 'My child keeps subtracting the smaller digit from the larger digit regardless of position. How do I fix this?',
      answer: 'This error happens when a child memorizes "subtract the smaller from the larger" from comparing numbers. The fix is explicit teaching: "We always subtract the bottom number from the top number. If the top is smaller, we borrow." Have your child circle the top digit in each column before subtracting. Within 2 weeks, most children break the "smaller from larger" habit.'
    },
    {
      question: 'Should decimal subtraction be taught horizontally or vertically?',
      answer: 'Always start vertically. The vertical format shows alignment clearly. Once vertical subtraction is solid, introduce horizontal problems where the child must rewrite them vertically before solving. Children who can only do vertical format will struggle when subtraction appears inside equations and word problems.'
    },
    {
      question: 'How many decimal subtraction problems should my child practice daily?',
      answer: '15-20 problems per session is effective. Practice should be short and daily — 10 minutes every day beats one long session per week. If borrowing is a struggle, reduce to 10 problems and focus on quality over quantity. Stop when attention drops.'
    },
    {
      question: 'What order should I teach decimal subtraction difficulty levels?',
      answer: 'First: same number of decimal places without borrowing (4.8 - 2.3). Second: same place value with borrowing (4.2 - 1.8). Third: different place values with zero padding (4.5 - 1.23 becomes 4.50 - 1.23). Fourth: borrowing across zeros (5.0 - 2.35). Fifth: mixed practice of all types. Each stage typically takes 3-5 days.'
    },
    {
      question: 'Do the answer keys show the work?',
      answer: 'Answer keys provide only the final answer. This allows students to work through alignment and borrowing independently while giving parents quick verification. If your child makes borrowing errors, have them show their borrowing marks (crossing out and writing new numbers) so you can see where the error occurs.'
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
      stage: 'Same Place Value — No Borrowing',
      description: 'Start with problems where both numbers have the same decimal places and the top digit is larger than the bottom digit in every column (4.8 - 2.3). The child focuses only on alignment and basic subtraction. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Same Place Value — With Borrowing',
      description: 'Introduce problems where borrowing is required within the decimal columns (4.2 - 1.8). The child must borrow from the tenths to the hundredths or from the ones to the tenths. This is where most errors occur. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Different Place Values and Borrowing Across Zeros',
      description: 'Combine different place values (requiring zero padding) with borrowing across multiple columns (5.0 - 2.35). This is the hardest decimal subtraction skill. Spend 7-10 days on this stage before moving to word problems.'
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
              Decimal Subtraction Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Subtracting Tenths, Hundredths, and Thousandths
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
              Decimal subtraction requires the same alignment skills as addition, plus borrowing. Master both to build complete decimal fluency.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=decimals&skill=subtraction" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Decimal Subtraction Worksheets
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

          {/* Why Decimal Subtraction Matters */}
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
              Why Decimal Subtraction Reveals Hidden Gaps in Whole Number Borrowing
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Decimal subtraction looks like whole number subtraction with a decimal point. But the decimal point actually makes borrowing harder — because zeros in decimal places often require borrowing across multiple columns. A child who can borrow in 42 - 18 may still struggle with 4.2 - 1.8 because the borrowing chain is shorter and less familiar.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build decimal subtraction systematically — from simple same-place-value problems to complex borrowing across zeros. For students who need to build whole number subtraction fluency before decimals, see our <Link href="/subtraction-basic-facts-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction basic facts worksheets</Link> and <Link href="/subtraction-two-digit-borrowing-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>two-digit subtraction with borrowing worksheets</Link>.
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
              How to Progress Through Decimal Subtraction
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
              Three stages — master borrowing before moving to different place values
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
              How to Subtract Decimals
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
              Teach this script — borrowing is the same as whole numbers
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Line Up the Decimal Points', desc: 'Write the numbers in a column with decimal points stacked vertically. Add zeros as placeholders so both numbers have the same number of decimal places.' },
                { step: '2', title: 'Subtract from Right to Left', desc: 'Start with the smallest decimal place. If the top digit is smaller than the bottom digit, borrow from the column to the left — just like whole numbers.' },
                { step: '3', title: 'Bring Down the Decimal Point', desc: 'Write the decimal point in the answer directly below the stacked decimal points. Check that the answer makes sense (it should be smaller than the starting number).' }
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
                When Decimal Subtraction Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with decimal subtraction borrowing, the issue is almost always whole number subtraction fluency. Our <strong>Math Foundations</strong> course (grades 4-6) includes systematic practice in borrowing across place values. You can also browse all available courses and planners on the{' '}
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
                { name: 'Decimal Addition', href: '/decimal-addition-worksheets', desc: 'Build alignment skills before subtraction' },
                { name: 'Decimal Place Value', href: '/decimal-place-value-worksheets', desc: 'Understand what digits mean before operations' },
                { name: 'Decimal Word Problems', href: '/decimal-word-problems-worksheets', desc: 'Apply subtraction to money and measurement' },
                { name: 'Subtraction Basic Facts', href: '/subtraction-basic-facts-worksheets', desc: 'Build whole number borrowing fluency first' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Where decimal subtraction is mastered' }
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
              Real questions parents ask about decimal subtraction
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
                Master Decimal Borrowing Today
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
                Generate custom decimal subtraction worksheets. Choose your place value range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=decimals&skill=subtraction" style={{
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
                  Create Decimal Subtraction Worksheets Now
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