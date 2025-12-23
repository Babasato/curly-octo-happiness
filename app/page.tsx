// app/page.tsx - FULL FILE WITH DARK MODE FIXES AND SCROLL ANCHOR
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      color: 'var(--text-primary)',
      padding: '2rem 1.5rem'
    }}>
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
            Math Worksheet Generator
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Create unlimited, customized math practice sheets for your homeschool or classroom in seconds.
          </p>
        </section>

        {/* PLACEHOLDER FOR YOUR GENERATOR COMPONENT 
            (Ensure your <Generator /> or main tool logic is here)
        */}
        <div style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--border)', 
          borderRadius: '12px', 
          padding: '2rem',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p>Your Worksheet Generator Tool is active here.</p>
        </div>

        {/* NEW RESOURCES SECTION - DARK MODE COMPATIBLE & ANCHORED */}
        <section 
          id="resources-banner" 
          style={{
            background: 'var(--surface)',
            border: '2px solid var(--border)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            marginTop: '5rem',
            textAlign: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'var(--primary)',
            color: 'white',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            NEW FOR 2024
          </div>
          
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Level Up Your Math Planning
          </h2>
          
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.25rem',
            lineHeight: '1.7',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Stop hunting for folders. Use our <strong>Notion Math Dashboards</strong> to 
            track every worksheet, grade, and milestone in one digital home.
          </p>
          
          <Link 
            href="/resources" 
            style={{
              display: 'inline-block',
              background: 'var(--primary)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1.125rem',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            Explore Resources & Templates →
          </Link>
        </section>
      </main>
    </div>
  );
}
