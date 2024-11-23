import React from 'react';
import { FileCheck, Building, HandshakeIcon, FileText, Users, Wallet, BarChart } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: 'Insurance Contract Management',
    description: 'Comprehensive handling of insurance contracts and provider agreements'
  },
  {
    icon: Building,
    title: 'Hospital Contract Handling',
    description: 'Expert management of complex hospital and residential facility contracts'
  },
  {
    icon: HandshakeIcon,
    title: 'Insurance Negotiations',
    description: 'Strategic negotiation of insurance payments and dispute resolution'
  },
  {
    icon: FileText,
    title: 'Claims Processing',
    description: 'Efficient HCFA processing and claims management with high accuracy'
  },
  {
    icon: Users,
    title: 'Patient Statements',
    description: 'Clear, timely patient billing statements and communication'
  },
  {
    icon: Wallet,
    title: 'Payment Processing',
    description: 'Accurate posting and reconciliation of all payments'
  },
  {
    icon: BarChart,
    title: 'Financial Management',
    description: 'Complete payroll and office expense management solutions'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive Medical Billing Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            End-to-end solutions for healthcare providers
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-50 rounded-lg transform transition-transform group-hover:scale-105" />
                <div className="relative p-6 bg-white rounded-lg shadow-md transform transition-transform group-hover:-translate-y-1 group-hover:shadow-lg">
                  <Icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}