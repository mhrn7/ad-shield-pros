import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  location: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual Supabase integration when connected
      // For now, just simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 24 hours.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        location: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Free Consultation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free
              <span className="gradient-text block">Google Ads Strategy Session</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book a 30-minute call to discover exactly how we'll get your repair shop 
              more customers through Google Ads. No sales pitch, just actionable strategies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  What You'll Get:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Custom Google Ads strategy for your location",
                    "Competitor analysis report",
                    "Keyword opportunities assessment", 
                    "Anti-blocking system explanation",
                    "ROI projections for your business"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Quick Response
                </h3>
                <p className="text-sm text-muted-foreground">
                  We'll contact you within 24 hours to schedule your free strategy session 
                  at a time that works for you.
                </p>
              </Card>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-background/50"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-background/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 bg-background/50"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Input
                        name="business"
                        placeholder="Business Name *"
                        value={formData.business}
                        onChange={handleInputChange}
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="location"
                      placeholder="City, State *"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      name="message"
                      placeholder="Tell us about your repair shop and current marketing challenges..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 bg-background/50 min-h-[120px]"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Book My Free Strategy Session
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};