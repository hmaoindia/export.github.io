import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, Users, DollarSign, FileText, Globe, TrendingUp } from 'lucide-react';

export default function Contents() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0);

  const chapters = [
    {
      emoji: "📋",
      title: "Chapter 1: Foundation & Legal Setup",
      duration: "45 min read",
      description: "Master the legal requirements and get your business registered properly",
      topics: [
        "IEC Code registration step-by-step",
        "GST registration for exporters",
        "Bank account setup for export business",
        "Essential licenses and permits",
        "Government schemes and benefits"
      ],
      outcome: "Complete legal setup in 7 days"
    },
    {
      emoji: "🔍",
      title: "Chapter 2: Product Research & Selection",
      duration: "60 min read", 
      description: "Discover profitable products that India can export globally",
      topics: [
        "High-demand products by country",
        "Profit margin analysis techniques",
        "Seasonal demand patterns",
        "Competition analysis methods",
        "Niche product identification"
      ],
      outcome: "Find your profitable niche in 3 days"
    },
    {
      emoji: "🌐",
      title: "Chapter 3: Finding International Buyers",
      duration: "90 min read",
      description: "Proven strategies to connect with buyers in 195+ countries",
      topics: [
        "Top 15 B2B platforms for exporters",
        "Cold email templates that work",
        "LinkedIn outreach strategies",
        "Trade show participation guide",
        "Building long-term relationships"
      ],
      outcome: "Get first buyer inquiry in 30 days"
    },
    {
      emoji: "💰",
      title: "Chapter 4: Pricing, Quotation & Negotiation",
      duration: "75 min read",
      description: "Master the art of profitable pricing and winning negotiations",
      topics: [
        "Cost calculation formulas",
        "Competitive pricing strategies",
        "Professional quotation templates",
        "Negotiation psychology and tactics",
        "Payment terms and conditions"
      ],
      outcome: "Close deals with 40%+ profit margins"
    },
    {
      emoji: "📦",
      title: "Chapter 5: Logistics & Documentation",
      duration: "80 min read",
      description: "Simplify shipping, customs, and paperwork processes",
      topics: [
        "Shipping methods and cost optimization",
        "Export documentation checklist",
        "Customs clearance procedures",
        "Insurance and risk management",
        "Tracking and delivery management"
      ],
      outcome: "Handle logistics like a pro"
    },
    {
      emoji: "📈",
      title: "Chapter 6: Scaling to ₹1 Crore Revenue",
      duration: "100 min read",
      description: "Build systems and processes for exponential growth",
      topics: [
        "Automation tools and software",
        "Team building and delegation",
        "Multiple product line strategy",
        "Market expansion techniques",
        "Financial management and reinvestment"
      ],
      outcome: "Scale to ₹1Cr+ annual revenue"
    }
  ];

  const totalReadTime = chapters.reduce((total, chapter) => {
    const minutes = parseInt(chapter.duration.split(' ')[0]);
    return total + minutes;
  }, 0);

  return (
    <section id="contents" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
            Your Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Roadmap</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 lg:mb-8">
            From zero knowledge to ₹1 Crore revenue - every step mapped out in detail
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FileText size={16} />
              <span>6 Comprehensive Chapters</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{Math.floor(totalReadTime / 60)}h {totalReadTime % 60}m Total Content</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>10,000+ Success Stories</span>
            </div>
          </div>
        </div>

        {/* Chapter Breakdown */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {chapters.map((chapter, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Chapter Header */}
              <div 
                className="p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setExpandedChapter(expandedChapter === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{chapter.emoji}</span>
                    <div className="text-left min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1 leading-tight">{chapter.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{chapter.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <div className="text-right text-xs sm:text-sm text-gray-500 hidden sm:block">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock size={14} />
                        <span>{chapter.duration}</span>
                      </div>
                    </div>
                    {expandedChapter === index ? 
                      <ChevronDown className="text-purple-600" size={20} /> : 
                      <ChevronRight className="text-gray-400" size={20} />
                    }
                  </div>
                </div>
                {/* Mobile duration display */}
                <div className="sm:hidden mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={12} />
                  <span>{chapter.duration}</span>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedChapter === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                    {/* Topics Covered */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <FileText size={16} />
                        What You'll Learn
                      </h4>
                      <ul className="space-y-2">
                        {chapter.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expected Outcome */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <TrendingUp size={16} />
                        Expected Outcome
                      </h4>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 sm:p-4 border border-green-200">
                        <p className="text-gray-700 font-medium text-sm sm:text-base">{chapter.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Value Summary */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Complete Export Business Mastery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="space-y-2">
              <DollarSign className="mx-auto text-yellow-400" size={28} />
              <div className="text-xl sm:text-2xl font-bold">₹0 to ₹1Cr</div>
              <div className="text-blue-100 text-sm">Revenue Journey</div>
            </div>
            <div className="space-y-2">
              <Globe className="mx-auto text-green-400" size={28} />
              <div className="text-xl sm:text-2xl font-bold">195+ Countries</div>
              <div className="text-blue-100 text-sm">Market Access</div>
            </div>
            <div className="space-y-2">
              <Users className="mx-auto text-orange-400" size={28} />
              <div className="text-xl sm:text-2xl font-bold">10,000+</div>
              <div className="text-blue-100 text-sm">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}