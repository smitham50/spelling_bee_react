import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Honeycomb from './components/Honeycomb';
import StartButton from './components/StartButton';
import FoundWords from './components/FoundWords';
import Stats from './components/Stats';
import TextEntry from './components/TextEntry';
import Controls from './components/Controls';

// Styles
import './App.css';
import './stylesheets/Honeycomb.css';
import './stylesheets/StartButton.css';
import './stylesheets/FoundWords.css';
import './stylesheets/Stats.css';
import './stylesheets/TextEntry.css';
import './stylesheets/Controls.css';


function App() {
  const [dictionary, setDictionary] = useState([]);
  const [dictLoaded, setDictLoaded] = useState(false);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/patrickherrmann/BoggleSolver/master/twl.txt')
      .then(res => {
        const fullDictionary = res.data.split('\n').map(word => word.trim());
        setDictionary(fullDictionary.filter(word => word.length >= 4));
        setDictLoaded(true);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <StartButton />
        <div id="list-div">
          <FoundWords />
          <img src="hamburgericon.png" alt="expandbutton" id="expand"></img>
        </div>
        <Stats />
      </div>
      <div id="game-primary">
        <TextEntry />
        <Honeycomb dictLoaded={dictLoaded} />
        <Controls />
      </div>
      
    </div>
  );
}

export default App;
