import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      
   
      <div className="md:w-3/5 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-mono text-accent">
          Hi, my name is
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold text-light-text my-2">
          [Krishna Mohan]
        </h1>
        
   
        <div className="text-2xl md:text-4xl font-bold font-mono text-gray-400">
          <TypeAnimation
            sequence={[
              "I'm an Electronics Engineer.",
              1500,
              "I'm a hands-on Experimenter.",
              1500,
              "I'm a problem-solver.",
              1500,
              "I build things that may or may not work.",
              1500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={50}
          />
        </div>

     
        <p className="text-lg md:text-xl text-light-text mt-4 max-w-xl">
          By degree, I'm an electronics engineer. By nature, I'm an experimenter.
          I love to take on new challenges, get my hands dirty, and learn new things 
          from the ground up.
        </p>

        <a 
          href="#projects" 
          className="inline-block mt-8 px-6 py-3 bg-transparent border-2 border-accent text-accent 
                     font-mono font-bold text-lg 
                     hover:bg-accent hover:text-dark-bg 
                     transition-colors duration-300"
        >
          View My Work
        </a>
      </div>


      <div className="hidden md:block md:w-2/5 p-4">
        <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm shadow-lg">
          <pre>
            <code className="text-gray-400">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">profile</span> = {'{\n'}
              {'  '}<span className="text-green-300">degree</span>: <span className="text-orange-300">' Btech in Electronics and Comm. Eng.'</span>,
              {'\n  '}<span className="text-green-300">college</span>: <span className="text-orange-300">'Government Eng. college Thrissur'</span>,
              {'\n  '}<span className="text-green-300">school</span>: <span className="text-orange-300">'Kendriya Vidyalaya Ottapalam'</span>,
              {'\n  '}<span className="text-green-300">likes</span>: <span className="text-gray-400">[</span>
              {'\n    '}<span className="text-orange-300">'New Challenges'</span>,
              {'\n    '}<span className="text-orange-300">'Watching sky'</span>
              {'\n  '}<span className="text-gray-400">]</span>
              {'\n}'};
            </code>
          </pre>
        </div>
      </div>

    </div>
  );
}

export default Hero;