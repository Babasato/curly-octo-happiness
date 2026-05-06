// app/fraction-comparing-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparing Fractions Worksheets | Free Printable 4th-5th Grade Math',
  description: 'Free printable comparing fractions worksheets for 4th-5th grade. Practice comparing fractions with like and unlike denominators using benchmarks and equivalence.',
  alternates: {
    canonical: 'https://homeschoolmath.site/fraction-comparing-worksheets',
  },
}

export default function FractionComparingWorksheets() {
  const faqs = [
    {
      question: 'What are the different ways to compare fractions?',
      answer: 'There are three main strategies: (1) Same denominator — compare numerators (3/8 vs 5/8). (2) Same numerator — compare denominators (3/4 vs 3/8, smaller denominator = larger fraction). (3) Different numerator and denominator — find common denominator using equivalent fractions, or use benchmark fractions (compare each to 1/2, 1, etc.). Teach all three strategies.'
    },
    {
      question: 'Why does my child think 3/8 is larger than 5/8?',
      answer: 'This is a reversal of the "same numerator" rule. Children learn that with same numerator, smaller denominator is larger (3/4 &gt; 3/8). Some then incorrectly apply this to same denominator problems. The fix is explicit teaching: "Same denominator — look at the numerator. Larger numerator means larger fraction." Use fraction bars to show that 5/8 covers more area than 3/8.'
    },
    {
      question: 'What is the benchmark fraction strategy?',
      answer: 'Benchmark fractions are common reference points like 0, 1/2, and 1. To compare 3/8 and 5/12, ask: "Is each fraction greater than or less than 1/2?" 3/8 is less than 1/2 (since 4/8 = 1/2). 5/12 is also less than 1/2 (since 6/12 = 1/2). That does not help — so find common denominator: 3/8 = 9/24, 5/12 = 10/24, so 5/12 &gt; 3/8. Benchmarks help eliminate obviously unequal comparisons.'
    },
    {
      question: 'When should my child start comparing fractions?',
      answer: 'Start comparing fractions after your child understands basic fraction concepts (numerator, denominator) and equivalent fractions. Typically this is in 4th grade. Start with same denominator (easiest), then same numerator, then unlike denominators using benchmarks, then unlike denominators using common denominators. Do not rush to unlike denominators until equivalence is solid.'
    },
    {
      question: 'What is the most common comparing fractions error?',
      answer: 'The most common error is comparing only numerators or only denominators. A child might say 3/4 &gt; 3/8 (correct, same numerator) but then also say 5/8 &gt; 3/4 (incorrect, ignoring denominator size). The fix is explicit strategy teaching: "Same denominator? Compare numerators. Same numerator? Compare denominators. Different? Find common denominator." Have your child state the strategy before comparing.'
    },
    {
      question: 'How do fraction bars help with comparing?',
      answer: 'Fraction bars show the size relationship visually. A child can see that 5/8 bar is longer than 3/8 bar (same denominator comparison). They can also see that 3/4 bar is longer than 3/8 bar (same numerator comparison). For unlike denominators, they can overlay bars or use common denominator bars. The visual model prevents the most common comparison errors.'
    },
    {
      question: 'How many comparing fractions problems should my child practice daily?',
      answer: '15-20 problems per session is effective. Start with 5-7 same denominator, then 5-7 same numerator, then 5-7 unlike denominators. Spend 2-3 weeks on comparing fractions before moving to addition and subtraction. Most children need this much practice to internalize the different strategies.'
    },
    {
      question: 'Do the answer keys show the comparison symbol?',
      answer: 'Answer keys show the correct comparison symbol (&lt;, &gt;, or =). Encourage your child to check their work by using fraction bars or benchmark fractions. If they made an error, have them draw a visual model to see why the correct symbol is right.'
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
      stage: 'Same Denominator — Compare Numerators',
      description: 'Worksheets show fractions with the same denominator (3/8 vs 5/8). The child compares numerators — larger numerator means larger fraction. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Same Numerator — Compare Denominators',
      description: 'Worksheets show fractions with the same numerator (3/4 vs 3/8). The child compares denominators — smaller denominator means larger fraction. Spend 3-5 days on this stage.'
    },
    {
      stage: 'Unlike Denominators — Common Denominators',
      description: 'Worksheets show fractions with different numerators and denominators (3/4 vs 2/3). The child finds common denominators using equivalent fractions, then compares numerators. Spend 7-10 days on this stage.'
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
              Comparing Fractions Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Which Fraction Is Larger? Using Benchmarks and Equivalence
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
              Comparing fractions requires flexible thinking. Same denominator? Compare numerators. Same numerator? Compare denominators. Different? Find common denominators or use benchmarks.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=fractions&skill=comparing" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Comparing Fractions Worksheets
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

          {/* Why Comparing Fractions Matters */}
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
              Why Comparing Fractions Requires Flexible Thinking
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Comparing fractions is not a single procedure — it requires choosing the right strategy based on what the fractions look like. Same denominator? Compare numerators. Same numerator? Compare denominators. Different? Find common denominators or use benchmarks. Children who struggle with comparing fractions often try to use the same strategy for every problem.
              </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              These worksheets build comparing skills systematically — starting with the easiest cases (same denominator) and progressing to the hardest (unlike denominators). For students who need equivalent fraction fluency before comparing, see our <Link href="/fraction-equivalent-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>equivalent fractions worksheets</Link>.
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
              How to Progress Through Comparing Fractions
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
              Three stages — master simple cases first
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
              How to Compare Fractions
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
              Teach this decision tree — choose the right strategy
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Same Denominator? Compare Numerators', desc: 'If denominators are the same, the fraction with the larger numerator is larger. Example: 5/8 &gt; 3/8 because 5 &gt; 3.' },
                { step: '2', title: 'Same Numerator? Compare Denominators', desc: 'If numerators are the same, the fraction with the smaller denominator is larger. Example: 3/4 &gt; 3/8 because fourths are larger than eighths.' },
                { step: '3', title: 'Different? Find Common Denominator', desc: 'Find a common denominator using equivalent fractions. Then compare numerators. Example: 3/4 = 9/12, 2/3 = 8/12, so 3/4 &gt; 2/3.' }
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

                    {/* COURSE MENTION */}
          <section className="practice-section">
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
                When Fraction Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the underlying number sense that makes fractions make sense. If your child still thinks 1/8 is larger than 1/4, cannot generate equivalent fractions, or struggles with finding common denominators, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K-2) builds the conceptual groundwork that makes fraction fluency stick. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
            <Link href="/fractions-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Fractions Practice Hub
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
                { name: 'Basic Fraction Concepts', href: '/fraction-basics-worksheets', desc: 'Build foundational understanding before comparing' },
                { name: 'Equivalent Fractions', href: '/fraction-equivalent-worksheets', desc: 'Essential for comparing unlike denominators' },
                { name: 'Fraction Addition and Subtraction', href: '/fraction-addition-subtraction-worksheets', desc: 'The next step after comparing' },
                { name: 'Fraction Word Problems', href: '/fraction-word-problems-worksheets', desc: 'Apply comparing to real-world scenarios' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Full 4th grade math overview' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Where comparing fractions is applied' }
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
              Real questions parents ask about comparing fractions
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
                Master Comparing Fractions Today
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
                Generate custom comparing fractions worksheets. Choose your comparison type (same denominator, same numerator, unlike denominators) and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=fractions&skill=comparing" style={{
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
                  Create Comparing Fractions Worksheets Now
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
