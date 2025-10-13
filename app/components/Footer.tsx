// app/components/Footer.tsx - FINAL CORRECTED VERSION
"use client";

import Link from 'next/link';

export default function Footer() {
  const worksheetTypes = [
    { name: 'Addition Worksheets', href: '/addition-practice' },
    { name: 'Subtraction Worksheets', href: '/subtraction-practice' },
    { name: 'Multiplication Worksheets', href: '/multiplication-practice' },
    { name: 'Division Worksheets', href: '/division-practice' },
    { name: 'Fractions Worksheets', href: '/fractions-practice' },
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
      <div className="footer-content-wrapper">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">
              Homeschool Math Generator
            </h3>
            <p className="footer-description">
              Create custom math worksheets for students in grades K-6.
              Perfect for teachers, parents, and homeschoolers.
            </p>
            <div className="stats-grid">
              <div className="stats-card">
                <span className="stats-number">100,000+</span>
                <span className="stats-label">Worksheets Generated</span>
              </div>
              <div className="stats-card">
                <span className="stats-number">2,000+</span>
                <span className="stats-label">Happy Teachers</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">
              Math Worksheet Types
            </h4>
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

          <div>
            <h4 className="footer-heading">
              By Grade Level
            </h4>
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

          <div>
            <h4 className="footer-heading">
              Resources & Support
            </h4>
            <ul className="footer-link-list">
              <li>
                <Link href="/how-to-use">
                  <div className="footer-link-content">
                    <span>How to Use Generator</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/teaching-tips">
                  <div className="footer-link-content">
                    <span>Math Teaching Tips</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="footer-link-content">
                    <span>Contact Support</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="footer-link-content">
                    <span>About Us</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-legal-section">
        <div className="footer-legal-content">
          <div className="legal-links-group">
            <Link href="/privacy-policy">
              <span className="legal-link-text">Privacy Policy</span>
            </Link>
            <span className="legal-separator">•</span>
            <Link href="/terms-of-service">
              <span className="legal-link-text">Terms of Service</span>
            </Link>
            <span className="legal-separator">•</span>
            <Link href="/cookies">
              <span className="legal-link-text">Cookie Policy</span>
            </Link>
          </div>
          
          <div className="trust-badges-group">
            <div className="trust-badge">
              <span>Safe & Secure</span>
            </div>
            <div className="trust-badge">
              <span>No Spam Policy</span>
            </div>
            <div className="trust-badge">
              <span>Teacher Approved</span>
            </div>
          </div>
        </div>

        <div className="footer-copyright-section">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Homeschool Math Generator. All rights reserved.
          </p>
          <p className="footer-subtext">
            Made for educators everywhere
          </p>
        </div>
      </div>
      <style jsx>{`
        .footer-container {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          margin-top: 80px;
        }

        .footer-content-wrapper {
          padding: 80px 0 60px 0;
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 60px;
        }

        .footer-brand {
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 20px 0;
          color: #2563eb;
        }

        .footer-description {
          color: #e2e8f0;
          line-height: 1.7;
          margin: 0 0 32px 0;
          font-size: 16px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
          border-color: rgba(37, 99, 235, 0.5);
        }

        .stats-number {
          display: block;
          font-size: 32px;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .stats-label {
          display: block;
          font-size: 14px;
          color: #e2e8f0;
          font-weight: 600;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin: 0 0 28px 0;
          border-bottom: 3px solid #2563eb;
          padding-bottom: 12px;
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        /* The a tag wrapper for Links */
        .footer-link-list a {
          color: white;
          text-decoration: none;
          display: block;
        }

        .footer-link-content {
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 8px;
          transition: transform 0.4s ease, background-color 0.4s ease, border-left 0.4s ease;
          margin-bottom: 4px;
        }
        
        .footer-link-content:hover {
          background: rgba(37, 99, 235, 0.05); /* Softer hover background */
          transform: translateX(4px); /* Smaller movement */
          border-left: 3px solid #2563eb;
          margin-left: -3px;
        }

        .arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          color: #2563eb;
          font-weight: 600;
          font-size: 1.2em;
        }
        
        .footer-link-content:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .footer-legal-section {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .footer-legal-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .legal-links-group {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .legal-links-group a {
          text-decoration: none;
          color: white;
        }
        
        .legal-link-text {
          font-size: 14px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.4s ease; /* Slower transition */
        }
        
        .legal-link-text:hover {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.1); /* Softer hover background */
          transform: translateY(-1px); /* Smaller movement */
        }

        .legal-separator {
          color: #a0aec0;
        }

        .trust-badges-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .trust-badge {
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(37, 99, 235, 0.3);
          border-radius: 24px;
          padding: 10px 16px;
          transition: all 0.4s ease;
        }

        .trust-badge:hover {
          background: rgba(37, 99, 235, 0.2); /* Softer background */
          border-color: rgba(37, 99, 235, 0.6);
          transform: scale(1.02); /* Less pronounced scaling */
        }

        .trust-badge span {
          font-size: 12px;
          color: #ffffff;
          font-weight: 600;
        }

        .footer-copyright-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 32px;
        }

        .footer-copyright {
          color: #cbd5e0;
          margin: 0;
          font-size: 14px;
        }

        .footer-subtext {
          margin-top: 12px;
          color: #a0aec0;
          font-size: 13px;
          margin: 12px 0 0 0;
        }
      `}</style>
    </footer>
  );
}