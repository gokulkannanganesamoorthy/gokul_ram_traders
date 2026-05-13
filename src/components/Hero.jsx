import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Scroll animations for typography
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0])
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ['-0.05em', '0.05em'])
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(8px)'])

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      className="relative h-[150vh] bg-white pt-14"
      aria-label="Hero — Best Electrical Shop in Tamil Nadu"
    >
      {/* Sticky container holds the text while user scrolls */}
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        
        <motion.div 
          style={{ y, opacity, filter }}
          className="text-center px-4 w-full max-w-[90vw]"
        >
          <motion.h1 
            className="text-[#0A0A0A] font-black uppercase leading-[0.8] whitespace-nowrap"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 'clamp(3.5rem, 12vw, 15rem)',
              letterSpacing
            }}
          >
            The Best
          </motion.h1>
          <motion.h1 
            className="text-[#0A0A0A] font-black uppercase leading-[0.8] whitespace-nowrap"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 'clamp(3.5rem, 12vw, 15rem)',
              letterSpacing
            }}
          >
            Electrical
          </motion.h1>
          <motion.h1 
            className="text-[#0A0A0A] font-black uppercase leading-[0.8] whitespace-nowrap"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 'clamp(3.5rem, 12vw, 15rem)',
              letterSpacing
            }}
          >
            Shop.
          </motion.h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <p className="type-label text-[#737373]">Scroll to explore</p>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-[#0A0A0A]"
          />
        </motion.div>
      </div>

      {/* Metrics bar sitting at the very bottom of the 150vh section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#E5E5E5] bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E5E5]">
            {[
              { value: '15+', label: 'Years of service' },
              { value: '500+', label: 'Products stocked' },
              { value: '6+', label: 'Premium brands' },
              { value: '1,000+', label: 'Customers served' },
            ].map((item) => (
              <div key={item.label} className="px-8 py-7">
                <p
                  className="text-[#0A0A0A] font-semibold mb-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}
                >
                  {item.value}
                </p>
                <p className="type-label text-[#737373]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
