import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

export default function TextToCADCaseStudy() {
  return (
    <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to projects
      </Link>
      
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-6">
          {["FastAPI", "OpenAI", "FreeCAD", "RAG", "FAISS"].map((tag, idx) => (
            <span key={idx} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
          ATN Beink API (Text-to-CAD)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A smart backend API system combining the power of Large Language Models with mechanical engineering tools to automate design, quotation, and manufacturing workflows.
        </p>
      </header>

      <div className="w-full bg-muted/20 border border-border rounded-2xl mb-16 overflow-hidden flex items-center justify-center p-4">
        <img src="/diagrams/atn-beink-architecture_diagram.svg" alt="ATN Beink Architecture Diagram" className="w-full h-auto" />
      </div>

      <CaseStudyBlock title="1. Overview">
        <p>
          <strong>ATN Beink API</strong> is an intelligent backend API built on FastAPI. The project bridges the gap between Artificial Intelligence (using LLMs like OpenAI and Gemini) and mechanical engineering software (FreeCAD) to act as a virtual assistant. It fundamentally streamlines the design, quotation, and production lifecycle—specifically targeting the Sheet Metal manufacturing sector.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="2. What Business Problems Does It Solve?">
        <p>
          In manufacturing, evaluating technical drawings, doing CAD design, calculating quotes, and running manufacturability checks are heavily reliant on human expertise and highly time-consuming. This project addresses these exact operational bottlenecks through its core features:
        </p>
        
        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">a. Automated Manufacturability Analysis</h3>
        <ul>
          <li><strong>The Problem:</strong> Customer designs often arrive with mechanical flaws (e.g., incorrect bend radii, holes placed too close to fold lines, missing reliefs). These cause scrapped parts or require endless back-and-forth revisions.</li>
          <li><strong>The Solution:</strong> The system automatically ingests 3D CAD files (like <code>.step</code>) via API and returns an immediate manufacturability report. This intercepts technical errors before machining begins, saving vast amounts of time, raw material, and overhead cost.</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">b. Natural Language 3D Modeling (Chat-to-CAD)</h3>
        <ul>
          <li><strong>The Problem:</strong> Tweaking a design or drafting a new concept usually demands expensive CAD software and a dedicated mechanical engineer to operate it.</li>
          <li><strong>The Solution:</strong> A Chat-to-CAD integration allows anyone—from sales reps to end-users—to interact with, analyze, and even generate 3D geometries purely through text prompts. This radically accelerates client communication and conceptualization.</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">c. Automated Data Extraction from Multimodal Inputs (PDF, Images)</h3>
        <ul>
          <li><strong>The Problem:</strong> Clients frequently submit quote requests as PDFs or photos of technical drawings. Manually extracting parameters from these documents is sluggish and prone to human error.</li>
          <li><strong>The Solution:</strong> Vision-enabled AI APIs read the technical drawings and automatically extract critical parameters. This supercharges the productivity of both the engineering and quotation departments.</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">d. Internal Knowledge Assistant (RAG Pipeline)</h3>
        <ul>
          <li><strong>The Problem:</strong> Manufacturing standards, machine capabilities, and machining workflows are often scattered across disparate internal documents, making training and daily lookups incredibly inefficient.</li>
          <li><strong>The Solution:</strong> Powered by a FAISS Vector DB, the project digitizes all factory documentation into a centralized technical "brain." The RAG chatbot reliably answers technical questions and gives advice based on the company's exact internal standards and machine capabilities.</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">e. Web-Based Data Visualization (3D & JSON Viewer)</h3>
        <ul>
          <li><strong>The Solution:</strong> Renders and streams 3D models alongside their CAD analysis results directly to the web via API endpoints. Cross-functional teams can instantly review models without installing heavy, specialized software (like AutoCAD or SolidWorks).</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="3. Business Impact & Strategic Value">
        <ul>
          <li><strong>Slashed Lead Times:</strong> Automating the drawing extraction and manufacturability analysis compresses the quotation turnaround time from days (or hours) down to mere minutes.</li>
          <li><strong>Reduced Hidden Costs:</strong> Intercepting design flaws before the drawings ever reach the shop floor (laser cutting, press braking) prevents scrap material and wasted machine hours.</li>
          <li><strong>Enhanced Customer Experience:</strong> Clients get instant, interactive technical feedback via the chatbot, establishing a high standard of professionalism and driving higher conversion rates.</li>
          <li><strong>Seamless Digital Transformation:</strong> Built with a flexible API architecture and fully containerized via Docker, the system deploys effortlessly and connects directly into existing enterprise tools (ERP, CRM, or web platforms).</li>
        </ul>
      </CaseStudyBlock>
    </article>
  );
}
