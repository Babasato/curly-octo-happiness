// app/about/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Math Worksheet Generator | Free Educational Resources',
  description: 'Learn about our mission to provide free, high-quality math worksheets for homeschool and classroom use. Discover our commitment to educational excellence.',
}

export default function About() {
  return (
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
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2rem'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            About Math Worksheet Generator
          </h1>
          
          <section style={{marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Our Mission
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              Math Worksheet Generator was created with a simple but important mission: to provide 
              high-quality, customizable math practice materials for students, teachers, and homeschool 
              families completely free of charge.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              We believe that every student deserves access to excellent math education resources, 
              regardless of their background or financial situation. Our platform empowers educators 
              and parents to create tailored math practice that meets each student's unique needs.
            </p>
          </section>

          <section style={{marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              What We Offer
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{
                background: '#dbeafe',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Customizable Worksheets
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Generate math worksheets tailored to specific grade levels, skills, and difficulty 
                  requirements with our easy-to-use generator.
                </p>
              </div>
              <div style={{
                background: '#dcfce7',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Comprehensive Coverage
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Worksheets covering kindergarten through 6th grade math, including all major 
                  operations and mathematical concepts.
                </p>
              </div>
              <div style={{
                background: '#f3e8ff',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Answer Keys
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Every generated worksheet comes with a complete answer key for easy grading 
                  and immediate feedback.
                </p>
              </div>
              <div style={{
                background: '#ffedd5',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Always Free
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Our service is completely free to use, with no hidden fees, subscriptions, 
                  or usage limits beyond 10 worksheets per day.
                </p>
              </div>
            </div>
          </section>

          <section style={{marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Educational Philosophy
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              We understand that math education requires more than just rote practice. Our worksheets 
              are designed to:
            </p>
            <ul style={{
              listStyle: 'disc',
              paddingLeft: '1.5rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              <li style={{marginBottom: '0.5rem'}}>Build conceptual understanding alongside procedural fluency</li>
              <li style={{marginBottom: '0.5rem'}}>Provide varied problem types to develop flexible thinking</li>
              <li style={{marginBottom: '0.5rem'}}>Include real-world applications to show math's relevance</li>
              <li style={{marginBottom: '0.5rem'}}>Offer appropriate challenge levels to support growth mindset</li>
              <li>Enable differentiation to meet diverse learning needs</li>
            </ul>
          </section>

          <section style={{marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              For Educators & Parents
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Classroom Teachers
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'var(--text-secondary)'
                }}>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Create homework assignments and practice sheets
                  </li>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Generate differentiated materials for various skill levels
                  </li>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Prepare assessment materials and review packets
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Support intervention and enrichment activities
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Homeschool Families
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'var(--text-secondary)'
                }}>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Customize curriculum to match your child's pace
                  </li>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Create unlimited practice materials (10 per day)
                  </li>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Track progress with consistent format
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{marginRight: '0.5rem'}}>•</span>
                    Supplement any math program
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Our Commitment
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              We are committed to maintaining the highest standards of educational quality while 
              keeping our resources completely accessible. Our team continuously works to:
            </p>
            <ul style={{
              listStyle: 'disc',
              paddingLeft: '1.5rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              <li style={{marginBottom: '0.5rem'}}>Improve and expand our worksheet offerings</li>
              <li style={{marginBottom: '0.5rem'}}>Ensure alignment with educational standards</li>
              <li style={{marginBottom: '0.5rem'}}>Provide reliable, easy-to-use technology</li>
              <li style={{marginBottom: '0.5rem'}}>Protect user privacy and data security</li>
              <li>Respond to user feedback and suggestions</li>
            </ul>
          </section>

          <section style={{
            textAlign: 'center',
            borderTop: '1px solid var(--border)',
            paddingTop: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Get Started Today
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              Join thousands of educators and parents who are already using Math Worksheet Generator 
              to support their students' math learning journey.
            </p>
            <Link href="/" style={{
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.2s'
            }}>
              Start Generating Worksheets
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}