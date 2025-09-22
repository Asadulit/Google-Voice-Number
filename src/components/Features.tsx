import React from 'react';
import { Shield, Zap, Globe, Users, Lock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified & Secure',
    description: 'All Google Voice numbers are fully verified and ready to use immediately upon delivery.'
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Get your Google Voice number within minutes of purchase. No waiting, no delays.'
  },
  {
    icon: Globe,
    title: 'US-Based Numbers',
    description: 'Authentic US phone numbers that work seamlessly with all Google Voice features.'
  },
  {
    icon: Users,
    title: 'Business Ready',
    description: 'Perfect for businesses, freelancers, and professionals who need a reliable communication solution.'
  },
  {
    icon: Lock,
    title: 'Privacy Protection',
    description: 'Keep your personal number private while maintaining professional communication.'
  },
  {
    icon: Headphones,
    title: 'Full Support',
    description: '24/7 customer support to help you set up and use your Google Voice number effectively.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Google Voice Numbers?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide premium Google Voice numbers with unmatched reliability, security, and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}