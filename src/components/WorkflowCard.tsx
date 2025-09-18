import Image from 'next/image';
import Link from 'next/link';

interface WorkflowCardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  buyUrl: string;
}

const WorkflowCard = ({ title, description, price, imageUrl, buyUrl }: WorkflowCardProps) => {
  return (
    <article className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex-shrink-0">
              <Image 
                      className="h-48 w-full object-cover" 
                      src={ imageUrl } 
                      alt={`Gambar proyek ${title}`}
                      width={400}
                      height={200}
                    />
                  </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-base text-slate-600">{description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg font-bold text-slate-900">{price}</p>
        <Link 
          href={buyUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-teal-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
        >
          Beli Sekarang
        </Link>
      </div>
    </article>
  );
};

export default WorkflowCard;