// Scroll-to-top button - appears after scrolling 400px, bottom-right
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-5 z-[150] md:bottom-8 md:right-8 w-11 h-11 rounded-full bg-brand-black text-white flex items-center justify-center shadow-xl transition-all duration-300 active:scale-90 hover:scale-110 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } mb-[calc(4rem+env(safe-area-inset-bottom))] md:mb-0`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 12V2M2 7l5-5 5 5" />
      </svg>
    </button>
  );
}
