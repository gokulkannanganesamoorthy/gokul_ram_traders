import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

export default function CTA() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // The massive text fades and blurs out as you scroll down
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.5])
  
  const textBlurValue = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0, 40])
  const textBlur = useMotionTemplate`blur(${textBlurValue}px)`

  // The contact details fade in sharply at the end
  const detailsOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1])
  const detailsY = useTransform(scrollYProgress, [0.6, 0.9], ['20%', '0%'])

  return (
    <section ref={containerRef} id="contact" className="relative h-[200vh] bg-white">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full overflow-hidden flex items-center justify-center">
        
        {/* Massive Foreground Text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          style={{ opacity: textOpacity, scale: textScale, filter: textBlur }}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter text-center leading-[0.8]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(5rem, 20vw, 25rem)' }}
          >
            Find
            <br />
            Us.
          </h2>
        </motion.div>

        {/* Contact Details (revealed underneath) */}
        <motion.div 
          className="absolute z-10 w-full max-w-5xl px-6 flex flex-col md:flex-row gap-16 md:gap-32"
          style={{ opacity: detailsOpacity, y: detailsY }}
        >
          <div className="flex-1">
            <p className="type-label text-[#737373] mb-6">Store Location</p>
            <address className="not-italic text-[#0A0A0A] font-semibold text-2xl md:text-4xl leading-tight" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              Gokul Ram Electricals<br/>
              141 B/2, Andalpuram<br/>
              Chatrapatti Main Road<br/>
              Rajapalayam - 626108
            </address>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="type-label text-[#737373] mb-6">Operations</p>
              <div className="flex justify-between items-center text-[#0A0A0A] font-medium text-xl md:text-2xl mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>Mon – Sat</span>
                <span>9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-[#A3A3A3] font-medium text-xl md:text-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a 
                href="https://maps.google.com/?q=141+B/2+Andalpuram+Chatrapatti+Main+Road+Rajapalayam+Tamil+Nadu+626108" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0A0A0A] text-white font-medium px-8 py-4 rounded-full hover:bg-[#262626] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Directions
              </a>
              <a 
                href="tel:+91" 
                className="border border-[#D4D4D4] text-[#0A0A0A] font-medium px-8 py-4 rounded-full hover:border-[#0A0A0A] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
