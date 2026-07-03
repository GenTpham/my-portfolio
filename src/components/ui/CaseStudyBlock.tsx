import React from "react";

interface CaseStudyBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function CaseStudyBlock({ title, children }: CaseStudyBlockProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6 pb-2 border-b border-border/50">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}
