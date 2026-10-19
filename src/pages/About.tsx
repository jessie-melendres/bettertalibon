import { lgu, history, mayorEras, profile, visionMission } from '../data/talibon';
import { Card, PageHeader, Section } from '../components/ui';

const nf = new Intl.NumberFormat('en-PH');

export default function About() {
  const f = lgu.facts;
  return (
    <>
      <PageHeader eyebrow="About Talibon" title="The Seafood Capital of Bohol" intro={profile.summary} source="/brief-profile/" />

      <Section title="Quick facts">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <dl className="space-y-3 text-sm">
              <Row k="Classification" v={lgu.incomeClass} />
              <Row k="Province / Region" v={`${lgu.province}, ${lgu.region}`} />
              <Row k={`Population (${f.populationYear})`} v={nf.format(f.population)} />
              <Row k="Density" v={`${f.density} per km²`} />
            </dl>
          </Card>
          <Card>
            <dl className="space-y-3 text-sm">
              <Row k="Land area" v={`${f.landAreaSqKm} km²`} />
              <Row k="Urban / rural" v={`${f.urbanSqKm} / ${f.ruralSqKm} km²`} />
              <Row k="Barangays" v={`${f.barangays} (${f.islandBarangays} island, ${f.coastalBarangays} coastal, ${f.inlandBarangays} inland)`} />
              <Row k="Registered businesses" v={`${nf.format(f.registeredBusinesses)}+`} />
            </dl>
          </Card>
          <Card>
            <dl className="space-y-3 text-sm">
              <Row k="From Tagbilaran" v={`${f.kmFromTagbilaran} km`} />
              <Row k="From Cebu City" v={`${f.kmFromCebu} km`} />
              <Row k="From Manila" v={`${f.kmFromManila} km`} />
              <Row k="Coordinates" v="10°09′N, 124°17′E" />
            </dl>
          </Card>
        </div>
        <p className="mt-3 text-xs text-slate-500">Population: {f.populationSource}.</p>
      </Section>

      <Section title="Geography & getting here">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Boundaries</h3>
            <ul className="mt-3 divide-y divide-slate-100 text-sm">
              {profile.boundaries.map((b) => (
                <li key={b.side} className="flex justify-between py-2"><span className="text-slate-500">{b.side}</span><span className="font-medium">{b.name}</span></li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Some of the most densely populated islands in the world are part of Talibon: {profile.denseIslands.join(', ')}.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">How to get here</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {profile.access.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Economy">
        <ul className="grid gap-3 md:grid-cols-2">
          {profile.economy.map((e) => <li key={e}><Card className="h-full text-sm leading-relaxed text-slate-700">{e}</Card></li>)}
        </ul>
      </Section>

      <Section title="Vision & mission">
        <div className="grid gap-4 md:grid-cols-2">
          <Card><p className="text-xs font-semibold uppercase tracking-wider text-coral-500">Vision</p><p className="mt-2 font-display text-lg text-sea-950">{visionMission.vision}</p></Card>
          <Card><p className="text-xs font-semibold uppercase tracking-wider text-coral-500">Mission</p><p className="mt-2 text-slate-700">{visionMission.mission}</p></Card>
        </div>
      </Section>

      <Section title="A short history">
        <ol className="relative space-y-6 border-l-2 border-reef-100 pl-6">
          {history.map((h) => (
            <li key={h.year} className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-white bg-reef-500" aria-hidden />
              <p className="font-display text-lg font-bold text-sea-900">{h.year}</p>
              <p className="text-slate-700">{h.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-slate-500">
          Sources: talibon.gov.ph/history-of-talibon-2 and /previous-mayor-until-present-2 (commentary by Y. A. Apawan, citing E. L. A. Romanillos, <em>History of Bohol (1521–1937)</em>, NHCP, 2022).
        </p>
      </Section>

      <Section title="Mayors of Talibon" id="mayors">
        <div className="space-y-6">
          {mayorEras.map((era) => (
            <details key={era.era} open={era === mayorEras[0]} className="group rounded-xl border border-slate-200 bg-white shadow-sm">
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-sea-950">
                <span className="mr-2 inline-block transition group-open:rotate-90">›</span>{era.era}
              </summary>
              <ul className="grid gap-x-6 border-t border-slate-100 px-5 py-3 text-sm sm:grid-cols-2">
                {era.mayors.map((m, i) => (
                  <li key={m.name + i} className="flex justify-between gap-3 border-b border-slate-50 py-2">
                    <span className="font-medium">{m.name}{m.note && <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">{m.note}</span>}</span>
                    <span className="shrink-0 text-slate-500">{m.term}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-slate-500">{k}</dt>
      <dd className="font-medium text-sea-950">{v}</dd>
    </div>
  );
}
