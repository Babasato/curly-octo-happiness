// app/about/page.tsx - UPDATED BRANDING
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About homeschoolmath.site | Free Math Worksheet Generator',
  description: 'Learn about our mission to provide free, high-quality math worksheets for homeschool and classroom use. Math worksheets made simple.',
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
              homeschoolmath.site was created with a simple but important mission: to provide 
              high-quality, customizable math practice materials for students, teachers, and homeschool 
              families completely free of charge.
            </p>
            <p className="about-text">
              We believe that every student deserves access to excellent math education resources, 
              regardless of their background or financial situation. Our platform empowers educators 
              and parents to create tailored math practice that meets each student's unique needs.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">What We Offer</h2>
            <div className="about-grid">
              <div className="about-feature-card about-feature-blue">
                <h3 className="about-feature-title">Customizable Worksheets</h3>
                <p className="about-feature-text">
                  Generate math worksheets tailored to specific grade levels, skills, and difficulty 
                  requirements with our easy-to-use generator.
                </p>
              </div>
              <div className="about-feature-card about-feature-green">
                <h3 className="about-feature-title">Comprehensive Coverage</h3>
                <p className="about-feature-text">
                  Worksheets covering kindergarten through 6th grade math, including all major 
                  operations and mathematical concepts.
                </p>
              </div>
              <div className="about-feature-card about-feature-purple">
                <h3 className="about-feature-title">Answer Keys</h3>
                <p className="about-feature-text">
                  Every generated worksheet comes with a complete answer key for easy grading 
                  and immediate feedback.
                </p>
              </div>
              <div className="about-feature-card about-feature-orange">
                <h3 className="about-feature-title">Always Free</h3>
                <p className="about-feature-text">
                  Our service is completely free to use, with no hidden fees, subscriptions, 
                  or usage limits beyond 10 worksheets per day.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Educational Philosophy</h2>
            <p className="about-text">
              We understand that math education requires more than just rote practice. Our worksheets 
              are designed to:
            </p>
            <ul className="about-list">
              <li className="about-list-item">Build conceptual understanding alongside procedural fluency</li>
              <li className="about-list-item">Provide varied problem types to develop flexible thinking</li>
              <li className="about-list-item">Include real-world applications to show math's relevance</li>
              <li className="about-list-item">Offer appropriate challenge levels to support growth mindset</li>
              <li className="about-list-item">Enable differentiation to meet diverse learning needs</li>
            </ul>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">For Educators & Parents</h2>
            <div className="about-grid">
              <div>
                <h3 className="about-feature-title">Classroom Teachers</h3>
                <ul className="about-list">
                  <li className="about-list-item">Create homework assignments and practice sheets</li>
                  <li className="about-list-item">Generate differentiated materials for various skill levels</li>
                  <li className="about-list-item">Prepare assessment materials and review packets</li>
                  <li className="about-list-item">Support intervention and enrichment activities</li>
                </ul>
              </div>
              <div>
                <h3 className="about-feature-title">Homeschool Families</h3>
                <ul className="about-list">
                  <li className="about-list-item">Customize curriculum to match your child's pace</li>
                  <li className="about-list-item">Create unlimited practice materials (10 per day)</li>
                  <li className="about-list-item">Track progress with consistent format</li>
                  <li className="about-list-item">Supplement any math program</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Our Commitment</h2>
            <p className="about-text">
              We are committed to maintaining the highest standards of educational quality while 
              keeping our resources completely accessible. Our team continuously works to:
            </p>
            <ul className="about-list">
              <li className="about-list-item">Improve and expand our worksheet offerings</li>
              <li className="about-list-item">Ensure alignment with educational standards</li>
              <li className="about-list-item">Provide reliable, easy-to-use technology</li>
              <li className="about-list-item">Protect user privacy and data security</li>
              <li className="about-list-item">Respond to user feedback and suggestions</li>
            </ul>
          </section>

          <section className="about-cta-section">
            <h2 className="about-section-title">Get Started Today</h2>
            <p className="about-text">
              Join thousands of educators and parents who are already using homeschoolmath.site 
              to support their students' math learning journey.
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
