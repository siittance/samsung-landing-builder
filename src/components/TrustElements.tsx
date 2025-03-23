
import React, { useRef, useEffect, useState } from 'react';
import { Shield, Award, Clock, RefreshCw } from 'lucide-react';

const TrustElements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-samsung-gray relative overflow-hidden">
      <div className="absolute -z-10 top-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      
      <div ref={sectionRef} className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Trust element 1 */}
          <div className={`bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <Shield className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Samsung Knox Security</h3>
            <p className="text-sm text-gray-600">
              Защита оборонного уровня, созданная на уровне чипа для защиты ваших данных.
            </p>
          </div>
          
          {/* Trust element 2 */}
          <div className={`bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <Award className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Гарантия 2 года</h3>
            <p className="text-sm text-gray-600">
              Расширенное гарантийное покрытие включено в каждую покупку.
            </p>
          </div>
          
          {/* Trust element 3 */}
          <div className={`bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <Clock className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">7 лет обновлений</h3>
            <p className="text-sm text-gray-600">
              Гарантированные обновления ОС и безопасности на 7 лет.
            </p>
          </div>
          
          {/* Trust element 4 */}
          <div className={`bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <RefreshCw className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">30 дней на возврат</h3>
            <p className="text-sm text-gray-600">
              Попробуйте Galaxy S24 Ultra без риска с нашей гарантией удовлетворения.
            </p>
          </div>
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-xl font-semibold mb-8">Нам доверяют наши партнеры</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google" className="h-8 object-contain" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-8 object-contain" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon" className="h-8 object-contain" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1280px-Spotify_logo_with_text.svg.png" alt="Spotify" className="h-8 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
