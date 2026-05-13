import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Products() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Horizontal parallax for the massive text
  const x1 = useTransform(scrollYProgress, [0, 1], ['100%', '-100%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['50%', '-150%'])
  const x3 = useTransform(scrollYProgress, [0, 1], ['0%', '-200%'])
  const x4 = useTransform(scrollYProgress, [0, 1], ['-50%', '-250%'])

  // Opacity for the descriptions that fade in when their title is near center
  const getOpacity = (start, peak, end) => 
    useTransform(scrollYProgress, [start, peak, peak+0.1, end], [0, 1, 1, 0])

  const op1 = getOpacity(0, 0.15, 0.35)
  const op2 = getOpacity(0.2, 0.4, 0.6)
  const op3 = getOpacity(0.45, 0.65, 0.85)
  const op4 = getOpacity(0.7, 0.85, 1)

  return (
    <section ref={containerRef} id="products" className="relative h-[400vh] bg-white border-t border-[#E5E5E5]">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full overflow-hidden flex flex-col justify-center">
        
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
          <p className="type-label text-[#737373]">
            Our Catalog
          </p>
        </div>

        {/* Massive Text Tracks */}
        <div className="relative w-full h-[60vh] flex flex-col justify-center">
          
          <motion.h2 
            className="absolute top-0 text-[#0A0A0A] font-black uppercase tracking-tighter whitespace-nowrap"
            style={{ x: x1, fontFamily: 'Inter, sans-serif', fontSize: 'clamp(6rem, 20vw, 25rem)', lineHeight: 0.8 }}
          >
            WIRING
          </motion.h2>

          <motion.h2 
            className="absolute top-1/4 text-[#E5E5E5] font-black uppercase tracking-tighter whitespace-nowrap"
            style={{ x: x2, fontFamily: 'Inter, sans-serif', fontSize: 'clamp(6rem, 20vw, 25rem)', lineHeight: 0.8 }}
          >
            PIPES
          </motion.h2>

          <motion.h2 
            className="absolute top-2/4 text-[#0A0A0A] font-black uppercase tracking-tighter whitespace-nowrap"
            style={{ x: x3, fontFamily: 'Inter, sans-serif', fontSize: 'clamp(6rem, 20vw, 25rem)', lineHeight: 0.8 }}
          >
            MOTORS
          </motion.h2>

          <motion.h2 
            className="absolute top-3/4 text-[#E5E5E5] font-black uppercase tracking-tighter whitespace-nowrap"
            style={{ x: x4, fontFamily: 'Inter, sans-serif', fontSize: 'clamp(6rem, 20vw, 25rem)', lineHeight: 0.8 }}
          >
            SWITCHES
          </motion.h2>

        </div>

        {/* Floating Descriptions */}
        <div className="absolute bottom-12 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl text-center flex items-center justify-center h-32">
          <motion.p style={{ opacity: op1 }} className="absolute type-body-lg text-[#525252]">
            <strong className="text-[#0A0A0A]">Wiring & Cables:</strong> Premium-grade house wiring and industrial cables.
          </motion.p>
          <motion.p style={{ opacity: op2 }} className="absolute type-body-lg text-[#525252]">
            <strong className="text-[#0A0A0A]">Pipes & Fittings:</strong> Supreme-brand CPVC and PVC piping solutions.
          </motion.p>
          <motion.p style={{ opacity: op3 }} className="absolute type-body-lg text-[#525252]">
            <strong className="text-[#0A0A0A]">Motors & Fans:</strong> Energy-efficient circulation and pumping from Crompton.
          </motion.p>
          <motion.p style={{ opacity: op4 }} className="absolute type-body-lg text-[#525252]">
            <strong className="text-[#0A0A0A]">Switches:</strong> Architectural modular devices from HiFi and Goldmedal.
          </motion.p>
        </div>

      </div>
    </section>
  )
}
