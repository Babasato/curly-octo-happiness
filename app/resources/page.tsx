// app/resources/page.tsx
'use client'

import Link from 'next/link'

export default function Resources() {
  return (
    <div className="main-content-area" style={{
      background: 'var(--background)',
      color: 'var(--text-primary)',
      minHeight: '100vh',
      padding: '2rem 1.5rem'
    }}>

      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="contact-page-title" style={{ color: 'var(--text-primary)' }}>
          Homeschool Math Resources
        </h1>
        <p className="contact-description" style={{ color: 'var(--text-secondary)' }}>
          Structured courses and professional planning tools designed for homeschooling parents who want real results — not just more busywork.
        </p>
      </header>

      {/* Section 1: Courses */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="contact-section-title" style={{ color: 'var(--text-primary)' }}>
          Math Courses
        </h2>
        <p className="about-text" style={{
          marginBottom: '1.5rem',
          color: 'var(--text-secondary)'
        }}>
          Each course is a complete, structured program built specifically for homeschooling parents teaching one-on-one. No prep required — just open and teach. Every course includes free planning tools worth $46.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Course 1 — Number Sense */}
          <div
            className="info-card"
            style={{
              background: 'var(--surface)',
              border: '2px solid var(--primary)',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Number Sense Foundations
                </h3>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  GRADES K–2 · COURSE 1 OF 3
                </p>
              </div>
              <span style={{
                background: 'var(--primary)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                $57
              </span>
            </div>

            <p className="text-p" style={{
              fontSize: '1.05rem',
              marginBottom: '1rem',
              color: 'var(--text-secondary)'
            }}>
              The foundation every young math learner needs. Builds genuine number sense — not just counting, but understanding what numbers mean and how they relate. Covers place value, composing and decomposing numbers, addition and subtraction concepts, and mental math strategies that make later arithmetic feel intuitive. Designed for parents with no teaching background.
            </p>

            <div style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              marginBottom: '1.25rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              ✓ Weekly Math Planner included free &nbsp;·&nbsp; ✓ Notion Progress Dashboard included free
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                href="/number-sense-foundations"
                target="_blank"
                className="contact-submit-button"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  boxSizing: 'border-box'
                }}
              >
                Get Number Sense Foundations — $57 →
              </Link>
              <Link
                href="/number-sense-foundations"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'var(--primary)',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                View full course details →
              </Link>
            </div>
          </div>

          {/* Course 2 — Subtraction */}
          <div
            className="info-card"
            style={{
              background: 'var(--surface)',
              border: '2px solid #E11D48',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(225, 29, 72, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Subtraction in 30 Days
                </h3>
                <p style={{ color: '#E11D48', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  GRADES 2–4 · COURSE 2 OF 3
                </p>
              </div>
              <span style={{
                background: '#E11D48',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                $57
              </span>
            </div>

            <p className="text-p" style={{
              fontSize: '1.05rem',
              marginBottom: '1rem',
              color: 'var(--text-secondary)'
            }}>
              Subtraction trips up more kids than almost any other early math skill — and the reason is almost always that borrowing was introduced before the concept was solid. This 30-day course fixes that. Starts with the meaning of subtraction, builds toward two-digit problems with and without regrouping, and ends with borrowing across zeros. Each day is a short, focused lesson with a clear objective and a printable practice page.
            </p>

            <div style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              marginBottom: '1.25rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              ✓ Weekly Math Planner included free &nbsp;·&nbsp; ✓ Year-Long Curriculum Planner included free
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                href="/subtraction-in-30-days"
                target="_blank"
                className="contact-submit-button"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                  background: '#E11D48',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  boxSizing: 'border-box'
                }}
              >
                Get Subtraction in 30 Days — $57 →
              </Link>
              <Link
                href="/subtraction-in-30-days"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: '#E11D48',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                View full course details →
              </Link>
            </div>
          </div>

          {/* Course 3 — Multiplication & Division */}
          <div
            className="info-card"
            style={{
              background: 'var(--surface)',
              border: '2px solid #7C3AED',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 58, 237, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Multiplication & Division Foundations
                </h3>
                <p style={{ color: '#7C3AED', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  GRADES 3–5 · COURSE 3 OF 3
                </p>
              </div>
              <span style={{
                background: '#7C3AED',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                $57
              </span>
            </div>

            <p className="text-p" style={{
              fontSize: '1.05rem',
              marginBottom: '1rem',
              color: 'var(--text-secondary)'
            }}>
              Multiplication is where math confidence gets made or broken — and the biggest mistake is rushing to memorization before the concept is understood. This course builds multiplication and division together from the ground up: equal groups, arrays, the relationship between the two operations, and then fact fluency built on understanding. By the end, students aren't just reciting facts — they know why they work. Covers all facts to 12×12 and introduces long division.
            </p>

            <div style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              marginBottom: '1.25rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              ✓ Year-Long Curriculum Planner included free &nbsp;·&nbsp; ✓ Notion Progress Dashboard included free
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                href="/multiplication-division-foundations"
                target="_blank"
                className="contact-submit-button"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                  background: '#7C3AED',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  boxSizing: 'border-box'
                }}
              >
                Get Multiplication & Division Foundations — $57 →
              </Link>
              <Link
                href="/multiplication-division-foundations"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: '#7C3AED',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                View full course details →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Free Planning Tools */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="contact-section-title" style={{ color: 'var(--text-primary)' }}>
          Free Planning Tools
        </h2>
        <p className="about-text" style={{
          marginBottom: '1.5rem',
          color: 'var(--text-secondary)'
        }}>
          These tools are included free with every course purchase. You can also download them individually at no cost.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>

          {/* Notion Template */}
          <div className="info-card" style={{
            flex: '1',
            minWidth: '280px',
            background: 'var(--surface)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 className="text-h3" style={{ color: 'var(--text-primary)' }}>
                  Notion Math Progress Dashboard
                </h3>
                <span style={{
                  background: 'var(--success)',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  marginLeft: '0.75rem'
                }}>
                  FREE
                </span>
              </div>
              <p className="text-p" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Track your student's entire mathematical journey in one system. Auto-calculate teaching hours, visualize skill mastery with progress bars, and generate compliance portfolios. 13 pre-built views, smart alerts for struggling skills, multi-student tracking.
              </p>
            </div>
            <Link
              href="https://homeschoolmath.gumroad.com/l/ahxceu"
              target="_blank"
              className="contact-submit-button"
              style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '0.9rem',
                background: 'var(--primary)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '8px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Download Free on Gumroad
            </Link>
          </div>

          {/* Year-Long Planner */}
          <div className="info-card" style={{
            flex: '1',
            minWidth: '280px',
            background: 'var(--surface)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 className="text-h3" style={{ color: 'var(--text-primary)' }}>
                  Year-Long Curriculum Planner
                </h3>
                <span style={{
                  background: 'var(--success)',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  marginLeft: '0.75rem'
                }}>
                  FREE
                </span>
              </div>
              <p className="text-p" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Map out your entire academic year in minutes. Set high-level objectives, align with standards, and generate a comprehensive PDF roadmap to keep your teaching on track all year.
              </p>
            </div>
            <Link
              href="https://homeschoolmath.gumroad.com/l/btoecv"
              target="_blank"
              className="contact-submit-button"
              style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '0.9rem',
                background: 'var(--primary)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '8px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Download Free on Gumroad
            </Link>
          </div>

          {/* Weekly Planner */}
          <div className="info-card" style={{
            flex: '1',
            minWidth: '280px',
            background: 'var(--surface)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 className="text-h3" style={{ color: 'var(--text-primary)' }}>
                  Weekly Math Planner
                </h3>
                <span style={{
                  background: 'var(--success)',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  marginLeft: '0.75rem'
                }}>
                  FREE
                </span>
              </div>
              <p className="text-p" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                The perfect companion for daily teaching. Organize lessons, track manipulatives, and document student reflections. Pairs directly with the course structure for a complete teaching system.
              </p>
            </div>
            <Link
              href="https://homeschoolmath.gumroad.com/l/bkltc"
              target="_blank"
              className="contact-submit-button"
              style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '0.9rem',
                background: 'var(--primary)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '8px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Download Free on Gumroad
            </Link>
          </div>

        </div>
      </section>

      {/* Section 3: Free Tools */}
      <section>
        <h2 className="contact-section-title" style={{ color: 'var(--text-primary)' }}>
          Free Community Tools
        </h2>
        <div className="auto-grid">
          <div className="info-card" style={{
            background: 'var(--surface)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            <h3 className="text-h3" style={{ color: 'var(--text-primary)' }}>
              Worksheet Generator
            </h3>
            <p className="text-p" style={{ color: 'var(--text-secondary)' }}>
              Our signature tool for creating custom math practice pages for core operations. Grades K–6, unlimited, no registration required.
            </p>
            <Link
              href="/#resources-banner"
              className="contact-resource-link"
              style={{
                display: 'block',
                marginTop: '1rem',
                color: 'var(--primary)',
                fontWeight: '600'
              }}
            >
              Open Generator →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
