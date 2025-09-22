import { Button } from "@/components/ui/button";
import elevLogo from "@/assets/elev-logo-new.png";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={elevLogo} alt="Elev Marketing" className="h-8 w-8" />
          <span className="text-xl font-bold brand-text text-foreground">
            ELEV MARKETING
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <Button 
          variant="cta" 
          size="lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Free Consultation
        </Button>
      </div>
    </header>
  );
};