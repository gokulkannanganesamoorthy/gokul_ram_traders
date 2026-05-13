import { useInView } from '../hooks/useInView'

const CATEGORIES = [
  { id: '01', name: 'Wiring', tag: 'Core', desc: 'FR/FRLS Grade Copper' },
  { id: '02', name: 'Piping', tag: 'Safety', desc: 'Heavy Duty PVC/GI' },
  { id: '03', name: 'Pumps', tag: 'Power', desc: 'Industrial Efficiency' },
  { id: '04', name: 'Control', tag: 'Smart', desc: 'Modular Switchgear' }
]

export default function Products() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="products" ref={ref} className="section-padding bg-brand-bg">
      <div className="container-wide">
        <div className={`mb-32 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-6">Our Collections</p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter">Engineered Excellence.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/5 rounded-[60px] overflow-hidden border border-brand-black/5">
          {CATEGORIES.map((cat, i) => (
            <div 
              key={cat.id} 
              className={`bg-white p-16 md:p-24 transition-all duration-1000 group hover:bg-brand-black transition-all ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-20">
                <span className="text-brand-gray-400 font-mono group-hover:text-brand-gray-600 transition-colors">{cat.id}</span>
                <span className="px-4 py-1 rounded-full border border-brand-black/5 text-[9px] uppercase tracking-widest font-bold group-hover:bg-brand-gray-100 group-hover:text-brand-black transition-all">
                  {cat.tag}
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-light tracking-tighter mb-8 group-hover:text-brand-white transition-colors">
                {cat.name}
              </h3>
              <p className="text-brand-gray-600 text-lg group-hover:text-brand-gray-400 transition-colors">
                {cat.desc}
              </p>
              <div className="mt-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                <button className="text-brand-white font-medium underline underline-offset-8 decoration-brand-white/30">View Technical Specs</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
