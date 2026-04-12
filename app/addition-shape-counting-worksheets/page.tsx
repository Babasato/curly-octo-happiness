// app/addition-shape-counting-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shape Counting Addition Worksheets | Free Printable K-1 Math',
  description: 'Free printable shape counting addition worksheets for kindergarten and 1st grade. Count circles, squares, and triangles to add numbers visually. Perfect for early learners.',
  alternates: {
    canonical: 'https://homeschoolmath.site/addition-shape-counting-worksheets',
  },
}

export default function AdditionShapeCountingWorksheets() {
  const faqs = [
    {
      question: 'What is shape counting addition?',
      answer: 'Shape counting addition uses pictures of shapes — circles, squares, triangles, stars — to represent numbers. A problem might show 3 circles plus 4 circles, and the child counts all 7 to find the answer. This connects concrete objects to abstract addition symbols for young learners who are not yet ready to think in pure numbers.'
    },
    {
      question: 'When should I use shape counting worksheets?',
      answer: 'Shape counting is ideal for pre-kindergarten and kindergarten students who are just learning what addition means. Use these worksheets before number lines or abstract facts. Children can see and count physical representations, which builds the mental model that addition means combining two groups into one. If your child is in 1st grade and still needs shapes to add within 5, that is fine — the goal is to phase them out by mid-1st grade.'
    },
    {
      question: 'How is shape counting different from finger counting?',
      answer: 'Shape counting is more structured than finger counting. The shapes are pre-drawn on the page in clear groups, so the child sees the two quantities as separate before combining them. Finger counting often blurs this — children sometimes recount from 1 instead of combining. Shape counting forces the child to see Group A and Group B separately, then count all. This builds the combining concept more reliably than finger counting does.'
    },
    {
      question: 'My child counts shapes correctly but cannot do the same problem without shapes. Is this a problem?',
      answer: 'Not immediately. Shapes are a scaffold — a temporary support — not a destination. The transition from shapes to abstract numbers happens gradually over several months. The concern arises if your child is in late 1st grade and still cannot add small numbers without physical objects. At that point, the issue is likely number sense rather than addition procedure, and targeted work on subitizing (recognizing quantities without counting) is more useful than more shape worksheets.'
    },
    {
      question: 'My child counts shapes correctly but does not understand that this is addition. What is wrong?',
      answer: 'Your child may be counting mechanically without understanding that combining means adding. Try phrasing problems differently: "Here are 3 circles. Here are 4 more circles. How many are there altogether?" The word "altogether" signals combining. Also ask your child to explain their process: "How did you know to count them all?" If they cannot explain, do more concrete work with real objects — blocks, beans, counters — before returning to worksheets.'
    },
    {
      question: 'What comes after shape counting in the addition progression?',
      answer: 'The natural progression is: shape counting → number lines → basic facts. After shape counting, students move to number lines where they represent quantities as positions and jumps rather than drawn objects. Then they build abstract fact recall. Each stage removes one level of concreteness. Do not rush the transition — a child who moves to abstract facts before they have a solid mental model will memorize without understanding, which causes problems later.'
    },
    {
      question: 'How many shapes should be on a single worksheet problem?',
      answer: 'For kindergarten, keep total shape counts at or below 10 — sums of 5 or less for very early learners, up to 10 as they progress. For 1st grade students still using shape counting, sums up to 20 are appropriate. Problems with more than 10 shapes become difficult to count accurately and create counting errors that look like addition errors but are actually visual tracking problems.'
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
      stage: 'Pre-Kindergarten',
      description: 'At this stage, children count shapes one at a time and write the total. They are learning one-to-one correspondence — that each shape gets exactly one count. The common error is double-counting or skipping a shape. Keep problems small: sums within 5. The goal is not speed but accurate counting and the understanding that the total represents all the shapes.'
    },
    {
      stage: 'Kindergarten',
      description: 'Kindergarteners should begin to see the two groups as separate quantities before combining. Instead of counting all from 1, a child who sees 3 circles and 4 circles should be able to hold 3 in mind and count on: 4, 5, 6, 7. This "counting on" strategy is the bridge between shape counting and number line addition. By the end of kindergarten, sums within 10 should be possible without recounting the first group.'
    },
    {
      stage: 'Early First Grade',
      description: 'By early 1st grade, shape counting should be transitioning to mental addition for small numbers. A child who still needs shapes for 2+3 needs more practice. A child who uses shapes as a check on answers they already know is using them correctly. The target for end of 1st grade is automatic recall of sums within 10 — at that point, shape worksheets are no longer needed and number line or abstract fact practice is more appropriate.'
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
              Shape Counting Addition Worksheets
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
              Count Shapes to Understand Addition
            </p>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem',
              maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
            }}>
              Help your child understand what addition means before memorizing facts. Count circles, squares, and triangles to combine groups — the concrete foundation that makes abstract math make sense.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/?grade=kindergarten&topic=addition" style={{
                background: 'var(--primary)', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block'
              }}>
                Generate Shape Counting Worksheets
              </Link>
              <div style={{
                background: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0',
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
              Why Shape Counting Builds the Foundation for All Math
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Before a child can understand that 3+4=7, they need to understand what 3 means, what 4 means, and what combining them means. Shape counting worksheets make this concrete. A child sees 3 circles, then 4 circles, then counts all 7. The concept of addition is right there on the page — visible, countable, not abstract.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Children who skip this stage and go straight to memorizing facts often learn the answers without understanding what they represent. When those facts fail under pressure — on a test, in a new format, in a word problem — they have no backup. A child with solid concrete experience can reconstruct any fact they forget because they understand what addition actually means.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              These worksheets are the first step in a progression: shape counting → number lines → basic facts. For the next steps, explore our{' '}
              <Link href="/addition-number-lines-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>number line worksheets</Link>{' '}
              and{' '}
              <Link href="/addition-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>.
            </p>
          </section>

          {/* Progression */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              What Mastery Looks Like at Each Stage
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              How shape counting develops from pre-K through early 1st grade
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

          {/* Shapes We Use */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Shapes Used in These Worksheets
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Familiar, easy-to-count shapes that young children can distinguish quickly
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { shape: '●', name: 'Circles', why: 'No corners to confuse. The most universally recognizable shape for young children. Easy to draw when children create their own problems.' },
                { shape: '■', name: 'Squares', why: 'Clear edges make each shape distinct even when placed close together. Good for children who lose track of circles in a row.' },
                { shape: '▲', name: 'Triangles', why: 'Adds variety while remaining simple. Slightly harder to count quickly, which builds attention and careful tracking.' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{item.shape}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Progression Steps */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
                textAlign: 'center', marginBottom: '2rem'
              }}>
                From Counting Shapes to Abstract Addition
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  { step: '1', title: 'Count All', desc: 'Count every shape from 1. Build one-to-one correspondence and the concept of combining.' },
                  { step: '2', title: 'Count On', desc: 'Hold the first group in mind, count on from there. "3 circles... 4, 5, 6, 7." Reduces counting load.' },
                  { step: '3', title: 'Recognize Groups', desc: 'See 3 circles and 4 circles without counting. Subitizing — instant recognition — replaces counting.' },
                  { step: '4', title: 'Abstract Facts', desc: 'Move to number lines and written facts. Shape counting is no longer needed.' }
                ].map((item, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{
                      background: 'var(--primary)', color: 'white', width: '3rem', height: '3rem',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem', fontWeight: '700', margin: '0 auto 1rem'
                    }}>{item.step}</div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
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
                When Shape Counting Is Not Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For some children, counting shapes correctly does not automatically translate to number sense. If your child can count 3 circles and 4 circles and get 7, but cannot tell you that 3+4=7 without the shapes — or cannot hold the first group in mind while counting on — the underlying issue is early number sense, not addition procedure. Our <strong>Number Sense Foundations</strong> course (K–2) builds subitizing, number sense, and the mental models that make addition intuitive. You can also browse all available courses on the{' '}
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
              Next Steps After Shape Counting
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Number Line Addition', href: '/addition-number-lines-worksheets', desc: 'The next step — represent quantities as positions and jumps instead of drawn objects' },
                { name: 'Basic Addition Facts', href: '/addition-basic-facts-worksheets', desc: 'Abstract fact recall — the goal that shape counting builds toward' },
                { name: 'Kindergarten Worksheets', href: '/kindergarten-worksheets', desc: 'Full overview of kindergarten math including counting, addition, and subtraction' },
                { name: 'Grade 1 Worksheets', href: '/grade-1-worksheets', desc: 'Where shape counting transitions to number lines and abstract facts' }
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
              Real questions parents ask about shape counting addition
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
                Start Building Addition Understanding Today
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem',
                maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom shape counting worksheets for pre-K and kindergarten. Build the concrete foundation that makes abstract math make sense.
              </p>
              <Link href="/?grade=kindergarten&topic=addition" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Shape Counting Worksheets Now
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