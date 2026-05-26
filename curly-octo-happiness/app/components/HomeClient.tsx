// app/components/HomeClient.tsx
'use client';

import { useState, useEffect } from 'react';
import WorksheetGenerator from './WorksheetGenerator';
import LeadMagnetSignup from './LeadMagnetSignup';
import { useDownloadTracker } from '../hooks/useDownloadTracker';

interface UserData {
  name: string;
  email: string;
}

export default function HomeClient() {
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

  const handleOpenLeadMagnet = () => setShowLeadMagnet(true);
  const handleCloseLeadMagnet = () => setShowLeadMagnet(false);

  const handleUserDataSubmit = async (email: string) => {
    addBonusDownloads(10, email);
    setUserData({ name: '', email });
    setShowLeadMagnet(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      alert('Success! 10 bonus downloads added to your account!');
    }, 100);
  };

  return (
    <>
      <WorksheetGenerator 
        onOpenLeadMagnet={handleOpenLeadMagnet}
        downloadsRemaining={downloadsRemaining}
        incrementDownloadCount={incrementDownloadCount}
        hasReceivedSignupBonus={hasReceivedSignupBonus}
      />
      {showLeadMagnet && (
        <LeadMagnetSignup 
          onSuccess={handleUserDataSubmit} 
          onClose={handleCloseLeadMagnet} 
        />
      )}
    </>
  );
}
