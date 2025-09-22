import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-repair-tech.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mobile repair technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              #1 Google Ads Agency for Mobile Repair Shops
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dominate Google Ads for
            <span className="gradient-text block">
              Mobile Repair Shops
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional Google Ads management with our exclusive anti-blocking system. 
            Keep your repair shop ads live 24/7 while competitors get blocked.
          </p>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-success" />
              <span>Anti-Block Technology</span>
            </div>
            <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <span>Data-Driven Optimization</span>
            </div>
            <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2">
              <Target className="h-4 w-4 text-success" />
              <span>24/7 Support Included</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Book Free Strategy Call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost_cta" size="xl">
              View Case Studies
            </Button>
          </div>
          
          {/* Social Proof */}
          <p className="text-sm text-muted-foreground mt-8">
            Trusted by 200+ repair shops across the USA
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Target className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Shield className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};