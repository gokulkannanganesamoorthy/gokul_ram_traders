import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="contact" ref={ref} className="section-padding bg-white">
      <div className="container-wide">
        <div className={`glass rounded-[60px] p-16 md:p-32 text-center transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-12">Next Steps</p>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-16 leading-tight">
            Ready to <span className="font-medium italic">power</span><br />your vision?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 mb-2">Call Direct</p>
              <a href="tel:+919876543210" className="text-3xl font-medium hover:text-brand-accent transition-colors">+91 98765 43210</a>
            </div>
            <div className="w-px h-12 bg-brand-black/10 hidden md:block" />
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-widest font-bold text-brand-gray-400 mb-2">Write to us</p>
              <a href="mailto:hello@gokulram.com" className="text-3xl font-medium hover:text-brand-accent transition-colors">hello@gokulram.com</a>
            </div>
          </div>

          <div className="mt-20">
            <button className="px-16 py-6 bg-brand-black text-brand-white rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Get Custom Quote
            </button>
          </div>
        </div>

        <div className={`mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div>
            <h4 className="font-bold mb-4">Rajapalayam Headquarters</h4>
            <p className="text-brand-gray-600 leading-relaxed">
              Opposite New Bus Stand,<br />
              Rajapalayam, Tamil Nadu 626117
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Business Hours</h4>
            <p className="text-brand-gray-600 leading-relaxed">
              Mon — Sat: 09:00 - 20:00<br />
              Sunday: By Appointment
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Progress</h4>
            <div className="flex gap-6">
              <a href="#" className="text-brand-gray-400 hover:text-brand-black transition-colors">Instagram</a>
              <a href="#" className="text-brand-gray-400 hover:text-brand-black transition-colors">LinkedIn</a>
              <a href="#" className="text-brand-gray-400 hover:text-brand-black transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
