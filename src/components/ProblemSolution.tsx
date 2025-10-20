import React from 'react';
import { AlertTriangle, Target, TrendingUp, Users, CheckCircle, ArrowRight, CreditCard } from 'lucide-react';

interface ProblemSolutionProps {
  onPurchase: () => void;
}

export default function ProblemSolution({ onPurchase }: ProblemSolutionProps) {
  const problems = [
    {
      icon: <AlertTriangle className="text-red-500" size={32} />,
      title: "Confused About Starting?",
      description: "You want to start a business but don't know where to begin. Export seems complicated with too many rules and procedures.",
      solution: "Get crystal-clear, step-by-step guidance from IEC registration to your first ₹1 lakh order."
    },
    {
      icon: <Target className="text-orange-500" size={32} />,
      title: "Fear of Big Investment?",
      description: "Traditional businesses need lakhs of rupees for inventory, office, and staff. You can't afford that risk.",
      solution: "Learn the proven zero-investment model that 1000+ Indians are using to earn ₹50K+ monthly."
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "No International Network?",
      description: "You don't know any foreign buyers. Building international connections seems impossible from India.",
      solution: "Get proven scripts, email templates, and platforms to find buyers in 195+ countries."
    },
    {
      icon: <TrendingUp className="text-green-500" size={32} />,
      title: "Stuck in Your Location?",
      description: "You think being in a small town or village limits your business potential to local markets only.",
      solution: "Discover how village entrepreneurs are exporting globally and earning more than city jobs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Stop Struggling. Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Earning</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every day you wait is money lost. While you're thinking, others are already building their export empires from home.
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {problems.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Problem Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      {item.icon}
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <ArrowRight className="text-purple-500" size={20} />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>

                  {/* Solution Section */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-700 font-medium leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let another month pass wondering "what if". Join thousands who took action and changed their destiny.
            </p>
            
            <button 
              onClick={onPurchase}
              className="bg-white text-purple-600 px-8 lg:px-12 py-4 lg:py-6 rounded-xl text-xl lg:text-2xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              <CreditCard size={24} />
              Get Instant Access - Only ₹99
            </button>
            <p className="text-blue-200 text-sm mt-4">⚡ Instant access • 💯 30-day guarantee • 🔄 Free lifetime updates</p>
          </div>
        </div>
      </div>
    </section>
  );
}