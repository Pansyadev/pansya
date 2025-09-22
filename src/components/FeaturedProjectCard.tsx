import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  className?: string; // Tambahkan prop className opsional
}

const FeaturedProjectCard = ({ title, description, imageUrl, projectUrl, tags, className = '' }: ProjectCardProps) => {
  return (
    <Link href={projectUrl} className={`group relative block w-full h-full overflow-hidden rounded-xl shadow-lg ${className}`}>
      {/* Gambar Latar Belakang & Efek Zoom saat Hover */}
      <Image 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={imageUrl} 
        alt={`Gambar proyek ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />

      {/* Lapisan Gradien Gelap */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Konten Teks di Atas Gambar */}
      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-block bg-teal-500/20 backdrop-blur-sm text-teal-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-teal-500/30">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
      </div>
    </Link>
  );
};

export default FeaturedProjectCard;