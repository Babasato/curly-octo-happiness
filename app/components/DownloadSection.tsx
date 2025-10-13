// app/components/DownloadSection.tsx
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
      await downloadCombinedPDF(problems, title, includeVisuals);
      onDownloadComplete();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  // Only show bonus prompt when downloads are less than 3 but greater than 0
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

      {/* Bonus prompt only shows when downloads < 3 */}
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
          'Download PDF Worksheet'
        )}
      </button>
      
      <div className="download-note">
        Includes student worksheet + answer key
        {includeVisuals && ' • With visual aids'}
        <br />
        <strong>Free daily downloads: 10</strong>
        {hasReceivedSignupBonus && ' • +10 bonus downloads from signup!'}
      </div>

      <style jsx>{`
        .download-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px 24px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
          position: relative;
        }

        .download-title {
          margin-bottom: 12px;
          color: #1f2937;
          font-size: 20px;
          font-weight: 700;
        }

        .download-description {
          margin-bottom: 20px;
          color: #6b7280;
          font-size: 15px;
          line-height: 1.5;
        }

        .bonus-prompt {
          background: linear-gradient(135deg, #fef3c7, #fef7cd);
          border: 2px solid #f59e0b;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .prompt-text {
          color: #92400e;
          font-size: 14px;
          text-align: left;
          flex: 1;
        }

        .bonus-button {
          background: #f59e0b;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .bonus-button:hover {
          background: #d97706;
          transform: translateY(-1px);
        }

        .download-button {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          margin-bottom: 12px;
          width: 100%;
          max-width: 280px;
        }

        .download-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(16, 185, 129, 0.4);
        }

        .download-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .download-note {
          font-size: 12px;
          color: #9ca3af;
          font-style: italic;
          line-height: 1.4;
        }

        @media (max-width: 640px) {
          .download-card {
            padding: 24px 16px;
          }

          .bonus-prompt {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .prompt-text {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}