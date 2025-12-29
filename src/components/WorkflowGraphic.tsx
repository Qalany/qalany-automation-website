import { MessageSquare, Cog, Eye, Check } from "lucide-react";

const WorkflowGraphic = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe",
      description: "Tell us your problem",
      delay: "animation-delay-100",
    },
    {
      icon: Cog,
      title: "Generate",
      description: "We create the workflow",
      delay: "animation-delay-200",
    },
    {
      icon: Eye,
      title: "Customize",
      description: "Adjust to your needs",
      delay: "animation-delay-300",
    },
    {
      icon: Check,
      title: "Automate",
      description: "Run with confidence",
      delay: "animation-delay-400",
    },
  ];

  return (
    <div className="relative perspective-1000">
      {/* 3D Card Container */}
      <div className="relative bg-card rounded-3xl p-8 shadow-3d border border-border/50 transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-xl opacity-50" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>

          {/* Workflow Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border/30 animate-slide-up ${step.delay} hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-soft">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Step number */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting lines */}
          <div className="absolute left-[52px] top-24 bottom-24 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-2xl rotate-12 animate-float" />
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-xl -rotate-12 animate-float animation-delay-300" />
    </div>
  );
};

export default WorkflowGraphic;
