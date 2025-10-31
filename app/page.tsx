// app/page.tsx - FINAL FIX
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
    downloadData 
  } = useDownloadTracker(); 

  // Debug effect to see state changes
  useEffect(() => {
    console.log('Home component - Current state:', {
      downloadsRemaining,
      hasReceivedSignupBonus,
      downloadData
    });
  }, [downloadsRemaining, hasReceivedSignupBonus, downloadData]);

  const handleOpenLeadMagnet = () => {
    setShowLeadMagnet(true);
  };

  const handleCloseLeadMagnet = () => {
    setShowLeadMagnet(false);
  };

  const handleUserDataSubmit = async (email: string) => {
    console.log('=== USER DATA SUBMIT START ===');
    console.log('Before bonus - hasReceivedSignupBonus:', hasReceivedSignupBonus);
    console.log('Before bonus - downloadsRemaining:', downloadsRemaining);
    console.log('Before bonus - downloadData:', downloadData);
    
    // Use a different approach - check localStorage directly
    const saved = localStorage.getItem('downloadData');
    const alreadyGotBonus = saved ? JSON.parse(saved).hasReceivedSignupBonus : false;
    
    console.log('Checking localStorage for existing bonus:', alreadyGotBonus);
    
    if (!alreadyGotBonus) {
      console.log('Adding 10 bonus downloads for email:', email);
      addBonusDownloads(10, email);
      
      // Wait a moment for state to update
      setTimeout(() => {
        console.log('After bonus - downloadsRemaining:', downloadsRemaining);
        console.log('After bonus - downloadData:', downloadData);
        alert('Success! You now have 10 extra downloads!');
      }, 100);
    } else {
      console.log('User already received bonus, skipping');
      alert('Welcome back! Your bonus downloads are still available.');
    }
    
    setUserData({ name: '', email });
    setShowLeadMagnet(false);
    console.log('=== USER DATA SUBMIT END ===');
  };

  return (
    <div className="home-page">
      
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
