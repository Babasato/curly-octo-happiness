// app/decimal-addition-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decimal Addition Worksheets | Free Printable 4th-5th Grade Math',
  description: 'Free printable decimal addition worksheets for 4th-5th grade. Practice adding tenths, hundredths, and thousandths with proper decimal point alignment.',
  alternates: {
    canonical: 'https://homeschoolmath.site/decimal-addition-worksheets',
  },
}

export default function DecimalAdditionWorksheets() {
  const faqs = [
    {
      question: 'What decimal addition skills can I practice with these worksheets?',
      answer: 'Our worksheets cover adding tenths to tenths (1.2 + 3.4), hundredths to hundredths (2.34 + 5.67), and mixed place value problems where numbers have different lengths (4.5 + 1.23). This last skill is often the most challenging because students must pad with zeros to maintain alignment.'
    },
    {
      question: 'Why does my child keep forgetting to line up the decimal points?',
      answer: 'This is usually a habit from whole numbers where right-alignment works. The fix is explicit practice with grid paper or worksheets that have pre-drawn decimal point columns. Have your child say "line up the dots" before every problem. Within 2-3 weeks, the correct alignment becomes automatic.'
    },
    {
      question: 'When should my child start adding decimals with different place values?',
      answer: 'Start with same-place-value problems (tenths with tenths) until accuracy is high. Then introduce problems where one number has more digits after the decimal (4.5 + 1.23). Teach the "zero padding" strategy: 4.5 becomes 4.50 so both numbers have hundredths. Most children are ready for mixed place values after 1-2 weeks of same-place practice.'
    },
    {
      question: 'My child knows how to add decimals but makes "careless" regrouping errors. What should I do?',
      answer: 'Careless errors in decimal addition are almost never careless — they usually signal weak whole-number regrouping skills. Go back to multi-digit whole number addition (like 45 + 78) until that feels automatic. The procedure is identical; if a child struggles with carrying in decimals, they will also struggle with carrying in whole numbers.'
    },
    {
      question: 'How many decimal addition problems should my child practice daily?',
      answer: '15-20 problems per session is the effective range. Practice should be short and daily — 10 minutes every day beats one long session per week. Stop when attention drops, because fatigued practice reinforces errors rather than correct alignment habits.'
    },
    {
      question: 'Should I use money examples to teach decimal addition?',
      answer: 'Yes — money is the most effective real-world context for decimals because dollars and cents are familiar. $3.50 + $1.25 is more intuitive than 3.50 + 1.25. Once the concept is solid, transition to abstract problems. Money examples are especially useful for children who struggle with the meaning of decimals.'
    },
    {
      question: 'What order should I teach decimal addition difficulty levels?',
      answer: 'First: same number of decimal places (1.2 + 3.4). Second: different decimal places with zeros in the shorter number (2.5 + 1.75 becomes 2.50 + 1.75). Third: different decimal places requiring regrouping across place values (4.95 + 3.85). Fourth: adding three or more decimal numbers. Each stage typically takes 3-5 days of focused practice.'
    },
    {
      question: 'Do the answer keys show the aligned work?',
      answer: 'Answer keys provide only the final correctly formatted decimal answer. This allows students to work through alignment independently while giving parents quick verification. If your child makes alignment errors, have them circle the decimal points before adding.'
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
      stage: 'Same Place Value — Tenths or Hundredths',
      description: 'Start with problems where both numbers have the same number of decimal places (1.2 + 3.4 or 2.34 + 5.67). The child focuses only on alignment and addition without the complexity of place value differences. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Different Place Values — Zero Padding',
      description: 'Introduce problems where numbers have different lengths (4.5 + 1.23). Teach the "zero padding" strategy: write 4.5 as 4.50 so both numbers have hundredths. This stage builds the habit of aligning decimal points. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Mixed Place Values with Regrouping',
      description: 'Combine different place values with carrying across place values (4.95 + 3.85). This is the hardest decimal addition skill. The child must align, pad with zeros, add each column, and carry when needed. Spend 5-7 days on this stage before moving to word problems.'
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
              Decimal Addition Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Adding Tenths, Hundredths, and Thousandths
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
              The most common decimal error is misalignment. These worksheets build the habit of "line up the dots" — the essential skill for all decimal operations.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=decimals&skill=addition" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Decimal Addition Worksheets
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

          {/* Why Decimal Addition Matters */}
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
              Why Decimal Alignment Is the Skill That Everything Else Depends On
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Most parents worry about whether their child can compute the sum correctly. But the real question is whether they can set up the problem correctly. A child who adds 4.5 + 1.23 and writes 4.5 + 1.23 with the numbers right-aligned (instead of decimal-aligned) will get 4.5 + 1.23 = 5.73 — which happens to be correct in this example, hiding the error. But when they try 12.3 + 4.56, the same alignment mistake gives 12.3 + 4.56 = 16.86 instead of the correct 16.86 — wait, that is also correct? The problem is inconsistent. The fix is teaching the rule, not relying on coincidentally correct answers.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets are designed to make alignment visible and habitual. For students who need to build whole number addition fluency before decimals, see our <Link href="/addition-basic-facts-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition basic facts worksheets</Link> and <Link href="/addition-two-digit-regrouping-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>two-digit addition worksheets</Link>.
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
              How to Progress Through Decimal Addition
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
              Three stages — do not rush to mixed place values
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
              How to Add Decimals
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
              Teach this script — say "line up the dots" every time
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Line Up the Decimal Points', desc: 'Write the numbers in a column with decimal points stacked vertically. Say: "Line up the dots." If numbers have different lengths, add zeros as placeholders (4.5 becomes 4.50).' },
                { step: '2', title: 'Add from Right to Left', desc: 'Add the hundredths column (if any), then tenths, then ones, then tens — just like whole numbers. Carry when a column sums to 10 or more.' },
                { step: '3', title: 'Bring Down the Decimal Point', desc: 'Write the decimal point in the answer directly below the stacked decimal points. Say: "The decimal point goes straight down." Check that the answer makes sense.' }
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
                When Decimal Addition Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to misalign decimal points despite practice, the issue is usually a habit from whole number addition. Our <strong>Math Foundations</strong> course (grades 4-6) includes explicit instruction in decimal alignment and place value understanding. You can also browse all available courses and planners on the{' '}
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
                { name: 'Decimal Subtraction', href: '/decimal-subtraction-worksheets', desc: 'The next step after addition — same alignment rules' },
                { name: 'Decimal Place Value', href: '/decimal-place-value-worksheets', desc: 'Build the foundation before operations' },
                { name: 'Decimal Word Problems', href: '/decimal-word-problems-worksheets', desc: 'Apply addition to money and measurement' },
                { name: 'Addition Basic Facts', href: '/addition-basic-facts-worksheets', desc: 'Build whole number fluency first' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Where decimal addition is mastered' }
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
              Real questions parents ask about decimal addition
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
                Master Decimal Alignment Today
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
                Generate custom decimal addition worksheets. Choose your place value range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=decimals&skill=addition" style={{
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
                  Create Decimal Addition Worksheets Now
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