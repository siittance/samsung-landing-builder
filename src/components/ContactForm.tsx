
import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Galaxy S24 Ultra - 512ГБ'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Предзаказ получен!",
        description: "Мы свяжемся с вами в ближайшее время для уточнения деталей.",
      });
      
      // Reset form after showing success state
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          model: 'Galaxy S24 Ultra - 512ГБ'
        });
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-samsung-blue opacity-5 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-samsung-blue opacity-5 rounded-full -z-10"></div>
      <div className="absolute -z-10 top-1/3 left-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-pulse blur-3xl"></div>
      
      <div ref={sectionRef} className="section-container">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Предзаказ Galaxy S24 Ultra</h2>
          <p className="text-gray-600 text-lg" style={{ animationDelay: '100ms' }}>
            Будьте среди первых, кто испытает новое поколение Galaxy. Заполните форму ниже, чтобы оформить предзаказ.
          </p>
        </div>
        
        <div className={`max-w-xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-white rounded-2xl p-8 subtle-shadow">
            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Спасибо!</h3>
                <p className="text-gray-600">
                  Ваш предзаказ получен. Мы свяжемся с вами в ближайшее время с дополнительной информацией о вашем Galaxy S24 Ultra.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Полное имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                    placeholder="Введите ваше полное имя"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                    placeholder="Введите вашу электронную почту"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                    placeholder="Введите ваш номер телефона"
                  />
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    Выберите модель
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formState.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                  >
                    <option value="Galaxy S24 Ultra - 256ГБ">Galaxy S24 Ultra - 256ГБ</option>
                    <option value="Galaxy S24 Ultra - 512ГБ">Galaxy S24 Ultra - 512ГБ</option>
                    <option value="Galaxy S24 Ultra - 1ТБ">Galaxy S24 Ultra - 1ТБ</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-samsung-blue text-white font-medium py-3.5 rounded-lg hover:bg-opacity-90 transition-all transform hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Обработка...' : 'Оформить предзаказ'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500" style={{ animationDelay: '300ms' }}>
            <p>Отправляя эту форму, вы соглашаетесь с нашими <a href="#" className="text-samsung-blue hover:underline">Условиями обслуживания</a> и <a href="#" className="text-samsung-blue hover:underline">Политикой конфиденциальности</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
