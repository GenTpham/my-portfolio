import { Database, Workflow, Cpu } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: <Database className="w-6 h-6 text-foreground" />,
      title: "Retrieval & Knowledge Systems",
      description: "Designing hybrid search (vector + graph) and robust ingestion pipelines for unstructured data."
    },
    {
      icon: <Workflow className="w-6 h-6 text-foreground" />,
      title: "Workflow Automation",
      description: "Interfacing LLMs with traditional software (CAD, external APIs) to eliminate operational friction."
    },
    {
      icon: <Cpu className="w-6 h-6 text-foreground" />,
      title: "Production AI Infrastructure",
      description: "Building reliable backends with FastAPI, evaluating with Ragas, and orchestrating via Celery/Airflow."
    }
  ];

  return (
    <section id="about" className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
          How I Work
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I treat AI as a systems problem. I care about reliability, evaluation, and failure modes. A model is just one piece of a pipeline; the real challenge is turning unstructured data into structured, actionable workflows through solid architecture and engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="p-8 rounded-2xl border border-border bg-muted/20 glow-card transition-all hover:bg-muted/40">
            <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-medium text-foreground mb-3">{pillar.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
