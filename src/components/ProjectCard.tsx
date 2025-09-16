import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

const ProjectCard = ({ title, description, imageUrl, projectUrl, tags }: ProjectCardProps) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl bg-white">
      <div className="flex-shrink-0">
        <Image 
          className="h-48 w-full object-cover" 
          src={imageUrl} 
          alt={`Gambar proyek ${title}`}
          width={400}
          height={200}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <Link href={projectUrl} className="mt-4 block">
            <p className="text-xl font-semibold text-slate-900">{title}</p>
            <p className="mt-3 text-base text-slate-500">{description}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <Link href={projectUrl} className="text-sm font-semibold text-teal-600 hover:text-teal-500">
            Lihat Studi Kasus
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;