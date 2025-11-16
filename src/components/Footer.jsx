import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-gray-700 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Left Section Logo */}
        <div className="text-accent font-mono text-xl font-bold mb-4 md:mb-0">
          &lt;Krishna /&gt;
        </div>

        {/* Center Links */}
        <div className="flex space-x-6 font-mono mb-4 md:mb-0">
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

        {/* Social Icons */}
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

      {/* Bottom Divider */}
      <div className="text-center text-sm text-gray-500 font-mono mt-6">
        © {new Date().getFullYear()} Krishna — Built with passion & code.
      </div>
    </footer>
  );
}

export default Footer;
