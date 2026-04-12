// app/word-problems-subtraction-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction Word Problems Worksheets | Free Printable K-4 Math Practice',
  description: 'Free printable subtraction word problems worksheets for K-4. Practice taking away, comparing, and "how many left" scenarios with real-world math problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/word-problems-subtraction-worksheets',
  },
}

export default function WordProblemsSubtractionWorksheets() {
  const faqs = [
    {
      question: 'What subtraction word problems can I practice with these worksheets?',
      answer: 'Our worksheets cover take-away scenarios ("Sarah had 8 cookies and ate 3"), comparison scenarios ("Tom has 8 stickers, Lisa has 5. How many more does Tom have?"), and missing addend scenarios ("Sarah had some cookies. She ate 3 and has 5 left. How many did she start with?").'
    },
    {
      question: 'What keywords signal subtraction in word problems?',
      answer: 'Teach your child to look for: "left," "remain," "remaining," "difference," "fewer," "less than," "how many more," "how many less," "take away," "give away," "spent," "used." However, warn your child that keywords are not always reliable — the best strategy is to understand the situation. Have your child restate the problem in their own words before looking for keywords.'
    },
    {
      question: 'What is the difference between take-away and comparison subtraction problems?',
      answer: 'Take-away problems: "Sarah had 8 cookies. She ate 3. How many are left?" (8 - 3 = 5). The situation is removing objects. Comparison problems: "Tom has 8 stickers. Lisa has 5. How many more does Tom have?" (8 - 5 = 3). The situation is comparing two groups. Many children learn take-away first and freeze on comparison problems. Teach both types explicitly. Our worksheets include both.'
    },
    {
      question: 'Why does my child add when the problem says "how many more"?',
      answer: 'This is the most common keyword confusion. "How many more" means subtraction (find the difference), but children see "more" and think addition. The fix is explicit teaching: "How many more means subtract to find the difference." Write this on an index card. Use comparison language consistently: "Tom has 8, Lisa has 5. The difference is 3. Tom has 3 more." Within 2-3 weeks, most children stop confusing this.'
    },
    {
      question: 'How do I teach my child to solve subtraction word problems?',
      answer: 'Teach the 3-step method: (1) Read and restate — read the problem aloud and have your child restate it. Ask: "Is something being taken away or compared?" (2) Identify the numbers — find the starting number and the number being subtracted. (3) Write the equation and solve. The key is to identify the situation before looking at the numbers.'
    },
    {
      question: 'How many subtraction word problems should my child practice daily?',
      answer: '5-10 word problems per session is effective. Start with 5 problems and increase as your child builds stamina. Word problems take longer than equations because of the reading and comprehension step. Quality over quantity — it is better to solve 5 problems correctly with full understanding than 15 problems guessed.'
    },
    {
      question: 'When should my child start subtraction word problems?',
      answer: 'Start subtraction word problems as soon as your child can subtract single-digit numbers (typically kindergarten or 1st grade). Start with take-away problems using pictures. Then introduce comparison problems once take-away is solid. Do not wait until subtraction facts are perfect — word problems and computation should develop together.'
    },
    {
      question: 'Do the answer keys show the work?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a word problem wrong, go back to the problem and ask: "Let\'s read this again. Is something being taken away or compared?" Walking through the reasoning is more valuable than the correct answer.'
    }
  ]

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }

  const progressionLevels = [
    {
      stage: 'Picture-Based Take-Away Problems (K-1)',
      description: 'Worksheets show pictures of objects with some crossed out: "Count the apples. 3 are crossed out. How many are left?" The child counts the remaining objects. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Simple Take-Away Word Problems (1-2)',
      description: 'Worksheets present take-away problems: "Sarah had 8 cookies. She ate 3. How many are left?" The child identifies the starting number and subtracts. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Comparison Word Problems (2-4)',
      description: 'Worksheets present comparison problems: "Tom has 8 stickers. Lisa has 5. How many more does Tom have?" The child finds the difference. Spend 5-7 days on this stage before moving to multi-digit subtraction word problems.'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div style={{
        minHeight: '100vh',
        background: 'var(--background)',
        padding: '2rem 0'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          {/* Hero Section */}
          <section style={{
            textAlign: 'center',
            padding: '3rem 0',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--primary)',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '600',
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              marginBottom: '1.5rem'
            }}>
              Free Printable Worksheets
            </div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Subtraction Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Taking Away, Comparing, and "How Many Left" Scenarios
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              A child can subtract 23 - 17 = 6. But do they know when to subtract? Word problems build the skill of recognizing subtraction situations — from taking away to comparing.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=word-problems&skill=subtraction" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Subtraction Word Problems Worksheets
              </Link>
              <div style={{
                background: '#f1f5f9',
                color: '#1e293b',
                border: '1px solid #e2e8f0',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600'
              }}>
                <span style={{color: 'var(--primary)'}}>10</span> free worksheets per day • <span style={{color: 'var(--primary)'}}>3</span> difficulty levels
              </div>
            </div>
          </section>

          {/* Why Subtraction Word Problems Matter */}
          <section style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Why Subtraction Word Problems Require Recognizing Two Different Situations
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Subtraction appears in two different types of situations: take-away (removing objects) and comparison (finding the difference). Many children learn take-away first and then freeze when comparison problems appear. The language is different — "how many more" does not sound like subtraction. Explicit teaching of both types is essential.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build subtraction word problem skills systematically — from take-away with pictures to comparison problems. For students who need computation fluency alongside word problems, see our <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice worksheets</Link>.
            </p>
          </section>

          {/* Progression */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              How to Progress Through Subtraction Word Problems
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Three stages — master take-away before comparison
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {progressionLevels.map((level, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem'
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
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              How to Solve Subtraction Word Problems
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Teach the 3-step method — identify the situation first
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it. Ask: "Is something being taken away or compared?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Numbers', desc: 'For take-away: find the starting number and the number being removed. For comparison: find the two numbers being compared.' },
                { step: '3', title: 'Write and Solve', desc: 'Write the subtraction equation. Solve it. Then ask: "Does this answer make sense?" For comparison, the answer should be the difference between the two numbers.' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>{item.step}</div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Problem Types */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                Three Types of Subtraction Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Take-Away Problems',
                    who: 'K-2',
                    desc: '"Sarah had 8 cookies. She ate 3. How many are left?" (8 - 3 = 5). The situation is removing objects from a group.'
                  },
                  {
                    title: 'Comparison Problems',
                    who: '1-3',
                    desc: '"Tom has 8 stickers. Lisa has 5. How many more does Tom have?" (8 - 5 = 3). The situation is finding the difference between two groups.'
                  },
                  {
                    title: 'Missing Addend Problems',
                    who: '2-4',
                    desc: '"Sarah had some cookies. She ate 3 and has 5 left. How many did she start with?" (___ - 3 = 5, so 8). The situation requires working backward.'
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
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{ fontSize: '1.375rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                When Word Problem Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child consistently confuses take-away and comparison problems, the issue may be language processing — not math. Our <strong>Number Sense Foundations</strong> course (K-2) builds the language and problem-solving strategies that make word problems manageable. You can also browse all available courses and planners on the{' '}
                <Link href="/resources" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/mfikwi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                View Number Sense Foundations — $57
              </a>
            </div>
          </section>

          {/* Back to Parent Link */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Link href="/word-problems" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Word Problems Hub
            </Link>
          </section>

          {/* Related Pages */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}>
              Related Worksheet Pages
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Addition Word Problems', href: '/word-problems-addition-worksheets', desc: 'Practice combining and totaling scenarios' },
                { name: 'Multiplication Word Problems', href: '/word-problems-multiplication-worksheets', desc: 'Equal groups and array scenarios' },
                { name: 'Division Word Problems', href: '/word-problems-division-worksheets', desc: 'Sharing equally and grouping scenarios' },
                { name: 'Multi-Step Word Problems', href: '/word-problems-multi-step-worksheets', desc: 'Two or more operations in sequence' },
                { name: 'Subtraction Practice', href: '/subtraction-practice', desc: 'Build computation fluency for word problems' },
                { name: 'Grade 2 Worksheets', href: '/grade-2-worksheets', desc: 'Full 2nd grade math overview' }
              ].map((item, index) => (
                <Link key={index} href={item.href} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textDecoration: 'none'
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

          {/* FAQ Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Real questions parents ask about subtraction word problems
            </p>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                Master Subtraction Word Problems Today
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6'
              }}>
                Generate custom subtraction word problems worksheets. Choose your problem type (take-away or comparison) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=word-problems&skill=subtraction" style={{
                  background: 'white',
                  color: 'var(--primary)',
                  border: 'none',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '1.125rem'
                }}>
                  Create Subtraction Word Problems Worksheets Now
                </Link>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  margin: '0'
                }}>
                  Free • No registration required • 10 worksheets per day
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}