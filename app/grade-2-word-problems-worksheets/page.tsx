// app/grade-2-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Second Grade Word Problems Worksheets | Free Printable 2nd Grade Math Word Problems',
  description: 'Free printable 2nd grade math word problems covering addition and subtraction within 100, time, money, measurement, and two-step problems. Perfect for homeschool and classroom use.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-2-word-problems-worksheets',
  },
}

export default function Grade2WordProblemsWorksheets() {
  const faqs = [
    {
      question: 'What types of word problems do second graders solve?',
      answer: 'Second graders solve one- and two-step word problems involving addition and subtraction within 100. Problems often include real-world contexts like time (telling time to 5 minutes), money (counting coins and bills up to $1), measurement (length, weight, volume), and data (picture graphs and bar graphs). Two-step problems require combining two operations, like finding change after a purchase or comparing two quantities.'
    },
    {
      question: 'Why does my child struggle with word problems but not regular equations?',
      answer: 'This is very common and not a sign of low ability. Word problems require reading comprehension, identifying relevant information, ignoring irrelevant details, and deciding which operation to use — all skills that regular equation practice doesn\'t develop. The key is to teach a consistent problem-solving process: read twice, circle numbers, underline the question, choose the operation, solve, and check if the answer makes sense. With practice, these steps become automatic.'
    },
    {
      question: 'How can I help my child identify the correct operation in word problems?',
      answer: 'Teach operation keywords, but with caution because they\'re not foolproof. Addition often uses words like "total," "altogether," "in all," "combined," "sum." Subtraction often uses "difference," "left," "remain," "how many more," "how many fewer." More important than keywords is visualizing the situation: act it out, draw a picture, or use objects. A child who can draw what\'s happening will rarely choose the wrong operation.'
    },
    {
      question: 'What are two-step word problems and when are they introduced?',
      answer: 'Two-step word problems require solving two different calculations to get the final answer. For example: "Sarah had 45 stickers. She gave 12 to her friend and then bought 8 more. How many stickers does she have now?" The first step is 45-12=33. The second step is 33+8=41. Two-step problems are introduced in second grade and become more complex in later grades. Start with problems where both steps are the same operation before mixing addition and subtraction.'
    },
    {
      question: 'How can I help my child with word problems involving money?',
      answer: 'Money word problems combine place value understanding with real-world context. Start by having your child identify the coins and their values. For problems like "You have 2 dimes and 3 pennies. You buy something for 15 cents. How much money is left?" first find the total (20+3=23 cents), then subtract (23-15=8 cents). Use real coins for practice — the tactile experience helps build understanding. Our worksheets include visual coin representations.'
    },
    {
      question: 'What are comparison word problems?',
      answer: 'Comparison word problems ask "how many more" or "how many fewer" rather than "how many left." For example: "Maria has 38 marbles. Juan has 25 marbles. How many more marbles does Maria have than Juan?" The operation is subtraction (38-25=13), but the language is different from take-away problems. Children who only know subtraction as "take away" struggle with comparison problems. Teach both interpretations explicitly with visual comparisons like drawing bars.'
    },
    {
      question: 'How many word problems should my child practice daily?',
      answer: 'For second graders, 3-5 word problems per session is usually enough. Word problems require more cognitive effort than equations, so fewer problems produce better learning. Focus on quality over quantity: have your child read the problem aloud, explain what they\'re solving for, and justify their operation choice before calculating. This process is more valuable than solving many problems quickly. One well-analyzed problem teaches more than ten rushed problems.'
    },
    {
      question: 'How do I know if my child has mastered second grade word problems?',
      answer: 'Mastery means your child can: 1) read a word problem independently, 2) identify what the problem is asking, 3) choose the correct operation (addition or subtraction), 4) solve accurately, 5) explain why they chose that operation, and 6) check if their answer makes sense. The ability to explain the reasoning is the best indicator of true understanding. A child who gets the right answer but can\'t explain why hasn\'t truly mastered the skill.'
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
              Second Grade Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Real-World Math Practice
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
              Solve one- and two-step word problems with addition and subtraction in real-world contexts like time, money, and measurement.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=second&topic=word-problems" style={{
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
              Why Word Problems Are the True Test of Math Understanding
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              A child who solves 50 equations perfectly might still struggle with word problems. That\'s not a defect — it\'s because equations and word problems test different skills. Equations test procedural fluency: "Can you execute the algorithm?" Word problems test something harder: "Can you recognize when to use the algorithm in a real situation?" That ability to transfer knowledge from abstract practice to concrete problems is what math is ultimately for.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Second grade word problems introduce children to the structure of real-world math: time, money, measurement, and comparison. These contexts make math meaningful and build the problem-solving skills that will be essential in third grade and beyond. Our word problems worksheets start with simple one-step problems and gradually introduce two-step problems, always with contexts that second graders can visualize. The <Link href="/grade-2-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>second grade math hub</Link> offers more resources for a complete curriculum.
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
              Types of Word Problems for Second Grade
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
              Each type builds different problem-solving skills
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
                  Take-Away Problems
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "Maria had 45 stickers. She gave 12 to her friend. How many stickers does she have left?" These are the most straightforward subtraction problems. Keywords: left, remain, have now.
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
                  Comparison Problems
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "Maria has 45 stickers. Juan has 33 stickers. How many more stickers does Maria have than Juan?" These require subtraction but use different language. Keywords: how many more, how many fewer, difference.
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
                  Two-Step Problems
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "Sarah had 45 stickers. She gave 12 to her friend and then bought 8 more. How many stickers does she have now?" These require two calculations, often mixing addition and subtraction.
                </p>
              </div>
            </div>
          </section>

          {/* Real-World Contexts Section */}
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
                Real-World Contexts We Cover
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
                  }}>$</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Money</h3>
                  <p style={{color: 'var(--text-secondary)'}}>Counting coins, making change, comparing costs, and saving money.</p>
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
                  }}>⏰</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Time</h3>
                  <p style={{color: 'var(--text-secondary)'}}>Elapsed time, reading clocks, scheduling events, and duration.</p>
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
                  }}>📏</div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Measurement</h3>
                  <p style={{color: 'var(--text-secondary)'}}>Length, height, weight, volume, and comparing measurements.</p>
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
              Everything you need to know about second grade word problems
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
                Generate custom word problems for your second grader. Choose difficulty, problem types, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=second&topic=word-problems" style={{
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
