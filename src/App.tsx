import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Government from './pages/Government';
import Barangays from './pages/Barangays';
import Services from './pages/Services';
import Transparency from './pages/Transparency';
import Tourism from './pages/Tourism';
import Contact from './pages/Contact';
import { PageHeader, Section } from './components/ui';

const titles: Record<string, string> = {
  '/': 'BetterTalibon — Public information for Talibon, Bohol',
  '/about': 'About Talibon · BetterTalibon',
  '/government': 'Officials & Offices · BetterTalibon',
  '/barangays': 'Barangays · BetterTalibon',
  '/services': 'Services · BetterTalibon',
  '/transparency': 'Transparency · BetterTalibon',
  '/tourism': 'Tourism · BetterTalibon',
  '/contact': 'Hotlines & Contacts · BetterTalibon',
};

function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" intro="That page doesn't exist (yet)." />
      <Section><Link to="/">← Back to home</Link></Section>
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? 'BetterTalibon';
  }, [pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="government" element={<Government />} />
        <Route path="barangays" element={<Barangays />} />
        <Route path="services" element={<Services />} />
        <Route path="transparency" element={<Transparency />} />
        <Route path="tourism" element={<Tourism />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
