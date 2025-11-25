// app/page.tsx - DARK MODE FIXED
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
