const updateState = (state, newState) => {
    return {
        ...state,
        ...newState
    }
}

export default updateState;
