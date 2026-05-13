import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Hero — Best Electrical Shop in Tamil Nadu"
      className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-14"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.35,
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="type-label text-[#737373] mb-8"
          >
            Rajapalayam, Tamil Nadu — Since 2009
          </motion.p>

          {/* Main headline — SEO h1 */}
          <motion.h1
            variants={fadeUp}
            className="type-display text-[#0A0A0A] mb-8 max-w-4xl"
          >
            The Best
            <br />
            Electrical Shop
            <br />
            in Tamil Nadu.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="type-body-lg text-[#525252] max-w-xl mb-12"
          >
            15 years of trust. Genuine branded products. Wholesale pricing.
            Electrical, plumbing, wiring, motors and more — all under one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="bg-[#0A0A0A] text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-[#262626] transition-colors duration-200 inline-block"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View Products
            </a>
            <a
              href="#contact"
              className="bg-white text-[#0A0A0A] font-medium px-7 py-3.5 rounded-full text-sm border border-[#D4D4D4] hover:border-[#A3A3A3] transition-colors duration-200 inline-block"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Find Our Store
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom — key metrics bar */}
      <div className="relative z-10 border-t border-[#E5E5E5] bg-white">
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
