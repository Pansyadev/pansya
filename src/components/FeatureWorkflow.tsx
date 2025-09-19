import Link from "next/link";
import { workflowData } from "@/lib/data";
import WorkflowCard from "./WorkflowCard";

const FeaturedWorkflow = () => {
  // Ambil hanya 3 item pertama dari data workflow
  const featuredWorkflows = workflowData.slice(0, 3);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Workflow Siap Pakai</h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Solusi cepat untuk kebutuhan automasi paling umum.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredWorkflows.map((workflow) => (
            <WorkflowCard
              key={workflow.title}
              imageUrl={workflow.imageUrl}
              title={workflow.title}
              description={workflow.description}
              price={workflow.price}
              buyUrl={workflow.buyUrl}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/workflows" className="rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500">
            Lihat Semua Workflow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkflow;