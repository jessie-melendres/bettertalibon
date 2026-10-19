import { Link } from 'react-router-dom';
import { ArrowRight, Building2, FileText, Landmark, MapPin, Phone, Scale, Users, Waves } from 'lucide-react';
import { contact, eServices, hotlines, lgu, profile, visionMission } from '../data/talibon';
import { Card, ExtLink, Section } from '../components/ui';

const nf = new Intl.NumberFormat('en-PH');

const quick = [
  { to: '/services', icon: FileText, title: 'Pay & apply online', text: 'Business permits, real property tax, cedula and civil registry requests.' },
  { to: '/government', icon: Users, title: 'Who to contact', text: 'Department heads, their offices, phone numbers and email.' },
  { to: '/transparency', icon: Scale, title: 'Budget & projects', text: 'Budget, procurement, infrastructure projects and ordinances.' },
  { to: '/barangays', icon: MapPin, title: '25 barangays', text: 'Island, coastal and inland barangays at a glance.' },
];

export default function Home() {
  const f = lgu.facts;
  const stats = [
    { label: 'Population (2020)', value: nf.format(f.population) },
    { label: 'Barangays', value: f.barangays },
    { label: 'Land area', value: `${f.landAreaSqKm} km²` },
    { label: 'CMCI 2024 (1st–2nd class)', value: `#${f.cmciRank1st2ndClass}` },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-sea-900 text-white">
        <svg className="absolute inset-x-0 bottom-0 h-32 w-full text-sea-700/50" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0 120c120-40 240-40 360 0s240 40 360 0 240-40 360 0 240 40 360 0v80H0z" />
        </svg>
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 md:pt-24">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-reef-100">
            <Waves size={16} aria-hidden /> {lgu.tagline}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Talibon’s public information, made easy to find.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-sea-100">
            Services, officials, budgets and barangays of the {lgu.officialName}, {lgu.province} — gathered from official sources by volunteers, in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-coral-500 px-5 py-3 font-semibold text-white no-underline hover:bg-coral-500/90">
              Find a service <ArrowRight size={18} aria-hidden />
            </Link>
            <a href={`tel:${hotlines[0].numbers[0].replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white no-underline hover:bg-white/10">
              <Phone size={18} aria-hidden /> MDRRMO {hotlines[0].numbers[0]}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto -mt-12 max-w-6xl px-4">
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="relative">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-sea-900 md:text-3xl">{s.value}</dd>
            </Card>
          ))}
        </dl>
      </div>

      <Section title="What do you need today?">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quick.map(({ to, icon: Icon, title, text }) => (
            <Link key={to} to={to} className="group rounded-xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-sea-500 hover:shadow-md">
              <span className="inline-flex rounded-lg bg-reef-100 p-2 text-sea-900"><Icon size={22} aria-hidden /></span>
              <p className="mt-3 font-semibold text-sea-950">{title}</p>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold md:text-3xl">About Talibon</h2>
            <p className="mt-4 leading-relaxed text-slate-700">{profile.summary}</p>
            <p className="mt-4 leading-relaxed text-slate-700">{profile.competitiveness}</p>
            <Link to="/about" className="mt-4 inline-flex items-center gap-1 font-semibold">Profile, history & list of mayors <ArrowRight size={16} aria-hidden /></Link>
          </div>
          <Card className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-coral-500">Vision</p>
            <p className="mt-2 font-display text-lg leading-snug text-sea-950">{visionMission.vision}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-coral-500">Mission</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{visionMission.mission}</p>
          </Card>
        </div>
      </Section>

      <Section title="Online services">
        <div className="grid gap-4 md:grid-cols-3">
          {eServices.map((s) => (
            <Card key={s.provider}>
              <p className="flex items-center gap-2 font-semibold text-sea-950"><Building2 size={18} aria-hidden className="text-reef-500" /> {s.provider}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <ExtLink href={s.href} className="mt-4 text-sm font-semibold">Open portal</ExtLink>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col items-start gap-4 bg-sea-50 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Landmark className="mt-1 shrink-0 text-sea-700" aria-hidden />
            <div>
              <p className="font-semibold text-sea-950">Have a concern or suggestion for the LGU?</p>
              <p className="text-sm text-slate-600">Write to the LGU at <a href={`mailto:${contact.feedbackEmail}`}>{contact.feedbackEmail}</a> or call the Office of the Mayor at {contact.mayorsOffice}.</p>
            </div>
          </div>
          <Link to="/contact" className="shrink-0 rounded-lg bg-sea-900 px-4 py-2 font-semibold text-white no-underline hover:bg-sea-700">Contact directory</Link>
        </Card>
      </Section>
    </>
  );
}
