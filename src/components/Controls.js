import React from 'react';
import { connect } from 'react-redux';

const Controls = (props) => {
    const { shuffleHexes } = props;

    const handleClick = () => {
        shuffleHexes();
    }

    return (
        <div id="buttons">
            <div id="delete" className="btn">Delete</div>
            <div id="shuffle" className="btn" onClick={ handleClick }>Shuffle</div>
            <div id="submit" className="btn">Submit</div>
        </div>
    );
}

function mdp(dispatch) {
    return {
        shuffleHexes: () => {
            dispatch({type: "SHUFFLE_HEXES"});
        }
    }
}

export default connect(null, mdp)(Controls);
