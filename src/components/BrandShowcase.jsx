import { useState, useMemo } from 'react';
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

// Flatten all unique category tags for filter chips
const ALL_CATEGORIES = ['All', ...Array.from(
  new Set(Object.values(BRAND_MAPPING).flat())
).sort()];

export default function BrandShowcase() {
  const [ref, inView] = useInView({ once: true });
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBrands = useMemo(() => {
    if (activeCategory === 'All') return BRANDS;
    return BRANDS.filter((b) =>
      BRAND_MAPPING[b].some((cat) =>
        cat.toLowerCase().includes(activeCategory.toLowerCase()) ||
        activeCategory.toLowerCase().includes(cat.toLowerCase())
      )
    );
  }, [activeCategory]);

  return (
    <section
      id="brands"
      ref={ref}
      className="section-padding bg-transparent border-t border-brand-black/5"
      aria-label="Our Brand Partners"
    >
      <div className="container-wide">
        {/* Heading */}
        <div
          className={`mb-12 md:mb-32 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
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

        {/* ── Mobile: Category filter chips + brand grid ── */}
        <div
          className={`md:hidden transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {/* Horizontal scrollable chip bar */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none -mx-4 px-4">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 active:scale-95 ${
                  activeCategory === cat
                    ? 'bg-brand-black text-white'
                    : 'bg-brand-gray-100 text-brand-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Brand grid — 2 columns, always shows category below */}
          <div className="grid grid-cols-2 gap-4">
            {filteredBrands.map((brand) => (
              <div
                key={brand}
                className="border border-brand-black/8 rounded-2xl px-4 py-4 flex flex-col gap-1 active:bg-brand-gray-100 transition-colors"
              >
                <span className="text-xl font-light tracking-tight text-brand-black leading-tight">
                  {brand}
                </span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 leading-relaxed">
                  {BRAND_MAPPING[brand].join(' · ')}
                </span>
              </div>
            ))}
          </div>

          {/* Count line */}
          <p className="text-[10px] text-brand-gray-400 text-center mt-6 font-medium uppercase tracking-widest">
            {filteredBrands.length} brand{filteredBrands.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ' total'}
          </p>
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
              className={`relative group transition-all duration-700 ${
                hoveredBrand && hoveredBrand !== brand
                  ? 'opacity-20 scale-95 blur-[1px]'
                  : 'opacity-100 scale-100'
              }`}
            >
              <div className="flex flex-col items-center">
                <h4 className="text-4xl font-light tracking-tighter text-brand-black cursor-default transition-all duration-500 group-hover:scale-110">
                  {brand}
                </h4>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredBrand === brand ? 'h-6 opacity-100' : 'h-0 opacity-0'
                  }`}
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
