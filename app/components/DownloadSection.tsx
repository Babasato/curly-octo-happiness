// app/components/DownloadSection.tsx - DARK MODE FIXED WITH PAPER SIZE
'use client';

import React, { useState } from 'react';
import { downloadCombinedPDF, Problem, PaperSize, getPaperSizeOptions } from '../utils/pdfGenerator';

interface DownloadSectionProps {
  problems: Problem[];
  title: string;
  includeVisuals: boolean;
  onDownloadComplete: () => void;
  onOpenLeadMagnet: () => void;
  downloadsRemaining: number;
  hasReceivedSignupBonus: boolean;
}

export default function DownloadSection({ 
  problems, 
  title,
  includeVisuals,
  onDownloadComplete, 
  onOpenLeadMagnet,
  downloadsRemaining,
  hasReceivedSignupBonus
}: DownloadSectionProps) {
  
  const [selectedPaperSize, setSelectedPaperSize] = useState<PaperSize>('a4');
  const paperSizeOptions = getPaperSizeOptions();
  
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
      await downloadCombinedPDF(problems, title, includeVisuals, selectedPaperSize);
      onDownloadComplete();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const showBonusPrompt = downloadsRemaining < 3 && downloadsRemaining > 0 && !hasReceivedSignupBonus;

  return (
    <div className="download-card">
      <h3 className="download-title">
        Download Your Worksheet
      </h3>

      <p className="download-description">
        Download a clean PDF with {problems.length} problems and answer key.
        {includeVisuals && ' Includes visual aids.'}
      </p>

      {/* Paper Size Selector */}
      <div className="paper-size-selector">
        <label className="paper-size-label">
          Paper Size:
        </label>
        <select
          value={selectedPaperSize}
          onChange={(e) => setSelectedPaperSize(e.target.value as PaperSize)}
          className="paper-size-dropdown"
        >
          {paperSizeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p className="paper-size-hint">
          {selectedPaperSize === 'a4' 
            ? 'Standard international size (210×297mm)' 
            : 'Standard US/Canada size (8.5×11in)'}
        </p>
      </div>

      {showBonusPrompt && (
        <div className="bonus-prompt">
          <span className="prompt-text">Only <strong>{downloadsRemaining} download{downloadsRemaining === 1 ? '' : 's'} left</strong>. Get 10 extra downloads when you sign up!</span>
          <button 
            onClick={onOpenLeadMagnet}
            className="bonus-button"
          >
            Get Bonus
          </button>
        </div>
      )}

      <button 
        onClick={handleDownload}
        className="download-button"
        disabled={downloadsRemaining <= 0}
      >
        {downloadsRemaining <= 0 ? (
          'No Downloads Left - Sign Up for More'
        ) : (
          `Download PDF (${selectedPaperSize.toUpperCase()})`
        )}
      </button>
      
      <div className="download-note">
        Includes student worksheet + answer key
        {includeVisuals && ' • With visual aids'}
        <br />
        <strong>Free daily downloads: 10</strong>
        {hasReceivedSignupBonus && ' • +10 bonus downloads from signup!'}
        <br />
        <span className="paper-size-indicator">
          Formatted for {selectedPaperSize === 'a4' ? 'A4' : 'Letter'} paper
        </span>
      </div>
    </div>
  );
}

