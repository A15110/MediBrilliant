import React from 'react';
import { ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Streamline Your Medical Billing Operations
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Transform your healthcare practice with our comprehensive medical billing services. 
              Increase revenue, reduce costs, and focus on what matters most - your patients.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center justify-center hover:bg-blue-700 transition">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition">
                Calculate ROI
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">99.9% Accuracy</h3>
              <p className="text-gray-600">Industry-leading billing accuracy rates</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">30% Faster</h3>
              <p className="text-gray-600">Reduced time-to-payment cycles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">15% More Revenue</h3>
              <p className="text-gray-600">Average increase in collections</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white mb-4">
                20+
              </div>
              <h3 className="font-semibold text-lg mb-2">Years Experience</h3>
              <p className="text-gray-600">Deep industry expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}