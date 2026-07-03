import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

export default function PrivacyPolicyCaseStudy() {
  return (
    <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to projects
      </Link>
      
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-6">
          {["GraphRAG", "Neo4j", "Qdrant", "Ragas", "Python"].map((tag, idx) => (
            <span key={idx} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
          Privacy Policy Compliance Assistant
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I built a reliability-focused hybrid GraphRAG system for high-stakes document QA, achieving 95%+ Faithfulness and reducing irrelevant retrievals by ~40%.
        </p>
      </header>

      <div className="w-full bg-muted/20 border border-border rounded-2xl mb-16 overflow-hidden flex items-center justify-center p-4">
        <img src="/diagrams/private-policy-architecture.svg" alt="Privacy Policy Compliance Assistant Architecture" className="w-full h-auto" />
      </div>

      <CaseStudyBlock title="1. Problem & Context">
        <p>Legal and compliance teams struggle to manually review dense, complex privacy policies. They needed a reliable way to query these policies. However, a baseline vector search system proved inadequate—it returned fragmented, out-of-context, or irrelevant chunks, leading to hallucinations in the LLM response.</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="2. Why This Problem Matters">
        <p>In legal compliance, an AI system cannot simply "sound right"—it must be entirely grounded in factual evidence. A hallucinated legal clause or an omitted exception could lead to catastrophic business risk. The system required extreme reliability over flashy generation.</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="3. My Role & Ownership">
        <p>I architected and implemented the end-to-end ingestion and retrieval system. I owned the entire pipeline from processing raw compliance documents to evaluating the final RAG output quality.</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="4. Constraints">
        <ul>
          <li><strong>Zero Hallucination Tolerance:</strong> The LLM must not invent policy details.</li>
          <li><strong>Complex Document Structures:</strong> Privacy policies contain hierarchical clauses and tables that naive chunking destroys.</li>
          <li><strong>Heterogeneous Inputs:</strong> Must handle unstructured text and structured metadata (e.g. spreadsheet structures).</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="5. System Architecture">
        <p>I moved beyond baseline vector search to implement a <strong>Hybrid GraphRAG</strong> architecture.</p>
        <ul>
          <li><strong>Knowledge Graph (Neo4j):</strong> Used to model the structural and semantic relationships across different documents and clauses.</li>
          <li><strong>Vector Store (Qdrant):</strong> Used for dense semantic search to find similar passages.</li>
          <li><strong>Orchestration:</strong> Custom Python pipeline that fuses graph traversal results with vector similarity scores before passing context to the LLM.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="6. Key Technical Decisions">
        <ul>
          <li><strong>Metadata-Aware Processing:</strong> Instead of blindly splitting text, I preserved the hierarchical structure and spreadsheet data through strict metadata attachment during the ingestion workflow.</li>
          <li><strong>Decoupled LLM Layer:</strong> Architected the provider layer to be flexible, allowing seamless switching between OpenAI and other models without rewriting the core retrieval logic.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="7. Retrieval & Answer Pipeline Design">
        <p>I designed an <strong>"evidence-first" (quote-before-answer)</strong> pipeline. Before the LLM formulates a final response, it is strictly prompted to extract and output the exact quotes from the retrieved context that support its answer. If it cannot find quotes, it must refuse to answer. This structural constraint enforces groundedness at the generation step.</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="8. Evaluation and Failure Modes">
        <p>I didn't just eyeball the results. I measured quality rigorously using <strong>Ragas</strong>.</p>
        <p>I built an evaluation workflow to systematically test Context Precision, Context Recall, and Faithfulness. By identifying failure modes where the vector search returned adjacent but irrelevant clauses, I tuned the hybrid weighting to favor graph-based entity relationships.</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="9. Results & Impact">
        <ul>
          <li>Achieved <strong>95%+ Faithfulness</strong> on the evaluation dataset.</li>
          <li>Achieved <strong>1.0 Context Precision</strong>.</li>
          <li>Reduced irrelevant retrievals by <strong>~40%</strong> compared to the baseline dense retrieval system.</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="10. What I’d Improve Next">
        <ul>
          <li>[TODO: Add specific future improvements, e.g., integrating Agentic validation loops or expanding the graph schema]</li>
        </ul>
      </CaseStudyBlock>
    </article>
  );
}
