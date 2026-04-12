// app/subtraction-shape-counting-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction Shape Counting Worksheets | Free Printable K-1 Math Practice',
  description: 'Free printable subtraction shape counting worksheets for K-1. Count and subtract circles, squares, and triangles. Perfect for visual learners building conceptual understanding of take-away.',
  alternates: {
    canonical: 'https://homeschoolmath.site/subtraction-shape-counting-worksheets',
  },
}

export default function SubtractionShapeCountingWorksheets() {
  const faqs = [
    {
      question: 'What is shape counting subtraction?',
      answer: 'Shape counting subtraction uses pictures of shapes to represent numbers. A problem might show 7 circles with 3 crossed out, and the child counts the remaining 4 circles. This connects concrete objects to abstract subtraction for young learners. The shapes make the "taking away" visible — a child can see that subtraction means a group getting smaller, not just a symbol on a page.'
    },
    {
      question: 'When should I use shape counting worksheets?',
      answer: 'Shape counting is ideal for pre-kindergarten and kindergarten students who are just learning what subtraction means. Children can see and count physical objects, which builds the mental model that subtraction means taking away. Most children benefit from shape counting for 2-4 months before moving to number lines and then abstract facts. If a child is in 1st grade and still needs shapes for every subtraction problem, that suggests a gap in number sense that needs direct attention.'
    },
    {
      question: 'How is shape counting different from finger counting?',
      answer: 'Shape counting is a bridge from counting physical objects to abstract number facts. The key difference is that shapes are drawn and remain visible — the child can see the whole group and see which ones are crossed out. Finger counting requires the child to hold the starting number in memory while counting back, which is a higher cognitive load. Shape counting reduces working memory demand so the child can focus entirely on the concept of taking away. The goal is to move from shape counting to basic facts over several months, not to stay with shapes forever.'
    },
    {
      question: 'My child counts the crossed-out shapes instead of the remaining ones. How do I fix this?',
      answer: 'This is an extremely common error and does not mean your child "isn\'t getting it." Many kindergarteners see the crossed-out shapes as interesting and want to count them. The fix is simple: have your child cover the crossed-out shapes with their finger before counting. Say: "We only count the shapes that are NOT crossed out. Cover the crossed-out ones with your finger. Now count what is left." Within 2-3 sessions, most children learn to ignore the crossed-out shapes automatically.'
    },
    {
      question: 'Should I use shape counting for subtraction word problems?',
      answer: 'Yes — and this is where shape counting really shines. A word problem like "Maria had 8 cookies. She ate 3. How many are left?" can feel abstract to a kindergartener. Drawing 8 circles, crossing out 3, and counting the remaining 5 makes the problem visible. The child sees the connection between the words and the math. Our shape counting worksheets include simple word problems alongside the visual models for exactly this reason.'
    },
    {
      question: 'What comes after shape counting worksheets?',
      answer: 'The natural progression is: shape counting (concrete, visible take-away) → number line subtraction (semi-abstract, jumping backward) → basic fact worksheets (abstract, automatic recall). Most children spend 2-4 months on shape counting, 2-4 months on number lines, and then continue fact practice throughout 1st and 2nd grade. If a child masters shape counting quickly, move to number lines. If a child struggles with shape counting for more than 3 months, that suggests a deeper number sense gap that may need a course like Number Sense Foundations.'
    },
    {
      question: 'Do you have shape counting for subtraction facts within 10 and within 20?',
      answer: 'Our shape counting worksheets focus on differences within 10. This is intentional — shapes become unwieldy for numbers larger than 10 because counting 17 circles is tedious and error-prone. The goal of shape counting is conceptual understanding, not fact mastery. Once a child understands subtraction as take-away within 10, they are ready to move to number lines for larger numbers. Trying to do shape counting for 17-9 would frustrate most kindergarteners and delay their progress.'
    },
    {
      question: 'My child can do shape counting but freezes when shapes are removed. What should I do?',
      answer: 'This is exactly where number line worksheets come in. A number line is a bridge between concrete shapes and abstract numbers. Start by having your child draw small circles above the number line to represent the jumps — this connects the shape counting they already know to the number line format. Over several weeks, reduce the drawing until they are using the number line alone. Then move to basic fact worksheets. This transition typically takes 2-3 months and should not be rushed.'
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
      stage: 'Pre-Kindergarten — Exploring Take-Away',
      description: 'At this stage, the goal is not correct answers but understanding the concept of "taking away." Use shape counting worksheets with very small numbers (within 3 or 4). Have your child physically cross out shapes and count what remains. The most important milestone is your child saying "taking away makes less" in their own words. Do not worry about speed or memorization at this stage.'
    },
    {
      stage: 'Kindergarten — Reliable Take-Away Within 10',
      description: 'By mid-kindergarten, a child should solve shape counting subtraction problems within 10 reliably, though they may still count each remaining shape individually. The key milestone is understanding that crossed-out shapes are gone and should not be counted. By the end of kindergarten, a child should transition from shape counting to number lines for simple problems (differences within 5).'
    },
    {
      stage: 'Early First Grade — Transition to Number Lines',
      description: 'For 1st graders who have mastered shape counting, the next step is number line subtraction. The consistency between tools is a major benefit — both show subtraction as "removing" or "jumping back." A child who can use a number line for 9-4 has internalized the concept well enough to begin abstract fact work. Shape counting should become a backup tool by mid-1st grade, not the primary method.'
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
              Subtraction Shape Counting Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Visual Subtraction by Crossing Out Shapes
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
              Build a mental model of subtraction before memorizing facts. Shape counting makes subtraction visible — children can see what "taking away" means before they are asked to do it abstractly.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=subtraction&skill=shape-counting" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Shape Counting Worksheets
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

          {/* Why Shape Counting Matters */}
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
              Why Shape Counting Makes Subtraction Click
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              For many young children, subtraction feels abstract. You say "7 minus 3 equals 4" and they nod — but do they understand what that means? A shape counting worksheet makes the answer visible. A child who sees 7 circles, watches 3 get crossed out, and counts the remaining 4 circles has experienced subtraction, not just memorized a fact. That experience builds a mental model that supports fact retrieval for years.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Shape counting is also the best tool for the most common early subtraction error: counting the crossed-out shapes instead of the remaining ones. When the problem is visible, you can see exactly where the error happened and correct it. For students ready to move beyond shapes to number lines, our{' '}
              <Link href="/subtraction-number-lines-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>number line subtraction worksheets</Link>{' '}
              are the natural next step.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to move to abstract fact recall, our{' '}
              <Link href="/subtraction-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>{' '}
              are the next step after number lines.
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
              How Shape Counting Develops by Stage
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
              What to use at each stage, what to watch for, and when to move on
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
              How to Use Shape Counting for Subtraction
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
              Teach this process once — it works for any shape counting problem
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Count the Total Shapes', desc: 'Count all the shapes in the group. Write that number as the first number in the equation. This builds one-to-one correspondence and connects the picture to the numeral.' },
                { step: '2', title: 'Cross Out the Taken-Away Shapes', desc: 'Cross out the number of shapes shown in the problem. Say: "We are taking away ___ shapes. Watch me cross them out." Have your child cross out shapes themselves when ready.' },
                { step: '3', title: 'Count What Remains', desc: 'Count only the shapes that are NOT crossed out. Cover the crossed-out shapes with a finger if needed. That number is the answer. Write it in the equation.' }
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

          {/* Worksheet Types */}
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
                Three Types of Shape Counting Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Simple Take-Away',
                    who: 'Pre-K and early kindergarten',
                    desc: 'Shapes are shown with some crossed out. The child counts the remaining shapes. No equation writing required — just counting and understanding that crossed out means gone.'
                  },
                  {
                    title: 'Equation Match',
                    who: 'Kindergarten',
                    desc: 'The worksheet shows both the picture and the equation. The child crosses out shapes to match the equation, then writes the answer. This connects the visual model to the abstract symbols.'
                  },
                  {
                    title: 'Word Problem + Shapes',
                    who: 'Late kindergarten and 1st grade',
                    desc: 'A simple word problem is followed by blank shapes. The child draws the shapes, crosses out the taken-away amount, and writes the answer. This builds the skill of translating words into math.'
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
                When Visual Practice Is Not Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For some children, number sense does not develop automatically through practice. If your child is in late kindergarten and still cannot reliably count the remaining shapes without recounting the crossed-out ones — or cannot connect the picture to the equation — the underlying issue is early number sense, not subtraction procedure. Our <strong>Number Sense Foundations</strong> course (K–2) builds subitizing, counting, and number relationships step by step. You can also browse all courses and planners on the{' '}
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
            <Link href="/subtraction-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Subtraction Practice Hub
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
                { name: 'Number Line Subtraction', href: '/subtraction-number-lines-worksheets', desc: 'The step after shapes — build the bridge to abstract facts' },
                { name: 'Basic Subtraction Facts', href: '/subtraction-basic-facts-worksheets', desc: 'The step after number lines — build automatic recall of differences' },
                { name: 'Subtraction Word Problems', href: '/subtraction-word-problems-worksheets', desc: 'Apply subtraction in real-world contexts alongside shape practice' },
                { name: 'Kindergarten Worksheets', href: '/kindergarten-worksheets', desc: 'Full kindergarten math overview including shape counting foundations' },
                { name: 'Grade 1 Worksheets', href: '/grade-1-worksheets', desc: 'Where shape counting transitions to number lines and facts' },
                { name: 'Addition Shape Counting', href: '/addition-shape-counting-worksheets', desc: 'The same visual approach for addition — teach both operations consistently' }
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
              Real questions parents ask about shape counting subtraction
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
                Make Subtraction Visible Today
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
                Generate custom shape counting subtraction worksheets. Choose your number range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=subtraction&skill=shape-counting" style={{
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
                  Create Shape Counting Worksheets Now
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