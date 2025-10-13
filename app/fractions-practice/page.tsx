// app/fractions-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractions Practice Worksheets | Free Printable Math Sheets 3rd-6th Grade',
  description: 'Master fractions with custom practice sheets. Generate free printable fractions worksheets for 3rd through 6th grade with basic concepts, visual models, and finding fractions of wholes.',
}

export default function FractionsPractice() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What fraction skills can I practice with these worksheets?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our generator creates fractions worksheets with basic fraction concepts (1/2, 1/3, 1/4, 2/3, 3/4), finding fractions of whole numbers, visual aids like fraction bars, and simple fraction calculations. We do not include fraction operations.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you include fraction addition, subtraction, multiplication, or division?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, our fractions worksheets focus on basic fraction concepts and finding fractional parts only. We do not include any fraction operations (addition, subtraction, multiplication, or division) to ensure age-appropriate practice.'
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
        background: 'linear-gradient(to bottom, #fef2f2, #ffffff)',
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
              background: '#ef4444',
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
              Fractions Practice Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#ef4444',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Master Fractions with Custom Practice Sheets
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
              Generate custom fractions worksheets with basic concepts, visual models, and finding fractional parts. 
              Perfect for building foundational understanding of fractions.
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
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>½ ¼ ⅓</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Basic Fractions</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Common fractions: 1/2, 1/3, 1/4, 2/3, 3/4</p>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📊</div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Visual Models</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Fraction bars and visual aids</p>
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
                <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Parts of Wholes</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem'}}>Finding fractions of numbers</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                background: '#ef4444',
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
                Generate Custom Fractions Worksheets
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
              Comprehensive fractions practice across all grade levels
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
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Basic fraction recognition</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Parts of a whole</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Fraction bar models</span>
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
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Common fractions practice</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Finding fractions of numbers</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Simple fraction problems</span>
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
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Fraction concepts mastery</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Complex fraction of whole numbers</span>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
                  <div style={{width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem'}}></div>
                  <span style={{color: '#6b7280'}}>Visual model applications</span>
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
              Fractions by Grade Level
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Age-appropriate fractions practice for every student
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { grade: '3', focus: 'Basic concepts, visual models' },
                { grade: '4', focus: 'Common fractions, parts of wholes' },
                { grade: '5', focus: 'Fraction concepts, applications' },
                { grade: '6', focus: 'Mastery, complex problems' }
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
                    background: '#ef4444',
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
              Varied fractions practice materials
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { type: 'Basic Fraction Recognition', count: '20+ problems', grades: '3-4', desc: 'Identify common fractions' },
                { type: 'Fraction Bar Models', count: '15+ problems', grades: '3-5', desc: 'Visual fraction representations' },
                { type: 'Parts of a Whole', count: '18+ problems', grades: '3-4', desc: 'Fractional parts concepts' },
                { type: 'Finding Fractions of Numbers', count: '20+ problems', grades: '4-6', desc: 'Calculate fractional amounts' },
                { type: 'Simple Fraction Problems', count: '15+ problems', grades: '4-6', desc: 'Basic fraction calculations' },
                { type: 'Mixed Fraction Practice', count: '25+ problems', grades: '4-6', desc: 'Varied fraction problems' }
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
                      background: '#ef4444',
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
                    color: '#ef4444',
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
              Everything you need to know about fractions practice worksheets
            </p>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                {
                  question: 'What fraction skills can I practice with these worksheets?',
                  answer: 'Our generator creates fractions worksheets with basic fraction concepts (1/2, 1/3, 1/4, 2/3, 3/4), finding fractions of whole numbers, visual aids like fraction bars, and simple fraction calculations. We do not include fraction operations.'
                },
                {
                  question: 'Do you include fraction addition, subtraction, multiplication, or division?',
                  answer: 'No, our fractions worksheets focus on basic fraction concepts and finding fractional parts only. We do not include any fraction operations (addition, subtraction, multiplication, or division) to ensure age-appropriate practice.'
                },
                {
                  question: 'What visual models are included for fractions?',
                  answer: 'We include fraction bars and simple visual representations to help students understand fractions as parts of a whole. These visual aids are designed to build conceptual understanding before moving to abstract fraction concepts.'
                },
                {
                  question: 'Are the worksheets suitable for students who struggle with fractions?',
                  answer: 'Yes! Our worksheets start with basic fraction recognition and visual models, gradually building to more abstract concepts. The progression helps struggling students develop confidence and understanding step by step.'
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
              background: '#ef4444',
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
                Build Fraction Understanding!
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
                Master fraction concepts with customized practice sheets. 
                From basic recognition to finding parts of wholes, develop essential math skills.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/" style={{
                  background: 'white',
                  color: '#ef4444',
                  border: 'none',
                  padding: '1.25rem 3rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  fontSize: '1.125rem'
                }}>
                  Create Fractions Worksheets Now
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
                  background: '#ef4444',
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
                  background: '#ef4444',
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
                  background: '#ef4444',
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
                  background: '#ef4444',
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