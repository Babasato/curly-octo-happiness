// app/subtraction-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction Practice Worksheets | Free Printable Math Sheets K-6',
  description: 'Master subtraction with custom practice sheets. Generate free printable subtraction worksheets for kindergarten through 6th grade with basic facts, borrowing, and visual aids.',
}

export default function SubtractionPractice() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What subtraction skills can I practice with these worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates subtraction worksheets with basic facts (1-20), two-digit subtraction with and without borrowing, visual aids like shapes for counting, and real-world word problems. Three difficulty levels available for each grade.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you include negative numbers in subtraction worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, our subtraction worksheets focus on positive numbers only, with results always being zero or positive. This ensures age-appropriate practice for elementary students.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)',
        padding: '2rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>

          {/* HERO SECTION */}
          <section style={{
            textAlign: 'center',
            padding: '3rem 0',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#10b981',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '600',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              marginBottom: '1.5rem'
            }}>
              Free Printable Worksheets
            </div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Subtraction Practice Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#10b981',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Master Subtraction with Custom Practice Sheets
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Generate custom subtraction worksheets with basic facts, two-digit problems, and visual models. 
              Perfect for building conceptual understanding with shapes, counting, and real-world scenarios.
            </p>

            {/* Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>1-20</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Number Range</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Basic subtraction facts within 1-20 range</p>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🔢</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Visual Models</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Shape counting and visual aids</p>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>➖</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Two-Digit</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>With and without borrowing</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                background: '#10b981',
                color: 'white',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.2s',
                fontSize: '1.125rem'
              }}>
                Generate Custom Subtraction Worksheets
              </Link>
              <div style={{
                background: '#f8fafc',
                color: '#475569',
                border: '1px solid #e2e8f0',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                10 free worksheets per day • 3 difficulty levels
              </div>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section style={{marginBottom: '4rem'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              What You'll Practice
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '3rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Comprehensive subtraction practice across all grade levels
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>K-2 Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Basic subtraction facts 1-10</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Counting back with shapes</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Simple take-away problems</span>
                </div>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>3-4 Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Two-digit subtraction without borrowing</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Introduction to borrowing</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Subtraction word problems</span>
                </div>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>5-6 Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Multi-digit subtraction with borrowing</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Complex word problems</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Mental math strategies</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section style={{marginBottom: '4rem'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Subtraction by Grade Level
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Age-appropriate subtraction practice for every student
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { grade: 'K', focus: 'Basic facts 1-5 with visuals' },
                { grade: '1', focus: 'Facts 1-10, take-away' },
                { grade: '2', focus: 'Facts 1-20, simple problems' },
                { grade: '3', focus: 'Two-digit, no borrowing' },
                { grade: '4', focus: 'Two-digit with borrowing' },
                { grade: '5', focus: 'Multi-digit subtraction' },
                { grade: '6', focus: 'Complex borrowing' }
              ].map((level, index) => (
                <div key={index} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: '#10b981',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    margin: '0 auto 1rem'
                  }}>
                    {level.grade}
                  </div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    Grade {level.grade}
                  </div>
                  <div style={{
                    color: '#6b7280',
                    fontSize: '0.875rem',
                    lineHeight: '1.4'
                  }}>
                    {level.focus}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WORKSHEET TYPES SECTION */}
          <section style={{marginBottom: '4rem'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Worksheet Categories
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Varied subtraction practice materials
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { type: 'Basic Facts', count: '25+ problems', grades: 'K-2', desc: 'Single-digit subtraction within 20' },
                { type: 'Shape Counting', count: '20+ problems', grades: 'K-1', desc: 'Visual subtraction with shapes' },
                { type: 'Take-Away Problems', count: '15+ problems', grades: 'K-2', desc: 'Simple subtraction scenarios' },
                { type: 'Two-Digit (No Borrowing)', count: '20+ problems', grades: '2-3', desc: 'Vertical subtraction practice' },
                { type: 'Two-Digit (With Borrowing)', count: '20+ problems', grades: '3-4', desc: 'Borrowing practice' },
                { type: 'Word Problems', count: '10+ problems', grades: '1-6', desc: 'Real-world subtraction scenarios' }
              ].map((worksheet, index) => (
                <div key={index} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0'
                    }}>
                      {worksheet.type}
                    </h3>
                    <span style={{
                      background: '#10b981',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px'
                    }}>
                      {worksheet.count}
                    </span>
                  </div>
                  <p style={{
                    color: '#6b7280',
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {worksheet.desc}
                  </p>
                  <div style={{
                    color: '#10b981',
                    fontWeight: '600',
                    fontSize: '0.875rem'
                  }}>
                    Grades {worksheet.grades}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ SECTION */}
          <section style={{marginBottom: '4rem'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Everything you need to know about subtraction practice worksheets
            </p>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                {
                  question: 'What subtraction skills can I practice with these worksheets?',
                  answer: 'Our generator creates subtraction worksheets with basic facts (1-20), two-digit subtraction with and without borrowing, visual aids like shapes for counting, and real-world word problems. Three difficulty levels available for each grade.'
                },
                {
                  question: 'Do you include negative numbers in subtraction worksheets?',
                  answer: 'No, our subtraction worksheets focus on positive numbers only, with results always being zero or positive. This ensures age-appropriate practice for elementary students.'
                },
                {
                  question: 'Can I get worksheets with visual models for younger students?',
                  answer: 'Yes! Our generator includes shape counting visual aids specifically designed for kindergarten and 1st grade students to build conceptual understanding of subtraction as take-away.'
                },
                {
                  question: 'How often do worksheets include word problems?',
                  answer: 'Approximately 30% of generated worksheets will include word problems with real-world subtraction scenarios appropriate for each grade level.'
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '2rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section style={{marginBottom: '4rem'}}>
            <div style={{
              background: '#10b981',
              color: 'white',
              borderRadius: '16px',
              padding: '4rem 2rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Master Subtraction Skills!
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6'
              }}>
                Build strong subtraction foundations with customized practice sheets. 
                From basic take-away to complex borrowing, develop essential math skills.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/" style={{
                  background: 'white',
                  color: '#10b981',
                  border: 'none',
                  padding: '1.25rem 3rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  fontSize: '1.125rem'
                }}>
                  Create Subtraction Worksheets Now
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

          {/* RELATED SKILLS NAVIGATION */}
          <section style={{marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              Explore Other Math Skills
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              <Link href="/addition-practice" style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  margin: '0 auto 1rem'
                }}>
                  +
                </div>
                <div style={{
                  color: '#1f2937',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontSize: '1.125rem'
                }}>
                  Addition
                </div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Practice sheets
                </div>
              </Link>

              <Link href="/multiplication-practice" style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  margin: '0 auto 1rem'
                }}>
                  ×
                </div>
                <div style={{
                  color: '#1f2937',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontSize: '1.125rem'
                }}>
                  Multiplication
                </div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Times tables
                </div>
              </Link>

              <Link href="/division-practice" style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  margin: '0 auto 1rem'
                }}>
                  ÷
                </div>
                <div style={{
                  color: '#1f2937',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontSize: '1.125rem'
                }}>
                  Division
                </div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Basic facts
                </div>
              </Link>

              <Link href="/fractions-practice" style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  margin: '0 auto 1rem'
                }}>
                  ½
                </div>
                <div style={{
                  color: '#1f2937',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontSize: '1.125rem'
                }}>
                  Fractions
                </div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Basic concepts
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}