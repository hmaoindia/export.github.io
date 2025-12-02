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
      {/* Sticky Buy Button */}
      <div className={`fixed bottom-16 sm:bottom-20 lg:bottom-24 right-3 sm:right-4 lg:right-6 z-40 transition-all duration-300 ${
        isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <button
          onClick={onPurchase}
          className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-1 sm:gap-2 relative overflow-hidden text-xs sm:text-sm lg:text-base"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CreditCard size={14} className="relative z-10 flex-shrink-0" />
          <span className="relative z-10 font-semibold hidden sm:inline">Buy Now ₹99</span>
          <span className="relative z-10 font-semibold sm:hidden">₹99</span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className={`fixed bottom-16 sm:bottom-20 lg:bottom-24 left-3 sm:left-4 lg:left-6 z-40 transition-all duration-300 ${
        showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-28 sm:bottom-36 lg:bottom-40 right-3 sm:right-4 lg:right-6 z-40">
        <a
          href="https://wa.me/919752959317"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center animate-pulse"
        >
          <MessageCircle size={16} />
        </a>
      </div>

      {/* Urgency Banner */}
      <div className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="bg-red-600 text-white text-center py-2 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs lg:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-medium">Limited Time: 70% OFF - Only ₹99 instead of ₹2,999!</span>
            </div>
            <button
              onClick={onPurchase}
              className="bg-white text-red-600 px-2 lg:px-3 py-1 rounded text-xs font-bold hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}