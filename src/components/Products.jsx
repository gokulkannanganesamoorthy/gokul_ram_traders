import { useInView } from '../hooks/useInView'

const CATEGORIES = [
  { 
    id: '01', 
    name: 'Wiring & Cables', 
    desc: 'FR/FRLS Grade Copper wiring from Supreme and Finolex.' 
  },
  { 
    id: '02', 
    name: 'Pipes & Hoses', 
    desc: 'PVC, Casing-Caping, GI Pipes, and heavy-duty Water Hoses.' 
  },
  { 
    id: '03', 
    name: 'Pump Systems', 
    desc: 'High-performance motors and industrial Pump Starters.' 
  },
  { 
    id: '04', 
    name: 'MCBs & Boards', 
    desc: 'MCBs, TPN Boxes, Metal/Wood/Wiring boards, and Switchgear.' 
  },
  { 
    id: '05', 
    name: 'Fans & Ventilation', 
    desc: 'Ceiling fans, Exhaust fans, and energy-efficient Lighting.' 
  },
  { 
    id: '06', 
    name: 'Water Tanks', 
    desc: 'Triple-layer insulated storage tanks for all requirements.' 
  },
  { 
    id: '07', 
    name: 'Water Heaters', 
    desc: 'Premium electric geysers and instant heating solutions.' 
  },
  { 
    id: '08', 
    name: 'Sanitaryware', 
    desc: 'Premium faucets, showers and modern bathroom fittings.' 
  },
  { 
    id: '09', 
    name: 'Accessories', 
    desc: 'All essential electrical and plumbing hardware.' 
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {CATEGORIES.map((cat, i) => (
            <div 
              key={cat.id} 
              className={`transition-all duration-1000 group ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="border-b border-brand-black/10 pb-8 md:pb-12 group-hover:border-brand-black transition-all">
                <span className="text-[10px] font-mono text-brand-gray-400 mb-6 md:mb-8 block">{cat.id}</span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 md:mb-4">
                  {cat.name}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  {cat.desc}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-black">
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
