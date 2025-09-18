"use client"; // <-- LANGKAH 1: MENAMBAHKAN "USE CLIENT"

import { useState } from 'react'; // <-- LANGKAH 2: IMPORT USESTATE
import Link from 'next/link';

const Navbar = () => {
  // LANGKAH 3: MEMBUAT "INGATAN" ATAU STATE
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
          Pansya
        </Link>
        
        {/* Menu untuk Desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/workflows" className="text-sm font-semibold leading-6 text-slate-700 hover:text-teal-600 ">
            Workflows
          </Link>
          <Link href="/portofolio" className="text-sm font-semibold leading-6 text-slate-700 hover:text-teal-600 ">
            Portofolio
          </Link>
          <Link href="/tentang" className="text-sm font-semibold leading-6 text-slate-700 hover:text-teal-600 ">
            Tentang
          </Link>
        </div>

        {/* Tombol Kontak untuk Desktop */}
        <div className="hidden lg:flex">
          <Link href="/kontak" className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500">
            Hubungi Saya
          </Link>
        </div>

        {/* Tombol Hamburger Menu untuk Mobile */}
        <div className="lg:hidden">
          {/* LANGKAH 4: TAMBAHKAN ONCLICK UNTUK MENGUBAH STATE */}
          <button 
            type="button" 
            className="inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state saat di-klik
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* LANGKAH 5: TAMPILKAN MENU MOBILE JIKA STATE isMenuOpen == true */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/workflows" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-teal-100">Workflows</Link>
          <Link href="/portofolio" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-teal-100">Portofolio</Link>
          <Link href="/tentang" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-teal-100">Tentang</Link>
          <Link href="/kontak" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-teal-100">Hubungi Saya</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;