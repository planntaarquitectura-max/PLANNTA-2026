import React, { useEffect } from 'react';
import Services from './Services';
import { Cpu } from 'lucide-react';

const ServicesPage: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-void">
      {/* Header */}
      <div className="bg-void border-b border-white/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-3 border border-neon bg-neon/10">
              <Cpu className="w-8 h-8 text-neon animate-pulse" />
            </div>
            <div>
              <span className="font-mono text-neon text-xs tracking-[0.2em] mb-2 block">/// MODULE: CAPABILITIES</span>
              <h1 className="text-4xl md:text-7xl font-sans font-bold text-white uppercase leading-[0.9]">
                Full Service<br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Specification</span>
              </h1>
            </div>
          </div>
          <p className="mt-8 font-mono text-gray-400 max-w-2xl text-sm md:text-base border-l-2 border-neon pl-4">
            Comprehensive breakdown of PLANNTA's technical and creative services. 
            Designed to integrate seamlessly into high-value investment workflows.
          </p>
        </div>
      </div>

      {/* Full Services Grid */}
      <Services preview={false} />
      
      {/* Footer CTA area specific to services */}
      <div className="bg-white text-black py-12 border-b border-white/10">
         <div className="container mx-auto px-4 md:px-12 text-center">
            <h3 className="font-sans font-bold text-2xl uppercase mb-4">Need a custom configuration?</h3>
            <p className="font-mono text-sm mb-6 max-w-xl mx-auto">
               We tailor our BIM and Design implementation to your specific project scale and requirements.
            </p>
            <a href="/#contact" className="inline-block bg-black text-neon font-mono text-xs px-8 py-3 uppercase hover:bg-neon hover:text-black transition-colors">
               Request Custom Proposal
            </a>
         </div>
      </div>
    </div>
  );
};

export default ServicesPage;