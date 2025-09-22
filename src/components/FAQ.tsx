import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is a Google Voice number?',
    answer: 'A Google Voice number is a free phone number provided by Google that allows you to make calls, send texts, and receive voicemails. It works across all your devices and provides advanced features like call screening and voicemail transcription.'
  },
  {
    question: 'How quickly will I receive my Google Voice number?',
    answer: 'You will receive your Google Voice number credentials within 5-10 minutes after completing your purchase. All numbers are pre-verified and ready to use immediately.'
  },
  {
    question: 'Are these numbers legitimate and safe to use?',
    answer: 'Yes, all our Google Voice numbers are 100% legitimate and obtained through official Google channels. They are fully verified and safe to use for any business or personal purpose.'
  },
  {
    question: 'Can I choose my own number?',
    answer: 'With our Premium and Business plans, you can request specific area codes or number patterns. We will do our best to accommodate your preferences based on availability.'
  },
  {
    question: 'What if I have issues with my Google Voice number?',
    answer: 'We provide comprehensive support for all customers. Our team is available 24/7 to help with setup, troubleshooting, and any questions you may have about using your Google Voice number.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a satisfaction guarantee. If you\'re not satisfied with your purchase, contact us within the guarantee period (30-90 days depending on your plan) for a full refund.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our Google Voice numbers.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}