
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Galaxy S24 Ultra - 512GB'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        title: "Pre-order received!",
        description: "We'll contact you shortly with more details.",
      });
      
      // Reset form after showing success state
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          model: 'Galaxy S24 Ultra - 512GB'
        });
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-samsung-blue opacity-5 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-samsung-blue opacity-5 rounded-full -z-10"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Pre-order Your Galaxy S24 Ultra</h2>
          <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
            Be among the first to experience the next generation of Galaxy. Complete the form below to secure your pre-order.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl p-8 subtle-shadow animate-fade-in" style={{ animationDelay: '200ms' }}>
            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your pre-order has been received. We'll contact you shortly with more details about your Galaxy S24 Ultra.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    Choose Model
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formState.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-samsung-blue focus:border-transparent transition-all"
                  >
                    <option value="Galaxy S24 Ultra - 256GB">Galaxy S24 Ultra - 256GB</option>
                    <option value="Galaxy S24 Ultra - 512GB">Galaxy S24 Ultra - 512GB</option>
                    <option value="Galaxy S24 Ultra - 1TB">Galaxy S24 Ultra - 1TB</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-samsung-blue text-white font-medium py-3.5 rounded-lg hover:bg-opacity-90 transition-all transform hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Pre-order'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p>By submitting this form, you agree to our <a href="#" className="text-samsung-blue hover:underline">Terms of Service</a> and <a href="#" className="text-samsung-blue hover:underline">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
