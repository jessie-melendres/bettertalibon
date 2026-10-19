import { tourism } from '../data/talibon';
import { LinkCard, PageHeader, Section } from '../components/ui';

export default function Tourism() {
  return (
    <>
      <PageHeader
        eyebrow="Tourism"
        title="Visit Talibon"
        intro="Home of the late President Carlos P. Garcia and gateway to the Danajon Bank double barrier reef — come for the seafood, stay for the people."
        source="/tourism/"
      />
      {tourism.map((t) => (
        <Section key={t.category} title={t.category}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.items.map((i) => <LinkCard key={i.href} {...i} />)}
          </div>
        </Section>
      ))}
    </>
  );
}
