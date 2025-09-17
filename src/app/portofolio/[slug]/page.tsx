import { portfolioData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Fungsi ini memberitahu Next.js halaman mana saja yang harus di-generate saat build
export function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

// Fungsi untuk mendapatkan data proyek berdasarkan slug
const getProjectData = (slug: string) => {
  const project = portfolioData.find((p) => p.slug === slug);
  if (!project) {
    notFound(); // Jika proyek tidak ditemukan, tampilkan halaman 404
  }
  return project;
};

// Komponen utama halaman
const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  const projectDetail = getProjectData(params.slug);

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
              <span key={tag} className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
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
          />
        </div>

        {/* Konten Studi Kasus */}
        <div className="mx-auto mt-16 max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Tantangan</h2>
            <p className="mt-4 text-lg text-slate-600">{projectDetail.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Solusi</h2>
            <p className="mt-4 text-lg text-slate-600">{projectDetail.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Hasil</h2>
            <p className="mt-4 text-lg text-slate-600">{projectDetail.outcome}</p>
          </div>
        </div>

        <div className="mt-24 text-center">
            <Link href="/portofolio" className="text-sm font-semibold leading-6 text-teal-600 hover:text-teal-500">
                ← Kembali ke Portofolio
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
