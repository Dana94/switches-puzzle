
export const flipSwitch = (id, coords) => {
    return {
        type: 'FLIP_SWITCH',
        id: id,
        coords: coords
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
}

export const setLevel = (level) => {
    return {
        type: 'SET_LEVEL',
        level: level
    }
}

export const endGame = () => {
    return {
        type: 'END_GAME'
    }
}
