import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0v15h15v15h-15v15h-15v-15H0v-15h15V0z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="30" cy="30" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-primary"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            JUD-EX
          </h1>
          
          <p className="text-xl md:text-2xl text-primary mb-4 font-medium">
            Just Us Developers Extension
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft cutting-edge software solutions, secure applications, and innovative Web3 & AI experiences. 
            Your trusted partner for frontend, backend, mobile development, and security testing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-2xl mb-4 group-hover:shadow-primary transition-all duration-300">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm">Frontend, backend, and mobile applications built with modern technologies</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-2xl mb-4 group-hover:shadow-primary transition-all duration-300">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Security Testing</h3>
              <p className="text-muted-foreground text-sm">Comprehensive security audits for web and mobile applications</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-2xl mb-4 group-hover:shadow-primary transition-all duration-300">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Emerging Tech</h3>
              <p className="text-muted-foreground text-sm">Web3, AI, and blockchain solutions for next-generation applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;