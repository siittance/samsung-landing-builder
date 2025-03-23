
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
    <section id="specifications" className="py-16 relative overflow-hidden">
      <div className="absolute -z-10 top-1/4 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      
      <div ref={sectionRef} className="section-container">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цифры говорят сами за себя</h2>
          <p className="text-gray-600 text-lg" style={{ animationDelay: '100ms' }}>
            Galaxy S24 Ultra раздвигает границы с впечатляющими характеристиками, которые устанавливают новые стандарты в отрасли.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem number={200} label="Разрешение камеры" suffix="МП" delay={0} />
          <StatItem number={5000} label="Емкость аккумулятора" suffix="мАч" delay={300} />
          <StatItem number={12} label="Оперативная память" suffix="ГБ" delay={600} />
          <StatItem number={7} label="Лет обновлений ОС" delay={900} />
        </div>
        
        <div className={`mt-24 bg-white rounded-2xl p-8 subtle-shadow transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '300ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Ключевые характеристики</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Дисплей:</span> 6.8" QHD+ Dynamic AMOLED 2X, 120Гц
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Процессор:</span> Snapdragon 8 Gen 3 для Galaxy
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Память:</span> 12ГБ ОЗУ с хранилищем 256ГБ/512ГБ/1ТБ
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Аккумулятор:</span> 5000мАч с быстрой зарядкой 45Вт
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Система камер</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Основная:</span> 200МП, f/1.7, OIS
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Сверхширокоугольная:</span> 12МП, f/2.2, 120° FOV
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Телефото:</span> 10МП, f/2.4, 3x оптический зум
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-samsung-blue mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">Перископ:</span> 50МП, f/3.4, 5x оптический зум
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
