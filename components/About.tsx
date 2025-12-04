import React from 'react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-void border-b border-white/10">
      <div className="container mx-auto md:border-x border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Text Area */}
          <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-8 uppercase">
                Profile_<br/>Analysis
              </h2>
              <div className="font-mono text-gray-400 text-sm md:text-base space-y-6 leading-relaxed">
                <p>
                  <span className="text-neon">[BIO]</span> {ABOUT_CONTENT.bio}
                </p>
                <p>
                  <span className="text-neon">[PHILOSOPHY]</span> {ABOUT_CONTENT.philosophy}
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              {ABOUT_CONTENT.highlights.map((item, idx) => (
                <div key={idx} className="bg-void p-4 hover:bg-neon/5 transition-colors group">
                  <span className="block text-xs font-mono text-gray-500 mb-1 group-hover:text-neon">0{idx + 1}</span>
                  <span className="font-mono text-xs md:text-sm text-white uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Area */}
          <div className="relative h-[500px] lg:h-auto overflow-hidden group">
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="Architectural Context" 
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:contrast-100 transition-all duration-700"
            />
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            
            <div className="absolute bottom-0 left-0 bg-void border-t border-r border-white/10 p-4">
               <span className="font-mono text-xs text-neon animate-pulse">● LIVE FEED</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;