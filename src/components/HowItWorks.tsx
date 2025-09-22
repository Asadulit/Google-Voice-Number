import React from 'react';
import { CreditCard, Smartphone, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: CreditCard,
    title: 'Choose & Purchase',
    description: 'Select your preferred Google Voice number package and complete the secure payment process.'
  },
  {
    icon: Smartphone,
    title: 'Instant Delivery',
    description: 'Receive your verified Google Voice number credentials via email within minutes of purchase.'
  },
  {
    icon: CheckCircle,
    title: 'Start Using',
    description: 'Log in to your Google Voice account and begin using your new number immediately for calls, texts, and voicemail.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your Google Voice number is simple and takes just a few minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}