"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // UBAH ANGKA 10 MENJADI 50 DI SINI
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <nav 
        className={`
          mx-auto flex max-w-7xl items-center justify-between lg:px-8 transition-all duration-150
          ${hasScrolled ? 'p-2' : 'p-4'}
        `}
      >
        <Link 
          href="/" 
          className={`
            font-bold text-teal-600 hover:text-teal-700 transition-all duration-200
            ${hasScrolled ? 'text-lg' : 'text-xl'}
          `}
        >
          Pansya
        </Link>
        
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

        <div className="hidden lg:flex">
          <Link 
            href="/kontak" 
            className={`
              rounded-md bg-teal-600 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-all duration-200
              ${hasScrolled ? 'px-3 py-1.5' : 'px-3.5 py-2.5'}
            `}
          >
            Hubungi Saya
          </Link>
        </div>

        <div className="lg:hidden">
          <button 
            type="button" 
            className="inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2 bg-white/95 backdrop-blur-md border-t border-slate-200">
          <Link href="/workflows" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">Workflows</Link>
          <Link href="/portofolio" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">Portofolio</Link>
          <Link href="/tentang" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">Tentang</Link>
          <Link href="/kontak" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">Hubungi Saya</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;