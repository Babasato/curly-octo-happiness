// app/fraction-equivalent-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Equivalent Fractions Worksheets | Free Printable 3rd-5th Grade Math',
  description: 'Free printable equivalent fractions worksheets for 3rd-5th grade. Practice finding equivalent fractions using visual models and multiplication/division.',
  alternates: {
    canonical: 'https://homeschoolmath.site/fraction-equivalent-worksheets',
  },
}

export default function FractionEquivalentWorksheets() {
  const faqs = [
    {
      question: 'What are equivalent fractions?',
      answer: 'Equivalent fractions are different fractions that represent the same amount. For example, 1/2, 2/4, and 4/8 are equivalent — they all represent half of a whole. Understanding equivalent fractions is essential for comparing fractions, finding common denominators, and adding/subtracting fractions with unlike denominators.'
    },
    {
      question: 'How do I teach equivalent fractions to my child?',
      answer: 'Start with visual models. Show a fraction circle divided into 2 equal parts with 1 part shaded (1/2). Then show a circle divided into 4 equal parts with 2 parts shaded (2/4). Ask: "Do they cover the same amount of space?" The child sees that 1/2 and 2/4 are the same. Then introduce the multiplication rule: multiply numerator and denominator by the same number. The visual must come before the rule.'
    },
    {
      question: 'Why is understanding equivalent fractions so important?',
      answer: 'Equivalent fractions are the gateway to all fraction operations. Without equivalent fractions, a child cannot compare 3/4 and 2/3 (by finding a common denominator), cannot add 1/2 + 1/3 (by finding a common denominator), and cannot simplify fractions. If a child struggles with fraction operations, the root cause is almost always weak equivalent fraction understanding.'
    },
    {
      question: 'What is the most common equivalent fractions error?',
      answer: 'The most common error is adding or subtracting instead of multiplying. A child might say 1/2 = 2/3 because 1+1=2 and 2+1=3. The fix is explicit teaching: "Equivalent means multiply or divide by the same number — never add or subtract." Use the phrase "What you do to the numerator, you do to the denominator." Practice with visual models before the rule.'
    },
    {
      question: 'When should my child start equivalent fractions?',
      answer: 'Start equivalent fractions after your child can identify and shade basic fractions (1/2, 1/4, 3/4) on fraction circles. Typically this is in 3rd grade. Do not start equivalent fractions before basic fraction understanding is solid — the concept of "different fractions same amount" will be confusing without visual foundation.'
    },
    {
      question: 'What is the difference between finding equivalent fractions and simplifying fractions?',
      answer: 'Finding equivalent fractions means multiplying numerator and denominator by the same number (making the numbers larger). Simplifying fractions means dividing numerator and denominator by the same number (making the numbers smaller). Both use the same principle: multiply or divide by 1. Teach finding equivalent fractions first, then simplifying as the reverse process.'
    },
    {
      question: 'How many equivalent fraction problems should my child practice daily?',
      answer: '15-20 problems per session is effective. Start with visual model worksheets (shading fraction circles to show equivalence), then move to abstract problems (1/2 = ?/8). Spend 2-3 weeks on equivalent fractions before moving to comparing fractions or adding unlike denominators. Most children need this much practice for the concept to stick.'
    },
    {
      question: 'Do the answer keys show the equivalent fraction?',
      answer: 'Answer keys provide the correct equivalent fraction. For simplification problems, answer keys show the fraction in simplest form. Encourage your child to check their work by using visual models or cross-multiplication (2/4 = 1/2 because 2×2 = 4×1).'
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
      stage: 'Visual Equivalent Fractions (Fraction Circles)',
      description: 'Worksheets show fraction circles with parts shaded. The child must shade an equivalent fraction on a second circle. This builds the concept visually before the rule. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Finding Equivalent Fractions by Multiplication',
      description: 'Worksheets give a fraction (1/2) and ask for an equivalent fraction with a given denominator (1/2 = ?/8). The child multiplies numerator and denominator by the same number. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Simplifying Fractions (Finding Equivalent by Division)',
      description: 'Worksheets give a fraction (4/8) and ask for the simplified form (1/2). The child divides numerator and denominator by the greatest common factor. Spend 5-7 days on this stage.'
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
              Equivalent Fractions Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Different Fractions That Name the Same Amount
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
              Equivalent fractions are the gateway to comparing fractions, finding common denominators, and all fraction operations. Master this skill and everything else becomes easier.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=fractions&skill=equivalent" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Equivalent Fractions Worksheets
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

          {/* Why Equivalent Fractions Matter */}
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
              Why Equivalent Fractions Are the Gateway to All Fraction Operations
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Most children who struggle with fraction operations — comparing, adding, subtracting — have a hidden gap: weak equivalent fraction understanding. Without the ability to find that 3/4 = 6/8, a child cannot find common denominators. Without common denominators, fraction addition is impossible. The gap is not in addition — it is in equivalence.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build equivalent fraction fluency systematically — starting with visual fraction circles, then moving to multiplication, then simplification. For students who need basic fraction concepts before equivalence, see our <Link href="/fraction-basics-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>basic fraction concepts worksheets</Link>.
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
              How to Build Equivalent Fraction Fluency
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
              Three stages — visual first, then rule
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
              How to Find Equivalent Fractions
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
              Teach this script — the visual comes first
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Use a Visual Model', desc: 'Show 1/2 on a fraction circle. Then show a circle divided into 4 parts. Ask: "How many parts need to be shaded to cover the same amount as 1/2?" The child sees 2/4.' },
                { step: '2', title: 'Multiply Numerator and Denominator', desc: 'For 1/2 = ?/8, multiply numerator and denominator by 4: 1×4=4, 2×4=8, so 1/2 = 4/8. Say: "What you do to the bottom, you do to the top."' },
                { step: '3', title: 'Simplify by Dividing', desc: 'For 4/8 = ?/?, divide numerator and denominator by the greatest common factor (4): 4÷4=1, 8÷4=2, so 4/8 = 1/2.' }
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
                { name: 'Basic Fraction Concepts', href: '/fraction-basics-worksheets', desc: 'Build foundational understanding before equivalence' },
                { name: 'Comparing Fractions', href: '/fraction-comparing-worksheets', desc: 'Use equivalence to compare unlike denominators' },
                { name: 'Fraction Addition & Subtraction', href: '/fraction-addition-subtraction-worksheets', desc: 'Use equivalence to find common denominators' },
                { name: 'Fraction Word Problems', href: '/fraction-word-problems-worksheets', desc: 'Apply equivalence to real-world scenarios' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Where equivalent fractions are mastered' }
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
              Real questions parents ask about equivalent fractions
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
                Master Equivalent Fractions Today
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
                Generate custom equivalent fractions worksheets. Choose your visual models or abstract problems, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=fractions&skill=equivalent" style={{
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
                  Create Equivalent Fractions Worksheets Now
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