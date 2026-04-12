// app/fraction-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fraction Word Problems Worksheets | Free Printable 4th-6th Grade Math',
  description: 'Free printable fraction word problems worksheets for 4th-6th grade. Practice real-world fraction scenarios involving recipes, measurement, and sharing.',
  alternates: {
    canonical: 'https://homeschoolmath.site/fraction-word-problems-worksheets',
  },
}

export default function FractionWordProblemsWorksheets() {
  const faqs = [
    {
      question: 'What fraction word problems can I practice with these worksheets?',
      answer: 'Our worksheets cover real-world fraction scenarios including recipes (1/2 cup of flour), measurement (3/4 of an inch), sharing (4/5 of a pizza), comparing fractions in context, and multi-step problems combining operations.'
    },
    {
      question: 'Why does my child freeze on fraction word problems when they can solve equations?',
      answer: 'This is extremely common. The issue is reading comprehension and situation recognition — not fraction skills. Your child has learned what to do when they see fraction notation. But a word problem does not have fraction notation visible. The child must read the story, identify what is being asked, and decide which operation to use. The fix is explicit teaching: read the problem aloud, ask "What is this problem about? Recipes? Measurement? Sharing?" and have your child restate the problem in their own words.'
    },
    {
      question: 'What keywords signal fraction word problems?',
      answer: 'Fraction keywords include: "half," "third," "quarter," "of" (as in 1/2 of the pizza), "each," "per," "share equally," "remaining," "left over," "total," "combined." However, warn your child that keywords are clues, not rules — the best strategy is to understand the situation. For fractions, "of" usually means multiplication (1/2 of 10 = 5).'
    },
    {
      question: 'Should fraction word problems be taught before or after fraction operations?',
      answer: 'Teach them alongside operations, not after. A child who can add 1/2 + 1/3 but cannot recognize that a recipe problem requires that calculation has learned a procedure without understanding when to use it. Start with simple sharing word problems (1/2 of a pizza) while teaching basic fractions, then expand to operations as skills develop.'
    },
    {
      question: 'How do I help my child who guesses the operation instead of reading carefully?',
      answer: 'Guessing the operation is the most common word problem error. Two fixes work well. First, have your child cover the numbers and read only the words first. Ask: "What is happening in this story? Are we combining, comparing, or sharing?" Only after answering that should your child uncover the numbers. Second, have your child rewrite the word problem as an equation before solving. Within 2-3 weeks of this explicit strategy, most guessing stops.'
    },
    {
      question: 'What is the difference between part-whole and part-part fraction word problems?',
      answer: 'Part-whole problems: "1/2 of the pizza is left" — the fraction describes a part of a whole. Part-part problems: "The ratio of boys to girls is 3/4" — the fraction compares two parts. Our fraction word problems focus on part-whole relationships (the most common type in elementary school). Part-part problems (ratios) are in our pre-algebra section.'
    },
    {
      question: 'How many fraction word problems should my child practice daily?',
      answer: '5-10 word problems per session is effective. Word problems take longer than equations because of the reading and comprehension step. Quality over quantity — it is better to solve 5 problems correctly with full understanding than 15 problems guessed. Spend 15-20 minutes daily on word problems, not more.'
    },
    {
      question: 'Do the answer keys show the steps?',
      answer: 'Answer keys provide only the final answer. This allows students to work through the reasoning independently while giving parents quick verification. If your child gets a word problem wrong, do not just show the correct answer. Go back to the problem and ask: "Let\'s read this again. What is happening? What are we trying to find out?" Walking through the reasoning is more valuable than the correct answer.'
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
      stage: 'Basic Fraction Word Problems — Identifying Fractions',
      description: 'Worksheets ask: "What fraction of the pizza is left?" The child identifies the fraction from a picture or simple story. This builds the connection between fraction notation and real-world situations. Spend 3-5 days on this stage.'
    },
    {
      stage: 'One-Step Fraction Operation Word Problems',
      description: 'Worksheets present simple operation problems: "If you eat 1/4 of a pizza and your friend eats 1/4, how much was eaten?" (addition) or "A recipe calls for 3/4 cup of flour. You only have 1/2 cup. How much more do you need?" (subtraction). Spend 5-7 days on this stage.'
    },
    {
      stage: 'Multi-Step Fraction Word Problems',
      description: 'Worksheets combine multiple operations: "A cake recipe calls for 2/3 cup of sugar. You make 1/2 of the recipe. Then you use 1/4 cup of that sugar for frosting. How much sugar is left?" (multiplication then subtraction). Spend 7-10 days on this stage.'
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
              Fraction Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Real-World Fraction Scenarios
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
              A child can add 1/2 + 1/3 = 5/6. But do they know when to add fractions? Word problems build the skill of recognizing fraction situations — the skill that matters in real life.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=fractions&skill=word-problems" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Fraction Word Problems Worksheets
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

          {/* Why Fraction Word Problems Matter */}
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
              Why Fraction Word Problems Are the True Test of Fraction Understanding
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              A child can memorize that 1/2 + 1/3 = 5/6. But do they know when to add fractions? Word problems ask children to read a scenario, identify what the problem is asking, and choose the correct operation. This is what real math looks like — not isolated equations, but applying skills to actual situations like cooking, measuring, and sharing.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Many parents focus exclusively on computation worksheets and then wonder why their child freezes on word problems. The answer is simple: word problems require reading comprehension and situation recognition. That is why word problems should run alongside computation practice from the very beginning. For students who need computation fluency alongside word problem practice, see our <Link href="/fraction-addition-subtraction-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>adding and subtracting fractions worksheets</Link> and <Link href="/fraction-multiplication-division-worksheets" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplying and dividing fractions worksheets</Link>.
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
              How to Progress Through Fraction Word Problems
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
              Three stages — start with identifying fractions in pictures
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
              How to Solve Fraction Word Problems
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
              Teach this process — it works for any word problem
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it in their own words. Ask: "What is happening in this story? Is this about recipes, measurement, or sharing?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Operation', desc: 'Ask: "Are we combining (addition), comparing (subtraction), taking a part (multiplication), or dividing (division)?" Have your child explain why before solving.' },
                { step: '3', title: 'Write the Equation and Solve', desc: 'Write the fraction equation based on the problem. Solve it using fraction operation rules. Then ask: "Does this answer make sense in the story?" If not, go back to step 1.' }
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
                Three Types of Fraction Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Sharing and Leftover Problems',
                    who: '3rd-4th grade',
                    desc: '"If you have 3/4 of a pizza and you eat 1/4, how much is left?" (subtraction) or "If you and a friend share 1/2 of a pizza equally, how much does each get?" (division). The most intuitive fraction context.'
                  },
                  {
                    title: 'Recipe and Measurement Problems',
                    who: '4th-5th grade',
                    desc: '"A recipe calls for 2/3 cup of flour. You want to make 1/2 of the recipe. How much flour do you need?" (multiplication) or "You have 3/4 cup of sugar but need 1/2 cup. How much extra?" (subtraction).'
                  },
                  {
                    title: 'Multi-Step Problems',
                    who: '5th-6th grade',
                    desc: '"A cake recipe calls for 2/3 cup of sugar. You make 1/2 of the recipe. Then you use 1/4 cup of that sugar for frosting. How much sugar is left?" (multiplication then subtraction). Requires multiple operations in sequence.'
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
                { name: 'Basic Fraction Concepts', href: '/fraction-basics-worksheets', desc: 'Build foundational understanding before word problems' },
                { name: 'Equivalent Fractions', href: '/fraction-equivalent-worksheets', desc: 'Essential for comparing fractions in word problems' },
                { name: 'Adding and Subtracting Fractions', href: '/fraction-addition-subtraction-worksheets', desc: 'Build computation fluency for word problems' },
                { name: 'Multiplying and Dividing Fractions', href: '/fraction-multiplication-division-worksheets', desc: 'Build advanced computation fluency' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Full 5th grade math overview' },
                { name: 'Grade 6 Worksheets', href: '/grade-6-worksheets', desc: 'Where fraction word problems become more complex' }
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
              Real questions parents ask about fraction word problems
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
                Apply Fractions to Real-World Situations Today
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
                Generate custom fraction word problems worksheets. Choose your problem type (sharing, recipes, measurement, or multi-step) and difficulty level, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=fractions&skill=word-problems" style={{
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
                  Create Fraction Word Problems Worksheets Now
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