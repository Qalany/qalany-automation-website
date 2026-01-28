import qalanyLogo from "@/assets/qalany-logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img
              src={qalanyLogo}
              alt="Qalany"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">Qalany</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-accent-foreground/60">
            &copy; {new Date().getFullYear()} Qalany. All rights reserved.
          </p>

          {/* Social */}
          <a
            href="https://www.linkedin.com/company/qalany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
