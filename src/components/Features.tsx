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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Makes This <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Different</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't just another business book. It's your complete roadmap to financial freedom, designed specifically for the Indian market.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 h-full">
                {/* Feature Icon */}
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Feature Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Highlight Badge */}
                  <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Features Grid */}
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">🎁 Everything You Get</h3>
            <p className="text-lg text-gray-600">Your complete export business toolkit, worth ₹25,000+ for just ₹99</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bonusFeatures.map((bonus, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="text-purple-600">{bonus.icon}</div>
                  <span className="text-gray-700 font-medium text-sm">{bonus.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💰 Return on Investment</h3>
            <p className="text-lg text-gray-600 mb-6">
              If this eBook helps you get just ONE export order of ₹50,000, you've made 500x your investment!
            </p>
            <div className="flex justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-500">₹99</div>
                <div className="text-sm text-gray-600">Your Investment</div>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div>
                <div className="text-3xl font-bold text-green-500">₹50,000+</div>
                <div className="text-sm text-gray-600">First Order Value</div>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div>
                <div className="text-3xl font-bold text-purple-500">500x ROI</div>
                <div className="text-sm text-gray-600">Return Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}