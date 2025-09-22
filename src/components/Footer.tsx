import React from 'react';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">GoogleVoiceNumber.com</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted provider of verified Google Voice numbers for business and personal use.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Google Voice Numbers</li>
              <li>Account Setup</li>
              <li>Technical Support</li>
              <li>Business Solutions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Live Chat</li>
              <li>Setup Guides</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 GoogleVoiceNumber.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}