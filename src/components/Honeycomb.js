import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import pickLetters from '../utils/pickLetters';

const Honeycomb = (props) => {
    const {
        dictionary, 
        gameStart, 
        setGameStart,
        hexVals,
        setHexVals,
        setGameLetters
    } = props;

    useEffect(() => {
        if (gameStart) {
            const gameLetters = pickLetters();
            setHexVals(gameLetters);
            setGameLetters(gameLetters);
            //filter valid words
            //calculate possible points
            // setGameStart(false);
        }
    }, [gameStart]);

    return (
        <div className="honeycomb">
            <ul id="grid" className="clear">
                <li>
                    <div className="hexagon hidden"></div>
                </li>
                <li>
                    <div className="hexagon">{hexVals[0]}</div>
                </li>
                <li>
                    <div className="hexagon">{hexVals[1]}</div>
                </li>
                <li>
                    <div className="hexagon">{hexVals[2]}</div>
                </li>
                <li>
                    <div className="hexagon" id="center">{hexVals[3]}</div>
                </li>
                <li>
                    <div className="hexagon">{hexVals[4]}</div>
                </li>
                <li>
                    <div className="hexagon hidden"></div>
                </li>
                <li>
                    <div className="hexagon">{hexVals[5]}</div>
                </li>
                <li>
                    <div className="hexagon">{hexVals[6]}</div>
                </li>
            </ul>
        </div>
    );
}

function msp(state) {
    const { dictionary } = state.dictionary;
    const { gameStart } = state.game;
    const { hexVals } = state.letter;

    return {
        dictionary,
        gameStart,
        hexVals
    }
}

function mdp(dispatch) {
    return {
        setGameStart: (gameStart) => {
            dispatch({type: "SET_GAME_START", payload: gameStart});
        },
        setHexVals: (letters) => {
            dispatch({type: "SET_HEX_VALS", payload: letters});
        },
        setGameLetters: (letters) => {
            dispatch({type: "SET_GAME_LETTERS", payload: letters});
        }
    }
}

export default connect(msp, mdp)(Honeycomb);
