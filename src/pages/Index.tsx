
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import TrustElements from '@/components/TrustElements';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when hash link is clicked
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href?.startsWith('#') && href !== '#') {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          history.pushState(null, '', href);
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);
  
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Stats />
      <CallToAction />
      <ContactForm />
      <TrustElements />
      <Footer />
    </main>
  );
};

export default Index;
