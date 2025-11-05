import React, { useState } from 'react';

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-bg p-4 sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        
      
        <div className="text-2xl font-mono font-bold text-accent">
          &lt;Krishna. /&gt; 
     
        </div>

   
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light-text focus:outline-none">
     
            {isOpen ? (
   
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
        
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 font-mono">
          <a href="#about" className="hover:text-accent-hover transition-colors">
            // About
          </a>
          <a href="#projects" className="hover:text-accent-hover transition-colors">
            // Projects
          </a>
          <a href="#contact" className="hover:text-accent-hover transition-colors">
            // Contact
          </a>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 font-mono">
          <a href="#about" className="block hover:text-accent-hover transition-colors" onClick={() => setIsOpen(false)}>
            // About
          </a>
          <a href="#projects" className="block hover:text-accent-hover transition-colors" onClick={() => setIsOpen(false)}>
            // Projects
          </a>
          <a href="#contact" className="block hover:text-accent-hover transition-colors" onClick={() => setIsOpen(false)}>
            // Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;