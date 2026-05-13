import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ once: true })
  const [visitorCount, setVisitorCount] = useState(1242)

  // Real-time "Simulation"
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(v => v + Math.floor(Math.random() * 2))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-black/5 shadow-sm mb-12">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-600">
            Live: {visitorCount.toLocaleString()} Experts Browsing
          </span>
        </div>

        <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-light leading-[0.85] tracking-tight mb-12">
          Gokul Ram<br />
          <span className="font-medium">Electricals.</span>
        </h1>

        <p className="text-xl md:text-2xl text-brand-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-16">
          Architectural grade infrastructure for those who demand durability and premium performance.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#products" className="px-10 py-5 bg-brand-black text-brand-white rounded-full font-medium shadow-2xl hover:scale-105 active:scale-95 transition-all">
            Explore Portfolio
          </a>
          <a href="#contact" className="px-10 py-5 bg-white border border-brand-black/5 rounded-full font-medium hover:bg-brand-gray-100 transition-all">
            Direct Inquiry
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-brand-black" />
      </div>
    </section>
  )
}
