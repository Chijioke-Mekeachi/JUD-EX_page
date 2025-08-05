import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin,
  Send,
  Clock,
  Globe
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in your development services. 
      
Name: ${formData.name}
Company: ${formData.company}
Subject: ${formData.subject}
Message: ${formData.message}`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate email sending
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Subject: ${formData.subject}

Message:
${formData.message}`
    );
    
    window.open(`mailto:info@jud-ex.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "info@jud-ex.com",
      action: () => window.open('mailto:info@jud-ex.com', '_blank')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      value: "+1 (555) 123-4567",
      action: handleWhatsApp
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+1 (555) 123-4567",
      action: () => window.open('tel:+15551234567', '_blank')
    },
    {
      icon: Globe,
      title: "Remote First",
      description: "We work globally",
      value: "Worldwide",
      action: () => {}
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with our team of experts. 
              We're here to help bring your ideas to life.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 cursor-pointer group"
                  onClick={contact.action}
                >
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:shadow-glow transition-all duration-300">
                      <contact.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{contact.title}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-primary font-medium">{contact.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours. 
                    You can also reach us directly via WhatsApp for immediate assistance.
                  </p>
                  
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="company"
                        placeholder="Company (Optional)"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-background border-border"
                      />
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background border-border"
                    />
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        className="flex-1 bg-gradient-primary hover:shadow-glow"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </Button>
                      <Button 
                        type="button"
                        onClick={handleWhatsApp}
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <p className="text-muted-foreground mb-6">
                      We're a remote-first development team working with clients worldwide. 
                      No matter where you are, we're ready to help you build something amazing.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Response Time</h4>
                        <p className="text-muted-foreground">We typically respond within 2-4 hours during business days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Globe className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Global Coverage</h4>
                        <p className="text-muted-foreground">Working across all time zones to serve clients worldwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Send className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Project Consultation</h4>
                        <p className="text-muted-foreground">Free initial consultation to discuss your project requirements</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-primary p-6 rounded-2xl">
                    <h4 className="font-semibold text-primary-foreground mb-2">Quick Start</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Ready to begin immediately? Click the WhatsApp button for instant communication 
                      and let's discuss your project requirements in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;