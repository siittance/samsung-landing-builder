
import React from 'react';
import { Camera, Cpu, Zap, Shield, Cloud, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay: string
}) => (
  <div 
    className="bg-white rounded-2xl p-6 subtle-shadow flex flex-col h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" 
    style={{ animationDelay: delay }}
  >
    <div className="rounded-full bg-samsung-gray w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Camera className="text-samsung-blue" size={24} />,
      title: "200MP Camera",
      description: "Capture incredibly detailed photos with our highest resolution camera ever, even in low light conditions.",
      delay: "0ms"
    },
    {
      icon: <Cpu className="text-samsung-blue" size={24} />,
      title: "Snapdragon 8 Gen 3",
      description: "Our fastest processor yet with dedicated AI capabilities for blazing performance and efficiency.",
      delay: "100ms"
    },
    {
      icon: <Zap className="text-samsung-blue" size={24} />,
      title: "Super Fast Charging",
      description: "Go from 0 to 50% in just 20 minutes with our advanced 45W fast charging technology.",
      delay: "200ms"
    },
    {
      icon: <Shield className="text-samsung-blue" size={24} />,
      title: "Samsung Knox",
      description: "Best-in-class security that protects your data from the chip level up to the application layer.",
      delay: "300ms"
    },
    {
      icon: <Cloud className="text-samsung-blue" size={24} />,
      title: "Galaxy AI",
      description: "Advanced AI features for photo editing, translation, and productivity that adapt to how you use your phone.",
      delay: "400ms"
    },
    {
      icon: <Smartphone className="text-samsung-blue" size={24} />,
      title: "Titanium Design",
      description: "Durable, lightweight titanium frame with enhanced drop and scratch resistance in a premium finish.",
      delay: "500ms"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-samsung-blue opacity-5 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-samsung-blue opacity-5 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Cutting-Edge Features</h2>
          <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
            The Galaxy S24 Ultra combines innovative technology with elegant design to deliver an unparalleled mobile experience.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
