import React, { useState, useEffect } from 'react';
import { Braces, Brain, Sparkles } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-primary-500 rounded-lg p-2 shadow-glow">
            <Brain size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-primary-400">Smart</span>{' '}
              <span className="text-white">Adaptive Learning</span>
            </h1>
            <p className="text-xs text-slate-400 tracking-wider">
              AI-POWERED EDUCATION PLATFORM
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Overview', 'Tech Stack', 'Architecture', 'Use Cases'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-slate-300 hover:text-primary-400 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-glow text-sm font-medium">
            <Sparkles size={16} />
            <span>Demo</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;