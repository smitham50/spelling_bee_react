const defaultState = {
    dictionary: [],
    dictLoaded: false
}

function dictionaryReducer(prevState = defaultState, action) {
    switch (action.type) {
        case "SET_DICTIONARY":
            return {
                ...prevState,
                dictionary: action.payload
            }
        case "SET_DICT_LOADED":
            return {
                ...prevState,
                dictLoaded: action.payload
            }
        default: {
            return prevState
        }
    }
}

export default dictionaryReducer;