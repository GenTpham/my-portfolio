import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

export default function HybionXCaseStudy() {
  return (
    <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to projects
      </Link>
      
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-6">
          {["Neuro-Symbolic AI", "RAG", "Z3/SymPy", "FastAPI", "Redis", "LLMOps"].map((tag, idx) => (
            <span key={idx} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
          EduQA (HybionX)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          An Explainable AI QA system combining RAG and Symbolic Reasoning to completely eliminate LLM hallucinations in logic and physics computations.
        </p>
      </header>

      <div className="w-full bg-muted/20 border border-border rounded-2xl mb-16 overflow-hidden flex items-center justify-center p-4">
        <img src="/diagrams/hybionx_architecture.svg" alt="HybionX Architecture Diagram" className="w-full h-auto" />
      </div>

      <CaseStudyBlock title="1. Solving LLM Hallucinations with Neuro-Symbolic AI">
        <ul>
          <li><strong>The Problem:</strong> EdTech platforms want to use AI to automatically tutor students. However, standard LLMs (like ChatGPT) frequently fail at mathematical calculations and logical reasoning, providing confident but incorrect knowledge that damages product credibility.</li>
          <li><strong>The Solution:</strong> I designed a <strong>Neuro-Symbolic AI architecture</strong>. The LLM is strictly scoped to natural language understanding. Deterministic physics calculations (e.g., resistors, capacitors) are offloaded to <strong>SymPy</strong>, while strict logical rule inferences are routed to the <strong>Z3 Theorem Prover</strong>.</li>
          <li><strong>Business Value:</strong> This architecture demonstrates the ability to build <strong>Explainable AI (XAI)</strong> systems that guarantee 100% accuracy for logical and mathematical problems, completely bypassing the probabilistic limitations (and hallucination risks) of standard LLMs.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="2. Domain-Specific QA & Semantic Search">
        <ul>
          <li><strong>The Problem:</strong> Students and university staff repeatedly ask the same questions regarding school regulations and academic policies. Relying entirely on human Teaching Assistants or Customer Support is an expensive and unscalable operational bottleneck.</li>
          <li><strong>The Solution:</strong> I built a robust Retrieval-Augmented Generation (RAG) pipeline utilizing <strong>Qdrant</strong> for hybrid (Dense & Sparse) vector search. The system accurately retrieves internal institutional documents to ground the LLM's context before generating an answer.</li>
          <li><strong>Business Value:</strong> Proves expertise in designing production-grade semantic search and RAG systems that successfully automate internal support and customer service workloads.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="3. System Scalability & High Concurrency">
        <ul>
          <li><strong>The Problem:</strong> Heavy AI workloads—such as LLM API calls and Z3/SymPy engine executions—can take anywhere from a few seconds to tens of seconds to resolve. A standard synchronous API design would cause server timeouts and crash under high concurrent user load.</li>
          <li><strong>The Solution:</strong> I implemented an <strong>Asynchronous Job Queue</strong> architecture using <strong>Redis</strong> and <code>arq</code>. Users submit a query and instantly receive a <code>job_id</code>, allowing the client to poll for results or track status without blocking the main backend thread.</li>
          <li><strong>Business Value:</strong> Demonstrates strong System Design thinking, specifically in architecting high-concurrency, event-driven, and background-worker APIs critical for real-world AI applications.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="4. LLMOps, Observability & Cost Optimization">
        <ul>
          <li><strong>The Problem:</strong> Calling proprietary LLMs (like OpenAI) at scale is incredibly expensive. Businesses need granular visibility into how the AI is performing, what it costs, and require a fallback to open-source models to reduce overhead and protect data privacy.</li>
          <li><strong>The Solution:</strong> 
            <ul>
              <li><strong>Backend Flexibility:</strong> Designed the system to seamlessly toggle between OpenAI (for rapid dev) and self-hosted open-source models (e.g., Qwen2.5-7B deployed on RunPod), giving the business complete control over costs.</li>
              <li><strong>Observability:</strong> Integrated <strong>Phoenix Tracing</strong> to monitor every single request in granular detail—tracking cache hits/misses, prompt payloads, and end-to-end latency.</li>
            </ul>
          </li>
          <li><strong>Business Value:</strong> Highlights advanced MLOps/LLMOps capabilities. It shows I don't just write AI scripts; I know how to securely deploy, optimize costs, and monitor production AI systems in the real world.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="Summary">
        <p>Built initially for the EXACT 2026 / IJCNN context, EduQA provides an automated EdTech tutoring solution with transparent, explainable answers. By combining RAG, Symbolic Reasoning Engines, asynchronous message queues, and comprehensive tracing, it definitively solves the knowledge reliability issues that plague conventional AI systems.</p>
      </CaseStudyBlock>
    </article>
  );
}
