import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Graphic Detail */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden hidden lg:block">
         <div className="text-[30rem] font-black leading-none translate-x-1/4 translate-y-1/4">
            QUOTE
         </div>
      </div>

      <div className="container-wide">
        <div className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400 mb-8">
              Engagement
            </p>
            <h2 className="text-6xl md:text-[8rem] font-light tracking-tighter mb-24 leading-[0.9]">
              Sourcing for a <br />
              <span className="font-medium italic">new project?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Primary Contact Link */}
            <div className="lg:col-span-7 group">
              <a 
                href="tel:+919364501230"
                className="block p-12 md:p-20 bg-brand-black text-brand-white rounded-[40px] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Direct Line</p>
                  <div>
                    <h3 className="text-4xl md:text-7xl font-light tracking-tighter mb-4">Call our experts.</h3>
                    <p className="text-xl font-mono tracking-tighter">+91 93645 01230</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center self-end group-hover:scale-125 transition-transform duration-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                       <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Visual texture */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-white/10 transition-colors" />
              </a>
            </div>

            {/* Secondary Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* WhatsApp Support */}
              <a 
                href="https://wa.me/919364501230?text=Hello%20Gokul%20Ram%20Electricals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-12 bg-brand-gray-100 rounded-[40px] hover:bg-brand-gray-100/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400">WhatsApp</span>
                  <div className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:text-white">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-2xl font-medium tracking-tight">Direct Message Support</h4>
              </a>

              {/* Email & Location */}
              <div className="flex-1 p-12 border border-brand-black/10 rounded-[40px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-4">Official Mail</span>
                  <a href="mailto:mecrjpm@gmail.com" className="text-lg font-medium hover:text-brand-gray-400 transition-colors">mecrjpm@gmail.com</a>
                </div>
                <div className="mt-8 pt-8 border-t border-brand-black/5">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-4">Location</span>
                  <p className="text-sm font-medium leading-relaxed">
                    141 B/2 Andalpuram,<br />
                    Rajapalayam 626108.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
