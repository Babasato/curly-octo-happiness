// app/resources/page.tsx
import Link from 'next/link';

export default function Resources() {
  return (
    <div className="main-content-area">
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="contact-page-title">Educational Resources</h1>
        <p className="contact-description">
          Professional-grade systems designed to streamline your homeschooling journey and maximize student mastery.
        </p>
      </header>

      {/* SECTION 1: THE FLAGSHIP (NOTION) */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="contact-section-title">Flagship System</h2>
        <div className="info-card accent-blue" style={{ border: '2px solid var(--accent-blue)', position: 'relative' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.8rem' }}>Notion Math Progress Dashboard</h3>
                <p style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>THE ULTIMATE MASTER TRACKER</p>
              </div>
              <span style={{ background: 'var(--surface)', padding: '6px 12px', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', color: 'var(--secondary)' }}>COMING SOON</span>
            </div>
            <p className="text-p" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Our most comprehensive tool yet. This digital ecosystem allows you to track your student's entire mathematical journey in one place. Visualize mastery gaps, archive completed work, and manage multiple students within a high-performance Notion workspace.
            </p>
            <button disabled className="contact-submit-button" style={{ width: '100%', opacity: 0.7, background: 'var(--accent-blue)', cursor: 'not-allowed' }}>
              Currently in Final Development
            </button>
        </div>
      </section>

      {/* SECTION 2: PREMIUM PLANNING TOOLS */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="contact-section-title">Planning & Tracking Suite</h2>
        <p className="about-text" style={{ marginBottom: '1.5rem' }}>
          Reliable, automated tools for parents who want professional-grade organization without the administrative headache.
        </p>
        
        <div className="auto-grid">
          {/* Curriculum Planner */}
          <div className="info-card accent-red">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="text-h3">Curriculum PDF Generator</h3>
              <span style={{ background: 'var(--surface)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)' }}>$17</span>
            </div>
            <p className="text-p" style={{ marginBottom: '1.5rem' }}>
              Map out your entire academic year in minutes. Set high-level objectives, align with standards, and generate a comprehensive PDF roadmap to keep your teaching on track.
            </p>
            <Link href="https://homeschoolmath.gumroad.com/l/btoecv" target="_blank" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}>
              View on Gumroad
            </Link>
          </div>

          {/* Grade Tracker */}
          <div className="info-card accent-green">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="text-h3">Grade Tracker Spreadsheet</h3>
              <span style={{ background: 'var(--surface)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)' }}>$12</span>
            </div>
            <p className="text-p" style={{ marginBottom: '1.5rem' }}>
              A fully automated gradebook for Excel or Google Sheets. Features weighted scoring, standards mastery tracking, and professional report cards ready for your portfolio.
            </p>
            <Link href="https://homeschoolmath.gumroad.com/l/toehbn" target="_blank" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}>
              View on Gumroad
            </Link>
          </div>

          {/* Weekly Planner */}
          <div className="info-card accent-orange">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="text-h3">Weekly Math Planner</h3>
              <span style={{ background: 'var(--surface)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)' }}>$7</span>
            </div>
            <p className="text-p" style={{ marginBottom: '1.5rem' }}>
              The perfect companion for daily teaching. Generate unlimited weekly planners to organize lessons, track manipulatives, and document student reflections.
            </p>
            <Link href="https://homeschoolmath.gumroad.com/l/bkltc" target="_blank" className="contact-submit-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}>
              View on Gumroad
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: FREE TOOLS */}
      <section>
        <h2 className="contact-section-title">Free Community Tools</h2>
        <div className="auto-grid">
          <div className="info-card">
            <h3 className="text-h3">Worksheet Generator</h3>
            <p className="text-p">Our signature tool for creating unlimited custom math practice pages for core operations (K-6).</p>
            <Link href="/" className="contact-resource-link" style={{ display: 'block', marginTop: '1rem' }}>Open Generator →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
