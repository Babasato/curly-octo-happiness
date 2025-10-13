import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Math Worksheet Generator',
  description: 'Terms of service for Math Worksheet Generator. Learn about acceptable use, intellectual property, and user responsibilities.',
}

export default function TermsOfService() {
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
            marginBottom: '1rem'
          }}>
            Terms of Service
          </h1>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div style={{
            fontSize: '1.125rem',
            lineHeight: '1.7'
          }}>
            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                1. Acceptance of Terms
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                By accessing and using Math Worksheet Generator, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                2. Use License
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                Permission is granted to temporarily use Math Worksheet Generator for personal, 
                non-commercial educational purposes. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                {[
                  'Modify or copy the materials for commercial purposes',
                  'Use the materials for any commercial purpose',
                  'Attempt to decompile or reverse engineer any software',
                  'Remove any copyright or other proprietary notations',
                  'Transfer the materials to another person or "mirror" the materials'
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
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                3. Educational Use
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                Our service is intended for educational purposes including homeschool use, classroom teaching, 
                tutoring, and individual student practice. Worksheets generated may be used for educational 
                purposes but may not be resold or redistributed for commercial purposes.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                4. User Responsibilities
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                Users are responsible for:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                {[
                  'Ensuring appropriate supervision of minor users',
                  'Using generated worksheets in accordance with educational best practices',
                  'Providing accurate information when customizing worksheets',
                  'Respecting intellectual property rights'
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
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                5. Limitations
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                In no event shall Math Worksheet Generator or its suppliers be liable for any damages 
                arising out of the use or inability to use the materials, even if we have been notified 
                orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                6. Revisions and Errata
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                The materials appearing on Math Worksheet Generator could include technical, typographical, 
                or photographic errors. We do not warrant that any of the materials are accurate, complete, 
                or current.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                7. Contact Information
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                If you have any questions about these Terms of Service, please contact us through 
                our <a href="/contact" style={{
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>contact form</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}