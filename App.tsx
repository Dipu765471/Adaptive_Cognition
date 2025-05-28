import React from 'react';
import Header from './components/Header';
import ProjectOverview from './components/ProjectOverview';
import TechStack from './components/TechStack';
import Architecture from './components/Architecture';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="stars-container absolute inset-0 overflow-hidden">
        <div className="stars"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ProjectOverview />
          <TechStack />
          <Architecture />
          <UseCases />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;