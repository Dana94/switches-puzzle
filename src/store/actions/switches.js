
export const flipSwitch = (id) => {
    return {
        type: 'FLIP_SWITCH',
        id: id
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
