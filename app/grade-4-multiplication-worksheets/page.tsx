// app/grade-4-multiplication-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fourth Grade Multiplication Worksheets | Free Printable 4th Grade Multiplication Practice',
  description: 'Free printable 4th grade multiplication worksheets covering multi-digit multiplication, 2-digit by 2-digit, 4-digit by 1-digit, area models, and word problems. Perfect for homeschool and classroom use.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-4-multiplication-worksheets',
  },
}

export default function Grade4MultiplicationWorksheets() {
  const faqs = [
    {
      question: 'What multiplication skills should fourth graders have?',
      answer: 'By the end of fourth grade, students should multiply multi-digit numbers using the standard algorithm. This includes 4-digit by 1-digit multiplication and 2-digit by 2-digit multiplication. They should also understand area models and partial products as alternative strategies.'
    },
    {
      question: 'How do I teach 2-digit by 2-digit multiplication?',
      answer: 'Start with area models to build understanding, then move to partial products, then the standard algorithm. For 23×14, show 20×10, 20×4, 3×10, 3×4. Once the concept is clear, teach the standard algorithm with the "multiply by the ones, then the tens" method.'
    },
    {
      question: 'What is the area model for multiplication?',
      answer: 'The area model breaks numbers into expanded form and creates a rectangle. For 23×14, draw a rectangle split into 20+3 and 10+4. Calculate four smaller areas: 20×10=200, 20×4=80, 3×10=30, 3×4=12. Sum: 200+80+30+12=322.'
    },
    {
      question: 'My child knows basic facts but struggles with multi-digit. Why?',
      answer: 'The issue is usually place value, not fact fluency. Children often forget to add the zero when multiplying by tens. Explicitly teach: "When we multiply by the tens digit, we are really multiplying by 10, 20, 30, so we write a zero in the ones place first."'
    },
    {
      question: 'How many multiplication problems should my fourth grader do daily?',
      answer: '10-15 multi-digit problems per day is enough. Focus on accuracy first, then speed. Mix problem types: 3-digit by 1-digit, 4-digit by 1-digit, and 2-digit by 2-digit.'
    },
    {
      question: 'How do I know if my child has mastered fourth grade multiplication?',
      answer: 'Mastery means your child can: 1) multiply 4-digit by 1-digit numbers accurately, 2) multiply 2-digit by 2-digit numbers using the standard algorithm, 3) explain why the algorithm works using place value language, 4) solve multiplication word problems, and 5) estimate products to check reasonableness.'
    }
  ];

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
  };

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
              Fourth Grade Multiplication Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Multi-Digit Multiplication
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
              Master 4-digit by 1-digit and 2-digit by 2-digit multiplication using area models, partial products, and the standard algorithm.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=fourth&topic=multiplication" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Custom Multiplication Worksheets
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

          {/* Why Multiplication Matters Section */}
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
              Why Fourth Grade Multiplication Bridges Basic Facts to Advanced Math
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              In fourth grade, multiplication moves beyond basic facts into multi-digit work. This is the foundation for long division, fractions, decimals, and algebra. The standard algorithm for 2-digit by 2-digit multiplication is the last major multiplication algorithm students learn — after this, multiplication becomes a tool for other topics.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Our multiplication worksheets use area models and partial products to build understanding before moving to the standard algorithm. The <Link href="/grade-4-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>fourth grade math hub</Link> offers more resources for a complete curriculum.
            </p>
          </section>

          {/* Key Strategies Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Key Multiplication Strategies for Fourth Grade
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
              Build understanding with these proven approaches
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Area Model
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Break numbers into expanded form and create a rectangle. For 23×14: (20+3)×(10+4) = 20×10=200, 20×4=80, 3×10=30, 3×4=12. Sum = 322.
                </p>
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Partial Products
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Multiply each place value separately: 23×14 = (20×10)=200, (20×4)=80, (3×10)=30, (3×4)=12, then add: 200+80+30+12=322.
                </p>
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Standard Algorithm
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Multiply by ones, write result. Multiply by tens, add a zero placeholder, write result. Add both products. This is the goal for fluency.
                </p>
              </div>
            </div>
          </section>

          {/* Difficulty Levels Section */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Three Difficulty Levels for Multiplication
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>E</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Easy</h3>
                  <p style={{color: 'var(--text-secondary)'}}>3-digit and 4-digit by 1-digit multiplication. Perfect for building place value confidence.</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>M</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Medium</h3>
                  <p style={{color: 'var(--text-secondary)'}}>2-digit by 2-digit multiplication with area models. Introduces multi-digit strategies.</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>H</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Hard</h3>
                  <p style={{color: 'var(--text-secondary)'}}>2-digit by 2-digit using standard algorithm with word problems. For end-of-year mastery.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Course Section */}
          <section style={{marginBottom: '3rem'}}>
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
                When 4th Grade Math Needs More Than Worksheets
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the conceptual foundation that makes multi-digit multiplication make sense. If your child can't explain why the standard algorithm works or forgets to add place value holders, worksheets alone won't bridge that gap. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through multi-digit multiplication. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/csfto"
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
                View Multiplication & Division Foundations — $57
              </a>
            </div>
          </section>

          {/* Back to Hub Link */}
          <section style={{marginBottom: '3rem', textAlign: 'center'}}>
            <Link href="/grade-4-worksheets" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Fourth Grade Math Hub
            </Link>
          </section>

          {/* FAQ Section */}
          <section style={{marginBottom: '3rem'}}>
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
              Everything you need to know about teaching fourth grade multiplication
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
          <section style={{marginBottom: '3rem'}}>
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
                Master Multi-Digit Multiplication Today!
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
                Generate custom multiplication worksheets for your fourth grader. Choose difficulty, problem types, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=fourth&topic=multiplication" style={{
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
                  Create Multiplication Worksheets Now
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
