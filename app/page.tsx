// app/page.tsx - WITH RESOURCE LINKING
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Added Link import
import WorksheetGenerator from './components/WorksheetGenerator';
import LeadMagnetSignup from './components/LeadMagnetSignup';
import { useDownloadTracker } from './hooks/useDownloadTracker';

interface UserData {
  name: string;
  email: string;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  
  const { 
    addBonusDownloads, 
    downloadsRemaining, 
    incrementDownloadCount,
    hasReceivedSignupBonus,
    shouldShowLeadMagnet,
    downloadData 
  } = useDownloadTracker(); 

  useEffect(() => {
    if (shouldShowLeadMagnet()) {
      setShowLeadMagnet(true);
    }
  }, [downloadsRemaining, hasReceivedSignupBonus]);

  const handleOpenLeadMagnet = () => {
    setShowLeadMagnet(true);
  };

  const handleCloseLeadMagnet = () => {
    setShowLeadMagnet(false);
  };

  const handleUserDataSubmit = async (email: string) => {
    console.log('Email submitted:', email);
    addBonusDownloads(10, email);
    setUserData({ name: '', email });
    setShowLeadMagnet(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      alert('Success! 10 bonus downloads added to your account!');
    }, 100);
  };

  return (
    <div className="home-page">
      <main className="main-content-area">
        <WorksheetGenerator 
          onOpenLeadMagnet={handleOpenLeadMagnet}
          downloadsRemaining={downloadsRemaining}
          incrementDownloadCount={incrementDownloadCount}
          hasReceivedSignupBonus={hasReceivedSignupBonus}
        />

        {/* INTERNAL LINKING SECTION: PREMIUM RESOURCES */}
        <section className="resource-cta-section">
          <div className="resource-cta-card">
            <div className="cta-content">
              <span className="cta-badge">New</span>
              <h2 className="cta-title">Go Beyond Worksheets</h2>
              <p className="cta-text">
                Streamline your homeschool year with our professional Grade Trackers, 
                Annual Curriculum Planners, and Student Progress Dashboards.
              </p>
            </div>
            <Link href="/resources" className="cta-button">
              Explore Resources →
            </Link>
          </div>
        </section>
      </main>

      {showLeadMagnet && (
        <LeadMagnetSignup 
          onSuccess={handleUserDataSubmit} 
          onClose={handleCloseLeadMagnet} 
        />
      )}

      <style jsx>{`
        .resource-cta-section {
          max-width: 1000px;
          margin: 4rem auto;
          padding: 0 1rem;
        }
        .resource-cta-card {
          background: linear-gradient(90deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          border-left: 5px solid #2563eb;
          padding: 2rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .resource-cta-card {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }
        }
        .cta-badge {
          background: #2563eb;
          color: white;
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        .cta-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-top: 0.5rem;
        }
        .cta-text {
          color: #64748b;
          margin-top: 0.5rem;
          max-width: 500px;
        }
        .cta-button {
          background: #1e293b;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cta-button:hover {
          background: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}
