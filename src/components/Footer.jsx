export default function Footer() {
  return (
    <footer className="bg-brand-white border-t border-brand-gray-200 py-12">
      <div className="container-wide px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <span className="font-black uppercase tracking-tighter text-xl">Gokul Ram Traders</span>
          <span className="text-brand-gray-200 hidden md:block">|</span>
          <p className="text-[10px] text-brand-gray-400 uppercase font-bold tracking-[0.2em]">Best Electrical Shop in Tamil Nadu</p>
        </div>
        
        <div className="flex gap-8">
          {['Instagram', 'WhatsApp', 'LinkedIn'].map(social => (
            <a key={social} href="#" className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-600 hover:text-brand-black transition-colors">
              {social}
            </a>
          ))}
        </div>

        <p className="text-[10px] text-brand-gray-400 uppercase font-bold tracking-widest">
          © 2024 Gokul Ram Traders.
        </p>
      </div>
    </footer>
  )
}
