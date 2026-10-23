'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/agriculture', 'Agriculture'],
  ['/projects', 'Projects'],
  ['/about', 'About'],
];

export default function Header() {
  const path = usePathname();
  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="HorizonAI Tech home">
          <img src="/images/logo.png" alt="HorizonAITech" height="54" />
        </Link>
        <nav aria-label="Primary">
          <ul>
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} aria-current={path.startsWith(href) ? 'page' : undefined}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="mo">
              <Link href="/contact" aria-current={path === '/contact' ? 'page' : undefined}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="btn" href="/contact">Contact us</Link>
      </div>
    </header>
  );
}
