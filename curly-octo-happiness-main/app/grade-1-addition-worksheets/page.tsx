//app/grade-1-addition-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First Grade Addition Worksheets | Free Printable 1st Grade Addition Practice',
  description: 'Free printable 1st grade addition worksheets within 20. Practice counting on, making ten, doubles facts, and addition word problems. Perfect for homeschool and classroom use.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-1-addition-worksheets',
  },
}

export default function Grade1AdditionWorksheets() {
  const faqs = [
    {
      question: 'What addition facts should first graders know?',
      answer: 'By the end of first grade, students should be able to add fluently within 10 and use strategies to add within 20. This includes knowing doubles facts (6+6=12), making ten (8+5 = 8+2+3 = 13), and counting on from the larger number. The goal is not just speed but understanding why these strategies work. Most children master addition within 10 by mid-year and within 20 by the end of first grade.'
    },
    {
      question: 'What is the "making ten" strategy and why does it matter?',
      answer: 'Making ten is the most important addition strategy in first grade. When a child sees 8 + 5, they learn to think: "8 needs 2 to make 10, so I take 2 from 5, leaving 3. Now I have 10 + 3 = 13." This strategy builds number sense and is the foundation for regrouping in 2nd grade addition. Children who master making ten in 1st grade find 2-digit addition much easier later.'
    },
    {
      question: 'My child still counts on fingers for every problem. Is this a problem?',
      answer: 'Finger counting is normal in early first grade, but the goal is to move beyond it. By mid-first grade, children should be using mental strategies like counting on from the larger number. If your child is still counting from 1 for every problem (e.g., counting 1,2,3,4,5,6,7,8 for 5+3), gently teach them to start at the larger number and count up. The worksheets here use visual supports to bridge from concrete counting to mental math.'
    },
    {
      question: 'How many addition problems should my first grader do each day?',
      answer: 'For addition practice, 10-15 focused problems per day is plenty. Quality matters more than quantity. A child who does 10 problems using good strategies learns more than a child who does 30 problems by counting slowly on fingers. Use our generator to create mixed practice: some problems for strategy work, some for fluency, and some word problems to apply the skill.'
    },
    {
      question: 'What is the difference between "addition within 10" and "addition within 20"?',
      answer: 'Addition within 10 means both numbers and the sum are 10 or less (e.g., 4+3=7, 6+2=8). Addition within 20 means sums up to 20 (e.g., 9+8=17, 7+6=13). First graders should master within 10 first, then extend to within 20. Our Easy difficulty focuses on 1-10, Medium on 1-15, and Hard on 1-20, so you can meet your child where they are.'
    },
    {
      question: 'Should I teach addition facts in a specific order?',
      answer: 'Yes. Start with +0 and +1 facts (these are easy and build confidence). Then teach doubles (1+1 through 10+10) – children love patterns. Next teach near-doubles (6+7 is double 6 plus 1). Then teach making ten facts (8+3, 9+4, etc.). Finally, teach remaining facts. This order builds on previously learned strategies rather than presenting all facts as isolated memorization.'
    },
    {
      question: 'How do I know if my child has mastered addition in first grade?',
      answer: 'Mastery means your child can: 1) solve addition within 10 without counting on fingers, 2) explain a strategy (e.g., "I know 8+5 is 13 because 8+2=10 and 3 more is 13"), 3) solve simple addition word problems, and 4) recognize that addition is commutative (5+3 is the same as 3+5). Speed will come with practice – focus on understanding first, then fluency.'
    },
    {
      question: 'What are doubles facts and why are they important?',
      answer: 'Doubles facts are problems like 2+2=4, 3+3=6, up to 10+10=20. They are important because they become anchors for other facts. Once a child knows 6+6=12, they can figure out 6+7 is "double 6 plus 1" or 13. Doubles are also the easiest facts to memorize because they have a natural pattern. Most children master doubles quickly, which builds confidence for harder facts.'
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
              First Grade Addition Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Addition Within 20
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
              Master addition strategies including counting on, making ten, and doubles facts. 
              Custom worksheets with visual supports for first grade learners.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=first&topic=addition" style={{
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
              Why First Grade Addition Is the Gateway to All Future Math
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Addition in first grade looks simple – combining small numbers. But underneath is a critical shift: moving from counting everything to using strategies. A child who adds 5+3 by counting "1,2,3,4,5,6,7,8" is still thinking like a kindergartner. The first grade goal is to count on: "5...6,7,8." That small shift – starting from the larger number – is the foundation of efficient calculation.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Our addition worksheets are designed to build these strategies systematically. Visual supports help children see what numbers mean. Three difficulty levels let you start where your child is comfortable. And word problems teach children to recognize when addition is needed in real situations. The <Link href="/grade-1-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>first grade math hub</Link> offers more resources for a complete curriculum.
            </p>
          </section>

          {/* Strategy Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Key Addition Strategies for First Grade
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
              Teach these strategies in order for the best results
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
                  Counting On
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Start with the larger number and count up. For 8+3, say "8...9,10,11." This is faster than counting from 1 and builds mental math skills.
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
                  Doubles & Near-Doubles
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Memorize doubles (6+6=12). Then 6+7 becomes "double 6 plus 1" = 13. This strategy works for many facts.
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
                  Making Ten
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  For 8+5, think: "8 needs 2 to make 10, take 2 from 5 leaves 3, so 10+3=13." This is the most powerful strategy.
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
                  <p style={{color: 'var(--text-secondary)'}}>Numbers 1-10, sums within 10. Perfect for beginners building confidence.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>Numbers 1-15, sums within 15. Great for applying strategies.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>Numbers 1-20, sums within 20. For end-of-year mastery.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Hub Link */}
          <section style={{marginBottom: '3rem', textAlign: 'center'}}>
            <Link href="/grade-1-worksheets" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to First Grade Math Hub
            </Link>
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
                When 1st Grade Math Needs More Than Worksheets
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the underlying number sense that makes addition and subtraction intuitive. If your child is still counting on fingers for every fact past mid-year, struggles to understand teen numbers, or can't explain their thinking, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual groundwork that makes fact fluency stick.
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
              Everything you need to know about teaching first grade addition
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
                Generate custom addition worksheets for your first grader. Choose difficulty, problem types, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/worksheet-generator?grade=first&topic=addition" style={{
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