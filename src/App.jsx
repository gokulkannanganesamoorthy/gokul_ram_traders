import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import BrandShowcase from './components/BrandShowcase';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WireDivider from './components/WireDivider';
import PageLoader from './components/PageLoader';
import PipeJunction from './components/PipeJunction';
import FloatingContact from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import {
  sendToDiscord,
  getGeoInfo,
  getDeviceType,
  getReferrer,
  getTimeIST,
} from './utils/tracker';

// Sections to track engagement on (must match their HTML id attributes)
const TRACKED_SECTIONS = [
  { id: 'home', label: 'Hero' },
  { id: 'about', label: 'About / Why Us' },
  { id: 'products', label: 'Products' },
  { id: 'brands', label: 'Brands' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  // --- 1. PAGE VISIT: fire once on mount with full geo & device info ---
  useEffect(() => {
    const fireVisit = async () => {
      const geo = await getGeoInfo();
      await sendToDiscord(
        'New Visitor',
        {
          'IP Address': geo.ip,
          Location: `${geo.city}, ${geo.region}, ${geo.country}`,
          ISP: geo.isp,
          Timezone: geo.timezone,
          Device: getDeviceType(),
          Browser: navigator.userAgent.split(') ')[0].split('(')[1] || 'Unknown',
          'Screen Size': `${window.screen.width}x${window.screen.height}`,
          Language: navigator.language || 'Unknown',
          'Came From': getReferrer(),
          'Page Opened At': getTimeIST(),
        },
        3066993, // green for new visits
      );
    };
    fireVisit();
  }, []);

  // --- 2. SECTION ENGAGEMENT: track time spent in each section ---
  useEffect(() => {
    const sessionStart = Date.now();
    // Map of sectionId -> { enteredAt: timestamp, totalMs: number }
    const engagement = {};
    TRACKED_SECTIONS.forEach(({ id }) => {
      engagement[id] = { enteredAt: null, totalMs: 0 };
    });

    const observers = [];

    TRACKED_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            engagement[id].enteredAt = Date.now();
          } else if (engagement[id].enteredAt) {
            engagement[id].totalMs += Date.now() - engagement[id].enteredAt;
            engagement[id].enteredAt = null;
          }
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    // --- 3. SESSION SUMMARY: send on page leave ---
    const sendSummary = async () => {
      // Finalise any section still in view
      TRACKED_SECTIONS.forEach(({ id }) => {
        if (engagement[id].enteredAt) {
          engagement[id].totalMs += Date.now() - engagement[id].enteredAt;
        }
      });

      const totalSec = Math.round((Date.now() - sessionStart) / 1000);
      const fmt = (ms) => {
        const s = Math.round(ms / 1000);
        return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;
      };

      const sectionFields = {};
      TRACKED_SECTIONS.forEach(({ id, label }) => {
        sectionFields[`Time on ${label}`] = fmt(engagement[id].totalMs);
      });

      const geo = await getGeoInfo();
      await sendToDiscord(
        'Visitor Left — Session Summary',
        {
          'IP Address': geo.ip,
          Location: `${geo.city}, ${geo.region}, ${geo.country}`,
          Device: getDeviceType(),
          'Total Time on Site': totalSec < 60 ? `${totalSec}s` : `${Math.floor(totalSec / 60)}m ${totalSec % 60}s`,
          ...sectionFields,
          'Left At': getTimeIST(),
        },
        10038562, // red-ish for session end
      );
    };

    window.addEventListener('beforeunload', sendSummary);
    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('beforeunload', sendSummary);
    };
  }, []);

  // --- 4. SMOOTH SCROLL (Lenis) ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      {/* Page loader */}
      <PageLoader />

      {/* Floating mobile contact bar */}
      <FloatingContact />
      {/* Scroll to top button */}
      <ScrollToTop />

      <div className="bg-brand-white min-h-screen flex flex-col bg-grid">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <WireDivider />
          <Stats />
          <WireDivider />
          <WhyUs />
          <PipeJunction />
          <Products />
          <WireDivider />
          <BrandShowcase />
          <PipeJunction />
          <CTA />
          <WireDivider />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
