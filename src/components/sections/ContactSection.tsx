import { ArrowRight, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-6 py-12">
      <div className="p-12 md:p-24 rounded-3xl bg-foreground text-background text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Ready to build reliable AI systems?
        </h2>
        <p className="text-lg text-muted max-w-2xl mb-10">
          I'm currently open for high-bar applied AI engineering roles. Let's discuss how I can help your team ship production workflows.
        </p>
        <a 
          href="mailto:phamtruc120604@gmail.com" 
          className="inline-flex h-12 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-foreground transition-all hover:scale-105"
        >
          <Mail className="mr-2 w-4 h-4" />
          Get in touch
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
