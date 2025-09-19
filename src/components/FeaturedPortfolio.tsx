import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "@/lib/data";

const FeaturedPortfolio = () => {
  // Ambil hanya 3 item pertama dari data portofolio untuk ditampilkan
  const featuredProjects = portfolioData.slice(0, 3);

  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Portofolio Terbaru</h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Beberapa proyek yang telah saya kerjakan.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={`/portofolio/${project.slug}`}
              tags={project.tags}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/portofolio" className="rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500">
            Lihat Semua Proyek
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPortfolio;