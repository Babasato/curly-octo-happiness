// app/about/page.tsx - ENHANCED VERSION
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | The Mission Behind homeschoolmath.site',
  description: 'Learn about our mission to provide high-quality, algorithmic math resources for homeschool families and educators worldwide.',
}

export default function About() {
  const educationalPillars = [
    { 
      title: "Conceptual Mastery", 
      desc: "Build deep understanding alongside procedural fluency for lasting mathematical knowledge." 
    },
    { 
      title: "Flexible Thinking", 
      desc: "Varied problem types and approaches to develop adaptable mathematical problem-solving skills." 
    },
    { 
      title: "Growth Mindset", 
      desc: "Appropriately challenging materials that encourage persistence and celebrate progress." 
    },
    { 
      title: "Seamless Differentiation", 
      desc: "Tools designed to meet diverse learning needs in both classroom and homeschool settings." 
    }
  ]

  return (
    <div className="about-page">
      {/* ✅ ADDED: Consistent Website Header */}
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

      <div className="about-container">
        <div className="about-card">
          {/* Hero Section */}
          <div style={{
            textAlign: 'center',
            padding: '3rem 0',
            marginBottom: '2rem'
          }}>
            <h1 className="about-title">About Our Mission</h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Bridging the gap between premium educational technology and accessibility through 
              high-quality, customizable math resources.
            </p>
          </div>

          {/* Our Mission Section */}
          <section className="about-section">
            <h2 className="about-section-title">Why We Exist</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginTop: '1rem'
            }}>
              <div style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '8px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  🎯 The Problem
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Quality math resources often come with premium price tags or rigid structures 
                  that don't adapt to individual learning needs.
                </p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '8px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  💡 Our Solution
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Algorithmic worksheet generation that provides infinite, tailored practice 
                  while remaining completely free and accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer Section */}
          <section className="about-section">
            <h2 className="about-section-title">What We Offer</h2>
            <div className="auto-grid">
              <div style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--primary)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Customizable Worksheets
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  Randomized algorithmic generation ensures every worksheet is unique, 
                  preventing rote memorization and encouraging true mastery.
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '8px',
                borderLeft: '4px solid #10b981'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Comprehensive Coverage
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  K-6 math resources aligned with core standards and conceptual development 
                  milestones.
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '8px',
                borderLeft: '4px solid #f59e0b'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Planning Tools
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  Notion dashboards and curriculum trackers to organize the administrative 
                  side of education effectively.
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                borderRadius: '8px',
                borderLeft: '4px solid #ef4444'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Always Free
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  No hidden fees or intrusive subscriptions—just honest, effective educational 
                  tools accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          {/* ✅ ENHANCED: Educational Philosophy Grid */}
          <section className="about-section">
            <h2 className="about-section-title">Our Educational Philosophy</h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Math education requires more than just repetition. Our resources are engineered around these core principles:
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.25rem', 
              marginTop: '1rem' 
            }}>
              {educationalPillars.map((pillar, i) => (
                <div key={i} style={{
                  padding: '1.25rem',
                  background: 'var(--surface)',
                  borderLeft: '4px solid var(--primary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%'
                }}>
                  <h3 style={{ 
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)', 
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {pillar.title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'var(--surface)',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            marginTop: '2rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Ready to Transform Math Practice?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Join thousands of educators and parents who use homeschoolmath.site 
              to support their students' mathematical journey.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/"
                style={{
                  display: 'inline-block',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                Start Generating Worksheets
              </Link>
              <Link 
                href="/how-to-use"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: 'var(--primary)',
                  border: '2px solid var(--primary)',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                See How It Works
              </Link>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: var(--background);
          padding: 2rem 0;
        }
        
        .about-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .about-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .about-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .about-section {
          padding: 2rem;
          border-bottom: 1px solid var(--border);
        }
        
        .about-section:last-child {
          border-bottom: none;
        }
        
        .about-section-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .about-text {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .auto-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 1.5rem;
          }
          
          .about-title {
            font-size: 2rem;
          }
          
          .auto-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 640px) {
          .about-container {
            padding: 0 1rem;
          }
          
          .about-section {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  )
}
