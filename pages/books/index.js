import Head from 'next/head';
import Link from 'next/link';
import { Nav, Footer } from '../../components/Layout';

export default function Books() {
  return (
    <>
      <Head>
        <title>Books, Philip Vivier</title>
        <meta name="description" content="Philip Vivier's books on sales psychology, personality, and workplace communication." />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HEADER */}
        <div style={{ padding: '5rem 3rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">Philip Vivier</span>
          <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4.5rem)', lineHeight: 1.1 }}>The Books</h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: '560px', marginTop: '1.5rem' }}>
            Two books. One idea. People don't resist buying, they resist being sold. These books show you what to do instead.
          </p>
        </div>

        {/* BOOK 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          <div style={{ padding: '5rem 3rem', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="badge">Pre-Sale, Ships on Launch Day</span>
            <h2 className="cormorant" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>Stop Selling.<br />Let Them Buy.</h2>
            <p className="cormorant" style={{ fontSize: '1.1rem', color: 'var(--ink-muted)', marginBottom: '2rem', fontStyle: 'italic' }}>The Definitive Edition</p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              This is the complete version, drawing on four decades of selling, building companies, and training sales teams across every industry. It starts with watchstraps on a construction site in Cape Town and ends with a framework any salesperson can use within thirty seconds of starting a conversation.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '2.5rem' }}>
              Driver. Analyst. Connector. Supporter. Once you can identify how someone thinks, you stop trying to convince them. You start helping them see clearly enough to decide.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/books/stop-selling" className="btn-primary">Pre-Order Now</Link>
              <Link href="/books/stop-selling" className="btn-secondary">Learn More</Link>
            </div>
          </div>
          <div style={{ background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 3rem' }}>
            <div style={{ width: '220px', aspectRatio: '2/3', background: 'rgba(247,244,239,0.08)', border: '1px solid rgba(247,244,239,0.15)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.7rem', color: 'rgba(247,244,239,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Philip Vivier</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.3, marginBottom: '1rem' }}>Stop Selling.<br />Let Them Buy.</p>
              <div style={{ width: '40px', height: '1px', background: 'var(--warm)', margin: '1rem auto' }}></div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.65rem', color: 'rgba(247,244,239,0.4)', fontStyle: 'italic' }}>The Definitive Edition</p>
            </div>
          </div>
        </div>

        {/* BOOK 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          <div style={{ background: 'var(--warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 3rem' }}>
            <div style={{ width: '220px', aspectRatio: '2/3', background: 'rgba(26,24,20,0.15)', border: '1px solid rgba(26,24,20,0.2)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.7rem', color: 'rgba(247,244,239,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Philip Vivier</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.3, marginBottom: '1rem' }}>The Translation<br />Problem</p>
              <div style={{ width: '40px', height: '1px', background: 'rgba(247,244,239,0.5)', margin: '1rem auto' }}></div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.65rem', color: 'rgba(247,244,239,0.6)', fontStyle: 'italic', lineHeight: 1.5 }}>Why workplace conflicts are never what they appear to be</p>
            </div>
          </div>
          <div style={{ padding: '5rem 3rem', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="badge">Pre-Sale, Ships on Launch Day</span>
            <h2 className="cormorant" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>The Translation<br />Problem</h2>
            <p className="cormorant" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--warm)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              "Every conflict is just two people protecting something they have not named yet."
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              Not a book about difficult people. A book about what happens when two people are both right, both reasonable, and still can't seem to work together. Philip Vivier spent twenty years watching good teams break down, not because of bad intentions, but because of unspoken ones.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '2.5rem' }}>
              This book shows you how to name what's really in the room.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/books/translation-problem" className="btn-primary">Pre-Order Now</Link>
              <Link href="/books/translation-problem" className="btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
