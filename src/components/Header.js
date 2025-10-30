import React from 'react';
import { Menu, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </div>
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-brand-blue rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">ЗО</span>
              </div>
              <div className="text-sm">
                <div className="text-brand-blue font-semibold">ЗАПОРІЗЬКА</div>
                <div className="text-brand-blue">ОБЛЕНЕРГО</div>
              </div>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-brand-blue" />
              <span className="text-sm text-gray-600">Передати показ</span>
              <span className="text-sm font-semibold">0-800-304-502</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Call-center</span>
            </div>
            <div className="flex space-x-2">
              <img src="/images/payment-card.png" alt="Payment" className="h-6" />
              <img src="/images/certificate.png" alt="Certificate" className="h-6" />
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="flex justify-center space-x-8 py-4">
            <a href="#" className="text-brand-blue hover:text-blue-700 font-medium">
              Населенню
            </a>
            <a href="#" className="text-brand-red hover:text-red-700 font-medium flex items-center">
              <span className="mr-2">📅</span>
              Графіки відключень
            </a>
            <a href="#" className="text-brand-yellow hover:text-yellow-600 font-medium">
              Підприємствам
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;