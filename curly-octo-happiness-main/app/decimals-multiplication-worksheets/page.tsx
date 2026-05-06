// app/decimals-multiplication-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decimal Multiplication Worksheets | Free Printable 5th-6th Grade Math',
  description: 'Free printable decimal multiplication worksheets for 5th-6th grade. Practice multiplying decimals by whole numbers and decimals with decimal point placement.',
  alternates: {
    canonical: 'https://homeschoolmath.site/decimals-multiplication-worksheets',
  },
}

export default function DecimalMultiplicationWorksheets() {
  const faqs = [
    {
      question: 'What decimal multiplication skills can I practice with these worksheets?',
      answer: 'Our worksheets cover multiplying decimals by whole numbers (3.2 × 4), multiplying decimals by decimals (2.5 × 1.3), multiplying decimals by powers of ten (3.45 × 10, 100, 1000), and real-world word problems involving decimal multiplication.'
    },
    {
      question: 'How do I multiply decimals?',
      answer: 'Multiply as if they were whole numbers, then count the total number of decimal places in both factors. Place the decimal point that many places from the right in the product. For example, 3.2 × 1.5: multiply 32 × 15 = 480. There are 2 decimal places total (one in each factor), so the answer is 4.80 (or 4.8).'
    },
    {
      question: 'Why does my child keep misplacing the decimal point in multiplication?',
      answer: 'The most common decimal multiplication error is placing the decimal point incorrectly. Children often align the decimal points like addition, or guess the placement. The fix is explicit teaching of the rule: "Multiply as whole numbers, then count decimal places." Have your child write the total number of decimal places at the top of the problem before solving. Within 2-3 weeks of explicit practice, most children master the placement rule.'
    },
    {
      question: 'What is the difference between multiplying decimals and multiplying whole numbers?',
      answer: 'The procedure is the same, but decimal point placement is the challenge. For 3.2 × 1.5, multiply as if they were 32 × 15 = 480, then count decimal places (2 total), so answer is 4.80. Children who struggle with this often lack fluency with whole number multiplication or don\'t understand place value. Our whole number multiplication worksheets provide essential prerequisite practice.'
    },
    {
      question: 'When should my child start multiplying decimals?',
      answer: 'Start multiplying decimals after your child has mastered whole number multiplication (multi-digit) and understands decimal place value. Typically this is in 5th grade. Do not start decimal multiplication until whole number multiplication is automatic — adding decimal points to an already shaky procedure will cause frustration. Most children need 2-3 weeks of whole number multiplication review before starting decimal multiplication.'
    },
    {
      question: 'What is the trick for multiplying decimals by powers of ten?',
      answer: 'To multiply a decimal by 10, move the decimal point one place to the right (3.45 × 10 = 34.5). By 100, move two places right (3.45 × 100 = 345). By 1000, move three places right (3.45 × 1000 = 3450). This works because multiplying by 10, 100, or 1000 makes the number larger. Teach this as a shortcut after the standard multiplication method is understood.'
    },
    {
      question: 'How many decimal multiplication problems should my child practice daily?',
      answer: '15-20 problems per session is effective. Start with decimal × whole number (easier), then decimal × decimal (harder). Spend 2-3 weeks on decimal × whole number before introducing decimal × decimal. Most children need 4-6 weeks total to become fluent with decimal multiplication.'
    },
    {
      question: 'Do the answer keys show the decimal placement?',
      answer: 'Answer keys provide the final correctly formatted decimal answer. Encourage your child to show their work: write the whole number multiplication, count the decimal places, and place the decimal point. This allows you to see where errors occur.'
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
      stage: 'Decimal × Whole Number',
      description: 'Worksheets present decimal multiplied by a whole number (3.2 × 4). Multiply as whole numbers (32 × 4 = 128), then count decimal places (1), so answer is 12.8. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Decimal × Decimal (Same Decimal Places)',
      description: 'Worksheets present decimals with the same number of places (2.5 × 1.3). Multiply as whole numbers (25 × 13 = 325), then count decimal places (2 total), so answer is 3.25. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Decimal × Decimal (Different Decimal Places)',
      description: 'Worksheets present decimals with different numbers of places (3.45 × 2.1). Multiply as whole numbers (345 × 21 = 7245), then count decimal places (3 total), so answer is 7.245. Spend 5-7 days on this stage.'
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
              Decimal Multiplication Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Multiply as Whole Numbers, Then Count the Decimal Places
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
              The procedure is the same as whole number multiplication. The challenge is placing the decimal point correctly in the product.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=decimals&skill=multiplication" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Decimal Multiplication Worksheets
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

          {/* Why Decimal Multiplication Matters */}
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
              Why Decimal Multiplication Requires Precision
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many children can multiply whole numbers correctly. But when decimal points are added, the same procedure produces errors in decimal point placement. The fix is not reteaching multiplication — it is teaching the decimal placement rule explicitly. "Multiply as whole numbers, then count the total decimal places in both factors. Place the decimal point that many places from the right in the product."
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build decimal multiplication skills systematically — from decimal × whole number to decimal × decimal with different place values. For students who need whole number multiplication fluency before decimals, see our <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication practice worksheets</Link>.
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
              How to Progress Through Decimal Multiplication
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
              Three stages — master decimal × whole number first
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
              How to Multiply Decimals
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
              Teach this script — count the decimal places
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Ignore the Decimal Points', desc: 'Multiply the numbers as if they were whole numbers. For 3.2 × 1.5, multiply 32 × 15 = 480.' },
                { step: '2', title: 'Count the Decimal Places', desc: 'Count how many digits are after the decimal point in each factor. Add them together. For 3.2 (1 decimal) × 1.5 (1 decimal) = 2 decimal places total.' },
                { step: '3', title: 'Place the Decimal Point', desc: 'Starting from the right of your product, count left the total number of decimal places. 480 with 2 decimal places becomes 4.80 (or 4.8).' }
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

          {/* Powers of Ten Guide */}
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
                Multiplying Decimals by Powers of Ten
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                gap: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>× 10</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Move decimal 1 place right</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>3.45 × 10 = 34.5</p>
                </div>
                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>× 100</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Move decimal 2 places right</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>3.45 × 100 = 345</p>
                </div>
                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>× 1000</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Move decimal 3 places right</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>3.45 × 1000 = 3450</p>
                </div>
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
                When Decimal Multiplication Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to misplace decimal points despite practice, the issue is usually whole number multiplication fluency or place value understanding. Our <strong>Number Sense Foundations</strong> course (K-2) builds the conceptual groundwork that makes decimal operations stick. You can also browse all available courses and planners on the{' '}
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
                { name: 'Decimal Addition', href: '/decimal-addition-worksheets', desc: 'Practice adding decimals before multiplication' },
                { name: 'Decimal Subtraction', href: '/decimal-subtraction-worksheets', desc: 'Practice subtracting decimals before multiplication' },
                { name: 'Decimal Place Value', href: '/decimal-place-value-worksheets', desc: 'Understand decimal digits before multiplying' },
                { name: 'Decimal Division', href: '/decimals-division-worksheets', desc: 'The next step after multiplication' },
                { name: 'Multiplication Practice', href: '/multiplication-practice', desc: 'Build whole number multiplication fluency first' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Full 5th grade math overview' }
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
              Real questions parents ask about decimal multiplication
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
                Master Decimal Multiplication Today
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
                Generate custom decimal multiplication worksheets. Choose your problem type (decimal × whole number or decimal × decimal) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=decimals&skill=multiplication" style={{
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
                  Create Decimal Multiplication Worksheets Now
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