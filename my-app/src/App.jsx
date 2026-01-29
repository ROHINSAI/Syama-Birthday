import React, { useState } from 'react';
import MosaicCake from './components/MosaicCake';
import Journey from './components/Journey';
import './App.css'; 

function App() {
  const [stage, setStage] = useState('intro'); // 'intro' | 'journey'

  return (
    <div className="app-container">
      {stage === 'intro' && (
        <MosaicCake onComplete={() => setStage('journey')} />
      )}
      
      {stage === 'journey' && (
        <Journey />
      )}
    </div>
  );
}

export default App;
