
import React from 'react';
import { Shield, Award, Clock, RefreshCw } from 'lucide-react';

const TrustElements = () => {
  return (
    <section className="py-16 bg-samsung-gray">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Trust element 1 */}
          <div className="bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-shadow animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <Shield className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Samsung Knox Security</h3>
            <p className="text-sm text-gray-600">
              Defense-grade security built from the chip up to protect your data.
            </p>
          </div>
          
          {/* Trust element 2 */}
          <div className="bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <Award className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">2-Year Warranty</h3>
            <p className="text-sm text-gray-600">
              Extended warranty coverage included with every purchase.
            </p>
          </div>
          
          {/* Trust element 3 */}
          <div className="bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <Clock className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">7 Years of Updates</h3>
            <p className="text-sm text-gray-600">
              Guaranteed OS and security updates for 7 years.
            </p>
          </div>
          
          {/* Trust element 4 */}
          <div className="bg-white rounded-xl p-6 text-center subtle-shadow hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-samsung-blue bg-opacity-10 flex items-center justify-center">
                <RefreshCw className="text-samsung-blue" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">30-Day Return Policy</h3>
            <p className="text-sm text-gray-600">
              Try the Galaxy S24 Ultra risk-free with our satisfaction guarantee.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-xl font-semibold mb-8">Trusted By Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google" className="h-8 object-contain" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-8 object-contain" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon" className="h-8 object-contain" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1280px-Spotify_logo_with_text.svg.png" alt="Spotify" className="h-8 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
