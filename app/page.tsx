// app/page.tsx
import Link from 'next/link';
import HomeClient from './components/HomeClient';

export default function Home() {
  return (
    <div className="home-page">
      <main className="main-content-area">

        {/* Interactive generator — client side */}
<div style={{ minHeight: '600px' }}>
  <HomeClient />
</div>

        {/* Resources banner — now server rendered, no layout shift */}
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
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Complete Your Math Planning System
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Take your organization beyond the worksheet. Access our professional curriculum planners, 
            automated grade trackers, and master dashboards designed to streamline your teaching.
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
              transition: 'opacity 0.2s'
            }}
          >
            Explore Resources →
          </Link>
        </section>

      </main>
    </div>
  );
}
