// app/components/Header.tsx
"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <Link href="/" className="home-button">
            <h1 className="brand-title">Homeschool Math</h1>
          </Link>
        </div>
        
        <nav className="main-nav">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>

      <style jsx>{`
        .site-header {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .home-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin: 0;
          text-decoration: none;
        }

        .brand-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .nav-link:hover {
          color: #2563eb;
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 1rem;
          }
          
          .main-nav {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .nav-link {
            font-size: 0.9rem;
          }
          
          .brand-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </header>
  );
}