// app/area-perimeter/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Area and Perimeter Worksheets | Free Printable Practice Sheets',
  description: 'Free printable area and perimeter worksheets for grades 3–5. Practice calculating area of rectangles, perimeter of polygons, and real-world measurement problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/area-perimeter',
  },
}

export default function AreaPerimeter() {
  const faqs = [
    {
      question: 'What is the difference between area and perimeter?',
      answer: 'Perimeter is the total distance around the outside of a shape — you add up all the side lengths. Area is the amount of space inside a shape — for a rectangle, you multiply length by width. The most common confusion is mixing up which formula to use. A helpful anchor: perimeter is like a fence around a yard (you walk the edge), and area is like carpet inside a room (you cover the surface).'
    },
    {
      question: 'When do students learn area and perimeter?',
      answer: 'Perimeter is typically introduced in 2nd or 3rd grade, and area follows in 3rd grade with rectangles. By 4th and 5th grade, students extend to more complex shapes and begin working with area of triangles and composite figures. The concepts return repeatedly through middle school, so a solid conceptual foundation in 3rd grade pays dividends for years.'
    },
    {
      question: 'Why do students confuse area and perimeter?',
      answer: 'The most common reason is that both involve the same numbers — the side lengths of a shape — but you do different things with them. Students who memorize formulas without understanding what area and perimeter represent will mix them up under pressure. The fix is to build the concept first: have students physically walk around a shape (perimeter) and fill it with unit squares (area) before introducing any formulas.'
    },
    {
      question: 'What units do you use for area vs perimeter?',
      answer: 'Perimeter is measured in linear units — cm, m, inches, feet — because you are measuring distance along a line. Area is measured in square units — cm², m², square inches, square feet — because you are measuring a two-dimensional surface. This is a common source of errors on tests: students calculate correctly but write the wrong unit. Emphasizing why the units differ (one dimension vs two) makes this stick better than just stating the rule.'
    },
    {
      question: 'How do I teach area of irregular shapes?',
      answer: 'The most effective approach is decomposition — breaking the irregular shape into rectangles, finding the area of each rectangle, and adding them together. Before introducing this strategy, make sure students have automatic recall of basic multiplication facts, because the calculation load of multi-step area problems will overwhelm a child who is still counting to find products. Grid paper is invaluable here: students can see the unit squares directly.'
    },
    {
      question: 'What real-world contexts help students understand area and perimeter?',
      answer: 'Perimeter connects naturally to fencing, framing a picture, putting a border on a bulletin board, or measuring the edge of a room. Area connects to flooring, painting a wall, covering a table, or planting a garden. Word problems set in these contexts help students identify which measurement is needed without being told — which is the actual skill tested. A child who can only apply a formula when told "find the area" has not fully learned the concept.'
    },
    {
      question: 'How much time should I spend on area and perimeter?',
      answer: 'For a homeschool student encountering these concepts for the first time in 3rd grade, two to three weeks is typical — a few days on perimeter, a week on area of rectangles, and several days on mixed practice where students have to identify which measurement a problem is asking for. Students who struggle with the distinction between the two need more mixed practice, not more isolated formula practice.'
    }
  ]

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const skills = [
    {
      category: 'Perimeter',
      topics: ['Perimeter of rectangles and squares', 'Perimeter of irregular polygons', 'Finding a missing side length', 'Perimeter in real-world contexts']
    },
    {
      category: 'Area of Rectangles',
      topics: ['Area using unit squares', 'Area formula: length × width', 'Area with fractional side lengths', 'Area in real-world contexts']
    },
    {
      category: 'Composite Figures',
      topics: ['Decomposing irregular shapes', 'Adding and subtracting areas', 'Combined area and perimeter problems', 'Multi-step measurement problems']
    },
    {
      category: 'Connections',
      topics: ['Relating area and perimeter', 'Same perimeter, different area', 'Same area, different perimeter', 'Choosing the right measurement']
    }
  ]

  const progressionLevels = [
    {
      grade: 'Introducing Perimeter (Grade 3)',
      description: 'Start with physical measurement — have your student use a ruler to measure each side of a rectangle and add the lengths. Only introduce the formula after they can do this reliably. The most common early mistake is forgetting to add all four sides of a rectangle, especially when only two different measurements are given. Students need to understand that a rectangle has two pairs of equal sides before the shortcut formula makes sense.'
    },
    {
      grade: 'Introducing Area (Grade 3)',
      description: 'Begin with grid paper and unit squares before any formula. Have students count the squares inside a rectangle, then notice that counting rows and multiplying is faster. This connects area to multiplication in a way that makes the formula feel like a discovery rather than a rule to memorize. A student who understands area as "how many unit squares fit inside" will not confuse it with perimeter.'
    },
    {
      grade: 'Extending to Complex Shapes (Grades 4–5)',
      description: 'Once students are fluent with rectangle area, introduce composite shapes by decomposing them into rectangles. The key skill is drawing the dividing line in the right place and correctly identifying the dimensions of each part — often requiring subtraction to find an unlabeled side. This is where multiplication fact fluency becomes critical: a student who pauses to calculate 7×8 cannot hold the rest of the problem in working memory.'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div style={{ minHeight: '100vh', background: 'var(--background)', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero */}
          <section style={{ textAlign: 'center', padding: '3rem 0', marginBottom: '3rem' }}>
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
              Area and Perimeter Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Measurement Practice for Grades 3–5
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
              Build genuine understanding of area and perimeter — from unit squares and physical measurement through composite figures and real-world problems.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link href="/" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Generate Area & Perimeter Worksheets
              </Link>
              <div style={{
                background: 'var(--surface)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600'
              }}>
                <span style={{ color: 'var(--primary)' }}>10</span> free worksheets per day •{' '}
                <span style={{ color: 'var(--primary)' }}>3</span> difficulty levels
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Why Area and Perimeter Trip Up So Many Students
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Area and perimeter are introduced in 3rd grade and revisited every year through middle school — which means a shaky foundation causes repeated problems. The core difficulty is that both measurements involve the same inputs (side lengths) but completely different operations and units. Students who learn by formula alone will mix them up whenever they're stressed or working quickly.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1rem' }}>
              The worksheets here are designed to build conceptual understanding first — starting with unit squares and physical measurement — before moving to formula-based practice. See the <Link href="/grade-3-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>3rd grade worksheets</Link> page for how area fits into the broader 3rd grade math progression, or the <Link href="/grade-4-worksheets" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>4th grade worksheets</Link> page for composite figure work.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Mixed practice — where students must decide whether a problem is asking for area or perimeter without being told — is the most important kind. That decision-making skill is what gets tested, and it only comes from repeated exposure to both types of problems in the same session.
            </p>
          </section>

          {/* Progression */}
          <section className="focus-areas" style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              How to Teach Area and Perimeter Progressively
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              What to teach first, what to teach next, and where students typically get stuck
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
                    {level.grade}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Cards */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { icon: '⬛', title: 'Unit Square Practice', desc: 'Count unit squares to build area intuition before introducing the length × width formula.' },
                { icon: '📐', title: 'Perimeter of Polygons', desc: 'Add all side lengths for rectangles, squares, triangles, and irregular polygons.' },
                { icon: '🔲', title: 'Composite Figures', desc: 'Decompose L-shapes and irregular figures into rectangles, find each area, and add.' }
              ].map((card, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem', height: '3rem', background: 'var(--primary)', color: 'white',
                    borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', fontSize: '1.25rem', margin: '0 auto 1rem'
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Area & Perimeter Skills by Topic
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Skills covered across all worksheet levels
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
            }}>
              {skills.map((skill, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    {skill.category}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {skill.topics.map((topic, i) => (
                      <li key={i} style={{
                        display: 'flex', alignItems: 'flex-start',
                        marginBottom: '0.75rem', color: 'var(--text-secondary)'
                      }}>
                        <div style={{
                          width: '0.5rem', height: '0.5rem', background: 'var(--primary)',
                          borderRadius: '50%', marginRight: '0.75rem', marginTop: '0.5rem', flexShrink: 0
                        }} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Related Pages */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '2.5rem'
            }}>
              Related Worksheet Pages
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Grade 3 Worksheets', href: '/grade-3-worksheets', desc: 'Where area and perimeter are first introduced' },
                { name: 'Grade 4 Worksheets', href: '/grade-4-worksheets', desc: 'Composite figures and real-world measurement' },
                { name: 'Grade 5 Worksheets', href: '/grade-5-worksheets', desc: 'Area with fractions and volume introduction' },
                { name: 'Word Problems', href: '/word-problems', desc: 'Area and perimeter in real-world contexts' },
                { name: 'Multiplication Practice', href: '/multiplication-practice', desc: 'Fact fluency needed for area calculations' },
                { name: 'Place Value', href: '/place-value', desc: 'Number sense that supports measurement work' }
              ].map((item, index) => (
                <Link key={index} href={item.href} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', textDecoration: 'none'
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

          {/* FAQ */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)',
              textAlign: 'center', marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.125rem', color: 'var(--text-secondary)', textAlign: 'center',
              marginBottom: '2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              Real questions homeschooling parents ask about area and perimeter
            </p>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{
              background: 'var(--primary)', color: 'white',
              borderRadius: '8px', padding: '3rem 2rem', textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
                Start Practicing Area & Perimeter Today
              </h2>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)',
                marginBottom: '2.5rem', maxWidth: '600px',
                marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6'
              }}>
                Generate custom worksheets targeting exactly the skill your student needs — from basic perimeter to composite area problems.
              </p>
              <Link href="/" style={{
                background: 'white', color: 'var(--primary)', border: 'none',
                padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: '600',
                textDecoration: 'none', display: 'inline-block', fontSize: '1.125rem'
              }}>
                Create Worksheets Now
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginTop: '1rem', marginBottom: 0 }}>
                Free • No registration required • 10 worksheets per day
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
