import React, { useState, useEffect } from 'react';
import shuffleArray from 'shuffle-array';
import { connect } from 'react-redux';

const Honeycomb = (props) => {
    const [hexVals, setHexVals] = useState([]);
    const { dictionary } = props;

    useEffect(() => {
        setHexVals(shuffleArray(["f", "s", "g", "e", "r", "a", "p"]));
    }, []);

    console.log(dictionary);

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
    const {
        dictionary
    } = state.dictionary;

    return {
        dictionary
    }
}

export default connect(msp, null)(Honeycomb);
