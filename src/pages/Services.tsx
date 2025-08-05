import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Shield, 
  Bot, 
  Coins,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, Vue, Angular, and cutting-edge frameworks.",
      features: ["React & Next.js", "Vue.js & Nuxt.js", "Angular", "TypeScript", "Responsive Design", "Performance Optimization"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions with robust APIs, databases, and cloud infrastructure.",
      features: ["Node.js & Express", "Python & Django", "RESTful APIs", "GraphQL", "Database Design", "Cloud Deployment"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development", "Cross-Platform", "App Store Deployment"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Comprehensive security audits and penetration testing for web and mobile applications.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Code Review", "Security Audits", "Compliance Testing", "Risk Analysis"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Coins,
      title: "Web3 Development",
      description: "Blockchain solutions, smart contracts, and decentralized applications for the future of web.",
      features: ["Smart Contracts", "DApp Development", "NFT Platforms", "DeFi Solutions", "Ethereum & Polygon", "Web3 Integration"],
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Artificial intelligence and machine learning implementations to automate and enhance your business.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "AI Chatbots", "Data Analytics", "Automation"],
      gradient: "from-indigo-500 to-blue-500"
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive development services 
              that drive innovation and deliver exceptional results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link to="/contact" className="flex items-center">
                  Get A Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;