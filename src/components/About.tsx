import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight 
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "200+",
    label: "Repair Shops Served"
  },
  {
    icon: TrendingUp,
    number: "3x",
    label: "Average Revenue Increase"
  },
  {
    icon: Shield,
    number: "99.9%",
    label: "Ad Uptime Rate"
  },
  {
    icon: Award,
    number: "5+",
    label: "Years Experience"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Industry Leaders</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Only Agency That
              <span className="gradient-text block">Specializes in Mobile Repair</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                We don't work with everyone. We focus exclusively on mobile phone and computer 
                repair shops because we understand your unique challenges.
              </p>
              
              <p className="text-lg leading-relaxed">
                While other agencies make empty promises, we deliver measurable results through 
                our proven anti-blocking methodology and deep industry expertise.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our team combines certified Google Ads specialists with repair industry veterans 
                who know exactly what customers search for when they need repairs.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="cta" size="xl" className="group">
                See How We're Different
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4">
            Stop Competing on Price. Start Dominating Online.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Your competitors are fighting over scraps while you could be getting 
            the premium repair jobs that actually pay well.
          </p>
          
          <Button variant="hero" size="xl" className="group">
            Claim Your Free Strategy Session
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};