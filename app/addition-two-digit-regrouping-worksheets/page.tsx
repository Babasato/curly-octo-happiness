// app/addition-two-digit-regrouping-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Two-Digit Addition With Regrouping Worksheets | Free Printable 3-4 Grade Math',
  description: 'Free printable two-digit addition with regrouping worksheets for 3rd and 4th grade. Practice carrying tens from ones column. Includes step-by-step examples.',
  alternates: {
    canonical: 'https://homeschoolmath.site/addition-two-digit-regrouping-worksheets',
  },
}

export default function AdditionTwoDigitRegroupingWorksheets() {
  const faqs = [
    {
      question: 'What is two-digit addition with regrouping?',
      answer: 'Two-digit addition with regrouping — also called carrying — happens when the sum of the ones column is 10 or more. For example: 28+35. Add the ones: 8+5=13. Write the 3 in the ones place and carry the 1 ten to the tens column. Then add the tens: 2+3+1=6. The answer is 63. Regrouping is the critical multi-step procedure that extends column addition beyond the simplest cases.'
    },
    {
      question: 'When should my child learn regrouping?',
      answer: 'Most children are ready for regrouping in late 2nd grade or early 3rd grade, after two conditions are met: they can add any two no-regrouping two-digit numbers quickly and accurately, and they understand place value well enough to explain why carrying a 1 to the tens column means carrying one ten, not one one. Children who are rushed into regrouping before these conditions are met almost always develop persistent errors that take longer to undo than the time saved by starting early.'
    },
    {
      question: 'Why is regrouping so hard for some children?',
      answer: 'Regrouping is hard because it requires holding multiple things in working memory simultaneously: the sum of the ones column, the digit to write, the digit to carry, and the tens column sum including the carried digit. Any gap in basic fact fluency — if your child is still calculating rather than retrieving basic facts — leaves no working memory available for the carrying procedure. The most effective fix is almost always to strengthen basic facts first, then return to regrouping.'
    },
    {
      question: 'My child keeps forgetting to add the carried digit. How do I fix this?',
      answer: 'This is the most common regrouping error. Three specific fixes work well. First, have your child write the carried digit clearly above the tens column before touching the tens addition — it must be physically on the paper before they add. Second, teach a verbal script: "8+5=13. Write the 3. Carry the 1. Now tens: 2+3+1=6." Third, after finishing a problem, have your child check whether any carrying was needed and verify they included it. The check step catches the majority of carried-digit omissions.'
    },
    {
      question: 'My child carries when they do not need to. How do I fix this?',
      answer: 'This happens when children carry by habit rather than by checking the ones sum. Teach an explicit decision rule: "If the ones sum is 9 or less, write it and move on. If the ones sum is 10 or more, write the ones digit and carry the tens digit." Have your child say this check aloud for every problem until it is automatic. Mixing no-regrouping and regrouping problems in the same worksheet — rather than blocking all regrouping problems together — also forces the check habit.'
    },
    {
      question: 'Should I teach regrouping conceptually or procedurally first?',
      answer: 'Conceptually first, always. A child who understands why carrying works — because 10 ones become 1 ten, and that ten belongs in the tens column — can recover from errors and self-correct. A child who only knows the procedure will repeat the same errors without being able to diagnose them. Spend one or two lessons using base-ten blocks or drawings to show what physically happens when you carry before introducing the written procedure. This investment pays back quickly.'
    },
    {
      question: 'How does regrouping in addition connect to borrowing in subtraction?',
      answer: 'They are the same concept in opposite directions. In addition regrouping, 10 ones become 1 ten and move to the tens column. In subtraction borrowing, 1 ten becomes 10 ones and moves to the ones column. Children who understand addition regrouping conceptually — not just procedurally — transfer to subtraction borrowing much more quickly. This is one of the strongest arguments for teaching regrouping with understanding rather than as a memorized procedure.'
    },
    {
      question: 'What comes after two-digit addition with regrouping?',
      answer: 'Three-digit addition with regrouping, which applies the same carrying procedure to problems with hundreds, tens, and ones columns. The only new complexity is that carrying can happen from the ones to the tens and again from the tens to the hundreds. Children who have genuinely understood two-digit regrouping — not just memorized the procedure — handle three-digit regrouping with minimal instruction.'
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

  const progressionLevels = [
    {
      stage: 'Before Regrouping — Check Prerequisites',
      description: 'Two things must be solid before regrouping: automatic basic fact recall (if your child calculates 8+5 rather than retrieving it, carrying will overload their working memory) and fluent no-regrouping two-digit addition (the column structure must be automatic before adding the carrying step). Give your child ten no-regrouping problems and time them. Under 2 minutes with no errors means they are ready. Slower or with errors means more no-regrouping practice is needed first.'
    },
    {
      stage: 'Introducing Regrouping — Concept Before Procedure',
      description: 'Before any written procedure, use base-ten blocks or drawings to show what physically happens when you carry. Add 28+35 with blocks: build 28 (2 tens rods and 8 unit cubes) and 35 (3 tens rods and 5 unit cubes). Combine the unit cubes: 13 cubes. Group 10 cubes into a tens rod and carry it to the tens column. Now count: 6 tens rods and 3 unit cubes — 63. Do this physically for 3-4 problems before introducing the written shorthand. Children who see the physical regrouping understand the procedure immediately.'
    },
    {
      stage: 'Practicing Regrouping — Mixed Problems Are Essential',
      description: 'Once the procedure is introduced, mix regrouping and no-regrouping problems in every session. This is critical. Children who practice only regrouping problems learn to carry automatically without checking whether carrying is needed. The habit of checking the ones sum — and carrying only when it exceeds 9 — only develops through mixed practice. A student who can do a page of regrouping problems but carries unnecessarily on no-regrouping problems has not yet mastered the skill.'
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
              Two-Digit Addition With Regrouping Worksheets
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
              Master Carrying — The Gateway to Multi-Digit Arithmetic
            </p>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem',
              maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
            }}>
              Build a genuine understanding of why carrying works — not just the procedure — so regrouping becomes automatic and transfers cleanly to three-digit numbers and beyond.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/?grade=third&topic=addition" style={{
                background: 'var(--primary)', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block'
              }}>
                Generate Regrouping Addition Worksheets
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
              Why Regrouping Is the Most Important Procedure in Early Arithmetic
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Regrouping is the first multi-step arithmetic procedure children learn, and it requires place value understanding, basic fact fluency, and working memory management all at once. A child who can regroup reliably has demonstrated something more than addition skill — they have shown they can execute a multi-step procedure accurately under cognitive load. That capability transfers directly to subtraction with borrowing, long multiplication, and long division.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              If your child needs more practice before regrouping, start with our{' '}
              <Link href="/addition-two-digit-no-regrouping-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>two-digit addition without regrouping worksheets</Link>{' '}
              to build the column structure first. For the basic fact fluency that makes regrouping manageable, see our{' '}
              <Link href="/addition-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>.
            </p>
          </section>

          {/* Progression */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              How to Teach Regrouping Correctly
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Prerequisites, introduction, and the practice approach that actually builds mastery
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
                    {level.stage}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4 Steps */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              How to Add with Regrouping — Step by Step
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Teach this 4-step script and have your child say it aloud for every problem
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Add the Ones', desc: 'Add the ones column. Say the sum aloud. Is it 9 or less? Write it and move on. Is it 10 or more? You need to carry.' },
                { step: '2', title: 'Write the Ones Digit', desc: 'Write only the ones digit of the sum in the ones column. Example: ones sum is 13 — write 3 in the ones place.' },
                { step: '3', title: 'Carry the Tens Digit', desc: 'Write the tens digit of the ones sum above the tens column — physically on the paper — before doing anything else. Example: ones sum is 13 — write 1 above the tens column.' },
                { step: '4', title: 'Add the Tens', desc: 'Add all three digits in the tens column: the two original tens digits plus the carried digit. Write the sum below the tens column.' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem', height: '3rem', background: 'var(--primary)', color: 'white',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', fontWeight: '700', margin: '0 auto 1rem'
                  }}>{item.step}</div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Worked Example */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)',
                textAlign: 'center', marginBottom: '1.5rem'
              }}>
                Worked Example: 28 + 35
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '2rem', lineHeight: '1.8', textAlign: 'right' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '1rem', textAlign: 'right', paddingRight: '0.5rem' }}>carry: 1</div>
                  <div>2 8</div>
                  <div>+ 3 5</div>
                  <div style={{ borderTop: '2px solid var(--text-primary)', paddingTop: '0.25rem', color: 'var(--primary)', fontWeight: 'bold' }}>6 3</div>
                </div>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem', textAlign: 'center'
              }}>
                {[
                  { label: 'Step 1', text: '8 + 5 = 13' },
                  { label: 'Step 2', text: 'Write 3 in ones place' },
                  { label: 'Step 3', text: 'Write 1 above tens column' },
                  { label: 'Step 4', text: '2 + 3 + 1 = 6 in tens place' },
                  { label: 'Answer', text: '63' }
                ].map((item, index) => (
                  <div key={index} style={{ padding: '0.75rem', background: 'var(--background)', borderRadius: '6px' }}>
                    <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.label}</div>
                    <div style={{ color: 'var(--text-primary)' }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Errors */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Common Regrouping Errors and Their Fixes
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { error: 'Forgetting to add the carried digit', fix: 'Write the carried digit above the tens column before adding the tens. Make it a rule: carry is written before tens are added, every time.' },
                  { error: 'Carrying when the ones sum is less than 10', fix: 'Teach the check: "Is the ones sum 10 or more?" Say it aloud for every problem. Mix no-regrouping and regrouping problems so the check becomes habitual.' },
                  { error: 'Writing both digits of the ones sum in the ones place', fix: 'Remind your child that only the ones digit of the sum belongs in the ones place. Practice with the verbal script: "13 — the 3 goes here, the 1 goes up there."' },
                  { error: 'Misaligning the carried digit', fix: 'The carried digit must sit directly above the tens column — not between columns, not above the ones. Use worksheets with a dedicated small box above the tens column for the carried digit.' }
                ].map((item, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      ✗ {item.error}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <strong>Fix:</strong> {item.fix}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Course Mention */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)', borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{ fontSize: '1.375rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                When Regrouping Errors Keep Recurring
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Persistent regrouping errors despite repeated practice almost always point to one of two underlying issues: basic fact fluency gaps that leave no working memory for the procedure, or place value understanding that is not yet solid enough to make carrying meaningful. Our <strong>Number Sense Foundations</strong> course (K–2) addresses place value at the conceptual level. You can also browse all available courses and planners on the{' '}
                <Link href="/resources" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/mfikwi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', background: 'var(--primary)', color: 'white',
                  padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: '600',
                  textDecoration: 'none', fontSize: '0.95rem'
                }}
              >
                View Number Sense Foundations — $57
              </a>
            </div>
          </section>

          {/* Back Link */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Link href="/addition-practice" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '1rem' }}>
              ← Back to Addition Practice Hub
            </Link>
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
                { name: 'Two-Digit Without Regrouping', href: '/addition-two-digit-no-regrouping-worksheets', desc: 'The prerequisite — column structure must be automatic before carrying is introduced' },
                { name: 'Basic Addition Facts', href: '/addition-basic-facts-worksheets', desc: 'Fact fluency needed to free working memory for the carrying procedure' },
                { name: 'Addition Word Problems', href: '/addition-word-problems-worksheets', desc: 'Apply regrouping addition in real-world contexts' },
                { name: 'Subtraction Practice', href: '/subtraction-practice', desc: 'Borrowing in subtraction is the inverse of carrying in addition' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade overview — where regrouping is consolidated' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Where regrouping extends to three and four-digit numbers' }
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
              Real questions parents ask about two-digit addition with regrouping
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
                Master Carrying Today
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem',
                maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom two-digit addition with regrouping worksheets. Build the carrying procedure that extends to all multi-digit arithmetic.
              </p>
              <Link href="/?grade=third&topic=addition" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Regrouping Worksheets Now
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