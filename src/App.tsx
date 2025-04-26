import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;