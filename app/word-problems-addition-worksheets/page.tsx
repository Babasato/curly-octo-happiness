// app/word-problems-addition-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Addition Word Problems Worksheets | Free Printable K-4 Math Practice',
  description: 'Free printable addition word problems worksheets for K-4. Practice combining, totaling, and "in all" scenarios with real-world math problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/word-problems-addition-worksheets',
  },
}

export default function WordProblemsAdditionWorksheets() {
  const faqs = [
    {
      question: 'What addition word problems can I practice with these worksheets?',
      answer: 'Our worksheets cover combining scenarios ("Sarah has 5 apples and gets 3 more"), totaling scenarios ("There are 4 red balloons and 6 blue balloons"), and comparison scenarios that use addition ("How many in all?"). Problems range from single-digit to multi-digit addition with regrouping.'
    },
    {
      question: 'What keywords signal addition in word problems?',
      answer: 'Teach your child to look for: "in all," "total," "altogether," "combined," "sum," "plus," "added to," "more than," "increased by," "how many." However, warn your child that keywords are not always reliable — the best strategy is to understand the situation. For example, "how many more" usually means subtraction, not addition. Have your child restate the problem in their own words before looking for keywords.'
    },
    {
      question: 'Why does my child add when the problem says "how many more"?',
      answer: 'This is a common keyword confusion. "How many more" often signals subtraction (comparing two quantities), but children see the word "more" and think addition. The fix is explicit teaching: "How many more means find the difference — subtract." Write this on an index card and have your child refer to it until the distinction becomes automatic. Within 2-3 weeks, most children stop confusing these keywords.'
    },
    {
      question: 'When should my child start addition word problems?',
      answer: 'Start addition word problems as soon as your child can add single-digit numbers (typically kindergarten or 1st grade). Start with picture-based problems where the child can count objects. Then move to simple word problems with numbers within 10. Finally, introduce larger numbers and multi-digit addition. Do not wait until addition facts are perfect — word problems and computation should develop together.'
    },
    {
      question: 'How do I teach my child to solve addition word problems?',
      answer: 'Teach the 3-step method: (1) Read and restate — read the problem aloud and have your child restate it in their own words. Ask: "What is happening? Are we combining things?" (2) Identify the numbers — find the numbers being added. (3) Write the equation and solve. The key is to read the words before looking at the numbers. This prevents guessing based on numbers alone.'
    },
    {
      question: 'How many addition word problems should my child practice daily?',
      answer: '5-10 word problems per session is effective. Start with 5 problems and increase as your child builds stamina. Word problems take longer than equations because of the reading and comprehension step. Quality over quantity — it is better to solve 5 problems correctly with full understanding than 15 problems guessed. Spend 10-15 minutes daily on word problems.'
    },
    {
      question: 'What is the difference between joining and part-part-whole addition problems?',
      answer: 'Joining problems: "Sarah had 5 apples. She got 3 more. How many does she have now?" (5 + 3 = 8). Part-part-whole problems: "There are 4 red balloons and 6 blue balloons. How many balloons in all?" (4 + 6 = 10). Both use addition but represent different situations. Teach both types so children recognize addition regardless of how it is presented. Our worksheets include both types.'
    },
    {
      question: 'Do the answer keys show the work?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a word problem wrong, do not just show the correct answer. Go back to the problem and ask: "Let\'s read this again. What is happening? What numbers are we combining?" Walking through the reasoning is more valuable than the correct answer.'
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
      stage: 'Picture-Based Addition Problems (K-1)',
      description: 'Worksheets show pictures of objects (apples, balloons) with simple stories: "Count the red apples. Count the green apples. How many in all?" The child counts the objects and writes the total. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Simple One-Step Addition (1-2)',
      description: 'Worksheets present word problems with numbers within 20: "Sarah has 5 apples. She gets 3 more. How many does she have?" The child identifies the numbers and adds. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Multi-Digit Addition Word Problems (2-4)',
      description: 'Worksheets include two-digit and three-digit addition with regrouping: "A school has 234 students in the morning and 189 in the afternoon. How many students in total?" The child adds with regrouping. Spend 5-7 days on this stage.'
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
              Addition Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Combining, Totaling, and "In All" Scenarios
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
              A child can add 23 + 47 = 70. But do they know when to add? Word problems build the skill of recognizing addition situations — the skill that matters in real life.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=word-problems&skill=addition" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Addition Word Problems Worksheets
              </Link>
              <div style={{
                background: 'var(--surface)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600'
              }}>
                <span style={{color: 'var(--primary)'}}>10</span> free worksheets per day • <span style={{color: 'var(--primary)'}}>3</span> difficulty levels
              </div>
            </div>
          </section>

          {/* Why Addition Word Problems Matter */}
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
              Why Addition Word Problems Are the First Step in Problem-Solving
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Most parents start with equation worksheets — 5 + 3 = ___. But real life does not present equations. Real life presents stories: "You have 5 dollars and earn 3 more. How much do you have?" Word problems teach children to extract the math from the story — the essential skill for all problem-solving.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build addition word problem skills systematically — from picture-based problems for beginners to multi-digit addition with regrouping for older students. For students who need computation fluency alongside word problems, see our <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice worksheets</Link>.
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
              How to Progress Through Addition Word Problems
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
              Three stages — start with pictures
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
              How to Solve Addition Word Problems
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
              Teach the 3-step method — read before you compute
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it in their own words. Ask: "What is happening? Are we combining things?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Numbers', desc: 'Ask: "What numbers are being combined?" Have your child point to the numbers in the problem and say what each represents.' },
                { step: '3', title: 'Write and Solve', desc: 'Write the addition equation based on the problem. Solve it. Then ask: "Does this answer make sense in the story?" If not, go back to step 1.' }
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
                Three Types of Addition Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Joining Problems',
                    who: 'K-2',
                    desc: '"Sarah has 5 apples. She gets 3 more. How many does she have?" (5 + 3 = 8). The situation is adding to an existing group.'
                  },
                  {
                    title: 'Part-Part-Whole Problems',
                    who: 'K-2',
                    desc: '"There are 4 red balloons and 6 blue balloons. How many balloons in all?" (4 + 6 = 10). The situation is combining two groups.'
                  },
                  {
                    title: 'Comparison Addition Problems',
                    who: '1-3',
                    desc: '"Tom has 8 stickers. Lisa has 5 more than Tom. How many does Lisa have?" (8 + 5 = 13). The situation is adding to compare.'
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
                If your child consistently guesses the operation or cannot restate word problems in their own words, the issue may be reading comprehension or language processing — not math. Our <strong>Number Sense Foundations</strong> course (K-2) builds the language and problem-solving strategies that make word problems manageable. You can also browse all available courses and planners on the{' '}
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
                { name: 'Subtraction Word Problems', href: '/word-problems-subtraction-worksheets', desc: 'Practice taking away and comparing scenarios' },
                { name: 'Multiplication Word Problems', href: '/word-problems-multiplication-worksheets', desc: 'Equal groups and array scenarios' },
                { name: 'Division Word Problems', href: '/word-problems-division-worksheets', desc: 'Sharing equally and grouping scenarios' },
                { name: 'Multi-Step Word Problems', href: '/word-problems-multi-step-worksheets', desc: 'Two or more operations in sequence' },
                { name: 'Addition Practice', href: '/addition-practice', desc: 'Build computation fluency for word problems' },
                { name: 'Grade 1 Worksheets', href: '/grade-1-worksheets', desc: 'Full 1st grade math overview' }
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
              Real questions parents ask about addition word problems
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
                Master Addition Word Problems Today
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
                Generate custom addition word problems worksheets. Choose your grade level and problem type, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=word-problems&skill=addition" style={{
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
                  Create Addition Word Problems Worksheets Now
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
