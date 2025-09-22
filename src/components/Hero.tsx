import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Google Voice Number</span> Today
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Secure, verified Google Voice numbers for business, privacy, and communication. 
            Instant delivery with full setup support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#pricing" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#how-it-works" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all">
              Learn More
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <CheckCircle className="h-6 w-6 text-green-300" />
              <span className="font-medium">Instant Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <CheckCircle className="h-6 w-6 text-green-300" />
              <span className="font-medium">100% Verified Numbers</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <CheckCircle className="h-6 w-6 text-green-300" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}