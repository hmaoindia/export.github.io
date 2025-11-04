import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard, Video } from 'lucide-react';

interface HeaderProps {
  onPurchase: () => void;
}

export default function Header({ onPurchase }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/ChatGPT Image Oct 22, 2025, 12_25_54 PM.png"
              alt="Exportgrow Logo"
              className="w-7 sm:w-10 h-7 sm:h-10 object-contain"
            />
            <span className={`font-bold text-base sm:text-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Exportgrow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection('features')}
              className={`hover:text-orange-600 transition-colors text-sm lg:text-base ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contents')}
              className={`hover:text-orange-600 transition-colors text-sm lg:text-base ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Contents
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`hover:text-orange-600 transition-colors text-sm lg:text-base ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Reviews
            </button>
            <a
              href="https://topmate.io/export"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-orange-600 transition-colors text-sm lg:text-base flex items-center gap-1 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <Video size={14} />
              1:1 Session
            </a>
            <button
              onClick={onPurchase}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 lg:px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm lg:text-base"
            >
              <CreditCard size={14} />
              Get eBook ₹99
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('contents')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
              >
                Contents
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
              >
                Reviews
              </button>
              <a
                href="https://topmate.io/export"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Video size={14} />
                Book 1:1 Session
              </a>
              <button
                onClick={onPurchase}
                className="mx-4 mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 justify-center text-sm"
              >
                <CreditCard size={14} />
                Get eBook ₹99
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}