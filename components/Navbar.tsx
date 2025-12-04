import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'INDEX', href: '#hero' },
    { name: 'PROFILE', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'WORKS', href: '#projects' },
    { name: 'SYSTEM', href: '#methodology' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void border-b border-white/10">
      <div className="flex justify-between items-stretch h-16 md:h-20">
        {/* Logo Section */}
        <a href="#" className="flex items-center px-6 md:px-8 border-r border-white/10 hover:bg-white/5 transition-colors group bg-void">
          <Terminal className="w-6 h-6 text-neon mr-3 group-hover:animate-pulse" />
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg md:text-xl tracking-tighter leading-none text-white">PLANNTA</span>
            <span className="font-mono text-[10px] text-neon tracking-[0.2em]">ARCH.SYSTEMS</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-stretch justify-end">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center px-6 border-l border-white/10 text-xs font-mono text-gray-400 hover:text-black hover:bg-neon transition-all duration-300 relative group"
            >
              <span className="absolute top-2 left-2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="flex items-center px-8 border-l border-white/10 bg-white text-black font-sans font-bold text-sm hover:bg-neon transition-colors">
            INITIATE_CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden px-6 border-l border-white/10 text-white hover:text-neon transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-void border-b border-white/10">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block p-6 border-b border-white/5 text-sm font-mono text-gray-300 hover:text-neon hover:pl-8 transition-all"
            >
              <span className="text-neon mr-4">0{idx + 1} //</span> {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;