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
import WireDivider from './components/WireDivider';       // #1
import PageLoader from './components/PageLoader';         // #3
import PipeJunction from './components/PipeJunction';     // #5

function App() {

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
      {/* #3 — Fan Blade Page Loader */}
      <PageLoader />

      <div className="bg-brand-white min-h-screen flex flex-col bg-grid">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <WireDivider />           {/* #1 — Wire Uncoiling */}
          <Stats />
          <WireDivider />           {/* #1 — Wire Uncoiling */}
          <WhyUs />
          <PipeJunction />          {/* #5 — Pipe Junction */}
          <Products />
          <WireDivider />           {/* #1 — Wire Uncoiling */}
          <BrandShowcase />
          <PipeJunction />          {/* #5 — Pipe Junction */}
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
