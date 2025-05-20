import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Languages, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/countries', label: 'Countries' },
    { href: '/services', label: 'Services' },
    { href: '/eligibility', label: 'Eligibility' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[15%] w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-0 left-[20%] w-12 h-12 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: "1.2s" }}></div>
        <div className="absolute top-[30%] right-[30%] w-8 h-8 bg-accent/10 rounded-full animate-pulse-glow" style={{ animationDelay: "0.8s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-110">
                <Languages className="h-6 w-6 text-secondary animate-pulse-glow" />
              </div>
              <h1 className="text-2xl font-bold text-secondary font-poppins group-hover:text-primary transition-colors">
                <span className="inline-block hover:animate-float">G</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.1s" }}>l</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.2s" }}>o</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.3s" }}>b</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.4s" }}>a</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.5s" }}>l</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.6s" }}>V</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.7s" }}>i</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.8s" }}>s</span>
                <span className="inline-block hover:animate-float" style={{ animationDelay: "0.9s" }}>a</span>
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={`font-medium transition-all cursor-pointer px-3 py-2 rounded-md hover:bg-primary/10 ${
                    location === item.href 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-dark hover:text-primary'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
                    opacity: 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden text-dark bg-white/80 p-2 rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Free Consultation Button */}
          <Link href="/consultation">
            <div className="hidden md:block">
              <Button className="bg-primary text-secondary hover:bg-primary/90 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all overflow-hidden group relative">
                <span className="relative z-10">Free Consultation</span>
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </Link>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-5">
            <div className="flex flex-col space-y-3 relative overflow-hidden p-4 rounded-lg bg-white/95 shadow-xl">
              {/* Decorative elements for mobile menu */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/5 rounded-full"></div>
              
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <span 
                    className={`font-medium py-3 px-4 transition-all block cursor-pointer rounded-md ${
                      location === item.href 
                        ? 'text-primary bg-primary/10 font-bold' 
                        : 'text-dark hover:text-primary hover:bg-primary/5'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              
              <Link href="/consultation">
                <div className="mt-4">
                  <Button className="w-full bg-primary text-secondary hover:bg-primary/90 font-bold rounded-full py-6 shadow-lg overflow-hidden group relative">
                    <span className="relative z-10">Free Consultation</span>
                    <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
