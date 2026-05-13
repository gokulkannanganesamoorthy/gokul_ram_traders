import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Products from './components/Products'
import BrandShowcase from './components/BrandShowcase'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen bg-[#050810] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <BrandShowcase />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
