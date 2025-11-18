import React from 'react';

// Tech Stack / Skills List
const skills = [
  'Python', 'Java', 'JavaScript', 'React',
  'Tailwind CSS', 'Node.js', 'Arduino', 'MATLAB'
];

function About() {
  return (
    <section id="about" className="container mx-auto p-6 py-20">
      
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-[#c9d1d9]">
          <span className="text-[#39d353]">01.</span> About Me
        </h2>
        <div className="h-px bg-[#30363d] flex-grow max-w-xs"></div>
      </div>



      {/* Bottom Grid: Code Box vs Toolkit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: The Code Box (Moved from Hero) */}
        <div className="order-2 lg:order-1 w-full transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-[#161b22] rounded-lg border border-[#30363d] shadow-xl overflow-hidden font-mono text-sm md:text-base">
                {/* Fake Window Header */}
                <div className="bg-[#0d1117] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span className="ml-2 text-xs text-[#8b949e]">profile.js</span>
                </div>
                
                {/* Code Content */}
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
{'\n}'};
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        {/* Right Column: Toolkit */}
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-[#c9d1d9] mb-6 flex items-center">
             <span className="text-[#39d353] mr-2">⚡</span> My Toolkit
          </h3>
          
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-lg">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {skills.map((skill, index) => (
                  <li 
                    key={index} 
                    className="font-mono text-[#8b949e] flex items-center hover:text-[#39d353] transition-colors"
                  >
                    <span className="text-[#39d353] mr-2 text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;