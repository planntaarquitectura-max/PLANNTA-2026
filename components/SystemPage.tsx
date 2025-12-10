import React, { useEffect } from 'react';
import { Workflow, Cpu, Layers, Database, Share2, ShieldCheck, Zap, GitBranch } from 'lucide-react';
import { METHODOLOGY } from '../constants';
import { Link } from 'react-router-dom';

const SystemPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { name: "Autodesk Revit", cat: "BIM CORE", desc: "Primary modeling environment. LOD 400 standard." },
    { name: "Dynamo BIM", cat: "AUTOMATION", desc: "Visual scripting for complex geometry & data tasks." },
    { name: "Navisworks", cat: "COORDINATION", desc: "Clash detection and 4D simulation." },
    { name: "Gemini / Midjourney", cat: "AI SYNTHESIS", desc: "Concept generation & texture synthesis." },
    { name: "Unreal Engine", cat: "VISUALIZATION", desc: "Real-time rendering & VR walkthroughs." },
    { name: "Rhino + Grasshopper", cat: "PARAMETRIC", desc: "Computational design algorithms." }
  ];

  return (
    <div className="pt-20 min-h-screen bg-void font-mono text-slate-50">
      
      {/* Header */}
      <div className="bg-void border-b border-white/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
           <div className="flex items-center gap-4 mb-4">
             <div className="p-2 border border-neon bg-neon/10">
               <Workflow className="w-6 h-6 text-neon" />
             </div>
             <span className="text-neon text-xs tracking-[0.2em]">/// OS_ARCHITECTURE</span>
           </div>
           <h1 className="text-4xl md:text-7xl font-sans font-bold text-white uppercase leading-none">
             Operating<br/>
             <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>System</span>
           </h1>
           <p className="mt-8 font-mono text-gray-400 max-w-xl text-sm border-l-2 border-neon pl-4">
             The PLANNTA Framework. A rigorous integration of BIM protocols, AI algorithms, and ecological parameters designed to eliminate inefficiency.
           </p>
        </div>
      </div>

      {/* The Loop / Methodology Detail */}
      <div className="container mx-auto px-4 md:px-12 py-16 md:py-24 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <h2 className="text-3xl font-sans font-bold text-white uppercase">Processing_Loop</h2>
           <span className="text-xs text-neon">/// EXECUTION_PROTOCOL</span>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/10 z-0"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {METHODOLOGY.map((step, idx) => (
                 <div key={idx} className="bg-void border border-white/10 p-6 hover:border-neon transition-colors group">
                    <div className="w-16 h-16 bg-black border border-white/20 flex items-center justify-center mb-6 group-hover:bg-neon group-hover:text-black group-hover:border-neon transition-all">
                       <span className="font-sans font-bold text-xl">0{step.step}</span>
                    </div>
                    <h3 className="text-lg font-sans font-bold text-white uppercase mb-3">{step.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                       {step.description}
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="bg-white/5 py-16 md:py-24 border-b border-white/10">
         <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-3xl font-sans font-bold text-white uppercase mb-12 text-center">Software_Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
               {techStack.map((tech, idx) => (
                  <div key={idx} className="bg-void p-8 group hover:bg-white transition-colors duration-300">
                     <div className="flex justify-between items-start mb-4">
                        <Cpu className="w-6 h-6 text-gray-600 group-hover:text-black" />
                        <span className="text-[10px] border border-white/20 px-2 py-1 text-neon group-hover:border-black group-hover:text-black uppercase">
                           {tech.cat}
                        </span>
                     </div>
                     <h3 className="text-xl font-sans font-bold text-white group-hover:text-black mb-2 uppercase">
                        {tech.name}
                     </h3>
                     <p className="text-xs text-gray-400 group-hover:text-gray-800">
                        {tech.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Infrastructure / Features */}
      <div className="container mx-auto px-4 md:px-12 py-16 md:py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-sans font-bold text-white uppercase mb-8">Infrastructure</h2>
               <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Our digital infrastructure is built for speed, security, and redundancy. We treat architectural data as a critical asset.
               </p>
               <ul className="space-y-6">
                  <li className="flex items-center gap-4 group">
                     <div className="p-2 bg-white/5 group-hover:bg-neon group-hover:text-black transition-colors">
                        <Database className="w-5 h-5" />
                     </div>
                     <div>
                        <strong className="block text-white uppercase text-xs">Cloud Centralization</strong>
                        <span className="text-xs text-gray-500">Autodesk Construction Cloud (ACC) integration.</span>
                     </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                     <div className="p-2 bg-white/5 group-hover:bg-neon group-hover:text-black transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                     </div>
                     <div>
                        <strong className="block text-white uppercase text-xs">Data Integrity</strong>
                        <span className="text-xs text-gray-500">Daily backups & version control protocols.</span>
                     </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                     <div className="p-2 bg-white/5 group-hover:bg-neon group-hover:text-black transition-colors">
                        <Zap className="w-5 h-5" />
                     </div>
                     <div>
                        <strong className="block text-white uppercase text-xs">Render Farm</strong>
                        <span className="text-xs text-gray-500">Dedicated GPU clusters for high-fidelity visualization.</span>
                     </div>
                  </li>
               </ul>
            </div>
            
            {/* Visual Abstract */}
            <div className="relative border border-white/10 p-8 flex items-center justify-center bg-white/5 overflow-hidden">
               <div className="absolute inset-0 grid-bg opacity-50"></div>
               
               {/* Animated Diagram */}
               <div className="relative z-10 w-full max-w-sm aspect-square border border-neon/30 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-2/3 h-2/3 border border-white/20 rounded-full flex items-center justify-center">
                     <div className="w-1/3 h-1/3 bg-neon/10 rounded-full animate-pulse shadow-[0_0_30px_rgba(0,255,157,0.3)]"></div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-void border border-neon flex items-center justify-center">
                     <GitBranch className="w-3 h-3 text-neon" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-6 h-6 bg-void border border-neon flex items-center justify-center">
                     <Layers className="w-3 h-3 text-neon" />
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-void border border-neon flex items-center justify-center">
                     <Database className="w-3 h-3 text-neon" />
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 w-6 h-6 bg-void border border-neon flex items-center justify-center">
                     <Share2 className="w-3 h-3 text-neon" />
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      {/* Footer CTA */}
      <div className="border-t border-white/10 bg-black py-12 flex justify-center">
         <Link to="/contact" className="group flex items-center gap-2 text-white hover:text-neon transition-colors font-mono uppercase tracking-widest text-xs">
            <span>Integration Inquiry</span>
            <div className="w-8 h-px bg-white group-hover:bg-neon transition-colors"></div>
         </Link>
      </div>

    </div>
  );
};

export default SystemPage;