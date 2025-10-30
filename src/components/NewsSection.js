import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const NewsSection = () => {
  const latestNews = {
    title: "ГПВ ПО ЗАПОРІЗЬКІЙ ОБЛАСТІ СКАСОВАНО",
    date: "30 жовтня 2025",
    content: "За командою НЕК «Укренерго» графік погодинних відключень на 30 жовтня по Запорізькій області наразі скасовано.",
    isUrgent: true
  };
  
  const actualNews = [
    {
      title: "Реєстр електропостачальників",
      excerpt: "Реєстр електропостачальників, які приєдналися до умов публічного договору електропостачальника про надання послуг з роздрібної електроенергії.",
      link: "Читати далі"
    },
    {
      title: "Перелік типів лічильників, рекомендованих до встановлення ПАТ «Запоріжжяобленерго», та їх технічні характеристики",
      excerpt: "У відповідності до вимог Кодексу комерційного обліку електричної енергії, затвердженого Постановою НКРЕ від 14.03.2018 № ...",
      link: "Читати далі"
    },
    {
      title: "До уваги споживачів за об'єктами, розташованими на територіях, де ведуться бойові дії, або тимчасово окупованих російською федерацією",
      excerpt: "З 24.02.2022 проти України здійснюється військова агресія російської федерації, у зв'язку з чим з 24.02.2022 Указом ...",
      link: "Читати далі"
    },
    {
      title: "ПАТ «Запоріжжяобленерго» інформує щодо розгляду звернень (листів) споживачів (заявників) з метою врегулювання договірних відносин в період дії правового режиму воєнного стану",
      excerpt: "З 24.02.2022 проти України здійснюється військова агресія російської федерації, у зв'язку з чим з 24.02.2022 Указом ...",
      link: "Читати далі"
    }
  ];
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest News */}
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="w-5 h-5 text-brand-blue mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">ОСТАННІ НОВИНИ</h2>
            </div>
            
            <div className="news-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-20 bg-brand-blue text-white flex flex-col items-center justify-center text-xs font-bold">
                    <div>30</div>
                    <div>жовтня</div>
                    <div>2025</div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {latestNews.title}
                  </h3>
                  
                  {latestNews.isUrgent && (
                    <div className="mb-3">
                      <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                        ОНОВЛЕНО!
                      </span>
                      <div className="text-red-600 font-semibold text-sm mt-1">
                        Скасовано графік<br />
                        погодинних<br />
                        відключень
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {latestNews.content}
                  </p>
                  
                  <div className="mt-4">
                    <span className="text-brand-blue text-sm font-medium">УВАГА!</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Ситуація в об'єднаній енергосистемі динамічно змінюється. У випадку ускладнення ми обов'язково повідомимо. Слідкуйте за нашими інформаційними ресурсами.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actual News */}
          <div>
            <div className="flex items-center mb-6">
              <Clock className="w-5 h-5 text-brand-blue mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">АКТУАЛЬНІ НОВИНИ</h2>
            </div>
            
            <div className="space-y-4">
              {actualNews.map((news, index) => (
                <div key={index} className="news-card">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {news.excerpt}
                  </p>
                  <a href="#" className="text-brand-blue text-xs font-medium hover:underline">
                    {news.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded text-sm font-medium transition-colors">
            Переглянути всі новини
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;