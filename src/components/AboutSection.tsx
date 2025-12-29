import { Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Making Automation Accessible to Everyone
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Qalany, we believe that automation should be simple, transparent,
            and accessible to everyone regardless of their technical background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="group relative bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:shadow-3d transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize automation by creating tools that anyone can use.
                We eliminate the complexity of traditional automation solutions,
                allowing you to focus on what matters most - solving your problems
                and growing your business.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:shadow-3d transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where automation is as natural as conversation. Where
                anyone can describe their challenges in plain language and receive
                intelligent, customizable solutions that provide complete
                transparency and control over every step.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Simplicity", value: "First" },
            { label: "Transparency", value: "Always" },
            { label: "User Control", value: "Complete" },
            { label: "Trust", value: "Earned" },
          ].map((item) => (
            <div key={item.label} className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
