import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-void border-b border-white/10">
      <div className="container mx-auto md:border-x border-white/10 py-16 md:py-24 px-4 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase">
            System_<br/>Capabilities
          </h2>
          <p className="font-mono text-xs text-gray-400 mt-4 md:mt-0 max-w-xs text-right">
            DEPLOYING ADVANCED ARCHITECTURAL SOLUTIONS VIA BIM & AI PROTOCOLS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="bg-void p-8 group hover:bg-white transition-colors duration-300 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <service.icon className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                <span className="font-mono text-xs text-gray-600 group-hover:text-black">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>

              {/* Body */}
              <div>
                <h3 className="text-xl font-sans font-bold text-white group-hover:text-black mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="font-mono text-xs text-gray-400 group-hover:text-gray-800 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tech Decor */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-black animate-ping"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;