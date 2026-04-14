import Link from 'next/link';

export function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <Link href="/">
          <img src="/vivier-logo.jpg" alt="Vivier" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/books">Books</Link></li>
        <li><Link href="/merqedge">MerqEdge</Link></li>
        <li><Link href="/coaching">Coaching</Link></li>
        <li><Link href="/consulting">Consulting</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact" className="nav-cta">Let's Talk</Link></li>
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Link href="/"><img src="/vivier-logo.jpg" alt="Vivier" /></Link>
      </div>
      <ul className="footer-links">
        <li><Link href="/books">Books</Link></li>
        <li><Link href="/merqedge">MerqEdge</Link></li>
        <li><Link href="/coaching">Coaching</Link></li>
        <li><Link href="/consulting">Consulting</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <p className="footer-copy">© 2026 Philip Vivier</p>
    </footer>
  );
}
