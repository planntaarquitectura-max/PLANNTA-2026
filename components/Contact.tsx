import React, { useState } from 'react';
import { Send, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('TRANSMISSION SUCCESSFUL.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-void pt-24 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-0 md:border-x border-white/10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10">
          
          {/* CTA Section */}
          <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase mb-8 leading-none">
              Start<br/>Sequence
            </h2>
            <p className="font-mono text-gray-400 max-w-md mb-12">
              Initiate collaboration protocol. Sustainable tech-driven architecture awaits.
            </p>
            
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between border-b border-white/10 py-2">
                <span className="text-gray-500">EMAIL</span>
                <span className="text-white hover:text-neon cursor-pointer lowercase">contact@plannta.com</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-2">
                <span className="text-gray-500">PHONE</span>
                <span className="text-white">+52 (664) 555 0000</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-2">
                <span className="text-gray-500">HQ</span>
                <span className="text-white">TIJUANA, BC / REMOTE</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-16 bg-white/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label className="block font-mono text-xs text-neon mb-2 uppercase">Input_ID</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-xl focus:outline-none focus:border-neon transition-colors placeholder-white/10"
                  placeholder="YOUR NAME"
                />
              </div>
              
              <div className="group">
                <label className="block font-mono text-xs text-neon mb-2 uppercase">Input_Contact</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-xl focus:outline-none focus:border-neon transition-colors placeholder-white/10"
                  placeholder="EMAIL ADDRESS"
                />
              </div>

              <div className="group">
                <label className="block font-mono text-xs text-neon mb-2 uppercase">Input_Data</label>
                <textarea 
                  rows={3}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-xl focus:outline-none focus:border-neon transition-colors placeholder-white/10 resize-none"
                  placeholder="PROJECT DETAILS..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-black font-bold font-sans uppercase py-4 hover:bg-neon hover:text-black transition-all flex justify-between items-center px-6">
                <span>Transmit Data</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 px-8 flex justify-between items-center font-mono text-[10px] text-gray-500 uppercase">
          <div>
            © 2024 PLANNTA. SYSTEM_V4.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-neon">LINKEDIN</a>
            <a href="#" className="hover:text-neon">INSTAGRAM</a>
            <a href="#" onClick={() => window.scrollTo(0,0)} className="hover:text-white flex items-center gap-1">
              TOP <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;