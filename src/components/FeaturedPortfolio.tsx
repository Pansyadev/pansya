import Link from "next/link";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { portfolioData } from "@/lib/data";

const FeaturedPortfolio = () => {
  const featuredProjects = portfolioData.slice(0, 3);
  if (featuredProjects.length < 3) return null;

  return (
    // 1. Latar diubah ke putih & padding vertikal dikurangi
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. Header diubah menggunakan Flexbox */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Portofolio Terbaru
            </h2>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              Beberapa proyek yang telah saya kerjakan.
            </p>
          </div>
          <Link
            href="/portofolio"
            className="hidden lg:block rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
          >
            Lihat Semua Proyek
          </Link>
        </div>

        {/* Tata Letak Grid Asimetris (Tetap Sama) */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FeaturedProjectCard
              {...featuredProjects[0]}
              projectUrl={`/portofolio/${featuredProjects[0].slug}`}
              className="h-full min-h-[400px]"
            />
          </div>
          <div className="flex flex-col gap-8">
            <FeaturedProjectCard
              {...featuredProjects[1]}
              projectUrl={`/portofolio/${featuredProjects[1].slug}`}
            />
            <FeaturedProjectCard
              {...featuredProjects[2]}
              projectUrl={`/portofolio/${featuredProjects[2].slug}`}
            />
          </div>
        </div>

        {/* 3. Tombol di bawah dihapus dan dipindahkan ke atas untuk mobile */}
        <div className="mt-16 text-center lg:hidden">
          <Link href="/portofolio" className="rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500">
            Lihat Semua Proyek
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPortfolio;