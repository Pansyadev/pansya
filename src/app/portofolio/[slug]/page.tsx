// src/app/portofolio/[slug]/page.tsx
import { portfolioData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Stabil di 15.5.3: boleh sync atau async, yang penting hasilnya array objek { slug }
export function generateStaticParams(): { slug: string }[] {
  return portfolioData.map((project) => ({ slug: project.slug }));
}

function getProjectData(slug: string) {
  const project = portfolioData.find((p) => p.slug === slug);
  if (!project) notFound();
  return project;
}

// Next 15.5.3 kadang mengetatkan props 'params' sebagai Promise.
// Jadi terima Promise lalu 'await' untuk ambil slug-nya.
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← intinya di sini

  const projectDetail = getProjectData(slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold leading-7 text-teal-600">Studi Kasus</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {projectDetail.title}
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {projectDetail.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Gambar Utama Proyek */}
        <div className="mt-16 mx-auto max-w-5xl">
          <Image
            src={projectDetail.imageUrl}
            alt={`Gambar proyek ${projectDetail.title}`}
            width={1200}
            height={600}
            className="rounded-xl shadow-lg w-full object-cover"
            priority
          />
        </div>

        {/* Konten Studi Kasus */}
        <div className="mx-auto mt-16 max-w-3xl space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">Tantangan</h2>
            <p className="mt-4 text-lg text-slate-600">{projectDetail.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900">Solusi</h2>
            <p className="mt-4 text-lg text-slate-600">{projectDetail.solution}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900">Hasil</h2>
            <p className="mt-4 text-lg text-slate-600">{projectDetail.outcome}</p>
          </section>
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/portofolio"
            className="text-sm font-semibold leading-6 text-teal-600 hover:text-teal-500"
          >
            ← Kembali ke Portofolio
          </Link>
        </div>
      </div>
    </div>
  );
}
