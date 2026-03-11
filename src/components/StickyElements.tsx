import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, CreditCard } from 'lucide-react';

interface StickyElementsProps {
  onPurchase: () => void;
}

export default function StickyElements({ onPurchase }: StickyElementsProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Buy Button - Desktop Only */}
      <div className={`hidden sm:flex fixed bottom-4 sm:bottom-6 lg:bottom-8 right-3 sm:right-4 lg:right-6 z-40 transition-all duration-300 ${
        isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <button
          onClick={onPurchase}
          className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 relative overflow-hidden text-xs sm:text-sm lg:text-base font-bold"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CreditCard size={14} className="relative z-10 flex-shrink-0" />
          <span className="relative z-10">Buy ₹299</span>
        </button>
      </div>

      {/* Scroll to Top Button - Desktop Only */}
      <div className={`hidden sm:flex fixed bottom-4 sm:bottom-6 lg:bottom-8 left-3 sm:left-4 lg:left-6 z-40 transition-all duration-300 ${
        showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      {/* WhatsApp Float Button - Mobile Primary CTA */}
      <div className="fixed bottom-4 right-3 z-40 sm:hidden">
        <a
          href="https://wa.me/919752959317"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center animate-pulse min-h-14"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Urgency Banner - Desktop Only */}
      <div className={`hidden sm:block fixed top-1 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="bg-red-600 text-white text-center py-2 px-4 mx-2 rounded-lg shadow-lg">
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-bold">LIMITED OFFER - ₹299</span>
            </div>
            <button
              onClick={onPurchase}
              className="bg-white text-red-600 px-3 py-1 rounded text-xs font-bold hover:bg-gray-100 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}