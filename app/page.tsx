// app/page.tsx - CORRECTED VERSION
'use client';
import { useState, useEffect } from 'react';
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

  // Auto-show modal when user reaches 3 downloads remaining
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
    
    // Add bonus downloads (the hook will check if already received)
    addBonusDownloads(10, email);
    
    setUserData({ name: '', email });
    setShowLeadMagnet(false);
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show success message
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
      </main>

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

        .main-content-area {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        @media (max-width: 768px) {
          .main-content-area {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
