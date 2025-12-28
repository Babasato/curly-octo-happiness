// app/teaching-tips/page.tsx - FIXED VERSION
import { Metadata } from 'next'
import Link from 'next/link'
import './teaching-tips.css' // ✅ Added for CSS hover effect

export const metadata: Metadata = {
  title: 'Math Teaching Tips & Strategies | Effective Math Instruction',
  description: 'Discover effective math teaching strategies, differentiation techniques, and classroom tips for homeschool and traditional education settings.',
}

export default function TeachingTips() {
  const strategies = [
    {
      category: 'Differentiation Strategies',
      tips: [
        'Use tiered assignments to meet varying skill levels',
        'Provide multiple ways to demonstrate understanding',
        'Incorporate choice boards for student engagement',
        'Use flexible grouping for targeted instruction'
      ]
    },
    {
      category: 'Engagement Techniques',
      tips: [
        'Incorporate math games and puzzles',
        'Use real-world problem solving scenarios',
        'Implement math talks and number talks',
        'Connect math to student interests'
      ]
    },
    {
      category: 'Assessment Ideas',
      tips: [
        'Use exit tickets for quick checks',
        'Implement math journals for reflection',
        'Create performance-based assessments',
        'Use self-assessment and peer feedback'
      ]
    },
    {
      category: 'Technology Integration',
      tips: [
        'Use digital manipulatives and tools',
        'Incorporate educational math apps',
        'Create digital portfolios of student work',
        'Use online assessment tools'
      ]
    }
  ]

  const conceptualUnderstandingTips = [
    'Follow the CRA sequence: start with physical objects (Concrete), move to drawings/models (Representational), and finally use numbers and symbols (Abstract)',
    'Use visual representations and models',
    'Connect new concepts to prior knowledge',
    'Encourage multiple solution strategies',
    'Focus on the "why" behind procedures',
    'Use real-world contexts and applications'
  ]

  const skillDevelopmentTips = [
    'Provide distributed practice over time',
    'Use interleaved practice of different skills',
    'Incorporate timed practice for fluency',
    'Provide immediate corrective feedback',
    'Celebrate progress and effort'
  ]

  return (
    <>
      {/* Header Component */}
      <header style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 1.5rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              margin: 0,
              color: 'var(--text-primary)'
            }}>
              Math Worksheet Generator
            </h1>
          </Link>
          <nav>
            <Link href="/" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              ← Back to Generator
            </Link>
          </nav>
        </div>
      </header>

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
              Math Teaching Tips & Strategies
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Discover effective teaching strategies, differentiation techniques, and classroom tips 
              to help your students develop strong mathematical understanding and problem-solving skills.
            </p>
          </section>

          {/* Strategies Grid */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              Effective Math Teaching Strategies
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {strategies.map((strategy, index) => (
                <div key={index} className="strategy-card"> {/* ✅ Added CSS class */}
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    {strategy.category}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {strategy.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem',
                        color: 'var(--text-secondary)'
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
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices Section */}
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
                Best Practices for Math Instruction
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
                    For Conceptual Understanding
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    {conceptualUnderstandingTips.map((item, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          width: '0.5rem',
                          height: '0.5rem',
                          background: index === 0 ? 'var(--secondary)' : 'var(--primary)',
                          borderRadius: '50%',
                          marginRight: '0.75rem',
                          marginTop: '0.5rem',
                          flexShrink: 0
                        }}></div>
                        <span style={index === 0 ? {fontWeight: '600', color: 'var(--text-primary)'} : {}}>
                          {item}
                        </span>
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
                    For Skill Development
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    {skillDevelopmentTips.map((item, index) => (
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
            </div>
          </section>

          {/* RESOURCE SPOTLIGHT SECTION */}
          <section style={{
            background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>
              Master Your Math Planning
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Great teaching starts with great organization. We created a set of 
              <strong> premium planning tools</strong> to help you track these teaching 
              strategies and monitor student growth over the entire year.
            </p>
            <Link href="/resources" style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}>
              View Planning Resources
            </Link>
          </section>

          {/* CTA Section */}
          <section style={{textAlign: 'center'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}>
              Ready to Create Engaging Math Practice?
            </h2>
            <Link 
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
              Generate Custom Math Worksheets
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}
