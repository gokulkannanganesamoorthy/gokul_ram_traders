import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const BRAND_MAPPING = {
  Supreme: ['Pipes', 'Water Tanks', 'Accessories'],
  Ashirwad: ['Pipes'],
  Global: ['HDPE Pipes'],
  Crompton: ['Fans'],
  'V-Guard': ['Fans', 'Water Heaters'],
  Goldmedal: ['Switches & Accessories'],
  'Hi-Fi': ['Switches & Accessories'],
  Oriant: ['Pump Systems'],
  ELGI: ['Compressors'],
  Kundan: ['Wiring & Cables'],
  LEO: ['Sanitaryware'],
  Ganga: ['Water Tanks'],
  Surya: ['Lighting'],
  Almonard: ['Ventilation'],
  Vinay: ['Switches & Accessories'],
  Legrand: ['MCBs'],
  Vijay: ['Pipes'],
  Metro: ['Sanitaryware'],
  Atlas: ['Sanitaryware'],
  KVB: ['Lights'],
  Frixon: ['Lights'],
  Life: ['Sanitaryware'],
  Zoloto: ['Sanitaryware'],
  Apaxx: ['Accessories'],
  Meet: ['Sanitaryware'],
  'L&T': ['MCBs Starters'],
  Shivasu: ['MCB Boards'],
};

const BRANDS = Object.keys(BRAND_MAPPING);
const ROW_A = BRANDS.slice(0, Math.ceil(BRANDS.length / 2));
const ROW_B = BRANDS.slice(Math.ceil(BRANDS.length / 2));

export default function BrandShowcase() {
  const [ref, inView] = useInView({ once: true });
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [tappedBrand, setTappedBrand] = useState(null);

  const handleTap = (brand) => {
    setTappedBrand(tappedBrand === brand ? null : brand);
  };

  return (
    <section
      id="brands"
      ref={ref}
      className="section-padding bg-transparent border-t border-brand-black/5"
      aria-label="Our Brand Partners"
    >
      <div className="container-wide">
        <div
          className={`mb-16 md:mb-32 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-6 text-center">
            Authorized Partners
          </p>
          <h2 className="text-4xl md:text-8xl font-light tracking-tighter text-center">
            Industry Leading.
            <br />
            <span className="font-medium text-brand-gray-400">
              Curated Supply.
            </span>
          </h2>
        </div>

        {/* ── Mobile: two scrolling marquee rows ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {/* Row A — scrolls left */}
          <div
            className="flex gap-8 mb-6"
            style={{ animation: 'marquee 22s linear infinite', width: 'max-content' }}
          >
            {[...ROW_A, ...ROW_A].map((brand, i) => (
              <button
                key={`a-${brand}-${i}`}
                onClick={() => handleTap(brand)}
                className="flex flex-col items-center flex-shrink-0 active:scale-95 transition-transform"
              >
                <span className="text-2xl font-light tracking-tight text-brand-black whitespace-nowrap">
                  {brand}
                </span>
                <span
                  className={`text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 transition-all duration-300 overflow-hidden whitespace-nowrap ${
                    tappedBrand === brand ? 'max-h-6 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  }`}
                >
                  {BRAND_MAPPING[brand].join(' + ')}
                </span>
              </button>
            ))}
          </div>

          {/* Row B — scrolls right */}
          <div
            className="flex gap-8"
            style={{ animation: 'marquee-reverse 26s linear infinite', width: 'max-content' }}
          >
            {[...ROW_B, ...ROW_B].map((brand, i) => (
              <button
                key={`b-${brand}-${i}`}
                onClick={() => handleTap(brand)}
                className="flex flex-col items-center flex-shrink-0 active:scale-95 transition-transform"
              >
                <span className="text-2xl font-light tracking-tight text-brand-black whitespace-nowrap">
                  {brand}
                </span>
                <span
                  className={`text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 transition-all duration-300 overflow-hidden whitespace-nowrap ${
                    tappedBrand === brand ? 'max-h-6 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  }`}
                >
                  {BRAND_MAPPING[brand].join(' + ')}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Desktop: original hover layout ── */}
        <div
          className={`hidden md:flex flex-wrap justify-center gap-x-32 gap-y-24 transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {BRANDS.map((brand) => (
            <div
              key={brand}
              onMouseEnter={() => setHoveredBrand(brand)}
              onMouseLeave={() => setHoveredBrand(null)}
              className={`relative group transition-all duration-700 ${hoveredBrand && hoveredBrand !== brand ? 'opacity-20 scale-95 blur-[1px]' : 'opacity-100 scale-100'}`}
            >
              <div className="flex flex-col items-center">
                <h4 className="text-4xl font-light tracking-tighter text-brand-black cursor-default transition-all duration-500 group-hover:scale-110">
                  {brand}
                </h4>
                <div
                  className={`overflow-hidden transition-all duration-500 ${hoveredBrand === brand ? 'h-6 opacity-100' : 'h-0 opacity-0'}`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-400 whitespace-nowrap">
                    {BRAND_MAPPING[brand].join(' + ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
