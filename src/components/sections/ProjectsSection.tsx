import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Privacy Policy Compliance Assistant",
      description: "A hybrid GraphRAG system built for high-stakes document QA. Replaced fragmented vector search with an evidence-first answering pipeline using Neo4j and Qdrant, achieving 95%+ Faithfulness and 1.0 Context Precision.",
      tags: ["GraphRAG", "Neo4j", "Qdrant", "Ragas", "Python"],
      href: "/projects/privacy-policy-compliance-assistant",
      isHero: true,
    },
    {
      title: "ATN Beink API (Text-to-CAD)",
      description: "A smart backend API built on FastAPI combining LLMs with CAD tools for automated manufacturability analysis, text-to-CAD generation, and RAG for manufacturing capabilities.",
      tags: ["FastAPI", "OpenAI", "FreeCAD", "RAG", "FAISS"],
      href: "/projects/text-to-cad",
      isHero: false,
    },
    {
      title: "EduQA (HybionX)",
      description: "An Explainable AI QA system combining RAG and Symbolic Reasoning (Z3/SymPy) to eliminate LLM hallucinations for logic and physics problems, built with highly concurrent asynchronous APIs.",
      tags: ["Neuro-Symbolic AI", "RAG", "FastAPI", "Redis", "LLMOps"],
      href: "/projects/hybionx",
      isHero: false,
    },
    {
      title: "SE Auto-Draw: Agentic AI Layout",
      description: "A REST API microservice automating 2D CAD layouts using a Vision-based ReAct Agent loop, solving complex collision-free dimension arrangements via decoupled architecture.",
      tags: ["Agentic Workflow", "Vision AI", "ReAct Loop", "REST API", "Python"],
      href: "/projects/se-auto-draw",
      isHero: false,
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          Selected Work
        </h2>
        <p className="text-lg text-muted-foreground">
          Production systems turning unstructured data into reliable engineering output.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 lg:col-span-3">
          <ProjectCard {...projects[0]} />
        </div>
        <div>
          <ProjectCard {...projects[1]} />
        </div>
        <div>
          <ProjectCard {...projects[2]} />
        </div>
        <div>
          <ProjectCard {...projects[3]} />
        </div>
      </div>
    </section>
  );
}
