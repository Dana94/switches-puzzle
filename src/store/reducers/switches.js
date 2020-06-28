import { level1, level2, level3 } from '../levels';

const initialState = {
    switches: [],
    level: null
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

const reset = (state) => {
    const level = state.level;
    return level === 1 ? [...level1] :
        level === 2 ? [...level2] :
            [...level3];
}

const setLevel = (state, level) => {
    return level === 1 ? [...level1] :
        level === 2 ? [...level2] :
            [...level3];
}

const reducer = (state = initialState, action) => {
    if (action.type === 'RESET') {
        return {
            switches: reset(state),
            level: state.level,
            // gameStarted: true
        }
    }
    if (action.type === 'SET_LEVEL') {
        return {
            switches: setLevel(state, action.level),
            // gameStarted: true,
            level: action.level
        }
    }
    if (typeof action.id === 'number') {
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
