import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  ArrowRight,
  CheckCircle,
  Code,
  Shield,
  Zap
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "150+", icon: Award },
    { label: "Happy Clients", value: "80+", icon: Users },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Years Experience", value: "5+", icon: Target }
  ];

  const values = [
    {
      icon: Code,
      title: "Excellence in Code",
      description: "We write clean, maintainable, and scalable code that stands the test of time."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Every solution we build prioritizes security and follows industry best practices."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    }
  ];

  const teamMembers = [
    {
      name: "Frontend Specialists",
      description: "Expert React, Vue, and Angular developers creating stunning user interfaces."
    },
    {
      name: "Backend Engineers", 
      description: "Skilled in Node.js, Python, and cloud technologies for robust server solutions."
    },
    {
      name: "Mobile Developers",
      description: "Native and cross-platform mobile app developers for iOS and Android."
    },
    {
      name: "Security Experts",
      description: "Certified security professionals ensuring your applications are bulletproof."
    },
    {
      name: "Web3 Developers",
      description: "Blockchain and DeFi specialists building the future of decentralized web."
    },
    {
      name: "AI Engineers",
      description: "Machine learning and AI experts creating intelligent automation solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                About JUD-EX
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Just Us Developers Extension represents a collective of passionate developers, 
                security experts, and innovation enthusiasts dedicated to transforming ideas into 
                exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    At JUD-EX, we bridge the gap between innovative technology and practical business solutions. 
                    Our mission is to empower businesses with secure, scalable, and future-ready applications 
                    that drive growth and success in the digital age.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We specialize in modern web development, mobile applications, security testing, 
                    Web3 solutions, and AI implementations. Every project we undertake is approached 
                    with dedication to quality, security, and innovation.
                  </p>
                  <Button className="bg-gradient-primary hover:shadow-glow">
                    <Link to="/contact" className="flex items-center">
                      Work With Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expert Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A diverse group of specialists working together to deliver exceptional results 
                across all areas of modern software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose JUD-EX?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Full-stack expertise across all technologies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Security-first development approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Agile project management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">24/7 support and maintenance</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Cutting-edge Web3 and AI solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Transparent communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Competitive pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Global remote collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your goals 
              with innovative, secure, and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link to="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/services">
                  View Our Services
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

export default About;