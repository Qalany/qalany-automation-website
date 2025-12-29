import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    bio: "Passionate about making technology accessible to everyone.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    bio: "Designing intuitive experiences for complex problems.",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Engineer",
    bio: "Building the backbone of intelligent automation.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Design",
    bio: "Creating beautiful, functional interfaces.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the People Behind Qalany
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A diverse team of engineers, designers, and problem-solvers united
            by a common goal: making automation simple and accessible.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group relative bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-3d transition-all duration-500 hover:-translate-y-2 text-center animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 3D effect layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                  <span className="text-3xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors duration-300">
                    <Linkedin size={14} className="text-muted-foreground" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors duration-300">
                    <Twitter size={14} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
