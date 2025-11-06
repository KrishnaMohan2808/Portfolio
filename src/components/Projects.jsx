import React from 'react';


const projectData = [
  {
    title: "Project One",
    description: "A short description of the project. What it does, why you built it, and the technologies used.",
    image: "https://via.placeholder.com/400x250", 
    tags: ["React", "Tailwind", "Vite"],
    liveLink: "#", 
    repoLink: "#", 
  },
  {
    title: "Project Two",
    description: "This project involved [skill] and [technology] to solve [problem]. It was a great learning experience.",
    image: "https://via.placeholder.com/400x250",
    tags: ["JavaScript", "Node.js", "Express"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Project Three",
    description: "An electronics project that I also built a web interface for. It connects hardware and software.",
    image: "https://via.placeholder.com/400x250",
    tags: ["Arduino", "React", "Firebase"],
    liveLink: "#",
    repoLink: "#",
  },
];

function Projects() {
  return (
   
    <div id="projects" className="container mx-auto p-4 py-16">
      
    
      <h2 className="text-4xl font-bold font-mono text-center text-accent mb-12">
        // Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
       
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>

      
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-light-text mb-2">{project.title}</h3>
              <p className="text-light-text mb-4 flex-grow">{project.description}</p>
              
     
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-700 text-accent text-sm font-mono px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

     
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.liveLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-accent hover:text-accent-hover transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.repoLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-light-text hover:text-accent-hover transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;