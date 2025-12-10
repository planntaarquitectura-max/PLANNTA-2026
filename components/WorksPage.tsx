import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, FolderOpen } from 'lucide-react';

const WorksPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-void font-mono">
      {/* Header */}
      <div className="bg-void border-b border-white/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
           <div className="flex items-center gap-4 mb-4">
             <div className="p-2 border border-neon bg-neon/10">
               <FolderOpen className="w-6 h-6 text-neon" />
             </div>
             <span className="text-neon text-xs tracking-[0.2em]">/// DATABASE_ARCHIVE</span>
           </div>
           <h1 className="text-4xl md:text-7xl font-sans font-bold text-white uppercase leading-none">
             Selected<br/>
             <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Works</span>
           </h1>
           <p className="mt-8 font-mono text-gray-400 max-w-xl text-sm border-l-2 border-neon pl-4">
             A collection of high-performance architectural projects integrating BIM technology, sustainable design, and investment efficiency.
           </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="group relative border border-white/10 bg-white/5 hover:border-neon transition-all duration-500 cursor-pointer">
              
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative border-b border-white/10">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-black border border-neon text-neon px-2 py-1 text-[10px] font-bold uppercase z-10">
                  FIG. {idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                     <span className="text-neon text-xs tracking-wider uppercase mb-2 block">
                       {project.category}
                     </span>
                     <h3 className="font-sans text-2xl md:text-3xl font-bold text-white uppercase leading-none group-hover:text-neon transition-colors">
                       {project.title}
                     </h3>
                  </div>
                  <ArrowUpRight className="text-white/50 group-hover:text-neon w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed border-l border-white/10 pl-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 text-[10px] font-mono uppercase group-hover:border-neon/50 group-hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Contact CTA */}
      <div className="border-t border-white/10 bg-white text-black py-16">
         <div className="container mx-auto px-4 md:px-12 text-center">
            <h3 className="font-sans font-bold text-4xl uppercase mb-6">Start a Project</h3>
            <p className="font-mono text-sm text-gray-600 mb-8 max-w-lg mx-auto">
              Ready to implement intelligent architectural processes for your next development?
            </p>
            <a href="/#contact" className="inline-block border-2 border-black text-black font-bold font-sans text-sm px-8 py-4 uppercase hover:bg-black hover:text-white transition-all">
               Initiate Contact Sequence
            </a>
         </div>
      </div>
    </div>
  );
};

export default WorksPage;