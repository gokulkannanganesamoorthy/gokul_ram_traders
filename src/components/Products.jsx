import { useInView } from '../hooks/useInView'

const CATEGORIES = [
  { 
    id: '01', 
    name: 'Wiring & Cables', 
    tag: 'Authentic', 
    desc: 'FR/FRLS Grade Copper wiring from Supreme and Finolex.',
    image: '/Users/gokulkannan.g/.gemini/antigravity/brain/f8ba53d7-1be8-420b-8172-b93f7adf0e6a/electrical_cables_macro_cinematic_1778671428085.png'
  },
  { 
    id: '02', 
    name: 'Piping Systems', 
    tag: 'Durable', 
    desc: 'Heavy-duty CPVC and GI piping for secure builds.',
    image: '/Users/gokulkannan.g/.gemini/antigravity/brain/f8ba53d7-1be8-420b-8172-b93f7adf0e6a/electrical_shelves_industrial_cinematic_1778671451597.png'
  },
  { 
    id: '03', 
    name: 'Pump Systems', 
    tag: 'Reliable', 
    desc: 'High-performance water solutions for homes and industry.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '04', 
    name: 'Switchgear', 
    tag: 'Safety', 
    desc: 'Modular switches and advanced circuit protection.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '05', 
    name: 'Fans & Lighting', 
    tag: 'Energy', 
    desc: 'Branded circulation and energy-efficient illumination.',
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '06', 
    name: 'Accessories', 
    tag: 'Complete', 
    desc: 'All essential electrical and plumbing accessories.',
    image: 'https://images.unsplash.com/photo-1590001158193-79cd7c7d3f76?auto=format&fit=crop&q=80&w=800'
  }
]

export default function Products() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="products" ref={ref} className="section-padding bg-brand-bg">
      <div className="container-wide">
        <div className={`mb-32 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-6">Our Offerings</p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter">Engineered Excellence.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <div 
              key={cat.id} 
              className={`bg-white rounded-[40px] overflow-hidden border border-brand-black/5 hover:shadow-premium transition-all duration-700 group ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] uppercase tracking-widest font-bold text-brand-black shadow-sm">
                    {cat.tag}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed mb-8">
                  {cat.desc}
                </p>
                <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-black group-hover:gap-4 transition-all">
                  Inquire Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-24 p-12 glass rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="flex gap-4 items-center">
            <span className="text-3xl">📦</span>
            <div>
              <p className="font-bold">Ready Stock Available</p>
              <p className="text-sm text-brand-gray-600">Immediate pickup for all core categories.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-3xl">🏗️</span>
            <div>
              <p className="font-bold">Bulk Orders Supported</p>
              <p className="text-sm text-brand-gray-600">Preferred supply partner for contractors.</p>
            </div>
          </div>
          <a href="tel:+919876543210" className="px-8 py-4 bg-brand-black text-brand-white rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 transition-all">
            Check Availability
          </a>
        </div>
      </div>
    </section>
  )
}
