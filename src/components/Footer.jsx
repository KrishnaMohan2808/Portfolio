import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-dark-bg border-t border-gray-700 py-6 mt-10">

      {/* Animated top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-accent-hover to-accent animate-gradient-x"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="text-accent font-mono text-lg font-bold">
          &lt;Krishna /&gt;
        </div>

        <div className="flex space-x-6 font-mono text-sm">
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
            href="https://github.com/KrishnaMohan2808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-hover transition-colors"
          >
            <FaGithub />
          </a>
          

          <a
            href="https://linkedin.com/in/krishnamohan2808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-hover transition-colors"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:krishnamohan2808@gmail.com"
            className="hover:text-accent-hover transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 font-mono mt-4">
        © {new Date().getFullYear()} Krishna — Built with passion & code.
      </p>

    </footer>
  );
}

export default Footer;
