import { useInView } from '../hooks/useInView'

const FEATURES = [
  { title: 'Quality First', desc: 'Every product is hand-picked for durability.' },
  { title: 'Local Speed', desc: 'Immediate availability in Rajapalayam.' },
  { title: 'Fair Scale', desc: 'Wholesale pricing for all project tiers.' }
]

export default function WhyUs() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="why-us" ref={ref} className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-6">Our Philosophy</p>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
              Durable solutions for a <span className="font-medium italic">connected</span> tomorrow.
            </h2>
            <div className="space-y-12">
              {FEATURES.map((feat, i) => (
                <div key={feat.title} className="flex gap-8 group">
                  <span className="text-brand-accent font-mono text-sm mt-1">0{i+1}</span>
                  <div>
                    <h4 className="text-xl font-medium mb-2 group-hover:text-brand-accent transition-colors">{feat.title}</h4>
                    <p className="text-brand-gray-600 max-w-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
            <div className="aspect-square rounded-[80px] bg-white shadow-premium flex items-center justify-center p-20 relative z-10">
              <div className="text-center">
                <span className="text-[120px] mb-8 block leading-none">🛡️</span>
                <p className="text-2xl font-light text-brand-gray-600">The most trusted electrical partner in Tamil Nadu since 2009.</p>
              </div>
            </div>
            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-black/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
