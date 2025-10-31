// app/page.tsx - FINAL FIX
'use client';

import { useState } from 'react';
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
  
  // *** NEW STATE TO FORCE RE-RENDER ***
  const [downloadUpdateKey, setDownloadUpdateKey] = useState(0); 

  const { 
    addBonusDownloads, 
    downloadsRemaining, 
    incrementDownloadCount,
    hasReceivedSignupBonus 
  } = useDownloadTracker(downloadUpdateKey); // Pass key to hook if possible (or just rely on the force-re-render)

  const handleOpenLeadMagnet = () => {
    setShowLeadMagnet(true);
  };

  const handleCloseLeadMagnet = () => {
    setShowLeadMagnet(false);
  };

  const handleUserDataSubmit = (email: string) => {
    console.log('User data submitted:', { email });
    
    // Logic to prevent giving the bonus twice:
    if (!hasReceivedSignupBonus) {
      addBonusDownloads(10, email); // This calls the hook function
      
      // *** THE CRUCIAL LINE: Forces the component to re-render and reflect the state change ***
      setDownloadUpdateKey(prev => prev + 1); 
      
      alert('Success! You now have 10 extra downloads!');
    } else {
      alert('Welcome back! Your bonus downloads are still available.');
    }
    
    setUserData({ name: '', email });
    setShowLeadMagnet(false);
  };

  return (
    <div className="home-page">
      {/* ... (rest of the component remains the same) ... */}
      <main className="main-content-area">
        <WorksheetGenerator 
          onOpenLeadMagnet={handleOpenLeadMagnet}
          downloadsRemaining={downloadsRemaining}
          incrementDownloadCount={incrementDownloadCount}
          hasReceivedSignupBonus={hasReceivedSignupBonus}
        />
      </main>

      {/* Lead Magnet Modal */}
      {showLeadMagnet && (
        <LeadMagnetSignup 
          onSuccess={handleUserDataSubmit} 
          onClose={handleCloseLeadMagnet} 
        />
      )}

      {/* ... (rest of the file and styles remain the same) ... */}
    </div>
  );
}
