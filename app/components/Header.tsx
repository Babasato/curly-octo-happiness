// app/components/Header.tsx
"use client";

import Link from 'next/link';

export default function Header() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          transition: transform 0.2s ease;
          text-decoration: none;
        }

        .home-button:hover {
          transform: scale(1.05);
        }

        .brand-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          transition: color 0.2s ease;
        }

        .home-button:hover .brand-title {
          color: #2563eb;
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
          transition: color 0.2s;
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
          
          .nav-link {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .nav-link {
            font-size: 0.9rem;
            padding: 0.5rem;
          }
          
          .brand-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </header>
  );
}