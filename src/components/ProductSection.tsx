import { Shield, Clock, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Hours Every Week",
    description:
      "Automate the tasks that consume your time, so you can focus on work that matters.",
  },
  {
    icon: Shield,
    title: "Complete Control",
    description:
      "See exactly what your automation does. No black boxes, no surprises.",
  },
  {
    icon: Users,
    title: "Built for You",
    description:
      "Designed for professionals without technical backgrounds. Simple and intuitive.",
  },
  {
    icon: Sparkles,
    title: "Your Systems",
    description:
      "Works with the tools you already use. No need to change how you work.",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Qalany?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe automation should be accessible to everyone, 
            not just developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
