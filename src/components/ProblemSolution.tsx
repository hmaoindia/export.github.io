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
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="relative text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">⚠️ ATTENTION: This Is Costing You Money</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Stop Struggling.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient-x">Start Earning.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Every day you wait is <span className="text-red-600 font-bold">₹5,000+ lost</span>. While you're thinking, others are already building their <span className="text-emerald-600 font-bold">export empires</span> from home.
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {problems.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 relative overflow-hidden hover:-translate-y-2">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Problem Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4 font-medium">{item.description}</p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <ArrowRight className="text-purple-500" size={20} />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>

                  {/* Solution Section */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-5 border-2 border-emerald-200 group-hover:border-emerald-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-500 rounded-full p-1 mt-0.5">
                        <CheckCircle className="text-white flex-shrink-0" size={16} />
                      </div>
                      <p className="text-gray-800 font-semibold leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative text-center bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-10 lg:p-16 text-white overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/10 via-transparent to-pink-500/10"></div>
          <div className="relative z-10">
            <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-black px-5 py-2 rounded-full mb-6 animate-bounce">🔥 LIMITED TIME OFFER</div>
            <h3 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">Ready to Transform Your Life?</h3>
            <p className="text-lg lg:text-2xl text-orange-100 mb-10 max-w-2xl mx-auto font-semibold leading-relaxed">
              Don't let another month pass wondering "what if". Join <span className="text-yellow-300 font-black">10,000+ Indians</span> who took action and changed their destiny.
            </p>

            <button
              onClick={onPurchase}
              className="group bg-white text-orange-600 px-10 lg:px-16 py-5 lg:py-7 rounded-2xl text-xl lg:text-3xl font-black hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-4 border-4 border-orange-200 hover:border-yellow-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CreditCard size={32} className="relative z-10" />
              <span className="relative z-10">Get Instant Access - ₹99</span>
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">SAVE 97%</span>
            </button>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💯</span>
                <span className="font-semibold">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                <span className="font-semibold">Free Lifetime Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}