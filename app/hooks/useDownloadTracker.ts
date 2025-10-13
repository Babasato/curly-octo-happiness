// app/hooks/useDownloadTracker.ts - REPLACE YOUR CURRENT FILE WITH THIS
"use client";

import { useState, useEffect } from 'react';

interface DownloadData {
  count: number;
  lastReset: string;
  email?: string;
  bonusDownloads: number;
  hasReceivedSignupBonus: boolean;
}

export const useDownloadTracker = () => {
  const [downloadData, setDownloadData] = useState<DownloadData>({ 
    count: 0, 
    lastReset: new Date().toISOString(), 
    bonusDownloads: 0,
    hasReceivedSignupBonus: false 
  });

  // Load from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('downloadData');
    if (saved) {
      try {
        const data: DownloadData = JSON.parse(saved);
        const lastResetDate = new Date(data.lastReset);
        const today = new Date();
        
        // Reset daily downloads if it's a new day
        if (lastResetDate.getDate() !== today.getDate() || 
            lastResetDate.getMonth() !== today.getMonth() || 
            lastResetDate.getFullYear() !== today.getFullYear()) {
          setDownloadData({ 
            ...data, 
            count: 0, 
            lastReset: today.toISOString() 
          });
        } else {
          setDownloadData(data);
        }
      } catch (error) {
        console.error('Error loading download data:', error);
      }
    }
  }, []);

  // Save to localStorage whenever downloadData changes
  useEffect(() => {
    localStorage.setItem('downloadData', JSON.stringify(downloadData));
  }, [downloadData]);

  const incrementDownloadCount = () => {
    setDownloadData(prev => ({ ...prev, count: prev.count + 1 }));
  };

  const addBonusDownloads = (bonusCount: number, email?: string) => {
  setDownloadData(prev => {
    // Only add bonus if they haven't received it yet
    if (prev.hasReceivedSignupBonus) {
      return prev; // Don't add more bonus if already received
    }
    
    return {
      ...prev, 
      email: email || prev.email,
      bonusDownloads: Math.min(prev.bonusDownloads + bonusCount, 10), // Cap at 10 bonus
      hasReceivedSignupBonus: true 
    };
  });
};

  const getDownloadsRemaining = (): number => {
    const dailyFree = 10;  // Back to 10
    const totalAvailable = dailyFree + downloadData.bonusDownloads;
    const remaining = totalAvailable - downloadData.count;
    return Math.max(0, remaining);
};

  return {
    downloadsRemaining: getDownloadsRemaining(),
    incrementDownloadCount,
    addBonusDownloads,
    downloadData,
    hasReceivedSignupBonus: downloadData.hasReceivedSignupBonus
  };
};