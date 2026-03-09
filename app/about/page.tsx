// app/about/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | homeschoolmath.site',
  description: 'Learn about our mission to provide free, high-quality math worksheets and affordable resources for homeschool families and educators.',
  alternates: {
    canonical: 'https://homeschoolmath.site/about',
  },
}

export default function About() {
  const offerings = [
    {
      title: 'Free Worksheet Generator',
      desc: 'Unlimited, randomized math worksheets for kindergarten through 6th grade. No account needed, no cost — ever.',
      accent: 'accent-blue'
    },
    {
      title: 'Planners & Templates',
      desc: 'Weekly and yearly curriculum planners plus a Notion template to keep your homeschool organised and running smoothly.',
      accent: 'accent-green'
    },
    {
      title: 'Focused Math Courses',
      desc: 'Short, targeted courses on Number Sense (K–2), Subtraction (Grades 2–4), and Multiplication (Grades 4–5) — built for real results.',
      accent: 'accent-orange'
    }
  ]

  const values = [
    {
      title: 'Conceptual Understanding First',
      desc: 'Facts and procedures matter, but only after a child understands what the numbers mean. Everything we build reflects that priority.'
    },
    {
      title: 'Accessible to Everyone',
      desc: 'The core tools are free. The paid resources are priced to be within reach of a single-income homeschool family.'
    },
    {
      title: 'No Fluff',
      desc: 'No weekly email courses, no upsell funnels, no bloated curricula. Just focused, well-made resources that do what they say.'
    },
    {
      title: 'Built for Both Home and Classroom',
      desc: 'Whether you\'re a homeschooling parent or a classroom teacher, the tools are designed to fit how you actually work.'
    }
  ]

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

        {/* Hero */}
        <section style={{
          textAlign: 'center',
          padding: '3rem 0',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--primary)',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '600',
            padding: '0.5rem 1.5rem',
            borderRadius: '6px',
            marginBottom: '1.5rem'
          }}>
            Our Mission
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            About homeschoolmath.site
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            We build free math tools and affordable resources for homeschool families and educators who want their students to genuinely understand mathematics — not just get through it.
          </p>
        </section>

        {/* Why We Exist */}
        <section style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Why We Exist
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1.05rem',
            marginBottom: '1rem'
          }}>
            Good math education shouldn't depend on how much money a family has or which school district a child happens to live in. Yet the most useful tools — customisable practice, targeted intervention, clear curriculum structure — tend to be locked behind expensive subscriptions or buried in bloated platforms.
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1.05rem'
          }}>
            homeschoolmath.site started as a worksheet generator and grew from there. The free tools stay free. The paid resources — planners and focused courses — are priced the way we'd want to see them priced if we were the ones buying.
          </p>
        </section>

        {/* What We Offer */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}>
            What We Offer
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {offerings.map((item, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}>
            What We Believe
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {values.map((item, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--primary)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  margin: 0,
                  fontSize: '0.95rem'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{
            background: 'var(--primary)',
            color: 'white',
            borderRadius: '8px',
            padding: '3rem 2rem',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Start With the Free Tools
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '2rem',
              maxWidth: '550px',
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Generate your first worksheet in under a minute — no account, no sign-up, no cost.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/" style={{
                background: 'white',
                color: 'var(--primary)',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '1rem'
              }}>
                Generate Worksheets
              </Link>
              <Link href="/resources" style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '1rem'
              }}>
                Browse Resources
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}