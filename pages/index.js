import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { Nav, Footer } from '../components/Layout';

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Philip Vivier — Author, Speaker, Consultant</title>
        <meta name="description" content="People don't resist buying. They resist being sold. Philip Vivier is a sales strategist, author, and the creator of MerqEdge." />
      </Head>
      <Nav />

      <main style={{ paddingTop: '5rem' }}>

        {/* HERO */}
        <section style={{ minHeight: '85vh', display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 4rem 5rem 3rem', borderRight: '1px solid var(--border)' }}>
            <span className="section-label">Author · Speaker · Consultant</span>
            <h1 className="cormorant" style={{ fontSize: 'clamp(2.8rem,4.5vw,5rem)', lineHeight: 1.05, marginBottom: '2rem' }}>
              People don't resist <em style={{ color: 'var(--warm)', fontStyle: 'italic' }}>buying.</em><br />
              They resist being sold.
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--ink-soft)', maxWidth: '460px', marginBottom: '3rem' }}>
              Forty years of building businesses and figuring out that the only thing 
              standing between a buyer and a yes is the feeling that someone is 
              pushing them toward it.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/books" className="btn-primary">Explore the Books</Link>
              <Link href="/merqedge" className="btn-secondary">Try MerqEdge Free</Link>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', background: 'var(--warm-bg)' }}>
            <div style={{ width: '100%', maxWidth: '420px', aspectRatio: '4/5', background: 'linear-gradient(160deg,#D4B9A8 0%,#C4A898 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="cormorant" style={{ fontSize: '1rem', color: 'rgba(26,24,20,0.4)', fontStyle: 'italic' }}>Add your photo here</span>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <div className="fade-in" style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <span className="section-label" style={{ marginBottom: 0, paddingTop: '0.5rem' }}>The Philosophy</span>
          <p className="cormorant" style={{ fontSize: 'clamp(1.5rem,2.2vw,2.2rem)', lineHeight: 1.5, color: 'var(--ink-soft)' }}>
            Sales isn't about pressure, scripts, or closing techniques. It's about understanding{' '}
            <em style={{ color: 'var(--warm)' }}>how people think</em> — and having the patience to let them arrive at the right decision themselves.
          </p>
        </div>

        {/* THREE PILLARS */}
        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderBottom: '1px solid var(--border)' }}>
          {[
            { n: '01', title: 'Identify the Personality', body: 'Within thirty seconds, most people reveal how they prefer to think and decide. Driver. Analyst. Connector. Supporter. Once you know which one you\'re talking to, everything changes.' },
            { n: '02', title: 'Own the Idea', body: 'When the solution comes from you, it has a cost. When it comes from them — from a conversation you guided — it becomes an investment. Stop presenting. Start listening.' },
            { n: '03', title: 'Get Them in the Moment', body: 'The decision to buy happens in the imagination, not in the spreadsheet. Help people see themselves on the other side of the decision — clearly enough to move forward.' },
          ].map((p, i) => (
            <div key={p.n} style={{ padding: '3.5rem 3rem', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
              <div className="cormorant" style={{ fontSize: '2.5rem', color: 'var(--warm-light)', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 400 }}>{p.n}</div>
              <h3 className="cormorant" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--ink)' }}>{p.title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--ink-soft)' }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* BOOKS — only the two new ones */}
        <section className="fade-in" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h2 className="cormorant" style={{ fontSize: '2.2rem' }}>The Books</h2>
            <Link href="/books" style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--warm)', textDecoration: 'none' }}>View all →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }}>
            <Link href="/books/stop-selling" style={{ padding: '3rem', border: '1px solid var(--border)', borderRadius: '2px', display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit', background: 'var(--cream)', transition: 'background 0.2s' }}>
              <div style={{ width: '80px', flexShrink: 0, aspectRatio: '2/3', background: 'var(--ink)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '0.6rem', color: 'var(--cream)', textAlign: 'center', padding: '0.5rem', lineHeight: 1.4 }}>Stop Selling,{'\n'}Let Them Buy</div>
              <div>
                <span className="badge">Pre-Sale Live</span>
                <h3 className="cormorant" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Stop Selling. Let Them Buy.</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginBottom: '0.75rem', fontStyle: 'italic' }}>The Definitive Edition</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                  The complete framework — from a Cape Town orphanage to the boardroom. Forty years of figuring out that the pitch is the problem, not the solution.
                </p>
              </div>
            </Link>
            <Link href="/books/translation-problem" style={{ padding: '3rem', border: '1px solid var(--border)', borderRadius: '2px', display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit', background: 'var(--cream)', transition: 'background 0.2s' }}>
              <div style={{ width: '80px', flexShrink: 0, aspectRatio: '2/3', background: 'var(--warm)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '0.6rem', color: 'var(--cream)', textAlign: 'center', padding: '0.5rem', lineHeight: 1.4 }}>The Translation Problem</div>
              <div>
                <span className="badge">Pre-Sale Live</span>
                <h3 className="cormorant" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>The Translation Problem</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginBottom: '0.5rem', fontStyle: 'italic' }}>Why workplace conflicts are never what they appear to be</p>
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--warm)', marginBottom: '0.5rem', fontFamily: 'Cormorant Garamond, serif' }}>"Every conflict is just two people protecting something they have not named yet."</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>Not a book about difficult people. A book about what happens when two people are both right, both reasonable, and still can't work together.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* MERQEDGE */}
        <section className="fade-in" style={{ padding: '5rem 3rem', background: 'var(--ink)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">MerqEdge — Sales Intelligence App</span>
            <h2 className="cormorant" style={{ fontSize: 'clamp(1.8rem,2.8vw,2.8rem)', color: 'var(--cream)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              The philosophy, built into a tool your team uses every day.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(247,244,239,0.75)', marginBottom: '2rem' }}>
              Personality-based email rewriting, promise tracking, meeting intelligence, and pipeline management — all in one mobile-first app. From $29/month.
            </p>
            <Link href="/merqedge" className="btn-warm">Try MerqEdge Free</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '✦', title: 'Email Rewriter', desc: 'Paste your draft. Select a personality. Get a rewrite that speaks their language.' },
              { icon: '◎', title: 'Pre-Call Briefing', desc: 'One tap before every call. Personalized coaching based on who you\'re calling.' },
              { icon: '◈', title: 'Promise Tracker', desc: 'Log what you committed to. Never let a follow-through slip.' },
              { icon: '◇', title: 'Meeting Intelligence', desc: 'Voice memo to action items. AI extracts promises, sentiment, and next steps.' },
            ].map(f => (
              <div key={f.title} style={{ padding: '1.25rem 1.5rem', border: '1px solid rgba(247,244,239,0.12)', borderRadius: '2px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(139,58,42,0.3)', borderRadius: '2px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--warm-light)' }}>{f.icon}</div>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.25rem' }}>{f.title}</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(247,244,239,0.55)', lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IN THEIR WORDS */}
        <section className="fade-in" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <h2 className="cormorant" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>In Their Words</h2>
          <p style={{ fontSize: '1rem', color: 'var(--ink-muted)', marginBottom: '3rem' }}>From sales teams Philip has trained across the country.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {[
              { quote: 'Philip trained our entire clinical sales team and the results were immediate — capture rates, conversion, and surgical volumes all climbed. He\'s engaging, passionate, and results-driven in every room he walks into.', author: 'Kevin B.' },
              { quote: 'Our capture rate climbed 13% in two months after Philip came in and trained our team on personality types and handling objections. It made a direct impact on my bottom line.', author: 'Douglas P.' },
              { quote: 'Philip\'s training drove a complete turnaround — not just in sales, but across our entire organization. Within 60 days we were breaking performance records across multiple departments.', author: 'John Y.' },
            ].map(t => (
              <div key={t.author} style={{ padding: '2rem', borderLeft: '3px solid var(--warm-light)', paddingLeft: '1.5rem' }}>
                <p className="cormorant" style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: '1.25rem' }}>"{t.quote}"</p>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT STRIP */}
        <section className="fade-in" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">About Philip</span>
            <h2 className="cormorant" style={{ fontSize: 'clamp(1.8rem,2.5vw,2.6rem)', lineHeight: 1.25, marginBottom: '1.5rem' }}>
              Three-time founder. Forty years in sales. Two books on why people buy.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              Philip Vivier started selling in 1976 — watch straps on construction sites in Cape Town, South Africa. He went on to build and sell his own company, lead organizations to national scale, and spend four decades figuring out that the most effective sales tool isn't a better pitch. It's a better understanding of people.
            </p>
            <Link href="/about" className="btn-primary">Full Story</Link>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', paddingTop: '2rem', marginTop: '2rem', borderTop: '1px solid var(--border)' }}>
              {[['40+', 'Years in sales'], ['2', 'New books'], ['3×', 'Founder']].map(([n, l]) => (
                <div key={l}>
                  <p className="cormorant" style={{ fontSize: '2.5rem', fontWeight: 400, lineHeight: 1, marginBottom: '0.25rem', color: 'var(--ink)' }}>{n}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', fontWeight: 500 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ aspectRatio: '4/5', background: 'linear-gradient(145deg,var(--warm-bg) 0%,var(--warm-light) 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', color: 'rgba(26,24,20,0.3)', fontStyle: 'italic' }}>
            Add your photo here
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="fade-in" style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <h2 className="cormorant" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)', lineHeight: 1.15 }}>
            Let's have a<br /><em style={{ color: 'var(--warm)' }}>real conversation.</em>
          </h2>
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '2rem' }}>
              Whether you're planning a sales workshop, preparing for a key presentation, or curious whether any of this applies to your team — reach out. No pitch. No pressure.
            </p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
