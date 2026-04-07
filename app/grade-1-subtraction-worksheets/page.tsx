//app/grade-1-subtraction-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First Grade Subtraction Worksheets | Free Printable 1st Grade Subtraction Practice',
  description: 'Free printable 1st grade subtraction worksheets within 20. Practice take-away, comparison problems, fact families, and subtraction word problems. Perfect for homeschool and classroom use.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-1-subtraction-worksheets',
  },
}

export default function Grade1SubtractionWorksheets() {
  const faqs = [
    {
      question: 'What subtraction facts should first graders know?',
      answer: 'By the end of first grade, students should be able to subtract fluently within 10 and use strategies to subtract within 20. This includes understanding that subtraction is the inverse of addition (fact families), counting back, and using addition to solve subtraction (e.g., 13-5 = ? Think "5 + ? = 13"). Most children find subtraction harder than addition because it requires more flexible thinking.'
    },
    {
      question: 'What is the difference between "take away" and "comparison" subtraction?',
      answer: 'Take away subtraction is when you remove objects from a set: "I had 8 cookies and ate 3. How many left?" Comparison subtraction asks how many more or fewer: "I have 8 cookies. You have 3. How many more do I have?" Both are subtraction, but comparison problems are harder for children to recognize. Our word problems include both types to build complete understanding.'
    },
    {
      question: 'My child can add but struggles with subtraction. Why?',
      answer: 'This is very common. Addition is combining – it feels natural. Subtraction is more complex because it can mean taking away, comparing, or finding a missing part. The best way to help is to teach fact families: if 8+5=13, then 13-5=8 and 13-8=5. This shows subtraction as "undoing" addition. Use our generator to create mixed addition and subtraction practice so children see the relationship.'
    },
    {
      question: 'Should I teach counting back for subtraction?',
      answer: 'Counting back (e.g., for 13-5, counting "12,11,10,9,8") works but can be slow and error-prone. A better strategy is to teach children to count up from the smaller number: "5...6,7,8,9,10,11,12,13" – that\'s 8 steps, so the answer is 8. Counting up builds number sense and connects subtraction to addition. Our worksheets use visual supports to make this strategy concrete.'
    },
    {
      question: 'How do fact families help with subtraction?',
      answer: 'A fact family shows the relationship between addition and subtraction. For the numbers 5, 8, and 13: 5+8=13, 8+5=13, 13-5=8, 13-8=5. Teaching fact families helps children see that subtraction is just "finding the missing addend." When a child sees 13-5, they learn to ask "5 plus what equals 13?" This builds flexible thinking and reduces memorization load.'
    },
    {
      question: 'What is the hardest type of subtraction for first graders?',
      answer: 'Comparison problems ("how many more") are the hardest for most first graders. In a take-away problem, the action suggests subtraction. In a comparison problem, nothing is being taken away – children need to recognize that finding the difference is still subtraction. Practice with real objects helps: line up 8 blocks and 5 blocks, then ask "How many more are in the longer line?"'
    },
    {
      question: 'How do I know if my child has mastered subtraction in first grade?',
      answer: 'Mastery means your child can: 1) subtract within 10 without counting on fingers, 2) explain that subtraction is the opposite of addition, 3) solve simple subtraction word problems (both take-away and comparison), and 4) use addition to check subtraction answers (e.g., 13-5=8, so 8+5=13). Most children reach this by the end of first grade with consistent practice.'
    },
    {
      question: 'What order should I teach subtraction facts?',
      answer: 'Start with subtracting 0 and 1 (easiest). Then teach subtracting from 10 (10-1=9, 10-2=8, etc.) – these build on known addition facts. Then teach fact families within 10. Finally, extend to subtraction within 20. Never rush to subtraction within 20 until your child is solid on subtraction within 10. Our difficulty levels (Easy=1-10, Medium=1-15, Hard=1-20) make this progression simple.'
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
              First Grade Subtraction Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Subtraction Within 20
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
              Master subtraction strategies including counting back, counting up, and fact families.
              Custom worksheets with visual supports for first grade learners.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=first&topic=subtraction" style={{
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
              Why Subtraction Is Often Harder Than Addition (And How to Help)
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Subtraction is not just "addition backwards." It actually involves three different interpretations: taking away (removing objects), comparing (finding the difference), and finding a missing part (what's added to 5 to make 13?). First graders who only learn "take away" struggle when they encounter comparison problems. Understanding all three meanings is essential for word problem success.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Our subtraction worksheets include all three problem types. Visual supports help children see what subtraction means in different contexts. The <Link href="/grade-1-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>first grade math hub</Link> offers additional resources for a complete first grade curriculum.
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
              Key Subtraction Strategies for First Grade
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
              Teach these strategies in this order for the best results
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
                  Counting Up
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  For 13-5, count up from 5 to 13: "5...6,7,8,9,10,11,12,13" (8 steps). This connects subtraction to addition and is more reliable than counting back.
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
                  Fact Families
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  If 8+5=13, then 13-5=8 and 13-8=5. Teaching fact families shows subtraction as the inverse of addition.
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
                  Using Addition
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Turn subtraction into a missing addend problem: 13-5 = ? becomes 5 + ? = 13. This is the most advanced strategy.
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
                  <p style={{color: 'var(--text-secondary)'}}>Numbers 1-10. Perfect for learning take-away and basic subtraction concepts.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>Numbers 1-15. Introduces comparison problems and missing addend thinking.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>Numbers 1-20. For end-of-year mastery and fluency.</p>
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
              Everything you need to know about teaching first grade subtraction
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
                Build Subtraction Confidence Today!
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
                Generate custom subtraction worksheets for your first grader. Choose difficulty, problem types, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/worksheet-generator?grade=first&topic=subtraction" style={{
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