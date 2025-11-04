import React from 'react';
import { MessageCircle, Mail, Instagram, Phone, MapPin, Clock, Shield, Award, ExternalLink } from 'lucide-react';
import Legal from './Legal';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img
                src="/ChatGPT Image Oct 22, 2025, 12_25_54 PM.png"
                alt="Exportgrow Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl">Exportgrow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Indian entrepreneurs to build global export businesses from home. 
              Join 10,000+ success stories and start your journey to financial freedom.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Award size={16} />
              <span>Trusted by 10,000+ Entrepreneurs</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#contents" className="text-gray-400 hover:text-white transition-colors">What's Inside</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-green-400 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white">WhatsApp Support</div>
                  <div className="text-gray-400">+91-9752959317</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white">Email Support</div>
                  <div className="text-gray-400">info@hmao.in</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-purple-400 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white">Support Hours</div>
                  <div className="text-gray-400">9 AM - 9 PM IST</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Instagram className="text-pink-400 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white">Instagram</div>
                  <div className="text-gray-400">@growdude.marketing</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Payment Options</h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="text-purple-400" size={14} />
                  <span>PhonePe</span>
                </div>
                <div>Razorpay</div>
                <div>UPI, Cards, Net Banking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-4">
            <Legal />
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Made in India</span>
              </div>
            </div>
            <div className="text-sm text-gray-400 text-center lg:text-right">
              Powered by{' '}
              <a 
                href="https://growupdude.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-1 group"
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                  GrowDude
                </span>
                <ExternalLink size={12} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </a>
              {' '}• Built for Indian Entrepreneurs
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024{' '}
              <a 
                href="https://growupdude.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 inline-flex items-center gap-1"
              >
                GrowDude
                <ExternalLink size={10} />
              </a>
              . All rights reserved. | Helping Indians Build Global Businesses Since 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}