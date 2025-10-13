// app/components/Navigation.tsx
"use client";

import Link from 'next/link';
import { useTranslation } from '../contexts/TranslationContext';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <Link href="/" className="nav-brand">
        {t.title}
      </Link>
      
      <div className="nav-links">
        <Link href="/grade-1-math-worksheets">Grade 1</Link>
        <Link href="/addition-worksheets">Addition</Link>
        <Link href="/subtraction-practice">Subtraction</Link>
        <Link href="/multiplication-practice">Multiplication</Link>
        <Link href="/fractions-worksheets">Fractions</Link>
        <Link href="/word-problems">Word Problems</Link>
      </div>
    </nav>
  );
}