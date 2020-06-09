
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
