import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import ExportCalculator from './components/ExportCalculator';
import Contents from './components/Contents';
import Testimonials from './components/Testimonials';
import AffiliateSection from './components/AffiliateSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyElements from './components/StickyElements';
import ThankYou from './components/ThankYou';
import PaymentPopup from './components/PaymentPopup';

function App() {
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    console.log('App initialized, current path:', currentPath);
    
    // Handle browser navigation
    const handlePopState = () => {
      const newPath = window.location.pathname;
      console.log('Navigation detected, new path:', newPath);
      setCurrentPath(newPath);
    };

    // Handle initial load and navigation
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('pushstate', handleNavigation);
    window.addEventListener('replacestate', handleNavigation);
    
    // Check for hash-based routing as fallback
    const checkHashRouting = () => {
      const hash = window.location.hash;
      if (hash === '#/thankyou' || hash === '#thankyou') {
        setCurrentPath('/thankyou');
      }
    };
    
    checkHashRouting();
    window.addEventListener('hashchange', checkHashRouting);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('pushstate', handleNavigation);
      window.removeEventListener('replacestate', handleNavigation);
      window.removeEventListener('hashchange', checkHashRouting);
    };
  }, []);

  // Custom navigation function
  const navigateToThankYou = () => {
    console.log('Navigating to thank you page');
    setCurrentPath('/thankyou');
    window.history.pushState({}, '', '/thankyou');
  };

  // Make navigation function available globally
  useEffect(() => {
    (window as any).navigateToThankYou = navigateToThankYou;
  }, []);

  const handlePurchase = () => {
    console.log('Purchase button clicked, opening payment popup');
    setIsPaymentPopupOpen(true);
  };

  // Render Thank You page if on /thankyou route
  if (currentPath === '/thankyou' || window.location.pathname === '/thankyou' || window.location.hash.includes('thankyou')) {
    console.log('Rendering ThankYou component');
    return <ThankYou />;
  }

  console.log('Rendering main app');
  return (
    <div className="min-h-screen bg-white">
      <Header onPurchase={handlePurchase} />
      <Hero onPurchase={handlePurchase} />
      <ProblemSolution onPurchase={handlePurchase} />
      <Features />
      <ExportCalculator />
      <Contents />
      <Testimonials />
      <AffiliateSection />
      <FAQ />
      <Footer />
      
      <StickyElements onPurchase={handlePurchase} />
      
      <PaymentPopup 
        isOpen={isPaymentPopupOpen}
        onClose={() => {
          console.log('Payment popup closed');
          setIsPaymentPopupOpen(false);
        }}
      />
    </div>
  );
}

export default App;