import React from 'react';
import { Menu, X, Phone, Calculator } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Calculator className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">MediBrilliant</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="#calculator" className="text-gray-600 hover:text-blue-600">ROI Calculator</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600">Services</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600">Benefits</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600">Testimonials</a>
            <a href="#calculator" className="block px-3 py-2 text-gray-600">ROI Calculator</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}