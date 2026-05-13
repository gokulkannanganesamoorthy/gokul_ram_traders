import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-32 bg-[#0A0F1E] overflow-hidden">
      {/* Large glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-[#F5A623]/8 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* CTA Header */}
          <div ref={ref} className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="type-label text-[#F5A623]">Visit Us</span>
              <div className="w-8 h-px bg-[#F5A623]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="type-h1 text-white mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Ready to Source{' '}
              <span className="text-gradient">Quality Products?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="type-body-lg text-white/50 max-w-2xl mx-auto mb-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Walk into our store or send a bulk enquiry. Our team is ready to help
              you find the right products at the best wholesale prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="https://maps.google.com/?q=Gokul+Ram+Electricals+Rajapalayam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(245,166,35,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full bg-[#F5A623] text-[#0A0F1E] font-bold inline-flex items-center gap-2 transition-all"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Get Directions
              </motion.a>
              <motion.a
                href="tel:+91"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full glass text-white font-semibold inline-flex items-center gap-2 hover:border-[#F5A623]/40 transition-all"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#F5A623]">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {/* Address */}
            <div className="glass-amber rounded-3xl p-8 col-span-1 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/15 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#F5A623"/>
                  </svg>
                </div>
                <div>
                  <p className="type-label text-[#F5A623] mb-2">Store Address</p>
                  <p className="type-h4 text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Gokul Ram Electricals
                  </p>
                  <address className="not-italic type-body text-white/55 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    141 B/2, Andalpuram,<br />
                    Chatrapatti Main Road,<br />
                    Rajapalayam – 626108,<br />
                    Tamil Nadu, India
                  </address>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <circle cx="12" cy="12" r="9" stroke="#F5A623" strokeWidth="1.8"/>
                  <path d="M12 7v5l3 3" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="type-label text-[#F5A623] mb-3">Store Hours</p>
              <div className="space-y-2">
                <div className="flex justify-between type-body-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-white/50">Mon – Sat</span>
                  <span className="text-white">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between type-body-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-white/50">Sunday</span>
                  <span className="text-[#F5A623]">Closed</span>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-white/8">
                <span className="inline-flex items-center gap-1.5 type-label">
                  <span className="w-1.5 h-1.5 bg-[#34D399] rounded-full animate-pulse" />
                  <span className="text-[#34D399]">Open Now</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tagline strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="type-label text-white/25 tracking-widest">
              QUALITY YOU CAN TRUST · PRICES YOU'LL LOVE · 15+ YEARS OF SERVICE
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/20 to-transparent" />
    </section>
  )
}
