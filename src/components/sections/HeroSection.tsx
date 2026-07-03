import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/30 px-3 py-1 text-sm text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
            I build production AI systems that turn messy inputs into <span className="text-muted-foreground">reliable workflows.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
            I’m Pham Trung Truc, an AI Engineer focused on LLM orchestration, GraphRAG, and evaluating high-stakes pipelines. I build systems people can actually use—not just demos.
          </p>
          
          <div className="flex items-center gap-4 mt-8">
            <Link 
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View Case Studies
            </Link>
            <Link 
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
