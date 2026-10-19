import { useMemo, useState } from 'react';
import { Mail, Phone, Search } from 'lucide-react';
import { OFFICIAL_SITE, offices } from '../data/talibon';
import { Card, ExtLink, PageHeader, Section } from '../components/ui';

export default function Government() {
  const [q, setQ] = useState('');
  const mayor = offices[0];
  const vice = offices[1];

  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = offices.slice(2).filter((o) => !needle || `${o.office} ${o.head ?? ''} ${o.email ?? ''}`.toLowerCase().includes(needle));
    return list.reduce<Record<string, typeof offices>>((acc, o) => {
      (acc[o.group] ??= []).push(o);
      return acc;
    }, {});
  }, [q]);

  return (
    <>
      <PageHeader
        eyebrow="Government"
        title="Officials & offices"
        intro="The people and offices running the Municipality of Talibon, with their official contact details."
        source="/directory-of-departments/"
      />

      <Section title="Elected officials">
        <div className="grid gap-4 md:grid-cols-2">
          {[mayor, vice].map((o) => (
            <Card key={o.office} className="border-l-4 border-l-coral-500">
              <p className="text-xs font-semibold uppercase tracking-wider text-coral-500">{o.office}</p>
              <p className="mt-1 font-display text-2xl font-bold text-sea-950">{o.head}</p>
              <Contact o={o} />
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          The full Sangguniang Bayan roster is published as an image on the official site:{' '}
          <ExtLink href={`${OFFICIAL_SITE}/organizational-structure/`}>SB organizational structure</ExtLink>. Help us transcribe it — see the project’s contributing guide.
        </p>
      </Section>

      <Section title="Department heads">
        <label className="relative mb-6 block max-w-md">
          <span className="sr-only">Search offices</span>
          <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by office, name or email…"
            className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm shadow-sm focus:border-sea-500 focus:outline-none"
          />
        </label>
        {Object.keys(groups).length === 0 && <p className="text-slate-500">No office matches “{q}”.</p>}
        <div className="space-y-8">
          {Object.entries(groups).map(([group, list]) => (
            <div key={group}>
              <h3 className="mb-3 text-lg font-semibold text-sea-900">{group}</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((o) => (
                  <Card key={o.office}>
                    <p className="text-sm font-semibold text-sea-950">{o.office}</p>
                    {o.head && <p className="mt-0.5 text-sm text-slate-600">{o.head}</p>}
                    <Contact o={o} />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function Contact({ o }: { o: (typeof offices)[number] }) {
  return (
    <div className="mt-3 space-y-1 text-sm">
      {o.phone && (
        <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="flex items-center gap-2"><Phone size={14} aria-hidden /> {o.phone}</a>
      )}
      {o.email && (
        <a href={`mailto:${o.email}`} className="flex items-center gap-2 break-all"><Mail size={14} aria-hidden className="shrink-0" /> {o.email}</a>
      )}
    </div>
  );
}
