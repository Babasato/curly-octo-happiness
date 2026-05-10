// app/components/Footer.tsx
"use client";

import Link from 'next/link';

const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#E60023">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.934 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.167 1.777 2.167 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

export default function Footer() {
  const worksheetTypes = [
    { name: 'Addition Worksheets', href: '/addition-practice' },
    { name: 'Subtraction Worksheets', href: '/subtraction-practice' },
    { name: 'Multiplication Worksheets', href: '/multiplication-practice' },
    { name: 'Division Worksheets', href: '/division-practice' },
    { name: 'Fractions Worksheets', href: '/fractions-practice' },
    { name: 'Decimals Worksheets', href: '/decimals-practice' },
    { name: 'Word Problems', href: '/word-problems' },
  ];

  const gradeCategories = [
    { name: 'Kindergarten Math', href: '/kindergarten-worksheets' },
    { name: '1st Grade Math', href: '/grade-1-worksheets' },
    { name: '2nd Grade Math', href: '/grade-2-worksheets' },
    { name: '3rd Grade Math', href: '/grade-3-worksheets' },
    { name: '4th Grade Math', href: '/grade-4-worksheets' },
    { name: '5th Grade Math', href: '/grade-5-worksheets' },
    { name: '6th Grade Math', href: '/grade-6-worksheets' },
  ];

  return (
    <footer className="footer-container">
      {/* ===== MAIN FOOTER GRID ===== */}
      <div className="footer-content-wrapper">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-section">
            <h3 className="footer-brand">homeschoolmath.site</h3>
            <p className="footer-description">
              Math worksheets made simple. Create custom math worksheets for students in grades K–6.
              Perfect for teachers, parents, and homeschoolers.
            </p>
            <div className="stats-grid">
              <div className="stats-card">
                <span className="stats-number">100,000+</span>
                <span className="stats-label">Worksheets Generated</span>
              </div>
              <div className="stats-card">
                <span className="stats-number">5,000+</span>
                <span className="stats-label">Happy Teachers</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.pinterest.com/homeschoolmathsite/" target="_blank" rel="noopener noreferrer" className="social-icon pinterest" aria-label="Pinterest">
                <PinterestIcon />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61568334862821" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Worksheet Types */}
          <div className="footer-links-section">
            <h4 className="footer-heading">Math Worksheet Types</h4>
            <ul className="footer-link-list">
              {worksheetTypes.map((type) => (
                <li key={type.href}>
                  <Link href={type.href}>
                    <div className="footer-link-content">
                      <span>{type.name}</span>
                      <span className="arrow">→</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Grade Levels */}
          <div className="footer-links-section">
            <h4 className="footer-heading">By Grade Level</h4>
            <ul className="footer-link-list">
              {gradeCategories.map((grade) => (
                <li key={grade.href}>
                  <Link href={grade.href}>
                    <div className="footer-link-content">
                      <span>{grade.name}</span>
                      <span className="arrow">→</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links-section">
            <h4 className="footer-heading">Resources & Support</h4>
            <ul className="footer-link-list">
{[
  { name: 'Free Guides', href: '/free-guides', highlight: true },  { name: 'Planning Resources', href: '/resources' },
  { name: 'How to Use Generator', href: '/how-to-use' },
  { name: 'Math Teaching Tips', href: '/teaching-tips' },
  { name: 'Math Tricks & Guides', href: '/math-tricks' },
  { name: 'Contact Support', href: '/contact' },
  { name: 'About Us', href: '/about' },
].map((item) => (
  <li key={item.href}>
    <Link href={item.href}>
      <div className="footer-link-content" style={item.highlight ? { color: '#60a5fa', fontWeight: 'bold' } : {}}>
        <span>{item.name}</span>
        <span className="arrow">→</span>
      </div>
    </Link>
  </li>
))}
            </ul>
          </div>
        </div>
      </div>

      {/* ===== LEGAL BOTTOM BAR ===== */}
      <div className="footer-legal-section">
        <div className="footer-legal-content">
          <div className="legal-links-group">
            <Link href="/privacy-policy"><span className="legal-link-text">Privacy Policy</span></Link>
            <span className="legal-separator">•</span>
            <Link href="/terms-of-service"><span className="legal-link-text">Terms of Service</span></Link>
            <span className="legal-separator">•</span>
            <Link href="/cookies"><span className="legal-link-text">Cookie Policy</span></Link>
          </div>
          <div className="trust-badges-group">
            <div className="trust-badge"><span>Safe & Secure</span></div>
            <div className="trust-badge"><span>No Spam Policy</span></div>
            <div className="trust-badge"><span>Teacher Approved</span></div>
          </div>
        </div>
        <div className="footer-copyright-section">
          <p className="footer-copyright">© {new Date().getFullYear()} homeschoolmath.site. All rights reserved.</p>
          <p className="footer-subtext">Math worksheets made simple</p>
        </div>
      </div>

      <style jsx>{`
        /* ===== BASE ===== */
        .footer-container {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: #f1f5f9;
          margin-top: auto;
        }

        /* ===== MAIN GRID ===== */
        .footer-content-wrapper {
          padding: 3rem 1rem 2rem;
        }
        @media (min-width: 768px) {
          .footer-content-wrapper {
            padding: 5rem 1.5rem 3rem;
          }
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 3rem;
          }
        }

        .footer-brand-section {
          grid-column: 1 / -1;
        }
        @media (min-width: 1024px) {
          .footer-brand-section {
            grid-column: 1;
          }
        }

        /* ===== BRAND ===== */
        .footer-brand {
          font-size: clamp(1.5rem, 4vw, 1.75rem);
          font-weight: 800;
          margin: 0 0 1rem;
          color: #2563eb;
          line-height: 1.2;
        }

        .footer-description {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0 0 2rem;
          font-size: clamp(0.95rem, 2vw, 1rem);
        }

        /* ===== STATS ===== */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 640px) {
          .stats-grid { gap: 1.5rem; }
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .stats-card:hover {
          transform: translateY(-2px);
        }

        .stats-number {
          display: block;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 900;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
        }

        .stats-label {
          display: block;
          font-size: 0.75rem;
          color: #cbd5e1;
          font-weight: 600;
        }
        @media (min-width: 640px) {
          .stats-label { font-size: 0.875rem; }
        }

        /* ===== SOCIAL ===== */
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #2563eb;
          transform: translateY(-3px);
        }

        /* ===== NAV COLUMNS ===== */
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1.5rem;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 0.75rem;
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link-list a {
          color: #f1f5f9;
          text-decoration: none;
          display: block;
        }

        .footer-link-content {
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 0.5rem;
          border-radius: 6px;
          transition: transform 0.2s ease, background 0.2s ease;
          margin-bottom: 0.15rem;
          color: #f1f5f9;
        }
        @media (min-width: 640px) {
          .footer-link-content {
            font-size: 0.95rem;
            padding: 0.65rem 1rem;
          }
        }
        .footer-link-content:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.06);
        }

        .arrow {
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          color: #2563eb;
          font-weight: 600;
          font-size: 1.1em;
        }
        .footer-link-content:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ===== LEGAL BOTTOM ===== */
        .footer-legal-section {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding: 2rem 1rem;
          background: rgba(0, 0, 0, 0.25);
        }
        @media (min-width: 768px) {
          .footer-legal-section { padding: 2.5rem 1.5rem; }
        }

        .footer-legal-content {
          max-width: 1200px;
          margin: 0 auto 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .footer-legal-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        /* Legal links */
        .legal-links-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .legal-links-group a {
          text-decoration: none;
          color: #f1f5f9;
        }
        .legal-link-text {
          font-size: 0.85rem;
          font-weight: 500;
          color: #cbd5e1;
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          transition: color 0.2s ease;
        }
        .legal-link-text:hover {
          color: #ffffff;
        }
        @media (min-width: 640px) {
          .legal-link-text { font-size: 0.875rem; }
        }

        .legal-separator {
          color: #64748b;
          font-size: 0.9rem;
          user-select: none;
        }

        /* Trust badges */
        .trust-badges-group {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .trust-badges-group { gap: 1rem; }
        }

        .trust-badge {
          background: rgba(37, 99, 235, 0.2);
          border: 1px solid rgba(37, 99, 235, 0.4);
          border-radius: 20px;
          padding: 0.4rem 1rem;
          transition: background 0.2s ease;
        }
        .trust-badge:hover {
          background: rgba(37, 99, 235, 0.3);
        }
        .trust-badge span {
          font-size: 0.78rem;
          color: #e2e8f0;
          font-weight: 600;
        }
        @media (min-width: 640px) {
          .trust-badge span { font-size: 0.8rem; }
        }

        /* Copyright */
        .footer-copyright-section {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.5rem;
        }

        .footer-copyright {
          color: #94a3b8;
          margin: 0;
          font-size: 0.85rem;
        }
        @media (min-width: 640px) {
          .footer-copyright { font-size: 0.875rem; }
        }

        .footer-subtext {
          color: #64748b;
          font-size: 0.78rem;
          margin: 0.4rem 0 0;
        }
        @media (min-width: 640px) {
          .footer-subtext { font-size: 0.8rem; }
        }
      `}</style>
    </footer>
  );
}
