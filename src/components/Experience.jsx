import React from 'react';

const experiences = [
  {
    company: 'Zimble Systems Pvt Ltd.',
    role: 'Software Developer Intern (Backend)',
    duration: 'Jan 2025 – Present'
  },
  {
    company: 'Kaizens Group',
    role: 'AI/ML Research Intern',
    duration: 'July 2025 – October 2025'
  }
];

function Experience() {
  return (
    <section id="experience" className="container mx-auto p-4 py-16">

      <h2 className="text-4xl font-bold font-mono text-center text-accent mb-8">
        // Experience
      </h2>

      <div className="bg-[#161b22] rounded-lg border border-[#30363d] shadow-xl overflow-hidden font-mono text-sm md:text-base">

        {/* Header */}
        <div className="bg-[#0d1117] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          <span className="ml-2 text-xs text-[#8b949e]">experience.js</span>
        </div>

        {/* Body */}
        <div className="p-6 overflow-x-auto">
          <pre className="text-[#e6edf3]">
{`const experience = [`}

{experiences.map((exp, index) => (
`  {
    role: '${exp.role}',
    company: '${exp.company}',
    duration: '${exp.duration}'
  }${index < experiences.length - 1 ? ',' : ''}`
)).join('\n')}

{`
];`}
          </pre>
        </div>

      </div>

    </section>
  );
}

export default Experience;
