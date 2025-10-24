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
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-2 sm:left-4 lg:left-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-4 lg:right-10 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 sm:pt-20 lg:pt-24 pb-8 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-3 lg:px-4 py-2 text-red-200">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-xs lg:text-sm font-medium">Limited Time: 70% OFF</span>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
                From Zero to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-pulse block sm:inline"> 
                  Millionaire
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The <span className="text-yellow-400 font-semibold">ONLY</span> step-by-step guide to start and scale an export business from your home in India. 
                <span className="text-green-400 font-semibold block mt-2">
                  ✓ No office ✓ No inventory ✓ Just your phone
                </span>
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3 lg:px-4 py-2 lg:py-3 border border-white/20">
                <DollarSign className="text-green-400 flex-shrink-0" size={16} />
                <span className="text-xs sm:text-sm font-medium">Earn in USD</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3 lg:px-4 py-2 lg:py-3 border border-white/20">
                <Home className="text-blue-400 flex-shrink-0" size={16} />
                <span className="text-xs sm:text-sm font-medium">Work from Home</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3 lg:px-4 py-2 lg:py-3 border border-white/20">
                <Briefcase className="text-purple-400 flex-shrink-0" size={16} />
                <span className="text-xs sm:text-sm font-medium">Zero Investment</span>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 max-w-xs mx-auto lg:max-w-none lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">
                  {stats[currentStat].number}
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {stats[currentStat].label}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 sm:space-y-4">
              {/* Main Payment Button */}
              <button 
                onClick={onPurchase}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 lg:px-12 py-4 lg:py-6 rounded-xl text-lg sm:text-xl lg:text-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 lg:gap-4 relative overflow-hidden w-full sm:w-auto"
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
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CreditCard size={24} className="relative z-10" />
                <span className="relative z-10">Get Instant Access - Only ₹99</span>
              </button>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <button className="flex items-center justify-center gap-2 lg:gap-3 border-2 border-white/30 text-white px-4 lg:px-6 py-3 lg:py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                  <Play size={16} />
                  <span>Watch Preview</span>
                </button>
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
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-2xl blur-2xl opacity-30 scale-110 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main eBook */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-3 sm:p-4 lg:p-8 w-64 sm:w-72 lg:w-80 xl:max-w-sm transform group-hover:scale-105 transition-all duration-500">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {/* eBook Cover */}
                  <div className="h-48 sm:h-56 lg:h-64 xl:h-80 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-xl flex flex-col items-center justify-center text-white p-3 sm:p-4 lg:p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center space-y-2 sm:space-y-3 lg:space-y-4">
                      <div className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 mx-auto">
                        <TrendingUp size={20} className="text-white sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                      </div>
                      <h3 className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl leading-tight">From Zero to Millionaire</h3>
                      <p className="text-blue-100 text-xs sm:text-sm">Export Business Mastery</p>
                      <div className="bg-white/20 rounded-full px-2 lg:px-3 py-1 text-xs">
                        Complete Guide
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