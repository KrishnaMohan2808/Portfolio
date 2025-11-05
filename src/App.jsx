import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // This import is correct

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleWelcomeComplete = () => {
    setIsFading(true);
  };

  useEffect(() => {
    if (isFading) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isFading]);

  if (showWelcome) {
    return (
      <div
        className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Welcome onComplete={handleWelcomeComplete} />
      </div>
    );
  }


  return (
  
    <div className="bg-dark-bg text-light-text font-sans transition-opacity duration-500 opacity-100">
      

      <Navbar />

      <Hero />



    </div>
  );
}

export default App;