// app/components/LeadMagnetSignup.tsx - CORRECTED
"use client";

import { useState } from "react";

interface LeadMagnetSignupProps {
  onSuccess: (email: string) => void; 
  onClose: () => void;
}

export default function LeadMagnetSignup({ onSuccess, onClose }: LeadMagnetSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [marketing_consent, setMarketingConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // MANDATORY CHECK: This enforces that the user must explicitly opt-in for marketing/affiliate emails.
    if (!marketing_consent) {
      alert("Please check the box to confirm you'd like to receive occasional tips, resources, and recommended educational products.");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          language: "en",
          unitSystem: null,
          grade: null,
          marketing_consent: marketing_consent, 
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to save email");
      }

      const userData = { email };
      localStorage.setItem("worksheetUser", JSON.stringify(userData));
      onSuccess(email);
    } catch (error: any) {
      alert(`There was an error: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="lead-magnet-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          {/* EMOJI REMOVED */}
          <div className="bonus-badge">+10 Bonus Downloads!</div> 
          <h2>Unlock 10 Extra Math Worksheets Instantly!</h2>
          <p className="subtitle">
            Get 10 extra downloads when you join our homeschool community today.
          </p>
        </div>

        {/* BENEFIT LIST ITEMS REMOVED */}
        <div className="benefits-list">
          {/* This section is now empty as requested, but the container remains. */}
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <p className="email-help">Your 10 bonus downloads will be added instantly.</p>
          </div>
          
          {/* PROMINENT OPT-IN CHECKBOX */}
          <div className="marketing-checkbox-group-prominent"> 
            <input
              id="marketing-consent"
              type="checkbox"
              checked={marketing_consent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="marketing-checkbox"
            />
            <label htmlFor="marketing-consent" className="consent-label-prominent">
              ✅ Yes, I want occasional tips, resources, and <strong>recommended educational products (which may include affiliate links)</strong>.
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Adding Your Bonus...
              </>
            ) : (
              "Get My 10 Bonus Downloads!"
            )}
          </button>
        </form>

        <p className="privacy-text">
          We respect your privacy. Unsubscribe anytime. No spam — just helpful math resources.
        </p>
      </div>

      <style jsx>{`
        /* BACKDROP */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(3px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          z-index: 1000;
        }

        /* MODAL */
        .lead-magnet-modal {
          position: relative;
          background: white;
          border-radius: 12px;
          padding: 24px 32px 24px 24px;
          width: 100%;
          max-width: min(400px, 100vw - 32px);
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid #e2e8f0;
        }

        /* CLOSE BUTTON */
        .close-button {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          font-size: 20px;
          color: #6b7280;
          cursor: pointer;
          line-height: 1;
          transition: color 0.2s ease;
          z-index: 10;
        }

        .close-button:hover {
          color: #111827;
        }

        /* HEADER */
        .modal-header {
          text-align: center;
          margin: 10px 10px 20px 0; 
        }

        .bonus-badge {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          padding: 6px 12px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 13px;
          display: inline-block;
          margin-bottom: 12px;
        }

        .modal-header h2 {
          color: #1f2937;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .subtitle {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.4;
        }

        /* BENEFITS (container still present but empty) */
        .benefits-list {
          background: #f8fafc;
          border-radius: 8px;
          padding: 16px; /* Still provide padding if you re-add items later */
          margin-bottom: 20px;
          border: 1px solid #e2e8f0;
        }
        /* No individual .benefit-item styles needed if list is empty */

        /* FORM */
        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #374151;
          font-weight: 600;
          font-size: 14px;
        }

        .email-input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        .email-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .email-help {
          margin-top: 6px;
          color: #6b7280;
          font-size: 12px;
          font-style: italic;
        }

        /* --- PROMINENT CHECKBOX STYLES --- */
        .marketing-checkbox-group-prominent {
          background: #f0f9ff;
          border: 1px solid #bfdbfe;
          border-radius: 6px;
          padding: 12px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          gap: 12px;
        }

        .marketing-checkbox {
          transform: scale(1.3);
          cursor: pointer;
          flex-shrink: 0;
          margin-top: 0;
        }

        .consent-label-prominent {
          font-size: 13px;
          color: #1e3a8a;
          line-height: 1.4;
          cursor: pointer;
          font-weight: 500;
        }
        
        .consent-label-prominent strong {
          font-weight: 700;
        }
        /* --- END PROMINENT STYLES --- */
        
        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 14px 20px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-1px);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .privacy-text {
          color: #9ca3af;
          font-size: 11px;
          text-align: center;
          line-height: 1.4;
          margin-top: 15px;
        }

        /* RESPONSIVE */
        @media (max-width: 480px) {
          .lead-magnet-modal {
            padding: 16px 30px 16px 16px; 
          }
          
          .modal-header h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
