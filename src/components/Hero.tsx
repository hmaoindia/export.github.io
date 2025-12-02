import React, { useState, useEffect } from 'react';
import { Play, Star, Users, TrendingUp, DollarSign, Home, Briefcase, CreditCard } from 'lucide-react';

interface HeroProps {
  onPurchase: () => void;
}

export default function Hero({ onPurchase }: HeroProps) {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { number: "10,000+", label: "Happy Readers" },
    { number: "₹50L+", label: "Revenue Generated" },
    { number: "25+", label: "Countries Reached" },
    { number: "95%", label: "Success Rate" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-2 sm:left-4 lg:left-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-4 lg:right-10 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 sm:pt-20 lg:pt-24 pb-8 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/30 to-orange-500/30 border-2 border-orange-400/50 rounded-full px-4 lg:px-5 py-2.5 text-white shadow-lg shadow-orange-500/20 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400"></div>
              <span className="text-sm lg:text-base font-bold tracking-wide">🔥 LIMITED TIME: 70% OFF - ENDS SOON!</span>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="block text-white drop-shadow-2xl">From Zero to</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 animate-gradient-x drop-shadow-2xl">
                  Millionaire
                </span>
                <span className="block text-emerald-400 text-2xl sm:text-3xl lg:text-4xl mt-2 font-bold">Through Export Business</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-lg">
                The <span className="text-yellow-300 font-bold bg-yellow-300/20 px-2 py-1 rounded">ONLY</span> complete step-by-step blueprint to build a <span className="text-emerald-300 font-bold">₹50 Lakh+</span> export business from your home in India.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-lg px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold">No Office Needed</span>
                </div>
                <div className="bg-blue-500/20 border border-blue-400/50 rounded-lg px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold">Zero Inventory</span>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/50 rounded-lg px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold">Just Your Phone</span>
                </div>
              </div>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 max-w-2xl mx-auto lg:max-w-none lg:mx-0">
              <div className="group relative bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl px-4 lg:px-5 py-4 lg:py-5 border-2 border-emerald-400/50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center text-center gap-2">
                  <DollarSign className="text-emerald-300 flex-shrink-0" size={24} />
                  <span className="text-sm font-bold text-white">Earn in USD</span>
                  <span className="text-xs text-emerald-200">₹80+ per $1</span>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl px-4 lg:px-5 py-4 lg:py-5 border-2 border-blue-400/50 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center text-center gap-2">
                  <Home className="text-blue-300 flex-shrink-0" size={24} />
                  <span className="text-sm font-bold text-white">Work from Home</span>
                  <span className="text-xs text-blue-200">Full Flexibility</span>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl px-4 lg:px-5 py-4 lg:py-5 border-2 border-orange-400/50 hover:border-orange-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center text-center gap-2">
                  <Briefcase className="text-orange-300 flex-shrink-0" size={24} />
                  <span className="text-sm font-bold text-white">Zero Investment</span>
                  <span className="text-xs text-orange-200">Start Today</span>
                </div>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl p-6 lg:p-8 border-2 border-slate-700/50 max-w-md mx-auto lg:max-w-none lg:mx-0 shadow-2xl shadow-slate-900/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
              <div className="relative text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 mb-2">
                  {stats[currentStat].number}
                </div>
                <div className="text-slate-300 text-sm sm:text-base font-semibold">
                  {stats[currentStat].label}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 sm:space-y-4">
              {/* Main Payment Button */}
              <button
                onClick={() => {
                  // Track Meta Pixel InitiateCheckout event
                  if (typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'InitiateCheckout', {
                      value: 99,
                      currency: 'INR',
                      content_name: 'From Zero to Millionaire - Export Business eBook',
                      content_category: 'Digital Product'
                    });
                  }
                  onPurchase();
                }}
                className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 sm:px-10 lg:px-14 py-5 lg:py-7 rounded-2xl text-xl sm:text-2xl lg:text-3xl font-black hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 lg:gap-4 overflow-hidden w-full sm:w-auto border-2 border-orange-400/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CreditCard size={28} className="relative z-10 animate-pulse" />
                <span className="relative z-10">Download Now - ₹99</span>
                <span className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce shadow-lg">97% OFF</span>
              </button>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <a
                  href="https://topmate.io/export"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 lg:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 border-2 border-blue-400 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 text-sm sm:text-base hover:scale-105"
                >
                  <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-all">
                    <Play size={16} className="fill-white" />
                  </div>
                  <span className="font-semibold">Book 1:1 Consultation</span>
                </a>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 text-blue-200 text-xs lg:text-sm">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={12} />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} />
                  <span>10,000+ Downloads</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp size={12} />
                  <span>₹50L+ Generated</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 text-center lg:text-left">
              <div className="text-xs text-blue-200">
                ✓ Instant Download<br />
                ✓ Lifetime Access
              </div>
              <div className="text-xs text-blue-200">
                ✓ Mobile Friendly<br />
                ✓ 30-Day Guarantee
              </div>
              <div className="text-xs text-blue-200">
                ✓ Free Updates<br />
                ✓ Email Support
              </div>
            </div>
          </div>

          {/* eBook Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-2xl blur-2xl opacity-30 scale-110 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main eBook */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-3 sm:p-4 lg:p-8 w-64 sm:w-72 lg:w-80 xl:max-w-sm transform group-hover:scale-105 transition-all duration-500">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {/* eBook Cover */}
                  <div className="h-48 sm:h-56 lg:h-64 xl:h-80 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 rounded-xl flex flex-col items-center justify-center text-white p-3 sm:p-4 lg:p-6 relative overflow-hidden border-2 border-blue-500/30">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10"></div>
                    <div className="relative z-10 text-center space-y-2 sm:space-y-3 lg:space-y-4">
                      <div className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 mx-auto shadow-2xl shadow-orange-500/50 border-2 border-orange-300/50\">
                        <TrendingUp size={24} className="text-white sm:w-7 sm:h-7 lg:w-10 lg:h-10\" />
                      </div>
                      <h3 className="font-black text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400\">From Zero to<br/>Millionaire</h3>
                      <p className="text-slate-200 text-xs sm:text-sm font-semibold\">Export Business Mastery</p>
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full px-3 lg:px-4 py-1.5 text-xs font-bold shadow-lg shadow-emerald-500/30\">
                        Complete Blueprint
                      </div>
                    </div>
                  </div>
                  
                  {/* Price & Value */}
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-center gap-2 lg:gap-3">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">₹99</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-500 line-through">₹2,999</span>
                    </div>
                    <div className="bg-red-100 text-red-600 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                      Save 97% Today!
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-1 sm:-top-2 lg:-top-4 -right-1 sm:-right-2 lg:-right-4 bg-green-500 text-white rounded-full w-8 sm:w-10 lg:w-16 h-8 sm:h-10 lg:h-16 flex items-center justify-center font-bold text-xs animate-bounce">
                NEW
              </div>
              <div className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 -left-1 sm:-left-2 lg:-left-4 bg-yellow-500 text-black rounded-full w-10 sm:w-12 lg:w-20 h-10 sm:h-12 lg:h-20 flex items-center justify-center font-bold text-xs text-center animate-pulse">
                10K+<br/>SOLD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}