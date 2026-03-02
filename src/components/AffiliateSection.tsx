import React from 'react';
import { Users, ExternalLink, DollarSign, TrendingUp } from 'lucide-react';

export default function AffiliateSection() {
  const handleJoinAffiliate = () => {
    window.open('https://exportgrow.goaffpro.com/', '_blank');
  };

  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users size={20} />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Affiliate Program
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Earn ₹150 Per Sale You Generate
          </h2>
          
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join 500+ affiliates promoting India's #1 export business guide. High conversion rates, instant payouts.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign size={16} />
                <span className="text-xl sm:text-2xl font-bold">40%</span>
              </div>
              <span className="text-xs sm:text-sm text-purple-200">Commission</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp size={16} />
                <span className="text-xl sm:text-2xl font-bold">12%</span>
              </div>
              <span className="text-xs sm:text-sm text-purple-200">Conversion</span>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1">24h</div>
              <span className="text-xs sm:text-sm text-purple-200">Payout</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleJoinAffiliate}
            className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <ExternalLink size={16} />
            Join Affiliate Program
          </button>

          <p className="text-xs text-purple-200 mt-4">
            ✓ Free to join • ✓ Instant approval • ✓ Marketing materials provided
          </p>
        </div>
      </div>
    </section>
  );
}