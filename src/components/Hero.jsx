import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom Hook for Typewriter Effect (No external dependency needed)
const useTypewriter = (phrases, typeSpeed = 100, deleteSpeed = 50, pauseDuration = 1500) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      // Determine typing speed
      setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

      // If word is complete
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        setTypingSpeed(pauseDuration); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before new word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
};

function Hero() {
  const typingText = useTypewriter(
    [
      "I'm an Electronics Engineer.",
      "I'm a hands-on Experimenter.",
      "I'm a problem-solver.",
      "I build things that may or may not work.",
    ]
  );

  return (
    <section className="container mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-12">
      
      {/* Left Column: Text Intro */}
      <div className="w-full md:w-3/5 text-center md:text-left mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-mono text-[#4ade80] mb-4">
            Hello World, I'm
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#4ade80] mb-4 tracking-tight">
            Krishna Mohan.
          </h1>
          
          <div className="text-xl md:text-3xl font-bold font-mono text-[#8b949e] h-20 md:h-auto flex items-center justify-center md:justify-start">
            <span>{typingText}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>

          <p className="text-lg text-[#8b949e] mt-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
            By degree, I'm an electronics engineer. By nature, I'm an experimenter.
            I love to take on new challenges, get my hands dirty, and learn new things 
            from the ground up.
          </p>

          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-8 py-4 bg-transparent border-2 border-[#4ade80] text-[#4ade80] rounded-md font-mono font-bold text-lg hover:bg-[#39d353]/10 transition-colors duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* Right Column: Profile Photo */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
            {/* TODO: REPLACE THIS IMAGE SOURCE 
               1. Put your photo in the 'public' folder and name it 'profile.jpg'
               2. Or change the src below to your specific path
            */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
                {/* Decorative border ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#4ade80] opacity-80 group-hover:scale-105 transition-transform duration-300"></div>
                
                {/* The Image */}
                <img 
                    src="/profile.jpg" 
                    alt="Krishna Mohan" 
                    className="w-full h-full object-cover rounded-full shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-[#0d1117]"
                    // Fallback if image not found
                    onError={(e) => {e.target.src = 'https://placehold.co/400x400/161b22/39d353?text=KM'}}
                />
            </div>
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;