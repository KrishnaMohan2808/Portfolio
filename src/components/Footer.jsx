import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-dark-bg border-t border-gray-700 pt-10 pb-6 mt-20">

      {/* Animated top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent via-accent-hover to-accent animate-gradient-x"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        <div className="text-accent font-mono text-xl font-bold mb-6 md:mb-0">
          &lt;Krishna /&gt;
        </div>

        <div className="flex space-x-6 font-mono mb-6 md:mb-0">
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

        <div className="flex space-x-6 text-lg">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-hover transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-hover transition-colors"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:yourmail@example.com"
            className="hover:text-accent-hover transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 font-mono mt-8">
        © {new Date().getFullYear()} Krishna — Built with passion & code.
      </p>

    </footer>
  );
}

export default Footer;
