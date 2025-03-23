
import React, { useRef, useEffect, useState } from 'react';
import { Camera, Cpu, Zap, Shield, Cloud, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay, index }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay: string,
  index: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-2xl p-6 subtle-shadow flex flex-col h-full transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="rounded-full bg-samsung-gray w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Camera className="text-samsung-blue" size={24} />,
      title: "Камера 200 МП",
      description: "Снимайте невероятно детализированные фотографии с нашей камерой самого высокого разрешения, даже при слабом освещении.",
      delay: "0ms"
    },
    {
      icon: <Cpu className="text-samsung-blue" size={24} />,
      title: "Snapdragon 8 Gen 3",
      description: "Наш самый быстрый процессор с выделенными возможностями ИИ для молниеносной производительности и эффективности.",
      delay: "100ms"
    },
    {
      icon: <Zap className="text-samsung-blue" size={24} />,
      title: "Сверхбыстрая зарядка",
      description: "От 0 до 50% всего за 20 минут с нашей передовой технологией быстрой зарядки мощностью 45 Вт.",
      delay: "200ms"
    },
    {
      icon: <Shield className="text-samsung-blue" size={24} />,
      title: "Samsung Knox",
      description: "Лучшая в своем классе защита, которая защищает ваши данные от уровня чипа до уровня приложений.",
      delay: "300ms"
    },
    {
      icon: <Cloud className="text-samsung-blue" size={24} />,
      title: "Galaxy AI",
      description: "Продвинутые функции ИИ для редактирования фотографий, перевода и продуктивности, которые адаптируются к тому, как вы используете свой телефон.",
      delay: "400ms"
    },
    {
      icon: <Smartphone className="text-samsung-blue" size={24} />,
      title: "Дизайн из титана",
      description: "Прочная, легкая титановая рама с улучшенной защитой от падений и царапин в премиальной отделке.",
      delay: "500ms"
    }
  ];

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
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-samsung-blue opacity-5 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-samsung-blue opacity-5 rounded-full"></div>
      
      <div ref={sectionRef} className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Передовые функции</h2>
          <p className="text-gray-600 text-lg" style={{ animationDelay: '100ms' }}>
            Galaxy S24 Ultra сочетает в себе инновационные технологии с элегантным дизайном для обеспечения непревзойденного мобильного опыта.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
