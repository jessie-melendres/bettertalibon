import { useState } from 'react';
import { barangays, lgu } from '../data/talibon';
import { ExtLink, PageHeader, Section } from '../components/ui';

const filters = ['All', 'Island', 'Urban'] as const;

export default function Barangays() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const list = barangays.filter((b) => filter === 'All' || b.type === filter);
  const f = lgu.facts;

  return (
    <>
      <PageHeader
        eyebrow="Barangays"
        title={`${f.barangays} barangays`}
        intro={`${f.islandBarangays} island, ${f.coastalBarangays} coastal and ${f.inlandBarangays} inland barangays make up Talibon.`}
        source="/barangays-of-talibon/"
      />
      <Section>
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter barangays">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setFilter(x)}
              aria-pressed={filter === x}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${filter === x ? 'bg-sea-900 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-sea-500'}`}
            >
              {x}
            </button>
          ))}
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((b) => (
            <li key={b.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <p className="font-display text-lg font-bold text-sea-950">{b.name}</p>
                {b.type && (
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${b.type === 'Island' ? 'bg-reef-100 text-sea-900' : 'bg-coral-100 text-coral-500'}`}>{b.type}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-slate-500">Punong Barangay: {b.captain ?? <span className="italic">not yet listed</span>}</p>
              {b.officialPage && <ExtLink href={b.officialPage} className="mt-2 text-sm">Official page</ExtLink>}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-slate-500">
          Island and urban tags follow the LGU brief profile, which names four island barangays among the world’s most densely populated and six urbanized barangays; the remaining island barangays will be tagged once confirmed. Sikatuna is listed from the PSA PSGC — the official barangay page currently shows 24 entries. Most punong barangay names are not yet published online.
        </p>
      </Section>
    </>
  );
}
