import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

const BRANDS = ['Supreme', 'Crompton', 'V-Guard', 'Goldmedal', 'HiFi']

function BrandItem({ brand, index, total, scrollYProgress }) {
  const chunk = 1 / total
  const start = index * chunk
  const peak = start + (chunk / 2)
  const end = start + chunk

  // Add a little overlap
  const op = useTransform(scrollYProgress, [start - 0.1, peak, end + 0.1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [start - 0.1, end + 0.1], [0.8, 1.5])
  
  const blurValue = useTransform(scrollYProgress, [start - 0.1, peak, end + 0.1], [20, 0, 20])

  return (
    <motion.div 
      className="absolute text-[#0A0A0A] font-black uppercase tracking-tighter text-center w-full px-4 leading-[0.8] text-[clamp(4rem,15vw,18rem)]"
      style={{ 
        opacity: op, 
        scale, 
        blur: blurValue,
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {brand}
    </motion.div>
  )
}

export default function BrandShowcase() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  return (
    <section ref={containerRef} id="brands" className="relative h-[400vh] bg-white border-t border-[#E5E5E5]">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full overflow-hidden flex items-center justify-center">
        
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
          <p className="type-label text-[#737373]">
            Verified Partners
          </p>
        </div>

        {BRANDS.map((brand, i) => (
          <BrandItem 
            key={brand} 
            brand={brand} 
            index={i} 
            total={BRANDS.length} 
            scrollYProgress={scrollYProgress} 
          />
        ))}

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <p className="type-label text-[#A3A3A3] text-center max-w-xs">
            100% genuine products sourced directly from authorized distributors.
          </p>
        </div>

      </div>
    </section>
  )
}
