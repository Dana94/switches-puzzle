
const initialState = {
    gameStarted: true
}

const reducer = (state = initialState, action) => {
    return {
        gameStarted: !state.gameStarted
    }
}

export default reducer;
