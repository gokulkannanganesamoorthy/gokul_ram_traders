import { useInView } from '../hooks/useInView'

const CATEGORIES = [
  { 
    id: '01', 
    name: 'Wiring & Cables', 
    desc: 'FR/FRLS Grade Copper wiring solutions.',
    brands: ['Kundan']
  },
  { 
    id: '02', 
    name: 'Pipes & Hoses', 
    desc: 'PVC, Casing-Caping, GI Pipes, Wiring Pipes and heavy-duty Water Hoses.',
    brands: ['Supreme', 'Vijay', 'Sun']
  },
  { 
    id: '03', 
    name: 'Motor Pumps & Compressors', 
    desc: 'High-performance motors and industrial Pump Starters.',
    brands: ['Oriant']
  },
  { 
    id: '04', 
    name: 'MCBs, Switchgears & Boards', 
    desc: 'MCBs, TPN Boxes, Metal/Wood/Wiring boards, and Switchgear.',
    brands: ['Gold Medal', 'Hi-Fi', 'Legrand', 'L&T', 'Shivasu']
  },
  { 
    id: '05', 
    name: 'Fans, Lights & Ventilation', 
    desc: 'Ceiling fans, Exhaust fans, and energy-efficient Lighting.',
    brands: ['Crompton', 'Almonard', 'V-Guard', 'Surya', 'KVB', 'Frixon']
  },
  { 
    id: '06', 
    name: 'Water Tanks', 
    desc: 'Triple-layer insulated storage tanks for all requirements.',
    brands: ['Supreme', 'Ganga']
  },
  { 
    id: '07', 
    name: 'Water Heaters', 
    desc: 'Premium electric geysers and instant heating solutions.',
    brands: ['V-Guard']
  },
  { 
    id: '08', 
    name: 'Sanitaryware', 
    desc: 'Premium faucets, showers and modern bathroom fittings.',
    brands: ['Metro', 'Atlas', 'Zoloto', 'Life', 'LEO', 'Meet']
  },
  { 
    id: '09', 
    name: 'Accessories', 
    desc: 'All essential electrical accessories, lighting and plumbing hardware.',
    brands: ['Surya', 'KVB', 'Frixon', 'Apaxx', 'Supreme', 'Gold Medal']
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
              <div className="border-b border-brand-black/10 pb-8 md:pb-12 group-hover:border-brand-black transition-all h-full flex flex-col min-h-[360px] cursor-pointer">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <span className="text-[10px] font-mono text-brand-gray-400">{cat.id}</span>
                  {/* Hover Affordance for Desktop */}
                  <div className="hidden lg:flex items-center gap-3 opacity-100 transition-opacity">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-brand-black">View Brands</span>
                    <div className="w-6 h-6 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all duration-500">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="group-hover:rotate-90 transition-transform duration-500">
                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" className="text-brand-black group-hover:text-white" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {cat.name}
                  </h3>
                  
                  <p className="text-brand-gray-600 leading-relaxed mb-8 text-sm md:text-base lg:group-hover:opacity-0 transition-opacity duration-300">
                    {cat.desc}
                  </p>

                  {/* Brands Layer: Visible on Hover on Desktop, Always visible on Mobile */}
                  <div className="flex flex-wrap gap-2 mt-4 lg:absolute lg:top-24 lg:left-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
                    <p className="w-full text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 mb-2">Partner Brands</p>
                    {cat.brands.map(brand => (
                      <span key={brand} className="text-[10px] px-3 py-1 rounded-full border border-brand-black/5 text-brand-black font-medium">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-black mt-12 group-hover:gap-4 transition-all">
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
