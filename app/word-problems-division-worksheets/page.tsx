// app/word-problems-division-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Division Word Problems Worksheets | Free Printable 3-5 Grade Math',
  description: 'Free printable division word problems worksheets for 3rd-5th grade. Practice sharing equally, grouping, and "each gets" scenarios with real-world math problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/word-problems-division-worksheets',
  },
}

export default function WordProblemsDivisionWorksheets() {
  const faqs = [
    {
      question: 'What division word problems can I practice with these worksheets?',
      answer: 'Our worksheets cover sharing equally scenarios ("12 cookies shared among 3 friends"), grouping scenarios ("12 cookies, put 4 in each bag"), and comparison scenarios that use division ("Tom has 4 times as many stickers. He has 28. How many does Lisa have?").'
    },
    {
      question: 'What keywords signal division in word problems?',
      answer: 'Teach your child to look for: "share equally," "split," "each gets," "per," "how many groups," "how many in each," "divided by," "quotient," "half," "third," "quarter." However, warn your child that keywords are clues, not rules — the best strategy is to understand the situation (sharing or grouping).'
    },
    {
      question: 'What is the difference between sharing and grouping division problems?',
      answer: 'Sharing problems: "12 cookies shared among 3 friends — how many each?" (12 ÷ 3 = 4). You know the number of groups, find the size of each group. Grouping problems: "12 cookies, put 4 in each bag — how many bags?" (12 ÷ 4 = 3). You know the size of each group, find the number of groups. Teach both types explicitly. Our worksheets include both.'
    },
    {
      question: 'Why does my child multiply when the problem says "each"?',
      answer: 'Children see "each" and think multiplication (5 bags with 4 apples each = 5 × 4). But division also uses "each" (12 cookies shared among 3 friends — how many each?). The fix is to teach the structure: If you know the total and the number of groups, divide to find how many each. If you know the total and how many each, divide to find the number of groups.'
    },
    {
      question: 'When should my child start division word problems?',
      answer: 'Start division word problems after your child has mastered multiplication word problems (typically 3rd or 4th grade). Division is the inverse of multiplication. Start with sharing problems using small numbers and visual models (drawing cookies into circles). Then introduce grouping problems. Do not rush — spend 2-3 weeks on sharing before grouping.'
    },
    {
      question: 'How many division word problems should my child practice daily?',
      answer: '5-10 word problems per session is effective. Division word problems are harder than multiplication because children must identify which number is the total, which is the number of groups, and which is the size of each group. Quality over quantity — spend 10-15 minutes daily.'
    },
    {
      question: 'How do I teach the difference between sharing and grouping using division?',
      answer: 'Use consistent language. Sharing: "We know how many groups. We need to find how many in each group." Grouping: "We know how many in each group. We need to find how many groups." Write these phrases on an index card. When your child reads a word problem, have them point to the key phrase before solving. Within 2-3 weeks, most children stop confusing the two.'
    },
    {
      question: 'Do the answer keys show the work?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a word problem wrong, go back to the problem and ask: "What is the total? Do we know how many groups or how many in each group?" Walking through the reasoning is more valuable than the correct answer.'
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
      stage: 'Sharing Problems (3rd-4th Grade)',
      description: 'Worksheets present sharing scenarios: "12 cookies shared among 3 friends — how many each?" The child identifies the total and the number of groups, then divides. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Grouping Problems (3rd-4th Grade)',
      description: 'Worksheets present grouping scenarios: "12 cookies, put 4 in each bag — how many bags?" The child identifies the total and the size of each group, then divides. Spend 5-7 days on this stage.'
    },
    {
      stage: 'Mixed Sharing and Grouping Problems (4th-5th Grade)',
      description: 'Worksheets mix both types of division problems. The child must identify which type they are solving and apply the correct division equation. Spend 5-7 days on this stage.'
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
              Division Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Sharing Equally, Grouping, and "Each Gets" Scenarios
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
              A child can divide 12 ÷ 3 = 4. But do they know when to divide? Word problems build the skill of recognizing sharing and grouping situations.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=word-problems&skill=division" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Division Word Problems Worksheets
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

          {/* Why Division Word Problems Matter */}
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
              Why Division Word Problems Appear in Two Different Forms
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Division appears in two different types of situations: sharing (finding how many each) and grouping (finding how many groups). Many children learn one type and freeze when the other appears. The language is different — "how many each" vs "how many bags" — but both use division.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build division word problem skills systematically — from sharing to grouping to mixed practice. For students who need computation fluency alongside word problems, see our <Link href="/division-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division practice worksheets</Link>.
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
              How to Progress Through Division Word Problems
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
              Three stages — master sharing before grouping
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
              How to Solve Division Word Problems
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
              Teach the 3-step method — identify sharing or grouping
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it. Ask: "Are we sharing equally or making groups?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Structure', desc: 'For sharing: total ÷ number of groups = how many each. For grouping: total ÷ size of each group = number of groups.' },
                { step: '3', title: 'Write and Solve', desc: 'Write the division equation based on the structure. Solve it. Then ask: "Does this answer make sense?" Check by multiplying.' }
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
                Three Types of Division Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Sharing Problems',
                    who: '3rd-4th grade',
                    desc: '"12 cookies shared among 3 friends — how many each?" (12 ÷ 3 = 4). The situation is finding how many in each group.'
                  },
                  {
                    title: 'Grouping Problems',
                    who: '3rd-4th grade',
                    desc: '"12 cookies, put 4 in each bag — how many bags?" (12 ÷ 4 = 3). The situation is finding how many groups.'
                  },
                  {
                    title: 'Comparison Problems',
                    who: '4th-5th grade',
                    desc: '"Tom has 4 times as many stickers. He has 28. How many does Lisa have?" (28 ÷ 4 = 7). The situation uses division as the inverse of multiplication.'
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
                When Word Problem Practice Isn't Enough
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child consistently confuses sharing and grouping problems, the issue may be language processing — not math. Our <strong>Number Sense Foundations</strong> course (K-2) builds the language and problem-solving strategies that make word problems manageable. You can also browse all available courses and planners on the{' '}
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
            <Link href="/word-problems" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Word Problems Hub
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
                { name: 'Addition Word Problems', href: '/word-problems-addition-worksheets', desc: 'Practice combining and totaling scenarios' },
                { name: 'Subtraction Word Problems', href: '/word-problems-subtraction-worksheets', desc: 'Practice take-away and comparison' },
                { name: 'Multiplication Word Problems', href: '/word-problems-multiplication-worksheets', desc: 'Practice equal groups and arrays' },
                { name: 'Multi-Step Word Problems', href: '/word-problems-multi-step-worksheets', desc: 'Two or more operations in sequence' },
                { name: 'Division Practice', href: '/division-practice', desc: 'Build computation fluency for word problems' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview' }
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
              Real questions parents ask about division word problems
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
                Master Division Word Problems Today
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
                Generate custom division word problems worksheets. Choose your problem type (sharing, grouping, or mixed) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=word-problems&skill=division" style={{
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
                  Create Division Word Problems Worksheets Now
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
