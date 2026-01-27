import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import WorkflowGraphic from "./WorkflowGraphic";

const Hero = () => {
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "Stay tuned!",
      description: "Coming soon.",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex items-center bg-background relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium text-foreground">
                Automation for Everyone
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Free Your Time{" "}
              <span className="text-accent">for What Truly Matters</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Describe your problem in plain language, and Qalany automatically
              creates a visual workflow you can customize. Gain full clarity,
              control, and transparency over your automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={handleComingSoon}>
                Start Automating
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" size="lg" onClick={handleComingSoon}>
                See How It Works
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">&lt; 5 min</div>
                <div className="text-sm text-muted-foreground">to first workflow</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">workflow visibility</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10x</div>
                <div className="text-sm text-muted-foreground">clearer than scripts</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-slide-up animation-delay-200">
            <WorkflowGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
