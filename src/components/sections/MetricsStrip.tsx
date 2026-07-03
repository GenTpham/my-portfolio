export default function MetricsStrip() {
  const metrics = [
    { label: "Faster Engineering Drawings", value: "10x+" },
    { label: "Faithfulness in QA Systems", value: "95%+" },
    { label: "Context Precision", value: "1.0" },
    { label: "Production AI Apps Shipped", value: "3" },
  ];

  return (
    <section className="border-y border-border/50 bg-muted/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
              <span className="text-4xl md:text-5xl font-semibold text-foreground mb-2 tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground text-center uppercase tracking-wider">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
