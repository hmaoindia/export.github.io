import React from 'react';
import { Rocket, Globe, FileText, Smartphone, BookOpen, Users, Shield, Zap, Award, Clock } from 'lucide-react';

export default function Features() {
  const mainFeatures = [
    {
      icon: <Rocket className="text-red-500" size={48} />,
      title: "🚀 Zero Investment Business Model",
      description: "Learn the exact system to start without spending a single rupee on inventory, office, or staff. This model has helped 1000+ Indians start earning from day one.",
      highlight: "No Risk, All Reward"
    },
    {
      icon: <Globe className="text-blue-500\" size={48} />,
      title: "🌍 India-Focused Step-by-Step Guide",
      description: "Written specifically for Indian entrepreneurs with local examples, government procedures, and real case studies from Mumbai to villages.",
      highlight: "Made for Indians, By Indians"
    },
    {
      icon: <FileText className="text-green-500" size={48} />,
      title: "📂 Ready-to-Use Templates & Scripts",
      description: "Get proven email templates, buyer scripts, negotiation frameworks, and legal documents that have generated crores in export revenue.",
      highlight: "Copy, Paste, Earn"
    }
  ];

  const bonusFeatures = [
    { icon: <Smartphone size={20} />, text: "Mobile-Optimized Format" },
    { icon: <BookOpen size={20} />, text: "Easy-to-Follow Chapters" },
    { icon: <Users size={20} />, text: "Community Access" },
    { icon: <Shield size={20} />, text: "30-Day Money Back" },
    { icon: <Zap size={20} />, text: "Instant Download" },
    { icon: <Award size={20} />, text: "Lifetime Access" },
    { icon: <Clock size={20} />, text: "Free Future Updates" },
    { icon: <Globe size={20} />, text: "Multi-Language Support" }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="relative text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg mb-4">✨ WHAT YOU GET</div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            What Makes This
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">Absolutely Different</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
            This isn't just another business book. It's your <span className="text-orange-600">complete roadmap</span> to financial freedom, designed specifically for the Indian market.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-blue-400 h-full hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Feature Icon */}
                <div className="relative flex justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {feature.icon}
                </div>
                
                {/* Feature Content */}
                <div className="relative text-center space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 leading-tight">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">{feature.description}</p>

                  {/* Highlight Badge */}
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Features Grid */}
        <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-10 lg:p-14 border-2 border-blue-400 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
          <div className="relative text-center mb-10">
            <div className="inline-block bg-yellow-400 text-gray-900 px-5 py-2 rounded-full text-sm font-black mb-4 animate-pulse">🎁 BONUS PACKAGE</div>
            <h3 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">Everything You Get</h3>
            <p className="text-xl lg:text-2xl text-blue-100 font-semibold">Your complete export business toolkit, worth <span className="text-yellow-300 font-black">₹25,000+</span> for just <span className="text-yellow-300 font-black">₹99</span></p>
          </div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
            {bonusFeatures.map((bonus, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-blue-200/50">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="text-blue-600 bg-blue-100 p-2 rounded-xl">{bonus.icon}</div>
                  <span className="text-gray-900 font-bold text-sm">{bonus.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-10 lg:p-12 border-2 border-emerald-300 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-block bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-black mb-6">💰 ROI CALCULATOR</div>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">Return on Investment</h3>
              <p className="text-xl lg:text-2xl text-gray-800 mb-10 font-semibold max-w-3xl mx-auto">
                If this eBook helps you get just <span className="text-emerald-600 font-black">ONE</span> export order of ₹50,000, you've made <span className="text-emerald-600 font-black">500x</span> your investment!
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
                  <div className="text-4xl lg:text-5xl font-black text-red-600 mb-2">₹99</div>
                  <div className="text-sm font-bold text-gray-600">Your Investment</div>
                </div>
                <div className="text-3xl lg:text-4xl text-gray-400 font-black">→</div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
                  <div className="text-4xl lg:text-5xl font-black text-emerald-600 mb-2">₹50,000+</div>
                  <div className="text-sm font-bold text-gray-600">First Order Value</div>
                </div>
                <div className="text-3xl lg:text-4xl text-gray-400 font-black">→</div>
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 shadow-xl border-2 border-emerald-300">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2">500x ROI</div>
                  <div className="text-sm font-bold text-emerald-100">Return Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}