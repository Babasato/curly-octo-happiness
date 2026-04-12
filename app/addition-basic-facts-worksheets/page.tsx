// app/addition-basic-facts-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basic Addition Facts Worksheets | Free Printable K-2 Math Practice',
  description: 'Free printable basic addition facts worksheets for K-2. Practice sums within 10, 15, and 20 with horizontal and vertical formats. Perfect for building fact fluency.',
  alternates: {
    canonical: 'https://homeschoolmath.site/addition-basic-facts-worksheets',
  },
}

export default function AdditionBasicFactsWorksheets() {
  const faqs = [
    {
      question: 'What are basic addition facts?',
      answer: 'Basic addition facts are sums of two single-digit numbers — every combination from 0+0 through 9+9. There are 100 facts in total. A child who has mastered basic facts can recall any of them instantly without counting, drawing, or pausing. This automaticity is what makes all later arithmetic manageable — when basic facts are effortless, working memory is free for the rest of the problem.'
    },
    {
      question: 'When should my child have all basic addition facts memorized?',
      answer: 'Most children master sums within 10 by the end of kindergarten and sums within 20 by the end of 1st grade. By 2nd grade, all basic addition facts (0+0 through 9+9) should be automatic — retrieved in under 3 seconds without hesitation. If your child is in 2nd grade or above and still counting on fingers for single-digit addition, fact fluency work should take priority over new topics.'
    },
    {
      question: 'What order should I teach basic addition facts?',
      answer: 'Start with +0 and +1 facts — these are trivial and build confidence. Then teach doubles (1+1, 2+2, up to 9+9) because they are highly memorable anchor points. Then near-doubles (6+7 as one more than 6+6). Then making-ten facts (8+2, 7+3, 6+4) because they connect to place value. Save the hardest facts — 6+7, 6+8, 7+8 — for last, after the easier facts are solid. Never teach all facts simultaneously in sequential order.'
    },
    {
      question: 'How many basic facts should my child practice daily?',
      answer: '20-30 problems per session is the effective range. Practice should be short and daily — 10 to 15 minutes every day beats one long session per week. The session should end before attention drops, because fatigued practice reinforces errors rather than facts. The key variable is not quantity but randomness — facts must be practiced in mixed order, not sequentially, so retrieval is direct rather than chant-dependent.'
    },
    {
      question: 'My child knows facts in sequence but freezes on random quizzes. What is the problem?',
      answer: 'This is called sequential dependency. Your child has memorized the facts as part of a chant — "2, 4, 6, 8, 10" — rather than as individual retrievable items. When a fact appears out of sequence, the chant does not help and the child must reconstruct the answer. The fix is exclusive practice in random order. Our worksheets mix facts across all combinations so your child must retrieve each fact directly rather than reciting a sequence.'
    },
    {
      question: 'Should I use timed tests for basic fact practice?',
      answer: 'Timed tests are useful only after accuracy is already high — never before. If your child answers 90% or more of facts correctly but slowly, timed drills will build speed. If accuracy is below 90%, timed tests will create anxiety and reinforce errors. The correct sequence is: understanding first, accuracy second, speed third. Many parents skip to speed too early and create math anxiety that takes longer to undo than the fluency gap would have.'
    },
    {
      question: 'What is the difference between fact fluency and fact understanding?',
      answer: 'Understanding means a child can explain why 8+5=13 — they can show it on a number line, decompose 8+5 as 8+2+3, or demonstrate it with objects. Fluency means they can retrieve 8+5=13 instantly without any of that. Both matter and neither replaces the other. Understanding should come first and fluency is built on top of it. A child with fluency but no understanding will hit a wall when addition becomes more complex. A child with understanding but no fluency will be slow and error-prone under timed or multi-step conditions.'
    },
    {
      question: 'What strategies help children learn the harder facts like 7+8 and 6+9?',
      answer: 'The most effective strategies for hard facts are derived facts — using a known fact to reach an unknown one. For 7+8: "I know 7+7=14, so 7+8 is one more — 15." For 6+9: "I know 6+10=16, so 6+9 is one less — 15." These strategies give children a reliable backup when direct retrieval fails, and the practice of using them actually accelerates direct retrieval over time. Rote drilling without strategies produces slower and more fragile memorization.'
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
      stage: 'Kindergarten — Sums Within 10',
      description: 'A kindergartener working toward fact fluency should first have sums within 5 automatic, then extend to sums within 10. The goal by end of kindergarten is not full memorization but reliable accuracy — your child should be able to find any sum within 10 without physical objects, even if they still count on mentally. The shift from counting physical objects to counting mentally is the key kindergarten milestone.'
    },
    {
      stage: 'First Grade — Sums Within 20',
      description: 'By mid-1st grade, sums within 10 should be automatic. The second half of 1st grade focuses on extending to sums within 20 — particularly the bridging-ten facts like 8+5 (which require going past 10). The most common 1st grade gap is children who have sums within 10 memorized but reconstruct sums within 20 from scratch every time. Daily random-order practice of the 11-20 range specifically closes this gap.'
    },
    {
      stage: 'Second Grade — Full Automaticity (0+0 through 9+9)',
      description: 'By the end of 2nd grade, all 100 basic addition facts should be automatic — retrieved in under 3 seconds in any format. This is the benchmark. A 2nd grader who still counts fingers for 7+6 needs targeted remediation before multi-digit addition and multiplication are introduced, because both depend entirely on basic fact fluency as a sub-skill. The good news: with daily random-order practice, gaps this specific close quickly.'
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
              Basic Addition Facts Worksheets
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
              Build Automatic Recall of Sums Within 20
            </p>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem',
              maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
            }}>
              Random-order practice that builds genuine fact fluency — not sequential chanting. The single most important math skill to automate in early elementary.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/?grade=first&topic=addition" style={{
                background: 'var(--primary)', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block'
              }}>
                Generate Basic Addition Facts Worksheets
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
              Why Basic Fact Fluency Is the Most Important Early Math Skill
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Basic addition facts look simple, but they are the single strongest predictor of later math success. A child who has to pause to figure out 7+5 cannot keep up with two-digit addition, cannot handle multi-step problems, and will struggle with multiplication — which is just repeated addition. The cognitive load of retrieving a basic fact should be zero. When facts are automatic, working memory is entirely free for the harder parts of the problem.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              The key word is automatic — not just accurate. A child who can figure out 8+6 in four seconds by counting on has accuracy but not fluency. Fluency means instant retrieval: the answer appears without calculation. Building that takes time and the right kind of practice — random order, short sessions, daily. For students still building the conceptual foundation before facts, our{' '}
              <Link href="/addition-number-lines-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>number line worksheets</Link>{' '}
              are the right starting point.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              For students ready to apply their facts in context, our{' '}
              <Link href="/addition-word-problems-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>addition word problems worksheets</Link>{' '}
              and{' '}
              <Link href="/addition-two-digit-no-regrouping-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>two-digit addition worksheets</Link>{' '}
              are the natural next steps.
            </p>
          </section>

          {/* Progression */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Fact Fluency Milestones by Grade
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              What mastery looks like at each stage and what to do if your child is behind
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

          {/* Three Strategies */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)',
                textAlign: 'center', marginBottom: '1.5rem'
              }}>
                Three Principles of Effective Fact Practice
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    num: '1',
                    title: 'Always Random Order',
                    desc: 'Never practice facts in sequence (1+1, 1+2, 1+3). Always mix them. Sequential practice builds chanting, not retrieval. Our worksheets randomize every problem so your child must access each fact independently.'
                  },
                  {
                    num: '2',
                    title: 'Short and Daily',
                    desc: '10-15 minutes of focused practice every day is far more effective than one long session per week. Stop the session when attention drops — practicing while tired reinforces errors. Consistency over months builds fluency faster than intensity over weeks.'
                  },
                  {
                    num: '3',
                    title: 'Teach Strategies Before Drilling',
                    desc: 'Before drilling, teach doubles, near-doubles, and making-ten. A child who understands that 8+6 is the same as 8+2+4 has a reliable backup when retrieval fails — and using strategies repeatedly accelerates direct retrieval faster than rote drilling alone.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{ textAlign: 'center', padding: '1rem' }}>
                    <div style={{
                      background: 'var(--primary)', color: 'white', width: '3rem', height: '3rem',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem', fontWeight: '700', margin: '0 auto 1rem'
                    }}>{item.num}</div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem' }}>{item.desc}</p>
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
                When Fact Practice Is Not Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For some children, the gap is not in practice — it is in the underlying number sense that makes addition intuitive. If your child is still counting on fingers past 1st grade, cannot count on from the larger number, or does not understand that numbers can be decomposed and recomposed, worksheets alone will not build fluency. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual groundwork that makes fact fluency stick. You can also browse all courses and planners on the{' '}
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
                { name: 'Number Line Addition', href: '/addition-number-lines-worksheets', desc: 'Build the conceptual foundation before moving to abstract fact recall' },
                { name: 'Two-Digit Addition', href: '/addition-two-digit-no-regrouping-worksheets', desc: 'Apply basic facts to two-digit problems once fluency is established' },
                { name: 'Addition Word Problems', href: '/addition-word-problems-worksheets', desc: 'Use facts in real-world contexts' },
                { name: 'Grade 1 Worksheets', href: '/grade-1-worksheets', desc: 'Full 1st grade math overview — where basic facts are the main focus' },
                { name: 'Grade 2 Worksheets', href: '/grade-2-worksheets', desc: 'Where basic fact fluency is consolidated before two-digit operations' },
                { name: 'Multiplication Practice', href: '/multiplication-practice', desc: 'The operation that depends entirely on addition fact fluency as a foundation' }
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
              Real questions parents ask about basic addition fact practice
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
                Build Fact Fluency Starting Today
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem',
                maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom basic addition facts worksheets in random order. Choose your number range, pick a difficulty level, and download clean PDFs with answer keys.
              </p>
              <Link href="/?grade=first&topic=addition" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Basic Facts Worksheets Now
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