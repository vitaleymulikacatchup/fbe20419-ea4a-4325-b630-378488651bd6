import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacts */}
          <div>
            <h3 className="text-brand-blue font-semibold mb-4">Контакти</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Телефон: прийом показ (для побутових споживачів):</div>
                  <div>(061)228-51-09, (061)702-05-50,</div>
                  <div>(098)168-01-01; (050)19-91-69; (093)170-28-35</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Адреса: вул. Славгарів, 14, м. Запоріжжя,</div>
                  <div>69035; e-mail: kanc@zoe.com.ua</div>
                </div>
              </div>
              
              <div className="mt-4">
                <a href="#" className="text-brand-blue hover:underline text-sm">
                  Особистий кабінет замовника послуг комерційного обліку
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile Apps & Services */}
          <div className="text-center">
            <p className="text-sm mb-4">
              Споживачі можуть подати скаргу до АТ "Запоріжжяобленерго" щодо якості послуг через мобільний додаток "Енергетика Онлайн"
            </p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <img src="/images/google-play.png" alt="Google Play" className="h-10" />
              <img src="/images/app-store.png" alt="App Store" className="h-10" />
            </div>
            
            <div className="flex justify-center space-x-3 mb-6">
              <img src="/images/service-1.png" alt="Service 1" className="h-12" />
              <img src="/images/service-2.png" alt="Service 2" className="h-12" />
              <img src="/images/service-3.png" alt="Service 3" className="h-12" />
              <img src="/images/service-4.png" alt="Service 4" className="h-12" />
              <img src="/images/service-5.png" alt="Service 5" className="h-12" />
            </div>
            
            <div className="mb-6">
              <img src="/images/qr-code.png" alt="QR Code" className="h-20 mx-auto" />
            </div>
            
            <div className="border-t border-gray-400 pt-6">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium inline-flex items-center transition-colors">
                слідкуйте за нами на facebook
              </a>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm">Передати покази:</span>
                <ExternalLink className="w-4 h-4 text-brand-blue" />
              </div>
            </div>
          </div>
          
          {/* Anti-corruption */}
          <div>
            <h3 className="text-brand-blue font-semibold mb-4">Антикорупційна Діяльність</h3>
            <div className="space-y-3 text-sm">
              <p>Шановні споживачі!</p>
              <p>
                В АТ "Запоріжжяобленерго" працює Лінія довіри з питань запобігання та протидії корупції
              </p>
              
              <div className="mt-4">
                <div className="text-brand-blue font-semibold">
                  ТЕЛЕФОН: (050) 322-64-26
                </div>
                <div className="mt-2">
                  <span>E-mail: </span>
                  <a href="mailto:stopcorrupt@zoe.com.ua" className="text-brand-blue hover:underline">
                    stopcorrupt@zoe.com.ua
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;