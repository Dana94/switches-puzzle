
const initialState = {
    switches: [
        { id: 0, isOn: true },
        { id: 1, isOn: true },
        { id: 2, isOn: false },
        { id: 3, isOn: false },
        { id: 4, isOn: true }
    ]
};

const updateSwitches = (state, id, idList = []) => {
    let ids = [id, ...idList];

    let newSwitches = state.switches.map(item => {

        if (ids.includes(item.id)) {
            return {
                id: item.id,
                isOn: !state.switches.find(x => x.id === item.id).isOn
            }
        }
        return item;
    });
    return newSwitches;
}

const reducer = (state = initialState, action) => {
    switch (action.id) {
        case 0:
            return {
                switches: updateSwitches(state, action.id, [1])
            }
        case 1:
            return {
                switches: updateSwitches(state, action.id, [0, 3])
            }
        case 2:
            return {
                switches: updateSwitches(state, action.id)
            }
        case 3:
            return {
                switches: updateSwitches(state, action.id, [0, 1, 4])
            }
        case 4:
            return {
                switches: updateSwitches(state, action.id, [1])
            }
        default:
            return state
    }
}

export default reducer;
