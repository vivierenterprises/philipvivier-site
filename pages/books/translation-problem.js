import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Nav, Footer } from '../../components/Layout';

const PRICES = {
  digital: 'pri_TRANS_DIGITAL',
  paperback: 'pri_TRANS_PAPERBACK',
  bundle: 'pri_TRANS_BUNDLE',
};

const AMOUNTS = {
  digital: '$9.99',
  paperback: '$19.99',
  bundle: '$24.99',
};

export default function TranslationProblem() {
  const [selected, setSelected] = useState('bundle');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    if (typeof window !== 'undefined' && window.Paddle) {
      window.Paddle.Checkout.open({
        items: [{ priceId: PRICES[selected], quantity: 1 }],
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>The Translation Problem, Pre-Order | Philip Vivier</title>
        <meta name="description" content="Every conflict is just two people protecting something they have not named yet. Pre-order The Translation Problem by Philip Vivier." />
        <script src="https://cdn.paddle.com/paddle/v2/paddle.js" />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HERO */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          <div style={{ padding: '5rem 3rem', borderRight: '1px solid var(--border)' }}>
            <span className="badge">Pre-Sale Now Open</span>
            <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              The Translation<br />Problem
            </h1>
            <p className="cormorant" style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--warm)', marginBottom: '2rem', lineHeight: 1.5 }}>
              "Every conflict is just two people protecting something they have not named yet."
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              Not a book about difficult people. A book about what happens when two people are both right, both reasonable, and still can't seem to work together.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              Philip Vivier spent twenty years watching good teams break down, not because of bad intentions, but because of unspoken ones. This book shows you how to name what's really in the room.
            </p>
          </div>

          {/* PURCHASE BOX */}
          <div style={{ padding: '5rem 3rem', background: 'white' }}>
            <h2 className="cormorant" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Choose your format</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { key: 'digital', label: 'Digital Edition', desc: 'PDF + ePub. Delivered on launch day.', price: '$9.99' },
                { key: 'paperback', label: 'Paperback', desc: 'Ships on launch day via IngramSpark.', price: '$19.99' },
                { key: 'bundle', label: 'Bundle, Best Value', desc: 'Digital + Paperback. Save $5.', price: '$24.99', highlight: true },
              ].map(opt => (
                <div
                  key={opt.key}
                  onClick={() => setSelected(opt.key)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    border: selected === opt.key ? '2px solid var(--ink)' : '1px solid var(--border)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: selected === opt.key ? 'var(--cream)' : 'white',
                    transition: 'all 0.15s',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>{opt.label}</p>
                      {opt.highlight && <span style={{ fontSize: '0.6rem', background: 'var(--warm)', color: 'white', padding: '0.1rem 0.4rem', borderRadius: '2px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Best Value</span>}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', marginTop: '0.2rem' }}>{opt.desc}</p>
                  </div>
                  <p className="cormorant" style={{ fontSize: '1.4rem', fontWeight: 300, flexShrink: 0 }}>{opt.price}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', padding: '1rem', fontSize: '0.85rem' }}
            >
              {loading ? 'Opening checkout...' : `Pre-Order for ${AMOUNTS[selected]}`}
            </button>

            <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>
              Secure checkout via Paddle. Questions? <Link href="/contact" style={{ color: 'var(--warm)' }}>Get in touch.</Link>
            </p>
          </div>
        </div>

        {/* WHO IT'S FOR */}
        <div style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">Who This Book Is For</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '3rem', marginTop: '2rem' }}>
            {[
              { title: 'Leaders', body: 'Who have good people who don\'t seem to understand each other, and can\'t figure out why.' },
              { title: 'Managers', body: 'Who are caught between departments that are both doing their jobs and somehow still creating friction.' },
              { title: 'Anyone', body: 'Who has ever sat in a meeting and thought: there has to be a better way for people to work together.' },
            ].map(item => (
              <div key={item.title} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--warm-light)' }}>
                <h3 className="cormorant" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CHAPTER PREVIEW */}
        <div style={{ padding: '5rem 3rem', background: 'white', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">From the Book</span>
          <blockquote className="cormorant" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', lineHeight: 1.5, color: 'var(--ink)', maxWidth: '720px', borderLeft: '3px solid var(--warm)', paddingLeft: '2rem', marginTop: '1rem' }}>
            "The issue was not that Marketing moved too fast or that Operations moved too slow. The issue was that they had different definitions of what 'ready' meant, and neither team had ever said that out loud."
          </blockquote>
          <p style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', marginTop: '1.5rem', paddingLeft: '2rem' }}>— Chapter 1, The Translation Problem</p>
        </div>

      </main>
      <Footer />
    </>
  );
}
