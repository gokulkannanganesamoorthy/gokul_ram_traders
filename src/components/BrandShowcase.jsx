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

export default function BrandShowcase() {
  const [ref, inView] = useInView({ once: true });
  const [hoveredBrand, setHoveredBrand] = useState(null);

  return (
    <section
      id="brands"
      ref={ref}
      className="section-padding bg-transparent border-t border-brand-black/5"
      aria-label="Our Brand Partners"
    >
      <div className="container-wide">
        <div
          className={`mb-32 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-6 text-center">
            Authorized Partners
          </p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-center">
            Industry Leading.
            <br />
            <span className="font-medium text-brand-gray-400">
              Curated Supply.
            </span>
          </h2>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-x-16 md:gap-x-32 gap-y-16 md:gap-y-24 transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {BRANDS.map((brand) => (
            <div
              key={brand}
              onMouseEnter={() => setHoveredBrand(brand)}
              onMouseLeave={() => setHoveredBrand(null)}
              className={`relative group transition-all duration-700 ${hoveredBrand && hoveredBrand !== brand ? 'opacity-20 scale-95 blur-[1px]' : 'opacity-100 scale-100'}`}
            >
              <div className="flex flex-col items-center">
                <h4 className="text-3xl md:text-4xl font-light tracking-tighter text-brand-black cursor-default transition-all duration-500 group-hover:scale-110">
                  {brand}
                </h4>

                {/* Category Reveal - Subtle & Clean */}
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
