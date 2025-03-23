
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Эмили Чен",
    role: "Профессиональный фотограф",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote: "Камера S24 Ultra полностью изменила мой подход к мобильной фотографии. Детализация в режиме 200МП просто невероятная, а инструменты редактирования с ИИ экономят часы постобработки.",
    rating: 5
  },
  {
    id: 2,
    name: "Михаил Петров",
    role: "Техноэнтузиаст",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Я владел каждым флагманом Galaxy начиная с S7, и S24 Ultra безусловно самый впечатляющий. Производительность молниеносная, а время работы батареи значительно улучшилось.",
    rating: 5
  },
  {
    id: 3,
    name: "Сара Иванова",
    role: "Контент-криейтор",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "Как человек, который ежедневно создает контент, S24 Ultra стал настоящим прорывом. Функции Galaxy AI помогают писать лучшие подписи, а качество камеры не имеет себе равных для создания контента в социальных сетях.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Resume auto transition after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="testimonials" className="py-24 bg-samsung-gray relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Что говорят наши пользователи</h2>
          <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
            Мнения людей, которые уже оценили мощь Galaxy S24 Ultra.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials slider */}
          <div className="overflow-hidden rounded-2xl bg-white subtle-shadow">
            <div 
              className="transition-transform duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
                      <div className="absolute inset-0 bg-samsung-blue opacity-10 rounded-full -m-1"></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover rounded-full ring-2 ring-white"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16}
                            fill={i < testimonial.rating ? "#FFD700" : "none"}
                            stroke={i < testimonial.rating ? "#FFD700" : "#86868B"}
                            className="mr-1"
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg italic mb-4 text-gray-700">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all transform hover:scale-110 focus:outline-none"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all transform hover:scale-110 focus:outline-none"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-samsung-blue w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
