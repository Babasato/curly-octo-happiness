// app/grade-2-addition-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Second Grade Addition Worksheets | Free Printable 2nd Grade Addition Practice',
  description: 'Free printable 2nd grade addition worksheets within 100. Practice two-digit addition with and without regrouping, mental math strategies, and word problems. Perfect for homeschool and classroom use.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-2-addition-worksheets',
  },
}

export default function Grade2AdditionWorksheets() {
  const faqs = [
    {
      question: 'What addition skills should second graders have?',
      answer: 'By the end of second grade, students should be able to add fluently within 100 using place value understanding and the standard algorithm. This includes adding two-digit numbers with and without regrouping, mentally adding 10 or 100 to any number, and solving one- and two-step addition word problems. Most children master addition without regrouping by mid-year and addition with regrouping by the end of second grade.'
    },
    {
      question: 'What is regrouping in addition and why is it hard?',
      answer: 'Regrouping (sometimes called "carrying") is what happens when a column adds to 10 or more. For 37 + 28, you add 7+8=15, write 5 and regroup the 1 ten to the tens column. The difficulty isn\'t the algorithm — it\'s understanding why regrouping works. Children who don\'t understand place value will struggle. Use base-ten blocks to show that 10 ones make a ten, and the algorithm makes sense. Once the concept is clear, practice builds speed.'
    },
    {
      question: 'How can I help my child master two-digit addition with regrouping?',
      answer: 'The key is progression. Start with problems that don\'t need regrouping (24+35). Then introduce regrouping in the ones place only (37+28). Finally, move to regrouping in both places (58+47). Always use place value language: "7 ones plus 8 ones equals 15 ones. That\'s 1 ten and 5 ones." Consistent daily practice with 10-15 problems is more effective than longer sessions. Our worksheets follow this progression across difficulty levels.'
    },
    {
      question: 'What is mental math addition in second grade?',
      answer: 'Mental math means solving problems without writing steps. Second graders learn to add 10 or 100 mentally (37+10=47, 256+100=356). They also learn to break numbers apart: for 45+32, think "45+30=75, plus 2=77." Mental math builds number sense and flexibility. It\'s not about speed — it\'s about understanding numbers well enough to manipulate them without paper. Practice mental math separately from written algorithms.'
    },
    {
      question: 'How many addition problems should my second grader do daily?',
      answer: 'For addition practice, 15-20 focused problems per day is enough. Quality matters more than quantity. A child who does 15 problems using good strategies learns more than a child who does 40 problems by rote. Mix practice types: some problems for algorithm practice, some for mental math, and some word problems to apply the skill. Our generator creates balanced practice automatically.'
    },
    {
      question: 'What is the difference between addition within 100 and addition with regrouping?',
      answer: 'Addition within 100 means the sum is 100 or less (e.g., 45+32=77, 58+37=95). Some of these problems require regrouping, some don\'t. Our Easy difficulty focuses on addition without regrouping (place value practice). Medium introduces regrouping in the ones place. Hard includes regrouping in both places with sums to 100. This progression lets you meet your child exactly where they are.'
    },
    {
      question: 'Should my child be timed on addition worksheets?',
      answer: 'Timed tests are controversial in second grade. Occasional timing (once a week) can build automaticity, but daily timing often creates math anxiety. The goal is accuracy with understanding first, then speed will follow naturally. If your child is still counting on fingers for facts that should be automatic, the issue isn\'t speed — it\'s fluency. Go back to strategy work. If they understand but work slowly, gentle timing can help build automaticity.'
    },
    {
      question: 'How do I know if my child has mastered second grade addition?',
      answer: 'Mastery means your child can: 1) add two-digit numbers with regrouping accurately, 2) explain why regrouping works using place value language, 3) add 10 or 100 mentally, 4) solve one- and two-step addition word problems, and 5) recognize when an answer is unreasonable (estimation). Speed matters less than understanding. A child who gets every problem right but works slowly has mastered the skill; speed will come with continued practice.'
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
              Second Grade Addition Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Addition Within 100
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
              Master two-digit addition with and without regrouping. Build fluency and place value understanding for second grade success.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=second&topic=addition" style={{
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
                Generate Custom Addition Worksheets
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

          {/* Why Addition Matters Section */}
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
              Why Second Grade Addition Is the Foundation for All Multi-Digit Arithmetic
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Second grade addition looks like a small step — moving from numbers within 20 to numbers within 100. But underneath is a massive conceptual leap: place value becomes visible and manipulable. A child who adds 37 + 28 by counting on their fingers has not understood the point of second grade. The goal is to understand that 37 means 3 tens and 7 ones, that 28 means 2 tens and 8 ones, and that adding them means combining tens with tens and ones with ones.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              This understanding — not the algorithm itself — is what makes third grade multiplication, fourth grade long division, and every subsequent year of math possible. Children who memorize the steps without understanding place value will hit a wall when math gets more complex. Our addition worksheets build understanding first, then fluency. The <Link href="/grade-2-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>second grade math hub</Link> offers more resources for a complete curriculum.
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
              Key Addition Strategies for Second Grade
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
              Move from concrete to abstract with these proven approaches
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
                  Use physical or drawn blocks to show that 10 ones make a ten. For 37+28, combine 3 tens + 2 tens = 5 tens, and 7 ones + 8 ones = 15 ones (1 ten and 5 ones). Total = 6 tens and 5 ones = 65.
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
                  Break numbers into tens and ones: 37 = 30+7, 28 = 20+8. Add tens: 30+20=50. Add ones: 7+8=15. Combine: 50+15=65. This builds place value understanding.
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
                  Number Line
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Start at the first number and add the second in chunks. For 45+32: start at 45, add 30 to get 75, then add 2 to get 77. Great for mental math.
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
                Three Difficulty Levels for Addition
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
                  <p style={{color: 'var(--text-secondary)'}}>Two-digit addition without regrouping. Perfect for building place value confidence.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>Regrouping in the ones place only. Introduces carrying systematically.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>Regrouping in both places. For end-of-year mastery and challenge.</p>
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
              Everything you need to know about teaching second grade addition
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
                Build Addition Fluency Today!
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
                Generate custom addition worksheets for your second grader. Choose difficulty, problem types, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=second&topic=addition" style={{
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
                  Create Addition Worksheets Now
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