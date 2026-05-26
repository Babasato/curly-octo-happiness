// app/subtraction-in-30-days/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction in 30 Days — Complete Grades 2–4 Math Course | homeschoolmath.site',
  description: 'A complete 80+ page Grades 2–4 subtraction course. 20 daily lessons, 4 weeks of structured progression, 12 worksheet sets, and full answer keys. Fixes borrowing at the root. Instant PDF download.',
  alternates: {
    canonical: 'https://homeschoolmath.site/subtraction-in-30-days',
  },
}

export default function SubtractionIn30Days() {
  const weeks = [
    {
      number: '01',
      title: 'Subtraction Without Regrouping',
      desc: 'Visual models, number lines, the counting-up strategy, mental subtraction using fact families, two-digit subtraction, check-by-adding from Day 1'
    },
    {
      number: '02',
      title: 'Introduction to Regrouping',
      desc: 'The trade concept (physical demonstration first), the place value breakdown method, the standard algorithm with full conceptual grounding, Week 2 Assessment'
    },
    {
      number: '03',
      title: 'Multi-Digit Mastery',
      desc: 'Three and four-digit subtraction, zero complications (borrowing across zeros — the hardest case), error detection'
    },
    {
      number: '04',
      title: 'Word Problems & Fluency',
      desc: 'Three types of subtraction word problems (Take Away, Difference, Missing Addend), multi-step problems, timed fluency practice'
    }
  ]

  const errors = [
    {
      number: '1',
      title: 'Backwards subtraction',
      example: '54 − 28 = 34',
      desc: 'Subtracting the smaller digit from the larger regardless of position. This is a conceptual error, not carelessness. Week 2\'s trade concept approach prevents it.'
    },
    {
      number: '2',
      title: 'Forgetting to reduce after borrowing',
      desc: 'The expanded method makes this impossible to forget because the reduced digit is written explicitly.'
    },
    {
      number: '3',
      title: 'Zero confusion',
      desc: 'Borrowing past a zero without going further up first. Week 3 addresses this with step-by-step worked examples and dedicated worksheets.'
    }
  ]

  const included = [
    { label: '80+ pages', desc: 'Instant download PDF, letter size (8.5×11"), print or screen' },
    { label: '20 daily lessons', desc: '4 weeks of structured progression, one short lesson per day' },
    { label: '12 worksheet sets', desc: 'Full, readable answer keys follow every worksheet — numbered and written out fully' },
    { label: 'Weekly parent guides', desc: 'What errors to expect, why they happen, and whether they signal a conceptual gap' },
    { label: '6 games', desc: 'Subtraction reinforcement games and daily warm-up activities' },
    { label: '18-term glossary', desc: 'Minuend, subtrahend, difference, regrouping, algorithm, fact family, and more' },
    { label: 'Quick reference sheets', desc: '4 lined parent observation pages and a completion certificate' },
    { label: 'Free extras', desc: 'Weekly Math Planner + Year-Long Curriculum Planner included' },
  ]

  const forYou = [
    'Your child makes borrowing errors they can\'t self-correct',
    'You\'ve tried drilling subtraction facts without improvement',
    'You want your child to understand subtraction, not just perform it',
    'You are teaching Grades 2, 3, or 4',
  ]

  const notForYou = [
    'Your child has solid two-digit subtraction with borrowing and just needs speed practice',
    'You want a digital or interactive program',
    'You want a workbook the child completes alone without parent involvement',
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <Link href="/resources" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Resources</Link>
          <span style={{ margin: '0 0.5rem' }}>→</span>
          <span>Subtraction in 30 Days</span>
        </nav>

        {/* Hero */}
        <section style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          marginBottom: '2rem',
          borderTop: '4px solid #E11D48'
        }}>
          <div style={{
            display: 'inline-block',
            background: '#E11D48',
            color: 'white',
            fontSize: '0.8rem',
            fontWeight: '700',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            GRADES 2–4 · COURSE 2 OF 3
          </div>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Subtraction in 30 Days
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.75rem',
            fontWeight: '600',
            lineHeight: '1.4'
          }}>
            Subtraction is where many children first decide they're "bad at math." This course is the confidence rebuild.
          </p>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Subtraction struggles almost never start with subtraction. They start with borrowing being taught as steps to memorise rather than a concept to understand. A child who doesn't know WHY they borrow will make consistent errors they cannot fix themselves — and that helplessness compounds into math anxiety. This course fixes the root, not the symptom.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1' }}>$57</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>One-time purchase · Instant PDF download</div>
            </div>
            <div style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              ✓ Weekly Math Planner included free<br />
              ✓ Year-Long Curriculum Planner included free
            </div>
          </div>

          <Link
            href="https://homeschoolmath.gumroad.com/l/oalnh"
            target="_blank"
            style={{
              display: 'inline-block',
              background: '#E11D48',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}
          >
            Get the Course — $57 →
          </Link>
        </section>

        {/* The problem */}
        <section style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderLeft: '4px solid #E11D48',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Has your child started avoiding subtraction? Making the same borrowing errors over and over?
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1.05rem',
            margin: 0
          }}>
            Drilling more facts will not fix a conceptual misunderstanding. If a child doesn't know what borrowing actually does to a number — that it moves one ten across to the ones column without changing the total value — they will keep making the same errors regardless of how much practice they do. The fix is understanding first, procedure second.
          </p>
        </section>

        {/* Weekly breakdown */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            20 daily lessons — 4 weeks of structured progression
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {weeks.map((week, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  background: '#E11D48',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}>
                  WEEK {week.number}
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {week.title}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {week.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Three common errors */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem'
          }}>
            The three most common subtraction errors — and why this course prevents them
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontSize: '0.95rem'
          }}>
            Each error has a specific structural cause. This course addresses each one directly.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {errors.map((err, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  background: 'var(--surface-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontWeight: '700',
                  fontSize: '1rem',
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {err.number}
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {err.title} {err.example && <span style={{ color: '#E11D48', fontFamily: 'monospace' }}>({err.example})</span>}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {err.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            Everything included
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem'
          }}>
            {included.map((item, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.25rem'
              }}>
                <div style={{
                  fontWeight: '700',
                  color: '#E11D48',
                  marginBottom: '0.25rem',
                  fontSize: '0.95rem'
                }}>
                  {item.label}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* For you / not for you */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              This course is for you if:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {forYou.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--success)', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              This course is NOT for you if:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {notForYou.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: '700', flexShrink: 0 }}>✗</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course sequence */}
        <section style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            fontSize: '1rem'
          }}>
            The complete course sequence
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link href="/number-sense-foundations" style={{
                background: 'var(--surface-elevated)',
                color: 'var(--primary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '700',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                border: '1px solid var(--border)'
              }}>COURSE 1</Link>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Number Sense Foundations (Grades K–2)</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{
                background: '#E11D48',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '700',
                whiteSpace: 'nowrap'
              }}>YOU ARE HERE</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.95rem' }}>Course 2 — Subtraction in 30 Days (Grades 2–4)</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link href="/multiplication-division-foundations" style={{
                background: 'var(--surface-elevated)',
                color: 'var(--primary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '700',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                border: '1px solid var(--border)'
              }}>COURSE 3</Link>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Multiplication & Division Foundations (Grades 3–5)</span>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{
          background: '#E11D48',
          borderRadius: '12px',
          padding: '3rem 2rem',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '0.75rem'
          }}>
            Subtraction in 30 Days — $57
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>
            Includes: 80+ page course PDF · Weekly Math Planner · Year-Long Curriculum Planner
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem',
            fontSize: '0.9rem'
          }}>
            Instant download · Print at home · No subscription
          </p>
          <Link
            href="https://homeschoolmath.gumroad.com/l/oalnh"
            target="_blank"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#E11D48',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}
          >
            Get the Course on Gumroad →
          </Link>
        </section>

        {/* Back to resources */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link href="/resources" style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>
            ← Back to all resources
          </Link>
        </div>

      </div>
    </div>
  )
}