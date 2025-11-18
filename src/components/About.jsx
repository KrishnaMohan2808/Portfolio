import React from 'react';

// UPDATED: Using numeric values (1-10) to generate ASCII bars
const skills = [
  { tech: 'Python', value: 9 },
  { tech: 'Java', value: 6},
  { tech: 'JavaScript', value: 7 },
  { tech: 'React', value: 7 },
  { tech: 'Tailwind', value: 7 },
  // { tech: 'Node.js', value: 6 },
  { tech: 'Arduino', value: 7 },
  { tech: 'MATLAB', value: 8 },
  { tech: 'Docker', value: 4 }

];

// Helper for ASCII progress bar
const getBar = (value) => {
  const filled = '|'.repeat(value);
  const empty = '.'.repeat(10 - value);
  return `[${filled}${empty}]`;
};

function About() {
  return (
    <section id="about" className="container mx-auto p-4 py-16">

      <h2 className="text-4xl font-bold font-mono text-center text-accent mb-8">
        // About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    
        <div className="order-2 lg:order-1 w-full transform hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-[#161b22] rounded-lg border border-[#30363d] shadow-xl overflow-hidden font-mono text-sm md:text-base">

   
            <div className="bg-[#0d1117] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-2 text-xs text-[#8b949e]">profile.js</span>
            </div>

       
            <div className="p-6 overflow-x-auto">
              <pre>
                <code className="text-[#e6edf3]">
<span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">profile</span> <span className="text-[#ff7b72]">=</span> {'{'}
{'\n  '}<span className="text-[#79c0ff]">degree</span>: <span className="text-[#a5d6ff]">'B.Tech in Electronics & Comm.'</span>,
{'\n  '}<span className="text-[#79c0ff]">college</span>: <span className="text-[#a5d6ff]">'Govt. Eng. College Thrissur'</span>,
{'\n  '}<span className="text-[#79c0ff]">school</span>: <span className="text-[#a5d6ff]">'Kendriya Vidyalaya Ottapalam'</span>,
{'\n  '}<span className="text-[#79c0ff]">likes</span>: <span className="text-[#c9d1d9]">[</span>
{'\n    '}<span className="text-[#a5d6ff]">'New Challenges'</span>,
{'\n    '}<span className="text-[#a5d6ff]">'Watching sky'</span>,
{'\n    '}<span className="text-[#a5d6ff]">'Music'</span>
{'\n  '}<span className="text-[#c9d1d9]">]</span>
{'\n}'};</code>
              </pre>
            </div>
          </div>
        </div>

    
        <div className="order-1 lg:order-2 w-full transform hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-[#161b22] rounded-lg border border-[#30363d] shadow-xl overflow-hidden font-mono text-sm md:text-base">

            <div className="bg-[#0d1117] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-2 text-xs text-[#8b949e]">toolkit.js</span>
            </div>

            <div className="p-6 overflow-x-auto">
              <pre>
                <code className="text-[#e6edf3]">
<span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">toolkit</span> <span className="text-[#ff7b72]">=</span> {'['}
{skills.map((skill, index) => (
  <React.Fragment key={index}>
    {'\n  { '}
    <span className="text-[#79c0ff]">tech</span>: <span className="text-[#a5d6ff]">{`'${skill.tech}'`}</span>,{' '}
    <span className="text-[#79c0ff]">loading</span>: <span className="text-[#39d353]">{`'${getBar(skill.value)}'`}</span>
    {' }'}
    {index < skills.length - 1 ? ',' : ''}
  </React.Fragment>
))}
{'\n];'}
                </code>
              </pre>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default About;
