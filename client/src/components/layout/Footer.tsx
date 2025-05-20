import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Languages } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Languages className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white font-poppins">GlobalVisa</h3>
            </div>
            <p className="text-white text-opacity-70 mb-6">
              Your trusted partner for international education and visa consultancy, helping students achieve their dreams since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full transition-all" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full transition-all" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full transition-all" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full transition-all" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><span className="text-white text-opacity-70 hover:text-primary transition-colors cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="text-white text-opacity-70 hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/countries"><span className="text-white text-opacity-70 hover:text-primary transition-colors cursor-pointer">Countries</span></Link></li>
              <li><Link href="/services"><span className="text-white text-opacity-70 hover:text-primary transition-colors cursor-pointer">Services</span></Link></li>
              <li><Link href="/eligibility"><span className="text-white text-opacity-70 hover:text-primary transition-colors cursor-pointer">Eligibility</span></Link></li>
              <li><Link href="/contact"><span className="text-white text-opacity-70 hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">University Selection</a></li>
              <li><a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Application Assistance</a></li>
              <li><a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Visa Processing</a></li>
              <li><a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Test Preparation</a></li>
              <li><a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Pre-Departure Support</a></li>
              <li><a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Career Counseling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-white text-opacity-70">123 Education Street, Suite 456<br/>New York, NY 10001, USA</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-white text-opacity-70">info@globalvisa.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-white text-opacity-70">+1 (800) 555-1234</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-white text-opacity-70">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-70 mb-4 md:mb-0">© {new Date().getFullYear()} GlobalVisa. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-white text-opacity-70 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
