// app/components/DarkModeToggle.tsx - UPDATED
'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="dark-mode-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      <style jsx>{`
        .dark-mode-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 6px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-primary);
        }

        .dark-mode-toggle:hover {
          background: var(--surface);
          border-color: var(--primary);
          color: var(--primary);
        }

        .dark-mode-toggle:active {
          transform: scale(0.95);
        }
      `}</style>
    </button>
  );
}
