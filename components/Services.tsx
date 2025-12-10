import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  preview?: boolean;
}

const Services: React.FC<ServicesProps> = ({ preview = false }) => {
  // If preview, show only first 3 items
  const displayServices = preview ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section id="services" className={`bg-void border-b border-white/10 ${preview ? 'py-16' : 'py-8'}`}>
      <div className="container mx-auto md:border-x border-white/10 px-4 md:px-12">
        
        {preview && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase">
              System_<br/>Capabilities
            </h2>
            <div className="flex flex-col items-end mt-4 md:mt-0">
              <p className="font-mono text-xs text-gray-400 max-w-xs text-right mb-4">
                DEPLOYING ADVANCED ARCHITECTURAL SOLUTIONS VIA BIM & AI PROTOCOLS.
              </p>
              <Link to="/services" className="group flex items-center gap-2 font-mono text-neon text-xs hover:bg-neon hover:text-black px-2 py-1 transition-all">
                VIEW FULL SPECS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 ${!preview ? 'mb-12' : ''}`}>
          {displayServices.map((service, idx) => (
            <div key={service.id} className="bg-void p-8 group hover:bg-white transition-colors duration-300 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <service.icon className="w-10 h-10 text-white group-hover:text-black transition-colors" />
                <span className="font-mono text-sm text-gray-600 group-hover:text-black">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>

              {/* Body */}
              <div>
                <h3 className="text-2xl font-sans font-bold text-white group-hover:text-black mb-4 uppercase tracking-tight leading-none">
                  {service.title}
                </h3>
                <p className="font-mono text-sm text-gray-400 group-hover:text-gray-800 leading-relaxed">
                  {service.description}
                </p>
                
                {!preview && (
                  <div className="mt-6 pt-4 border-t border-gray-800 group-hover:border-black/20">
                     <ul className="space-y-2">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="font-mono text-[10px] text-gray-500 group-hover:text-black uppercase flex items-center gap-2">
                            <span className="w-1 h-1 bg-neon group-hover:bg-black"></span>
                            {benefit}
                          </li>
                        ))}
                     </ul>
                  </div>
                )}
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