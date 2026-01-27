import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Have questions about Qalany? Want to see a demo? We'd love to
            hear from you. Reach out and our team will get back to you shortly.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Email us at</p>
                <a href="mailto:connect@qalany.com" className="font-medium text-foreground hover:text-accent transition-colors">
                  connect@qalany.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Call us at</p>
                <a href="tel:+94776223239" className="font-medium text-foreground hover:text-accent transition-colors">
                  (+94) 77 622 3239
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Visit us at</p>
                <p className="font-medium text-foreground">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
