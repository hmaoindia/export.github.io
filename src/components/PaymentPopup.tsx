import React, { useEffect, useRef } from 'react';
import { X, Shield, Clock, Users, CheckCircle, Star } from 'lucide-react';

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentPopup({ isOpen, onClose }: PaymentPopupProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen && formRef.current) {
      console.log('💳 Payment popup opened, setting up Razorpay...');
      
      // Clear any existing scripts
      const existingScripts = formRef.current.querySelectorAll('script');
      existingScripts.forEach(script => script.remove());

      // Create and append the Razorpay script with proper configuration
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_QjHqw0TZeDPsQP');
      script.async = true;
      
      // Add event listeners for script load
      script.onload = () => {
        console.log('✅ Razorpay script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('❌ Failed to load Razorpay script');
      };
      
      // Add the script to the form
      formRef.current.appendChild(script);

      // Enhanced payment success detection
      const handlePaymentMessage = (event: MessageEvent) => {
        console.log('📨 Payment popup received message:', { origin: event.origin, data: event.data });
        
        // Only accept messages from Razorpay domains
        const razorpayDomains = [
          'razorpay.com',
          'checkout.razorpay.com',
          'pages.razorpay.com',
          'api.razorpay.com'
        ];
        
        const isRazorpayOrigin = razorpayDomains.some(domain => 
          event.origin.includes(domain)
        );
        
        if (!isRazorpayOrigin) {
          return;
        }

        // Check for payment success indicators
        if (event.data && (
          event.data.type === 'payment_success' || 
          event.data.payment_id ||
          event.data.razorpay_payment_id ||
          (event.data.status && event.data.status === 'success')
        )) {
          console.log('🎉 Payment success detected in popup');
          handlePaymentSuccess(
            event.data.payment_id || 
            event.data.razorpay_payment_id || 
            'popup_success_' + Date.now(),
            event.data.order_id
          );
        }
      };

      window.addEventListener('message', handlePaymentMessage);

      // Cleanup
      return () => {
        window.removeEventListener('message', handlePaymentMessage);
      };
    }
  }, [isOpen]);

  const handlePaymentSuccess = (paymentId: string, orderId?: string) => {
    console.log('🎯 Processing payment success:', { paymentId, orderId });
    
    // Generate secure order details
    const orderNumber = orderId || '#TXN_POPUP_' + Date.now();
    const orderTotal = 99; // ₹99
    const timestamp = Date.now().toString();
    
    // Set secure payment success flags with timestamp
    sessionStorage.setItem('payment_success', 'true');
    sessionStorage.setItem('payment_id', paymentId);
    sessionStorage.setItem('payment_timestamp', timestamp);
    sessionStorage.setItem('order_number', orderNumber);
    
    console.log('✅ Payment session data stored securely');
    
    // Call the enhanced global tracking function
    if (typeof (window as any).trackAffiliateConversion !== 'undefined') {
      console.log('🚀 Calling enhanced global tracking function...');
      (window as any).trackAffiliateConversion(orderNumber, orderTotal, 'INR');
    } else {
      console.warn('⚠️ Global tracking function not available');
    }
    
    // Close popup
    onClose();
    
    // Navigate to thank you page using multiple methods
    setTimeout(() => {
      console.log('🚀 Redirecting to secure thank you page...');
      
      // Try custom navigation function first
      if (typeof (window as any).navigateToThankYou === 'function') {
        (window as any).navigateToThankYou();
      } else {
        // Fallback methods
        try {
          window.history.pushState({}, '', '/thankyou');
          window.location.reload();
        } catch (error) {
          // Final fallback - use hash routing
          window.location.hash = '#/thankyou';
          window.location.reload();
        }
      }
    }, 1000);
  };

  if (!isOpen) return null;

  const benefits = [
    "Instant download after payment",
    "Lifetime access to content", 
    "Free future updates",
    "30-day money-back guarantee",
    "Mobile-friendly format",
    "Email support included"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 lg:p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Complete Your Purchase</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 lg:p-6">
          {/* Product Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 lg:p-6 mb-4 lg:mb-6 border border-purple-100">
            <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="text-white" size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 truncate">From Zero to Millionaire</h3>
                <p className="text-sm lg:text-base text-gray-600">Complete Export Business Guide</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">₹99</span>
                <span className="text-sm sm:text-base lg:text-lg text-gray-500 line-through">₹2,999</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs lg:text-sm font-medium">97% OFF</span>
              </div>
              <div className="text-left sm:text-right text-xs lg:text-sm text-gray-600">
                <div>⚡ Limited Time Offer</div>
                <div>🔥 10,000+ Sold</div>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="mb-4 lg:mb-6">
            <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4">What You Get Instantly:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 lg:gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                  <span className="text-gray-700 text-xs lg:text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Payment Notice */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6 border border-green-200">
            <div className="flex items-center gap-2 lg:gap-3 mb-2">
              <Shield className="text-green-500 flex-shrink-0" size={18} />
              <h4 className="font-semibold text-gray-800 text-sm lg:text-base">Secure Payment via Razorpay</h4>
            </div>
            <p className="text-xs lg:text-sm text-gray-600 mb-2 lg:mb-3 leading-relaxed">
              Your payment is processed securely through Razorpay. We accept all major payment methods including UPI, cards, and net banking.
            </p>
            <div className="flex flex-wrap gap-1 lg:gap-2">
              {['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Wallets'].map((method) => (
                <span key={method} className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700 border">
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-50 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-8 text-xs lg:text-sm text-gray-600">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="text-green-500" size={14} />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="text-blue-500" size={14} />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Users className="text-purple-500" size={14} />
                <span>10,000+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            {/* Primary Razorpay Payment Button */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 lg:p-6">
                <h3 className="text-white font-bold text-lg lg:text-xl mb-4">Secure Payment - Only ₹99</h3>
                <div className="bg-white rounded-lg p-4">
                  <form ref={formRef}>
                    {/* Razorpay script will be dynamically added here */}
                  </form>
                  <div className="text-xs text-gray-600 mt-2">
                    After successful payment, you'll be automatically redirected to download your resources
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-6 space-y-1 lg:space-y-2">
            <p className="text-xs lg:text-sm text-gray-600">
              🛡️ <strong>30-Day Money-Back Guarantee</strong> - If you're not satisfied, get a full refund
            </p>
            <p className="text-xs text-gray-500">
              After payment, you'll be automatically redirected to download your resources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}