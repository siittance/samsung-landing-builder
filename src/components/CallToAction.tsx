
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current && imageRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        const scrollProgress = 1 - (rect.top / window.innerHeight);
        
        if (scrollProgress > 0 && scrollProgress < 1.5) {
          const rotation = scrollProgress * 5; // Max 5 degree rotation
          const scale = 1 + (scrollProgress * 0.05); // Max 5% scale increase
          const translate = scrollProgress * 15; // Max 15px translation
          
          imageRef.current.style.transform = `rotate(${rotation}deg) scale(${scale}) translateY(-${translate}px)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-samsung-gray overflow-hidden">
      <div className="section-container relative" ref={ctaRef}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-6 text-center md:text-left z-10">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
              Experience the Future <br className="hidden md:block" />of Mobile Technology
            </h2>
            <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
              The Galaxy S24 Ultra represents our commitment to innovation, sustainability, and creating technology that enhances lives.
            </p>
            
            <div className="pt-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 bg-samsung-blue text-white px-8 py-3.5 rounded-full text-md font-medium hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Pre-order Your S24 Ultra
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative w-full max-w-md" ref={imageRef}>
            <div className="relative overflow-hidden rounded-3xl subtle-shadow transform transition-transform duration-700 ease-out">
              <div className="aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1240&q=80" 
                  alt="Galaxy S24 Ultra lifestyle" 
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-semibold text-sm uppercase tracking-wider mb-2">Galaxy AI</p>
                <h3 className="text-2xl font-bold mb-1">Transform How You Create</h3>
                <p className="text-sm text-white/80">Photo editing, language translation, and more with our most intelligent Galaxy yet.</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-3/4 h-3/4 bg-samsung-blue/5 rounded-3xl"></div>
            <div className="absolute -z-10 -top-4 -left-4 w-3/4 h-3/4 bg-samsung-blue/5 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
