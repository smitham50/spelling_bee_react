import React from 'react';
import { connect } from 'react-redux';

const StartButton = (props) => {
    const { setGameStart } = props;

    const handleClick = () => {
        setGameStart(true);
    }

    return (
        <div id="new-game">
            <div id="start" onClick={handleClick}>New Game</div>
        </div>
    );
}

function mdp(dispatch) {
    return {
        setGameStart: (gameStart) => {
            dispatch({type: "SET_GAME_START", payload: gameStart});
        }
    }
}

export default connect(null, mdp)(StartButton);
