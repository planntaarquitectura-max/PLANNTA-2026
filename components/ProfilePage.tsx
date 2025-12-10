import React, { useEffect } from 'react';
import { User, Award, Users, Target } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants';

const ProfilePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    { role: "Principal Architect", id: "ARCH-01", desc: "Design Lead & Strategy" },
    { role: "BIM Manager", id: "TECH-01", desc: "Systems & Coordination" },
    { role: "Sustainability Lead", id: "ECO-01", desc: "Energy Analysis" },
    { role: "AI Specialist", id: "DEV-01", desc: "Digital Narration" }
  ];

  return (
    <div className="pt-20 min-h-screen bg-void font-mono">
      {/* Header */}
      <div className="bg-void border-b border-white/10 py-16 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0 grid-bg opacity-30"></div>
         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 border border-neon bg-neon/10">
                <User className="w-6 h-6 text-neon" />
              </div>
              <span className="text-neon text-xs tracking-[0.2em]">/// IDENTITY_MATRIX</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-sans font-bold text-white uppercase leading-none">
              Agency<br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Profile</span>
            </h1>
         </div>
      </div>

      {/* Main Bio Section */}
      <div className="container mx-auto px-4 md:px-12 py-16 md:py-24 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div>
              <h2 className="text-2xl font-sans font-bold text-white uppercase mb-8">Origin Story</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 {ABOUT_CONTENT.bio}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                 {ABOUT_CONTENT.philosophy}
              </p>
              
              <div className="mt-8 flex gap-4">
                 <div className="border border-white/20 p-4 flex-1 text-center">
                    <span className="block text-3xl font-sans font-bold text-white mb-1">20+</span>
                    <span className="text-[10px] text-gray-500 uppercase">Years Experience</span>
                 </div>
                 <div className="border border-white/20 p-4 flex-1 text-center">
                    <span className="block text-3xl font-sans font-bold text-white mb-1">100%</span>
                    <span className="text-[10px] text-gray-500 uppercase">BIM Integration</span>
                 </div>
              </div>
           </div>
           
           <div className="relative">
              <div className="absolute inset-0 border border-neon/20 translate-x-4 translate-y-4"></div>
              <img src="https://picsum.photos/800/600?grayscale" alt="Studio" className="w-full h-full object-cover filter grayscale contrast-125 relative z-10" />
           </div>
        </div>
      </div>

      {/* Team / Structure */}
      <div className="bg-white/5 py-16 md:py-24 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-12">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <h2 className="text-3xl font-sans font-bold text-white uppercase">Operative_Unit</h2>
              <span className="text-xs text-neon">/// HUMAN_CAPITAL</span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {team.map((member, idx) => (
                 <div key={idx} className="bg-void p-8 group hover:bg-white transition-colors duration-300">
                    <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                       <Users className="w-8 h-8 text-white group-hover:text-black" />
                    </div>
                    <div className="font-mono text-xs text-neon mb-2">{member.id}</div>
                    <h3 className="text-xl font-sans font-bold text-white group-hover:text-black mb-2 uppercase">{member.role}</h3>
                    <p className="text-[10px] text-gray-500 group-hover:text-gray-800 uppercase">{member.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* DNA / Values */}
      <div className="container mx-auto px-4 md:px-12 py-16 md:py-24">
         <h2 className="text-3xl font-sans font-bold text-white uppercase mb-12 text-center">Core_Directives</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { icon: Target, title: "Precision", text: "Zero tolerance for coordination errors. We build virtually before reality." },
               { icon: Award, title: "Excellence", text: "Award-winning sustainable designs that stand the test of time." },
               { icon: Users, title: "Collaboration", text: "Open protocols. Seamless integration with engineering and investment teams." }
            ].map((item, idx) => (
               <div key={idx} className="border border-white/10 p-8 hover:border-neon transition-colors">
                  <item.icon className="w-6 h-6 text-neon mb-4" />
                  <h3 className="text-lg font-sans font-bold text-white uppercase mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.text}</p>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};

export default ProfilePage;