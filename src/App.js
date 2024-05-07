import React, { useState, useEffect } from 'react';
import BreakOut from './components/games/breakout';
import Layout from './components/layout';
import opSound from './sound/op.mp3'; // Import the audio file

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // Track audio state

  useEffect(() => {
    const audio = new Audio(opSound);
    audio.loop = true;

    const handlePlay = () => {
      audio.play().catch(error => {
        console.error('Failed to play audio:', error);
        // Optionally, display an error message or play a different sound
      });
      setIsPlaying(true); // Update state after successful playback
    };

    // Play audio on game load (assuming BreakOut has a componentDidMount or similar)
    handlePlay();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array: run only once on component mount

  return (
    <Layout>
      <BreakOut />
      {/* You can optionally display a loading indicator here */}
    </Layout>
  );
}

export default App;
