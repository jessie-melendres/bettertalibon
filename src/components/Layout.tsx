import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ExternalLink, Menu, Phone, X } from 'lucide-react';
import { OFFICIAL_SITE, contact, hotlines } from '../data/talibon';

const nav = [
  { to: '/about', label: 'About' },
  { to: '/government', label: 'Government' },
  { to: '/barangays', label: 'Barangays' },
  { to: '/services', label: 'Services' },
  { to: '/transparency', label: 'Transparency' },
  { to: '/tourism', label: 'Tourism' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>

      <div className="bg-sea-950 text-xs text-sea-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <span>Independent community portal — not the official LGU website.</span>
          <a href={OFFICIAL_SITE} className="hidden items-center gap-1 text-sea-100 underline-offset-2 hover:underline sm:inline-flex" target="_blank" rel="noreferrer">
            talibon.gov.ph <ExternalLink size={12} aria-hidden />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img src="/favicon.svg" alt="" width={32} height={32} />
            <span className="font-display text-xl font-bold text-sea-950">
              Better<span className="text-coral-500">Talibon</span>
            </span>
          </Link>
          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex gap-1">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 text-sm font-medium no-underline transition ${isActive ? 'bg-sea-50 text-sea-900' : 'text-slate-600 hover:bg-slate-100 hover:text-sea-900'}`
                    }
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button className="rounded-md p-2 text-sea-900 lg:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile">
            <ul className="mx-auto max-w-6xl px-4 py-2">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} className="block rounded px-2 py-3 font-medium text-slate-700 no-underline hover:bg-slate-50">
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-16 bg-sea-950 text-sea-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-white">
              Better<span className="text-coral-500">Talibon</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              A volunteer-built portal that gathers public information about the Municipality of Talibon, Bohol in one easy-to-read place. Part of the{' '}
              <a href="https://lgu.bettergov.ph" className="text-reef-500" target="_blank" rel="noreferrer">BetterGov.ph BetterLGU</a> initiative.
            </p>
            <p className="mt-4 text-xs text-sea-100/70">Cost to the people of Talibon: ₱0</p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold text-white">
              <Phone size={16} aria-hidden /> Emergency hotlines
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              {hotlines.slice(0, 5).map((h) => (
                <li key={h.name} className="flex justify-between gap-4">
                  <span>{h.name}</span>
                  <a className="font-mono text-reef-500" href={`tel:${h.numbers[0].replace(/\s/g, '')}`}>{h.numbers[0]}</a>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-2 inline-block text-sm text-coral-500">All hotlines →</Link>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Official channels</p>
            <ul className="mt-3 space-y-2">
              <li><a className="text-reef-500" href={OFFICIAL_SITE} target="_blank" rel="noreferrer">talibon.gov.ph</a></li>
              <li><a className="text-reef-500" href={contact.facebook} target="_blank" rel="noreferrer">LGU Talibon on Facebook</a></li>
              <li>Office of the Mayor: <a className="text-reef-500" href="tel:0384222895">{contact.mayorsOffice}</a></li>
            </ul>
            <p className="mt-6 text-xs text-sea-100/70">
              Content is sourced from talibon.gov.ph and other public records. Always confirm with the issuing office before acting on it.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
