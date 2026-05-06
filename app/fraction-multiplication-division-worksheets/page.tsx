// app/fraction-multiplication-division-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplying and Dividing Fractions Worksheets | Free Printable 5th-6th Grade Math',
  description: 'Free printable multiplying and dividing fractions worksheets for 5th-6th grade. Practice operations with fractions including mixed numbers.',
  alternates: {
    canonical: 'https://homeschoolmath.site/fraction-multiplication-division-worksheets',
  },
}

export default function FractionMultiplicationDivisionWorksheets() {
  const faqs = [
    {
      question: 'What fraction multiplication and division skills can I practice with these worksheets?',
      answer: 'Our worksheets cover multiplying fractions by fractions, multiplying fractions by whole numbers, multiplying mixed numbers, dividing fractions by fractions, dividing fractions by whole numbers, and dividing mixed numbers.'
    },
    {
      question: 'Why is multiplying fractions easier than adding fractions?',
      answer: 'Multiplying fractions does not require common denominators. You simply multiply numerators and multiply denominators. For example, 1/2 × 1/3 = 1/6. However, the concept is harder — multiplying fractions produces a product smaller than both factors, which violates whole number intuition. Use visual models: 1/2 × 1/3 means half of a third, which is 1/6.'
    },
    {
      question: 'What is the most common fraction multiplication error?',
      answer: 'The most common error is adding instead of multiplying. A child might say 1/2 × 1/3 = 2/5 (adding numerators and denominators). The fix is explicit teaching: "Multiply across — numerator times numerator, denominator times denominator." Use fraction bars to show that 1/2 × 1/3 means taking half of a third, which is 1/6, not 2/5.'
    },
    {
      question: 'How do I teach dividing fractions to my child?',
      answer: 'Teach the "keep, change, flip" rule. Keep the first fraction, change division to multiplication, flip the second fraction (reciprocal). Example: 1/2 ÷ 1/3 becomes 1/2 × 3/1 = 3/2 = 1 1/2. Always use visual models first: "How many 1/3 pieces fit into 1/2?" The answer is 1.5, which matches 3/2. The rule makes sense once the child has seen the visual.'
    },
    {
      question: 'What is the difference between multiplying fractions and multiplying whole numbers?',
      answer: 'With whole numbers, multiplication makes numbers larger (3 × 4 = 12). With fractions, multiplication often makes numbers smaller (1/2 × 1/3 = 1/6). This violates whole number intuition and needs explicit teaching. Use visual models: 1/2 of a pizza times 1/3 of a pizza does not make sense — instead, 1/2 × 1/3 means half of a third, which is smaller than both.'
    },
    {
      question: 'When should my child start multiplying and dividing fractions?',
      answer: 'Start multiplying fractions after your child has mastered adding and subtracting fractions with unlike denominators. Multiplying is procedurally easier (no common denominators needed) but conceptually harder. Start with fraction × fraction, then fraction × whole number, then mixed numbers. For division, teach after multiplication is solid. Typically, 5th grade for multiplication, 6th grade for division.'
    },
    {
      question: 'How many fraction multiplication problems should my child practice daily?',
      answer: '15-20 problems per session is effective. Start with 10 fraction × fraction problems, then fraction × whole number, then mixed numbers. Spend 2-3 weeks on multiplication before introducing division. For division, spend 2-3 weeks on fraction ÷ fraction, then fraction ÷ whole number, then mixed numbers.'
    },
    {
      question: 'Do the answer keys show simplified fractions?',
      answer: 'Answer keys show answers in simplified form (lowest terms). Encourage your child to simplify their answers by dividing numerator and denominator by the greatest common factor. For division problems, answers may be improper fractions — encourage conversion to mixed numbers when appropriate.'
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
      stage: 'Multiplying Fractions — Fraction × Fraction',
      description: 'Worksheets show fraction × fraction problems (1/2 × 1/3 = 1/6). The child multiplies numerators and denominators. Use visual models: half of a third. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Multiplying Fractions — Fraction × Whole Number and Mixed Numbers',
      description: 'Worksheets include fraction × whole number (1/2 × 4 = 2) and multiplying mixed numbers (1 1/2 × 2 1/3). Spend 5-7 days on this stage.'
    },
    {
      stage: 'Dividing Fractions — Keep, Change, Flip',
      description: 'Worksheets show fraction ÷ fraction (1/2 ÷ 1/3 = 3/2). The child learns the reciprocal rule. Spend 7-10 days on this stage before moving to division with whole numbers and mixed numbers.'
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
              Multiplying and Dividing Fractions Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Master Fraction Multiplication and Division
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
              Multiplying fractions is procedurally simple — multiply across. But the concept (products smaller than factors) requires visual models. Division uses the "keep, change, flip" rule.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=fractions&skill=multiply-divide" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Multiplying and Dividing Fractions Worksheets
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

          {/* Why Fraction Multiplication Matters */}
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
              Why Multiplying Fractions Violates Everything Children Know About Multiplication
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              With whole numbers, multiplication makes things larger. 3 × 4 = 12, which is bigger than both 3 and 4. With fractions, 1/2 × 1/3 = 1/6, which is smaller than both 1/2 and 1/3. This violates whole number intuition and needs explicit teaching. The fix is visual models: 1/2 × 1/3 means half of a third, which is 1/6.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build fraction multiplication and division fluency systematically — starting with fraction × fraction, then fraction × whole number, then division using reciprocals. For students who need fraction addition and subtraction before multiplication, see our <Link href="/fraction-addition-subtraction-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>adding and subtracting fractions worksheets</Link>.
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
              How to Progress Through Fraction Multiplication and Division
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
              Three stages — master multiplication before division
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
              How to Multiply and Divide Fractions
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
              Teach these scripts — multiplication is simple, division uses reciprocals
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Multiply Across', desc: 'For fraction multiplication, multiply the numerators and multiply the denominators. Example: 1/2 × 1/3 = (1×1)/(2×3) = 1/6. Simplify if needed.' },
                { step: '2', title: 'Keep, Change, Flip', desc: 'For division, keep the first fraction, change ÷ to ×, flip the second fraction (reciprocal). Example: 1/2 ÷ 1/3 becomes 1/2 × 3/1 = 3/2.' },
                { step: '3', title: 'Simplify Your Answer', desc: 'Always simplify fractions to lowest terms. Convert improper fractions to mixed numbers when appropriate. Example: 3/2 = 1 1/2.' }
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

                    {/* COURSE MENTION */}
          <section className="practice-section">
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                When Fraction Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the underlying number sense that makes fractions make sense. If your child still thinks 1/8 is larger than 1/4, cannot generate equivalent fractions, or struggles with finding common denominators, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K-2) builds the conceptual groundwork that makes fraction fluency stick. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
            <Link href="/fractions-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Fractions Practice Hub
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
                { name: 'Basic Fraction Concepts', href: '/fraction-basics-worksheets', desc: 'Build foundational understanding before operations' },
                { name: 'Equivalent Fractions', href: '/fraction-equivalent-worksheets', desc: 'Essential for simplifying answers' },
                { name: 'Adding and Subtracting Fractions', href: '/fraction-addition-subtraction-worksheets', desc: 'Master addition and subtraction before multiplication' },
                { name: 'Fraction Word Problems', href: '/fraction-word-problems-worksheets', desc: 'Apply operations to real-world scenarios' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Full 5th grade math overview' },
                { name: 'Grade 6 Worksheets', href: '/grade-6-worksheets', desc: 'Where fraction division is mastered' }
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
              Real questions parents ask about multiplying and dividing fractions
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
                Master Fraction Multiplication and Division Today
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
                Generate custom multiplying and dividing fractions worksheets. Choose your operation and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=fractions&skill=multiply-divide" style={{
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
                  Create Multiplying and Dividing Fractions Worksheets Now
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
