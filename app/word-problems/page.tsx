// app/word-problems/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Math Word Problems Worksheets | Story Problems Practice 1st-6th Grade',
  description: 'Master math word problems with custom practice sheets. Generate free printable story problem worksheets for 1st through 6th grade with real-world scenarios and multiple operations.',
}

export default function WordProblems() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What types of word problems are included in the worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates word problem worksheets with real-world scenarios involving addition, subtraction, multiplication, and division. Problems include shopping, sharing, time, money, and everyday situations appropriate for each grade level.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How often do worksheets include word problems?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Word problems have a 30% chance of appearing in any generated worksheet. This ensures students get regular practice with story problems while maintaining variety in their math practice.'
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
        background: 'linear-gradient(to bottom, #ecfdf5, #ffffff)',
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
              background: '#059669',
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
              Math Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#059669',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Master Story Problems with Custom Practice Sheets
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
              Generate custom word problem worksheets with real-world scenarios and multiple operations. 
              Perfect for developing critical thinking and problem-solving skills.
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
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>30%</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Inclusion Rate</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Word problems in any worksheet</p>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🌍</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Real-World</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Everyday scenarios and contexts</p>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>➕➖✖️➗</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>All Operations</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Addition, subtraction, multiplication, division</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                background: '#059669',
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
                Generate Custom Word Problem Worksheets
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
              Comprehensive word problem practice across all grade levels
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
                }}>1st-2nd Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Single-step addition problems</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Simple subtraction scenarios</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Counting and sharing stories</span>
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
                }}>3rd-4th Grade Skills</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Multi-step word problems</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Multiplication and division</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Money and time problems</span>
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
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Complex multi-step problems</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Multiple operations required</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#059669', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Real-world applications</span>
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
              Word Problems by Grade Level
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Age-appropriate story problem practice for every student
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { grade: '1-2', focus: 'Single-step, addition/subtraction' },
                { grade: '3-4', focus: 'Multi-step, all operations' },
                { grade: '5-6', focus: 'Complex, real-world scenarios' }
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
                    background: '#059669',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    margin: '0 auto 1rem'
                  }}>
                    {level.grade.split('-')[0]}
                  </div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    Grades {level.grade}
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
              Varied word problem practice materials
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { type: 'Addition Word Problems', count: '8-12 problems', grades: '1-4', desc: 'Combining and adding scenarios' },
                { type: 'Subtraction Word Problems', count: '8-12 problems', grades: '1-4', desc: 'Take-away and difference stories' },
                { type: 'Multiplication Word Problems', count: '8-12 problems', grades: '3-6', desc: 'Equal groups and arrays' },
                { type: 'Division Word Problems', count: '8-12 problems', grades: '3-6', desc: 'Sharing and grouping scenarios' },
                { type: 'Multi-Step Problems', count: '6-10 problems', grades: '3-6', desc: 'Multiple operations required' },
                { type: 'Money and Time Problems', count: '8-12 problems', grades: '2-6', desc: 'Real-world financial scenarios' }
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
                      background: '#059669',
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
                    color: '#059669',
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
              Everything you need to know about word problem worksheets
            </p>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                {
                  question: 'What types of word problems are included in the worksheets?',
                  answer: 'Our generator creates word problem worksheets with real-world scenarios involving addition, subtraction, multiplication, and division. Problems include shopping, sharing, time, money, and everyday situations appropriate for each grade level.'
                },
                {
                  question: 'How often do worksheets include word problems?',
                  answer: 'Word problems have a 30% chance of appearing in any generated worksheet. This ensures students get regular practice with story problems while maintaining variety in their math practice.'
                },
                {
                  question: 'Are the word problems age-appropriate for different grade levels?',
                  answer: 'Yes! We carefully design problems with appropriate vocabulary, number ranges, and complexity for each grade level. Younger students get simple, concrete scenarios while older students tackle more complex, multi-step problems.'
                },
                {
                  question: 'Do word problems include visual aids or supports?',
                  answer: 'While the primary focus is on reading comprehension and problem-solving, some word problems for younger grades may include simple visual context. The main emphasis is developing the ability to extract mathematical information from text.'
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
              background: '#059669',
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
                Develop Problem-Solving Skills!
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
                Master real-world math applications with customized word problem worksheets. 
                Build critical thinking and mathematical reasoning skills for academic success.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/" style={{
                  background: 'white',
                  color: '#059669',
                  border: 'none',
                  padding: '1.25rem 3rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  fontSize: '1.125rem'
                }}>
                  Create Word Problem Worksheets Now
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
                  background: '#059669',
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
                  background: '#059669',
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
                  background: '#059669',
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
                  background: '#059669',
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
            </div>
          </section>
        </div>
      </div>
    </>
  )
}