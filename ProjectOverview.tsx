import React from 'react';
import { GraduationCap, Target, Users, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const ProjectOverview = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-primary-400" />,
      title: 'Personalized Learning',
      description:
        'Adapts content and learning paths to individual student needs, learning styles and pace.',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-400" />,
      title: 'Mastery Tracking',
      description:
        'Uses AI to accurately assess student comprehension and skill mastery across subjects.',
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-400" />,
      title: 'Adaptive Recommendations',
      description:
        'Suggests optimal next topics using reinforcement learning algorithms and knowledge relationships.',
    },
    {
      icon: <Users className="w-6 h-6 text-primary-400" />,
      title: 'Learning Style Adaptation',
      description:
        'Identifies and adapts to individual learning styles for optimal engagement and retention.',
    },
  ];

  return (
    <section id="overview" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Smart Adaptive Learning Paths"
          subtitle="Revolutionizing education through AI-powered personalization"
        />

        <div className="mt-8 md:mt-12 glass-card p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-slate-100">Core Idea</h3>
          <p className="text-slate-300 leading-relaxed mb-8 text-lg">
            Smart Adaptive Learning Paths uses advanced AI and knowledge graphs
            to create personalized educational experiences that adapt in
            real-time to each student's progress, learning style, and knowledge
            gaps. By mapping the relationships between concepts and tracking
            individual mastery, our platform recommends the optimal learning path
            for each student, significantly improving engagement and knowledge
            retention.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-slate-100">Impact</h3>
          <p className="text-slate-300 leading-relaxed mb-8 text-lg">
            Our solution addresses the fundamental problem of one-size-fits-all
            education by providing truly personalized learning experiences at
            scale. Studies show personalized learning can improve outcomes by up
            to 30% while reducing time to mastery by 40%. By combining knowledge
            graphs with reinforcement learning, we've created an intelligent
            system that continuously improves its recommendations based on real
            student outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {benefit.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;