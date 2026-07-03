import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

export default function SEAutoDrawCaseStudy() {
  return (
    <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to projects
      </Link>
      
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-6">
          {["Agentic Workflow", "Vision AI", "ReAct Loop", "REST API", "Python"].map((tag, idx) => (
            <span key={idx} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
          SE Auto-Draw: Agentic AI Layout Service
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Designed and developed a REST API microservice to fully automate the 2D technical drawing generation process from CAD software. This project solves a highly complex CAD automation problem: collision-free dimension and view layout using an advanced Agentic Workflow.
        </p>
      </header>

      <div className="w-full bg-muted/20 border border-border rounded-2xl mb-16 overflow-hidden flex items-center justify-center p-4">
        <img src="/diagrams/agentic_ai_architecture_diagram.svg" alt="SE Auto-Draw Architecture Diagram" className="w-full h-auto" />
      </div>

      <CaseStudyBlock title="1. Automated Design via Agentic AI (Vision-based ReAct Loop)">
        <ul>
          <li><strong>The Problem:</strong> Automating 2D drawings from 3D models frequently results in "collisions"—overlapping views, or dimensions crossing over geometry and each other. This renders the drawings illegible and still requires extensive manual human correction.</li>
          <li><strong>The Solution (Agentic Vision Workflow):</strong> I pioneered the use of a <strong>ReAct (Reasoning & Acting) Agent</strong> combined with Vision LLMs. 
            <ul>
              <li>The Agent automatically "sees" a preview image of the drawing layout.</li>
              <li>It reasons (Thought) and proposes actions: scaling, moving views, or adjusting dimension placements.</li>
              <li>A <strong>Deterministic Scoring Gate</strong> acts as a "Referee" to evaluate whether the AI's action actually reduced the collision rate. If the layout improves, the action is accepted; if not, the AI receives negative feedback (Observation) to self-correct.</li>
            </ul>
          </li>
          <li><strong>Business Value:</strong> The Agent self-learns and corrects over multiple loops until the drawing achieves a 100% collision-free standard, completely eliminating manual layout intervention. The final output is clean and ready for the shop floor.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="2. High-Performance Decoupled Architecture">
        <ul>
          <li><strong>The Problem:</strong> Legacy CAD software (like Solid Edge) utilizes old COM technology, running on a Single-Threaded Apartment (STA) model, which is extremely slow. Allowing the AI to interact directly with CAD during its reasoning loops would freeze the system and waste compute resources.</li>
          <li><strong>The Solution:</strong> I designed a decoupled 3-step pipeline: <code>Extract (COM)</code> → <code>Agentic Loop (Pure Python/JSON)</code> → <code>Apply (COM)</code>. Geometric data is extracted into JSON, allowing the Agent to run its optimization loops entirely independent of the CAD environment. Only when the optimal layout is finalized does the system call back to the CAD software to apply the changes.</li>
          <li><strong>Business Value:</strong> Massively optimizes server throughput, allowing the system to process multiple drawings concurrently without being bottlenecked or crashing the legacy CAD software.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="3. API-First Integration & Digital Transformation">
        <ul>
          <li><strong>The Problem:</strong> CAD design data is typically siloed away from manufacturing execution and operational workflows (ERP, MES).</li>
          <li><strong>The Solution:</strong> I wrapped the entire power of Solid Edge and the AI Agent into a modern REST API microservice, providing a complete pipeline: <code>Ingest 3D → AI Layout → BOM Generation → Export PDF/DXF</code>.</li>
          <li><strong>Business Value:</strong> Enables other enterprise software to automatically trigger drawing creation, export documentation, and extract Bills of Materials (BOM) seamlessly—creating an unbroken digital supply chain ready for direct ERP/PLM integration.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="Summary">
        <p>This project elevates standard CAD automation into the realm of <strong>Advanced AI Engineering</strong>. By utilizing an autonomous, self-correcting Vision Agent guided by deterministic geometric scoring, the system tackles a notoriously difficult physical layout problem with modern software architecture.</p>
      </CaseStudyBlock>
    </article>
  );
}
