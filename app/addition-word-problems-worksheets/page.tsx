// app/addition-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Addition Word Problems Worksheets | Free Printable K-6 Math Practice',
  description: 'Free printable addition word problems worksheets for K-6. Practice real-world addition scenarios with one-step and multi-step problems. Perfect for homeschool.',
  alternates: {
    canonical: 'https://homeschoolmath.site/addition-word-problems-worksheets',
  },
}

export default function AdditionWordProblemsWorksheets() {
  const faqs = [
    {
      question: 'What are addition word problems?',
      answer: 'Addition word problems are real-world scenarios that require addition to solve. For example: "Sarah has 12 apples. Her friend gives her 8 more. How many apples does Sarah have now?" Word problems test whether a child understands what addition means — not just whether they can execute the procedure when told which operation to use.'
    },
    {
      question: 'When should I introduce addition word problems?',
      answer: 'From the beginning — not as an advanced skill. Children can engage with simple picture-based word problems in kindergarten before they can read. By 1st grade, they should solve one-step word problems with numbers within 20. By 2nd grade, two-step problems appear. Word problems should run alongside computation practice from the start, not be saved for after facts are mastered.'
    },
    {
      question: 'My child can solve equations but freezes on word problems. Why?',
      answer: 'Word problems require three skills simultaneously: reading comprehension, operation identification, and computation. If your child freezes, isolate which skill is failing. Ask them to read the problem aloud and tell you what is happening in the story — if they cannot, reading comprehension is the issue. If they understand the story but do not know what to do, operation identification is the issue. If they set up the equation correctly but compute wrongly, it is a fluency issue. Each requires a different fix.'
    },
    {
      question: 'What keywords tell a child to add?',
      answer: 'Common addition signal words include: in all, altogether, total, combined, sum, plus, more, additional, increased by, how many in all, joined, and put together. However, keyword strategies can backfire — some problems contain "more" without requiring addition, and some problems require addition without using any of these words. Teach keywords as a starting point, but also teach children to think about what is actually happening in the problem.'
    },
    {
      question: 'What is the difference between one-step and two-step word problems?',
      answer: 'One-step problems require one addition operation to find the answer. Two-step problems require two operations — for example, add two numbers then add a third, or add and then subtract. Two-step problems appear in 2nd grade and become more common in 3rd grade and beyond. The challenge in two-step problems is not the math but identifying that two operations are needed and doing them in the right order.'
    },
    {
      question: 'My child always adds when they see word problems, even when subtraction is needed. How do I fix this?',
      answer: 'This is a very common pattern. The fix is deliberate mixed practice — presenting addition and subtraction word problems together so the child must read carefully to identify which operation is needed rather than defaulting to one. Also teach your child to draw a simple picture of the problem before choosing an operation. A child who pictures Sarah starting with 15 apples and giving away 6 will not add those numbers — the action makes subtraction obvious.'
    },
    {
      question: 'How are word problems different at each grade level?',
      answer: 'Kindergarten problems are picture-based with sums within 5-10 and no required reading. First grade introduces written one-step problems with numbers within 20. Second grade adds two-step problems and comparison problems ("how many more"). Third grade introduces problems with three-digit numbers and mixed operations. Fourth grade and above involve multi-step problems, larger numbers, and eventually fractions and decimals embedded in word problem contexts.'
    },
    {
      question: 'Should I read word problems aloud to my child?',
      answer: 'Yes, for younger students. Reading the problem aloud removes the reading barrier and lets you assess whether the difficulty is math or reading. As children develop reading fluency, gradually shift to having them read independently. By 3rd grade, most children should read word problems independently — if they cannot, reading support alongside math practice is the right intervention, not easier math problems.'
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

  const gradeLevels = [
    {
      grade: 'Kindergarten',
      description: 'Picture-based problems with sums within 5-10. No reading required — the problem is told verbally and illustrated visually. "Here are 2 dogs. Here are 3 more dogs. How many dogs are there altogether?" The goal is building the concept that addition means combining two groups, not fluency with written problems.'
    },
    {
      grade: 'First Grade',
      description: 'Written one-step problems with numbers within 20. Simple sentences with high-frequency words. Keywords like "in all," "altogether," and "total" appear consistently. By the end of 1st grade, a student should solve problems with sums within 20 independently and explain which operation they chose and why.'
    },
    {
      grade: 'Second Grade',
      description: 'One-step and two-step problems with numbers within 100. Comparison problems appear: "Emma has 14 stickers. Jake has 9. How many more does Emma have?" These are harder because "more" implies addition but the operation is subtraction. Two-step problems require identifying that two calculations are needed.'
    },
    {
      grade: 'Third Grade',
      description: 'Multi-step problems with three-digit numbers. Problems may require addition and subtraction in the same problem. The reading demands increase significantly — sentences are longer and context is more complex. The sticking point at this grade is children rushing past the question and solving for the wrong thing.'
    },
    {
      grade: 'Fourth Grade and Above',
      description: 'Complex multi-step problems with large numbers, fractions, and eventually decimals. Addition appears as one component inside larger problems involving multiple operations. Students who have not built genuine understanding of when to add (versus subtract or multiply) struggle significantly at this level because there are no more keyword shortcuts — the problems require reading comprehension and mathematical reasoning together.'
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
              Addition Word Problems Worksheets
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
              Apply Addition to Real-World Scenarios
            </p>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem',
              maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
            }}>
              Build the skill that equations alone cannot teach — knowing when to add. One-step and two-step word problems for kindergarten through 6th grade.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/?grade=second&topic=word-problems" style={{
                background: 'var(--primary)', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block'
              }}>
                Generate Addition Word Problems Worksheets
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
              Why Word Problems Are the Real Test of Math Understanding
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              A child can memorize that 7+8=15. Word problems ask something harder: do you know when 7+8 is the right thing to do? Equations tell children which operation to use. Word problems make children figure that out themselves. This is the skill that matters in real life and on tests — and it is the skill that equation-only practice cannot build.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              The gap between children who can do equations and children who can do word problems is almost always one of two things: reading comprehension or operation identification. Both are teachable with the right practice. The worst approach is avoiding word problems until computation is "solid enough" — by then, children have learned to think of math as a procedure to follow when told what to do, not a tool for solving real problems.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              For more practice with the mechanics of addition, see our{' '}
              <Link href="/addition-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>{' '}
              and{' '}
              <Link href="/addition-two-digit-regrouping-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>regrouping worksheets</Link>.
            </p>
          </section>

          {/* Grade Level Breakdown */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Word Problems by Grade Level
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              How complexity, reading demand, and operation difficulty increase at each grade
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {gradeLevels.map((level, index) => (
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

          {/* Keyword Box */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)',
                textAlign: 'center', marginBottom: '0.5rem'
              }}>
                Keywords That Usually Signal Addition
              </h2>
              <p style={{
                color: 'var(--text-secondary)', textAlign: 'center',
                marginBottom: '1.5rem', fontSize: '0.9rem'
              }}>
                Teach these as a starting point — but also teach children to think about what the problem is asking, not just scan for keywords
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '0.75rem', textAlign: 'center', marginBottom: '1.5rem'
              }}>
                {['in all', 'altogether', 'total', 'combined', 'sum', 'plus', 'more', 'additional', 'increased by', 'joined', 'put together', 'how many in all'].map((kw, i) => (
                  <div key={i} style={{
                    background: 'var(--background)', border: '1px solid var(--border)',
                    borderRadius: '6px', padding: '0.5rem', fontWeight: '600',
                    color: 'var(--text-primary)', fontSize: '0.875rem'
                  }}>
                    {kw}
                  </div>
                ))}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <strong>Important limitation:</strong> Keywords are a shortcut, not a rule. "Maria has 5 more apples than Jake" uses "more" but requires subtraction to solve. Teach keywords first, then move to reading for meaning.
              </p>
            </div>
          </section>

          {/* 4-Step Strategy */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              A 4-Step Strategy for Any Word Problem
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Teach this process once — it works for every grade level and every operation
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read Twice', desc: 'First read to understand the story. Second read to find the question. Never start solving after one read.' },
                { step: '2', title: 'Circle the Numbers', desc: 'Find every number in the problem. Write them out. This prevents missing a value in multi-step problems.' },
                { step: '3', title: 'Underline the Question', desc: 'What exactly are you solving for? Underline it. Many errors come from solving for the wrong thing.' },
                { step: '4', title: 'Write the Equation', desc: 'Translate the words into numbers and symbols. Solve. Check that your answer matches what the question asked.' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', textAlign: 'center'
                }}>
                  <div style={{
                    background: 'var(--primary)', color: 'white', width: '3rem', height: '3rem',
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
                When Word Problems Are Especially Hard
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child consistently struggles with word problems despite strong computation skills, the issue is usually one of two things: they have not built a mental model of what addition represents in the real world, or reading comprehension is limiting their ability to parse problem language. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual foundation that makes operation selection intuitive. You can also browse all courses and planners on the{' '}
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
                { name: 'Addition Basic Facts', href: '/addition-basic-facts-worksheets', desc: 'Build the computation fluency that word problems require' },
                { name: 'Addition with Regrouping', href: '/addition-two-digit-regrouping-worksheets', desc: 'Multi-digit computation for upper elementary word problems' },
                { name: 'Word Problems Hub', href: '/word-problems', desc: 'Word problems across all operations — addition, subtraction, multiplication, division' },
                { name: 'Grade 2 Worksheets', href: '/grade-2-worksheets', desc: 'Where two-step word problems first appear' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Multi-step word problems with three-digit numbers' },
                { name: 'Subtraction Practice', href: '/subtraction-practice', desc: 'Practice distinguishing between addition and subtraction word problems' }
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
              Real questions parents ask about addition word problems
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
                Practice Knowing When to Add
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem',
                maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom addition word problem worksheets for any grade level. Build the skill that equations alone cannot teach.
              </p>
              <Link href="/?grade=second&topic=word-problems" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Word Problems Worksheets Now
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
