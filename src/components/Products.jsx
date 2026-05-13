// #6 — Product Card with Cable Spool Hover
// Each card shows a spinning cable spool SVG on hover, product-type specific
import { useInView } from '../hooks/useInView';

// Maps product category to a distinctive spool color
const SPOOL_COLORS = {
  'Wiring & Cables':              { rim: '#c8a000', core: '#f5c57a', label: 'Cu Wire' },
  'Pipes & Hoses':                { rim: '#2563eb', core: '#93c5fd', label: 'PVC Pipe' },
  'Motor Pumps & Compressors':    { rim: '#374151', core: '#9ca3af', label: 'Motor' },
  'MCBs, Switchgears & Boards':   { rim: '#dc2626', core: '#fca5a5', label: 'MCB' },
  'Fans, Lights & Ventilation':   { rim: '#059669', core: '#6ee7b7', label: 'Fan' },
  'Water Tanks':                  { rim: '#0284c7', core: '#7dd3fc', label: 'Tank' },
  'Water Heaters':                { rim: '#ea580c', core: '#fdba74', label: 'Heater' },
  'Sanitaryware':                 { rim: '#6d28d9', core: '#c4b5fd', label: 'Fittings' },
  'Accessories':                  { rim: '#374151', core: '#d1d5db', label: 'Parts' },
  'Solar & Street Lighting':      { rim: '#ca8a04', core: '#fde047', label: 'Solar' },
  'Professional Installation':    { rim: '#000000', core: '#6b7280', label: 'Service' },
};

function SpoolIcon({ name }) {
  const colors = SPOOL_COLORS[name] || { rim: '#374151', core: '#9ca3af', label: '' };
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="group-hover:rotate-[360deg] transition-transform duration-[1200ms] ease-out">
      {/* Outer rim */}
      <circle cx="24" cy="24" r="22" fill={colors.rim} opacity="0.15" stroke={colors.rim} strokeWidth="2" />
      {/* Spool flanges */}
      <ellipse cx="24" cy="24" rx="18" ry="18" fill="none" stroke={colors.rim} strokeWidth="3" />
      {/* Cable windings */}
      {[14, 17, 20].map((r) => (
        <circle key={r} cx="24" cy="24" r={r} stroke={colors.core} strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.7" />
      ))}
      {/* Center hub */}
      <circle cx="24" cy="24" r="5" fill={colors.rim} />
      <circle cx="24" cy="24" r="2.5" fill={colors.core} />
    </svg>
  );
}

const CATEGORIES = [
  { id: '01', name: 'Wiring & Cables',             desc: 'FR/FRLS Grade Copper wiring solutions.',                                                                brands: ['Kundan'] },
  { id: '02', name: 'Pipes & Hoses',               desc: 'PVC (4kg / 6kg), CPVC, GI Pipes (Class A / B), Column Pipes, and HDPE Hose (6kg / 10kg).',            brands: ['Supreme', 'Global', 'Ashirwad', 'Vijay'] },
  { id: '03', name: 'Motor Pumps & Compressors',   desc: 'High-performance motors and industrial Pump Starters.',                                                  brands: ['Oriant', 'ELGI'] },
  { id: '04', name: 'MCBs, Switchgears & Boards',  desc: 'MCBs, TPN Boxes, Metal/Wood/Wiring boards, and Switchgear.',                                            brands: ['Gold Medal', 'Hi-Fi', 'Legrand', 'L&T', 'Shivasu'] },
  { id: '05', name: 'Fans, Lights & Ventilation',  desc: 'Ceiling fans, Exhaust fans, and energy-efficient Lighting.',                                            brands: ['Crompton', 'Almonard', 'V-Guard', 'Surya', 'KVB', 'Frixon'] },
  { id: '06', name: 'Water Tanks',                 desc: 'Triple-layer insulated storage tanks for all requirements.',                                             brands: ['Supreme', 'Ganga'] },
  { id: '07', name: 'Water Heaters',               desc: 'Premium electric geysers and instant heating solutions.',                                                brands: ['V-Guard'] },
  { id: '08', name: 'Sanitaryware',                desc: 'Premium faucets, showers and modern bathroom fittings.',                                                 brands: ['Metro', 'Atlas', 'Zoloto', 'Life', 'LEO', 'Meet'] },
  { id: '09', name: 'Accessories',                 desc: 'All essential electrical accessories, lighting and plumbing hardware.',                                  brands: ['Surya', 'KVB', 'Frixon', 'Apaxx', 'Supreme', 'Gold Medal'] },
  { id: '10', name: 'Solar & Street Lighting',     desc: 'Solar street light installation with intelligent automated timers.',                                     brands: ['Surya', 'Crompton', 'Almonard'] },
  { id: '11', name: 'Professional Installation',   desc: 'Expert installation services for street lighting and large-scale projects.',                             brands: ['Authorized Service'] },
];

export default function Products() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section id="products" ref={ref} aria-label="Products — Electrical, Plumbing & Piping" className="section-padding bg-transparent">
      <div className="container-wide">
        <div className={`mb-20 md:mb-32 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-6">Our Offerings</p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter">Essential Materials.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-16 md:gap-y-24">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className={`transition-all duration-1000 group relative ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="border-b border-brand-black/10 pb-8 md:pb-12 group-hover:border-brand-black transition-all h-full flex flex-col min-h-[320px] cursor-pointer">

                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <span className="text-[10px] font-mono text-brand-gray-400">{cat.id}</span>
                  <div className="flex items-center gap-3">
                    {/* View Brands label */}
                    <span className="hidden lg:block text-[9px] uppercase tracking-widest font-bold text-brand-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Brands
                    </span>
                    {/* #6 — Cable Spool Icon — spins on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <SpoolIcon name={cat.name} />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {cat.name}
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed mb-6 text-sm md:text-base">{cat.desc}</p>

                  <div className="flex flex-wrap gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 transform lg:translate-y-2 lg:group-hover:translate-y-0">
                    <p className="w-full text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 mb-2">Partner Brands</p>
                    {cat.brands.map((brand) => (
                      <span key={brand} className="text-[10px] px-3 py-1 rounded-full border border-brand-black/5 text-brand-black font-medium">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-black mt-12 group-hover:gap-4 transition-all"
                >
                  Inquire
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
