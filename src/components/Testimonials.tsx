import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, TrendingUp, DollarSign, Calendar } from 'lucide-react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      business: "Handicrafts Export",
      revenue: "₹8 Lakhs/month",
      timeframe: "Started 8 months ago",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "I was a housewife with zero business experience. This eBook changed everything! Started with ₹0 investment and now I'm exporting handicrafts to 12 countries. Last month I earned ₹8 lakhs - more than my husband's salary!",
      rating: 5,
      verified: true,
      results: ["₹0 to ₹8L monthly", "12 countries", "Zero investment"]
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore, Karnataka", 
      business: "Spices & Organic Products",
      revenue: "₹12 Lakhs/month",
      timeframe: "Started 1 year ago",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "As a software engineer, I wanted passive income. Following this guide, I started exporting organic spices. Now I earn more from exports than my tech job! The step-by-step approach made everything so simple.",
      rating: 5,
      verified: true,
      results: ["₹12L monthly", "Quit tech job", "Passive income"]
    },
    {
      name: "Meera Patel",
      location: "Surat, Gujarat",
      business: "Textiles Export",
      revenue: "₹15 Lakhs/month",
      timeframe: "Started 6 months ago",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "From a small village, I thought global business was impossible. This eBook proved me wrong! Now I export textiles to USA, UK, and Australia. My village friends can't believe the transformation!",
      rating: 5,
      verified: true,
      results: ["Village to global", "₹15L monthly", "3 countries"]
    },
    {
      name: "Amit Singh",
      location: "Delhi, NCR",
      business: "Electronics Components",
      revenue: "₹25 Lakhs/month",
      timeframe: "Started 2 years ago",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Lost my job during COVID. This eBook became my lifeline. Started exporting electronics components and now I have a team of 5 people. Best investment of my life - ₹99 that changed everything!",
      rating: 5,
      verified: true,
      results: ["Job loss to success", "₹25L monthly", "Team of 5"]
    },
    {
      name: "Sunita Reddy",
      location: "Hyderabad, Telangana",
      business: "Ayurvedic Products",
      revenue: "₹6 Lakhs/month",
      timeframe: "Started 4 months ago",
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Being a single mother, I needed flexible income. Export business gave me that freedom. Working just 3 hours daily, I'm earning ₹6 lakhs monthly exporting Ayurvedic products to Europe!",
      rating: 5,
      verified: true,
      results: ["Single mother", "₹6L monthly", "3 hours/day"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentReview = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Real People. Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Results</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 10,000+ Indians who transformed their lives with this proven system
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Profile Section */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={currentReview.image} 
                      alt={currentReview.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {currentReview.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{currentReview.name}</h3>
                  <div className="flex items-center justify-center lg:justify-start gap-1 text-gray-600 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{currentReview.location}</span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <TrendingUp className="text-green-500" size={16} />
                      <span className="font-semibold text-green-600">{currentReview.revenue}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Calendar className="text-blue-500" size={16} />
                      <span className="text-gray-600">{currentReview.timeframe}</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <Quote className="text-purple-300 mb-4" size={32} />
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{currentReview.text}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>

                  {/* Results Tags */}
                  <div className="flex flex-wrap gap-2">
                    {currentReview.results.map((result, index) => (
                      <span key={index} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-purple-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "10,000+", label: "Success Stories", icon: <TrendingUp className="text-green-500\" size={24} /> },
            { number: "₹500Cr+", label: "Revenue Generated", icon: <DollarSign className="text-blue-500" size={24} /> },
            { number: "95%", label: "Success Rate", icon: <Star className="text-yellow-500\" size={24} /> },
            { number: "50+", label: "Countries Reached", icon: <MapPin className="text-purple-500" size={24} /> }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Proof Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={16} />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              
              <div className="mt-3 text-xs text-green-600 font-semibold">
                {testimonial.revenue} • {testimonial.timeframe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}