import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
  const [claims, setClaims] = useState(1000);
  const [currentStaff, setCurrentStaff] = useState(2);

  const monthlyInHouseCost = currentStaff * 4000 + claims * 2.5;
  const monthlyOutsourcedCost = claims * 1.8;
  const annualSavings = (monthlyInHouseCost - monthlyOutsourcedCost) * 12;

  return (
    <div id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CalcIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">ROI Calculator</h2>
          <p className="mt-4 text-xl text-gray-600">
            See how much you could save by outsourcing your medical billing
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Claims Volume
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={claims}
                  onChange={(e) => setClaims(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right mt-2 text-gray-600">
                  {claims} claims
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Billing Staff
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={currentStaff}
                  onChange={(e) => setCurrentStaff(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right mt-2 text-gray-600">
                  {currentStaff} staff
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Your Potential Savings
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly In-House Cost:</span>
                  <span className="font-semibold">
                    ${monthlyInHouseCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Monthly Outsourced Cost:
                  </span>
                  <span className="font-semibold">
                    ${monthlyOutsourcedCost.toLocaleString()}
                  </span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-blue-600">
                      Annual Savings:
                    </span>
                    <span className="font-bold text-blue-600">
                      ${annualSavings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
