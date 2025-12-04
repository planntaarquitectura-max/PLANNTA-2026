import React from 'react';
import { COURSES } from '../constants';
import { TerminalSquare } from 'lucide-react';

const Mentorship: React.FC = () => {
  return (
    <section className="bg-void border-b border-white/10">
      <div className="container mx-auto md:border-x border-white/10">
        <div className="flex flex-col lg:flex-row">
          
          {/* Header Panel */}
          <div className="lg:w-1/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 bg-white text-black">
            <TerminalSquare className="w-8 h-8 mb-6" />
            <h2 className="text-3xl font-sans font-bold mb-6 uppercase">Knowledge_<br/>Transfer</h2>
            <p className="font-mono text-sm mb-8 leading-relaxed">
              Proprietary methodologies available for external acquisition. Upgrade your operational capacity.
            </p>
            <a href="#contact" className="inline-block px-6 py-3 border-2 border-black font-bold font-sans text-sm hover:bg-black hover:text-white transition-colors uppercase">
              Request Access
            </a>
          </div>

          {/* Courses Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2">
            {COURSES.map((course, idx) => (
              <div key={idx} className="p-8 border-b md:border-b-0 border-r border-white/10 hover:bg-white/5 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-sans font-bold text-white uppercase">{course.title}</h3>
                  <span className="text-[10px] font-mono border border-neon text-neon px-1">V.2024</span>
                </div>
                
                <p className="font-mono text-xs text-gray-400 mb-6 h-12">
                  {course.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase mb-2">Target_Unit:</span>
                    <span className="text-xs font-mono text-white">{course.targetAudience}</span>
                  </div>
                  
                  <div>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase mb-2">Modules:</span>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono bg-white/10 px-2 py-1 text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;