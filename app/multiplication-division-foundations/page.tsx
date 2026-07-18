// app/multiplication-division-foundations/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication & Division Foundations Course | 80+ Pages for Grades 3-5',
  description: 'A complete 80+ page grades 3-5 course teaching multiplication and division together with 4 modules, 14 worksheet sets, and assessments.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplication-division-foundations',
  },
}

export default function MultiplicationDivisionFoundations() {
  const modules = [
    {
      number: '01',
      title: 'Understanding Multiplication',
      desc: 'Multiplication as repeated addition (the only foundation that sticks), arrays and area models, times table patterns for ×1, ×2, ×5, ×9, and ×10'
    },
    {
      number: '02',
      title: 'Building Fluency',
      desc: 'Complete pattern guide for all tables ×1 through ×12, all 8 skip counting sequences written out in full, three mental multiplication strategies (doubling, ×10 adjust, halve-and-×10)'
    },
    {
      number: '03',
      title: 'Division Concepts',
      desc: 'Sharing vs grouping (two distinct meanings), fact families (one family covers 4 equations — halves the memorization load), remainders with the check formula'
    },
    {
      number: '04',
      title: 'Word Problems & Application',
      desc: 'Signal words for multiplication AND division, multi-step reasoning, inverse operation checking as a non-negotiable habit'
    }
  ]

  const included = [
    { label: '80+ pages', desc: 'Instant download PDF, letter size (8.5×11"), print or screen' },
    { label: '4 modules', desc: 'Parent-facing teaching guides with worked examples and strategies' },
    { label: '14 worksheet sets', desc: 'Full, readable answer keys — every remainder answer includes the check calculation' },
    { label: '2 assessments', desc: 'Mid-Course Assessment after Module 2, plus a comprehensive Final Assessment' },
    { label: 'Module parent guides', desc: 'Specific misconceptions that arise at each stage, addressed directly' },
    { label: '20-term glossary', desc: 'Factor, product, quotient, divisor, dividend, remainder, array, commutative property, and more' },
    { label: 'Reference sheets', desc: 'Skip counting reference, times tables reference, 4 observation pages, completion certificate' },
    { label: 'Free extras', desc: 'Year-Long Curriculum Planner + Notion Math Progress Dashboard included' },
  ]

  const forYou = [
    'Your child is starting times tables and you want to build it right the first time',
    'Your child has memorized some facts but has no idea what multiplication means',
    'Division feels impossible or disconnected from multiplication',
    'You are teaching Grades 3, 4, or 5',
  ]

  const notForYou = [
    'Your child already has solid fact fluency through 12×12 and just needs speed drills',
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
          <span>Multiplication & Division Foundations</span>
        </nav>

        {/* Hero */}
        <section style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          marginBottom: '2rem',
          borderTop: '4px solid #7C3AED'
        }}>
          <div style={{
            display: 'inline-block',
            background: '#7C3AED',
            color: 'white',
            fontSize: '0.8rem',
            fontWeight: '700',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            GRADES 3–5 · COURSE 3 OF 3
          </div>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Multiplication & Division Foundations
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.75rem',
            fontWeight: '600',
            lineHeight: '1.4'
          }}>
            Multiplication doesn't cause anxiety. Weak foundations do. This course is future protection.
          </p>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Multiplication anxiety almost never starts with multiplication. It starts with children memorizing isolated facts they don't understand, which vanish under pressure. And division is taught as a separate, harder operation — when it's actually just multiplication viewed in reverse. This course changes both of those things.
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
              ✓ Year-Long Curriculum Planner included free<br />
              ✓ Notion Progress Dashboard included free
            </div>
          </div>

          <Link
            href="https://homeschoolmath.gumroad.com/l/dvcgun"
            target="_blank"
            style={{
              display: 'inline-block',
              background: '#7C3AED',
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
          borderLeft: '4px solid #7C3AED',
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
            Is your child dreading the times tables? Memorizing facts one week and forgetting them the next?
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1.05rem',
            margin: 0
          }}>
            Facts memorized without understanding vanish under pressure — in tests, in word problems, anywhere the context changes slightly. And when division arrives as a "separate, harder subject," children who already struggle with multiplication have nowhere to stand. This course teaches multiplication and division as two views of the same relationship, which cuts total memorization in half and makes both operations stick.
          </p>
        </section>

        {/* The key insight */}
        <section style={{
          background: 'var(--surface)',
          border: '2px solid #7C3AED',
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
            Why teaching multiplication and division together works
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1.05rem',
            marginBottom: '1rem'
          }}>
            If your child knows 6 × 7 = 42, they already know 42 ÷ 6 = 7 and 42 ÷ 7 = 6. That's three facts for the price of one understanding. The fact family approach in Module 3 makes this explicit and cuts total memorization in half.
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1.05rem',
            margin: 0
          }}>
            The self-rescue strategy taught in this course: when a child forgets 54 ÷ 9, they ask "what times 9 equals 54?" and use their multiplication knowledge to recover the answer — no frustration, no dead end.
          </p>
        </section>

        {/* Modules */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            What's inside this 80+ page course
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {modules.map((mod, i) => (
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
                  background: '#7C3AED',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}>
                  MODULE {mod.number}
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {mod.title}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {mod.desc}
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
                  color: '#7C3AED',
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
              <Link href="/subtraction-in-30-days" style={{
                background: 'var(--surface-elevated)',
                color: 'var(--primary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '700',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                border: '1px solid var(--border)'
              }}>COURSE 2</Link>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Subtraction in 30 Days (Grades 2–4)</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{
                background: '#7C3AED',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '700',
                whiteSpace: 'nowrap'
              }}>YOU ARE HERE</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.95rem' }}>Course 3 — Multiplication & Division Foundations (Grades 3–5)</span>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{
          background: '#7C3AED',
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
            Multiplication & Division Foundations — $57
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>
            Includes: 80+ page course PDF · Year-Long Curriculum Planner · Notion Progress Dashboard
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem',
            fontSize: '0.9rem'
          }}>
            Instant download · Print at home · No subscription
          </p>
          <Link
            href="https://homeschoolmath.gumroad.com/l/dvcgun"
            target="_blank"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#7C3AED',
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