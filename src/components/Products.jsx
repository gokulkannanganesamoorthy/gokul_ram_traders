import { useInView } from '../hooks/useInView'

const CATEGORIES = [
  { 
    id: '01', 
    name: 'Wiring & Cables', 
    desc: 'FR/FRLS Grade Copper wiring from Supreme and Finolex.',
    brands: ['Supreme', 'V-Guard', 'Goldmedal', 'Kundan', 'Vijay']
  },
  { 
    id: '02', 
    name: 'Pipes & Hoses', 
    desc: 'PVC, Casing-Caping, GI Pipes, and heavy-duty Water Hoses.',
    brands: ['Supreme', 'Ganga', 'Surya', 'Hi-Fi', 'Life']
  },
  { 
    id: '03', 
    name: 'Pump Systems', 
    desc: 'High-performance motors and industrial Pump Starters.',
    brands: ['Crompton', 'V-Guard', 'LEO', 'L&T', 'KVB']
  },
  { 
    id: '04', 
    name: 'MCBs & Boards', 
    desc: 'MCBs, TPN Boxes, Metal/Wood/Wiring boards, and Switchgear.',
    brands: ['Legrand', 'L&T', 'Goldmedal', 'Vinay', 'Meet', 'Oriant']
  },
  { 
    id: '05', 
    name: 'Fans & Ventilation', 
    desc: 'Ceiling fans, Exhaust fans, and energy-efficient Lighting.',
    brands: ['Crompton', 'Oriant', 'Almonard', 'Surya', 'V-Guard']
  },
  { 
    id: '06', 
    name: 'Water Tanks', 
    desc: 'Triple-layer insulated storage tanks for all requirements.',
    brands: ['Supreme', 'Ganga', 'Shivasu']
  },
  { 
    id: '07', 
    name: 'Water Heaters', 
    desc: 'Premium electric geysers and instant heating solutions.',
    brands: ['Crompton', 'V-Guard', 'Oriant']
  },
  { 
    id: '08', 
    name: 'Sanitaryware', 
    desc: 'Premium faucets, showers and modern bathroom fittings.',
    brands: ['Metro', 'Atlas', 'Frixon', 'Zoloto', 'Life']
  },
  { 
    id: '09', 
    name: 'Accessories', 
    desc: 'All essential electrical and plumbing hardware.',
    brands: ['Apaxx', 'Zoloto', 'Goldmedal', 'Vinay', 'Legrand', 'Hi-Fi']
  },
];

export default function Products() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="products" ref={ref} className="section-padding bg-white">
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
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="border-b border-brand-black/10 pb-8 md:pb-12 group-hover:border-brand-black transition-all h-full flex flex-col">
                <span className="text-[10px] font-mono text-brand-gray-400 mb-6 md:mb-8 block">{cat.id}</span>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {cat.name}
                  </h3>
                  
                  {/* Default Description - Hidden on Hover Desktop */}
                  <p className="text-brand-gray-600 leading-relaxed mb-8 text-sm md:text-base lg:group-hover:opacity-0 transition-opacity duration-300">
                    {cat.desc}
                  </p>

                  {/* Brands Layer - Visible on Hover Desktop / Always on Mobile */}
                  <div className="lg:absolute lg:inset-x-0 lg:bottom-20 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 flex flex-wrap gap-2 mt-4 lg:mt-0">
                    <p className="w-full text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 mb-2">Partner Brands</p>
                    {cat.brands.map(brand => (
                      <span key={brand} className="text-[10px] px-3 py-1 rounded-full border border-brand-black/5 text-brand-black font-medium">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-black mt-8">
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
  )
}
