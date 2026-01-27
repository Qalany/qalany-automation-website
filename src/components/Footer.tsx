import qalanyLogo from "@/assets/qalany-logo.png";

const footerLinks = {
  product: [
    { name: "Features", href: "#product" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <img
                src={qalanyLogo}
                alt="Qalany"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">Qalany</span>
            </div>
            <p className="text-sm text-accent-foreground/70 leading-relaxed">
              Making automation simple, transparent, and accessible to everyone.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-accent-foreground/60">
            &copy; {new Date().getFullYear()} Qalany. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/qalany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
