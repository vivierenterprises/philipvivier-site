import Head from 'next/head';
import Link from 'next/link';
import { Nav, Footer } from '../components/Layout';

export default function Coaching() {
  return (
    <>
      <Head>
        <title>Sales Coaching — Philip Vivier</title>
        <meta name="description" content="Weekly sales coaching from the front lines. Real-world tactics, tools, and insights from Philip Vivier." />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HERO */}
        <div style={{ padding: '5rem 3rem 4rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">Coaching</span>
          <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4.5rem)', lineHeight: 1.05, maxWidth: '700px', marginBottom: '2rem' }}>
            Sales coaching from someone who has actually done it.
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-soft)', maxWidth: '580px', marginBottom: '3rem' }}>
            Not theory. Not frameworks borrowed from someone else's book. Real-world tactics drawn from forty years of selling, building companies, and training teams across every industry.
          </p>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>

        {/* WHAT YOU GET */}
        <div style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">What's Included</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '3rem', marginTop: '2rem' }}>
            {[
              { title: 'Weekly Sales Lessons', body: 'New content every Monday. Written insights, tools, and stories from the field — rooted in experience, not theory.' },
              { title: 'Personality Framework', body: 'Master the Driver, Analyst, Connector, Supporter framework. Learn to identify each type within thirty seconds and adapt your approach.' },
              { title: 'Audio Stories', body: 'Real scenarios from real sales situations. What happened, what went wrong, what worked, and why.' },
              { title: 'Downloadable Tools', body: 'Worksheets, question guides, follow-up templates, and email frameworks tailored to each personality type.' },
              { title: '1:1 Coaching Sessions', body: 'Private sessions to work through specific deals, presentations, or team challenges. Available at higher tiers.' },
              { title: 'Presentation Support', body: 'Before your next key meeting, decode the buyer\'s personality and tailor your approach so your biggest opportunities don\'t slip away.' },
            ].map(item => (
              <div key={item.title} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--warm-light)' }}>
                <h3 className="cormorant" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <div style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">Pricing</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem', marginTop: '2rem' }}>
            {[
              { name: 'Monthly', price: '$12', period: 'per month', desc: 'Weekly sales lessons, audio stories, and downloadable tools. Cancel anytime.', cta: 'Start Monthly', highlight: false },
              { name: 'Annual', price: '$99', period: 'per year', desc: 'Everything in Monthly plus bonus modules and priority access to new content. Best value — save 30%.', cta: 'Start Annual', highlight: true },
            ].map(plan => (
              <div key={plan.name} style={{ padding: '2.5rem', border: plan.highlight ? '2px solid var(--ink)' : '1px solid var(--border)', borderRadius: '2px', position: 'relative' }}>
                {plan.highlight && <div style={{ position: 'absolute', top: '-1px', right: '1.5rem', background: 'var(--ink)', color: 'var(--cream)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem' }}>Best Value</div>}
                <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1rem' }}>{plan.name}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span className="cormorant" style={{ fontSize: '3rem', fontWeight: 300 }}>{plan.price}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: '2rem' }}>{plan.desc}</p>
                <Link href="/contact" className={plan.highlight ? 'btn-primary' : 'btn-secondary'} style={{ display: 'block', textAlign: 'center' }}>{plan.cta}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="cormorant" style={{ fontSize: 'clamp(1.8rem,3vw,3rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Not sure where to start?
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              Book a free fifteen-minute discovery call. No pitch. We'll figure out together whether coaching, consulting, or just the books makes the most sense for where you are right now.
            </p>
          </div>
          <div>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
