import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="contact" ref={ref} className="section-padding bg-white border-t border-brand-black/5">
      <div className="container-wide">
        <div className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-12 text-center">Contact</p>
          <h2 className="text-6xl md:text-[10rem] font-light tracking-tighter mb-24 leading-[0.8] text-center">
            Let's Start<br />A Project.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/10 border border-brand-black/10 overflow-hidden">
            <div className="bg-white p-12 md:p-20">
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-400 mb-8">Inquiry</p>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="text-3xl md:text-5xl font-light hover:text-brand-gray-600 transition-all block tracking-tighter">+91 98765 43210</a>
                <a href="mailto:hello@gokulram.com" className="text-2xl md:text-3xl font-light hover:text-brand-gray-600 transition-all block tracking-tighter">hello@gokulram.com</a>
              </div>
            </div>
            <div className="bg-white p-12 md:p-20">
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-400 mb-8">Support</p>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">WhatsApp</h4>
                  <a href="https://wa.me/919876543210" className="text-xl font-medium underline underline-offset-8 decoration-brand-black/10 hover:decoration-brand-black transition-all">Direct Message</a>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Office</h4>
                  <p className="text-brand-gray-600 leading-relaxed max-w-xs">Opposite New Bus Stand, Rajapalayam, Tamil Nadu 626117</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
             <a href="https://maps.google.com/?q=Gokul+Ram+Traders+Rajapalayam" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-[0.3em] border-b-2 border-brand-black pb-2 hover:text-brand-gray-400 hover:border-brand-gray-400 transition-all">
                Open Location in Maps
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
