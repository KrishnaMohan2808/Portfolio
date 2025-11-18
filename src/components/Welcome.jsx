import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


function Welcome({ onComplete }) {
  const [typedCommand, setTypedCommand] = useState('');
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    setTypedCommand(e.target.value);
    if (showError) {
      setShowError(false); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typedCommand.toLowerCase() === 'start') {
     
      onComplete();
    } else {
      
      setShowError(true);
      setTypedCommand(''); 
    }
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen p-4 flex flex-col justify-center items-center font-mono">
      <div className="w-full max-w-lg">
     
        <TypeAnimation
          sequence={[
            'Initializing portfolio...',
            1000,
            'Booting systems...',
            1000,
            'Welcome, visitor.',
            1000,
            "Type 'start' to continue.",
            500,
          ]}
          wrapper="div"
          cursor={false} 
          repeat={0}
          speed={60}
          style={{ whiteSpace: 'pre-line', fontSize: '1.2em' }}
        />

  
        {showError && (
          <div className="text-red-500 mt-2">
            <p>command not found: "{typedCommand || ' '}"</p>
            <p>Please type 'start' to continue.</p>
          </div>
        )}

     
        <form onSubmit={handleSubmit} className="mt-4 flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            value={typedCommand}
            onChange={handleInputChange}
            autoFocus 
            className="bg-transparent border-none text-green-400 focus:outline-none flex-grow blink-caret"
          />
        </form>
      </div>
    </div>
  );
}

export default Welcome;