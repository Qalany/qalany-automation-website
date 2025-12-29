import { User, BrainCircuit, GitBranch, Play, ArrowRight } from "lucide-react";

const ProductFlowchart = () => {
  const steps = [
    {
      icon: User,
      title: "You Describe",
      subtitle: "In plain language",
      example: '"Send me a Slack message when a new lead is added to my CRM"',
    },
    {
      icon: BrainCircuit,
      title: "Qalany Creates",
      subtitle: "Intelligent workflow",
      example: "AI analyzes and builds your automation",
    },
    {
      icon: GitBranch,
      title: "You Customize",
      subtitle: "Visual flowchart",
      example: "Edit each step, logic, and conditions visually",
    },
    {
      icon: Play,
      title: "Automate",
      subtitle: "With confidence",
      example: "Run with full visibility and control",
    },
  ];

  return (
    <div className="relative">
      {/* Main flowchart container */}
      <div className="relative bg-secondary/30 rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Arrow connector (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-accent/50" />
                  </div>
                )}

                {/* Step card */}
                <div className="group relative bg-card rounded-2xl p-6 shadow-elevated border border-border hover:shadow-card transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual workflow preview */}
          <div className="mt-12 bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-sm text-muted-foreground">
                Workflow Preview
              </span>
            </div>

            {/* Simplified flowchart visualization */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-6">
              {/* Trigger */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-accent text-center px-1">
                    Workflow
                  </span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Triger</span>
              </div>

              <ArrowRight className="text-muted-foreground/50" />

              {/* Condition */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-secondary border-2 border-border rotate-45 flex items-center justify-center">
                  <span className="text-xs font-semibold text-foreground -rotate-45 text-center">
                    Check
                  </span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Condition</span>
              </div>

              <ArrowRight className="text-muted-foreground/50" />

              {/* Action */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-accent text-center px-1">
                    Send Slack
                  </span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Action</span>
              </div>

              <ArrowRight className="text-muted-foreground/50" />

              {/* End */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-green-600">Done</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFlowchart;
