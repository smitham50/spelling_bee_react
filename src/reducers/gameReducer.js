const defaultState = {
    
}

function gameReducer(prevState=defaultState, action) {
    switch(action.type) {
        case "":
            return
        default: {
            return prevState
        }
    }
}

export default gameReducer;