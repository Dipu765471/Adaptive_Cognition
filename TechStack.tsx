import React from 'react';
import { Database, Server, Code, Layers, Brain } from 'lucide-react';
import SectionHeading from './SectionHeading';

const TechStack = () => {
  const techStacks = [
    {
      category: 'Database',
      icon: <Database className="w-8 h-8 text-secondary-400" />,
      name: 'Neo4j',
      description:
        'Graph database that stores our knowledge network and learning paths',
      features: [
        'Stores educational content as connected nodes',
        'Maps relationships between concepts',
        'Enables complex path traversal queries',
        'Visualizes knowledge graphs for students and educators',
      ],
    },
    {
      category: 'AI/ML',
      icon: <Brain className="w-8 h-8 text-secondary-400" />,
      name: 'TensorFlow',
      description:
        'Powers our recommendation engine and student mastery analysis',
      features: [
        'Reinforcement learning for optimal path recommendations',
        'Natural language processing for content understanding',
        'Neural networks for learning style classification',
        'Predictive analytics for student outcomes',
      ],
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8 text-secondary-400" />,
      name: 'Flask',
      description: 'Lightweight Python framework for our API and ML pipeline',
      features: [
        'RESTful API endpoints for frontend communication',
        'Integration with TensorFlow models',
        'Database abstraction layer for Neo4j',
        'Authentication and user management',
      ],
    },
    {
      category: 'Frontend',
      icon: <Code className="w-8 h-8 text-secondary-400" />,
      name: 'React',
      description: 'Component-based UI library for our interactive interface',
      features: [
        'Interactive knowledge graph visualizations',
        'Student dashboard with progress metrics',
        'Adaptive content delivery system',
        'Responsive design for all devices',
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technology Stack"
          subtitle="Powerful technologies working in harmony"
        />

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-glow-sm transition-all duration-300 border border-slate-700 hover:border-secondary-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-slate-800 rounded-lg p-3">
                  {tech.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-secondary-400 uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 mt-1">
                    {tech.name}
                  </h3>
                  <p className="text-slate-400 mt-2">{tech.description}</p>
                </div>
              </div>

              <div className="mt-6 pl-16">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">
                  Key Capabilities:
                </h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2 text-slate-400 text-sm"
                    >
                      <span className="text-secondary-500 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;