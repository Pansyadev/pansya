import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Automasi Bisnis Cerdas dengan Workflow n8n Profesional
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Saya membantu bisnis seperti Anda menghemat waktu dan mengurangi biaya operasional dengan solusi otomasi n8n yang dirancang khusus untuk kebutuhan Anda.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/workflows"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Lihat Workflow
            </Link>
            <Link href="/portofolio" className="text-sm font-semibold leading-6 text-slate-900">
              Lihat Portofolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;