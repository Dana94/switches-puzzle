
const initialState = {
    switches: [
        { id: 0, isOn: true, ids: [1] },
        { id: 1, isOn: true, ids: [0, 3] },
        { id: 2, isOn: false, ids: [] },
        { id: 3, isOn: false, ids: [0, 1, 4] },
        { id: 4, isOn: true, ids: [1] },
        { id: 5, isOn: true, ids: [1,2,3] }
    ],
};

const resetState = {
    switches: [
        { id: 0, isOn: true, ids: [1] },
        { id: 1, isOn: true, ids: [0, 3] },
        { id: 2, isOn: false, ids: [] },
        { id: 3, isOn: false, ids: [0, 1, 4] },
        { id: 4, isOn: true, ids: [1] },
        { id: 5, isOn: true, ids: [1,2,3] }
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
            gameStarted: true
        }
    }
    console.log(action.id)
    if(typeof action.id === 'number') {
        return {
            switches: updateSwitches(state, action.id)
        }
    }
    return {
        switches: state.switches
    }

}


export default reducer;
