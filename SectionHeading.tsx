import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">
        {title}
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;