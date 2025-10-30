import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/zaporizhzhia-night.jpg" 
          alt="Zaporizhzhia at night" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 hero-text-glow tracking-wider">
            ЕНЕРГІЯ - ЦЕ ЖИТТЯ
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;