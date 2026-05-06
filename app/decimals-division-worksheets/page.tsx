// app/decimals-division-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decimal Division Worksheets | Free Printable 5th-6th Grade Math',
  description: 'Free printable decimal division worksheets for 5th-6th grade. Practice dividing decimals by whole numbers and decimals by moving decimal points.',
  alternates: {
    canonical: 'https://homeschoolmath.site/decimals-division-worksheets',
  },
}

export default function DecimalDivisionWorksheets() {
  const faqs = [
    {
      question: 'What decimal division skills can I practice with these worksheets?',
      answer: 'Our worksheets cover dividing decimals by whole numbers (6.8 ÷ 2), dividing decimals by decimals (6.8 ÷ 0.2), dividing decimals by powers of ten (34.5 ÷ 10, 100, 1000), and real-world word problems involving decimal division.'
    },
    {
      question: 'How do I divide decimals?',
      answer: 'To divide by a decimal, move the decimal point in the divisor to make it a whole number. Move the decimal point in the dividend the same number of places. Then divide as usual. For example, 6.8 ÷ 0.2 becomes 68 ÷ 2 = 34. This works because you are multiplying both numbers by the same power of ten.'
    },
    {
      question: 'Why does my child struggle with decimal division more than other operations?',
      answer: 'Decimal division is the hardest decimal operation because it requires moving the decimal point in both the divisor and dividend before dividing. Children who struggle often lack understanding of place value or multiplication by powers of ten. The fix is explicit teaching of the "move the decimal" rule and practice with multiplying decimals by 10, 100, and 1000 first.'
    },
    {
      question: 'What is the rule for dividing by a decimal?',
      answer: 'Move the decimal point in the divisor to the right until it becomes a whole number. Move the decimal point in the dividend the same number of places to the right. Then divide as usual. Add zeros to the dividend if needed. For example, 6.8 ÷ 0.2: move both one place right → 68 ÷ 2 = 34. For 6.8 ÷ 0.02: move both two places right → 680 ÷ 2 = 340.'
    },
    {
      question: 'When should my child start decimal division?',
      answer: 'Start decimal division after your child has mastered whole number division, decimal place value, and decimal multiplication. Typically this is in late 5th grade or early 6th grade. Do not start decimal division until your child can divide whole numbers with remainders and multiply decimals by powers of ten. Most children need 4-6 weeks of prerequisite practice before decimal division.'
    },
    {
      question: 'What is the trick for dividing decimals by powers of ten?',
      answer: 'To divide a decimal by 10, move the decimal point one place to the left (34.5 ÷ 10 = 3.45). By 100, move two places left (34.5 ÷ 100 = 0.345). By 1000, move three places left (34.5 ÷ 1000 = 0.0345). This works because dividing by 10, 100, or 1000 makes the number smaller. Teach this as a shortcut after the standard division method is understood.'
    },
    {
      question: 'How many decimal division problems should my child practice daily?',
      answer: '10-15 problems per session is effective. Decimal division takes longer because of the extra step of moving decimal points. Start with decimal ÷ whole number (easier), then decimal ÷ decimal (harder). Spend 2-3 weeks on decimal ÷ whole number before introducing decimal ÷ decimal. Most children need 6-8 weeks total to become fluent with decimal division.'
    },
    {
      question: 'Do the answer keys show the decimal placement?',
      answer: 'Answer keys provide the final correctly formatted decimal answer. Encourage your child to show their work: write the moved decimal points, then divide. This allows you to see where errors occur.'
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
      stage: 'Decimal ÷ Whole Number',
      description: 'Worksheets present decimal divided by a whole number (6.8 ÷ 2). Divide as usual, keeping the decimal point in the same position. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Decimal ÷ Decimal (One Place Movement)',
      description: 'Worksheets present decimal divided by a decimal where moving the decimal point one place makes the divisor whole (6.8 ÷ 0.2 → 68 ÷ 2 = 34). Spend 5-7 days on this stage.'
    },
    {
      stage: 'Decimal ÷ Decimal (Multiple Place Movement)',
      description: 'Worksheets present decimal divided by a decimal where moving the decimal point two or three places is needed (6.8 ÷ 0.02 → 680 ÷ 2 = 340). Spend 5-7 days on this stage.'
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
              Decimal Division Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Move the Decimal, Then Divide
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
              Decimal division is the hardest decimal operation. Master the "move the decimal" rule to divide by whole numbers and decimals.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=decimals&skill=division" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Decimal Division Worksheets
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

          {/* Why Decimal Division Matters */}
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
              Why Decimal Division Is the Hardest Decimal Operation
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Decimal division requires an extra step that no other operation requires: moving the decimal point in both the divisor and dividend before dividing. Children who can divide whole numbers may freeze on 6.8 ÷ 0.2 because they don't know what to do with the decimal points. The fix is explicit teaching of the "move the decimal" rule, with practice multiplying decimals by powers of ten first.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build decimal division skills systematically — from decimal ÷ whole number to decimal ÷ decimal with multiple place movements. For students who need whole number division fluency before decimals, see our <Link href="/division-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division practice worksheets</Link>.
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
              How to Progress Through Decimal Division
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
              Three stages — master decimal ÷ whole number first
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
              How to Divide Decimals
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
              Teach this script — move the decimal before dividing
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Move the Divisor Decimal', desc: 'Move the decimal point in the divisor to the right until it becomes a whole number. Count how many places you moved.' },
                { step: '2', title: 'Move the Dividend Decimal', desc: 'Move the decimal point in the dividend the same number of places to the right. Add zeros if needed.' },
                { step: '3', title: 'Divide as Usual', desc: 'Divide the new numbers as whole numbers. Place the decimal point in the quotient directly above the new dividend\'s decimal point.' }
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
                Dividing Decimals by Powers of Ten
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                gap: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>÷ 10</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Move decimal 1 place left</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>34.5 ÷ 10 = 3.45</p>
                </div>
                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>÷ 100</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Move decimal 2 places left</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>34.5 ÷ 100 = 0.345</p>
                </div>
                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>÷ 1000</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Move decimal 3 places left</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>34.5 ÷ 1000 = 0.0345</p>
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
                When Decimal Division Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to struggle with decimal division — especially the "move the decimal" step — the issue is usually place value understanding or multiplication by powers of ten. Our <strong>Number Sense Foundations</strong> course (K-2) builds the conceptual groundwork that makes decimal operations stick. You can also browse all available courses and planners on the{' '}
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
                { name: 'Decimal Multiplication', href: '/decimals-multiplication-worksheets', desc: 'Master multiplication before division' },
                { name: 'Decimal Addition', href: '/decimal-addition-worksheets', desc: 'Practice adding decimals before division' },
                { name: 'Decimal Subtraction', href: '/decimal-subtraction-worksheets', desc: 'Practice subtracting decimals before division' },
                { name: 'Decimal Place Value', href: '/decimal-place-value-worksheets', desc: 'Understand decimal digits before dividing' },
                { name: 'Division Practice', href: '/division-practice', desc: 'Build whole number division fluency first' },
                { name: 'Grade 6 Worksheets', href: '/grade-6-worksheets', desc: 'Full 6th grade math overview' }
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
              Real questions parents ask about decimal division
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
                Master Decimal Division Today
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
                Generate custom decimal division worksheets. Choose your problem type (decimal ÷ whole number or decimal ÷ decimal) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=decimals&skill=division" style={{
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
                  Create Decimal Division Worksheets Now
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
