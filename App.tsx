import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Methodology from './components/Methodology';
import Mentorship from './components/Mentorship';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Methodology />
        <Mentorship />
      </main>
      <Contact />
      <AIConsultant />
    </div>
  );
}

export default App;