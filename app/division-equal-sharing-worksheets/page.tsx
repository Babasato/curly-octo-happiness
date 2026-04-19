// app/division-equal-sharing-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Equal Sharing Division Worksheets | Free Printable 3-4 Grade Math',
  description: 'Free printable equal sharing division worksheets for 3rd-4th grade. Practice division as sharing equally with real-world word problems. Build conceptual understanding of division.',
  alternates: {
    canonical: 'https://homeschoolmath.site/division-equal-sharing-worksheets',
  },
}

export default function DivisionEqualSharingWorksheets() {
  const faqs = [
    {
      question: 'What are equal sharing division problems?',
      answer: 'Equal sharing problems are the simplest form of division word problems. They present division as sharing a total amount equally among a number of groups. For example: "Sarah has 12 cookies. She wants to share them equally among 3 friends. How many cookies does each friend get?" The answer is 4. This builds the conceptual understanding that division means "fair sharing" — the foundation for all division understanding. Children who understand equal sharing rarely confuse division with other operations.'
    },
    {
      question: 'When should I use equal sharing worksheets?',
      answer: 'Equal sharing worksheets are ideal for 3rd grade, when children are first learning what division means. Use them before introducing division notation (÷). Start with sharing problems using small numbers (within 20) and real objects. Then progress to written problems with pictures. Finally, introduce the division equation alongside the sharing story. Most children need 2-4 weeks of equal sharing practice before they understand what division means conceptually. Do not rush to division facts before this conceptual foundation is solid.'
    },
    {
      question: 'How are equal sharing problems different from grouping problems?',
      answer: 'Equal sharing problems ask: "12 cookies shared among 3 friends — how many each?" (12 ÷ 3 = 4). The unknown is the size of each group. Grouping problems ask: "12 cookies, put 4 in each bag — how many bags?" (12 ÷ 4 = 3). The unknown is the number of groups. Both are division, but children often find sharing easier because they have experienced sharing in real life. Teach sharing first, then grouping. Our worksheets include both types, labeled so you know which is which.'
    },
    {
      question: 'My child can solve equal sharing problems with objects but not with numbers. What should I do?',
      answer: 'This is exactly where you want to be. The child understands the concept of division but has not yet connected it to abstract symbols. The fix is gradual: first, have your child solve with objects and then write the equation afterward. Next, have your child look at the equation and use objects to find the answer. Finally, remove the objects for the easiest problems (within 10) and keep them available for harder ones. This transition typically takes 4-6 weeks and should not be rushed. Moving to symbols before the concept is solid creates confusion.'
    },
    {
      question: 'Should I use equal sharing worksheets for word problems only, or also for equations?',
      answer: 'Start with word problems only. A child who sees 12 ÷ 3 = ? without context has no reason to know that division means sharing. A child who hears "12 cookies shared among 3 friends" immediately understands the situation. Our equal sharing worksheets always include word problems alongside the equations. The equation reinforces the symbol meaning, but the word problem provides the meaning. Never give a child an isolated division equation before they understand what division means — that teaches symbol manipulation without understanding.'
    },
    {
      question: 'What comes after equal sharing worksheets?',
      answer: 'The natural progression is: equal sharing word problems (conceptual understanding) → grouping word problems (how many groups?) → basic division facts (abstract practice) → fact families (connecting to multiplication) → missing divisors (algebraic thinking). Equal sharing is the first step. Most children spend 2-4 weeks on equal sharing before moving to grouping problems, then 2-4 weeks on grouping, then begin basic division facts. If your child masters sharing quickly, move to grouping. If they struggle, stay longer on sharing with real objects.'
    },
    {
      question: 'How do I teach the difference between sharing and grouping to my child?',
      answer: 'Use consistent language. For sharing: "We know how many groups. We need to find how many in each group." For grouping: "We know how many in each group. We need to find how many groups." Write these phrases on an index card. When your child reads a word problem, have them point to the key phrase before solving. "How many in each?" means sharing (dividend ÷ number of groups). "How many groups?" means grouping (dividend ÷ size of each group). Within 4-6 weeks of explicit phrase teaching, most children stop confusing the two types.'
    },
    {
      question: 'Do your equal sharing worksheets include visual aids?',
      answer: 'Yes — our equal sharing worksheets include pictures for the first two difficulty levels. For example: 12 cookies drawn on the page, with 3 circles drawn for the friends. The child draws the cookies into the circles one by one to find how many each friend gets. This visual, hands-on approach builds the mental model that makes abstract division meaningful. For children who struggle with sharing, start with the picture-based worksheets and do not move to abstract problems until the picture method feels easy.'
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
      stage: 'Concrete Sharing (With Objects or Pictures)',
      description: 'At this stage, do not use equations. Give your child 12 objects (cookies, blocks, or drawn circles) and say: "Share these equally among 3 friends. How many does each friend get?" The child physically shares the objects. The goal is experiencing division, not writing answers. Most children need 1-2 weeks of concrete sharing before moving to written problems.'
    },
    {
      stage: 'Picture-Based Sharing Worksheets',
      description: 'The worksheet shows a total number of objects (drawn as pictures) and circles for the groups. The child draws the objects into the groups one by one, then writes the answer. The equation may be included or added later. This stage builds the connection between the physical experience and the written problem. Spend 2-3 weeks on this stage.'
    },
    {
      stage: 'Abstract Sharing Word Problems',
      description: 'The worksheet presents word problems without pictures: "12 cookies shared among 3 friends — how many each?" The child must visualize the sharing or use objects if needed. The equation 12 ÷ 3 = 4 is written alongside. This stage transitions from concrete to abstract. Spend 2-3 weeks on this stage before moving to grouping problems or division facts.'
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
              Equal Sharing Division Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Understanding Division as Fair Sharing
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
              Before a child can divide fluently, they need to understand what division means. Equal sharing problems connect division to experiences every child has had — sharing cookies, toys, or treats fairly.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=division&skill=equal-sharing" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Equal Sharing Worksheets
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

          {/* Why Equal Sharing Matters */}
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
              Why Equal Sharing Is Where Division Understanding Begins
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Before a child can divide fluently, they need to understand what division means. Equal sharing problems use simple language and real-world scenarios to build that understanding. "12 cookies shared among 3 friends — how many each?" This connects division to something the child has experienced. A child who understands equal sharing may still be slow at division facts — but they have the conceptual foundation that makes fact practice meaningful rather than mechanical.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many parents skip equal sharing and go straight to division equations. This is a mistake. A child who sees "12 ÷ 3 = ?" without context has no reason to know that the ÷ symbol means "share equally." They might guess, or they might memorize the procedure without understanding. Equal sharing worksheets provide the context that makes the division symbol meaningful. For students ready to move beyond sharing to abstract practice, see our{' '}
              <Link href="/division-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic division facts worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready to learn grouping (the other type of division), our{' '}
              <Link href="/division-grouping-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>grouping worksheets</Link>{' '}
              teach division as "how many groups?" after sharing is understood.
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
              How Equal Sharing Understanding Develops
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
              Three stages — do not rush to abstract problems
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
              How to Teach Equal Sharing
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
              Use this script — it works for any sharing problem
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read the Problem Aloud', desc: '"Sarah has 12 cookies. She wants to share them equally among 3 friends. How many cookies does each friend get?" Have your child point to the numbers as you read.' },
                { step: '2', title: 'Act It Out', desc: 'Use 12 objects (cookies, blocks, or drawn circles). Give one object to each friend, then another, until all objects are gone. Count how many each friend has.' },
                { step: '3', title: 'Write the Equation', desc: 'After acting it out, write 12 ÷ 3 = 4. Point to each part: "12 is what we started with. 3 is how many friends. 4 is how many each friend gets." The equation now has meaning.' }
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
                Three Types of Equal Sharing Worksheets
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Picture-Based Sharing',
                    who: 'Beginning 3rd grade',
                    desc: 'A picture shows the total number of objects and circles for the groups. The child draws the objects into the groups. No reading required — just understanding that sharing means equal groups.'
                  },
                  {
                    title: 'Simple Sharing Word Problems',
                    who: '3rd grade',
                    desc: '"12 cookies shared among 3 friends — how many each?" The language is consistent: "shared among," "divided equally," "how many each." The equation is introduced alongside.'
                  },
                  {
                    title: 'Mixed Sharing and Grouping',
                    who: 'Late 3rd grade',
                    desc: 'Problems include both sharing ("how many each?") and grouping ("how many groups?"). The child must distinguish between the two types using key phrases.'
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
                When Equal Sharing Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For some children, the gap is not in practice — it is in the underlying language comprehension or number sense that makes sharing meaningful. If your child is in 4th grade and still cannot reliably solve equal sharing word problems, or cannot connect the sharing story to the division equation, the issue may be broader than division. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) builds the conceptual groundwork that makes all operations intuitive. You can also browse all available courses and planners on the{' '}
                <Link href="/resources" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>resources page</Link>.
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

          {/* Back to Parent Link */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Link href="/division-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Division Practice Hub
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
                { name: 'Basic Division Facts', href: '/division-basic-facts-worksheets', desc: 'The next step after equal sharing — abstract fact practice' },
                { name: 'Fact Families', href: '/division-fact-families-worksheets', desc: 'Connect sharing to multiplication' },
                { name: 'Missing Divisors', href: '/division-missing-divisors-worksheets', desc: 'Apply sharing to find unknown numbers' },
                { name: 'Inverse Operations', href: '/division-inverse-operations-worksheets', desc: 'See how sharing relates to multiplication' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview — where equal sharing is introduced' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Where sharing problems become more complex' }
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
              Real questions parents ask about equal sharing
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
                Build Division Understanding Today
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
                Generate custom equal sharing worksheets. Choose your number range and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=division&skill=equal-sharing" style={{
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
                  Create Equal Sharing Worksheets Now
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