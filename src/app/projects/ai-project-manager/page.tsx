import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";

export default function AIProjectManagerCaseStudy() {
  return (
    <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to projects
      </Link>
      
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-6">
          {["Google ADK 2.0", "Vertex AI", "Gemini 2.5 Flash", "Python", "Pydantic", "Multi-Agent"].map((tag, idx) => (
            <span key={idx} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
          The AI Project Manager
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          A fully autonomous Graph-based Multi-Agent Orchestration system that automates the Agile software planning lifecycle. Built for the Kaggle AI Agents: Intensive Vibe Coding Capstone Project.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/GenTpham/ai-pm-agent" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
            <GithubIcon className="mr-2 w-4 h-4" />
            Source Code
          </a>
          <a href="https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783309896929" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
            <ExternalLink className="mr-2 w-4 h-4" />
            Kaggle Write-up
          </a>
        </div>
      </header>

      <CaseStudyBlock title="Overview">
        <p>
          Designed and deployed a fully autonomous Multi-Agent System that automates the Agile software planning lifecycle. By inputting a raw project idea, the system orchestrates 6 specialized AI agents to generate requirement analyses, epic/task breakdowns, story point estimations, sprint roadmaps, and risk assessments within seconds.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Key Achievements & Architecture">
        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Stateful Graph Orchestration</h3>
        <p>
          Architected a dynamic workflow using <strong>Google ADK 2.0</strong> where a central "Project Manager Node" coordinates the sequential execution of 6 specialized agents. This stateful graph approach ensures continuous context-sharing and guarantees that each agent builds perfectly upon the output of its predecessors.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Serverless AI Deployment</h3>
        <p>
          Successfully deployed the entire system as a scalable, managed service on Google Cloud's <strong>Vertex AI Agent Engine</strong>. This architecture achieves zero-idle costs while maintaining the ability to handle high concurrent throughput for simultaneous planning sessions.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Automated Tool Integration</h3>
        <p>
          Empowered the agents with external tool access, allowing them to autonomously interact with standard developer APIs. For instance, once the planning phase concludes, agents can autonomously push the generated roadmap by auto-creating GitHub Issues for the generated tasks.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Enforced Data Integrity</h3>
        <p>
          Utilized <strong>Pydantic</strong> schemas across all agents to enforce strict JSON structural outputs. This deterministic approach ensures robust data parsing and prevents pipeline breakages when passing complex context between different phases of the planning lifecycle.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Role">
        <p>
          <strong>AI Engineer / Core Developer:</strong> Led the system design, agent orchestration logic, tool integration, and cloud deployment pipelines via GitHub Actions.
        </p>
      </CaseStudyBlock>
    </article>
  );
}
