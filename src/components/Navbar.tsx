import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import qalanyLogo from "@/assets/qalany-logo-bright.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "How It Works", href: "#about" },
  { name: "Why Qalany", href: "#product" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <img src={qalanyLogo} alt="Qalany Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-foreground">Qalany</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#contact">
            <Button variant="hero" size="default">
              Join Waiting List
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button variant="hero" size="default" className="mt-4 w-full">
                Join Waiting List
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
