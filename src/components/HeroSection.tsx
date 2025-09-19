// components/HeroSection.tsx  (Server Component)
import Link from 'next/link';
import HeroIllustration from './HeroIllustration';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* background: gradient lembut */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      {/* blob samar biar tidak flat-total */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-teal-300/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-12">
        {/* Kiri: copy + CTA */}
        <div className="max-w-xl text-left">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Automasi Bisnis Cerdas dengan  <span className="text-teal-600">n8n </span> dan <span className="text-teal-600">Ai</span> Agent
            </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hemat bisnis anda dengan ai agent dan aotomatisasi.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/workflows"
              className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-teal-500"
            >
              Lihat Workflow
            </Link>
            <Link
              href="/portofolio"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Lihat Portofolio →
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Dipercaya untuk merapikan operasional, dari kasir kecil sampai tim internal.
          </p>
        </div>

        {/* Kanan: ilustrasi */}
        <div className="flex items-center justify-center">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
