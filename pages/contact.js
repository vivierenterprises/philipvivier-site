import Head from 'next/head';
import { useState } from 'react';
import { Nav, Footer } from '../components/Layout';

export default function Contact() {
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', interest: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Wire to your email service (Resend, Formspree, etc.)
    // For now we just show success state
    setSent(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Philip Vivier</title>
        <meta name="description" content="Get in touch with Philip Vivier. No pressure." />
      </Head>
      <Nav />
      <main className="page-wrap">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 5rem)' }}>

          {/* LEFT */}
          <div style={{ padding: '5rem 3rem', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="section-label">Get in Touch</span>
            <h1 className="cormorant" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
              Let's have a<br /><em style={{ color: 'var(--warm)' }}>real conversation.</em>
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '3rem' }}>
              Whether you're preparing for a key meeting, planning a sales workshop, curious about the books, or just want to explore whether any of this applies to your team. Reach out. No pressure.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'For coaching enquiries', value: 'Use the form →' },
                { label: 'For consulting & workshops', value: 'Use the form →' },
                { label: 'For speaking engagements', value: 'Use the form →' },
                { label: 'Email directly', value: 'pv@philipvivier.com' },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.25rem' }}>{item.label}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT, FORM */}
          <div style={{ padding: '5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {sent ? (
              <div style={{ textAlign: 'center' }}>
                <p className="cormorant" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Thank you.</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: 1.8 }}>Your message is on its way. Philip will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input className="form-input" placeholder="First name" value={form.first} onChange={e => setForm({ ...form, first: e.target.value })} required />
                  <input className="form-input" placeholder="Last name" value={form.last} onChange={e => setForm({ ...form, last: e.target.value })} />
                </div>
                <input className="form-input" type="email" placeholder="Email address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                <input className="form-input" placeholder="Company (optional)" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                <select
                  className="form-input"
                  value={form.interest}
                  onChange={e => setForm({ ...form, interest: e.target.value })}
                  style={{ cursor: 'pointer' }}
                >
                  <option value="">What are you interested in?</option>
                  <option value="books">Books / Pre-order</option>
                  <option value="coaching">Coaching</option>
                  <option value="consulting">Consulting / Workshop</option>
                  <option value="speaking">Speaking engagement</option>
                  <option value="merqedge">MerqEdge</option>
                  <option value="other">Something else</option>
                </select>
                <textarea
                  className="form-input"
                  placeholder="Tell me what you're working on..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ resize: 'none', height: '140px' }}
                />
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.9rem 2.5rem' }}>
                  Send Message
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                  Your information is never shared or sold. Ever.
                </p>
              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
