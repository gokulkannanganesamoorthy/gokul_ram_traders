import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const REASONS = [
  { num: '01', title: '15 Years', desc: 'Long-standing reputation built on reliability and honest pricing since 2009.' },
  { num: '02', title: 'Genuine', desc: '100% authentic products. Sourced directly from authorized distributors. No imitations.' },
  { num: '03', title: 'Wholesale', desc: 'We operate on wholesale margins. You pay less whether buying single items or bulk.' },
  { num: '04', title: 'Support', desc: 'Deep product knowledge. We help you choose right and estimate quantities accurately.' },
  { num: '05', title: 'Quality', desc: 'Materials that stand the test of time. Because cheap alternatives cost more later.' },
]

function ChapterNumber({ reason, index, total, scrollYProgress }) {
  const step = 1 / total
  const start = index * step
  const end = start + step
  
  // small crossfade window
  const op = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0])

  return (
    <motion.h2 
      className="absolute text-white font-black leading-none tracking-tighter"
      style={{ 
        opacity: op,
        fontFamily: 'Inter, sans-serif', 
        fontSize: 'clamp(8rem, 25vw, 30rem)' 
      }}
    >
      {reason.num}
    </motion.h2>
  )
}

export default function WhyUs() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // The right side scrolls up twice as fast relative to the sticky container
  const rightY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <section ref={containerRef} id="why-us" className="relative h-[500vh] bg-[#0A0A0A]">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Massive Sticky Numbers */}
        <div className="w-full md:w-1/2 h-1/3 md:h-full flex items-center justify-center relative border-b md:border-b-0 md:border-r border-[#262626]">
          {REASONS.map((reason, i) => (
            <ChapterNumber 
              key={reason.num} 
              reason={reason} 
              index={i} 
              total={REASONS.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
          
          <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
            <p className="type-label text-[#525252]">
              Why Choose Us
            </p>
          </div>
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="w-full md:w-1/2 h-2/3 md:h-full relative overflow-hidden">
          {/* We need the right content to be exactly 500vh high so it scrolls cleanly mapped to the 500vh section */}
          <motion.div 
            style={{ y: rightY, height: '500vh' }}
            className="absolute top-0 left-0 w-full flex flex-col"
          >
            {REASONS.map((reason) => (
              <div 
                key={reason.title} 
                className="h-[100vh] flex flex-col justify-center px-8 md:px-24"
              >
                <h3 
                  className="text-white font-black uppercase tracking-tighter mb-6 leading-[0.8]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(4rem, 10vw, 12rem)' }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-[#A3A3A3] text-xl md:text-3xl font-medium leading-snug max-w-lg"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
                >
                  {reason.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
