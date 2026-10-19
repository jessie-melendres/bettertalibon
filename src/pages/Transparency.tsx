import { transparency } from '../data/talibon';
import { Card, LinkCard, PageHeader, Section } from '../components/ui';

export default function Transparency() {
  return (
    <>
      <PageHeader
        eyebrow="Transparency"
        title="Where the money goes"
        intro="Budget documents, procurement notices, infrastructure projects and local legislation, organised in one index."
        source="/transparency/"
      />
      {transparency.map((t) => (
        <Section key={t.section} title={t.section}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.links.map((l) => <LinkCard key={l.href} {...l} />)}
          </div>
        </Section>
      ))}
      <Section>
        <Card className="bg-coral-100/50">
          <p className="font-semibold text-sea-950">Next on the roadmap</p>
          <p className="mt-1 text-sm text-slate-700">
            The official site publishes these records mostly as PDF and image uploads. The next step for BetterTalibon is turning the annual budget, infrastructure projects and ordinances into searchable tables and charts. Contributions are welcome.
          </p>
        </Card>
      </Section>
    </>
  );
}
