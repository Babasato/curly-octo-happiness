// app/about/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | The Mission Behind homeschoolmath.site',
  description: 'Learn about our mission to provide high-quality, algorithmic math resources for homeschool families and educators worldwide.',
}

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-card">
          <h1 className="about-title">About Us</h1>
          
          <section className="about-section">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-text">
              homeschoolmath.site was created with a clear objective: to bridge the gap between 
              premium educational technology and accessibility. We provide high-quality, 
              customizable math materials for students, teachers, and homeschool families 
              completely free of charge.
            </p>
            <p className="about-text">
              We believe that every student deserves access to excellent math education resources. 
              Our platform empowers educators to create tailored practice that meets each 
              student's unique learning curve through algorithmic generation.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">What We Offer</h2>
            <div className="auto-grid">
              <div className="info-card accent-blue">
                <h3 className="text-h3">Customizable Worksheets</h3>
                <p className="text-p">
                  Utilize randomized algorithmic generation to ensure every worksheet is unique, 
                  preventing rote memorization and encouraging true mastery.
                </p>
              </div>

              <div className="info-card accent-green">
                <h3 className="text-h3">Comprehensive Coverage</h3>
                <p className="text-p">
                  Extensive resources covering Kindergarten through 6th grade math, 
                  aligned with core mathematical standards and conceptual development.
                </p>
              </div>

              <div className="info-card accent-orange">
                <h3 className="text-h3">Planning & Organization</h3>
                <p className="text-p">
                  Beyond practice, we provide structured systems, including Notion dashboards 
                  and curriculum trackers, to help manage the administrative side of education.
                </p>
              </div>

              <div className="info-card accent-red">
                <h3 className="text-h3">Always Accessible</h3>
                <p className="text-p">
                  Our core generator is completely free to use, with no hidden fees or 
                  intrusive subscriptions—just honest, effective educational tools.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Educational Philosophy</h2>
            <p className="about-text">
              Math education requires more than just repetition. Our resources are engineered to:
            </p>
            <ul className="about-list">
              <li className="about-list-item">Build conceptual understanding alongside procedural fluency.</li>
              <li className="about-list-item">Provide varied problem types to develop flexible mathematical thinking.</li>
              <li className="about-list-item">Offer appropriate challenge levels to support a growth mindset.</li>
              <li className="about-list-item">Enable seamless differentiation for diverse classroom needs.</li>
            </ul>
          </section>

          <section className="about-cta-section">
            <h2 className="about-section-title">Get Started Today</h2>
            <p className="about-text">
              Join thousands of educators and parents who use homeschoolmath.site 
              to support their students' mathematical journey.
            </p>
            <Link href="/" className="about-cta-button">
              Start Generating Worksheets
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
