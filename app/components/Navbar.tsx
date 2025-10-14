// app/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-brand">
            Math Worksheet Generator
          </Link>
          
          {/* Desktop Navigation */}
          <div className="navbar-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/addition-practice" className="nav-link">
              Addition
            </Link>
            <Link href="/subtraction-practice" className="nav-link">
              Subtraction
            </Link>
            <Link href="/multiplication-practice" className="nav-link">
              Multiplication
            </Link>
            <Link href="/division-practice" className="nav-link">
              Division
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/addition-practice" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Addition
            </Link>
            <Link href="/subtraction-practice" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Subtraction
            </Link>
            <Link href="/multiplication-practice" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Multiplication
            </Link>
            <Link href="/division-practice" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Division
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .navbar-brand {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .navbar-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .mobile-menu-button {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-button span {
          width: 20px;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s ease;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        .mobile-nav-link {
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid var(--border);
        }

        .mobile-nav-link:last-child {
          border-bottom: none;
        }

        .mobile-nav-link:hover {
          background: var(--background);
        }

        @media (min-width: 768px) {
          .navbar-links {
            display: flex;
          }
          
          .mobile-menu-button {
            display: none;
          }
          
          .navbar-container {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </>
  );
}