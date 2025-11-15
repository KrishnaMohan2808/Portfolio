import React from 'react';

// You can customize this list with your actual skills
const skills = [
  'Python',
  'Java',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'Arduino',
  'MATLAB',
  
    

];

function About() {
  return (
    // We give it an id of 'about' so the navbar link works
    <div id="about" className="container mx-auto p-4 py-16">
      
      {/* Section Header */}
      <h2 className="text-4xl font-bold font-mono text-center text-accent mb-12">
        // About Me
      </h2>

      {/* Content Grid: Text on left, skills on right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Bio */}
        <div className="text-lg text-light-text space-y-4">
          <p>
            Hi, I’m Krishna — an engineering student passionate about electronics, AI/ML, and intelligent systems. I love building things, experimenting with new technologies, and learning through real hands-on projects. Whether it’s microcontrollers, simulations, or computer vision and machine learning, Web Development. I enjoy turning concepts into working solutions.
          </p>
          <p>
            I’m deeply interested in using technology to solve real-world problems and improve lives. I believe in continuous learning and growth, always seeking out new challenges that push me to expand my skills and knowledge.
          </p>
          <p>
            This portfolio is a showcase of my journey in building things that 
            are both functional and enjoyable to use.
          </p>
        </div>

        {/* Right Column: Skills */}
        <div>
          <h3 className="text-2xl font-bold text-light-text mb-4">My Toolkit:</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {skills.map((skill, index) => (
              <li 
                key={index} 
                className="font-mono text-light-text flex items-center"
              >
                <span className="text-accent mr-2">&#9656;</span> {/* '►' symbol */}
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default About;