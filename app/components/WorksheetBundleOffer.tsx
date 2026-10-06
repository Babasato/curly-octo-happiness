// app/components/WorksheetBundleOffer.tsx
interface WorksheetBundleOfferProps {
  grade: string;
  topic: string;
  gumroadUrl: string;
  price?: string;
  pageCount?: number;
}

export default function WorksheetBundleOffer({
  grade,
  topic,
  gumroadUrl,
  price = '$7',
  pageCount = 50,
}: WorksheetBundleOfferProps) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderLeft: '4px solid var(--primary)',
          borderRadius: '8px',
          padding: '1.5rem 2rem',
        }}
      >
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}
        >
          Want {pageCount} Ready-Made {topic} Pages?
        </h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Skip the daily worksheet generator and get a printable pack of {pageCount} grade {grade} {topic.toLowerCase()}{' '}
          practice pages, ready to print, for {price}.
        </p>
        <a
          href={gumroadUrl}
          style={{
            display: 'inline-block',
            background: 'var(--primary)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}
        >
          Get the {pageCount}-Page Pack — {price}
        </a>
      </div>
    </section>
  );
}