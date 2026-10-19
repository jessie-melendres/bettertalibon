import { CreditCard, FileText, ScrollText } from 'lucide-react';
import { OFFICIAL_SITE, documentServices, eServices, forms } from '../data/talibon';
import { Card, ExtLink, LinkCard, PageHeader, Section } from '../components/ui';

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Get things done with the LGU"
        intro="Where to pay taxes and fees, apply for permits and request documents — online where possible."
        source="/"
      />

      <Section title="Pay and apply online">
        <div className="grid gap-4 md:grid-cols-3">
          {eServices.map((s) => (
            <Card key={s.provider} className="flex flex-col">
              <CreditCard className="text-reef-500" aria-hidden />
              <p className="mt-3 font-semibold text-sea-950">{s.provider}</p>
              <p className="text-sm text-slate-500">{s.description}</p>
              <ul className="mt-3 flex-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <ExtLink href={s.href} className="mt-4 font-semibold">Go to portal</ExtLink>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Documents & certificates">
        <div className="grid gap-3 md:grid-cols-3">
          {documentServices.map((d) => <LinkCard key={d.href} {...d} />)}
        </div>
      </Section>

      <Section title="Downloadable forms">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {forms.map((d) => <LinkCard key={d.href} {...d} />)}
        </div>
      </Section>

      <Section>
        <Card className="flex items-start gap-4 bg-sea-50">
          <ScrollText className="mt-1 shrink-0 text-sea-700" aria-hidden />
          <div>
            <p className="font-semibold text-sea-950">Requirements, fees and processing times</p>
            <p className="mt-1 text-sm text-slate-600">
              Every LGU service is described step by step in the official Citizen’s Charter, including requirements, fees, processing time and the responsible office.
            </p>
            <ExtLink href={`${OFFICIAL_SITE}/citizen-charter/`} className="mt-2 text-sm font-semibold">Read the Citizen’s Charter</ExtLink>
          </div>
        </Card>
        <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <FileText size={14} aria-hidden /> Links lead to official LGU and partner portals. BetterTalibon does not process payments or applications.
        </p>
      </Section>
    </>
  );
}
