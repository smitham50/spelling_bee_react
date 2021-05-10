import shuffleArray from 'shuffle-array';

const defaultState = {
    hexVals: [],
    gameLetters: [],
    gameLettersCopy: []
}

function letterReducer(prevState=defaultState, action) {
    console.log(action.type)
    switch(action.type) {
        case "SET_HEX_VALS":
            return {
                ...prevState,
                hexVals: action.payload
            }
        case "SET_GAME_LETTERS":
            return {
                ...prevState,
                gameLetters: action.payload.gameLetters,
                gameLettersCopy: action.payload.gameLetters
            }
        case "SHUFFLE_HEXES":
            return {
                ...prevState,
                hexVals: shuffleArray([...prevState.hexVals])
            }
        default:
            return prevState
    }
}

export default letterReducer;