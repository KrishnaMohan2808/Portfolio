import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from 'react-icons/fa';
import { SiHuggingface, SiLeetcode } from 'react-icons/si';

function Contact() {
  return (
   
    <div id="contact" className="container mx-auto p-4 py-16">
      
    
      <h2 className="text-4xl font-bold font-mono text-center text-accent mb-8">
        // Contact
      </h2>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-light-text mb-8">
          Have a question or want to work together? My inbox is always open. 
          Feel free to send me a message!
        </p>

 <form 
  action="https://formsubmit.co/krishnamohan2808@gmail.com" 
  method="POST"
  className="flex flex-col gap-4"
>

  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="box" />
  <input 
    type="hidden" 
    name="_subject" 
    value="New Message From Portfolio Contact Form!" 
  />
  <input type="hidden" name="_next" value="http://localhost:5173/#contact" />



  <input 
    type="text" 
    name="name" 
    placeholder="Your Name" 
    required 
    className="p-3 bg-gray-800 border border-gray-700 rounded-md text-light-text focus:outline-none focus:border-accent"
  />
  <input 
    type="email" 
    name="email" 
    placeholder="Your Email" 
    required 
    className="p-3 bg-gray-800 border border-gray-700 rounded-md text-light-text focus:outline-none focus:border-accent"
  />
  <textarea 
    name="message" 
    rows="5" 
    placeholder="Your Message" 
    required 
    className="p-3 bg-gray-800 border border-gray-700 rounded-md text-light-text focus:outline-none focus:border-accent"
  ></textarea>

  <button 
    type="submit" 
    className="p-3 bg-transparent border-2 border-accent text-accent 
               font-mono font-bold text-lg 
               hover:bg-accent hover:text-dark-bg 
               transition-colors duration-300 rounded-md"
  >
    Send Message
  </button>
</form>

        <div className="flex justify-center gap-8 mt-12">
          <a 
            href="https://github.com/KrishnaMohan2808" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/krishnamohan2808/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a 
            href="mailto:krishnamohan2808@gmail.com" 
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <FaEnvelope size={32} />
          </a>
          <a 
            href="https://krishnaawrites.medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <FaMedium size={32} />
          </a>
          <a 
            href="https://leetcode.com/u/i_krishna/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <SiLeetcode size={32} />
          </a>
          <a 
            href="https://huggingface.co/krishnamohan2808"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <SiHuggingface size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;