// app/fraction-addition-subtraction-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adding and Subtracting Fractions Worksheets | Free Printable 4th-6th Grade Math',
  description: 'Free printable adding and subtracting fractions worksheets for 4th-6th grade. Practice operations with like and unlike denominators using equivalent fractions.',
  alternates: {
    canonical: 'https://homeschoolmath.site/fraction-addition-subtraction-worksheets',
  },
}

export default function FractionAdditionSubtractionWorksheets() {
  const faqs = [
    {
      question: 'What fraction addition and subtraction skills can I practice with these worksheets?',
      answer: 'Our worksheets cover adding and subtracting fractions with like denominators, adding and subtracting fractions with unlike denominators (using equivalent fractions), adding and subtracting mixed numbers, and real-world word problems involving fraction operations.'
    },
    {
      question: 'Why does my child struggle with adding fractions when they can add whole numbers easily?',
      answer: 'Adding fractions requires a prerequisite skill that whole number addition does not: finding common denominators. A child who can add 1/2 + 1/2 easily (like denominators) but freezes on 1/2 + 1/3 is struggling with equivalent fractions, not addition. The fix is not more addition practice — it is equivalent fraction practice. Spend 2-3 weeks on equivalent fractions before attempting unlike denominators.'
    },
    {
      question: 'What is the most common fraction addition error?',
      answer: 'The most common error is adding numerators AND denominators. For 1/4 + 1/2, a child might say 2/6. The fix is explicit teaching: "We add the numerators, but the denominator stays the same." Use fraction bars to show that 1/4 + 1/2 = 1/4 + 2/4 = 3/4. The visual model makes it clear why denominators do not change. After 2-3 weeks of visual practice, most children stop making this error.'
    },
    {
      question: 'How do I teach adding fractions with unlike denominators?',
      answer: 'Use the pizza analogy. 1/2 of a pizza plus 1/3 of a pizza cannot be added directly because the slices are different sizes. You must find a common denominator (6). 1/2 = 3/6, 1/3 = 2/6, so 3/6 + 2/6 = 5/6. Always start with visual models (fraction circles) before teaching the procedural rule. The rule (find common denominator, add numerators) makes sense once the child has seen the visual.'
    },
    {
      question: 'What is the difference between adding fractions with like and unlike denominators?',
      answer: 'Adding fractions with like denominators (1/4 + 2/4 = 3/4) is simple — add numerators, keep denominator. Adding fractions with unlike denominators (1/2 + 1/3) requires an extra step: find a common denominator using equivalent fractions. Master like denominators first, then introduce unlike denominators. Most children need 1-2 weeks on like denominators before moving to unlike denominators.'
    },
    {
      question: 'When should my child start adding and subtracting fractions?',
      answer: 'Start adding and subtracting fractions after your child has mastered equivalent fractions. Prerequisites include: understanding numerators and denominators, generating equivalent fractions (1/2 = 2/4 = 4/8), and finding common denominators. Without these skills, fraction operations will be frustrating. Typically, children start with like denominators in 4th grade and unlike denominators in 5th grade.'
    },
    {
      question: 'How many fraction addition problems should my child practice daily?',
      answer: '15-20 problems per session is effective. Start with 10 like denominator problems until accuracy is high, then introduce unlike denominators. Spend 1-2 weeks on like denominators, then 2-3 weeks on unlike denominators. Most children need 4-5 weeks total to become fluent with fraction addition and subtraction.'
    },
    {
      question: 'Do the answer keys show simplified fractions?',
      answer: 'Answer keys show answers in simplified form (lowest terms). Encourage your child to simplify their answers by dividing numerator and denominator by the greatest common factor. If they need practice with simplification, see our equivalent fractions worksheets which cover simplifying fractions.'
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
      stage: 'Like Denominators — Add and Subtract',
      description: 'Worksheets show fractions with the same denominator (1/4 + 2/4 = 3/4). The child adds or subtracts numerators while keeping the denominator the same. Spend 5-7 days on this stage before moving to unlike denominators.'
    },
    {
      stage: 'Unlike Denominators — Find Common Denominators',
      description: 'Worksheets show fractions with different denominators (1/2 + 1/3). The child finds a common denominator using equivalent fractions, then adds or subtracts numerators. Spend 7-10 days on this stage.'
    },
    {
      stage: 'Mixed Numbers and Word Problems',
      description: 'Worksheets include adding and subtracting mixed numbers (1 1/2 + 2 1/3) and real-world word problems. This stage applies all previous skills. Spend 7-10 days on this stage.'
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
              Adding and Subtracting Fractions Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Master Fraction Operations with Like and Unlike Denominators
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
              Adding and subtracting fractions requires equivalent fraction fluency. Master like denominators first, then tackle unlike denominators.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=fractions&skill=add-subtract" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Adding and Subtracting Fractions Worksheets
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

          {/* Why Fraction Operations Matter */}
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
              Why Adding Fractions Is Different from Adding Whole Numbers
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              When children first learn to add fractions, they often try to use whole number rules — adding numerators and denominators. 1/4 + 1/2 becomes 2/6. This error is not carelessness; it is a logical extension of whole number thinking. The fix is visual models that show why denominators stay the same.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build fraction operation fluency systematically — starting with like denominators, then unlike denominators using equivalent fractions, then mixed numbers. For students who need equivalent fraction fluency before operations, see our <Link href="/fraction-equivalent-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>equivalent fractions worksheets</Link>.
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
              How to Progress Through Fraction Operations
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
              Three stages — master like denominators first
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
              How to Add and Subtract Fractions
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
              Teach this script — denominators stay the same
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Check the Denominators', desc: 'Are the denominators the same? If yes, add or subtract the numerators and keep the denominator the same. Example: 1/4 + 2/4 = 3/4.' },
                { step: '2', title: 'Find a Common Denominator', desc: 'If denominators are different, find a common denominator using equivalent fractions. Example: 1/2 + 1/3 becomes 3/6 + 2/6.' },
                { step: '3', title: 'Add or Subtract Numerators', desc: 'Once denominators are the same, add or subtract the numerators. Keep the denominator. Simplify if needed. Example: 3/6 + 2/6 = 5/6.' }
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
                { name: 'Equivalent Fractions', href: '/fraction-equivalent-worksheets', desc: 'Essential for unlike denominators' },
                { name: 'Comparing Fractions', href: '/fraction-comparing-worksheets', desc: 'Practice fraction size relationships' },
                { name: 'Fraction Multiplication and Division', href: '/fraction-multiplication-division-worksheets', desc: 'The next step after addition and subtraction' },
                { name: 'Fraction Word Problems', href: '/fraction-word-problems-worksheets', desc: 'Apply operations to real-world scenarios' },
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
              Real questions parents ask about adding and subtracting fractions
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
                Master Fraction Operations Today
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
                Generate custom adding and subtracting fractions worksheets. Choose your denominator type (like or unlike) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=fractions&skill=add-subtract" style={{
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
                  Create Adding and Subtracting Fractions Worksheets Now
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