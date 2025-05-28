import React from 'react';
import { 
  GraduationCap, Building, BookOpen, Users, 
  Sparkles, ArrowRight 
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const UseCases = () => {
  const useCases = [
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Higher Education",
      description: "Universities can offer personalized learning paths to thousands of students simultaneously, addressing individual knowledge gaps and learning styles.",
      benefits: [
        "30% improvement in completion rates",
        "Reduced workload for instructors",
        "Better preparation for advanced courses"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      title: "Corporate Training",
      description: "Companies can upskill employees with customized learning journeys that adapt to their current knowledge and role-specific needs.",
      benefits: [
        "40% faster skill acquisition",
        "Targeted competency development",
        "Higher training ROI"
      ],
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "K-12 Education",
      description: "Schools can provide tailored instruction to students at different levels, ensuring no student is left behind or held back.",
      benefits: [
        "Addresses achievement gaps",
        "Supports gifted and struggling students",
        "Improves engagement and outcomes"
      ],
      color: "from-accent-500 to-accent-600"
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Real-World Use Cases" 
          subtitle="How Adaptive Cognition transforms learning across sectors"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden hover:shadow-glow-sm transition-all duration-300">
              <div className={`bg-gradient-to-r ${useCase.color} p-6`}>
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-success-500 mt-1 flex-shrink-0">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 rounded-2xl border border-accent-500/30">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-accent-500/20 rounded-full p-4">
              <Sparkles className="w-8 h-8 text-accent-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Introducing: Adaptive Cognition</h3>
              <p className="text-slate-300">
                Our proposed name "Adaptive Cognition" captures the essence of our platform - 
                an intelligent system that adapts to individual cognitive processes and learning patterns.
                It represents our mission to transform education through personalization and AI-powered insights.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-glow">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;