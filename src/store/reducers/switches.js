
const initialState = {
    // level 1: first 3
    // level 2: first 6
    // level 3: all 12
    switches: [
        { id: 0, isOn: false, ids: [2] },
        { id: 1, isOn: false, ids: [0, 3] },
        { id: 2, isOn: false, ids: [] },
        { id: 3, isOn: false, ids: [0, 1, 4] },
        { id: 4, isOn: false, ids: [1] },
        { id: 5, isOn: false, ids: [1,2,3] }
    ],
    level: null
};

const resetState = {
    switches: [
        { id: 0, isOn: false, ids: [2] },
        { id: 1, isOn: false, ids: [0, 3] },
        { id: 2, isOn: false, ids: [] },
        { id: 3, isOn: false, ids: [0, 1, 4] },
        { id: 4, isOn: false, ids: [1] },
        { id: 5, isOn: false, ids: [1,2,3] }
    ]
};

const updateSwitches = (state, id) => {
    let idsAffected = state.switches.find(i => i.id === id).ids;
    let ids = [id, ...idsAffected];

    let newSwitches = state.switches.map(item => {

        if (ids.includes(item.id)) {
            return {
                id: item.id,
                isOn: !state.switches.find(x => x.id === item.id).isOn,
                ids: state.switches.find(x => x.id === item.id).ids
            }
        }
        return item;
    });
    return newSwitches;
}

const reducer = (state = initialState, action) => {
    if (action.type === 'RESET') {
        return {
            switches: [...resetState.switches],
            level: state.level
            // gameStarted: true
        }
    }
    if (action.type === 'SET_LEVEL') {
        return {
            switches: state.switches,
            // gameStarted: true,
            level: action.level
        }
    }
    if(typeof action.id === 'number') {
        return {
            switches: updateSwitches(state, action.id),
            level: state.level
        }
    }
    return {
        switches: state.switches,
        level: state.level
    }

}


export default reducer;
