import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Math Worksheet Generator | Step-by-Step Tutorial',
  description: 'Learn how to effectively use our math worksheet generator to create customized practice sheets for homeschool and classroom use. Tips for printing and customization.',
}

export default function HowToUse() {
  const steps = [
    {
      step: 1,
      title: 'Select Grade Level',
      description: 'Choose the appropriate grade level from Kindergarten through 6th grade to ensure the math problems match your student\'s skill level.',
      tip: 'Start with your child\'s current grade level and adjust based on their proficiency'
    },
    {
      step: 2,
      title: 'Choose Problem Types',
      description: 'Select from various math operations including addition, subtraction, multiplication, division, fractions, and word problems.',
      tip: 'Mix different problem types to provide comprehensive practice'
    },
    {
      step: 3,
      title: 'Customize Difficulty',
      description: 'Adjust the difficulty settings for each problem type, such as number range, regrouping requirements, or problem complexity.',
      tip: 'Gradually increase difficulty as your child masters each concept'
    },
    {
      step: 4,
      title: 'Generate Worksheet',
      description: 'Click the generate button to create your customized worksheet with a unique set of problems every time.',
      tip: 'Generate multiple versions for repeated practice'
    },
    {
      step: 5,
      title: 'Download and Print',
      description: 'Download the PDF worksheet and answer key, then print for immediate use. Worksheets are optimized for standard printer paper.',
      tip: 'Use the answer key for quick grading and feedback'
    }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        {/* Header Section */}
        <section style={{
          textAlign: 'center',
          padding: '3rem 0',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            How to Use Our Math Worksheet Generator
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Step-by-step guide to creating perfect math practice sheets for your students
          </p>
        </section>

        {/* Steps Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {steps.map((step) => (
            <div key={step.step} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  flexShrink: 0,
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1.5rem'
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.125rem'
                  }}>
                    {step.step}
                  </span>
                </div>
                <div style={{flex: 1}}>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    {step.title}
                  </h2>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {step.description}
                  </p>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '6px',
                    padding: '1rem',
                    border: '1px solid var(--border)'
                  }}>
                    <p style={{
                      fontWeight: '600',
                      margin: 0,
                      fontSize: '1rem'
                    }}>
                      Pro Tip: {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Best Practices Section */}
        <section style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Best Practices
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                For Homeschool Parents
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                {[
                  'Create a consistent daily practice schedule',
                  'Mix review problems with new concepts',
                  'Use answer keys for immediate feedback',
                  'Track progress and adjust difficulty accordingly'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      background: 'var(--primary)',
                      borderRadius: '50%',
                      marginRight: '0.75rem',
                      marginTop: '0.5rem',
                      flexShrink: 0
                    }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                For Classroom Teachers
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                {[
                  'Generate differentiated worksheets for various skill levels',
                  'Create homework packets with mixed review',
                  'Use for quick assessments and progress monitoring',
                  'Print multiple versions to prevent answer sharing'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      background: 'var(--primary)',
                      borderRadius: '50%',
                      marginRight: '0.75rem',
                      marginTop: '0.5rem',
                      flexShrink: 0
                    }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{textAlign: 'center'}}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            Ready to Create Your Worksheets?
          </h2>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              fontSize: '1.125rem'
            }}
          >
            Start Generating Worksheets Now
          </a>
        </section>
      </div>
    </div>
  )
}