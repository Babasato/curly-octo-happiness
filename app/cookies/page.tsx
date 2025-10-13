// app/cookies/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Math Worksheet Generator',
  description: 'Cookie policy for Math Worksheet Generator. Learn about how we use cookies and similar technologies to improve user experience.',
}

export default function CookiesPolicy() {
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
            marginBottom: '0.5rem'
          }}>
            Cookie Policy
          </h1>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div>
            <section style={{marginBottom: '2rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                1. What Are Cookies
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                our website. They help us provide you with a better experience by remembering your preferences 
                and understanding how you use our service.
              </p>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                2. How We Use Cookies
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                We use cookies for the following purposes:
              </p>
              <ul style={{
                listStyle: 'disc',
                paddingLeft: '1.5rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                <li style={{marginBottom: '0.5rem'}}>Essential cookies: Required for basic website functionality</li>
                <li style={{marginBottom: '0.5rem'}}>Preference cookies: Remember your worksheet generation settings</li>
                <li style={{marginBottom: '0.5rem'}}>Analytics cookies: Help us understand how visitors use our site</li>
                <li>Performance cookies: Improve website performance and user experience</li>
              </ul>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                3. Types of Cookies We Use
              </h2>
              <div style={{
                background: '#f8fafc',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Essential Cookies
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They are usually only set in response to actions made by you.
                </p>
                
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Preference Cookies
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  These cookies allow the website to remember choices you make and provide enhanced, 
                  more personal features, such as your preferred grade level or problem types.
                </p>
                
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Analytics Cookies
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
              </div>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                4. Managing Cookies
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed. 
                However, if you do this, you may have to manually adjust some preferences every time you 
                visit our site and some services and functionalities may not work.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Most web browsers allow some control of most cookies through the browser settings. 
                To find out more about cookies, including how to see what cookies have been set and 
                how to manage and delete them, visit <a href="https://www.aboutcookies.org" style={{
                  color: '#2563eb',
                  textDecoration: 'none'
                }}>www.aboutcookies.org</a>.
              </p>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                5. Changes to This Policy
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                We may update this Cookie Policy from time to time. We will notify you of any changes 
                by posting the new Cookie Policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                6. Contact Us
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                If you have any questions about our use of cookies, please contact us through 
                our <Link href="/contact" style={{
                  color: '#2563eb',
                  textDecoration: 'none'
                }}>contact form</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}