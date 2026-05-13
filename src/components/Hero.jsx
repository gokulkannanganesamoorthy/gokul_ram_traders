import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center pt-20 bg-white">
      <div className="container-wide text-center">
        <div className={`mb-12 transition-all duration-1000 delay-200 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">
            Wholesale Quality. Every Scale. Since 2013.
          </p>
        </div>

        <h1 className={`text-[clamp(3.5rem,12vw,14.5rem)] font-light leading-[0.85] tracking-tighter mb-12 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          Gokul Ram
          <br />
          <span className="font-medium italic">Electricals</span>
        </h1>

        <div className={`flex flex-col items-center gap-10 transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="max-w-md">
            <p className="text-brand-gray-600 text-lg font-medium leading-relaxed">
              Premium infrastructure materials at <span className="text-brand-black">wholesale prices</span>, 
              available for both bulk orders and individual requirements.
            </p>
          </div>
          
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
