import React from 'react';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/70 backdrop-blur-md border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="flex items-center justify-center bg-primary-500 rounded-lg p-2 shadow-glow">
              <Brain size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                <span className="text-primary-400">Adaptive</span>{' '}
                <span className="text-white">Cognition</span>
              </h2>
              <p className="text-xs text-slate-400 tracking-wider">
                REVOLUTIONIZING PERSONALIZED LEARNING
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <SocialButton icon={<Github size={18} />} />
            <SocialButton icon={<Twitter size={18} />} />
            <SocialButton icon={<Linkedin size={18} />} />
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              {['Features', 'API', 'Documentation', 'Pricing'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Team', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                'Case Studies',
                'Research',
                'Webinars',
                'Educational Content',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and
              innovations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 rounded-l-lg px-4 py-2 text-sm text-white flex-1 border border-slate-700 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-lg text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Adaptive Cognition. All rights
            reserved. Made with ❤️ for hackathon projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon }) => {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-white"
    >
      {icon}
    </a>
  );
};

export default Footer;