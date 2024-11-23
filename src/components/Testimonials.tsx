import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. B V. Chandramouli",
    role: "Cardiology",
    practice: "Mercy Medical Center +1 other",
    image: "https://shastaregional.com/wp-content/uploads/2023/10/BV-Chandramouli-MD.jpg?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "As a healthcare provider with over 25 years of experience, I've worked with many billing services. MediBrilliant stands out for their exceptional accuracy and deep understanding of complex medical billing procedures. Their expertise has significantly improved our revenue cycle management."
  },
  {
    name: "Dr. Aazib Khan",
    role: "Medical Director",
    practice: "Shasta Regional Medical Center",
    image: "https://shastaregional.com/wp-content/uploads/2023/10/Aazib-Khan-MD.jpg?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Switching to MediBrilliant was the best decision for our practice. Our revenue has increased by 20% and the billing process is now seamless."
  },
  {
    name: "Andrew Solkovits",
    role: "Family Medicine",
    practice: "California Family Medical Group",
    image: "https://cdn.dignityhealth.org/providers/common-spirit_b504fbb4-715d-4886-b545-43d9b782083b_1487643250.jpg?coordinateX=0&coordinateY=0?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "The level of professionalism and attention to detail is outstanding. Our cash flow has never been better."
  }
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by Healthcare Professionals</h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our clients say about their experience with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.practice}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-blue-50 rounded-lg p-6">
            <div>
              <div className="text-4xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div className="h-12 w-px bg-blue-200"></div>
            <div>
              <div className="text-4xl font-bold text-blue-600">$2.5M+</div>
              <div className="text-gray-600">Additional Revenue</div>
            </div>
            <div className="h-12 w-px bg-blue-200"></div>
            <div>
              <div className="text-4xl font-bold text-blue-600">24hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}