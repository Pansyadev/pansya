import Link from "next/link";

const nav = [
  { href: "/workflows", label: "Workflows" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

const socials = [
  {
    href: "https://github.com/your-handle",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.84 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.67-.3-5.48-1.33-5.48-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .33.22.7.83.58A12 12 0 0 0 12 .5Z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/your-handle",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5Zm.02 6H2V22h3V9.5ZM9 9.5H6v12h3v-6.5c0-1.72.9-2.83 2.36-2.83 1.09 0 1.64.77 1.64 2.83V21.5h3V15c0-3.62-1.93-5.3-4.51-5.3-2.07 0-3 .93-3.49 1.85H9V9.5Z"
        />
      </svg>
    ),
  },
  {
    href: "https://x.com/your-handle",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M18.9 2H22l-7.02 8.02L23.5 22h-5.9l-4.62-5.97L7.6 22H2l7.5-8.56L2.7 2h5.98l4.18 5.54L18.9 2Zm-2.06 18h1.26L7.23 4h-1.3l10.9 16Z"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50/70 border-t border-slate-200 dark:bg-teal-700 dark:border-slate-900">
      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white text-sm font-bold">
                N8
              </span>
              <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
                N8N Pro Dev
              </span>
            </Link>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-100/80 max-w-prose mx-auto md:mx-0">
              Spesialis otomasi n8n dan integrasi sistem. Workflow rapi, operasional lebih efisien, tanpa drama.
            </p>

            {/* Socials: 44px tap target */}
            <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-teal-700 hover:border-teal-200 transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100/90 dark:hover:text-white dark:focus:ring-offset-teal-700"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="pt-6 border-t border-slate-200 md:border-none md:pt-0 text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Navigasi</h3>
            <ul className="mt-3 sm:mt-4 space-y-2.5">
              {nav.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="inline-flex min-h-[40px] items-center justify-center md:justify-start rounded px-2 text-sm text-slate-700 hover:text-teal-700 hover:bg-slate-100/60 transition dark:text-slate-100/90 dark:hover:text-white dark:hover:bg-white/10"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-slate-200 md:border-none md:pt-0 text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Kontak</h3>
            <ul className="mt-3 sm:mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="mailto:hello@yourdomain.com"
                  className="inline-flex min-h-[40px] items-center justify-center md:justify-start rounded px-2 text-slate-700 hover:text-teal-700 hover:bg-slate-100/60 transition dark:text-slate-100/90 dark:hover:text-white dark:hover:bg-white/10"
                >
                  hello@yourdomain.com
                </Link>
              </li>
              <li className="text-slate-700 dark:text-slate-100/90">Jakarta, Indonesia</li>
              <li className="text-slate-700 dark:text-slate-100/90">Sen–Jum: 09.00–17.00 WIB</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar (safe-area padding untuk iOS) */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col md:flex-row md:items-center md:justify-between"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
        >
          <p className="text-[11px] sm:text-xs text-center md:text-left text-slate-500 dark:text-slate-100/80">
            &copy; {year} N8N Pro Dev. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex items-center justify-center gap-5">
            <a
              href="#top"
              className="text-[11px] sm:text-xs text-slate-500 hover:text-teal-700 transition dark:text-slate-100/80 dark:hover:text-white"
            >
              Kembali ke atas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
