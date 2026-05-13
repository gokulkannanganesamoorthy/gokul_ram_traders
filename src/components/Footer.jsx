export default function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-brand-black/5">
      <div className="container-wide px-6">
        <div className="flex flex-col items-center text-center gap-12">
          <div className="space-y-4">
            <h3 className="font-bold tracking-[0.2em] uppercase text-2xl">
              Gokul Ram Traders
            </h3>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">
              Trusted Electrical & Plumbing Dealers in Rajapalayam
            </p>
          </div>

          <div className="w-full h-px bg-brand-black/5" />

          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-600">
            © {new Date().getFullYear()} GOKUL RAM TRADERS
          </p>
        </div>
      </div>
    </footer>
  );
}
