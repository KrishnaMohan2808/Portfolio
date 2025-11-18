import React from 'react';
import { motion } from 'framer-motion';



const Folder = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>
);

const Lock = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLink = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);


const projectData = [
  {
    title: "Maitri: Community Hub",
    description: "A full-stack, real-time geospatial platform designed to connect neighbors. Enables interactive issue reporting on live maps, mutual aid requests, and user-organized community cleanup events.",
    tags: ["React", "Supabase", "Leaflet", "Tailwind"],
    liveLink: "https://maitri-community-hub.vercel.app/",
    repoLink: "https://github.com/KrishnaMohan2808/community-hub",
    isPrivate: false
  },
  {
    title: "Procedural Art Generator",
    description: "An MLOps pipeline showcasing a real-time deep learning model deployed with FastAPI and Docker on GCP. The model performs style transfer on images using a custom-trained PyTorch neural network.",
    tags: ["PyTorch", "FastAPI", "Docker", "GCP"],
    liveLink: null,
    repoLink: "https://github.com/KrishnaMohan2808/Procedural-Art-Style-Transfer-Generator",
    isPrivate: false
  },
  {
    title: "Medi-Bot: AI Medical Assistant",
    description: "An AI chatbot built to answer medical queries using Retrieval-Augmented Generation (RAG). Leverages a FAISS vector database for context retrieval and the Mistral NLP model hosted on Hugging Face for accurate response generation.",
    tags: ["Mistral LLM", "RAG", "FAISS", "Hugging Face"],
    liveLink: null, 
    repoLink: "https://huggingface.co/spaces/krishnamohan2808/medi-bot", 
    isPrivate: false
  },
  {
    title: "(INTERNSHIP)Data Retrieval & Cleansing Tool",
    description: "Automated ETL pipeline reducing manual preprocessing time by 40%...",
    tags: ["Python", "Pandas", "SQL", "ETL"],
    liveLink: null,
    repoLink: null,
    isPrivate: true
  },
  {
    title: "(INTERNSHIP)Predictor System",
    description: "Real-time ML forecasting engine deployed via API...",
    tags: ["Python", "Scikit-learn", "Flask", "Docker"],
    liveLink: null,
    repoLink: null,
    isPrivate: true
  },
  {
    title: "(INTERNSHIP)Auto-Mapping System",
    description: "Intelligent schema mapping using NLP + fuzzy logic...",
    tags: ["Python", "NLP", "React", "Node.js"],
    liveLink: null,
    repoLink: null,
    isPrivate: true
  }
];

function Projects() {
  return (
    <div id="projects" className="container mx-auto p-4 py-16">

      <h2 className="text-4xl font-bold font-mono text-center text-accent mb-8">
        // Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#161b22] rounded-lg border border-[#30363d] p-6 hover:border-[#8b949e] transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full shadow-lg"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <Folder size={40} strokeWidth={1.5} className="text-[#4ade80]" />

              <div className="flex gap-4 text-[#8b949e]">
                {project.isPrivate ? (
                  <div className="flex items-center gap-1 text-xs font-mono border border-[#30363d] px-2 py-1 rounded-full">
                    <Lock size={12} />
                    <span>Private</span>
                  </div>
                ) : (
                  <>
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" className="hover:text-[#4ade80]">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" className="hover:text-[#4ade80]">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#c9d1d9] mb-3 group-hover:text-[#4ade80] transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#8b949e] text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono text-[#4ade80]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>  
  );

} 

export default Projects;
