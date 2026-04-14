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
        <title>Philip Vivier | Author, Speaker, Sales Trainer</title>
        <meta name="description" content="People don't resist buying. They resist being sold. Philip Vivier is a sales trainer, author, and the creator of MerqEdge." />
      </Head>
      <Nav />

      <main style={{ paddingTop: '5rem' }}>

        {/* HERO */}
        <section style={{ minHeight: '88vh', display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 4rem 5rem 3rem', borderRight: '1px solid var(--border)' }}>
            <span className="section-label">Author · Speaker · Sales Trainer</span>
            <h1 className="cormorant" style={{ fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, marginBottom: '2rem' }}>
              People don't resist <em style={{ color: 'var(--warm)', fontStyle: 'italic' }}>buying.</em><br />
              They resist being sold.
            </h1>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: '480px', marginBottom: '3rem', fontWeight: 500 }}>
              Forty years building businesses and training sales teams, figuring out that the only thing standing between a buyer and a yes is the feeling that someone is pushing them toward it.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/books" className="btn-primary">Explore the Books</Link>
              <Link href="/merqedge" className="btn-secondary">Try MerqEdge Free</Link>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', background: 'var(--warm-bg)' }}>
            <img
              src="/Philip_photo.jpg"
              alt="Philip Vivier"
              style={{ width: '100%', maxWidth: '320px', borderRadius: '4px', display: 'block', filter: 'grayscale(100%) contrast(1.1)', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}
            />
          </div>
        </section>

        {/* PHILOSOPHY */}
        <div className="fade-in" style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)', background: 'var(--ink)' }}>
          <p className="cormorant" style={{ fontSize: 'clamp(1.8rem,3vw,3rem)', lineHeight: 1.4, color: 'var(--cream)', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            Sales isn't about pressure, scripts, or closing techniques. It's about understanding{' '}
            <em style={{ color: 'var(--warm)' }}>how people think</em>, with the patience to let them arrive at the right decision themselves.
          </p>
        </div>

        {/* THREE PILLARS */}
        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderBottom: '1px solid var(--border)' }}>
          {[
            { n: '01', title: 'Identify the Personality', body: 'Within thirty seconds, most people reveal how they prefer to think and decide. Driver. Analyst. Connector. Supporter. Once you know which one you\'re talking to, everything changes.' },
            { n: '02', title: 'Own the Idea', body: 'When the solution comes from you, it has a cost. When it comes from them, from a conversation you guided, it becomes an investment. Stop presenting. Start listening.' },
            { n: '03', title: 'Get Them in the Moment', body: 'The decision to buy happens in the imagination, not in the spreadsheet. Help people see themselves on the other side of the decision, clearly enough to move forward.' },
          ].map((p, i) => (
            <div key={p.n} style={{ padding: '3.5rem 3rem', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--warm)', marginBottom: '1rem' }}>{p.n}</div>
              <h3 className="cormorant" style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--ink)', lineHeight: 1.2 }}>{p.title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--ink-soft)', fontWeight: 400 }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* BOOKS */}
        <section className="fade-in" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h2 className="cormorant" style={{ fontSize: '2.5rem' }}>The Books</h2>
            <Link href="/books" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--warm)', textDecoration: 'none' }}>View all →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
            {[
              {
                href: '/books/stop-selling',
                bg: 'var(--ink)',
                label: 'Stop Selling,\nLet Them Buy',
                title: 'Stop Selling. Let Them Buy.',
                sub: 'The Definitive Edition',
                body: 'The complete framework, from a Cape Town orphanage to the boardroom. Forty years of figuring out that the pressure is the problem, not the solution.',
              },
              {
                href: '/books/translation-problem',
                bg: 'var(--warm)',
                label: 'The Translation\nProblem',
                title: 'The Translation Problem',
                sub: 'Why workplace conflicts are never what they appear to be',
                body: '"Every conflict is just two people protecting something they have not named yet." Not a book about difficult people. A book about what happens when two people are both right and still can\'t work together.',
                italic: true,
              },
            ].map(book => (
              <Link key={book.href} href={book.href} style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '2px', display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit', background: 'white', transition: 'box-shadow 0.2s' }}>
                <div style={{ width: '80px', flexShrink: 0, aspectRatio: '2/3', background: book.bg, borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '0.65rem', fontWeight: 600, color: 'white', textAlign: 'center', padding: '0.5rem', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{book.label}</div>
                <div>
                  <span className="badge">Pre-Sale Live</span>
                  <h3 className="cormorant" style={{ fontSize: '1.5rem', marginBottom: '0.4rem', lineHeight: 1.2 }}>{book.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: '0.75rem', fontStyle: 'italic', fontWeight: 500 }}>{book.sub}</p>
                  <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 400 }}>{book.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* MERQEDGE */}
        <section className="fade-in" style={{ padding: '5rem 3rem', background: 'var(--ink)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">MerqEdge: Sales Intelligence App</span>
            <h2 className="cormorant" style={{ fontSize: 'clamp(2rem,3vw,3.2rem)', color: 'var(--cream)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              The philosophy, built into a tool your team uses every day.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,241,234,0.8)', marginBottom: '2rem', fontWeight: 400 }}>
              Personality-based email rewriting, promise tracking, meeting intelligence, and pipeline management, all in one mobile-first app. From $29/month.
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
              <div key={f.title} style={{ padding: '1.25rem 1.5rem', border: '1px solid rgba(245,241,234,0.15)', borderRadius: '2px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', background: 'var(--warm)', borderRadius: '2px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', color: 'white' }}>{f.icon}</div>
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.2rem' }}>{f.title}</p>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(245,241,234,0.65)', lineHeight: 1.5, fontWeight: 400 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IN THEIR WORDS, coaching clients */}
        <section className="fade-in" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <h2 className="cormorant" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>In Their Words</h2>
          <p style={{ fontSize: '1rem', color: 'var(--ink-muted)', marginBottom: '3rem', fontWeight: 500 }}>From sales teams Philip has trained across the country.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {[
              { quote: 'Philip trained our entire clinical sales team and the results were immediate: capture rates, conversion, and surgical volumes all climbed. He\'s engaging, passionate, and results-driven in every room he walks into.', author: 'Kevin B.' },
              { quote: 'Our capture rate climbed 13% in two months after Philip came in and trained our team on personality types and handling objections. It made a direct impact on my bottom line.', author: 'Douglas P.' },
              { quote: 'Philip\'s training drove a complete turnaround, not just in sales, but across our entire organization. Within 60 days we were breaking performance records across multiple departments.', author: 'John Y.' },
            ].map(t => (
              <div key={t.author} style={{ padding: '2rem', background: 'white', border: '1px solid var(--border)', borderRadius: '2px', borderTop: '3px solid var(--warm)' }}>
                <p className="cormorant" style={{ fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: '1.25rem', fontWeight: 500 }}>"{t.quote}"</p>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--warm)' }}>— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT READERS SAY, Amazon */}
        <section className="fade-in" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)', background: 'var(--warm-bg)' }}>
          <h2 className="cormorant" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>What Readers Say</h2>
          <p style={{ fontSize: '1rem', color: 'var(--ink-muted)', marginBottom: '3rem', fontWeight: 500 }}>Reviews of <em>Stop Selling. Let Them Buy.</em> on Amazon.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {[
              { quote: 'The book was a paradigm shift for me related to sales. It is NOT the increase in X. It is HOW you spend your time and HOW you strategize for each type of buyer. This book provides the keys to open up the opportunities and let them buy.', author: 'L. Koven', title: 'Not Just for Marketing Folks' },
              { quote: 'This book teaches you how to identify and deal with different personality types so that they will want to buy and you don\'t have to sell. Everyone is in sales, even my 4 year old trying to sell me on taking her to the zoo.', author: 'Maria Fillingame', title: 'Makes So Much Sense' },
              { quote: 'If you do not understand others\' personalities, there is no way that you are being as effective as you could be. Mr. Vivier\'s information is invaluable. I am going to purchase a copy for every single one of my salespeople.', author: 'Ambitious Radio', title: 'Great Book for Sales People' },
            ].map(t => (
              <div key={t.author} style={{ padding: '2rem', background: 'white', border: '1px solid var(--border)', borderRadius: '2px', borderTop: '3px solid var(--ink)' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '0.75rem' }}>{t.title}</p>
                <p className="cormorant" style={{ fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: '1.25rem', fontWeight: 500 }}>"{t.quote}"</p>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT STRIP */}
        <section className="fade-in" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">About Philip</span>
            <h2 className="cormorant" style={{ fontSize: 'clamp(1.8rem,2.5vw,2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Three-time founder. Forty years in sales. Two books on why people buy.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem', fontWeight: 400 }}>
              Philip Vivier started selling in 1976, selling watchstraps on construction sites in Cape Town, South Africa. He went on to build and sell his own company, lead organizations to national scale, and spend four decades figuring out that the most effective sales tool isn't a better script. It's a better understanding of people.
            </p>
            <Link href="/about" className="btn-primary">Full Story</Link>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', paddingTop: '2rem', marginTop: '2rem', borderTop: '1px solid var(--border)' }}>
              {[['40+', 'Years in sales'], ['2', 'New books'], ['3×', 'Founder']].map(([n, l]) => (
                <div key={l}>
                  <p className="cormorant" style={{ fontSize: '2.8rem', fontWeight: 600, lineHeight: 1, marginBottom: '0.25rem', color: 'var(--warm)' }}>{n}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/Philip_photo.jpg" alt="Philip Vivier" style={{ width: '100%', maxWidth: '380px', borderRadius: '4px', display: 'block', filter: 'grayscale(100%) contrast(1.1)', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }} />
          </div>
        </section>

        {/* CTA */}
        <section className="fade-in" style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <h2 className="cormorant" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)', lineHeight: 1.15 }}>
            Let's have a<br /><em style={{ color: 'var(--warm)' }}>real conversation.</em>
          </h2>
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '2rem', fontWeight: 400 }}>
              Whether you're planning a sales workshop, preparing for a key meeting, or curious whether any of this applies to your team. Reach out. No pressure.
            </p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
