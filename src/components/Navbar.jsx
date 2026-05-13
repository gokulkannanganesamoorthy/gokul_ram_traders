import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'brands', label: 'Brands' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef();

  // High-performance scroll progress
  useEffect(() => {
    const tick = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) setProgress(window.scrollY / scrollHeight);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // IntersectionObserver: update active + URL hash
  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
            history.replaceState(null, '', id === 'home' ? '/' : `/#${id}`);
          }
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: id === 'home' ? 0 : el.offsetTop - 80,
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  const activeLabel = NAV_ITEMS.find((i) => i.id === active)?.label;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0">
      {/* Scroll Progress Bar */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-brand-black/5 hidden md:block overflow-hidden">
        <div
          className="h-full bg-brand-black"
          style={{
            transform: `scaleX(${progress})`,
            transformOrigin: 'left',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Desktop Pill Nav */}
      <nav
        aria-label="Main Navigation"
        className="hidden md:flex glass rounded-full p-1.5 items-center gap-1 shadow-2xl"
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={id === 'home' ? '/' : `/#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(id);
            }}
            aria-current={active === id ? 'page' : undefined}
            className={`px-8 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
              active === id
                ? 'bg-brand-black text-brand-white shadow-xl'
                : 'text-brand-gray-400 hover:text-brand-black hover:bg-brand-gray-100'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile */}
      <div className="md:hidden relative flex flex-col items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="glass rounded-full px-8 py-4 flex items-center gap-4 bg-white shadow-2xl active:scale-95 transition-all"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-black">
            {activeLabel}
          </span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-3 w-48 glass rounded-[30px] p-2 flex flex-col gap-1 bg-white/90 backdrop-blur-xl shadow-2xl">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={id === 'home' ? '/' : `/#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className={`px-6 py-4 rounded-[20px] text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                  active === id
                    ? 'bg-brand-black text-brand-white'
                    : 'text-brand-gray-400 hover:text-brand-black hover:bg-brand-gray-100'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
