import Head from 'next/head';
import Link from 'next/link';
import { Nav, Footer } from '../components/Layout';

export default function MerqEdge() {
  return (
    <>
      <Head>
        <title>MerqEdge — Sales Intelligence App</title>
        <meta name="description" content="MerqEdge puts the Let Them Buy philosophy into a tool your team uses every day. From $29/month." />
      </Head>
      <Nav />
      <main className="page-wrap">

        {/* HERO */}
        <div style={{ background: 'var(--ink)', padding: '6rem 3rem', borderBottom: '1px solid rgba(247,244,239,0.1)' }}>
          <span className="section-label">MerqEdge</span>
          <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,5rem)', lineHeight: 1.05, color: 'var(--cream)', maxWidth: '800px', marginBottom: '2rem' }}>
            The philosophy, built into a tool your team uses every day.
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(247,244,239,0.65)', maxWidth: '560px', marginBottom: '3rem' }}>
            Personality-based email rewriting, promise tracking, meeting intelligence, and pipeline management — all in one mobile-first app. Built for salespeople who want to sell the way the book teaches.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://merqedge.com" className="btn-warm" target="_blank" rel="noopener">Try Free</a>
            <a href="https://merqedge.com" className="btn-secondary" style={{ color: 'var(--cream)', borderColor: 'rgba(247,244,239,0.2)' }} target="_blank" rel="noopener">See Pricing</a>
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', borderBottom: '1px solid var(--border)' }}>
          {[
            { icon: '✦', title: 'Email Rewriter', body: 'Paste your draft. Select the buyer\'s personality type. Get a rewrite that speaks their language — concise for Drivers, data-forward for Analysts, warm for Connectors, reassuring for Supporters.' },
            { icon: '◎', title: 'Pre-Call Briefing', body: 'One tap before every call. Personalized coaching based on who you\'re calling, what they care about, and how to open the conversation.' },
            { icon: '◈', title: 'Promise Tracker', body: 'Log what you committed to. Assign promises to team members. Get notified when something\'s assigned to you. Never let a follow-through slip.' },
            { icon: '◇', title: 'Meeting Intelligence', body: 'Record a voice memo after a call. AI extracts promises, key points, sentiment, next steps, and concerns. Editable before saving.' },
            { icon: '△', title: 'Deal Pipeline', body: 'Kanban board with seven stages. Drag and drop. Deal value tracking. Profile bubble on every card. See your full pipeline at a glance.' },
            { icon: '○', title: 'Team Management', body: 'Shared client book. Assign promises across team members. Activity feed. Manager visibility into what the team is working on.' },
          ].map((f, i) => (
            <div key={f.title} style={{
              padding: '3.5rem 3rem',
              borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
              borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: '1.5rem', color: 'var(--warm)', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 className="cormorant" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{f.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>{f.body}</p>
            </div>
          ))}
        </div>

        {/* PRICING */}
        <div style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
          <span className="section-label">Pricing</span>
          <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', marginBottom: '3rem', marginTop: '0.5rem' }}>One closed deal pays for a year. No long-term contracts.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
            {[
              { name: 'Solo', price: '$29', period: '/mo', annual: '$199/yr', desc: 'Everything for the individual salesperson. Full access to all features.', features: ['Email rewriter', 'Pre-call briefing', 'Meeting recorder', 'Promise tracker', 'Deal pipeline', 'Unlimited clients'], highlight: false },
              { name: 'Team', price: '$99', period: '/mo', annual: '$849/yr', desc: 'Up to 5 users. Shared client book and team promise assignment.', features: ['Everything in Solo', 'Shared client book', 'Team promise assignment', 'Activity feed', 'Team overview', '$19.80/user at 5 seats'], highlight: true },
              { name: 'Manager', price: '$159', period: '/mo', annual: '$1,299/yr', desc: 'Up to 10 users. Manager dashboard and individual rep visibility.', features: ['Everything in Team', 'Up to 10 users', 'Manager dashboard', 'Rep performance view', 'Leaderboard', 'Priority support'], highlight: false },
            ].map(plan => (
              <div key={plan.name} style={{
                padding: '2.5rem',
                border: plan.highlight ? '2px solid var(--ink)' : '1px solid var(--border)',
                borderRadius: '2px',
                position: 'relative',
              }}>
                {plan.highlight && <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: 'var(--ink)', color: 'var(--cream)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 1rem', whiteSpace: 'nowrap' }}>Most Popular</div>}
                <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1rem' }}>{plan.name}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  <span className="cormorant" style={{ fontSize: '3rem', fontWeight: 300 }}>{plan.price}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--warm)', marginBottom: '1.5rem' }}>or {plan.annual}</p>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>{plan.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: 'var(--warm)', fontSize: '0.7rem' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://merqedge.com" className={plan.highlight ? 'btn-primary' : 'btn-secondary'} style={{ display: 'block', textAlign: 'center' }} target="_blank" rel="noopener">
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* BOOK CONNECTION */}
        <div style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">The Connection</span>
            <h2 className="cormorant" style={{ fontSize: 'clamp(1.8rem,3vw,3rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Read the book. Use the app.
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              MerqEdge was built as the practical companion to the Let Them Buy framework. Every feature — the personality-based rewriter, the pre-call briefing, the promise tracker — exists because of something in the book. The two work better together.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/books/stop-selling" className="btn-primary" style={{ textAlign: 'center' }}>Pre-Order Stop Selling. Let Them Buy.</Link>
            <Link href="/books/translation-problem" className="btn-secondary" style={{ textAlign: 'center' }}>Pre-Order The Translation Problem</Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
