// app/grade-2-subtraction-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Second Grade Subtraction Worksheets | Free Printable 2nd Grade Subtraction Practice',
  description: 'Free printable 2nd grade subtraction worksheets within 100. Practice two-digit subtraction with and without borrowing/regrouping, mental math strategies, and word problems. Perfect for homeschool and classroom use.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-2-subtraction-worksheets',
  },
}

export default function Grade2SubtractionWorksheets() {
  const faqs = [
    {
      question: 'What subtraction skills should second graders have?',
      answer: 'By the end of second grade, students should be able to subtract fluently within 100 using place value understanding and the standard algorithm. This includes subtracting two-digit numbers with and without borrowing/regrouping, mentally subtracting 10 or 100 from any number, and solving one- and two-step subtraction word problems. Most children master subtraction without regrouping by mid-year and subtraction with regrouping by the end of second grade.'
    },
    {
      question: 'What is regrouping in subtraction and why is it hard?',
      answer: 'Regrouping (sometimes called "borrowing") is what happens when a column needs to subtract a larger digit from a smaller digit. For 52 - 27, you need to subtract 7 from 2 — you can\'t. So you borrow 1 ten from the tens column, turning 5 tens into 4 tens, and the 2 ones become 12 ones. Then 12-7=5, and 40-20=20, total 25. The difficulty is that children often follow steps without understanding why borrowing works. Use base-ten blocks to show that borrowing means exchanging one ten for ten ones.'
    },
    {
      question: 'Why does my child struggle with subtraction across zeros?',
      answer: 'Subtraction across zeros (like 200 - 47) is one of the hardest second grade skills. The problem is that you need to borrow from a place that has zero, which requires borrowing twice. The key is understanding place value deeply. Use money: show that $2.00 means 2 dollars, but to subtract 47 cents you need to break a dollar into 100 cents. This concrete example helps children see why borrowing across zeros works before they attempt it abstractly. Start with simpler problems (100 - 25) before moving to harder ones.'
    },
    {
      question: 'How can I help my child master two-digit subtraction with borrowing?',
      answer: 'The key is progression. Start with problems that don\'t need borrowing (57-23). Then introduce borrowing in the ones place only (52-27). Finally, move to problems that require borrowing from the tens place (94-58). Always use place value language: "I have 2 ones and need to subtract 7. I can\'t, so I borrow 1 ten from the tens column. Now I have 12 ones." Consistent daily practice with 10-15 problems is more effective than longer sessions.'
    },
    {
      question: 'What is the difference between subtraction facts and subtraction with borrowing?',
      answer: 'Subtraction facts are single-digit minus single-digit (13-7=6). Subtraction with borrowing uses those facts within larger problems. For 52-27, you need to know that 12-7=5. If your child doesn\'t know subtraction facts automatically, borrowing becomes extremely difficult because they\'re trying to learn two skills at once. Master subtraction facts within 20 first, then introduce borrowing. Our Easy difficulty focuses on facts and no-borrowing problems to build this foundation.'
    },
    {
      question: 'Should subtraction be taught as "take away" or "difference"?',
      answer: 'Both are important. "Take away" means removing objects: "I had 8 cookies and ate 3. How many left?" "Difference" means comparing: "I have 8 cookies, you have 3. How many more do I have?" Second graders need to understand both interpretations. Word problems use both structures, and children who only know "take away" will struggle with comparison problems. Our worksheets include both types of problems to build complete understanding.'
    },
    {
      question: 'How many subtraction problems should my second grader do daily?',
      answer: 'For subtraction practice, 15-20 focused problems per day is enough. Subtraction is generally harder than addition, so don\'t expect as many problems. Quality matters more than quantity. A child who does 15 problems using good strategies learns more than a child who does 40 problems by rote. Mix practice types: some problems for algorithm practice, some for mental math, and some word problems to apply the skill.'
    },
    {
      question: 'How do I know if my child has mastered second grade subtraction?',
      answer: 'Mastery means your child can: 1) subtract two-digit numbers with borrowing accurately, 2) explain why borrowing works using place value language, 3) subtract 10 or 100 mentally, 4) solve one- and two-step subtraction word problems, and 5) recognize when an answer is unreasonable (estimation). Speed matters less than understanding. A child who gets every problem right but works slowly has mastered the skill; speed will come with continued practice.'
    }
  ];

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
  };

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
              Second Grade Subtraction Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Subtraction Within 100
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
              Master two-digit subtraction with and without borrowing. Build place value understanding and mental math skills.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=second&topic=subtraction" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.2s'
              }}>
                Generate Custom Subtraction Worksheets
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

          {/* Why Subtraction Matters Section */}
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
              Why Second Grade Subtraction Is Often Harder Than Addition
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Subtraction in second grade looks similar to addition — moving from numbers within 20 to numbers within 100. But subtraction is fundamentally harder. Addition is commutative (3+5 = 5+3) and always makes numbers larger. Subtraction is not commutative (5-3 ≠ 3-5) and often requires a different set of strategies. A child who adds fluently may still struggle with subtraction because the mental model is different.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              The most challenging second grade subtraction skill is borrowing across zeros. Children who understand place value deeply can handle it; those who only know steps get confused. Our subtraction worksheets build understanding systematically, starting with no borrowing, then borrowing in the ones place, and finally borrowing across zeros. The <Link href="/grade-2-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>second grade math hub</Link> offers more resources for a complete curriculum.
            </p>
          </section>

          {/* Key Strategies Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Key Subtraction Strategies for Second Grade
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
              Build understanding with these concrete-to-abstract approaches
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Base-Ten Blocks
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  For 52-27: Show 5 tens and 2 ones. To subtract 7 ones, you need to exchange 1 ten for 10 ones. Now you have 4 tens and 12 ones. Subtract 7 ones = 5 ones. Subtract 2 tens = 2 tens. Total = 25.
                </p>
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Counting Up
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Instead of subtracting, count up from the smaller number to the larger. For 52-27: count from 27 to 52. 27 to 30 is 3, 30 to 50 is 20, 50 to 52 is 2. Total = 25. Great for mental math.
                </p>
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Expanded Form
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Write numbers in expanded form: 52 = 50+2, 27 = 20+7. Subtract tens: 50-20=30. Subtract ones: 2-7 can't, so borrow 1 ten: 12-7=5. Total = 20+5=25.
                </p>
              </div>
            </div>
          </section>

          {/* Difficulty Levels Section */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Three Difficulty Levels for Subtraction
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>E</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Easy</h3>
                  <p style={{color: 'var(--text-secondary)'}}>Two-digit subtraction without borrowing. Perfect for building place value confidence.</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>M</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Medium</h3>
                  <p style={{color: 'var(--text-secondary)'}}>Borrowing in the ones place only. Introduces regrouping systematically.</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 auto 1rem'
                  }}>H</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Hard</h3>
                  <p style={{color: 'var(--text-secondary)'}}>Borrowing across zeros and multiple places. For end-of-year mastery.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Course Section */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                If Addition and Subtraction Basics Need More Support
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some 2nd graders, worksheets alone aren't enough — the underlying number sense that makes addition and subtraction click hasn't fully formed yet. Our <strong>Number Sense Foundations</strong> course covers K–2 number concepts from the ground up, including the mental models and strategies that make arithmetic feel intuitive rather than effortful. It's been particularly useful for homeschool parents whose child can follow procedures but seems to be "doing math without really understanding it." You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
                View Number Sense Foundations (K–2) — $57
              </a>
            </div>
          </section>

          {/* Back to Hub Link */}
          <section style={{marginBottom: '3rem', textAlign: 'center'}}>
            <Link href="/grade-2-worksheets" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Second Grade Math Hub
            </Link>
          </section>

          {/* FAQ Section */}
          <section style={{marginBottom: '3rem'}}>
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
              Everything you need to know about teaching second grade subtraction
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
          <section style={{marginBottom: '3rem'}}>
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
                Build Subtraction Fluency Today!
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
                Generate custom subtraction worksheets for your second grader. Choose difficulty, problem types, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=second&topic=subtraction" style={{
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
                  Create Subtraction Worksheets Now
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
