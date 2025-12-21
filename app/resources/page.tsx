// app/resources/page.tsx
import Link from 'next/link';

export default function Resources() {
  return (
    <div className="main-content-area">
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="contact-page-title">Educational Resources</h1>
        <p className="contact-description">
          Professional-grade tools designed to streamline your homeschooling journey.
        </p>
      </header>

      {/* SECTION 1: PREMIUM PLANNING TOOLS */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="contact-section-title">Premium Planning Suite</h2>
        <p className="about-text" style={{ marginBottom: '1.5rem' }}>
          Comprehensive systems for parents who want to take their organization to the next level.
        </p>
        
        <div className="auto-grid">
          {/* Curriculum Planner */}
          <div className="info-card accent-blue">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="text-h3">Curriculum PDF Generator</h3>
              <span style={{ background: 'var(--surface)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)' }}>$17</span>
            </div>
            <p className="text-p" style={{ marginBottom: '1.5rem' }}>
              Our flagship planner. Map out your entire academic year, align with standards, and generate a beautiful, printable roadmap.
            </p>
            <Link href="#" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}>
              Coming Soon to Gumroad
            </Link>
          </div>

          {/* Grade Tracker */}
          <div className="info-card accent-green">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="text-h3">Grade Tracker Spreadsheet</h3>
              <span style={{ background: 'var(--surface)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)' }}>$12</span>
            </div>
            <p className="text-p" style={{ marginBottom: '1.5rem' }}>
              A professional-grade automated spreadsheet that calculates averages, tracks progress over time, and generates report cards.
            </p>
            <Link href="#" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}>
              Coming Soon to Gumroad
            </Link>
          </div>

          {/* Weekly Planner */}
          <div className="info-card accent-orange">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="text-h3">Weekly Math Planner</h3>
              <span style={{ background: 'var(--surface)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)' }}>$7</span>
            </div>
            <p className="text-p" style={{ marginBottom: '1.5rem' }}>
              The perfect companion for our worksheet generator. Organize daily lessons, objectives, and drill schedules.
            </p>
            <Link href="#" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}>
              Coming Soon to Gumroad
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: FREE TOOLS */}
      <section>
        <h2 className="contact-section-title">Free Community Tools</h2>
        <div className="auto-grid">
          <div className="info-card">
            <h3 className="text-h3">Worksheet Generator</h3>
            <p className="text-p">Our core tool for creating unlimited custom math practice pages.</p>
            <Link href="/" className="contact-resource-link" style={{ display: 'block', marginTop: '1rem' }}>Open Generator →</Link>
          </div>
          
          <div className="info-card">
            <h3 className="text-h3">Notion Progress Dashboard</h3>
            <p className="text-p">Track student mastery levels within Notion. (Currently in development).</p>
            <span className="contact-info-note" style={{ display: 'block', marginTop: '1rem' }}>Status: In Progress</span>
          </div>
        </div>
      </section>
    </div>
  );
}
