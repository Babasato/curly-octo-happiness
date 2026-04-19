// app/subtraction-take-away-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction Take-Away Worksheets | Free Printable K-2 Math Practice',
  description: 'Free printable subtraction take-away worksheets for K-2. Practice subtraction as removal with simple word problems and visual aids. Build the conceptual understanding that subtraction means "taking away."',
  alternates: {
    canonical: 'https://homeschoolmath.site/subtraction-take-away-worksheets',
  },
}

export default function SubtractionTakeAwayWorksheets() {
  const faqs = [
    {
      question: 'What are take-away problems?',
      answer: 'Take-away problems are the simplest form of subtraction. They present subtraction as removing objects from a group. For example: "Sarah has 8 cookies. She eats 3. How many are left?" The answer is 5. This builds the conceptual understanding that subtraction reduces quantity. Take-away problems are the first type of subtraction most children encounter because they match real-world experiences — children know what it means to have something taken away.'
    },
    {
      question: 'When should I use take-away worksheets?',
      answer: 'Take-away worksheets are ideal for kindergarten and 1st grade students who are learning what subtraction means. They work well alongside shape counting worksheets and before basic facts practice. Most children benefit from take-away problems for 2-3 months before moving to number line subtraction. If a child is in 2nd grade and still needs take-away language to understand subtraction, they likely have a conceptual gap that needs direct attention rather than more worksheets.'
    },
    {
      question: 'How are take-away problems different from comparison problems?',
      answer: 'Take-away problems ask "how many are left?" Comparison problems ask "how many more?" For example, "I have 8 cookies and you have 3. How many more do I have?" This is also subtraction (8-3=5), but the language is different. Many children learn take-away first and then freeze when comparison problems appear because the situation sounds different. Our worksheets include both types explicitly, but the take-away category focuses on removal situations first. Once take-away is solid, introduce comparison language.'
    },
    {
      question: 'My child can solve take-away problems with objects but not with numbers. What should I do?',
      answer: 'This is exactly where you want to be. The child understands the concept of subtraction but has not yet connected it to abstract symbols. The fix is gradual: first, have your child solve with objects and then write the equation afterward. Next, have your child look at the equation and use objects to find the answer. Finally, remove the objects for the easiest problems (within 5) and keep them available for harder ones. This transition typically takes 4-6 weeks and should not be rushed. Moving to symbols before the concept is solid creates confusion.'
    },
    {
      question: 'Should I use take-away worksheets for subtraction word problems only, or also for equations?',
      answer: 'Both, but start with word problems. A child who sees "8 - 3 = ?" without context has no reason to know that subtraction means taking away. A child who hears "I had 8 cookies and ate 3" immediately understands the situation. Our take-away worksheets always include word problems alongside the equations. The equation reinforces the symbol meaning, but the word problem provides the meaning. Never give a child an isolated subtraction equation before they understand what subtraction means — that teaches symbol manipulation without understanding.'
    },
    {
      question: 'What comes after take-away worksheets?',
      answer: 'The natural progression is: take-away word problems (conceptual understanding) → shape counting (visible take-away) → number line subtraction (semi-abstract) → basic fact worksheets (abstract, automatic recall). Take-away is the first step. Most children spend 2-3 months on take-away language and concepts, 2-3 months on shape counting, 2-4 months on number lines, and then continue fact practice throughout 1st and 2nd grade. If your child masters take-away quickly, you can move faster. If they struggle, stay longer on each stage.'
    },
    {
      question: 'My child confuses take-away addition and subtraction word problems. How do I help?',
      answer: 'This is extremely common and does not mean your child "doesn\'t get subtraction." The issue is language comprehension, not math. Teach key phrases explicitly: "left," "remain," "how many now" usually mean subtraction. "In all," "total," "altogether" usually mean addition. Write these phrases on an index card. When your child reads a word problem, have them point to the key phrase before solving. Within 4-6 weeks of explicit phrase teaching, most children stop confusing the operations.'
    },
    {
      question: 'Do you have take-away worksheets for numbers up to 20?',
      answer: 'Our take-away worksheets focus on differences within 10. This is intentional — take-away problems with numbers larger than 10 require counting large groups of objects, which is tedious and error-prone for young children. The goal of take-away is conceptual understanding, not fact mastery. Once a child understands take-away within 10, they are ready to move to shape counting and number lines for larger numbers. Trying to do take-away with 17-9 using objects would frustrate most kindergarteners and delay their progress.'
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
      stage: 'Pre-Kindergarten — Oral Take-Away Stories',
      description: 'At this stage, do not use worksheets at all. Tell simple stories: "You have 4 blocks. You give 1 to your brother. How many do you have now?" Use real objects. The goal is experiencing subtraction, not writing answers. Most children need 1-2 months of oral take-away stories before they are ready for written problems.'
    },
    {
      stage: 'Kindergarten — Written Take-Away with Small Numbers',
      description: 'By mid-kindergarten, a child should solve written take-away problems within 5 reliably, using objects or drawings as needed. The key milestone is connecting the word problem to the equation. By the end of kindergarten, a child should solve take-away problems within 10 with objects and begin solving simple equations without objects (3-1=2, 4-2=2).'
    },
    {
      stage: 'First Grade — Take-Away Fluency Within 10',
      description: 'By early 1st grade, a child should solve take-away word problems within 10 without objects, though they may still use fingers or drawings. The goal is not speed but accurate translation from words to subtraction. By mid-1st grade, take-away should feel automatic enough that the child can focus on the harder skill: distinguishing take-away from comparison problems and addition word problems.'
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
              Subtraction Take-Away Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Understanding Subtraction as Removal
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
              Before a child can subtract fluently, they need to understand what subtraction means. Take-away problems use simple language and real-world scenarios to build that understanding — connecting math to experiences every child has had.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=subtraction&skill=take-away" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Take-Away Worksheets
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

          {/* Why Take-Away Matters */}
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
              Why Take-Away Is Where Subtraction Understanding Begins
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Before a child can subtract fluently, they need to understand what subtraction means. Take-away problems use simple language and real-world scenarios to build that understanding. "You have 10 crayons. You give away 4. How many do you have left?" This connects subtraction to something the child has experienced. A child who understands take-away may still be slow at subtraction facts — but they have the conceptual foundation that makes fact practice meaningful rather than mechanical.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many parents skip take-away and go straight to subtraction equations. This is a mistake. A child who sees "8 - 3 = ?" without context has no reason to know that the minus sign means "take away." They might guess, or they might memorize the procedure without understanding. Take-away worksheets provide the context that makes the minus sign meaningful. For students ready to move beyond take-away to shape counting, our{' '}
              <Link href="/subtraction-shape-counting-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>shape counting worksheets</Link>{' '}
              are the natural next step.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to move to abstract fact recall, our{' '}
              <Link href="/subtraction-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>{' '}
              are the next step after shape counting and number lines.
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
              How Take-Away Understanding Develops
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
              What to expect at each stage, and when to move on
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
              How to Teach Take-Away Subtraction
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
              Use this script — it works for any take-away problem
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read the Problem Aloud', desc: '"Sarah has 8 cookies. She eats 3. How many are left?" Have your child point to the numbers as you read. Ask: "Are we taking away or adding?" (Taking away means subtraction.)' },
                { step: '2', title: 'Act It Out', desc: 'Use objects (cookies, blocks, or drawn circles). Start with 8 objects. Remove 3. Count what remains. Say: "We started with 8, took away 3, and have 5 left."' },
                { step: '3', title: 'Write the Equation', desc: 'After acting it out, write 8 - 3 = 5. Point to each part: "8 is what we started with. 3 is what we took away. 5 is what is left." The equation now has meaning.' }
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
                Three Types of Take-Away Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Picture Take-Away',
                    who: 'Pre-K and kindergarten',
                    desc: 'A picture shows a group of objects with some crossed out. The child counts what remains. No reading required — just understanding that crossed out means gone.'
                  },
                  {
                    title: 'Simple Word Problems',
                    who: 'Kindergarten and 1st grade',
                    desc: 'Short, predictable word problems with numbers within 10. The language is consistent: "___ has ___ . She gives away ___ . How many are left?"'
                  },
                  {
                    title: 'Mixed Take-Away Stories',
                    who: '1st grade',
                    desc: 'Word problems with varied language ("left," "remain," "how many now") and numbers within 20. The child must recognize take-away situations without predictable phrasing.'
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
                When Take-Away Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For some children, the gap is not in practice — it is in the underlying language comprehension or number sense that makes take-away meaningful. If your child is in 1st grade and still cannot reliably identify whether a word problem is asking for addition or subtraction — or cannot connect the word problem to the equation — the issue may be broader than subtraction. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual groundwork that makes all operations intuitive. You can also browse all courses and planners on the{' '}
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
                { name: 'Shape Counting Subtraction', href: '/subtraction-shape-counting-worksheets', desc: 'The step after take-away — make subtraction visible with crossed-out shapes' },
                { name: 'Number Line Subtraction', href: '/subtraction-number-lines-worksheets', desc: 'The step after shape counting — build the bridge to abstract facts' },
                { name: 'Basic Subtraction Facts', href: '/subtraction-basic-facts-worksheets', desc: 'The final step — build automatic recall once understanding is solid' },
                { name: 'Subtraction Word Problems', href: '/subtraction-word-problems-worksheets', desc: 'Apply take-away in varied real-world contexts' },
                { name: 'Kindergarten Worksheets', href: '/kindergarten-worksheets', desc: 'Full kindergarten math overview — where take-away is introduced' },
                { name: 'Addition Take-Away', href: '/addition-take-away-worksheets', desc: 'The same approach for addition — teach both operations consistently' }
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
              Real questions parents ask about take-away subtraction
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
                Build Subtraction Understanding Today
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
                Generate custom take-away subtraction worksheets with simple word problems. Choose your number range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=subtraction&skill=take-away" style={{
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
                  Create Take-Away Worksheets Now
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