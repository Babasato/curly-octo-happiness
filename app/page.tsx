// app/page.tsx - WITH GENERATOR LOGIC, DARK MODE FIXES, AND ANCHOR
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  }, [downloadsRemaining, hasReceivedSignupBonus, shouldShowLeadMagnet]);

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
        {/* Core Generator Tool */}
        <WorksheetGenerator 
          onOpenLeadMagnet={handleOpenLeadMagnet}
          downloadsRemaining={downloadsRemaining}
          incrementDownloadCount={incrementDownloadCount}
          hasReceivedSignupBonus={hasReceivedSignupBonus}
        />

        {/* NEW RESOURCES SECTION - DARK MODE FIXED & ANCHORED */}
        <section 
          id="resources-banner" 
          style={{
            background: 'var(--surface)',
            border: '2px solid var(--border)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            marginTop: '5rem',
            textAlign: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'var(--primary)',
            color: 'white',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            NEW FOR 2024
          </div>
          
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Level Up Your Math Planning
          </h2>
          
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.25rem',
            lineHeight: '1.7',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Stop hunting for folders. Use our <strong>Notion Math Dashboards</strong> to 
            track every worksheet, grade, and milestone in one digital home.
          </p>
          
          <Link 
            href="/resources" 
            style={{
              display: 'inline-block',
              background: 'var(--primary)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1.125rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s'
            }}
          >
            Explore Resources & Templates →
          </Link>
        </section>
      </main>

      {showLeadMagnet && (
        <LeadMagnetSignup 
          onSuccess={handleUserDataSubmit} 
          onClose={handleCloseLeadMagnet} 
        />
      )}
    </div>
  );
}
