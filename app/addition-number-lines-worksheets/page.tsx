// app/addition-number-lines-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Number Line Addition Worksheets | Free Printable K-2 Math Practice',
  description: 'Free printable number line addition worksheets for K-2. Practice addition by jumping forward on number lines. Perfect for visual learners building conceptual understanding.',
  alternates: {
    canonical: 'https://homeschoolmath.site/addition-number-lines-worksheets',
  },
}

export default function AdditionNumberLinesWorksheets() {
  const faqs = [
    {
      question: 'What is number line addition?',
      answer: 'Number line addition is a visual strategy where children start at the first number and jump forward the value of the second number. For 5+3, start at 5, jump forward 3 spaces, and land on 8. This makes addition visible — children can see that adding means moving forward, and the distance of the jump equals the number being added.'
    },
    {
      question: 'When should I introduce number line addition?',
      answer: 'Number lines are ideal for kindergarten and 1st grade, after children can count reliably but before they have memorized facts. The number line bridges the gap between counting physical objects (shapes, fingers) and abstract number recall. A child who can use a number line to add has a mental model of what addition means — that foundation supports fact fluency later.'
    },
    {
      question: 'What is the difference between a number line and a number path?',
      answer: 'A number line shows numbers at proportionally spaced points on a continuous line. A number path uses equal-sized boxes or squares for each number. For K-1 students, a number path is often easier because they can count the boxes like stepping stones. Our worksheets use clear, child-friendly formats appropriate for the grade level — labeled paths for beginners, standard number lines as students progress.'
    },
    {
      question: 'My child can use a number line but freezes without one. Is this a problem?',
      answer: 'Not at first — the number line is a scaffold, not a destination. The goal is a gradual transition from number line to mental math. Start by having your child predict the answer before using the number line, then check with it. Over weeks, reduce reliance by using shorter number lines, then unlabeled lines, then no line at all. This transition should happen naturally through 1st grade. If a child in late 1st grade still cannot add single-digit numbers without a number line, targeted fact fluency work is needed.'
    },
    {
      question: 'Should I use number lines for subtraction too?',
      answer: 'Yes — and the consistency is a major benefit. The same number line works for subtraction by jumping backward instead of forward. For 9-4, start at 9 and jump back 4 to land on 5. Using the same tool for both operations helps children see addition and subtraction as related rather than separate subjects. This inverse relationship is foundational for fact families and later algebra.'
    },
    {
      question: 'How do I help my child transition from number lines to mental math?',
      answer: 'The transition happens in stages. First, have your child use the number line but say the answer aloud before marking the jumps — this builds mental rehearsal. Then introduce partially labeled number lines where they must fill in missing numbers. Then use blank number lines where they draw their own marks. Finally, remove the number line entirely for facts within 10 and only allow it for larger sums. The whole transition typically takes 2-4 months in 1st grade.'
    },
    {
      question: 'What number range should number line worksheets cover?',
      answer: 'For kindergarten, number lines from 0 to 10 are appropriate — sums within 10. For 1st grade, extend to 0-20 as children master smaller sums. For 2nd grade students still using number lines as a scaffold, 0-100 number lines with intervals of 10 help with two-digit addition. As the number range increases, the number line becomes less about counting individual jumps and more about estimating position — a different but equally valuable skill.'
    },
    {
      question: 'My child counts backward from the larger number instead of jumping forward from the first number. Is this wrong?',
      answer: 'Counting on from the larger number — regardless of which is written first — is actually a sign of good mathematical thinking. A child who computes 3+7 by starting at 7 and jumping 3 (instead of starting at 3 and jumping 7) has understood the commutative property intuitively. This strategy reduces the number of jumps needed and is worth encouraging, not correcting.'
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
      stage: 'Kindergarten — Labeled Number Paths (0–10)',
      description: 'Start with fully labeled number paths — every number shown, boxes large enough to place a finger on. The child locates the first number, counts forward one box at a time, and reads the answer. The most common error is counting the starting number as the first jump (landing one short). Teach explicitly: "Put your finger on 5. Now jump — 6, 7, 8. Where did you land?" By end of kindergarten, children should reliably add within 10 using a labeled path.'
    },
    {
      stage: 'First Grade — Standard Number Lines (0–20)',
      description: 'Move from number paths to standard number lines with tick marks and labels. Introduce the arc-drawing convention: draw a curved arc above each jump so the work is visible. This is important for multi-jump problems and helps parents identify where errors occurred. By mid-1st grade, children should be moving from counting every jump to counting on from the larger number. By end of 1st grade, number lines should be transitioning to a check tool rather than the primary method.'
    },
    {
      stage: 'Second Grade — Transitional and Open Number Lines',
      description: 'For 2nd graders still developing fluency, open number lines (blank lines where children place their own numbers) build estimation and number sense alongside addition. A child who can place 47 and 35 on a blank number line and jump to find their sum has genuinely internalized what those numbers represent. Open number lines also support two-digit addition more efficiently than trying to count 47 individual tick marks.'
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
              Number Line Addition Worksheets
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
              Visual Addition by Jumping Forward
            </p>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem',
              maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
            }}>
              Build a mental model of addition before memorizing facts. Number lines make addition visible — children can see what combining numbers means before they are asked to do it abstractly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/?grade=kindergarten&topic=addition" style={{
                background: 'var(--primary)', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block'
              }}>
                Generate Number Line Addition Worksheets
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
              Why Number Lines Make Addition Click
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              For many young children, addition feels abstract. You say "3 plus 4 equals 7" and they nod — but do they understand what that means? A number line makes the answer visible. A child who starts at 3 and takes 4 jumps forward to land on 7 has experienced addition, not just memorized a fact. That experience builds a mental model that supports fact retrieval for years.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Number lines also make addition and subtraction obviously related — addition jumps forward, subtraction jumps backward. Children who learn both operations on the same tool develop a sense of their inverse relationship early, which pays off when fact families and algebra arrive. For students who are still building the concrete foundation, our{' '}
              <Link href="/addition-shape-counting-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>shape counting worksheets</Link>{' '}
              are the right starting point before number lines.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              For students ready to move beyond number lines to abstract fact recall, our{' '}
              <Link href="/addition-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>{' '}
              are the natural next step.
            </p>
          </section>

          {/* Progression */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              How Number Line Practice Develops by Grade
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              What to use at each stage, what to watch for, and when to move on
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

          {/* How To Steps */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              How to Use a Number Line for Addition
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Teach this process once — it works for any addition problem
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Find the Starting Number', desc: 'Locate the first number on the number line. Place your finger or a counter on that point. This is where you start — do not count it as a jump.' },
                { step: '2', title: 'Jump Forward', desc: 'Jump forward the number of spaces equal to the second number. Count each jump out loud: "one, two, three." Draw an arc above each jump to show your work.' },
                { step: '3', title: 'Read the Answer', desc: 'Where you land is the sum. Write that number in the answer box. Check: did you start at the right number? Did you make the right number of jumps?' }
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

          {/* Worksheet Types */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)',
                textAlign: 'center', marginBottom: '1.5rem'
              }}>
                Three Types of Number Line Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Fully Labeled',
                    who: 'Kindergarten beginners',
                    desc: 'Every number shown on the line. The child focuses entirely on the jumping process without needing to locate unlabeled points. Use until the jumping process is automatic.'
                  },
                  {
                    title: 'Partially Labeled',
                    who: 'Late kindergarten and 1st grade',
                    desc: 'Only some numbers shown — typically multiples of 2 or 5. The child must locate intermediate points, which builds number sense alongside addition practice.'
                  },
                  {
                    title: 'Open Number Line',
                    who: '1st and 2nd grade',
                    desc: 'No numbers pre-printed. The child places their own starting point and marks their own jumps. Builds estimation, flexibility, and genuine understanding of number relationships.'
                  }
                ].map((type, index) => (
                  <div key={index} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {type.title}
                    </h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {type.who}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, fontSize: '0.9rem' }}>
                      {type.desc}
                    </p>
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
                When Visual Practice Is Not Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For some children, number sense does not develop automatically through practice. If your child is in late 1st grade and still cannot add small numbers without a number line — or cannot count on from the larger number without recounting from 1 — the underlying issue is early number sense, not addition procedure. Our <strong>Number Sense Foundations</strong> course (K–2) builds subitizing, counting on, and number relationships step by step. You can also browse all courses and planners on the{' '}
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
                { name: 'Shape Counting Addition', href: '/addition-shape-counting-worksheets', desc: 'The step before number lines — build the concrete concept of combining' },
                { name: 'Basic Addition Facts', href: '/addition-basic-facts-worksheets', desc: 'The step after number lines — build automatic recall of sums' },
                { name: 'Addition Word Problems', href: '/addition-word-problems-worksheets', desc: 'Apply addition in real-world contexts alongside number line practice' },
                { name: 'Kindergarten Worksheets', href: '/kindergarten-worksheets', desc: 'Full kindergarten math overview including number line foundations' },
                { name: 'Grade 1 Worksheets', href: '/grade-1-worksheets', desc: 'Where number line addition transitions to abstract facts' },
                { name: 'Subtraction Practice', href: '/subtraction-practice', desc: 'Use the same number line jumping backward for subtraction' }
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
              Real questions parents ask about number line addition
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
                Make Addition Visual Today
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem',
                maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom number line addition worksheets. Choose your number range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <Link href="/?grade=kindergarten&topic=addition" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Number Line Worksheets Now
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