import React from 'react';
import { Calculator } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">MediBrilliant</span>
            </div>
            <p className="text-gray-400">
              Transforming healthcare billing with expertise, technology, and dedication.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Insurance Management</li>
              <li>Claims Processing</li>
              <li>Payment Posting</li>
              <li>Contract Negotiations</li>
              <li>Financial Reports</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediBrilliant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}