import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        setTypingSpeed(pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
};

function Hero() {
  const typingText = useTypewriter([
    "I'm an Electronics undergrad.",
    "I consider myself a lifelong learner.",
    "I like to put my ideas into action.",
    "I like to solve problems.",
    "I'm a tea enthusiast.",
    "I build things that may or may not work.",
    "Do have a look on my blogs on Medium."
  ]);

  return (
    // CHANGE 1: 'max-w-5xl' makes the overall box tighter so it doesn't stretch too far
    <section className="container mx-auto max-w-5xl min-h-screen flex flex-col-reverse md:flex-row items-center justify-center p-6">
      
      {/* Left Side (Text) */}
      {/* CHANGE 2: 'md:w-3/5' gives the text more space (60%), pushing towards the image */}
      <div className="w-full md:w-3/5 text-center md:text-left">
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

      {/* Right Side (Image) */}
      {/* CHANGE 3: 'md:w-2/5' makes this box smaller (40%)
          CHANGE 4: Back to 'justify-center'. Since the box is smaller, the image stays close to text 
          but remains centered in its own space. */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-center mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 rounded-full border-4 border-[#4ade80] opacity-80 group-hover:scale-105 transition-transform duration-300"></div>
            <img
              src="/profile.jpg"
              alt="Krishna Mohan"
              className="w-full h-full object-cover rounded-full shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-[#0d1117]"
              onError={(e) => { e.target.src = 'https://placehold.co/400x400/161b22/39d353?text=KM' }}
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;