import WorkflowCard from "@/components/WorkflowCard";
import { workflowData } from "@/lib/data";

const WorkflowsPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Workflow & Micro-SaaS</h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Solusi siap pakai untuk mengotomatiskan tugas-tugas umum dalam bisnis Anda.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {workflowData.map((workflow) => (
            <WorkflowCard
              key={workflow.title}
              title={workflow.title}
              description={workflow.description}
              price={workflow.price}
              buyUrl={workflow.buyUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowsPage;