
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      
      // Check if section is visible
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
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
          <div className={`max-w-xl space-y-6 text-center md:text-left z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Испытайте будущее <br className="hidden md:block" />мобильных технологий
            </h2>
            <p className="text-gray-600 text-lg" style={{ animationDelay: '100ms' }}>
              Galaxy S24 Ultra представляет наше стремление к инновациям, устойчивому развитию и созданию технологий, которые улучшают жизнь.
            </p>
            
            <div className="pt-4" style={{ animationDelay: '200ms' }}>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 bg-samsung-blue text-white px-8 py-3.5 rounded-full text-md font-medium hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Оформите предзаказ на S24 Ultra
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div 
            className={`relative w-full max-w-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} 
            ref={imageRef}
          >
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
                <h3 className="text-2xl font-bold mb-1">Измените подход к творчеству</h3>
                <p className="text-sm text-white/80">Редактирование фото, перевод языка и многое другое с нашим самым интеллектуальным Galaxy.</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-3/4 h-3/4 bg-samsung-blue/5 rounded-3xl"></div>
            <div className="absolute -z-10 -top-4 -left-4 w-3/4 h-3/4 bg-samsung-blue/5 rounded-3xl"></div>
            
            {/* New floating elements */}
            <div className="absolute top-20 -right-8 w-14 h-14 bg-blue-500 rounded-full opacity-10 animate-float"></div>
            <div className="absolute bottom-20 -left-6 w-10 h-10 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
