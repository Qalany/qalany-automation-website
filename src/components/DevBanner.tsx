import { Sparkles } from "lucide-react";

const DevBanner = () => {
  return (
    <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm">
      <div className="container flex items-center justify-center gap-2">
        <Sparkles size={14} className="animate-pulse-soft" />
        <span className="font-medium">We're working quietly so things work smoothly</span>
        <Sparkles size={14} className="animate-pulse-soft" />
      </div>
    </div>
  );
};

export default DevBanner;
