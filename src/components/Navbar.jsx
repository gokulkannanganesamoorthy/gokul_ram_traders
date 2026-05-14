import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'products', label: 'Products' },
  { id: 'brands',   label: 'Brands'   },
  { id: 'contact',  label: 'Contact'  },
];

export default function Navbar() {
  const [active, setActive]     = useState('home');
  const [isOpen, setIsOpen]     = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef();

  /* Real-time scroll progress via rAF */
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

  /* Active section via IntersectionObserver */
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
    window.scrollTo({ top: id === 'home' ? 0 : el.offsetTop - 80, behavior: 'smooth' });
    setIsOpen(false);
  };

  const activeLabel = NAV_ITEMS.find((i) => i.id === active)?.label;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0 flex flex-col items-center gap-2">

      {/* ── Desktop: glass pill nav ─────────────────────── */}
      <nav
        aria-label="Main Navigation"
        className="hidden md:flex glass rounded-full p-1.5 items-center gap-1 shadow-2xl"
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={id === 'home' ? '/' : `/#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
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

      {/* ── Mobile: pill toggle ─────────────────────────── */}
      <div className="md:hidden relative flex flex-col items-center gap-2 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="glass rounded-full px-8 py-4 flex items-center gap-4 bg-white shadow-2xl active:scale-95 transition-all"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-black">
            {activeLabel}
          </span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-3 w-48 glass rounded-[30px] p-2 flex flex-col gap-1 bg-white/90 backdrop-blur-xl shadow-2xl">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={id === 'home' ? '/' : `/#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
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

      {/* ── Progress Pipe (desktop + mobile) ────────────── */}
      {/*
        Anatomy of the pipe:
        - Outer shell: cylindrical metallic gradient (top-lit steel)
        - Inner groove: dark inset trough the liquid runs through
        - Liquid fill: copper/warm metal flow following scroll
        - End caps: small rounded flanges on each side
      */}
      <div className="relative flex items-center w-[220px] md:w-[340px]" style={{ height: 10 }}>

        {/* Left end cap / pipe opening */}
        <div
          className="flex-shrink-0 w-[6px] h-[10px] rounded-l-full z-10"
          style={{
            background: 'linear-gradient(to bottom, #c8c8c8 0%, #888 40%, #aaa 60%, #ccc 100%)',
            boxShadow: 'inset 1px 0 1px rgba(255,255,255,0.4)',
          }}
        />

        {/* Pipe body */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{
            height: 10,
            background:
              'linear-gradient(to bottom, #d4d4d4 0%, #a0a0a0 20%, #e8e8e8 40%, #989898 50%, #e8e8e8 60%, #a0a0a0 80%, #d4d4d4 100%)',
            boxShadow:
              '0 2px 6px rgba(0,0,0,0.18), inset 0 1px 2px rgba(255,255,255,0.55), inset 0 -1px 2px rgba(0,0,0,0.12)',
          }}
        >
          {/* Inner dark trough */}
          <div
            className="absolute inset-x-0"
            style={{
              top: 3,
              bottom: 3,
              background: 'rgba(0,0,0,0.18)',
              borderRadius: 2,
            }}
          />

          {/* Liquid / flow fill */}
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: `${progress * 100}%`,
              background:
                'linear-gradient(to bottom, #6b6b6b 0%, #2a2a2a 30%, #555 50%, #2a2a2a 70%, #6b6b6b 100%)',
              boxShadow: '2px 0 8px rgba(0,0,0,0.3)',
              transition: 'width 0.08s linear',
            }}
          >
            {/* Copper sheen at the tip of the flow */}
            <div
              className="absolute right-0 top-0 bottom-0 w-3"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(245,197,122,0.7))',
              }}
            />
          </div>
        </div>

        {/* Right end cap / pipe opening */}
        <div
          className="flex-shrink-0 w-[6px] h-[10px] rounded-r-full z-10"
          style={{
            background: 'linear-gradient(to bottom, #c8c8c8 0%, #888 40%, #aaa 60%, #ccc 100%)',
            boxShadow: 'inset -1px 0 1px rgba(255,255,255,0.4)',
          }}
        />
      </div>

    </div>
  );
}
