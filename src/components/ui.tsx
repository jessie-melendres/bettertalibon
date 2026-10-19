import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { OFFICIAL_SITE } from '../data/talibon';

export function PageHeader({ eyebrow, title, intro, source }: { eyebrow?: string; title: string; intro?: ReactNode; source?: string }) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-sea-50 to-sand-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-coral-500">{eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-bold md:text-5xl">{title}</h1>
        {intro && <div className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{intro}</div>}
        {source && (
          <p className="mt-4 text-xs text-slate-500">
            Source:{' '}
            <a href={source.startsWith('http') ? source : `${OFFICIAL_SITE}${source}`} target="_blank" rel="noreferrer">
              {source.startsWith('http') ? new URL(source).host : `talibon.gov.ph${source}`}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({ title, children, id }: { title?: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-10">
      {title && <h2 className="mb-6 text-2xl font-bold md:text-3xl">{title}</h2>}
      {children}
    </section>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

export function ExtLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1 ${className}`}>
      {children}
      <ExternalLink size={14} aria-hidden className="shrink-0 opacity-60" />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}

export function LinkCard({ title, href, description }: { title: string; href: string; description?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-slate-200 bg-white p-4 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-sea-500 hover:shadow-md"
    >
      <span className="flex items-start justify-between gap-2 font-semibold text-sea-900">
        {title}
        <ExternalLink size={16} aria-hidden className="mt-0.5 shrink-0 text-slate-400 group-hover:text-sea-500" />
      </span>
      {description && <span className="mt-1 block text-sm text-slate-600">{description}</span>}
    </a>
  );
}
