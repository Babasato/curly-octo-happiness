//app/components/LeadMagnetSignup.tsx
"use client";

import { useState } from "react";

interface LeadMagnetSignupProps {
  onSuccess: (email: string, language: string, unitSystem?: string, grade?: string) => void;
  onClose: () => void;
}

export default function LeadMagnetSignup({ onSuccess, onClose }: LeadMagnetSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to save email");
      }

      const userData = { email, language: "en" };
      localStorage.setItem("worksheetUser", JSON.stringify(userData));
      onSuccess(email, "en");
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
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside modal
      >
        {/* Close Button is placed here */}
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <div className="bonus-badge">+10 Bonus Downloads</div>
          <h2>Unlock More Math Worksheets!</h2>
          <p className="subtitle">
            Get instant access to 10 extra downloads when you join our homeschool community
          </p>
        </div>

        <div className="benefits-list">
          <div className="benefit-item">
            <span className="benefit-text">
              <strong>+10 Instant Downloads</strong> – Added to your account immediately
            </span>
          </div>
          <div className="benefit-item">
            <span className="benefit-text">
              <strong>Personalized Worksheets</strong> – Tailored to your grade level
            </span>
          </div>
          <div className="benefit-item">
            <span className="benefit-text">
              <strong>Regular Updates</strong> – New worksheet types and teaching tips
            </span>
          </div>
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
            <p className="email-help">We'll add your 10 bonus downloads instantly</p>
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
          /* ADJUSTED PADDING: Increased right padding to prevent content from going under the button */
          padding: 24px 32px 24px 24px;
          width: 100%;
          max-width: min(400px, 100vw - 32px);
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid #e5e7eb;
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
          /* FIX 1: Ensure button is above all other modal content */
          z-index: 10;
        }

        .close-button:hover {
          color: #111827;
        }

        /* HEADER */
        .modal-header {
          text-align: center;
          /* ADJUSTED MARGIN: Added margin-right to prevent header content from overlapping the button */
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

        /* BENEFITS */
        .benefits-list {
          background: #f8fafc;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 20px;
          border: 1px solid #e2e8f0;
        }

        .benefit-item {
          margin-bottom: 10px;
        }

        .benefit-item:last-child {
          margin-bottom: 0;
        }

        .benefit-text {
          color: #374151;
          font-size: 14px;
        }

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
        }

        /* RESPONSIVE */
        @media (max-width: 480px) {
          .lead-magnet-modal {
            /* Adjusted right padding to leave space for button */
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