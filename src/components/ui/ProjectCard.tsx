import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  isHero?: boolean;
}

export default function ProjectCard({ title, description, tags, href, isHero = false }: ProjectCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className={`h-full flex flex-col p-8 rounded-2xl border border-border bg-muted/10 transition-all duration-300 hover:bg-muted/30 glow-card ${isHero ? 'md:p-12' : ''}`}>
        <div className="flex-1">
          <h3 className={`font-semibold tracking-tight text-foreground mb-4 ${isHero ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="inline-flex items-center rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center text-sm font-medium text-foreground transition-transform group-hover:translate-x-1 shrink-0">
            View Case Study <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
