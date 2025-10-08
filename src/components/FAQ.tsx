import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I really need ZERO investment to start?",
      answer: "Absolutely! This eBook teaches you the dropshipping model for exports where you don't buy inventory upfront. You only purchase products after receiving confirmed orders and advance payments from buyers. Thousands of Indians are using this model successfully.",
      category: "Investment"
    },
    {
      question: "Can I start this from a small town or village?",
      answer: "Yes! You only need internet connection and a smartphone. Many of our most successful students operate from villages across India. In fact, rural areas often have cost advantages and access to unique local products that international buyers love.",
      category: "Location"
    },
    {
      question: "What if I don't speak English fluently?",
      answer: "Don't worry! The eBook includes ready-to-use email templates, scripts, and communication frameworks. You can copy-paste these proven templates. Plus, many international buyers prefer simple, clear English over complex language.",
      category: "Language"
    },
    {
      question: "How quickly can I see my first results?",
      answer: "With dedicated effort following our system: First inquiry within 30 days, first order within 60-90 days, and consistent monthly income within 6 months. However, results depend on your effort and consistency in implementing the strategies.",
      category: "Timeline"
    },
    {
      question: "Is this legal? Do I need special licenses?",
      answer: "Yes, it's 100% legal! The eBook covers all legal requirements including IEC code, GST registration, and other necessary licenses. We provide step-by-step guidance for all government procedures and compliance requirements.",
      category: "Legal"
    },
    {
      question: "What products can I export from India?",
      answer: "India exports 1000+ product categories! The eBook helps you identify profitable products based on your location, interests, and market demand. Popular categories include textiles, spices, handicrafts, jewelry, electronics, and agricultural products.",
      category: "Products"
    },
    {
      question: "Do I need technical knowledge or special skills?",
      answer: "No technical knowledge required! If you can use WhatsApp and email, you can do this business. The eBook breaks down everything into simple, easy-to-follow steps with screenshots and examples.",
      category: "Skills"
    },
    {
      question: "What if I don't get results after reading?",
      answer: "We offer a 30-day money-back guarantee. If you implement our strategies for 30 days and don't see any progress, we'll refund your ₹99. However, 95% of our readers who take action see positive results within the first month.",
      category: "Guarantee"
    },
    {
      question: "How is this different from other business courses?",
      answer: "This is specifically designed for Indians, with Indian examples, government procedures, and local case studies. It's not a generic course but a practical guide that addresses unique challenges faced by Indian entrepreneurs in the export business.",
      category: "Difference"
    },
    {
      question: "Can I do this part-time alongside my job?",
      answer: "Absolutely! Most of our successful students started part-time. You can manage export business with just 2-3 hours daily. Once you establish regular buyers, it becomes even more manageable and can eventually replace your job income.",
      category: "Time"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Your Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Answered</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know before starting your export journey
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <span key={index} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              {category}
            </span>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <button
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  </div>
                  {openFAQ === index ? 
                    <ChevronUp className="text-purple-600 flex-shrink-0" size={24} /> : 
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  }
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="flex items-start gap-4 pt-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Get in touch with our support team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919752959317" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>💬</span>
                WhatsApp Support
              </a>
              <a 
                href="mailto:info@hmao.in"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>📧</span>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}