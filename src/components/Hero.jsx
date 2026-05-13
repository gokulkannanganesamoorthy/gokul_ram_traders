import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section 
      id="hero" 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden bg-[radial-gradient(circle_at_center,_var(--color-brand-white)_0%,_var(--color-brand-bg)_100%)]"
    >
      {/* Ethereal background blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-black/5 rounded-full blur-[150px]" />

      <div className={`text-center max-w-5xl transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
        <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-light leading-[0.85] tracking-tight mb-12">
          Gokul Ram<br />
          <span className="font-medium">Electricals.</span>
        </h1>

        <p className="text-xl md:text-2xl text-brand-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-16">
          Architectural grade infrastructure for those who demand durability and premium performance.
        </p>

        <div className="flex justify-center">
          <a href="#contact" className="px-12 py-6 bg-brand-black text-brand-white rounded-full font-medium shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg">
            Direct Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}
