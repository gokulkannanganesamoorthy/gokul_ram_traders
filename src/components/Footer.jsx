export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-brand-black/5">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-10 px-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">G</span>
          </div>
          <span className="font-bold tracking-tighter uppercase text-lg">Gokul Ram Traders</span>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 text-center">
          Trusted Electrical & Plumbing Dealers in Rajapalayam
        </p>

        <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gray-400">
          © 2024 Gokul Ram Traders.
        </p>
      </div>
    </footer>
  )
}
