
import React from 'react';
import { ChevronUp, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-12 pb-6 relative">
      <div className="section-container">
        <div className="flex justify-center mb-8">
          <button 
            onClick={scrollToTop}
            className="bg-samsung-blue bg-opacity-10 hover:bg-opacity-20 text-samsung-blue rounded-full p-3 transform transition-transform hover:translate-y-[-5px]"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Galaxy S24 Ultra</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-samsung-blue text-sm">Features</a></li>
              <li><a href="#specifications" className="text-gray-600 hover:text-samsung-blue text-sm">Specifications</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Galaxy AI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Accessories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Compare Models</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-600 hover:text-samsung-blue text-sm">Pre-order Now</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Trade-in Program</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Financing Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Business Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Student Discount</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Warranty Information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Service Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-samsung-blue text-sm">Software Updates</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-samsung-blue mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:contact@samsung.com" className="text-gray-600 hover:text-samsung-blue text-sm">contact@samsung.com</a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-samsung-blue mt-1 mr-3 flex-shrink-0" />
                <a href="tel:1-800-SAMSUNG" className="text-gray-600 hover:text-samsung-blue text-sm">1-800-SAMSUNG</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-samsung-blue mt-1 mr-3 flex-shrink-0" />
                <address className="text-gray-600 text-sm not-italic">
                  Samsung Electronics America<br />
                  85 Challenger Road<br />
                  Ridgefield Park, NJ 07660
                </address>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-samsung-blue transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-samsung-blue transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-samsung-blue transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-samsung-blue transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Samsung Electronics America, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-gray-500 hover:text-samsung-blue">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-samsung-blue">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-samsung-blue">Accessibility</a>
              <a href="#" className="text-xs text-gray-500 hover:text-samsung-blue">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
