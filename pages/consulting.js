import Head from 'next/head';
import Link from 'next/link';
import { Nav, Footer } from '../components/Layout';

export default function Consulting() {
  return (
    <>
      <Head>
        <title>Consulting — Philip Vivier</title>
        <meta name="description" content="Sales workshops, team training, and fractional commercial leadership from Philip Vivier." />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HERO */}
        <div style={{ padding: '5rem 3rem 4rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">Consulting</span>
          <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4.5rem)', lineHeight: 1.05, maxWidth: '700px', marginBottom: '2rem' }}>
            Transform how your team sells — and how buyers buy.
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-soft)', maxWidth: '580px', marginBottom: '3rem' }}>
            I help sales teams close more by making buying easier — through psychology-backed training and tailored support for high-stakes presentations.
          </p>
          <Link href="/contact" className="btn-primary">Book a Call</Link>
        </div>

        {/* TWO OFFERINGS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          <div style={{ padding: '4rem 3rem', borderRight: '1px solid var(--border)' }}>
            <span className="section-label">Training</span>
            <h2 className="cormorant" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Stop relying on pressure tactics.</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              My workshops give your team practical frameworks from the Let Them Buy methodology so they can build trust, handle buyer timing, and guide conversations the way buyers actually want — leading to more confident yeses.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '2rem' }}>
              Available as half-day workshops, full-day intensives, or multi-session programs tailored to your team, your industry, and your biggest sales challenges.
            </p>
            <Link href="/contact" className="btn-secondary">Enquire About Training</Link>
          </div>
          <div style={{ padding: '4rem 3rem' }}>
            <span className="section-label">Presentation Support</span>
            <h2 className="cormorant" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Your biggest opportunities deserve preparation.</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              Before your next key prospect meeting, I help decode buyer personalities and tailor communication approaches — bringing Let Them Buy principles into live, high-stakes conversations so your biggest opportunities don't slip away.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '2rem' }}>
              One session before a major pitch can change the entire outcome.
            </p>
            <Link href="/contact" className="btn-secondary">Enquire About Presentation Support</Link>
          </div>
        </div>

        {/* FRACTIONAL */}
        <div style={{ padding: '5rem 3rem', background: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">Fractional Leadership</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginTop: '1rem' }}>
            <div>
              <h2 className="cormorant" style={{ fontSize: 'clamp(2rem,3vw,3rem)', color: 'var(--cream)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Whether leading a commercial team, preparing for M&A, or stepping in as a fractional operator during critical transitions.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(247,244,239,0.7)', marginBottom: '1.5rem' }}>
                Philip brings real-world insight, cross-functional leadership, and results that last. Available for short-term engagements, turnaround situations, and exit preparation.
              </p>
              <Link href="/contact" className="btn-warm">Start a Conversation</Link>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div style={{ padding: '6rem 3rem' }}>
          <span className="section-label">Results</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '2rem' }}>
            {[
              { quote: 'Philip provided an inspiring personality and sales conference to our clinical team that immediately impacted capture, conversion, and surgical volumes.', author: 'Kevin B.' },
              { quote: 'Our capture rate climbed 13% over the last two months — a direct result of your training on objections and personality types. It\'s made a major impact on my bottom line.', author: 'Douglas P.' },
              { quote: 'Philip\'s training and strategic guidance drove a complete turnaround in our company — far beyond just sales. Within 60 days, we broke performance records across multiple departments. His impact was transformational.', author: 'John Y.' },
            ].map(t => (
              <div key={t.author} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '3rem', alignItems: 'start', paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', paddingTop: '0.4rem' }}>— {t.author}</p>
                <p className="cormorant" style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.65, color: 'var(--ink-soft)' }}>"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
