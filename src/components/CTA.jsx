import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="contact" ref={ref} className="section-padding bg-brand-bg">
      <div className="container-wide">
        <div className={`glass rounded-[60px] p-16 md:p-32 text-center transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-12">Contact Us</p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-16 leading-tight">
            Built on <span className="font-medium italic text-brand-accent">Trust</span>.<br />Get in touch.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 mb-2">Direct Phone</p>
              <a href="tel:+919876543210" className="text-3xl font-medium hover:text-brand-accent transition-colors">+91 98765 43210</a>
            </div>
            <div className="w-px h-12 bg-brand-black/10 hidden md:block" />
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 mb-2">WhatsApp</p>
              <a href="https://wa.me/919876543210" className="text-3xl font-medium hover:text-green-600 transition-colors">Start Chat</a>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/919876543210" className="px-16 py-6 bg-green-600 text-white rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-4">
               Message on WhatsApp
            </a>
            <a href="https://maps.google.com/?q=Gokul+Ram+Traders+Rajapalayam" target="_blank" rel="noreferrer" className="px-16 py-6 bg-brand-black text-brand-white rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-xl">
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className={`mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div>
            <h4 className="font-bold mb-4">Rajapalayam Store</h4>
            <p className="text-brand-gray-600 leading-relaxed">
              Opposite New Bus Stand,<br />
              Rajapalayam, Tamil Nadu 626117
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gray-400">Store Open Now</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Trading Hours</h4>
            <p className="text-brand-gray-600 leading-relaxed">
              Mon — Sat: 09:30 - 20:30<br />
              Sunday: 10:00 - 14:00
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="text-brand-gray-400 hover:text-brand-black transition-colors font-medium">Instagram</a>
              <a href="#" className="text-brand-gray-400 hover:text-brand-black transition-colors font-medium">LinkedIn</a>
              <a href="#" className="text-brand-gray-400 hover:text-brand-black transition-colors font-medium">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
