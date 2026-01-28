import { Mail } from "lucide-react";
import WaitingListForm from "./WaitingListForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Join our waiting list and be the first to know when Qalany launches. 
            Get exclusive community access and early-bird pricing.
          </p>

          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border mb-12">
            <WaitingListForm />
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Questions? Email us at </span>
            <a 
              href="mailto:connect@qalany.com" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              connect@qalany.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
