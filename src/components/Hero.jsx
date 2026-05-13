import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section 
      id="hero" 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden bg-white"
    >
      <div className={`text-center max-w-5xl relative z-20 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
        <div className="inline-flex items-center px-4 py-2 border border-brand-black/10 rounded-full mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-600">
            Trusted Dealers Since 2009
          </span>
        </div>

        <h1 className="text-[clamp(3.5rem,12vw,14.5rem)] font-light leading-[0.85] tracking-tight mb-12">
          Gokul Ram<br />
          <span className="font-medium">Electricals.</span>
        </h1>

        <p className="text-xl md:text-2xl text-brand-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-16">
          Premium Electrical & Plumbing Solutions Built For Long-Term Performance. Delivering genuine branded products to Rajapalayam for over 15 years.
        </p>

        <div className="flex justify-center">
          <a href="#contact" className="px-12 py-6 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-gray-600 transition-all shadow-xl">
            Direct Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}
