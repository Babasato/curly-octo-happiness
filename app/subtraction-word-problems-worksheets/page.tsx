// app/subtraction-word-problems-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction Word Problems Worksheets | Free Printable K-6 Math Practice',
  description: 'Free printable subtraction word problems worksheets for K-6. Practice real-world subtraction scenarios with one-step and multi-step problems. Learn to recognize when subtraction is needed.',
  alternates: {
    canonical: 'https://homeschoolmath.site/subtraction-word-problems-worksheets',
  },
}

export default function SubtractionWordProblemsWorksheets() {
  const faqs = [
    {
      question: 'What are subtraction word problems?',
      answer: 'Subtraction word problems are real-world scenarios that require subtraction to solve. For example: "Sarah has 12 apples. She gives 8 away. How many does she have left?" The answer is 4. Word problems build reading comprehension and the ability to apply math to real situations. A child who can solve 12-8=4 but cannot solve that word problem has learned a procedure without understanding when to use it — which is why word problems are essential, not optional.'
    },
    {
      question: 'When should I introduce subtraction word problems?',
      answer: 'Children can start with picture-based word problems in kindergarten. By 1st grade, they should solve one-step word problems within 10. By 2nd grade, they should solve one-step problems within 20 and begin two-step problems. By 3rd grade, they should solve multi-step problems with two-digit numbers. Word problems should be part of regular practice from the very beginning of subtraction instruction — not added as an afterthought once computation is mastered. The skill of recognizing when to subtract is separate from the skill of subtracting, and both need practice.'
    },
    {
      question: 'What keywords signal subtraction?',
      answer: 'Teach your child to look for these common keywords: "left," "remain," "remaining," "difference," "fewer," "less than," "how many more," "how many less," "take away," "give away," "spent," "used," "ate," "lost," "sold." However, warn your child that keywords are not always reliable — the best strategy is to understand the situation, not just look for a word. For example, "how many more" usually means subtraction, but in some contexts it could mean addition. Teach keywords as clues, not rules.'
    },
    {
      question: 'My child can solve subtraction equations but freezes on word problems. What is happening?',
      answer: 'This is extremely common and does not mean your child "doesn\'t get subtraction." The issue is reading comprehension and situation recognition — two separate skills from computation. Your child has learned what to do when they see a minus sign. But a word problem does not have a minus sign. Your child must read the story, identify what is being asked, and decide that subtraction is the right operation. This is a higher-level skill. The fix is explicit teaching: read the problem aloud, ask "Are we taking away or comparing?" and have your child restate the problem in their own words. Within 4-6 weeks of explicit word problem practice, most children make the connection.'
    },
    {
      question: 'What is the difference between take-away word problems and comparison word problems?',
      answer: 'Take-away problems: "I had 12 cookies and ate 5. How many are left?" (12 - 5 = 7). Comparison problems: "I have 12 cookies and you have 5. How many more do I have?" (12 - 5 = 7). Both use subtraction but represent different situations. Many children learn take-away first and then freeze when comparison problems appear because the language is different. Our word problems include both types explicitly so children learn to recognize subtraction regardless of how it is presented. If your child can solve take-away but struggles with comparison, teach the phrase: "How many more means subtract to find the difference."'
    },
    {
      question: 'When should my child start two-step word problems?',
      answer: 'Two-step word problems (like "Lisa had 25 stamps. She gave 8 to her friend and then bought 5 more. How many does she have now?") require two operations and are typically introduced in 2nd grade. However, your child should only attempt two-step problems after they can solve one-step word problems reliably. The common error in two-step problems is doing the operations in the wrong order or missing one step entirely. Teach your child to break the problem into parts: "First, what happens? Then, what happens next?" Write each step separately. Most children are ready for two-step problems by the end of 2nd grade.'
    },
    {
      question: 'How do I help my child who guesses the operation instead of reading carefully?',
      answer: 'Guessing the operation is the most common word problem error, and it usually happens because the child is rushing. Two fixes work well. First, have your child cover the numbers and read only the words first. Ask: "What is happening in this story? Are things being taken away or compared?" Only after answering that should your child uncover the numbers. Second, have your child rewrite the word problem as an equation before solving. This forces them to map the words to the symbols. Within 2-3 weeks of this explicit strategy, most guessing stops.'
    },
    {
      question: 'Do your word problem worksheets include answer keys?',
      answer: 'Yes, all our worksheets include answer keys. However, we recommend using answer keys for checking only — not for teaching. If your child gets a word problem wrong, do not just show them the correct answer. Go back to the problem and ask: "Let\'s read this again. What is happening? What are we trying to find out?" Walking through the reasoning is far more valuable than providing the correct answer. The answer key is for parent verification, not for child correction.'
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
      stage: 'Kindergarten — Picture Word Problems',
      description: 'At this stage, word problems should include pictures. For example: a picture of 8 cookies with 3 crossed out, and the text "How many are left?" The child counts the remaining cookies. The goal is understanding that the words match the picture. Do not expect independent reading — read the problem aloud to your child.'
    },
    {
      stage: 'First Grade — One-Step Word Problems Within 10',
      description: 'By mid-1st grade, a child should solve one-step word problems within 10 without pictures, though they may use drawings or fingers. The key skill is identifying take-away situations. By the end of 1st grade, a child should solve one-step problems within 20 and begin recognizing comparison problems ("how many more?").'
    },
    {
      stage: 'Second Grade and Beyond — Multi-Step and Larger Numbers',
      description: 'By 2nd grade, a child should solve one-step word problems within 100 and begin two-step problems. By 3rd grade, multi-step problems with two-digit numbers. By 4th grade, word problems with decimals and fractions. The progression is not about computation difficulty — it is about the complexity of the situation and the number of steps required.'
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
              Subtraction Word Problems Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Real-World Subtraction Scenarios
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
              A child can memorize that 12-8=4. But do they know when to subtract? Word problems build the skill of recognizing subtraction situations — the skill that matters in real life.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/?topic=subtraction&skill=word-problems" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Subtraction Word Problems Worksheets
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
              Why Word Problems Are the True Test of Subtraction Understanding
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              A child can memorize that 12-8=4. But do they know when to subtract? Word problems ask children to read a scenario, identify what the problem is asking, and choose the correct operation. This is what real math looks like — not isolated equations, but applying skills to actual situations. In fact, research consistently shows that word problem proficiency is a stronger predictor of later math success than computation speed alone.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Many parents focus exclusively on computation worksheets and then wonder why their child freezes on word problems. The answer is simple: word problems require a different skill set. A child can be fluent in subtraction facts but still struggle to recognize a subtraction situation in a story. That is why word problems should run alongside computation practice from the very beginning. For students who need to build computation fluency alongside word problem practice, see our{' '}
              <Link href="/subtraction-basic-facts-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>basic facts worksheets</Link>{' '}
              and{' '}
              <Link href="/subtraction-two-digit-no-borrowing-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>two-digit subtraction worksheets</Link>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              For students ready for more complex problem-solving, our{' '}
              <Link href="/addition-word-problems-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>addition word problems</Link>{' '}
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
              How to Solve Subtraction Word Problems
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
                { step: '1', title: 'Read and Restate', desc: 'Read the problem aloud. Have your child restate it in their own words. Ask: "What is happening in this story? What are we trying to find out?" Do not look at the numbers yet.' },
                { step: '2', title: 'Identify the Operation', desc: 'Ask: "Are we taking something away, or comparing two groups?" If taking away or finding a difference, it is subtraction. Have your child explain why before solving.' },
                { step: '3', title: 'Write the Equation and Solve', desc: 'Write the subtraction equation based on the problem. Solve it. Then ask: "Does this answer make sense in the story?" If not, go back to step 1.' }
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
                Three Types of Subtraction Word Problems
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Take-Away Problems',
                    who: 'Kindergarten and 1st grade',
                    desc: '"I had 8 cookies. I ate 3. How many are left?" The key language: "left," "remain," "how many now." The situation is removal.'
                  },
                  {
                    title: 'Comparison Problems',
                    who: '1st and 2nd grade',
                    desc: '"I have 8 cookies. You have 3. How many more do I have?" The key language: "how many more," "how many fewer," "difference." The situation is comparing two groups.'
                  },
                  {
                    title: 'Multi-Step Problems',
                    who: '2nd grade and up',
                    desc: '"Lisa had 25 stamps. She gave 8 to her friend and then bought 5 more. How many does she have now?" Requires two operations in sequence.'
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
                If your child consistently guesses the operation or cannot restate word problems in their own words, the issue may be reading comprehension or language processing — not math. Our <strong>Number Sense Foundations</strong> course (K–2) includes explicit instruction in mathematical language and problem-solving strategies that bridge reading and math. You can also browse all available courses and planners on the{' '}
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
                { name: 'Basic Subtraction Facts', href: '/subtraction-basic-facts-worksheets', desc: 'Build the computation fluency that makes word problems easier' },
                { name: 'Take-Away Subtraction', href: '/subtraction-take-away-worksheets', desc: 'Start with simple take-away word problems before comparison problems' },
                { name: 'Addition Word Problems', href: '/addition-word-problems-worksheets', desc: 'Practice distinguishing addition from subtraction in stories' },
                { name: 'Two-Digit Subtraction', href: '/subtraction-two-digit-no-borrowing-worksheets', desc: 'Apply word problems to larger numbers once basics are solid' },
                { name: 'Grade 2 Worksheets', href: '/grade-2-worksheets', desc: 'Full 2nd grade math overview — where word problems become a major focus' },
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Where multi-step word problems appear regularly' }
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
              Real questions parents ask about subtraction word problems
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
                Build Real-World Subtraction Skills Today
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
                Generate custom subtraction word problems worksheets. Choose your grade level, problem type (take-away, comparison, or mixed), and download clean PDFs with answer keys.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/?topic=subtraction&skill=word-problems" style={{
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