import Head from 'next/head';
import Link from 'next/link';
import { Nav, Footer } from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>About Philip Vivier | Author, Speaker, Sales Trainer</title>
        <meta name="description" content="Philip Vivier is a three-time founder, sales trainer, and author with over forty years of experience building businesses and training sales teams." />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HERO */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)', minHeight: '60vh' }}>
          <div style={{ padding: '5rem 3rem', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="section-label">About Philip</span>
            <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
              The ideas started on a construction site in Cape Town.
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink-soft)', fontWeight: 400 }}>
              In 1976, living in an orphanage, Philip Vivier was selling handmade leather watchstraps to construction workers during their breaks. Seventy-five cents each. He noticed something that would take another thirty years to fully articulate: the same conversation produced completely different results depending on who was listening.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', background: 'var(--warm-bg)' }}>
            <img
              src="/Philip_photo.jpg"
              alt="Philip Vivier"
              style={{ width: '100%', maxWidth: '300px', borderRadius: '4px', display: 'block', filter: 'grayscale(100%) contrast(1.1)', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}
            />
          </div>
        </div>

        {/* STORY */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', padding: '6rem 3rem', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
          <div>
            <span className="section-label">The Story</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
              {[
                ['1976', 'First sale, watchstraps, Cape Town'],
                ['1987', 'Founded first company'],
                ['2003', 'Sold the company'],
                ['2004', 'Radio sales, Dallas. 50 cold calls a day.'],
                ['2004', 'Two weeks that changed everything'],
                ['2008', 'First book published'],
                ['2026', 'The definitive edition'],
              ].map(([year, event]) => (
                <div key={year + event} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--warm)', flexShrink: 0, width: '40px' }}>{year}</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', fontWeight: 400 }}>{event}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              'Philip Vivier is a seasoned executive, three-time founder, and sales trainer with over forty years of experience driving operational turnarounds, commercial growth, and exit readiness.',
              'Blending expertise in sales psychology with disciplined operational leadership, Philip has built and led organizations from the ground up, guiding multiple companies to national scale and multimillion-dollar revenues.',
              'As COO of a B2B fulfillment and distribution startup, he transformed a zero-revenue operation into a nationwide business serving more than 1,400 clients. Under his leadership, the company implemented lean processes, strengthened client retention, improved margins, and positioned itself for acquisition.',
              'Philip has also served as CEO and interim commercial leader for companies preparing for M&A, where he brought rigor to forecasting, pricing, and team design. He\'s led businesses through turnarounds, exits, and hyper growth by aligning departments under shared KPIs and building systems that scale.',
              'Alongside his operational career, Philip is the author of two new books on modern sales and buyer psychology. His people-first framework helps businesses drive revenue by building trust, aligning to buyer types, and eliminating outdated high-pressure tactics.',
            ].map((para, i) => (
              <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink-soft)', fontWeight: 400 }}>{para}</p>
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
