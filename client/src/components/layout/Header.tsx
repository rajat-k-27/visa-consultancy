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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Languages className="h-6 w-6 text-secondary" />
              </div>
              <h1 className="text-2xl font-bold text-secondary font-poppins">GlobalVisa</h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`font-medium transition-colors cursor-pointer ${location === item.href ? 'text-primary' : 'text-dark hover:text-primary'}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden text-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Free Consultation Button */}
          <Link href="/consultation">
            <div className="hidden md:block">
              <Button className="bg-primary text-secondary hover:bg-primary/90 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Free Consultation
              </Button>
            </div>
          </Link>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-5">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`font-medium py-2 transition-colors block cursor-pointer ${location === item.href ? 'text-primary' : 'text-dark hover:text-primary'}`}>
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/consultation">
                <div className="mt-2">
                  <Button className="w-full bg-primary text-secondary hover:bg-primary/90 font-bold rounded-full">
                    Free Consultation
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
