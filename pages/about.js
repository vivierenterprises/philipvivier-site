import Head from 'next/head';
import Link from 'next/link';
import { Nav, Footer } from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>About Philip Vivier — Author, Speaker, Consultant</title>
        <meta name="description" content="Philip Vivier is a three-time founder, sales strategist, and author of four books on sales psychology and workplace communication." />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HERO */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)', minHeight: '70vh' }}>
          <div style={{ padding: '5rem 3rem', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="section-label">About Philip</span>
            <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
              The ideas started on a construction site in Cape Town.
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              At twelve years old, living in an orphanage, Philip Vivier was selling handmade leather watch straps to construction workers during their breaks. Seventy-five cents each. He noticed something that would take another thirty years to fully articulate: the same conversation produced completely different results depending on who was listening.
            </p>
          </div>
          <div style={{ background: 'linear-gradient(145deg,#E8D5C4 0%,#C8B8A2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="cormorant" style={{ color: 'rgba(26,24,20,0.3)', fontStyle: 'italic' }}>Add your photo here</p>
          </div>
        </div>

        {/* STORY */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', padding: '6rem 3rem', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
          <div>
            <span className="section-label">The Story</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
              {[['1976', 'First sale — watch straps, Cape Town'], ['1987', 'Founded first company'], ['2003', 'Sold the company'], ['2004', 'Radio sales, Dallas. 50 cold calls a day.'], ['2004', 'Two weeks that changed everything'], ['2008', 'First book published'], ['2026', 'The definitive edition']].map(([year, event]) => (
                <div key={year + event} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                  <span className="cormorant" style={{ fontSize: '0.9rem', color: 'var(--warm)', flexShrink: 0, width: '40px' }}>{year}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>{event}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              'Philip Vivier is a seasoned executive, three-time founder, and sales strategist with over forty years of experience driving operational turnarounds, commercial growth, and exit readiness.',
              'Blending expertise in sales psychology with disciplined operational leadership, Philip has built and led organizations from the ground up — guiding multiple companies to national scale and multimillion-dollar revenues.',
              'As COO of a B2B fulfillment and distribution startup, he transformed a zero-revenue operation into a nationwide business serving more than 1,400 clients. Under his leadership, the company implemented lean processes, strengthened client retention, improved margins, and positioned itself for acquisition.',
              'Philip has also served as CEO and interim commercial leader for companies preparing for M&A, where he brought rigor to forecasting, pricing, and team design. He\'s led businesses through turnarounds, exits, and hyper growth by aligning departments under shared KPIs and building systems that scale.',
              'Alongside his operational career, Philip is the author of four books on modern sales and buyer psychology. His "people-first" framework helps businesses drive revenue by building trust, aligning to buyer types, and eliminating outdated high-pressure tactics.',
            ].map((para, i) => (
              <p key={i} style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>{para}</p>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">What Others Say</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '2rem' }}>
            {[
              { quote: 'Philip provided an inspiring personality and sales conference to our clinical team that immediately impacted capture, conversion, and surgical volumes. He\'s engaging, passionate, humorous, and results-driven.', author: 'Kevin B.' },
              { quote: 'Our capture rate climbed 13% over the last two months — a direct result of your training on objections and personality types. It\'s made a major impact on my bottom line.', author: 'Douglas P.' },
              { quote: 'Philip\'s training and strategic guidance drove a complete turnaround in our company — far beyond just sales. Within 60 days, we broke performance records and saw improvements across multiple departments. His impact was transformational.', author: 'John Y.' },
            ].map(t => (
              <div key={t.author} style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'start' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', paddingTop: '0.5rem' }}>— {t.author}</p>
                <p className="cormorant" style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.65, color: 'var(--ink-soft)' }}>"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '5rem 3rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 className="cormorant" style={{ fontSize: 'clamp(1.8rem,3vw,3rem)', lineHeight: 1.2 }}>
            Ready to work together?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
            <Link href="/coaching" className="btn-primary">Coaching</Link>
            <Link href="/consulting" className="btn-secondary">Consulting</Link>
            <Link href="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
