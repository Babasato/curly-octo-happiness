// app/contact/page.tsx - UPDATED BRANDING
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
    <div className="contact-page-container">
      <div className="contact-content-wrapper">
        <div className="contact-content-card">
          <h1 className="contact-page-title">Contact Us</h1>
          
          <section className="contact-section">
            <h2 className="contact-section-title">We're Here to Help</h2>
            <p className="contact-description">
              Have questions about using homeschoolmath.site? Need technical support? 
              Want to share feedback or suggestions? We'd love to hear from you!
            </p>
          </section>

          <div className="contact-grid">
            <div className="contact-form-section">
              <h3 className="contact-subsection-title">Send Us a Message</h3>

              {submitStatus === 'success' && (
                <div className="contact-success-message">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact-error-message">
                  ✗ Something went wrong. Please try again or email us directly at bob@homeschoolmath.site
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
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
                  <label htmlFor="email" className="form-label">Email Address *</label>
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
                  <label htmlFor="subject" className="form-label">Subject</label>
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
                  <label htmlFor="message" className="form-label">Message *</label>
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
                
                <button type="submit" disabled={isSubmitting} className="contact-submit-button">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-resources-section">
              <h3 className="contact-subsection-title">Quick Help & Resources</h3>
              
              <div className="contact-resources-stack">
                <div className="contact-resource-card contact-resource-blue">
                  <h4 className="contact-resource-title">How to Use Guide</h4>
                  <p className="contact-resource-description">
                    New to homeschoolmath.site? Check out our comprehensive guide to get started.
                  </p>
                  <Link href="/how-to-use" className="contact-resource-link">View Tutorial →</Link>
                </div>
                
                <div className="contact-resource-card contact-resource-purple">
                  <h4 className="contact-resource-title">Teaching Tips</h4>
                  <p className="contact-resource-description">
                    Discover effective strategies for using worksheets in your teaching practice.
                  </p>
                  <Link href="/teaching-tips" className="contact-resource-link">Get Teaching Tips →</Link>
                </div>
                
                <div className="contact-resource-card contact-resource-orange">
                  <h4 className="contact-resource-title">Common Questions</h4>
                  <p className="contact-resource-description">
                    Find answers to frequently asked questions about our worksheet generator.
                  </p>
                  <Link href="/how-to-use" className="contact-resource-link">View FAQs →</Link>
                </div>
              </div>

              <div className="contact-response-info">
                <h4 className="contact-info-title">Response Time</h4>
                <p className="contact-info-description">
                  We typically respond to all messages within 24-48 hours. For technical issues, 
                  we'll work to resolve them as quickly as possible.
                </p>
                <p className="contact-info-note">
                  Please note: We are a small team dedicated to providing free educational resources. 
                  Your patience and understanding are appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
