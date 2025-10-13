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
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2rem'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            Contact Us
          </h1>
          
          <section style={{marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              We're Here to Help
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Have questions about using Math Worksheet Generator? Need technical support? 
              Want to share feedback or suggestions? We'd love to hear from you!
            </p>
          </section>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Send Us a Message
              </h3>

              {submitStatus === 'success' && (
                <div style={{
                  padding: '1rem',
                  backgroundColor: '#d4edda',
                  border: '1px solid #c3e6cb',
                  borderRadius: '6px',
                  color: '#155724',
                  marginBottom: '1rem'
                }}>
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  padding: '1rem',
                  backgroundColor: '#f8d7da',
                  border: '1px solid #f5c6cb',
                  borderRadius: '6px',
                  color: '#721c24',
                  marginBottom: '1rem'
                }}>
                  ✗ Something went wrong. Please try again or email us directly at bob@homeschoolmath.site
                </div>
              )}

              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div>
                  <label htmlFor="name" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem'
                    }}
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem'
                    }}
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem'
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
                
                <div>
                  <label htmlFor="message" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting ? '#ccc' : 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p style={{
                marginTop: '1rem',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)'
              }}>
                Or email us directly at: <a href="mailto:bob@homeschoolmath.site" style={{ color: 'var(--primary)' }}>bob@homeschoolmath.site</a>
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Quick Help & Resources
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  background: '#dbeafe',
                  borderRadius: '6px',
                  padding: '1.25rem'
                }}>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    How to Use Guide
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.5'
                  }}>
                    New to Math Worksheet Generator? Check out our comprehensive guide to get started.
                  </p>
                  <Link href="/how-to-use" style={{
                    color: '#2563eb',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}>
                    View Tutorial →
                  </Link>
                </div>
                
                <div style={{
                  background: '#f3e8ff',
                  borderRadius: '6px',
                  padding: '1.25rem'
                }}>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    Teaching Tips
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.5'
                  }}>
                    Discover effective strategies for using worksheets in your teaching practice.
                  </p>
                  <Link href="/teaching-tips" style={{
                    color: '#7c3aed',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}>
                    Get Teaching Tips →
                  </Link>
                </div>
                
                <div style={{
                  background: '#ffedd5',
                  borderRadius: '6px',
                  padding: '1.25rem'
                }}>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    Common Questions
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.5'
                  }}>
                    Find answers to frequently asked questions about our worksheet generator.
                  </p>
                  <Link href="/how-to-use" style={{
                    color: '#ea580c',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}>
                    View FAQs →
                  </Link>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                background: '#f8fafc',
                borderRadius: '6px',
                padding: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Response Time
                </h4>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                  lineHeight: '1.5'
                }}>
                  We typically respond to all messages within 24-48 hours. For technical issues, 
                  we'll work to resolve them as quickly as possible.
                </p>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}>
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