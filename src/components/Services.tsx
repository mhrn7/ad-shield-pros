import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  BarChart3, 
  Clock, 
  Globe, 
  Target, 
  Zap,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Anti-Block Google Ads System",
    description: "Our proprietary technology ensures your repair shop ads stay live 24/7, even when competitors get blocked for policy violations.",
    features: ["Policy-compliant ad creation", "Continuous monitoring", "Automatic adjustments"]
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Optimization",
    description: "Weekly performance reports with actionable insights to maximize your ROI and attract more high-value customers.",
    features: ["Weekly performance reports", "Keyword optimization", "Competitor analysis"]
  },
  {
    icon: Clock,
    title: "24/7 Expert Support",
    description: "Direct access to certified Google Ads specialists who understand the mobile repair industry inside and out.",
    features: ["Dedicated account manager", "Same-day response", "Industry expertise"]
  },
  {
    icon: Globe,
    title: "Professional Website Included",
    description: "Mobile-optimized landing pages designed specifically for repair shops to convert visitors into customers.",
    features: ["Mobile-responsive design", "Fast loading times", "Conversion optimized"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Complete Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything Your Repair Shop
            <span className="gradient-text block">Needs to Dominate Google</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No guarantees, no empty promises. Just professional Google Ads management 
            that keeps your shop visible when customers need repairs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Target className="h-3 w-3 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Stop Losing Customers to Competitors?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a free consultation to see exactly how we'll get your repair shop 
            more visibility and customers through Google Ads.
          </p>
          
          <Button 
            variant="cta" 
            size="xl" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Free Consultation Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};