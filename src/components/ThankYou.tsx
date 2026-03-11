import React, { useEffect, useState } from 'react';
import { CheckCircle, Download, Clock, ArrowRight, Gift, Star, Shield, AlertTriangle, Home } from 'lucide-react';

export default function ThankYou() {
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [hasValidAccess, setHasValidAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [accessMethod, setAccessMethod] = useState('');

  useEffect(() => {
    // Enhanced access validation that properly handles Razorpay redirects
    const validateAccess = () => {
      console.log('🔒 Validating access to thank you page...');
      
      // Get current URL and referrer information
      const currentUrl = window.location.href;
      const urlParams = new URLSearchParams(window.location.search);
      const referrer = document.referrer;
      
      console.log('🔍 Access validation data:', {
        currentUrl,
        referrer,
        urlParams: Object.fromEntries(urlParams.entries())
      });
      
      // Check 1: Direct from Razorpay (most reliable)
      const isFromRazorpay = referrer.includes('razorpay.com') || 
                            referrer.includes('checkout.razorpay.com') ||
                            referrer.includes('pages.razorpay.com') ||
                            referrer.includes('api.razorpay.com');
      
      // Check 2: Payment success in URL parameters
      const hasPaymentParams = urlParams.get('payment_id') || 
                              urlParams.get('razorpay_payment_id') ||
                              urlParams.get('payment_status') === 'success' ||
                              urlParams.get('status') === 'success';
      
      // Check 3: Payment success in session storage (from popup)
      const sessionPaymentSuccess = sessionStorage.getItem('payment_success') === 'true';
      const sessionPaymentId = sessionStorage.getItem('payment_id');
      const sessionTimestamp = sessionStorage.getItem('payment_timestamp');
      
      // Check 4: Recent payment (within last 30 minutes)
      const isRecentPayment = sessionTimestamp && 
                             (Date.now() - parseInt(sessionTimestamp)) < 1800000; // 30 minutes
      
      // Check 5: Payment success in URL hash
      const hasPaymentHash = window.location.hash.includes('payment_success') ||
                            window.location.hash.includes('payment_id') ||
                            window.location.hash.includes('razorpay_payment_id');
      
      // Check 6: Specific Razorpay success patterns in URL
      const hasRazorpaySuccess = currentUrl.includes('payment_id=') ||
                                currentUrl.includes('razorpay_payment_id=') ||
                                currentUrl.includes('payment_status=success');
      
      console.log('📊 Validation results:', {
        isFromRazorpay,
        hasPaymentParams,
        sessionPaymentSuccess,
        sessionPaymentId,
        isRecentPayment,
        hasPaymentHash,
        hasRazorpaySuccess
      });
      
      // Grant access if ANY of these conditions are met:
      let accessGranted = false;
      let method = '';
      
      if (isFromRazorpay) {
        accessGranted = true;
        method = 'Razorpay Referrer';
        // Set session data for future reference
        if (!sessionPaymentSuccess) {
          sessionStorage.setItem('payment_success', 'true');
          sessionStorage.setItem('payment_id', 'razorpay_redirect_' + Date.now());
          sessionStorage.setItem('payment_timestamp', Date.now().toString());
        }
      } else if (hasPaymentParams) {
        accessGranted = true;
        method = 'Payment URL Parameters';
        // Extract payment ID from URL params
        const paymentId = urlParams.get('payment_id') || 
                         urlParams.get('razorpay_payment_id') || 
                         'url_param_' + Date.now();
        sessionStorage.setItem('payment_success', 'true');
        sessionStorage.setItem('payment_id', paymentId);
        sessionStorage.setItem('payment_timestamp', Date.now().toString());
      } else if (hasRazorpaySuccess) {
        accessGranted = true;
        method = 'Razorpay Success URL Pattern';
        sessionStorage.setItem('payment_success', 'true');
        sessionStorage.setItem('payment_id', 'url_success_' + Date.now());
        sessionStorage.setItem('payment_timestamp', Date.now().toString());
      } else if (sessionPaymentSuccess && sessionPaymentId && isRecentPayment) {
        accessGranted = true;
        method = 'Valid Session Data';
      } else if (hasPaymentHash) {
        accessGranted = true;
        method = 'Payment Hash';
        sessionStorage.setItem('payment_success', 'true');
        sessionStorage.setItem('payment_id', 'hash_success_' + Date.now());
        sessionStorage.setItem('payment_timestamp', Date.now().toString());
      }
      
      if (accessGranted) {
        console.log('✅ Access granted via:', method);
        setHasValidAccess(true);
        setAccessMethod(method);
        
        // Track conversion
        trackConversion();
      } else {
        console.log('❌ Access denied - no valid payment indicators found');
        setHasValidAccess(false);
        
        // Redirect to home after 5 seconds
        setTimeout(() => {
          console.log('🚫 Redirecting unauthorized user to homepage...');
          window.location.href = '/';
        }, 5000);
      }
      
      setIsLoading(false);
    };

    validateAccess();
  }, []);

  useEffect(() => {
    if (!hasValidAccess || isLoading) return;

    console.log('✅ Setting up thank you page for valid user...');

    // Countdown timer for redirect to resources
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          console.log('⏰ Redirecting to resources...');
          window.location.href = 'https://drive.google.com/drive/folders/1fsxGJZUP0sYeKLzxwsogumFn3dJA3Pn8';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasValidAccess, isLoading]);

  // Enhanced GoAffPro conversion tracking
  const trackConversion = () => {
    console.log('🎯 Tracking affiliate conversion...');
    
    // Check if already tracked to avoid double tracking
    const alreadyTracked = sessionStorage.getItem('goaffpro_tracked');
    if (alreadyTracked === 'true') {
      console.log('✅ Conversion already tracked, skipping...');
      return;
    }
    
    // Get order details
    const orderNumber = sessionStorage.getItem('order_number') || '#TXN_SECURE_' + Date.now();
    const orderTotal = 299; // ₹299

    console.log('📦 Tracking order:', { orderNumber, orderTotal });
    
    // Call the enhanced global tracking function
    if (typeof (window as any).trackAffiliateConversion !== 'undefined') {
      console.log('🚀 Calling enhanced tracking function...');
      (window as any).trackAffiliateConversion(orderNumber, orderTotal, 'INR');
    } else {
      console.warn('⚠️ Global tracking function not available');
    }

    // Store order number if not already stored
    if (!sessionStorage.getItem('order_number')) {
      sessionStorage.setItem('order_number', orderNumber);
    }

    // Mark as tracked
    sessionStorage.setItem('goaffpro_tracked', 'true');

    // Clean up payment flags after successful tracking (keep for a while)
    setTimeout(() => {
      // Don't remove immediately to allow page refreshes
      console.log('🧹 Payment session data will be kept for this session');
    }, 300000); // Keep for 5 minutes
  };

  const handleManualRedirect = () => {
    console.log('👆 Manual redirect to resources');
    setIsRedirecting(true);
    window.location.href = 'https://drive.google.com/drive/folders/1fsxGJZUP0sYeKLzxwsogumFn3dJA3Pn8';
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying payment...</p>
          <p className="text-sm text-gray-500 mt-2">Please wait while we confirm your payment</p>
        </div>
      </div>
    );
  }

  // Access denied state
  if (!hasValidAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border-2 border-red-200">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-white" size={40} />
            </div>
            
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              🚫 Access Denied
            </h1>
            
            <p className="text-gray-700 mb-4 font-semibold">
              This page is only accessible after completing payment.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-700">
                <strong>Issue:</strong> No valid payment confirmation found
              </p>
              <p className="text-xs text-red-600 mt-2">
                If you just completed payment, please wait a moment and try again.
              </p>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              To access your resources, please complete the payment process. 
              You'll be automatically redirected here after successful payment.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Return to Homepage & Complete Payment
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
              >
                Refresh Page
              </button>
            </div>
            
            <div className="text-xs text-gray-500 mt-4">
              <p>🔒 This page is protected for security reasons</p>
              <p>Redirecting automatically in 5 seconds...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success state - only shown after valid payment
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          
          <div className="relative z-10">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={40} />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              🎉 Payment Successful!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Congratulations! Your payment of ₹299 has been processed successfully.
              You now have lifetime access to the complete Export Business Guide.
            </p>

            {/* Access Method Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Shield className="text-green-500" size={16} />
                <span className="text-green-700 font-semibold">
                  Access Verified via: {accessMethod}
                </span>
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                <Gift className="text-green-500" size={24} />
                What's Next?
              </h2>
              
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">You'll be redirected to your Google Drive folder with all resources</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Download the complete eBook and bonus materials</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Start your export business journey today!</p>
                </div>
              </div>
            </div>

            {/* Countdown & Redirect */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-6 border border-orange-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="text-orange-500" size={20} />
                <span className="font-semibold text-gray-800">Auto-redirecting in</span>
              </div>
              
              <div className="text-3xl font-bold text-orange-600 mb-3">
                {isRedirecting ? '🚀' : countdown}
              </div>
              
              <p className="text-sm text-gray-600">
                {isRedirecting ? 'Redirecting now...' : 'You will be automatically redirected to your resources'}
              </p>
            </div>

            {/* Manual Access Button */}
            <button
              onClick={handleManualRedirect}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto mb-6"
            >
              <Download size={20} />
              Access Your Resources Now
              <ArrowRight size={20} />
            </button>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Shield className="text-green-500" size={16} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="text-yellow-500" size={16} />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="text-blue-500" size={16} />
                <span>Instant Download</span>
              </div>
            </div>

            {/* Support Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                Need help? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a 
                  href="https://wa.me/919752959317" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  📱 WhatsApp: +91-9752959317
                </a>
                <a 
                  href="mailto:info@hmao.in"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  📧 Email: info@hmao.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            🔒 Your payment was processed securely via Razorpay • 
            💯 30-day money-back guarantee applies • 
            🎯 Start your export journey today!
          </p>
        </div>
      </div>
    </div>
  );
}