import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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


function App(props) {
  const { setDictionary, setDictLoaded } = props;

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/patrickherrmann/BoggleSolver/master/twl.txt')
      .then(res => {
        const fullDictionary = res.data.split('\n').map(word => word.trim());
        const filteredDictionary = fullDictionary.filter(word => word.length >= 4);
        setDictionary(filteredDictionary);
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
        <Honeycomb />
        <Controls />
      </div>
      
    </div>
  );
}

function msp(state) {
  return {

  }
}

function mdp(dispatch) {
  return {
    setDictionary: (dictionary) => {
      dispatch({type: "SET_DICTIONARY", payload: dictionary});
    },
    setDictLoaded: (dictLoaded) => {
      dispatch({type: "SET_DICT_LOADED", payload: dictLoaded});
    }
  }
}

export default connect(msp, mdp)(App);
