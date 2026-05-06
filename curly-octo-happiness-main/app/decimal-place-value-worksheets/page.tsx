// app/decimal-place-value-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decimal Place Value Worksheets | Free Printable 4th-5th Grade Math',
  description: 'Free printable decimal place value worksheets for 4th-5th grade. Practice identifying tenths, hundredths, and thousandths with hundredths grid visuals.',
  alternates: {
    canonical: 'https://homeschoolmath.site/decimal-place-value-worksheets',
  },
}

export default function DecimalPlaceValueWorksheets() {
  const faqs = [
    {
      question: 'What decimal place value skills can I practice with these worksheets?',
      answer: 'Our worksheets cover identifying the value of digits in decimal numbers (which digit is in the tenths place?), writing decimals from words (thirty-four hundredths = 0.34), comparing decimals using place value, and hundredths grid visualizations that make decimals concrete.'
    },
    {
      question: 'Why does my child think 0.45 is larger than 0.7?',
      answer: 'This is known as "whole-number thinking." Students see 45 and 7 and instinctively pick the larger digit, ignoring the place value. The fix is explicit place value work with hundredths grids. Color 0.45 (45 small squares) and 0.70 (70 small squares) on a 10x10 grid. The visual makes the comparison obvious. Within 2-3 weeks of grid work, most children overcome this misconception.'
    },
    {
      question: 'What is the best way to teach decimal place value?',
      answer: 'Start with money — dimes are tenths of a dollar, pennies are hundredths. Then move to hundredths grids (10x10 grids where each small square is one hundredth). Finally, introduce the place value chart with columns for tenths, hundredths, and thousandths. The concrete → visual → abstract progression is essential for deep understanding.'
    },
    {
      question: 'How do hundredths grids help with decimal understanding?',
      answer: 'A hundredths grid is a 10x10 square where each small square represents 0.01. Shading 34 squares shows 0.34. This makes decimals visible and concrete. Children who use hundredths grids rarely develop the "longer decimal is larger" misconception because they can see that 0.70 (70 squares) is larger than 0.45 (45 squares). Our place value worksheets include hundredths grid visualizations for grades 4-5.'
    },
    {
      question: 'What is the difference between tenths, hundredths, and thousandths?',
      answer: 'Tenths are the first digit after the decimal (0.1 = 1/10). Hundredths are the second digit (0.01 = 1/100). Thousandths are the third digit (0.001 = 1/1000). Use money: dimes = tenths, pennies = hundredths. Thousandths are harder to visualize — use a thousandths grid (10x10x10) or relate to millimeters (1 mm = 0.001 m).'
    },
    {
      question: 'When should my child start comparing decimals?',
      answer: 'Start comparing decimals after place value identification is solid (the child can point to the tenths place and say its value). Begin with same number of decimal places (0.45 vs 0.67). Then introduce different decimal places (0.7 vs 0.45) using zero padding (0.70 vs 0.45). Most children need 2-3 weeks of place value work before comparing feels natural.'
    },
    {
      question: 'What is the most common decimal place value error?',
      answer: 'The most common error is misreading 0.45 as "zero point forty-five" instead of "forty-five hundredths." This seems minor, but the language matters — "forty-five hundredths" emphasizes the place value (hundredths), while "point forty-five" skips it entirely. Always have your child say decimals using place value language: 0.45 = "forty-five hundredths," not "point four five."'
    },
    {
      question: 'How do decimals connect to fractions?',
      answer: 'Decimals are fractions with denominators of 10, 100, or 1000. The decimal 0.34 means 34/100. Teaching this connection explicitly is critical — children who understand that 0.5 = 1/2 and 0.25 = 1/4 will find fraction-decimal conversion natural. Our fraction and decimal pages are designed to be used together, with cross-references between related skills.'
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
      stage: 'Identifying Place Value',
      description: 'Worksheets ask questions like "Which digit is in the tenths place?" or "What is the value of the digit 4 in 3.47?" The child learns the names and positions of decimal places. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Writing Decimals from Words',
      description: 'Worksheets give written decimals ("thirty-four hundredths") and the child writes the decimal (0.34). This builds the connection between place value language and decimal notation. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Comparing Decimals with Visuals',
      description: 'Worksheets include hundredths grids and ask the child to shade and compare decimals (0.45 vs 0.7). The visual model makes the comparison obvious and prevents whole-number thinking. Spend 5-7 days on this stage before moving to abstract comparison.'
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
              Decimal Place Value Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Understanding Tenths, Hundredths, and Thousandths
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
              Before adding or subtracting decimals, children need to understand what decimals mean. Place value is the foundation — without it, operations become meaningless procedures.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=decimals&skill=place-value" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Decimal Place Value Worksheets
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

          {/* Why Place Value Matters */}
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
              Why Decimal Place Value Is the Foundation That Everything Else Sits On
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Most parents skip place value and go straight to decimal operations. This is a mistake. A child who can add 4.5 + 1.23 but cannot explain that 0.45 is forty-five hundredths has learned a procedure without understanding. When they hit decimal multiplication and division, that lack of understanding becomes a wall.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build place value understanding systematically — from identifying digit values to comparing decimals using hundredths grids. For students who need to build whole number place value first, see our <Link href="/place-value" style={{color: 'var(--primary)', textDecoration: 'underline'}}>place value page</Link>.
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
              How to Build Decimal Place Value Understanding
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
              Three stages — use hundredths grids for visual learners
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
              How to Read and Write Decimals
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
                { step: '1', title: 'Read the Whole Number Part', desc: 'For 3.45, say "three." Then say "and" for the decimal point. Then read the decimal part as a whole number: "forty-five." Finally, say the place value: "hundredths." "Three and forty-five hundredths."' },
                { step: '2', title: 'Identify Each Digit\'s Value', desc: 'In 3.45, the 4 is in the tenths place (value 0.4). The 5 is in the hundredths place (value 0.05). The 3 is in the ones place (value 3).' },
                { step: '3', title: 'Use a Hundredths Grid', desc: 'Shade 34 squares on a 10x10 grid to represent 0.34. The grid makes the abstract concept of hundredths visible and concrete.' }
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
                When Place Value Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with decimal place value — especially the "longer decimal is larger" misconception — the issue is usually whole number place value understanding. Our <strong>Math Foundations</strong> course (grades 4-6) includes systematic instruction in place value for both whole numbers and decimals. You can also browse all available courses and planners on the{' '}
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
                { name: 'Decimal Addition', href: '/decimal-addition-worksheets', desc: 'Apply place value to adding decimals' },
                { name: 'Decimal Subtraction', href: '/decimal-subtraction-worksheets', desc: 'Apply place value to subtracting decimals' },
                { name: 'Decimal Word Problems', href: '/decimal-word-problems-worksheets', desc: 'Use place value to solve real-world problems' },
                { name: 'Place Value', href: '/place-value', desc: 'Build whole number place value first' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Where decimal place value is extended' }
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
              Real questions parents ask about decimal place value
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
                Build Decimal Place Value Understanding Today
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
                Generate custom decimal place value worksheets. Choose your place value range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=decimals&skill=place-value" style={{
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
                  Create Decimal Place Value Worksheets Now
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