import React, { useState } from 'react';

const TextEntry = () => {
    const [text, setText] = useState("");

    return (
        <div id="text-entry">
            <input id="text-box" onChange={ (e) => {setText(e.target.value)} } value={ text } />
        </div>
    );
}

export default TextEntry;
