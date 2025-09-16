import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/lib/data"; 
// Di dunia nyata, data ini akan datang dari CMS. Untuk sekarang, kita letakkan di sini.


const PortfolioPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Portofolio Saya</h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Berikut adalah beberapa contoh masalah yang telah saya selesaikan menggunakan n8n.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {portfolioData.map((project) => (
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
      </div>
    </div>
  );
};

export default PortfolioPage;