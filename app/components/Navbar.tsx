"use client";

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links in English
  const navLinks = [
    { href: "/grade-1-math-worksheets", label: "Grade 1 Math" },
    { href: "/addition-worksheets", label: "Addition" },
    { href: "/subtraction-practice", label: "Subtraction" },
    { href: "/multiplication-practice", label: "Multiplication" },
    { href: "/word-problems", label: "Word Problems" }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/">
            <h2 style={{ cursor: 'pointer' }}>Math Worksheet Generator</h2>
          </Link>
        </div>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="nav-controls">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}