// app/components/Header.tsx
"use client";
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <Link href="/" className="home-link">
            <h1 className="brand-title">Homeschool Math</h1>
          </Link>
        </div>

        <nav className="main-nav">
  <Link href="/about" className="nav-link">About</Link>
  <Link href="/resources" className="nav-link">Resources</Link>
  <Link href="/contact" className="nav-link">Contact</Link>
  
  <Link href="/search" className="navbar-search-link" aria-label="Search">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </Link>

  <DarkModeToggle />
</nav>
      </div>
    </header>
  );
}