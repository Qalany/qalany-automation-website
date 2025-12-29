import { Zap, Shield, Puzzle, LineChart } from "lucide-react";
import ProductFlowchart from "./ProductFlowchart";

const features = [
  {
    icon: Zap,
    title: "Natural Language Input",
    description:
      "Simply describe what you want to automate in plain English. No technical jargon or coding required.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description:
      "See exactly how your automation works with visual flowcharts. Understand every step before it runs.",
  },
  {
    icon: Puzzle,
    title: "Easy Customization",
    description:
      "Modify any part of your workflow with drag-and-drop simplicity. Make it work exactly how you need.",
  },
  {
    icon: LineChart,
    title: "Smart Optimization",
    description:
      "Qalany learns from your adjustments and suggests improvements to make your workflows even better.",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automation That Makes Sense
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Qalany transforms your ideas into actionable workflows. Describe
            your problem, and watch as we create a clear, customizable solution.
          </p>
        </div>

        {/* Main visual */}
        <div className="mb-20">
          <ProductFlowchart />
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
