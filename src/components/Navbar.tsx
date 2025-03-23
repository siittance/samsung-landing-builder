
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled 
          ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="font-bold text-2xl text-samsung-black">SAMSUNG</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-800 hover:text-samsung-blue transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-gray-800 hover:text-samsung-blue transition-colors text-sm font-medium">
              Testimonials
            </a>
            <a href="#specifications" className="text-gray-800 hover:text-samsung-blue transition-colors text-sm font-medium">
              Specifications
            </a>
            <a href="#contact" className="bg-samsung-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all transform hover:scale-[1.03] active:scale-[0.97]">
              Pre-order Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-5">
            <a 
              href="#features" 
              className="block text-gray-800 hover:text-samsung-blue transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-800 hover:text-samsung-blue transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#specifications" 
              className="block text-gray-800 hover:text-samsung-blue transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Specifications
            </a>
            <a 
              href="#contact" 
              className="inline-block bg-samsung-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pre-order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
