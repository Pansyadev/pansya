import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
          PANDE
        </Link>

        {/* Menu untuk Desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/workflows" className="text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900">
            Workflows
          </Link>
          <Link href="/portofolio" className="text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900">
            Portofolio
          </Link>
          <Link href="/tentang" className="text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900">
            Tentang
          </Link>
        </div>

        {/* Tombol Kontak untuk Desktop */}
        <div className="hidden lg:flex">
          <Link href="/kontak" className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
            Hubungi Saya
          </Link>
        </div>

        {/* Hamburger Menu Icon untuk Mobile (Fungsionalitas akan ditambahkan nanti) */}
        <div className="lg:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-slate-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;