import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';

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
    <div className="bg-gray-900 min-h-screen flex items-center justify-center transition-opacity duration-500 opacity-100">
      <h1 className="text-4xl font-bold text-white">
        My Main Portfolio!
      </h1>
      {/* Navbar, Hero, Projects, etc. */}
    </div>
  );
}

export default App;