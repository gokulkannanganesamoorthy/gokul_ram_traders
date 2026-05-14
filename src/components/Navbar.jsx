import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'products', label: 'Products' },
  { id: 'brands',   label: 'Brands'   },
  { id: 'contact',  label: 'Contact'  },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const pipeDesktopRef = useRef(null);
  const pipeMobileRef  = useRef(null);
  const rafRef         = useRef(null);

  /* Equal-bucket global progress:
     Each of the 5 nav sections owns exactly 1/5 of the pipe.
     As you scroll through a section its bucket fills 0→20%, giving
     short sections (Brands, Contact) the same visual range as tall ones. */
  useEffect(() => {
    const SECTION_IDS = NAV_ITEMS.map((n) => n.id);
    const BUCKET = 100 / SECTION_IDS.length; // 20% each

    const tick = () => {
      let pct = 0;

      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (!el) continue;

        const rect      = el.getBoundingClientRect();
        const elH       = el.offsetHeight;
        const scrolledIn = -rect.top; // positive after section top crosses viewport top

        if (scrolledIn < 0) {
          // Haven't reached this section yet — stop here
          pct = i * BUCKET;
          break;
        }

        if (scrolledIn >= elH) {
          // Fully past this section — full bucket
          if (i === SECTION_IDS.length - 1) {
            pct = 100; // last section complete
          }
          continue;
        }

        // Actively inside this section
        const within = Math.min(1, scrolledIn / elH);
        pct = i * BUCKET + within * BUCKET;
        break;
      }

      const val = `${pct}%`;
      if (pipeDesktopRef.current) pipeDesktopRef.current.style.width = val;
      if (pipeMobileRef.current)  pipeMobileRef.current.style.width  = val;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* Active section tracker */
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

  /* Shared pipe styles */
  const pipeTrack = {
    background:
      'linear-gradient(to bottom, #ccc 0%, #999 35%, #eee 50%, #999 65%, #ccc 100%)',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.15), inset 0 -1px 1px rgba(255,255,255,0.4)',
  };
  const pipeFill = {
    height: '100%',
    width: '0%',
    background:
      'linear-gradient(to bottom, #555 0%, #1a1a1a 40%, #444 50%, #1a1a1a 60%, #555 100%)',
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0">

      {/* ── DESKTOP ─────────────────────────────────────── */}
      <div className="hidden md:flex flex-col items-center">
        <nav
          aria-label="Main Navigation"
          className="glass rounded-full p-1.5 flex items-center gap-1 shadow-2xl relative overflow-hidden"
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

          {/* Pipe inside the nav — bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: 5, ...pipeTrack }}>
            <div ref={pipeDesktopRef} style={pipeFill} />
          </div>
        </nav>
      </div>

      {/* ── MOBILE ──────────────────────────────────────── */}
      <div className="md:hidden relative flex flex-col items-center">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="glass rounded-full px-8 py-4 flex items-center gap-4 bg-white shadow-2xl active:scale-95 transition-all relative overflow-hidden"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-black">
              {activeLabel}
            </span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Pipe inside the toggle — bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: 5, ...pipeTrack }}>
              <div ref={pipeMobileRef} style={pipeFill} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full mt-2 w-48 glass rounded-[30px] p-2 flex flex-col gap-1 bg-white/90 backdrop-blur-xl shadow-2xl">
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
    </div>
  );
}
