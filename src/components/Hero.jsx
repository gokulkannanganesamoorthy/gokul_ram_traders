import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Decorative Side Tagline */}
      <div className="hidden lg:block absolute left-12 bottom-32 origin-left -rotate-90">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400">
          Industrial Grade &bull; Rajapalayam &bull; Since 2013
        </p>
      </div>

      <div className="container-wide relative z-10 text-center">
        <div className={`mb-8 transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <span className="px-6 py-2 rounded-full border border-brand-black/10 text-[10px] uppercase tracking-widest font-bold text-brand-black">
            Authorized Wholesale Dealer
          </span>
        </div>

        <h1 className={`text-[clamp(3.5rem,12vw,14.5rem)] font-light leading-[0.85] tracking-tight mb-16 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          Gokul Ram
          <br />
          <span className="font-medium italic">Electricals</span>
        </h1>

        <div className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
          <p className="text-brand-gray-600 max-w-[200px] text-left text-sm leading-snug font-medium border-l border-brand-black/10 pl-6">
            Supplying premium infrastructure materials to Tamil Nadu.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
           <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-400">Explore</span>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
      </div>
    </section>
  )
}
