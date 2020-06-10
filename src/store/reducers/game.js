
const initialState = {
    gameStarted: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_GAME_STATUS') {
        return {
            gameStarted: action.status
        }
    }
    else {
        return state;
    }
}

export default reducer;
