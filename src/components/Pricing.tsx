import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    price: 25,
    features: [
      'Verified Google Voice Number',
      'Instant Delivery',
      'Basic Setup Guide',
      'Email Support',
      '30-Day Guarantee'
    ],
    popular: false
  },
  {
    name: 'Premium',
    price: 45,
    features: [
      'Verified Google Voice Number',
      'Instant Delivery',
      'Complete Setup Service',
      'Priority 24/7 Support',
      '60-Day Guarantee',
      'Number Selection Options',
      'Backup & Recovery'
    ],
    popular: true
  },
  {
    name: 'Business',
    price: 75,
    features: [
      'Multiple Google Voice Numbers',
      'Instant Delivery',
      'Full Account Setup',
      'Dedicated Support Manager',
      '90-Day Guarantee',
      'Custom Number Selection',
      'Account Management',
      'Business Integration'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect Google Voice number package for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden relative transform transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-4 ring-blue-600' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 font-semibold flex items-center justify-center gap-2">
                  <Star className="h-4 w-4" />
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}