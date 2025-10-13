// app/page.tsx - FIXED VERSION - Single hook instance
'use client';

import { useState } from 'react';
import WorksheetGenerator from './components/WorksheetGenerator';
import Footer from './components/Footer';
import LeadMagnetSignup from './components/LeadMagnetSignup';
import { useDownloadTracker } from './hooks/useDownloadTracker';

interface UserData {
  name: string;
  email: string;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  
  // 🎯 USE THE HOOK ONCE HERE - Get all the values and functions
  const { 
    addBonusDownloads, 
    downloadsRemaining, 
    incrementDownloadCount,
    hasReceivedSignupBonus 
  } = useDownloadTracker();

  const handleOpenLeadMagnet = () => {
    setShowLeadMagnet(true);
  };

  const handleCloseLeadMagnet = () => {
    setShowLeadMagnet(false);
  };

  const handleUserDataSubmit = (email: string, language: string, unitSystem?: string, grade?: string) => {
    console.log('User data submitted:', { email, language, unitSystem, grade });
    
    // Add the 10 bonus downloads
    addBonusDownloads(10, email);
    
    setUserData({ name: '', email });
    setShowLeadMagnet(false);
    alert('Success! You now have 10 extra downloads!');
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Fixed Header */}
      <header className="site-header">
        <div className="header-content">
          <div className="brand">
            <button 
              onClick={handleHomeClick}
              className="home-button"
            >
              <h1 className="brand-title">Homeschool Math</h1>
            </button>
          </div>
          
          <nav className="main-nav">
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-area">
        {/* 🎯 PASS THE HOOK VALUES AS PROPS */}
        <WorksheetGenerator 
          onOpenLeadMagnet={handleOpenLeadMagnet}
          downloadsRemaining={downloadsRemaining}
          incrementDownloadCount={incrementDownloadCount}
          hasReceivedSignupBonus={hasReceivedSignupBonus}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Magnet Modal */}
      {showLeadMagnet && (
        <LeadMagnetSignup 
          onSuccess={handleUserDataSubmit} 
          onClose={handleCloseLeadMagnet} 
        />
      )}

      <style jsx>{`
        .home-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%);
        }

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

        .main-content-area {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
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
          
          .main-content-area {
            padding: 1rem;
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
    </div>
  );
}