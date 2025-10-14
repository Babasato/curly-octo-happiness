// app/contact/page.tsx - UPDATED
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="content-card">
          <h1 className="page-title">
            Contact Us
          </h1>
          
          <section className="section-spacing">
            <h2 className="section-title">
              We're Here to Help
            </h2>
            <p className="section-description">
              Have questions about using Math Worksheet Generator? Need technical support? 
              Want to share feedback or suggestions? We'd love to hear from you!
            </p>
          </section>

          <div className="grid-layout">
            <div className="form-section">
              <h3 className="subsection-title">
                Send Us a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ✗ Something went wrong. Please try again or email us directly at bob@homeschoolmath.site
                </div>
              )}

              <form onSubmit={handleSubmit} className="form-stack">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="feature">Feature Request</option>
                    <option value="feedback">General Feedback</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p className="alternative-contact">
                Or email us directly at: <a href="mailto:bob@homeschoolmath.site" className="email-link">bob@homeschoolmath.site</a>
              </p>
            </div>

            <div className="resources-section">
              <h3 className="subsection-title">
                Quick Help & Resources
              </h3>
              
              <div className="resources-stack">
                <div className="resource-card resource-blue">
                  <h4 className="resource-title">
                    How to Use Guide
                  </h4>
                  <p className="resource-description">
                    New to Math Worksheet Generator? Check out our comprehensive guide to get started.
                  </p>
                  <Link href="/how-to-use" className="resource-link">
                    View Tutorial →
                  </Link>
                </div>
                
                <div className="resource-card resource-purple">
                  <h4 className="resource-title">
                    Teaching Tips
                  </h4>
                  <p className="resource-description">
                    Discover effective strategies for using worksheets in your teaching practice.
                  </p>
                  <Link href="/teaching-tips" className="resource-link">
                    Get Teaching Tips →
                  </Link>
                </div>
                
                <div className="resource-card resource-orange">
                  <h4 className="resource-title">
                    Common Questions
                  </h4>
                  <p className="resource-description">
                    Find answers to frequently asked questions about our worksheet generator.
                  </p>
                  <Link href="/how-to-use" className="resource-link">
                    View FAQs →
                  </Link>
                </div>
              </div>

              <div className="response-time-info">
                <h4 className="info-title">
                  Response Time
                </h4>
                <p className="info-description">
                  We typically respond to all messages within 24-48 hours. For technical issues, 
                  we'll work to resolve them as quickly as possible.
                </p>
                <p className="info-note">
                  Please note: We are a small team dedicated to providing free educational resources. 
                  Your patience and understanding are appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          background: var(--background);
          padding: 2rem 1rem;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .content-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          width: 100%;
          box-sizing: border-box;
        }

        .page-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .section-spacing {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: clamp(1.5rem, 4vw, 1.75rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .section-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: clamp(1rem, 2vw, 1.1rem);
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .grid-layout {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          
          .page-container {
            padding: 3rem 1.5rem;
          }
          
          .content-card {
            padding: 3rem;
          }
        }

        .form-section {
          width: 100%;
        }

        .subsection-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .success-message {
          padding: 1rem;
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          border-radius: 8px;
          color: #155724;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .error-message {
          padding: 1rem;
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 8px;
          color: #721c24;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .form-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          width: 100%;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 0.875rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--background);
          color: var(--text-primary);
          font-size: 1rem;
          box-sizing: border-box;
          transition: border-color 0.2s ease;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--primary);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
          width: 100%;
        }

        .submit-button:hover:not(:disabled) {
          background: var(--primary-dark);
        }

        .submit-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .alternative-contact {
          margin-top: 1.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-align: center;
        }

        .email-link {
          color: var(--primary);
          text-decoration: none;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        .resources-section {
          width: 100%;
        }

        .resources-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .resource-card {
          border-radius: 8px;
          padding: 1.5rem;
          transition: transform 0.2s ease;
        }

        .resource-card:hover {
          transform: translateY(-2px);
        }

        .resource-blue {
          background: #dbeafe;
        }

        .resource-purple {
          background: #f3e8ff;
        }

        .resource-orange {
          background: #ffedd5;
        }

        .resource-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .resource-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .resource-link {
          color: inherit;
          font-weight: 500;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .resource-link:hover {
          text-decoration: underline;
        }

        .response-time-info {
          background: #f8fafc;
          border-radius: 8px;
          padding: 1.5rem;
          border: 1px solid var(--border);
        }

        .info-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .info-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .info-note {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}