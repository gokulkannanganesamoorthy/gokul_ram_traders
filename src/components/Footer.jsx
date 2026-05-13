export default function Footer() {
  return (
    <footer className="bg-transparent pt-12 pb-6 border-t border-brand-black/5">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-12">
          <div className="flex gap-8">
            <a 
              href="https://wa.me/919364501230" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-black transition-colors"
            >
              WhatsApp
            </a>
            <a 
              href="mailto:mecrjpm@gmail.com" 
              className="hover:text-brand-black transition-colors"
            >
              Email
            </a>
          </div>
          
          <div className="text-center md:text-right space-y-1">
             <p>© {new Date().getFullYear()} GOKUL RAM ELECTRICALS</p>
             <p className="opacity-40">Industrial Grade Supply & Wholesalers</p>
          </div>
        </div>

        {/* SEO On-Page Content - Visually Subtle but SEO Powerful */}
        <div className="text-center max-w-4xl mx-auto border-t border-brand-black/5 pt-8">
          <h2 className="sr-only">Best Electrical Shop in Rajapalayam, Virudhunagar, Tamil Nadu & India</h2>
          <p className="text-[10px] text-brand-gray-400/50 leading-relaxed font-medium">
            Gokul Ram Electricals is widely recognized as the <strong>best electrical shop in Rajapalayam</strong> and the top wholesale supplier in the Virudhunagar district. Serving contractors, builders, and retailers, we are proud to be rated as the <strong>best electrical shop in Tamil Nadu</strong> for wholesale pricing, genuine inventory, and massive stock availability. With over 13 years of trusted legacy, we are scaling our operations to be acknowledged among the <strong>best electrical shops in India</strong> for industrial materials, plumbing, wiring, and heavy-duty electrical components. Visit us at Andalpuram, Chatrapatti Main Road.
          </p>
        </div>
      </div>
    </footer>
  );
}
