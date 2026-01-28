import { MessageSquare, Eye, Zap } from "lucide-react";

const AboutSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe",
      description: "Tell us what repetitive task is eating up your time, in plain language.",
    },
    {
      icon: Eye,
      title: "Review",
      description: "See the visual workflow we create. Understand every step before it runs.",
    },
    {
      icon: Zap,
      title: "Automate",
      description: "Run your workflow with complete confidence and transparency.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Automation Made for People, Not Programmers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You know your work better than anyone. We just help you automate it 
            without needing to learn technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-accent" />
              </div>
              
              <div className="text-sm font-semibold text-primary mb-2">
                Step {index + 1}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
