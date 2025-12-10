import React, { useEffect, useState } from 'react';
import { Send, MapPin, Mail, Phone, Globe, ArrowUpRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('TRANSMISSION SUCCESSFUL. PROTOCOL INITIATED.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-void font-mono text-slate-50">
      {/* Header */}
      <div className="bg-void border-b border-white/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
           <div className="flex items-center gap-4 mb-4">
             <div className="p-2 border border-neon bg-neon/10">
               <Send className="w-6 h-6 text-neon" />
             </div>
             <span className="text-neon text-xs tracking-[0.2em]">/// COMM_CHANNEL_OPEN</span>
           </div>
           <h1 className="text-4xl md:text-7xl font-sans font-bold text-white uppercase leading-none">
             Initiate<br/>
             <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Sequence</span>
           </h1>
           <p className="mt-8 font-mono text-gray-400 max-w-xl text-sm border-l-2 border-neon pl-4">
             Establish connection with PLANNTA. Whether for investment inquiries, architectural consultation, or system integration.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-sans font-bold text-white uppercase mb-8">Coordinates</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b border-white/10 pb-6 group">
                  <div className="p-3 bg-white/5 group-hover:bg-neon group-hover:text-black transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neon uppercase block mb-1">Base_Location</span>
                    <p className="text-white text-lg font-sans font-bold">Tijuana, B.C.</p>
                    <p className="text-gray-400 text-sm">Zona Río, Distrito Financiero</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-white/10 pb-6 group">
                  <div className="p-3 bg-white/5 group-hover:bg-neon group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neon uppercase block mb-1">Direct_Feed</span>
                    <p className="text-white text-lg font-sans font-bold hover:text-neon cursor-pointer transition-colors">contact@plannta.com</p>
                    <p className="text-gray-400 text-sm">24/7 Monitored Inbox</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-white/10 pb-6 group">
                  <div className="p-3 bg-white/5 group-hover:bg-neon group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neon uppercase block mb-1">Voice_Link</span>
                    <p className="text-white text-lg font-sans font-bold">+52 664 609 4105</p>
                    <p className="text-gray-400 text-sm">Mon-Fri 09:00 - 18:00 PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map Visual */}
            <div className="relative aspect-video bg-white/5 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/800/400?grayscale&blur=2')] opacity-20 bg-cover bg-center"></div>
              <div className="absolute inset-0 grid-bg opacity-50"></div>
              
              {/* Radar Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-neon/30 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon rounded-full shadow-[0_0_20px_rgba(0,255,157,0.8)]"></div>
              
              <div className="absolute bottom-4 left-4 bg-black/80 border border-white/20 p-2 text-[10px] font-mono text-neon">
                LAT: 32.5149° N <br/>
                LON: 117.0382° W
              </div>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="absolute top-4 right-4 bg-neon text-black px-3 py-1 text-[10px] font-bold uppercase flex items-center gap-1 hover:bg-white transition-colors"
              >
                Open Sat_View <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative">
             <div className="absolute top-0 right-0 p-4 opacity-50">
               <Globe className="w-24 h-24 text-white/5" />
             </div>

             <h2 className="text-2xl font-sans font-bold text-white uppercase mb-8">Data_Entry</h2>
             
             <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="group">
                <label className="block font-mono text-xs text-neon mb-2 uppercase">Input_ID [Name]</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-xl focus:outline-none focus:border-neon transition-colors placeholder-white/10"
                  placeholder="ENTER FULL NAME"
                />
              </div>
              
              <div className="group">
                <label className="block font-mono text-xs text-neon mb-2 uppercase">Input_Contact [Email]</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-xl focus:outline-none focus:border-neon transition-colors placeholder-white/10"
                  placeholder="ENTER EMAIL ADDRESS"
                />
              </div>

              <div className="group">
                <label className="block font-mono text-xs text-neon mb-2 uppercase">Input_Subject</label>
                <select 
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-lg focus:outline-none focus:border-neon transition-colors"
                >
                  <option value="" className="bg-black text-gray-500">SELECT PURPOSE</option>
                  <option value="project" className="bg-black">New Project Inquiry</option>
                  <option value="consulting" className="bg-black">BIM Consulting</option>
                  <option value="careers" className="bg-black">Join The System</option>
                  <option value="other" className="bg-black">Other Data</option>
                </select>
              </div>

              <div className="group">
                <label className="block font-mono text-xs text-neon mb-2 uppercase">Input_Data [Message]</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-xl focus:outline-none focus:border-neon transition-colors placeholder-white/10 resize-none"
                  placeholder="PROJECT DETAILS / REQUIREMENTS..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-neon text-black font-bold font-sans uppercase py-4 hover:bg-white transition-all flex justify-between items-center px-6 mt-8">
                <span>Transmit Data</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;