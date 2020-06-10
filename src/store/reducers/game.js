
const initialState = {
    gameStarted: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_GAME_STATUS') {
        return {
            gameStarted: !state.gameStarted
        }
    }
    else {
        return state;
    }
}

export default reducer;
