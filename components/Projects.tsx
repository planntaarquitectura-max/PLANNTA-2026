import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-void border-b border-white/10">
      <div className="container mx-auto md:border-x border-white/10">
        
        <div className="border-b border-white/10 p-8 md:p-12 flex justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase">Selected_Works</h2>
          <div className="hidden md:block font-mono text-xs text-neon">
            /// DATABASE_ACCESS_GRANTED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="group relative border-b md:border-b-0 border-white/10 md:border-r last:border-r-0 aspect-[3/4] overflow-hidden cursor-pointer">
              
              {/* Image */}
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-neon text-black px-2 py-1 font-mono text-[10px] font-bold">
                    FIG. {idx + 1}
                  </span>
                  <ArrowUpRight className="text-white w-6 h-6" />
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-neon text-xs tracking-wider uppercase mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-white uppercase mb-4 leading-none">
                    {project.title}
                  </h3>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="border border-white/30 text-white/70 px-2 py-px text-[10px] font-mono uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <Link to="/works" className="block p-4 bg-neon text-black text-center font-mono text-xs font-bold uppercase hover:bg-white cursor-pointer transition-colors">
          [ LOAD_MORE_PROJECTS ]
        </Link>
      </div>
    </section>
  );
};

export default Projects;