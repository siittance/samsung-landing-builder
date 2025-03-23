
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollPosition = window.scrollY;
        const offset = Math.min(scrollPosition * 0.2, 50);
        phoneRef.current.style.transform = `translateY(${offset}px) rotate(5deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-20 overflow-hidden relative bg-gradient-to-b from-white to-samsung-gray">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="max-w-2xl lg:max-w-lg space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h4 className="text-sm uppercase tracking-wider text-samsung-blue font-semibold animate-fade-in">
                The Next Evolution
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-fade-in" style={{ animationDelay: '100ms' }}>
                Galaxy S24 Ultra
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light text-balance animate-fade-in" style={{ animationDelay: '200ms' }}>
                A revolutionary camera with AI superpowers
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
              Experience the future of mobile photography with Galaxy AI. Capture stunning detail in any light condition with our most advanced camera system ever.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a 
                href="#contact" 
                className="bg-samsung-blue text-white px-8 py-3 rounded-full text-md font-medium hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Pre-order Now
              </a>
              <a 
                href="#features" 
                className="border border-gray-300 bg-white text-gray-800 px-8 py-3 rounded-full text-md font-medium hover:border-samsung-blue hover:text-samsung-blue transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right content - Phone image */}
          <div ref={phoneRef} className="w-full max-w-sm lg:max-w-md xl:max-w-lg relative animate-fade-in transform rotate-5" style={{ animationDelay: '500ms' }}>
            <div className="relative w-full aspect-[9/16] overflow-hidden rounded-3xl strong-shadow">
              <div className="absolute inset-0 bg-gradient-to-tr from-samsung-blue to-blue-400 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Samsung Galaxy S24 Ultra" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-samsung-blue rounded-full opacity-5 animate-pulse-subtle"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-samsung-blue rounded-full opacity-5 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-xs font-medium text-gray-500 mb-1">Scroll</span>
          <ChevronDown size={18} className="text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
