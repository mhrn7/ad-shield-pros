import { Button } from "@/components/ui/button";
import elevLogo from "@/assets/elev-logo-new.png";
import { Mail, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={elevLogo} alt="Elev Marketing" className="h-8 w-8" />
              <span className="text-xl font-bold brand-text text-foreground">
                ELEV MARKETING
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The only Google Ads agency specialized in mobile phone and computer repair shops. 
              We help you dominate local search and attract premium customers.
            </p>
            
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Free Consultation
            </Button>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Google Ads Management</li>
              <li>Anti-Block Technology</li>
              <li>Data Analysis & Reports</li>
              <li>Website Creation</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@elevmkt.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a 
                  href="https://www.instagram.com/elevmkt.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @elevmkt.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Serving USA Nationwide</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Elev Marketing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};