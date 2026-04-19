//app/grade-1-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First Grade Word Problems Worksheets | Free Printable 1st Grade Math Story Problems',
  description: 'Free printable 1st grade word problems worksheets for addition and subtraction within 20. Includes take-away, comparison, and missing addend story problems with visual supports.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-1-word-problems-worksheets',
  },
}

export default function Grade1WordProblemsWorksheets() {
  const faqs = [
    {
      question: 'Why are word problems so hard for first graders?',
      answer: 'Word problems require three skills simultaneously: reading comprehension, math understanding, and problem-solving. A child might know 8+5=13 but struggle to recognize that "Sarah had 8 cookies and got 5 more" means addition. The key is teaching children to identify the action: combining = add, taking away = subtract, comparing = subtract. Our word problems use simple language and visual supports to reduce reading load while building problem-solving skills.'
    },
    {
      question: 'What are the different types of word problems in first grade?',
      answer: 'First grade word problems fall into several categories: 1) Add to/result unknown: "Sarah had 8 cookies. She got 5 more. How many now?" 2) Take from/result unknown: "Sarah had 13 cookies. She ate 5. How many left?" 3) Put together/total unknown: "Sarah has 8 chocolate cookies and 5 sugar cookies. How many total?" 4) Compare/difference unknown: "Sarah has 8 cookies. Tom has 5. How many more does Sarah have?" Our generator includes all these types.'
    },
    {
      question: 'How can I help my child figure out if a word problem is addition or subtraction?',
      answer: 'Teach your child to look for action words and think about what is happening. Combining (in all, total, together, altogether) usually means addition. Taking away (left, remain, ate, gave away) usually means subtraction. Comparing (how many more, how many fewer) means subtraction. The most common mistake is seeing a word like "more" and automatically adding – but "how many more" is subtraction. Practice with our worksheets builds this recognition.'
    },
    {
      question: 'Should my child be able to read word problems independently?',
      answer: 'In early first grade, no. Reading the problem aloud to your child is fine – the goal is math thinking, not reading assessment. By mid-first grade, children should attempt to read simple problems independently. By end of first grade, most can read word problems with common sight words. Our word problems use simple vocabulary and short sentences to support emerging readers.'
    },
    {
      question: 'What is a "missing addend" word problem?',
      answer: 'Missing addend problems ask "what plus something equals something else?" Example: "Sarah has some cookies. She gets 5 more. Now she has 13. How many did she start with?" These are actually subtraction problems (13-5=8), but children who only learned take-away subtraction struggle. Missing addend problems are important because they build algebraic thinking and appear frequently in real life ("I have $5, I need $13, how much more do I need?").'
    },
    {
      question: 'How many word problems should my first grader do each week?',
      answer: 'Aim for 2-3 word problems per day, not more. Word problems require more mental effort than bare number problems. Too many at once leads to frustration. The ideal pattern: 8-10 bare number problems for skill practice, then 2-3 word problems for application. Our generator lets you mix word problems with regular problems so children practice both skills in one worksheet.'
    },
    {
      question: 'My child adds everything in word problems. How do I fix this?',
      answer: 'This is extremely common. Children see numbers and assume they should add. Teach your child to stop and ask: "Is something being combined or taken away?" Use drawings or objects to act out the problem before writing anything. For comparison problems ("how many more"), physically line up objects so your child sees that finding the difference is not adding. With consistent practice, most children outgrow this by the end of first grade.'
    },
    {
      question: 'What makes a good first grade word problem?',
      answer: 'Good first grade word problems have: 1) Numbers within 20, 2) Simple, familiar contexts (toys, cookies, animals, friends), 3) Clear action (combining, separating, comparing), 4) Short sentences with basic vocabulary, and 5) Visual supports for struggling readers. Our word problems are designed with all five criteria. The first grade math hub offers additional problem-solving resources.'
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
              First Grade Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Addition & Subtraction Story Problems Within 20
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
              Build problem-solving skills with addition and subtraction word problems.
              Includes take-away, comparison, and missing addend stories with visual supports.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=first&topic=word-problems" style={{
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
                Generate Custom Word Problems Worksheets
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

          {/* Why Word Problems Matter Section */}
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
              Why Word Problems Are the Most Important Math Skill in First Grade
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Bare number problems teach calculation. Word problems teach thinking. A child who can solve 8+5=13 but doesn't recognize that "Sarah had 8 cookies and got 5 more" means addition hasn't truly mastered the skill. Real life doesn't present math problems as "8+5=" – it presents stories, situations, and problems to solve. Word problems build the bridge between abstract calculation and real-world application.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Our word problems use simple language, familiar contexts, and visual supports to help young readers focus on the math. The first grade math hub offers additional problem-solving resources and teaching strategies.
            </p>
          </section>

          {/* Problem Types Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Types of Word Problems in First Grade
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
              Our generator includes all four problem types
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
                  Add To / Take From
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "Sarah had 8 cookies. She got 5 more. How many now?" (Addition) or "Sarah had 13 cookies. She ate 5. How many left?" (Subtraction)
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
                  Put Together / Take Apart
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "Sarah has 8 chocolate cookies and 5 sugar cookies. How many total?" (Addition) or "Sarah has 13 cookies. 8 are chocolate. How many are sugar?" (Subtraction)
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
                  Compare
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "Sarah has 8 cookies. Tom has 5. How many more does Sarah have?" (Subtraction – finding the difference)
                </p>
              </div>
            </div>
          </section>

          {/* Problem-Solving Steps Section */}
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
                The 4-Step Problem-Solving Process
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
              }}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 auto 0.75rem'
                  }}>1</div>
                  <h3 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem'}}>Read and Visualize</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Read the problem and picture what is happening.</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 auto 0.75rem'
                  }}>2</div>
                  <h3 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem'}}>Identify Operation</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Ask: Are things being combined, separated, or compared?</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 auto 0.75rem'
                  }}>3</div>
                  <h3 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem'}}>Solve</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Write the equation and solve using a strategy.</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 auto 0.75rem'
                  }}>4</div>
                  <h3 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem'}}>Check</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Does the answer make sense in the story?</p>
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
              Everything you need to know about first grade word problems
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
                Build Problem-Solving Skills Today!
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
                Generate custom word problem worksheets for your first grader. Choose addition, subtraction, or mixed operations and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/worksheet-generator?grade=first&topic=word-problems" style={{
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
                  Create Word Problems Worksheets Now
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
