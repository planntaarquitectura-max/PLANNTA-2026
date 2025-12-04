import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col pt-20 bg-void grid-bg overflow-hidden border-b border-white/10">
      
      {/* Central Content */}
      <div className="flex-1 flex flex-col justify-center container mx-auto px-4 md:px-0 relative z-10">
        
        <div className="md:border-x border-white/10 h-full flex flex-col justify-center md:px-12 py-12 relative">
          
          {/* Tech Spec Decor */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-500 hidden md:block text-right">
            SYSTEM STATUS: ONLINE<br/>
            VER: 4.2.0<br/>
            LOC: MX-CITY
          </div>

          <div className="mb-8">
            <span className="inline-block px-2 py-1 bg-neon/10 border border-neon text-neon text-xs font-mono mb-6">
              /// ARCHITECTURE_REDEFINED
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans font-bold text-white uppercase leading-[0.85] tracking-tighter mix-blend-difference">
              ECO<br/>
              LOGIC<br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>SYSTEMS</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between border-t border-white/10 pt-8">
            <p className="font-mono text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
              <span className="text-neon font-bold mr-2">::</span>
              {HERO_CONTENT.subtitle}
            </p>

            <a href="#projects" className="group flex items-center gap-4 text-white hover:text-neon transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:text-black group-hover:border-neon transition-all">
                <ArrowDownRight className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm tracking-widest uppercase">Explore Data</span>
            </a>
          </div>

        </div>
      </div>

      {/* Marquee Footer */}
      <div className="border-t border-b border-white/10 bg-white text-black py-3 overflow-hidden relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center font-sans font-bold text-lg md:text-xl tracking-widest uppercase">
          <span>BIM COORDINATION</span>
          <span className="text-neon font-black">+</span>
          <span>GENERATIVE AI</span>
          <span className="text-neon font-black">+</span>
          <span>SUSTAINABILITY</span>
          <span className="text-neon font-black">+</span>
          <span>ASSET MANAGEMENT</span>
          <span className="text-neon font-black">+</span>
          <span>CLASH DETECTION</span>
          <span className="text-neon font-black">+</span>
          <span>PARAMETRIC DESIGN</span>
          <span className="text-neon font-black">+</span>
          <span>BIM COORDINATION</span>
          <span className="text-neon font-black">+</span>
          <span>GENERATIVE AI</span>
          <span className="text-neon font-black">+</span>
          <span>SUSTAINABILITY</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;