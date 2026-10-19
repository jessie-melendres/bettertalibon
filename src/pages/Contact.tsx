import { Link } from 'react-router-dom';
import { AlertTriangle, Mail, Phone } from 'lucide-react';
import { contact, hotlines } from '../data/talibon';
import { Card, ExtLink, PageHeader, Section } from '../components/ui';

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Hotlines & contacts" intro="Save these numbers. In an emergency, call first." source="/" />

      <Section title="Emergency hotlines">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hotlines.map((h) => (
            <li key={h.name}>
              <Card className="h-full border-l-4 border-l-coral-500">
                <p className="flex items-center gap-2 text-sm font-semibold text-sea-950"><AlertTriangle size={16} className="text-coral-500" aria-hidden /> {h.name}</p>
                <div className="mt-2 space-y-1">
                  {h.numbers.map((n) => (
                    <a key={n} href={`tel:${n.replace(/\s/g, '')}`} className="block font-mono text-lg font-semibold">{n}</a>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Reach the LGU">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <Phone className="text-reef-500" aria-hidden />
            <p className="mt-2 font-semibold">Office of the Mayor</p>
            <a href="tel:0384222895" className="font-mono">{contact.mayorsOffice}</a>
          </Card>
          <Card>
            <Mail className="text-reef-500" aria-hidden />
            <p className="mt-2 font-semibold">Comments & suggestions</p>
            <a href={`mailto:${contact.feedbackEmail}`}>{contact.feedbackEmail}</a>
            <p className="mt-1 text-sm text-slate-500">General: <a href={`mailto:${contact.generalEmail}`}>{contact.generalEmail}</a></p>
          </Card>
          <Card>
            <p className="font-semibold">Official Facebook page</p>
            <p className="mt-1 text-sm text-slate-600">Announcements, advisories and disaster updates are posted here first.</p>
            <ExtLink href={contact.facebook} className="mt-2 text-sm font-semibold">LGU Talibon on Facebook</ExtLink>
          </Card>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Looking for a specific office? See the <Link to="/government">department directory</Link>.
        </p>
      </Section>

      <Section title="About this site">
        <Card className="text-sm leading-relaxed text-slate-700">
          BetterTalibon is an independent, volunteer-run project under the BetterGov.ph BetterLGU initiative. It is not affiliated with or endorsed by the LGU of Talibon. Information is compiled from talibon.gov.ph and other public records; if something is wrong or out of date, please open an issue or pull request on the project’s GitHub repository.
        </Card>
      </Section>
    </>
  );
}
