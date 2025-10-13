"use client";

interface WorksheetDownloadProps {
  email: string;
  language: string;
  unitSystem: string;
  grade: string;
  onContinue: () => void;
}

export default function WorksheetDownload({ 
  email, 
  language, 
  unitSystem, 
  grade, 
  onContinue 
}: WorksheetDownloadProps) {
  return (
    <div className="download-modal">
      <div className="download-content">
        <h2>🎉 Get Bonus Downloads</h2>
        <p>Enter your email for bonus downloads and updates</p>
        
        <div className="download-details">
          <p><strong>Email:</strong> {email}</p>
          {unitSystem && <p><strong>Unit System:</strong> {unitSystem}</p>}
          {grade && <p><strong>Grade:</strong> {grade}</p>}
        </div>
        
        <button onClick={onContinue} className="cta-button">
          Generate Worksheet
        </button>
        
        <p className="privacy-notice">
          We'll send you bonus downloads and occasional updates. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}