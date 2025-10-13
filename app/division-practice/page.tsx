// app/division-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Division Practice Worksheets | Free Printable Math Sheets 3rd-6th Grade',
  description: 'Master division with custom practice sheets. Generate free printable division worksheets for 3rd through 6th grade with basic facts, inverse operations, and sharing scenarios.',
}

export default function DivisionPractice() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What division skills can I practice with these worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates division worksheets with basic division facts, division as the inverse of multiplication, equal sharing word problems, and practice within multiplication fact families. Three difficulty levels available.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you include long division or problems with remainders?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, our division worksheets focus on basic division facts only. We do not include long division, remainders, or complex fraction division to ensure age-appropriate practice for elementary students.'
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
        background: 'linear-gradient(to bottom, #fff7ed, #ffffff)',
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
              background: '#f59e0b',
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
              Division Practice Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#f59e0b',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Master Division with Custom Practice Sheets
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
              Generate custom division worksheets with basic facts, inverse operations, and equal sharing scenarios. 
              Perfect for building division fluency and conceptual understanding.
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
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>÷</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Basic Facts</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Division within fact families</p>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🔄</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Inverse Operations</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Connection to multiplication</p>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📝</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Word Problems</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Equal sharing scenarios</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                background: '#f59e0b',
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
                Generate Custom Division Worksheets
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
              Comprehensive division practice across all grade levels
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
                }}>3rd Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Basic division concepts</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Division as sharing</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Connection to multiplication</span>
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
                }}>4th Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Division facts practice</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Fact families mastery</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Simple word problems</span>
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
                }}>5th-6th Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Division fluency</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Complex word problems</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Inverse operations mastery</span>
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
              Division by Grade Level
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Age-appropriate division practice for every student
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { grade: '3', focus: 'Basic concepts, sharing' },
                { grade: '4', focus: 'Facts practice, families' },
                { grade: '5', focus: 'Fluency, word problems' },
                { grade: '6', focus: 'Mastery, applications' }
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
                    background: '#f59e0b',
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
              Varied division practice materials
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { type: 'Basic Division Facts', count: '25+ problems', grades: '3-4', desc: 'Division within multiplication families' },
                { type: 'Fact Families', count: '20+ problems', grades: '3-5', desc: 'Related multiplication and division' },
                { type: 'Equal Sharing', count: '15+ problems', grades: '3-4', desc: 'Division as fair sharing' },
                { type: 'Inverse Operations', count: '20+ problems', grades: '4-6', desc: 'Multiplication-division connection' },
                { type: 'Word Problems', count: '10+ problems', grades: '3-6', desc: 'Real-world sharing scenarios' },
                { type: 'Mixed Practice', count: '30+ problems', grades: '4-6', desc: 'Varied division problems' }
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
                      background: '#f59e0b',
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
                    color: '#f59e0b',
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
              Everything you need to know about division practice worksheets
            </p>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                {
                  question: 'What division skills can I practice with these worksheets?',
                  answer: 'Our generator creates division worksheets with basic division facts, division as the inverse of multiplication, equal sharing word problems, and practice within multiplication fact families. Three difficulty levels available.'
                },
                {
                  question: 'Do you include long division or problems with remainders?',
                  answer: 'No, our division worksheets focus on basic division facts only. We do not include long division, remainders, or complex fraction division to ensure age-appropriate practice for elementary students.'
                },
                {
                  question: 'Are visual aids included for division worksheets?',
                  answer: 'While we focus on numerical practice, we do not include specific visual aids for division. The worksheets emphasize the relationship between multiplication and division through fact families and inverse operations.'
                },
                {
                  question: 'How do you ensure division problems are age-appropriate?',
                  answer: 'All division problems stay within basic multiplication fact families (up to 12×12). We avoid complex algorithms and focus on conceptual understanding through equal sharing scenarios and inverse operations.'
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
              background: '#f59e0b',
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
                Build Division Fluency!
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
                Master division concepts with customized practice sheets. 
                From basic sharing to fact families, develop essential math skills for problem-solving.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/" style={{
                  background: 'white',
                  color: '#f59e0b',
                  border: 'none',
                  padding: '1.25rem 3rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  fontSize: '1.125rem'
                }}>
                  Create Division Worksheets Now
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
                  background: '#f59e0b',
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
                  background: '#f59e0b',
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

              <Link href="/word-problems" style={{
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
                  background: '#f59e0b',
                  color: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  margin: '0 auto 1rem'
                }}>
                  ?
                </div>
                <div style={{
                  color: '#1f2937',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontSize: '1.125rem'
                }}>
                  Word Problems
                </div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Story problems
                </div>
              </Link>

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
                  background: '#f59e0b',
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
            </div>
          </section>
        </div>
      </div>
    </>
  )
}