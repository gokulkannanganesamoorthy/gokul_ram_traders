import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

export default function Stats() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Mapping scroll progress to individual stats
  // Stat 1: 0 to 0.25
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0])
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [0.8, 1.2])
  const blurValue1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [10, 0, 0, 10])
  const blur1 = useMotionTemplate`blur(${blurValue1}px)`

  // Stat 2: 0.25 to 0.50
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.55], [0, 1, 1, 0])
  const scale2 = useTransform(scrollYProgress, [0.2, 0.55], [0.8, 1.2])
  const blurValue2 = useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.55], [10, 0, 0, 10])
  const blur2 = useMotionTemplate`blur(${blurValue2}px)`

  // Stat 3: 0.50 to 0.75
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.8], [0, 1, 1, 0])
  const scale3 = useTransform(scrollYProgress, [0.45, 0.8], [0.8, 1.2])
  const blurValue3 = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.8], [10, 0, 0, 10])
  const blur3 = useMotionTemplate`blur(${blurValue3}px)`

  // Stat 4: 0.75 to 1.00
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.85, 0.95, 1], [0, 1, 1, 0])
  const scale4 = useTransform(scrollYProgress, [0.7, 1], [0.8, 1.2])
  const blurValue4 = useTransform(scrollYProgress, [0.7, 0.85, 0.95, 1], [10, 0, 0, 10])
  const blur4 = useMotionTemplate`blur(${blurValue4}px)`

  return (
    <section ref={containerRef} id="stats" className="relative h-[400vh] bg-white">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full overflow-hidden flex items-center justify-center">
        
        {/* Progress bar line to indicate scrolling */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-[#E5E5E5]">
          <motion.div 
            className="w-full bg-[#0A0A0A] origin-top"
            style={{ height: '100%', scaleY: scrollYProgress }}
          />
        </div>

        {/* Stat 1 */}
        <motion.div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={{ opacity: opacity1, scale: scale1, filter: blur1 }}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(5rem, 15vw, 20rem)' }}
          >
            15+
          </h2>
          <p className="type-label text-[#737373] mt-4">Years of service</p>
        </motion.div>

        {/* Stat 2 */}
        <motion.div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={{ opacity: opacity2, scale: scale2, filter: blur2 }}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(5rem, 15vw, 20rem)' }}
          >
            500+
          </h2>
          <p className="type-label text-[#737373] mt-4">Products stocked</p>
        </motion.div>

        {/* Stat 3 */}
        <motion.div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={{ opacity: opacity3, scale: scale3, filter: blur3 }}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(5rem, 15vw, 20rem)' }}
          >
            06+
          </h2>
          <p className="type-label text-[#737373] mt-4">Premium brands</p>
        </motion.div>

        {/* Stat 4 */}
        <motion.div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={{ opacity: opacity4, scale: scale4, filter: blur4 }}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(5rem, 15vw, 20rem)' }}
          >
            1K+
          </h2>
          <p className="type-label text-[#737373] mt-4">Customers served</p>
        </motion.div>

      </div>
    </section>
  )
}
