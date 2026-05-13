import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#0A0A0A] section-pad"
      aria-label="Contact Gokul Ram Electricals"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top */}
        <div className="border-b border-[#262626] pb-16 mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="type-label text-[#525252] mb-6"
          >
            Visit Our Store
          </motion.p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="type-h1 text-white max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ready to source quality materials?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://maps.google.com/?q=141+B/2+Andalpuram+Chatrapatti+Main+Road+Rajapalayam+Tamil+Nadu+626108"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0A0A0A] font-medium px-6 py-3 rounded-full text-sm hover:bg-[#F5F5F5] transition-colors duration-200 inline-flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/>
                </svg>
                Get Directions
              </a>
              <a
                href="tel:+91"
                className="border border-[#262626] text-white font-medium px-6 py-3 rounded-full text-sm hover:border-[#404040] transition-colors duration-200 inline-flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 2.5A1 1 0 012.5 1.5h1.6a1 1 0 01.95.68l.7 2a1 1 0 01-.23.98L4.6 6.1a9 9 0 004.3 4.3l.94-.94a1 1 0 01.98-.23l2 .7a1 1 0 01.68.95v1.6A1 1 0 0112.5 13.5C6.4 13.5.5 7.6.5 1.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
                Call Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A] rounded-2xl overflow-hidden">
          {/* Address */}
          <div className="bg-[#0A0A0A] p-8">
            <p className="type-label text-[#525252] mb-4">Store Address</p>
            <address className="not-italic">
              <p className="text-white font-medium mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Gokul Ram Electricals
              </p>
              <p className="text-[#737373] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                141 B/2, Andalpuram,<br />
                Chatrapatti Main Road,<br />
                Rajapalayam – 626108,<br />
                Tamil Nadu, India
              </p>
            </address>
          </div>

          {/* Hours */}
          <div className="bg-[#0A0A0A] p-8">
            <p className="type-label text-[#525252] mb-4">Store Hours</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#737373] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Monday – Saturday</span>
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#737373] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Sunday</span>
                <span className="text-[#525252] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Closed</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              <span className="text-white text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Open today</span>
            </div>
          </div>

          {/* Service area */}
          <div className="bg-[#0A0A0A] p-8">
            <p className="type-label text-[#525252] mb-4">We Serve</p>
            <div className="flex flex-wrap gap-2">
              {['Rajapalayam', 'Virudhunagar', 'Sivakasi', 'Tenkasi', 'Sankarankovil', 'Aruppukkottai', 'Tamil Nadu'].map((area) => (
                <span
                  key={area}
                  className="text-xs text-[#737373] border border-[#1F1F1F] px-3 py-1.5 rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="type-label text-[#404040] text-center mt-16 tracking-widest"
        >
          QUALITY YOU CAN TRUST · PRICES YOU WILL LOVE · 15 YEARS OF SERVICE
        </motion.p>
      </div>
    </section>
  )
}
