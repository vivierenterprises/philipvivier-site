# philipvivier.com

Next.js site for philipvivier.com — personal brand hub, book pre-sales, coaching, consulting, and MerqEdge.

## Pages
- `/` — Homepage
- `/books` — Books overview
- `/books/stop-selling` — Stop Selling pre-sale page
- `/books/translation-problem` — Translation Problem pre-sale page
- `/about` — About Philip
- `/coaching` — Coaching page
- `/consulting` — Consulting page
- `/merqedge` — MerqEdge page
- `/contact` — Contact form

## Setup

1. Install dependencies:
```
npm install
```

2. Run locally:
```
npm run dev
```

3. Add your logo:
   - Put `Signature.jpg` in the `/public` folder
   - Rename it `vivier-logo.jpg`

4. Add your photo:
   - Put your headshot in `/public` as `philip-vivier.jpg`
   - Replace the placeholder divs in `index.js` and `about.js`

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Set root directory to `/` (default)
4. Deploy — Vercel auto-detects Next.js

## DNS (Network Solutions → Vercel)
In Network Solutions, update DNS for philipvivier.com:
- Add A record: `76.76.21.21`
- Add CNAME: `www` → `cname.vercel-dns.com`

In Vercel dashboard:
- Add domain: `philipvivier.com`
- Also add `www.philipvivier.com`

## Paddle Pre-Sale Setup
In your Paddle dashboard, create 6 new products:

**Stop Selling. Let Them Buy.**
- Digital: $9.99 → copy price ID → paste into `pages/books/stop-selling.js` as `pri_STOP_DIGITAL`
- Paperback: $19.99 → `pri_STOP_PAPERBACK`  
- Bundle: $24.99 → `pri_STOP_BUNDLE`

**The Translation Problem**
- Digital: $9.99 → `pri_TRANS_DIGITAL`
- Paperback: $19.99 → `pri_TRANS_PAPERBACK`
- Bundle: $24.99 → `pri_TRANS_BUNDLE`

Also add your Paddle client token to both pre-sale pages:
```js
window.Paddle.Setup({ token: 'your_client_token' });
```

## Contact Form
The contact form currently shows a success state without sending.
Wire it to Resend, Formspree, or any email service by updating the `handleSubmit` function in `pages/contact.js`.

Simplest option — Formspree:
1. Create account at formspree.io
2. Replace handleSubmit with:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (res.ok) setSent(true);
```
