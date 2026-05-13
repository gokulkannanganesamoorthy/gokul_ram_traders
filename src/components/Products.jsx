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
    brands: ['Supreme', 'Vijay']
  },
  { 
    id: '03', 
    name: 'Pump Systems', 
    desc: 'High-performance motors and industrial Pump Starters.',
    brands: ['Oriant', 'L&T']
  },
  { 
    id: '04', 
    name: 'MCBs, Switchgears & Boards', 
    desc: 'MCBs, TPN Boxes, Metal/Wood/Wiring boards, and Switchgear.',
    brands: ['Legrand', 'L&T', 'Shivasu', 'Goldmedal', 'Hi-Fi', 'Vinay']
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
    brands: ['Surya', 'KVB', 'Frixon', 'Apaxx', 'Supreme', 'Goldmedal']
  },
];

export default function Products() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="products" ref={ref} className="section-padding bg-white overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
      <div className="container-wide">
        <div className={`mb-20 md:mb-32 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-6">Our Offerings</p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter">Essential Materials.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-brand-black/10">
          {CATEGORIES.map((cat, i) => (
            <div 
              key={cat.id} 
              className={`transition-all duration-1000 group relative border-b border-brand-black/10 md:border-r ${i % 3 === 2 ? 'md:border-r-0' : ''} ${inView ? 'reveal-visible' : 'reveal-hidden'} overflow-hidden h-[400px] flex flex-col justify-between p-10 hover:bg-brand-black transition-colors duration-500`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Category ID - Hidden on Hover */}
              <span className="text-[10px] font-mono text-brand-gray-400 group-hover:text-brand-gray-600 transition-colors z-10">{cat.id}</span>
              
              <div className="z-10 relative">
                <h3 className="text-3xl font-medium tracking-tight mb-4 group-hover:text-white transition-colors duration-500">
                  {cat.name}
                </h3>
                
                <p className="text-brand-gray-600 leading-relaxed text-base group-hover:text-brand-gray-400 transition-colors duration-500 max-w-[280px]">
                  {cat.desc}
                </p>
              </div>

              {/* Brands Horizontal Marquee - Reveals on Hover (PC) / Always visible (Mobile) */}
              <div className="lg:absolute lg:inset-x-0 lg:bottom-12 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 mt-10 lg:mt-0">
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-gray-400 mb-3 px-10 lg:px-0 lg:text-center">Partner Brands</p>
                <div className="relative flex overflow-hidden group/marquee border-y border-brand-black/5 lg:border-white/10 py-4">
                  <div className="flex animate-marquee whitespace-nowrap group-hover:lg:pause-on-hover">
                    {[...cat.brands, ...cat.brands, ...cat.brands].map((brand, idx) => (
                      <span key={idx} className="text-sm md:text-lg font-medium tracking-tighter text-brand-black lg:group-hover:text-white mx-8">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-black group-hover:text-white mt-8 z-10 transition-colors">
                Inquire
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
