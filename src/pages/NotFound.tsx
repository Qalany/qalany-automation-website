import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import qalanyLogo from "@/assets/qalany-logo-bright.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md px-6">
        <div className="mb-8 flex justify-center">
          <img src={qalanyLogo} alt="Qalany" className="h-16 w-auto" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-2 text-xl font-medium text-foreground">Page not found</p>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
