// app/place-value/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Place Value Worksheets | Free Printable Practice Sheets',
  description: 'Free printable place value worksheets for grades K–5. Practice ones, tens, hundreds, thousands, rounding, comparing numbers, and decimal place value.',
  alternates: {
    canonical: 'https://homeschoolmath.site/place-value',
  },
}

export default function PlaceValue() {
  const faqs = [
    {
      question: 'When should students learn place value?',
      answer: 'Place value begins in kindergarten and 1st grade with tens and ones, extends to hundreds in 2nd grade, thousands in 3rd grade, and larger numbers through 5th grade. Decimal place value (tenths, hundredths) is introduced in 4th and 5th grade. The concept never really ends — it is the organizing principle behind all of our number system, so every grade level adds a new layer.'
    },
    {
      question: 'Why is place value so important?',
      answer: 'Place value is the foundation of every arithmetic operation. A student who does not understand that the 3 in 300 means three hundreds — not three — will struggle with addition with regrouping, subtraction with borrowing, multiplication of multi-digit numbers, and decimal operations. Most arithmetic errors that look like procedure errors are actually place value misunderstandings in disguise. Fixing place value fixes a wide range of other problems automatically.'
    },
    {
      question: 'What are the most common place value mistakes?',
      answer: 'The most common errors are: treating digits as independent numbers (thinking 23 means 2 and 3 rather than 20 and 3), not understanding that position determines value, confusion when zeros appear in the middle of a number (304 is often misread or miswritten), and reversal errors in two-digit numbers (writing 31 when 13 is meant). All of these point to the same root cause: the student has not internalized that a digit\'s position determines its value.'
    },
    {
      question: 'How do base-ten blocks help with place value?',
      answer: 'Base-ten blocks make the abstract concrete — a unit cube is 1, a rod is 10, a flat is 100, and a large cube is 1,000. When students physically trade 10 unit cubes for one rod, they experience regrouping rather than just following a procedure. This is why students who have worked with manipulatives first make far fewer errors with written algorithms later. If you do not have physical blocks, drawn representations on grid paper work nearly as well.'
    },
    {
      question: 'How do I teach rounding using place value?',
      answer: 'Teach rounding by first making sure the student can identify which place value they are rounding to and which digit is immediately to its right. The digit to the right determines whether you round up or stay — 5 or above rounds up, 4 or below stays. The most common mistake is rounding the wrong digit. Number lines are very helpful: have students locate the number between the two possible rounded values and identify which it is closer to before introducing the digit-based rule.'
    },
    {
      question: 'What is the connection between place value and multiplication?',
      answer: 'Multiplying by 10 shifts every digit one place to the left — this is a place value concept, not a "add a zero" trick. Students who understand this can multiply 34 × 10 instantly and understand why the answer is 340. This understanding directly supports multi-digit multiplication and later work with scientific notation. The "add a zero" shortcut causes errors with decimals: 3.4 × 10 is 34, not 3.40 — only place value understanding prevents this.'
    },
    {
      question: 'How does place value connect to decimal numbers?',
      answer: 'Decimal place value extends the whole-number place value system to the right of the ones place: tenths, hundredths, thousandths. Students who have a solid understanding of whole-number place value make this transition more easily because the pattern is the same — each place is ten times the value of the place to its right. The most common decimal place value error is treating decimal digits like whole numbers (thinking 0.9 is less than 0.12 because 9 is less than 12).'
    }
  ]

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const skills = [
    {
      category: 'Ones, Tens & Hundreds',
      topics: ['Identifying digit values', 'Expanded form', 'Standard and word form', 'Comparing two- and three-digit numbers']
    },
    {
      category: 'Thousands & Beyond',
      topics: ['Place value to 1,000,000', 'Reading and writing large numbers', 'Ordering and comparing', 'Place value patterns']
    },
    {
      category: 'Rounding',
      topics: ['Rounding to nearest 10', 'Rounding to nearest 100', 'Rounding to nearest 1,000', 'Rounding on a number line']
    },
    {
      category: 'Decimal Place Value',
      topics: ['Tenths and hundredths', 'Comparing decimals', 'Ordering decimals', 'Connecting fractions and decimals']
    }
  ]

  const progressionLevels = [
    {
      grade: 'Grades K–2: Tens and Ones',
      description: 'The foundation is understanding that 10 ones can be grouped into 1 ten — and that this grouping is why our number system works the way it does. Students in K–2 should work extensively with physical objects: bundling straws into tens, building numbers with base-ten blocks, and decomposing numbers in multiple ways (23 = 2 tens 3 ones, but also 1 ten 13 ones). This flexibility is what makes regrouping in addition and subtraction make sense later.'
    },
    {
      grade: 'Grade 3: Hundreds and Thousands',
      description: 'Third grade extends place value to 1,000 and introduces rounding to the nearest 10 and 100. The most important concept at this level is that the value of a digit depends entirely on its position — the 4 in 400 is worth 100 times more than the 4 in 4. Rounding should be taught using number lines first: have students locate a number between the two possible rounded values and see which it is closer to before introducing any digit-based rules.'
    },
    {
      grade: 'Grades 4–5: Large Numbers and Decimals',
      description: 'Fourth and fifth grade extend the system in both directions — to larger whole numbers and to decimals. Decimal place value is the most common source of errors at this stage. Students who have a strong whole-number place value foundation transfer the concept more easily: they understand that the pattern continues (each place is ten times the next) rather than needing to memorize a new system. Comparing decimals deserves focused attention — many students believe 0.9 < 0.12.'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div style={{ minHeight: '100vh', background: 'var(--background)', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero */}
          <section style={{ textAlign: 'center', padding: '3rem 0', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block', background: 'var(--primary)', color: 'white',
              fontSize: '0.875rem', fontWeight: '600', padding: '0.5rem 1.5rem',
              borderRadius: '6px', marginBottom: '1.5rem'
            }}>
              Free Printable Worksheets
            </div>
            <h1 style={{
              fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)',
              marginBottom: '1rem', lineHeight: '1.2'
            }}>
              Place Value Worksheets
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
              Number Sense Practice for Grades K–5
            </p>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem',
              maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
            }}>
              Build the number sense foundation that makes every arithmetic operation easier — from tens and ones through decimal place value and rounding.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/" style={{
                background: 'var(--primary)', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block'
              }}>
                Generate Place Value Worksheets
              </Link>
              <div style={{
                background: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)',
                padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: '600'
              }}>
                <span style={{ color: 'var(--primary)' }}>10</span> free worksheets per day •{' '}
                <span style={{ color: 'var(--primary)' }}>3</span> difficulty levels
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '8px', padding: '2rem', marginBottom: '3rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Why Place Value Is the Most Important Math Concept to Get Right
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Almost every arithmetic difficulty that shows up in later grades traces back to a place value gap. Students who struggle with borrowing in subtraction, carrying in addition, or lining up digits in long multiplication typically have the same underlying issue: they do not have a solid sense of what each digit in a number actually represents.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Place value also connects directly to rounding, estimation, and decimal operations — skills that become central in 4th and 5th grade. The <Link href="/grade-3-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>3rd grade worksheets</Link> page covers rounding to the nearest 10 and 100, and the <Link href="/grade-5-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>5th grade worksheets</Link> page covers decimal place value in depth.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              The worksheets here are organized by concept and difficulty, not just by grade, so you can target exactly the place value skill your student needs — whether that is two-digit numbers or decimal hundredths.
            </p>
          </section>

          {/* Progression */}
          <section className="focus-areas" style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Place Value Across Grade Levels
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              How the concept builds from kindergarten through 5th grade
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {progressionLevels.map((level, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                    {level.grade}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Cards */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { icon: '🔢', title: 'Expanded Form', desc: 'Write numbers as the sum of each digit\'s value. Builds direct understanding of what each digit represents.' },
                { icon: '↔️', title: 'Comparing & Ordering', desc: 'Use place value to compare numbers with > < = and order sets of numbers from least to greatest.' },
                { icon: '🎯', title: 'Rounding', desc: 'Round to the nearest 10, 100, or 1,000 using number line understanding before digit-based rules.' }
              ].map((card, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem', height: '3rem', background: 'var(--primary)', color: 'white',
                    borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', fontSize: '1.25rem', margin: '0 auto 1rem'
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Place Value Skills by Topic
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Skills covered across all worksheet levels
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {skills.map((skill, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    {skill.category}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {skill.topics.map((topic, i) => (
                      <li key={i} style={{
                        display: 'flex', alignItems: 'flex-start',
                        marginBottom: '0.75rem', color: 'var(--text-secondary)'
                      }}>
                        <div style={{
                          width: '0.5rem', height: '0.5rem', background: 'var(--primary)',
                          borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem', flexShrink: 0
                        }} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Related Pages */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '2.5rem'
            }}>
              Related Worksheet Pages
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Grade 2 Worksheets', href: '/grade-2-worksheets', desc: 'Place value to hundreds, comparing numbers' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Place value to 1,000, rounding to 10 and 100' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Place value to 1,000,000, multi-digit operations' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Decimal place value, tenths and hundredths' },
                { name: 'Addition Practice', href: '/addition-practice', desc: 'Regrouping builds directly on place value' },
                { name: 'Area & Perimeter', href: '/area-perimeter', desc: 'Measurement work that requires number sense' }
              ].map((item, index) => (
                <Link key={index} href={item.href} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', textDecoration: 'none'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Real questions homeschooling parents ask about place value
            </p>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--primary)', color: 'white',
              borderRadius: '8px', padding: '3rem 2rem', textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
                Build Place Value Confidence Today
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem',
                maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom place value worksheets for exactly the skill and grade level your student needs.
              </p>
              <Link href="/" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Worksheets Now
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginTop: '1rem', marginBottom: 0 }}>
                Free • No registration required • 10 worksheets per day
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
