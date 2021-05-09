import React from 'react';

const Honeycomb = (props) => {
    

    return (
        <div className="honeycomb">
            <ul id="grid" className="clear">
                <li>
                    <div className="hexagon hidden"></div>
                </li>
                <li>
                    <div className="hexagon"></div>
                </li>
                <li>
                    <div className="hexagon"></div>
                </li>
                <li>
                    <div className="hexagon"></div>
                </li>
                <li>
                    <div className="hexagon" id="center"></div>
                </li>
                <li>
                    <div className="hexagon"></div>
                </li>
                <li>
                    <div className="hexagon hidden"></div>
                </li>
                <li>
                    <div className="hexagon"></div>
                </li>
                <li>
                    <div className="hexagon"></div>
                </li>
            </ul>
        </div>
    );
}

export default Honeycomb;
