// app/addition-two-digit-no-regrouping-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Two-Digit Addition No Regrouping Worksheets | Free Printable 2-3 Grade Math',
  description: 'Free printable two-digit addition without regrouping worksheets for 2nd and 3rd grade. Practice adding tens and ones with correct place value alignment.',
  alternates: {
    canonical: 'https://homeschoolmath.site/addition-two-digit-no-regrouping-worksheets',
  },
}

export default function AdditionTwoDigitNoRegroupingWorksheets() {
  const faqs = [
    {
      question: 'What is two-digit addition without regrouping?',
      answer: 'Two-digit addition without regrouping — also called no-carrying addition — means the sum of the ones column is less than 10, so no carrying to the tens column is needed. For example, 23+41=64. Add the ones: 3+1=4. Add the tens: 2+4=6. Result: 64. These problems let children practice the structure of column addition — tens under tens, ones under ones — without the added complexity of carrying.'
    },
    {
      question: 'When should my child start two-digit addition?',
      answer: 'Most children are ready for two-digit addition without regrouping in 2nd grade, after two conditions are met: they have automatic recall of basic addition facts within 20, and they understand place value well enough to explain that the "3" in 34 means 3 tens, not 3 ones. If either condition is not met, two-digit addition will feel confusing and errors will be frequent. Shoring up facts and place value first makes two-digit addition quick to learn.'
    },
    {
      question: 'Why do we teach no-regrouping problems before regrouping?',
      answer: 'No-regrouping problems let children focus on one new skill at a time: place value alignment and column addition. When your child adds 23+41, they practice writing tens under tens and ones under ones, and adding each column independently — without the added step of carrying. Once this structure is automatic, regrouping adds only one additional step to a procedure they already know well. Introducing regrouping before the structure is solid creates confusion about both.'
    },
    {
      question: 'My child keeps misaligning digits. How do I fix this?',
      answer: 'Column misalignment is the most common error in two-digit addition and almost always comes from not understanding place value. Two fixes work well together: first, use graph paper or worksheets with pre-drawn columns so each digit has a physical box. Second, have your child say the place values aloud before writing: "34 has 3 tens and 4 ones. 21 has 2 tens and 1 one. Tens go in the tens column, ones go in the ones column." Verbalizing the place value builds the habit that prevents misalignment.'
    },
    {
      question: 'How do I know my child is ready to move to regrouping?',
      answer: 'Your child is ready for regrouping when they can add any two-digit numbers without regrouping quickly and accurately — without needing to think about which digit goes where. Speed matters here: if column alignment is still slow or effortful, the added complexity of carrying will overload working memory. A child who adds 47+32 as fast as they add 5+3 is ready for regrouping. A child who is still counting digits or asking where to write the answer is not.'
    },
    {
      question: 'Should two-digit addition be practiced vertically or horizontally?',
      answer: 'Both formats matter, but for different reasons. Vertical format (column addition) is the standard written method and is where children learn the alignment procedure. Horizontal format (47+32=?) tests whether the child can set up the problem themselves, which is a separate skill. Start with vertical practice until the column method is solid, then introduce horizontal problems where the child rewrites the problem vertically before solving. Children who can only do vertical format will struggle when addition appears inside equations and word problems.'
    },
    {
      question: 'What comes right before and right after this skill in the addition progression?',
      answer: 'Right before: automatic basic fact recall and a solid understanding of place value (tens and ones). A child without these will make errors that look like two-digit addition errors but are actually basic fact or place value gaps. Right after: two-digit addition with regrouping, which adds the carrying step to the column procedure your child already knows. The transition to regrouping should happen when no-regrouping problems are fully automatic — typically within a few weeks of starting two-digit work in 2nd grade.'
    },
    {
      question: 'Do word problems help with two-digit addition?',
      answer: 'Yes, and they should run alongside computation practice from the start. A child who can add 34+25 in column format but cannot recognize that a word problem requires that calculation has learned a procedure without understanding when to use it. Our addition word problems worksheets include two-digit addition scenarios at the appropriate grade level and pair well with no-regrouping computation practice.'
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
      stage: 'Before Two-Digit Addition — Prerequisites',
      description: 'Two conditions must be in place before two-digit addition will make sense. First: automatic basic fact recall. If your child is still calculating 6+3 rather than retrieving it, multi-digit addition will overload their working memory before they even get to the column procedure. Second: solid place value understanding — your child should be able to tell you what each digit in a two-digit number represents without hesitation. These are not negotiable prerequisites; they are the difference between a child who picks up two-digit addition in a week and one who struggles for months.'
    },
    {
      stage: 'Beginning Two-Digit (No Regrouping)',
      description: 'Start with vertical format using pre-drawn columns or graph paper. The first goal is alignment: tens under tens, ones under ones. Do not rush to addition yet — spend a lesson just writing two-digit numbers in the correct columns without adding. Then introduce addition of each column separately. Problems where both columns sum to 5 or less are easiest; work up to problems where the ones sum to 9. Expect 1-2 weeks of daily practice before the structure feels natural.'
    },
    {
      stage: 'Consolidating No-Regrouping Before Moving On',
      description: 'Before introducing regrouping, your child should add any two no-regrouping two-digit numbers correctly and quickly — without thinking about alignment. The test: give 10 random no-regrouping problems and time them. If your child finishes in under 3 minutes with no errors, they are ready for regrouping. If they are slower or make alignment errors, more no-regrouping practice is the right intervention rather than pushing forward.'
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
              Two-Digit Addition Without Regrouping Worksheets
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
              Master Column Addition Before Carrying
            </p>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem',
              maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
            }}>
              Build the place value alignment and column addition skills that make regrouping easy to learn. Perfect for 2nd and 3rd grade students making the move to multi-digit arithmetic.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/?grade=second&topic=addition" style={{
                background: 'var(--primary)', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block'
              }}>
                Generate Two-Digit Addition Worksheets
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
              Why No-Regrouping Problems Are Not Just Easy Regrouping Problems
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              No-regrouping two-digit addition is often treated as a stepping stone to rush through. It is actually where children build the structural understanding that makes all multi-digit arithmetic work. Tens under tens, ones under ones — this alignment principle is the same whether you are adding two-digit numbers, three-digit numbers, or decimals. A child who has internalized it at the two-digit level transfers it automatically. A child who was rushed through it keeps making alignment errors for years.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              These worksheets build column alignment and two-column addition as separate, solid skills. When your child is ready to add with carrying, see our{' '}
              <Link href="/addition-two-digit-regrouping-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>two-digit addition with regrouping worksheets</Link>.
              For the prerequisite skills, see our{' '}
              <Link href="/addition-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>{' '}
              and the{' '}
              <Link href="/place-value" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>place value page</Link>.
            </p>
          </section>

          {/* Progression */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              How to Teach Two-Digit Addition Progressively
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              What needs to be in place, what to teach first, and when to move on
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

          {/* 3 Steps */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              How to Add Two-Digit Numbers Without Regrouping
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Three steps — teach this script and have your child say it aloud
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Line Up the Numbers', desc: 'Write the numbers in a column. Tens digit under tens digit, ones digit under ones digit. Say aloud: "34 has 3 tens and 4 ones. 21 has 2 tens and 1 one."' },
                { step: '2', title: 'Add the Ones First', desc: 'Add the ones column. Write the sum directly below the ones column. Check: is the sum less than 10? If yes, write it and move on. (If 10 or more, you need regrouping — that is a different worksheet.)' },
                { step: '3', title: 'Add the Tens', desc: 'Add the tens column. Write the sum directly below the tens column. Read the full answer: "3 tens and 5 ones — thirty-five." Reading the answer aloud confirms the result makes sense.' }
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
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Course Mention */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)', borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{ fontSize: '1.375rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                When Alignment Errors Keep Coming Back
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child continues to misalign columns despite practice, the root cause is almost always place value understanding — they do not yet have an internalized sense of what tens and ones mean. Our <strong>Number Sense Foundations</strong> course (K–2) includes systematic place value instruction that resolves this at the conceptual level rather than through procedural drilling. You can also browse all available courses and planners on the{' '}
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
                { name: 'Basic Addition Facts', href: '/addition-basic-facts-worksheets', desc: 'The prerequisite — automatic fact recall before two-digit work begins' },
                { name: 'Place Value', href: '/place-value', desc: 'The other prerequisite — understanding what each digit represents' },
                { name: 'Two-Digit With Regrouping', href: '/addition-two-digit-regrouping-worksheets', desc: 'The next step after no-regrouping is fully automatic' },
                { name: 'Addition Word Problems', href: '/addition-word-problems-worksheets', desc: 'Apply two-digit addition in real-world contexts' },
                { name: 'Grade 2 Worksheets', href: '/grade-2-worksheets', desc: 'Full 2nd grade math overview — where two-digit addition is the main focus' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Where two-digit fluency is consolidated and three-digit work begins' }
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
              Real questions parents ask about two-digit addition without regrouping
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
                Build Two-Digit Addition Confidence Today
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem',
                maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom two-digit addition worksheets without regrouping. Build the column addition structure that makes regrouping straightforward when it arrives.
              </p>
              <Link href="/?grade=second&topic=addition" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Two-Digit Addition Worksheets Now
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