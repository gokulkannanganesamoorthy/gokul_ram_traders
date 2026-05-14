import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'products', label: 'Products' },
  { id: 'brands',   label: 'Brands'   },
  { id: 'contact',  label: 'Contact'  },
];

/* Pipe body gradient — simulates a cylindrical steel tube */
const PIPE_BG =
  'linear-gradient(to bottom, #e0e0e0 0%, #c8c8c8 18%, #f0f0f0 38%, #b0b0b0 50%, #f0f0f0 62%, #c8c8c8 82%, #e0e0e0 100%)';

/* Copper highlight that runs along the inside top */
const COPPER_HIGHLIGHT =
  'linear-gradient(to right, transparent 0%, rgba(210,160,80,0.35) 20%, rgba(255,200,100,0.55) 50%, rgba(210,160,80,0.35) 80%, transparent 100%)';

export default function Navbar() {
  const [active, setActive]   = useState('home');
  const [isOpen, setIsOpen]   = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef();

  /* High-performance scroll progress */
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

  /* IntersectionObserver — update active section */
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
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0">

      {/* ── DESKTOP: Pipe Nav ─────────────────────────────── */}
      <nav
        aria-label="Main Navigation"
        className="hidden md:flex items-stretch relative overflow-hidden"
        style={{
          background: PIPE_BG,
          borderRadius: '999px',
          boxShadow:
            '0 4px 24px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.15)',
          border: '1px solid rgba(160,160,160,0.4)',
        }}
      >
        {/* Copper inner top highlight */}
        <div
          className="absolute top-[4px] left-4 right-4 h-[2px] rounded-full pointer-events-none z-20"
          style={{ background: COPPER_HIGHLIGHT }}
        />

        {/* Nav items with flange rings between them */}
        {NAV_ITEMS.map(({ id, label }, i) => (
          <div key={id} className="flex items-center">
            {/* Flange ring separator (not before first item) */}
            {i > 0 && (
              <div
                className="w-[5px] self-stretch flex-shrink-0 relative z-10"
                style={{
                  background:
                    'linear-gradient(to right, rgba(100,100,100,0.4) 0%, rgba(180,180,180,0.2) 40%, rgba(120,120,120,0.5) 60%, rgba(80,80,80,0.3) 100%)',
                  boxShadow: 'inset 1px 0 1px rgba(255,255,255,0.4), inset -1px 0 1px rgba(0,0,0,0.15)',
                }}
              />
            )}
            <a
              href={id === 'home' ? '/' : `/#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              aria-current={active === id ? 'page' : undefined}
              className="relative px-7 py-4 text-[10px] uppercase tracking-[0.22em] font-bold whitespace-nowrap z-10 transition-colors duration-200"
              style={{
                color: active === id ? '#1a1a1a' : '#888',
                textShadow: active === id
                  ? '0 1px 2px rgba(255,255,255,0.6)'
                  : 'none',
              }}
            >
              {/* Active pill inset (recessed into pipe) */}
              {active === id && (
                <span
                  className="absolute inset-x-1 inset-y-1.5 rounded-full z-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(220,220,220,0.7) 100%)',
                    boxShadow:
                      'inset 0 2px 4px rgba(0,0,0,0.12), inset 0 -1px 2px rgba(255,255,255,0.8)',
                  }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          </div>
        ))}

        {/* Global progress pipe — runs along the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] pointer-events-none z-20"
          style={{ background: 'rgba(0,0,0,0.06)' }}
        >
          <div
            className="h-full origin-left"
            style={{
              transform: `scaleX(${progress})`,
              transition: 'transform 0.1s linear',
              background:
                'linear-gradient(to right, #3a3a3a 0%, #888 40%, #f5c57a 60%, #888 80%, #3a3a3a 100%)',
              boxShadow: '0 0 4px rgba(245,197,122,0.6)',
            }}
          />
        </div>
      </nav>

      {/* ── MOBILE: Pipe Toggle ───────────────────────────── */}
      <div className="md:hidden relative flex flex-col items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="flex items-center gap-3 px-8 py-4 relative overflow-hidden active:scale-95 transition-transform duration-150"
          style={{
            background: PIPE_BG,
            borderRadius: '999px',
            boxShadow:
              '0 4px 20px rgba(0,0,0,0.16), inset 0 1px 2px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.12)',
            border: '1px solid rgba(160,160,160,0.4)',
          }}
        >
          {/* Copper highlight */}
          <div
            className="absolute top-[3px] left-4 right-4 h-[2px] rounded-full pointer-events-none"
            style={{ background: COPPER_HIGHLIGHT }}
          />

          <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#333] relative z-10"
            style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
            {activeLabel}
          </span>

          <svg
            width="10" height="6" viewBox="0 0 10 6" fill="none"
            className={`relative z-10 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M1 1L5 5L9 1" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Global progress pipe — bottom edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px] pointer-events-none"
            style={{ background: 'rgba(0,0,0,0.06)' }}
          >
            <div
              className="h-full origin-left"
              style={{
                transform: `scaleX(${progress})`,
                transition: 'transform 0.1s linear',
                background:
                  'linear-gradient(to right, #3a3a3a 0%, #888 40%, #f5c57a 60%, #888 80%, #3a3a3a 100%)',
                boxShadow: '0 0 4px rgba(245,197,122,0.6)',
              }}
            />
          </div>
        </button>

        {isOpen && (
          <div
            className="absolute top-full mt-2 w-52 flex flex-col overflow-hidden"
            style={{
              background: PIPE_BG,
              borderRadius: '24px',
              boxShadow:
                '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.7)',
              border: '1px solid rgba(160,160,160,0.4)',
            }}
          >
            {NAV_ITEMS.map(({ id, label }, i) => (
              <div key={id}>
                {i > 0 && (
                  <div
                    className="mx-4 h-[3px]"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(100,100,100,0.3) 0%, rgba(180,180,180,0.15) 50%, rgba(100,100,100,0.25) 100%)',
                    }}
                  />
                )}
                <a
                  href={id === 'home' ? '/' : `/#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  className="block px-7 py-4 text-[10px] uppercase tracking-[0.22em] font-bold transition-colors duration-200"
                  style={{ color: active === id ? '#1a1a1a' : '#888' }}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
