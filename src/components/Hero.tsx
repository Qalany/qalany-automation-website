import WaitingListForm from "./WaitingListForm";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-24 flex items-center bg-background relative"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Stop Wasting Time on{" "}
            <span className="text-primary">Repetitive Tasks</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-slide-up animation-delay-100">
            Qalany helps non-technical professionals automate their daily workflows 
            using plain language. No coding. No complexity. Just describe what you need.
          </p>

          {/* Waiting List Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border animate-slide-up animation-delay-200">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Join the Waiting List
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Be among the first to experience effortless automation. 
              Get exclusive access to our community and an early-bird discount.
            </p>
            
            <WaitingListForm />
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 animate-slide-up animation-delay-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">No Code</div>
              <div className="text-sm text-muted-foreground">Required</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Transparent</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Your</div>
              <div className="text-sm text-muted-foreground">Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
