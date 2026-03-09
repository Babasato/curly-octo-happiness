// app/contact/page.tsx
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
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>

        {/* Hero */}
        <section style={{
          textAlign: 'center',
          padding: '3rem 0',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--primary)',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '600',
            padding: '0.5rem 1.5rem',
            borderRadius: '6px',
            marginBottom: '1.5rem'
          }}>
            Get in Touch
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Have a question, feedback, or a partnership idea? We read every message and respond within 24–48 hours.
          </p>
        </section>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>

          {/* Form */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}>
              Send a Message
            </h2>

            {submitStatus === 'success' && (
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #86efac',
                color: '#166534',
                padding: '1rem',
                borderRadius: '6px',
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                ✓ Message sent! We'll get back to you shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                background: '#fef2f2',
                border: '1px solid #fca5a5',
                color: '#991b1b',
                padding: '1rem',
                borderRadius: '6px',
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                ✗ Something went wrong. Email us directly at{' '}
                <a href="mailto:bob@homeschoolmath.site" style={{ color: 'inherit', fontWeight: '700' }}>
                  bob@homeschoolmath.site
                </a>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    background: 'var(--background)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    background: 'var(--background)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    background: 'var(--background)',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Support</option>
                  <option value="feature">Feature Request</option>
                  <option value="feedback">General Feedback</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    background: 'var(--background)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? 'var(--border)' : 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Email Directly
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '0.75rem'
              }}>
                Prefer email? Reach us at:
              </p>
              <a href="mailto:bob@homeschoolmath.site" style={{
                color: 'var(--primary)',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                bob@homeschoolmath.site
              </a>
            </div>

            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                How to Use the Generator
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '0.75rem'
              }}>
                Tips and best practices for generating and printing worksheets.
              </p>
              <Link href="/how-to-use" style={{
                color: 'var(--primary)',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                View Tutorial →
              </Link>
            </div>

            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Courses & Resources
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '0.75rem'
              }}>
                Browse planners, Notion templates, and focused math courses.
              </p>
              <Link href="/resources" style={{
                color: 'var(--primary)',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Browse Resources →
              </Link>
            </div>

            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                Response Time
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                We're a small team. We read every message and typically respond within 24–48 hours.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
