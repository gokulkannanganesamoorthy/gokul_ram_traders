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
import { trackEvent } from './utils/tracker';

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/Mobi|Android|iPhone|iPad/i.test(ua)) return '📱 Mobile';
  if (/Tablet|iPad/i.test(ua)) return '📟 Tablet';
  return '🖥️ Desktop';
};

const getReferrer = () => {
  if (!document.referrer) return 'Direct / Bookmark';
  try {
    return new URL(document.referrer).hostname;
  } catch {
    return document.referrer;
  }
};

function App() {
  // Fire once on page load — notify Discord of a new visitor
  useEffect(() => {
    trackEvent('👀 New Site Visit', {
      Device: getDeviceType(),
      'Came From': getReferrer(),
    });
  }, []);

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
