import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Math Worksheet Generator',
  description: 'Privacy policy for Math Worksheet Generator. Learn how we protect your data and privacy while using our educational resources.',
}

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                1. Information We Collect
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                Math Worksheet Generator is committed to protecting your privacy. We collect minimal information 
                necessary to provide our educational services:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                {[
                  'Worksheet generation preferences and settings',
                  'Download statistics (anonymous)',
                  'Basic usage analytics to improve our service',
                  'Contact information only if you voluntarily provide it'
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
                2. Children's Privacy
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                Our service is designed for educational use and may be used by children under parental supervision. 
                We do not knowingly collect personal information from children under 13. All worksheet generation 
                and downloads are anonymous and don't require user registration.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                3. How We Use Information
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                We use collected information to:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                {[
                  'Generate customized math worksheets',
                  'Improve our worksheet generator and user experience',
                  'Understand how our resources are being used',
                  'Provide customer support when requested'
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
                4. Data Security
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                We implement appropriate security measures to protect against unauthorized access to 
                or unauthorized alteration, disclosure, or destruction of data. All worksheet generation 
                happens locally in your browser, and no personal math problems or student work is stored 
                on our servers.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                5. Third-Party Services
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                We may use third-party services such as website analytics to understand how our 
                service is used. These services collect anonymous usage data and don't identify 
                individual users.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                6. Changes to This Policy
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new privacy policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section style={{marginBottom: '2.5rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                7. Contact Us
              </h2>
              <p style={{
                color: 'var(--text-secondary)'
              }}>
                If you have any questions about this privacy policy, please contact us through 
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