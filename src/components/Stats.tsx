
import React, { useRef, useEffect, useState } from 'react';

const StatItem = ({ number, label, suffix = '', delay }: { 
  number: number, 
  label: string, 
  suffix?: string,
  delay: number 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          setTimeout(() => {
            let start = 0;
            const end = number;
            const duration = 2000;
            const startTime = performance.now();
            
            const animate = (time: number) => {
              const runtime = time - startTime;
              const relativeProgress = runtime / duration;
              
              if (relativeProgress < 1) {
                const easeOutQuart = 1 - Math.pow(1 - relativeProgress, 4);
                setCount(Math.floor(easeOutQuart * end));
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };
            
            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [number, hasAnimated, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center items-end">
        <span className="text-3xl md:text-5xl font-bold text-samsung-blue">
          {count}
        </span>
        <span className="text-xl md:text-2xl font-medium text-samsung-blue ml-1">
          {suffix}
        </span>
      </div>
      <p className="text-sm md:text-base text-gray-600 mt-2">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="specifications" className="py-16">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">The Numbers Speak</h2>
          <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
            Galaxy S24 Ultra pushes the boundaries with impressive specifications that set new industry standards.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem number={200} label="MP Camera Resolution" suffix="MP" delay={0} />
          <StatItem number={5000} label="Battery Capacity" suffix="mAh" delay={300} />
          <StatItem number={12} label="GB RAM" suffix="GB" delay={600} />
          <StatItem number={7} label="Years of OS Updates" delay={900} />
        </div>
        
        <div className="mt-24 bg-white rounded-2xl p-8 subtle-shadow animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Specifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Display:</span> 6.8" QHD+ Dynamic AMOLED 2X, 120Hz
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Processor:</span> Snapdragon 8 Gen 3 for Galaxy
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Memory:</span> 12GB RAM with 256GB/512GB/1TB storage
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Battery:</span> 5000mAh with 45W fast charging
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Camera System</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Main:</span> 200MP, f/1.7, OIS
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Ultra-wide:</span> 12MP, f/2.2, 120° FOV
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Telephoto:</span> 10MP, f/2.4, 3x optical zoom
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Periscope:</span> 50MP, f/3.4, 5x optical zoom
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
