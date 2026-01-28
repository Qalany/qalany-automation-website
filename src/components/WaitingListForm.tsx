import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Gift, Users, Sparkles } from "lucide-react";
import { z } from "zod";

const waitingListSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  whatsapp: z.string().trim().min(8, { message: "Please enter a valid WhatsApp number" }).max(20),
});

const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = waitingListSchema.safeParse({ email, whatsapp });
    
    if (!result.success) {
      toast({
        title: "Please check your details",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent("Qalany Waiting List - New Signup");
    const body = encodeURIComponent(
      `New waiting list signup:\n\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nPlease add this person to the exclusive WhatsApp group.`
    );
    
    // Open email client
    window.location.href = `mailto:connect@qalany.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "Check your email client to complete the signup.",
      });
    }, 500);
  };

  const benefits = [
    { icon: Users, text: "Join our exclusive WhatsApp community" },
    { icon: Sparkles, text: "Get valuable automation insights & tips" },
    { icon: Gift, text: "Early access discount on launch" },
  ];

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">You're In!</h3>
        <p className="text-muted-foreground">
          Complete the email to join our exclusive community.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Benefits */}
      <div className="mb-8 space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <benefit.icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{benefit.text}</span>
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 rounded-xl border-border bg-background"
            required
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="WhatsApp number (with country code)"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="h-12 rounded-xl border-border bg-background"
            required
          />
        </div>
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : "Join the Waiting List"}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
};

export default WaitingListForm;
