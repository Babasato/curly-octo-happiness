// app/components/DownloadSection.tsx - DARK MODE FIXED
'use client';

import React from 'react';
import { downloadCombinedPDF, Problem } from '../utils/pdfGenerator';

interface DownloadSectionProps {
  problems: Problem[];
  title: string;
  includeVisuals: boolean;
  onDownloadComplete: () => void;
  onOpenLeadMagnet: () => void;
  downloadsRemaining: number;
  hasReceivedSignupBonus: boolean;
  paperSize: 'a4' | 'letter';
}

export default function DownloadSection({ 
  problems, 
  title,
  includeVisuals,
  onDownloadComplete, 
  onOpenLeadMagnet,
  downloadsRemaining,
  hasReceivedSignupBonus,
  paperSize
}: DownloadSectionProps) {
  
  const handleDownload = async () => {
    if (problems.length === 0) {
      alert('Please generate problems first!');
      return;
    }

    if (downloadsRemaining <= 0) {
      alert('No downloads remaining for today. Sign up for more!');
      onOpenLeadMagnet();
      return;
    }

    try {
      await downloadCombinedPDF(problems, title, includeVisuals, paperSize);
      onDownloadComplete();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const showBonusPrompt = downloadsRemaining < 3 && downloadsRemaining > 0 && !hasReceivedSignupBonus;

  return (
    <div className="download-card">
      <h3 className="download-title">Download Your Worksheet</h3>
      <p className="download-description">
        Download a clean PDF with {problems.length} problems and answer key.
        {includeVisuals && ' Includes visual aids.'}
        <br />
        Format: <strong>{paperSize === 'a4' ? 'A4 (International)' : 'Letter (US/Canada)'}</strong>
      </p>

      {showBonusPrompt && (
        <div className="bonus-prompt">
          <span className="prompt-text">Only <strong>{downloadsRemaining} download{downloadsRemaining === 1 ? '' : 's'} left</strong>. Get 10 extra downloads when you sign up!</span>
          <button onClick={onOpenLeadMagnet} className="bonus-button">Get Bonus</button>
        </div>
      )}

      <button onClick={handleDownload} className="download-button" disabled={downloadsRemaining <= 0}>
        {downloadsRemaining <= 0 ? 'No Downloads Left - Sign Up for More' : `Download PDF Worksheet (${paperSize.toUpperCase()})`}
      </button>
      
      <div className="download-note">
        Includes student worksheet + answer key
        {includeVisuals && ' • With visual aids'}
        <br />
        <strong>Free daily downloads: 10</strong>
        {hasReceivedSignupBonus && ' • +10 bonus downloads from signup!'}
      </div>
    </div>
  );
}
