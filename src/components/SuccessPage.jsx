import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Home } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-transform duration-300">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to AgriSiti!</h2>
            <p className="text-gray-600">Your registration has been successfully submitted.</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 mb-2">What's Next?</h3>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Check your email for confirmation details</li>
              <li>• Our team will contact you within 24-48 hours</li>
              <li>• Prepare for your modern farming journey!</li>
            </ul>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors duration-200 mb-4"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <Leaf className="w-5 h-5" />
            <span className="text-sm font-medium">Growing the future of agriculture together</span>
            <Leaf className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}