import React from 'react';
import { METHODOLOGY } from '../constants';
import { ChevronRight } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="bg-void border-b border-white/10 py-24">
      <div className="container mx-auto px-4 md:border-x border-white/10 md:px-12">
        
        <div className="mb-16">
          <span className="font-mono text-neon text-xs tracking-widest uppercase mb-2 block">/// WORKFLOW_PROTOCOL</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase">
            Execution_<br/>Sequence
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {METHODOLOGY.map((step, idx) => (
            <div key={idx} className="group relative border border-white/10 bg-white/5 p-6 md:p-8 hover:border-neon transition-colors duration-300">
              
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                
                {/* Number */}
                <div className="font-sans text-6xl font-bold text-white/10 group-hover:text-neon/20 transition-colors">
                  0{step.step}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-sans font-bold text-white uppercase mb-2 group-hover:text-neon transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-mono text-sm text-gray-400 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>

                {/* Indicator */}
                <div className="hidden md:block">
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-neon transform group-hover:translate-x-2 transition-all" />
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;