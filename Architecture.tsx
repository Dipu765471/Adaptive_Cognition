import React from 'react';
import { Layers, Code, Database, Server, ArrowRight, Brain } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Architecture = () => {
  return (
    <section id="architecture" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="System Architecture"
          subtitle="How our components work together"
        />

        <div className="mt-8 md:mt-12 glass-card p-8 md:p-12 rounded-2xl">
          <div className="architecture-diagram relative">
            {/* Data Layer */}
            <div className="layer-container mb-16 relative">
              <div className="layer-title flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-primary-400" />
                <h3 className="text-xl font-bold text-slate-100">Data Layer</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ArchitectureCard
                  title="Knowledge Graph (Neo4j)"
                  description="Stores educational concepts as nodes with relationships to create a comprehensive knowledge network."
                  className="border-primary-500/30 hover:border-primary-500"
                />
                <ArchitectureCard
                  title="User Data Store"
                  description="Captures student interactions, preferences, assessments, and learning history."
                  className="border-primary-500/30 hover:border-primary-500"
                />
                <ArchitectureCard
                  title="Content Repository"
                  description="Manages learning materials across various formats and difficulty levels."
                  className="border-primary-500/30 hover:border-primary-500"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-secondary-500">
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
            </div>

            {/* AI Layer */}
            <div className="layer-container mb-16 relative">
              <div className="layer-title flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-secondary-400" />
                <h3 className="text-xl font-bold text-slate-100">AI Layer</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ArchitectureCard
                  title="Reinforcement Learning Engine"
                  description="Optimizes learning paths based on student performance and learning goals."
                  className="border-secondary-500/30 hover:border-secondary-500"
                />
                <ArchitectureCard
                  title="Learning Style Classifier"
                  description="Analyzes behavior patterns to identify optimal content presentation methods."
                  className="border-secondary-500/30 hover:border-secondary-500"
                />
                <ArchitectureCard
                  title="Mastery Assessment System"
                  description="Evaluates student understanding using adaptive testing and pattern recognition."
                  className="border-secondary-500/30 hover:border-secondary-500"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-accent-500">
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
            </div>

            {/* API Layer */}
            <div className="layer-container mb-16 relative">
              <div className="layer-title flex items-center gap-2 mb-4">
                <Server className="w-5 h-5 text-accent-400" />
                <h3 className="text-xl font-bold text-slate-100">API Layer</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ArchitectureCard
                  title="Flask API Service"
                  description="Provides RESTful endpoints for frontend communication and backend integrations."
                  className="border-accent-500/30 hover:border-accent-500"
                />
                <ArchitectureCard
                  title="Authentication & Authorization"
                  description="Manages user identity, roles, and access control throughout the system."
                  className="border-accent-500/30 hover:border-accent-500"
                />
                <ArchitectureCard
                  title="Analytics Service"
                  description="Processes user data for insights on platform usage and learning effectiveness."
                  className="border-accent-500/30 hover:border-accent-500"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-success-500">
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
            </div>

            {/* Frontend Layer */}
            <div className="layer-container">
              <div className="layer-title flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-success-400" />
                <h3 className="text-xl font-bold text-slate-100">
                  Presentation Layer
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ArchitectureCard
                  title="Student Dashboard"
                  description="Personalized interface showing progress, recommendations, and learning activities."
                  className="border-success-500/30 hover:border-success-500"
                />
                <ArchitectureCard
                  title="Knowledge Graph Visualizer"
                  description="Interactive display of concept relationships and student's learning journey."
                  className="border-success-500/30 hover:border-success-500"
                />
                <ArchitectureCard
                  title="Adaptive Content Renderer"
                  description="Displays learning materials in formats optimized for individual learning styles."
                  className="border-success-500/30 hover:border-success-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArchitectureCard = ({ title, description, className }) => {
  return (
    <div
      className={`bg-slate-800/50 p-4 rounded-xl border ${className} transition-all duration-300`}
    >
      <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Architecture;