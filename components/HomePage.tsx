import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Methodology from './Methodology';
import Mentorship from './Mentorship';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services preview={true} />
      <Projects />
      <Methodology />
      <Mentorship />
    </>
  );
};

export default HomePage;