// app/grade-3-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Third Grade Word Problems Worksheets | Free Printable 3rd Grade Math Word Problems',
  description: 'Free printable 3rd grade math word problems covering addition, subtraction, multiplication, division, multi-step problems, and real-world scenarios. Perfect for homeschool and classroom use.',
  alternates: {
    canonical: 'https://homeschoolmath.site/grade-3-word-problems-worksheets',
  },
}

export default function Grade3WordProblemsWorksheets() {
  const faqs = [
    {
      question: 'What types of word problems do third graders solve?',
      answer: 'Third graders solve one- and two-step word problems involving addition, subtraction, multiplication, and division within 100. Problems include equal groups, arrays, measurement quantities (length, liquid volume, mass, time, money), and area/perimeter. Two-step problems require combining two operations, like multiplication then addition.'
    },
    {
      question: 'How can I help my child identify the correct operation?',
      answer: 'Teach operation keywords but with caution. Multiplication often uses "groups of," "each," "total," "area." Division uses "shared equally," "split," "each gets." More important is visualizing: draw pictures, act it out, or use objects. A child who can draw what\'s happening will rarely choose the wrong operation.'
    },
    {
      question: 'What are two-step word problems?',
      answer: 'Two-step problems require solving two different calculations. Example: "Maria bought 3 packs of stickers. Each pack had 12 stickers. She gave 15 stickers to her friend. How many stickers does she have left?" Step 1: 3×12=36 total stickers. Step 2: 36-15=21 left. Start with problems where both steps are the same operation before mixing.'
    },
    {
      question: 'How can I help my child with multiplication and division word problems?',
      answer: 'Use equal groups language. For multiplication: "3 bags with 4 apples in each" means 3×4. For division: "12 apples split into 3 equal bags" means 12÷3. Draw the groups. Have your child identify the total, the number of groups, and the size of each group.'
    },
    {
      question: 'How many word problems should my child practice daily?',
      answer: '3-5 word problems per session is enough. Word problems require more cognitive effort than equations. Focus on quality: have your child read aloud, explain what they\'re solving for, and justify their operation choice. One well-analyzed problem teaches more than ten rushed problems.'
    },
    {
      question: 'How do I know if my child has mastered third grade word problems?',
      answer: 'Mastery means your child can: 1) read and understand a multi-step problem, 2) identify what the problem is asking, 3) choose the correct operation(s), 4) solve accurately, 5) explain why they chose that operation, and 6) check if their answer makes sense.'
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
              Third Grade Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Multi-Step Real-World Problems
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
              Solve one- and two-step word problems with addition, subtraction, multiplication, and division in real-world contexts.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=word-problems" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
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
              Why Third Grade Word Problems Prepare Students for Algebra
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              By third grade, word problems become genuinely complex. They require choosing between four operations, often in multi-step problems. This ability to analyze a situation, identify what's being asked, and select the right tools is the essence of mathematical thinking — and the foundation for algebra.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Our word problems worksheets start with one-step problems and gradually introduce two-step problems, always with contexts that third graders can visualize. The <Link href="/grade-3-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>third grade math hub</Link> offers more resources for a complete curriculum.
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
              Types of Word Problems for Third Grade
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
                  Equal Groups
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "There are 8 bags with 6 apples in each. How many apples total?" (Multiplication) or "48 apples split equally into 8 bags. How many in each?" (Division)
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
                  Arrays & Area
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  "A rectangle is 7 feet long and 4 feet wide. What is the area?" (7×4) or "A garden has area 24 square feet and width 6 feet. What is the length?" (24÷6)
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
                  "Maria bought 3 packs of 12 stickers and gave 15 away. How many left?" (3×12=36, 36-15=21). Requires multiple operations and careful reading.
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
                Three Difficulty Levels for Word Problems
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
                  <p style={{color: 'var(--text-secondary)'}}>One-step problems with addition and subtraction. Clear operation keywords.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>One-step problems with multiplication and division. Introduces equal groups.</p>
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
                  <p style={{color: 'var(--text-secondary)'}}>Two-step problems mixing all four operations. For end-of-year mastery.</p>
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
                When 3rd Grade Math Needs More Than Worksheets
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the conceptual foundation that makes multiplication and division make sense. If your child can recite the times tables in order but freezes on random facts, or doesn't connect multiplication to equal groups, worksheets alone won't bridge that gap. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact fluency and into division as the inverse operation. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/csfto"
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
                View Multiplication & Division Foundations — $57
              </a>
            </div>
          </section>

          {/* Back to Hub Link */}
          <section style={{marginBottom: '3rem', textAlign: 'center'}}>
            <Link href="/grade-3-worksheets" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Third Grade Math Hub
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
              Everything you need to know about third grade word problems
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
                Generate custom word problems for your third grader. Choose difficulty, operation types, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=word-problems" style={{
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
