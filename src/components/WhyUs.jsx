import { useInView } from '../hooks/useInView'

const FEATURES = [
  { title: 'Trusted Legacy', desc: 'Serving Rajapalayam for over 15 years with genuine products.' },
  { title: 'Authorized Dealer', desc: 'Sourcing directly from Supreme, Havells, and Finolex.' },
  { title: 'Project Ready', desc: 'Wholesale inventory and bulk supply for contractors.' }
]

export default function WhyUs() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="why-us" ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-32">
          {/* Left Side - Typography */}
          <div className={`flex-1 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-12">Our Philosophy</p>
            <h2 className="text-6xl md:text-[8rem] font-light tracking-tighter leading-[0.8] mb-16">
              Built on Trust.<br />
              <span className="font-medium italic">Since 2009.</span>
            </h2>
            
            <div className="max-w-xl">
              <p className="text-2xl md:text-3xl font-light text-brand-gray-600 leading-relaxed mb-20">
                We bridge the gap between world-class engineering and local infrastructure needs through 
                <span className="text-brand-black font-medium"> authentic guidance</span> and fair pricing.
              </p>
            </div>
          </div>

          {/* Right Side - Feature Grid */}
          <div className={`flex-1 transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
            <div className="grid grid-cols-1 gap-16">
              {FEATURES.map((feat, i) => (
                <div key={feat.title} className="group border-b border-brand-black/5 pb-16 last:border-0">
                  <div className="flex gap-12">
                    <span className="text-brand-black font-mono text-sm pt-2">0{i+1}</span>
                    <div>
                      <h4 className="text-3xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{feat.title}</h4>
                      <p className="text-brand-gray-600 text-lg leading-relaxed max-w-sm">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-brand-gray-100 rounded-[60px] text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-400 mb-2">Location</p>
              <p className="text-xl font-medium">Rajapalayam, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
