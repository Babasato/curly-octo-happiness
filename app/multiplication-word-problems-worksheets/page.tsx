// app/multiplication-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication Word Problems Worksheets | Free Printable 3-6 Grade Math',
  description: 'Free printable multiplication word problems worksheets for 3rd-6th grade. Practice real-world multiplication scenarios with one-step and multi-step problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplication-word-problems-worksheets',
  },
}

export default function MultiplicationWordProblemsWorksheets() {
  const faqs = [
    {
      question: 'What are multiplication word problems?',
      answer: 'Multiplication word problems are real-world scenarios that require multiplication to solve. For example: "There are 8 rows of chairs with 6 chairs in each row. How many chairs are there total?" The answer is 48. Word problems build reading comprehension and the ability to apply math to real situations. A child who can solve 8×6=48 but cannot solve that word problem has learned a procedure without understanding when to use it.'
    },
    {
      question: 'When should I introduce multiplication word problems?',
      answer: 'Children can start with picture-based word problems (arrays) in 2nd grade. By 3rd grade, they should solve one-step word problems with facts through 10×10. By 4th grade, two-step word problems and problems with larger numbers (up to 12×12). By 5th-6th grade, multi-step problems that combine multiplication with addition, subtraction, or division. Word problems should be part of regular practice from the beginning of multiplication instruction — not added as an afterthought.'
    },
    {
      question: 'What keywords signal multiplication?',
      answer: 'Teach your child to look for these common keywords: "each," "per," "total," "in all," "altogether," "rows of," "columns of," "groups of," "times," "multiply," "product," "array," "area," "double," "triple," "multiple." However, warn your child that keywords are not always reliable — the best strategy is to understand the situation. For example, "total" can also appear in addition problems. Teach keywords as clues, not rules.'
    },
    {
      question: 'My child can solve multiplication equations but freezes on word problems. What is happening?',
      answer: 'This is extremely common and does not mean your child "doesn\'t get multiplication." The issue is reading comprehension and situation recognition — two separate skills from computation. Your child has learned what to do when they see a multiplication sign. But a word problem does not have a multiplication sign. Your child must read the story, identify what is being asked, and decide that multiplication is the right operation. The fix is explicit teaching: read the problem aloud, ask "Are we combining equal groups?" and have your child restate the problem in their own words. Within 4-6 weeks of explicit word problem practice, most children make the connection.'
    },
    {
      question: 'What is the difference between equal groups and array word problems?',
      answer: 'Equal groups problems: "There are 5 bags with 4 apples in each bag. How many apples total?" (5×4=20). Array problems: "There are 5 rows of seats with 4 seats in each row. How many seats total?" (5×4=20). Both use multiplication, but arrays connect to area models used in later math. Our word problems include both types. If your child struggles with array problems, draw the array on paper — the visual model usually clarifies the situation immediately.'
    },
    {
      question: 'When should my child start two-step multiplication word problems?',
      answer: 'Two-step word problems (like "A bakery bakes 8 trays of muffins with 12 muffins per tray. They sell 35 muffins. How many are left?") require multiplication followed by subtraction. These are typically introduced in 4th grade. However, your child should only attempt two-step problems after they can solve one-step word problems reliably. The common error in two-step problems is doing the operations in the wrong order or missing one step entirely. Teach your child to break the problem into parts: "First, what do we need to find? Then, what do we do next?" Write each step separately.'
    },
    {
      question: 'How do I help my child who guesses the operation instead of reading carefully?',
      answer: 'Guessing the operation is the most common word problem error, and it usually happens because the child is rushing. Two fixes work well. First, have your child cover the numbers and read only the words first. Ask: "What is happening in this story? Are we combining equal groups?" Only after answering that should your child uncover the numbers. Second, have your child rewrite the word problem as an equation before solving. This forces them to map the words to the symbols. Within 2-3 weeks of this explicit strategy, most guessing stops.'
    },
    {
      question: 'Do your word problem worksheets include answer keys?',
      answer: 'Yes, all our worksheets include answer keys. However, we recommend using answer keys for checking only — not for teaching. If your child gets a word problem wrong, do not just show them the correct answer. Go back to the problem and ask: "Let\'s read this again. What is happening? Are we combining equal groups?" Walking through the reasoning is far more valuable than providing the correct answer. The answer key is for parent verification, not for child correction.'
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
      stage: '2nd Grade — Picture Word Problems (Arrays)',
      description: 'At this stage, word problems should include pictures of arrays. For example: a picture of 3 rows of 4 dots, and the text "How many dots in total?" The child counts the dots and writes the equation. The goal is understanding that the words match the picture. Do not expect independent reading — read the problem aloud to your child.'
    },
    {
      stage: '3rd Grade — One-Step Word Problems with Facts to 10×10',
      description: 'By mid-3rd grade, a child should solve one-step multiplication word problems without pictures. The key skill is identifying equal groups situations. By the end of 3rd grade, a child should solve one-step problems with facts through 10×10 and begin recognizing array and area problems.'
    },
    {
      stage: '4th-6th Grade — Multi-Step and Larger Numbers',
      description: 'By 4th grade, a child should solve one-step word problems with facts through 12×12 and begin two-step problems (multiplication + addition/subtraction). By 5th grade, multi-step problems with larger numbers and decimal multiplication. By 6th grade, word problems that combine multiplication with fractions, ratios, and percentages.'
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
              Multiplication Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Real-World Multiplication Scenarios
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
              A child can memorize that 8×6=48. But do they know when to multiply? Word problems build the skill of recognizing multiplication situations — the skill that matters in real life.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?grade=third&topic=multiplication&skill=word-problems" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Multiplication Word Problems Worksheets
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

          {/* Why Word Problems Matter */}
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
              Why Word Problems Are the True Test of Multiplication Understanding
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              A child can memorize that 8×6=48. But do they know when to multiply? Word problems ask children to read a scenario, identify what the problem is asking, and choose the correct operation. This is what real math looks like — not isolated equations, but applying skills to actual situations. Research consistently shows that word problem proficiency is a stronger predictor of later math success than computation speed alone.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many parents focus exclusively on computation worksheets and then wonder why their child freezes on word problems. The answer is simple: word problems require a different skill set. A child can be fluent in multiplication facts but still struggle to recognize a multiplication situation in a story. That is why word problems should run alongside computation practice from the very beginning. For students who need to build computation fluency alongside word problem practice, see our{' '}
              <Link href="/multiplication-mixed-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>mixed facts worksheets</Link>{' '}
              and{' '}
              <Link href="/multiplication-times-tables-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>times tables worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready for more complex problem-solving, our{' '}
              <Link href="/multiplication-missing-factors-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>missing factors worksheets</Link>{' '}
              and multi-step problem pages build the next level of skill.
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
              Word Problem Skills by Grade Level
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
              What to expect at each stage, and what to watch for
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
              How to Solve Multiplication Word Problems
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
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it in their own words. Ask: "What is happening in this story? Are we combining equal groups?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Operation', desc: 'Ask: "Are we putting equal groups together?" If yes, it is multiplication. Have your child explain why before solving. "There are 8 groups with 6 in each group."' },
                { step: '3', title: 'Write the Equation and Solve', desc: 'Write the multiplication equation based on the problem. Solve it. Then ask: "Does this answer make sense in the story?" If not, go back to step 1.' }
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
                Three Types of Multiplication Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Equal Groups Problems',
                    who: '2nd-3rd grade',
                    desc: '"There are 5 bags with 4 apples in each bag. How many apples total?" The key language: "each," "per," "groups of." The situation is combining equal groups.'
                  },
                  {
                    title: 'Array/Area Problems',
                    who: '3rd-4th grade',
                    desc: '"There are 8 rows of seats with 6 seats in each row. How many seats total?" The key language: "rows of," "columns of," "array," "area." Connects to geometry.'
                  },
                  {
                    title: 'Multi-Step Problems',
                    who: '4th grade and up',
                    desc: '"A bakery bakes 8 trays of muffins with 12 muffins per tray. They sell 35 muffins. How many are left?" Requires multiplication then addition/subtraction.'
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
                When Word Problem Struggles Keep Happening
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                If your child consistently guesses the operation or cannot restate word problems in their own words, the issue may be reading comprehension or language processing — not math. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) includes explicit instruction in mathematical language and problem-solving strategies that bridge reading and math. You can also browse all available courses and planners on the{' '}
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
            <Link href="/multiplication-practice" style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}>
              ← Back to Multiplication Practice Hub
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
                { name: 'Mixed Facts', href: '/multiplication-mixed-facts-worksheets', desc: 'Build the computation fluency that makes word problems easier' },
                { name: 'Array Visuals', href: '/multiplication-array-visuals-worksheets', desc: 'Visual models that help with array word problems' },
                { name: 'Missing Factors', href: '/multiplication-missing-factors-worksheets', desc: 'Solve for unknown numbers in word problems' },
                { name: 'Fact Families', href: '/multiplication-fact-families-worksheets', desc: 'Connect multiplication to division in word problems' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Full 3rd grade math overview — where word problems become a major focus' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Where multi-step word problems appear regularly' }
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
              Real questions parents ask about multiplication word problems
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
                Build Real-World Multiplication Skills Today
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
                Generate custom multiplication word problems worksheets. Choose your grade level, problem type, and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?grade=third&topic=multiplication&skill=word-problems" style={{
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