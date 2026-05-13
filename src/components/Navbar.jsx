import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Brands',   href: '#brands'   },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border-b border-[#E5E5E5]'
            : 'bg-transparent'
        }`}
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Gokul Ram Electricals — Home"
          >
            <div className="w-7 h-7 bg-[#0A0A0A] rounded-sm flex items-center justify-center">
              <span className="text-white text-sm font-semibold leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>G</span>
            </div>
            <span className="text-[#0A0A0A] font-semibold text-sm tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Gokul Ram Electricals
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[#525252] hover:text-[#0A0A0A] transition-colors duration-200 text-sm font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0A0A0A] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#262626] transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-px w-full bg-[#0A0A0A] origin-center"
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-full bg-[#0A0A0A]"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-px w-full bg-[#0A0A0A] origin-center"
                transition={{ duration: 0.25 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6"
          >
            <nav className="flex flex-col gap-px border-t border-[#E5E5E5]">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between py-5 border-b border-[#E5E5E5] text-left text-lg font-medium text-[#0A0A0A]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              ))}
            </nav>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              onClick={() => scrollTo('#contact')}
              className="mt-8 w-full bg-[#0A0A0A] text-white font-medium py-4 rounded-full text-base"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
