import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BADGES = [
  { icon: '⚡', label: 'Wiring & Cables' },
  { icon: '💧', label: 'Pipes & Fittings' },
  { icon: '🌀', label: 'Fans & Motors' },
  { icon: '🔌', label: 'Switches' },
  { icon: '🔧', label: 'Plumbing' },
]

function CircuitGrid() {
  return (
    <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
  )
}

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 6 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    />
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050810]"
    >
      <CircuitGrid />

      {/* Ambient orbs */}
      <FloatingOrb className="w-[600px] h-[600px] bg-amber-500/10 -top-40 -right-40" delay={0} />
      <FloatingOrb className="w-[400px] h-[400px] bg-blue-600/8 bottom-20 -left-20"  delay={2} />
      <FloatingOrb className="w-[300px] h-[300px] bg-amber-400/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={4} />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-[#050810] opacity-80 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-[pulse-slow_4s_ease-in-out_infinite]" />
              <span className="type-label text-[#F5A623]">Rajapalayam · Tamil Nadu</span>
            </span>
            <span className="hidden sm:inline type-label text-white/30">Est. 2009</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="type-display text-white mb-6">
            Tamil Nadu's{' '}
            <span className="text-gradient block sm:inline">Most Trusted</span>
            <br className="hidden sm:block" />
            {' '}Electrical{' '}
            <span className="relative inline-block">
              Wholesaler
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A623] to-[#FFC947] origin-left rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="type-body-lg text-white/55 max-w-2xl mb-10 leading-relaxed">
            15+ years delivering genuine branded electrical, plumbing, wiring, and
            motor products at unbeatable wholesale prices. Quality you can trust,
            prices you'll love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(245,166,35,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-[#F5A623] text-[#0A0F1E] font-bold text-base inline-flex items-center gap-2 transition-all"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Explore Products
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full glass text-white font-semibold text-base inline-flex items-center gap-2 hover:border-[#F5A623]/40 transition-all"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Visit Our Store
            </motion.a>
          </motion.div>

          {/* Product category badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {BADGES.map((b, i) => (
              <motion.span
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + i * 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[#F5A623]/30 transition-all cursor-default"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating stat cards */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
          {[
            { value: '15+', label: 'Years of Trust' },
            { value: '500+', label: 'Products' },
            { value: '6+', label: 'Top Brands' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, x: -4 }}
              className="glass-amber rounded-2xl px-6 py-5 text-right min-w-[140px]"
            >
              <div className="type-h2 text-gradient" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.value}</div>
              <div className="type-body-sm text-white/50 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="type-label text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#F5A623] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
