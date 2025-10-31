// app/page.tsx - CORRECTED
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

  // FIX: Logic moved inside to ensure bonus is added only once.
  const handleUserDataSubmit = (email: string) => {
    console.log('User data submitted:', { email });
    
    // Logic to prevent giving the bonus twice:
    if (!hasReceivedSignupBonus) {
      addBonusDownloads(10, email); // useDownloadTracker handles the actual state update
      alert('Success! You now have 10 extra downloads!');
    } else {
      alert('Welcome back! Your bonus downloads are still available.');
    }
    
    setUserData({ name: '', email });
    setShowLeadMagnet(false);
  };

  return (
    <div className="home-page">
      {/* HEADER IS NOW IN LAYOUT - REMOVED FROM HERE */}
      
      {/* Main Content */}
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
