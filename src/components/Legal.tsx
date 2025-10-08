import React, { useState } from 'react';
import { X, Shield, FileText, CreditCard, Phone, ExternalLink } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | 'refund' | 'phonepe';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  const getContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Terms and Conditions',
          icon: <FileText className="text-blue-500" size={24} />,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  By purchasing and downloading "From Zero to Millionaire - Export Business Guide" from GrowDude, 
                  you agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
                  please do not purchase or use our digital product.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. Product Description</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Our eBook provides educational content about starting an export business from India. The product includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Comprehensive guide on export business setup</li>
                  <li>Legal requirements and documentation</li>
                  <li>Templates and scripts for business communication</li>
                  <li>Step-by-step procedures and best practices</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Payment and Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Payment is processed securely through Razorpay/PhonePe. Upon successful payment, 
                  you will receive an instant download link via email. Please ensure your email address is correct.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed">
                  All content in this eBook is the intellectual property of GrowDude. You may not reproduce, 
                  distribute, or sell any part of this content without written permission.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  This eBook provides educational information only. Results may vary based on individual effort, 
                  market conditions, and implementation. We do not guarantee specific income or success levels.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">6. Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed">
                  GrowDude shall not be liable for any indirect, incidental, or consequential damages arising 
                  from the use of this eBook or the information contained within.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">7. Governing Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  These terms are governed by the laws of India. Any disputes will be subject to the 
                  jurisdiction of Indian courts.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">8. Contact Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  For any questions regarding these terms, contact us at info@hmao.in or WhatsApp +91-9752959317.
                </p>
              </section>
            </div>
          )
        };

      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <Shield className="text-green-500" size={24} />,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
                <p className="text-gray-700 leading-relaxed mb-2">We collect the following information:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Email address for product delivery</li>
                  <li>Payment information (processed securely by Razorpay/PhonePe)</li>
                  <li>Basic analytics data for website improvement</li>
                  <li>Communication data when you contact us</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. How We Use Your Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>To deliver your purchased eBook</li>
                  <li>To provide customer support</li>
                  <li>To send important updates about your purchase</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Data Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information. 
                  Payment data is processed through secure, PCI-compliant payment gateways.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. Third-Party Services</h3>
                <p className="text-gray-700 leading-relaxed mb-2">We use the following third-party services:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Razorpay/PhonePe for payment processing</li>
                  <li>Email service providers for delivery</li>
                  <li>Analytics tools for website performance</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. Your Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to access, update, or delete your personal information. 
                  Contact us at info@hmao.in for any privacy-related requests.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">6. Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies to improve your browsing experience and analyze website traffic. 
                  You can disable cookies in your browser settings.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">7. Updates to Privacy Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. Changes will be posted on this page 
                  with an updated effective date.
                </p>
              </section>
            </div>
          )
        };

      case 'refund':
        return {
          title: 'Refund Policy',
          icon: <Shield className="text-orange-500" size={24} />,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">30-Day Money-Back Guarantee</h3>
                <p className="text-gray-700 leading-relaxed">
                  We stand behind the quality of our eBook. If you're not satisfied with your purchase, 
                  you can request a full refund within 30 days of purchase.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Refund Conditions</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Refund requests must be made within 30 days of purchase</li>
                  <li>You must provide a valid reason for the refund request</li>
                  <li>The eBook content must not have been shared or distributed</li>
                  <li>Refunds are processed to the original payment method</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">How to Request a Refund</h3>
                <p className="text-gray-700 leading-relaxed mb-2">To request a refund:</p>
                <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                  <li>Email us at info@hmao.in with your order details</li>
                  <li>Include your purchase receipt or transaction ID</li>
                  <li>Explain the reason for your refund request</li>
                  <li>We will respond within 24-48 hours</li>
                </ol>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Processing Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once approved, refunds are processed within 5-7 business days. 
                  The time for the refund to appear in your account depends on your bank or payment provider.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Non-Refundable Situations</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Requests made after 30 days of purchase</li>
                  <li>If the eBook content has been shared or distributed</li>
                  <li>Fraudulent or abusive refund requests</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  For any refund-related questions, contact us at info@hmao.in or WhatsApp +91-9752959317.
                </p>
              </section>
            </div>
          )
        };

      case 'phonepe':
        return {
          title: 'PhonePe Integration Guide',
          icon: <Phone className="text-purple-500" size={24} />,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  PhonePe Payment Gateway allows you to accept payments through UPI, cards, wallets, and net banking. 
                  This guide will help you integrate PhonePe with your eBook sales website.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Business registration (GST registration recommended)</li>
                  <li>Business bank account</li>
                  <li>Valid business documents</li>
                  <li>Website with SSL certificate</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Step 1: Create PhonePe Merchant Account</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                  <li>Visit <a href="https://business.phonepe.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">business.phonepe.com</a></li>
                  <li>Click on "Get Started" and select "Payment Gateway"</li>
                  <li>Fill in your business details</li>
                  <li>Upload required documents (PAN, GST, Bank statements)</li>
                  <li>Wait for account verification (2-3 business days)</li>
                </ol>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Step 2: Get API Credentials</h3>
                <p className="text-gray-700 leading-relaxed mb-2">Once approved, you'll receive:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Merchant ID</li>
                  <li>Salt Key (for production)</li>
                  <li>Salt Index</li>
                  <li>API endpoints</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Step 3: Integration Options</h3>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Option 1: Direct API Integration</h4>
                  <p className="text-blue-700 text-sm">For developers who want full control over the payment flow.</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">Option 2: Payment Gateway Link</h4>
                  <p className="text-green-700 text-sm">Simple redirect-based integration (recommended for beginners).</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Option 3: SDK Integration</h4>
                  <p className="text-purple-700 text-sm">Use PhonePe's JavaScript SDK for seamless integration.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Step 4: Basic Implementation</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Example: Creating a payment request
const paymentData = {
  merchantId: 'YOUR_MERCHANT_ID',
  merchantTransactionId: 'TXN_' + Date.now(),
  merchantUserId: 'USER_' + Date.now(),
  amount: 9900, // Amount in paise (₹99.00)
  redirectUrl: 'https://yoursite.com/payment-success',
  redirectMode: 'POST',
  callbackUrl: 'https://yoursite.com/payment-callback',
  paymentInstrument: {
    type: 'PAY_PAGE'
  }
};`}
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Step 5: Testing</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Use PhonePe's sandbox environment for testing</li>
                  <li>Test with different payment methods (UPI, cards, wallets)</li>
                  <li>Verify success and failure scenarios</li>
                  <li>Test callback and webhook handling</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Step 6: Go Live</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                  <li>Complete KYC verification</li>
                  <li>Switch to production API endpoints</li>
                  <li>Update API credentials</li>
                  <li>Monitor transactions in PhonePe dashboard</li>
                </ol>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Important Notes</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <ul className="list-disc list-inside text-yellow-800 space-y-1 ml-4">
                    <li>PhonePe charges 1.99% + GST per transaction</li>
                    <li>Settlement happens T+1 (next business day)</li>
                    <li>Minimum transaction amount: ₹1</li>
                    <li>Maximum transaction amount: ₹1,00,000 per transaction</li>
                    <li>Keep your webhook URLs secure and validate all callbacks</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Support Resources</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><a href="https://developer.phonepe.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PhonePe Developer Documentation</a></li>
                  <li><a href="https://business.phonepe.com/support" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Business Support</a></li>
                  <li>Email: business@phonepe.com</li>
                  <li>Phone: 080-68727374</li>
                </ul>
              </section>
            </div>
          )
        };

      default:
        return { title: '', icon: null, content: null };
    }
  };

  const { title, icon, content } = getContent();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {content}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 text-center">
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-IN')} | 
            <span className="ml-2">For questions, contact: info@hmao.in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Legal() {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'refund' | 'phonepe' | null>(null);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        <button 
          onClick={() => setActiveModal('terms')}
          className="text-blue-600 hover:text-blue-800 text-sm underline"
        >
          Terms & Conditions
        </button>
        <button 
          onClick={() => setActiveModal('privacy')}
          className="text-blue-600 hover:text-blue-800 text-sm underline"
        >
          Privacy Policy
        </button>
        <button 
          onClick={() => setActiveModal('refund')}
          className="text-blue-600 hover:text-blue-800 text-sm underline"
        >
          Refund Policy
        </button>
        <button 
          onClick={() => setActiveModal('phonepe')}
          className="text-purple-600 hover:text-purple-800 text-sm underline flex items-center gap-1"
        >
          <Phone size={14} />
          PhonePe Integration Guide
        </button>
      </div>

      <LegalModal 
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        type={activeModal || 'terms'}
      />
    </>
  );
}