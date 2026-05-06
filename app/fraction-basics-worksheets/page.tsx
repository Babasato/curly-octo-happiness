// app/fraction-basics-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basic Fraction Concepts Worksheets | Free Printable 3rd-4th Grade Math',
  description: 'Free printable basic fraction concepts worksheets for 3rd-4th grade. Practice numerators, denominators, and parts of a whole with fraction circles and bars.',
  alternates: {
    canonical: 'https://homeschoolmath.site/fraction-basics-worksheets',
  },
}

export default function FractionBasicsWorksheets() {
  const faqs = [
    {
      question: 'What are the basic parts of a fraction?',
      answer: 'A fraction has two parts: the numerator (top number) and the denominator (bottom number). The denominator tells how many equal parts make the whole. The numerator tells how many of those parts we have. For example, in 3/4, the denominator 4 means the whole is cut into 4 equal parts, and the numerator 3 means we have 3 of those parts.'
    },
    {
      question: 'Why does my child think 1/4 is larger than 1/2?',
      answer: 'This is the most common fraction misconception. Children see the digits 4 and 2 and think 4 is larger than 2, so 1/4 must be larger than 1/2. The fix is visual models — fraction circles or bars. Show a circle cut into 2 equal parts (1/2 shaded) and another circle cut into 4 equal parts (1/4 shaded). The child can see that 1/2 covers more area. Within 2-3 weeks of visual practice, most children overcome this misconception.'
    },
    {
      question: 'What is the best way to introduce fractions to a beginner?',
      answer: 'Start with real-world objects: pizza, cookies, or a chocolate bar. Cut a pizza into equal slices. "If we have 4 slices and you eat 1 slice, you ate 1/4 of the pizza." Then introduce fraction circles (pre-drawn circles cut into equal parts). Finally, introduce the written notation. The concrete → visual → abstract progression is essential. Never start with written fractions alone.'
    },
    {
      question: 'What is the difference between a unit fraction and a non-unit fraction?',
      answer: 'A unit fraction has a numerator of 1, like 1/2, 1/4, 1/8. These are the building blocks of all fractions. A non-unit fraction has a numerator greater than 1, like 3/4 (which is three 1/4s). Teaching unit fractions first helps children understand that fractions are composed of equal parts. Our basic concepts worksheets start with unit fractions before introducing non-unit fractions.'
    },
    {
      question: 'How do fraction circles help with understanding?',
      answer: 'Fraction circles are circles divided into equal parts (halves, thirds, fourths, etc.). They make the size relationship between fractions visible. A child can see that 1/2 is larger than 1/4 because the half-circle piece is bigger than the quarter-circle piece. They can also see that 2/4 covers the same area as 1/2. Fraction circles are the single most effective tool for teaching fraction concepts. Our worksheets include fraction circle visualizations.'
    },
    {
      question: 'When should my child start learning fractions?',
      answer: 'Most children are ready to start basic fraction concepts in 3rd grade. Prerequisites include understanding of division (sharing equally) and ability to recognize equal parts. If your child struggles with cutting a pizza into equal slices conceptually, spend more time with real objects before introducing fraction notation. The key is equal partitioning — understanding that each part must be the same size.'
    },
    {
      question: 'What is the most common fraction error in 3rd grade?',
      answer: 'The most common error is ignoring equal parts. A child might color 2 out of 4 parts of a rectangle, but if the 4 parts are not equal, the fraction is not accurate. Teach the phrase: "The parts must be equal." Always have your child check that the whole is divided into equal parts before writing the fraction. This habit prevents the most persistent fraction misconception.'
    },
    {
      question: 'How do fractions connect to division?',
      answer: 'The fraction bar (vinculum) means division. 3/4 means 3 ÷ 4. This connection is critical for understanding fractions greater than 1 (improper fractions) and for converting fractions to decimals. Teach this early: "The fraction bar means divide. Numerator divided by denominator." For 3/4, say "3 divided by 4 equals 0.75." This connection makes fraction operations more intuitive.'
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
      stage: 'Identifying Equal Parts',
      description: 'Worksheets ask: "Is this shape divided into equal parts?" The child must recognize that parts must be the same size. This is the foundational skill for all fraction work. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Writing Fractions from Visual Models',
      description: 'Worksheets show fraction circles or bars with parts shaded. The child writes the fraction (numerator = shaded parts, denominator = total parts). Spend 5-7 days on this stage using fraction circle visuals.'
    },
    {
      stage: 'Shading Fractions from Written Notation',
      description: 'Worksheets give a fraction (3/4) and ask the child to shade that fraction on a fraction circle or bar. This tests whether the child understands what the fraction means. Spend 5-7 days on this stage before moving to equivalent fractions.'
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
              Basic Fraction Concepts Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Understanding Numerators, Denominators, and Parts of a Whole
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
              Before adding or comparing fractions, children need to understand what fractions mean. Fraction circles and bars make the concept visible.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=fractions&skill=basics" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Basic Fraction Worksheets
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

          {/* Why Fraction Basics Matter */}
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
              Why Understanding Fraction Basics Determines Everything That Follows
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Most parents skip fraction basics and go straight to operations. This is a mistake. A child who cannot explain that 3/4 means 3 out of 4 equal parts will never truly understand equivalent fractions, comparing fractions, or adding fractions. The procedures will feel arbitrary and confusing.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build fraction understanding systematically — from identifying equal parts to shading fractions on fraction circles. For students who need to build division understanding before fractions, see our <Link href="/division-basic-facts-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division basic facts worksheets</Link>.
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
              How to Build Basic Fraction Understanding
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
              Three stages — use fraction circles for visual learners
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
              How to Read and Write Fractions
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
                { step: '1', title: 'Count the Total Parts', desc: 'Count how many equal parts the whole is divided into. This is the denominator. Write it below the fraction bar.' },
                { step: '2', title: 'Count the Shaded Parts', desc: 'Count how many parts are shaded (or colored). This is the numerator. Write it above the fraction bar.' },
                { step: '3', title: 'Read the Fraction Aloud', desc: 'Say the numerator, then the denominator as an ordinal: "three fourths." This reinforces the meaning. Never say "three over four" — that skips the meaning.' }
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
                { name: 'Equivalent Fractions', href: '/fraction-equivalent-worksheets', desc: 'The next step after basic concepts' },
                { name: 'Comparing Fractions', href: '/fraction-comparing-worksheets', desc: 'Use basic understanding to compare sizes' },
                { name: 'Fraction Addition & Subtraction', href: '/fraction-addition-subtraction-worksheets', desc: 'Apply basics to operations' },
                { name: 'Fraction Word Problems', href: '/fraction-word-problems-worksheets', desc: 'Apply basics to real-world scenarios' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Where fraction basics are applied' }
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
              Real questions parents ask about basic fraction concepts
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
                Build Fraction Understanding Today
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
                Generate custom basic fraction worksheets. Choose your visual model (circles or bars) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=fractions&skill=basics" style={{
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
                  Create Basic Fraction Worksheets Now
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
