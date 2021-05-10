const defaultState = {
    validWords: [],
    foundWords: [],
    possiblePoints: 0,
    foundPoints: 0,
    progress: 0,
    gameStart: false
}

function gameReducer(prevState=defaultState, action) {
    switch(action.type) {
        case "SET_GAME_START":
            return {
                ...prevState,
                gameStart: action.payload
            }
        default: {
            return prevState
        }
    }
}

export default gameReducer;