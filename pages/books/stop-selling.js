import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Nav, Footer } from '../../components/Layout';

// Replace these with your actual Paddle price IDs once created
const PRICES = {
  digital: 'pri_STOP_DIGITAL',
  paperback: 'pri_STOP_PAPERBACK',
  bundle: 'pri_STOP_BUNDLE',
};

const AMOUNTS = {
  digital: '$9.99',
  paperback: '$19.99',
  bundle: '$24.99',
};

export default function StopSelling() {
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
        <title>Stop Selling. Let Them Buy., Pre-Order | Philip Vivier</title>
        <meta name="description" content="Pre-order the definitive edition of Stop Selling, Let Them Buy by Philip Vivier. Digital, paperback, or bundle." />
        <script src="https://cdn.paddle.com/paddle/v2/paddle.js" />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HERO */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          <div style={{ padding: '5rem 3rem', borderRight: '1px solid var(--border)' }}>
            <span className="badge">Pre-Sale Now Open</span>
            <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4.5rem)', lineHeight: 1.05, marginBottom: '1rem' }}>
              Stop Selling.<br />Let Them Buy.
            </h1>
            <p className="cormorant" style={{ fontSize: '1.2rem', color: 'var(--ink-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>The Definitive Edition, Philip Vivier</p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              This is the complete version of the framework that began in 2004 with fifty cold calls a day in Dallas, Texas, and ended with a realization that changed everything: the issue was never the message. It was the person hearing it.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              Pre-order now. Ships on launch day.
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
              Secure checkout via Paddle. Cancel anytime before shipping. Questions? <Link href="/contact" style={{ color: 'var(--warm)' }}>Get in touch.</Link>
            </p>
          </div>
        </div>

        {/* WHAT'S INSIDE */}
        <div style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">What's Inside</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '3rem', marginTop: '2rem' }}>
            {[
              { title: 'The Origin Story', body: 'From a Cape Town orphanage to radio sales in Dallas. The forty-year journey that produced the framework.' },
              { title: 'The Four Personalities', body: 'Driver, Analyst, Connector, Supporter, how to identify each one within thirty seconds and adapt your conversation.' },
              { title: 'The Three Tools', body: 'Identify the personality. Own the idea. Get them in the moment. The complete practical system.' },
            ].map(item => (
              <div key={item.title}>
                <h3 className="cormorant" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div style={{ padding: '5rem 3rem' }}>
          <span className="section-label">What Readers Say</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem', marginTop: '2rem' }}>
            {[
              { quote: 'Our capture rate climbed 13% over the last two months, a direct result of your training on objections and personality types.', author: 'Douglas P.' },
              { quote: 'Philip\'s training drove a complete turnaround in our company. Within 60 days, we broke performance records across multiple departments.', author: 'John Y.' },
            ].map(t => (
              <div key={t.author} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '2px' }}>
                <p className="cormorant" style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: '1rem' }}>"{t.quote}"</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
