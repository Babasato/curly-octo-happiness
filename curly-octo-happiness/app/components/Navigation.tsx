// app/components/Navigation.tsx
"use client";

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/" className="nav-brand">
      </Link>

      <div className="nav-links">
        <Link href="/grade-1-math-worksheets">Grade 1</Link>
        <Link href="/addition-worksheets">Addition</Link>
        <Link href="/subtraction-practice">Subtraction</Link>
        <Link href="/multiplication-practice">Multiplication</Link>
        <Link href="/fractions-worksheets">Fractions</Link>
        <Link href="/word-problems">Word Problems</Link>
      </div>

      <Link href="/search" className="navbar-search-link" aria-label="Search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </Link>
    </nav>
  );
}