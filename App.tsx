import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ProfilePage from './components/ProfilePage';
import WorksPage from './components/WorksPage';
import ContactPage from './components/ContactPage';
import SystemPage from './components/SystemPage';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-void text-slate-50 font-sans selection:bg-neon selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/system" element={<SystemPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Contact />
        <AIConsultant />
      </div>
    </Router>
  );
}

export default App;