import { level1, level2, level3 } from '../levels';

const initialState = {
    switches: [],
    level: null,
    gameStarted: false,
    moves: 0,
    focus: {
        x: 0,
        y: 0
    }
};

const setFocus = (state, coords) => {

    // up arrow will focus on the bottom most switch in the column
    if (coords.x < 0) {
        return { x: state.switches.length - 1, y: coords.y };
    }
    // down arrow will focus on the top most switch in the column
    else if (coords.x > state.switches.length - 1) {
        return { x: 0, y: coords.y };
    }
    // left arrow will focus on right most switch in the row
    else if (coords.y < 0) {
        return { x: coords.x, y: state.switches[0].length - 1 };
    }
    // right arrow will focus on left most switch in the row
    else if (coords.y > state.switches[0].length - 1) {
        return { x: coords.x, y: 0 };
    }
    else {
        return { x: coords.x, y: coords.y };
    }
}

const updateSwitches = (state, id, coords) => {
    let idsAffected = state.switches[coords.x][coords.y].ids;
    let ids = [id, ...idsAffected];

    let newSwitches = state.switches.map(row => {

        return row.map(sw => {
            if (ids.includes(sw.id)) {
                let foundSwitch = state.switches.map(x => x.find(y => y.id === sw.id)).filter(z => z !== undefined)[0];

                return {
                    id: sw.id,
                    isOn: !foundSwitch.isOn,
                    ids: foundSwitch.ids
                }
            }
            return sw;
        })
    });
    return newSwitches;
}

const reset = (state, level) => {
    const aLevel = level || state.level;
    return aLevel === 1 ? level1.map(row => [...row]) :
        aLevel === 2 ? level2.map(row => [...row]) :
            level3.map(row => [...row]);
}

const reducer = (state = initialState, action) => {
    if (action.type === 'RESET' || action.type === 'SET_LEVEL') {
        return {
            switches: action.level ? reset(state, action.level) : reset(state),
            level: action.level || state.level,
            gameStarted: true,
            moves: 0,
            focus: state.focus
        }
    }
    if (action.type === 'END_GAME') {
        return {
            switches: [],
            level: null,
            gameStarted: false,
            moves: state.moves,
            focus: state.focus
        }
    }
    if (action.type === 'FLIP_SWITCH' && typeof action.id === 'number') {
        return {
            switches: updateSwitches(state, action.id, action.coords),
            level: state.level,
            gameStarted: state.gameStarted,
            moves: state.moves + 1,
            focus: state.focus
        }
    }
    if (action.type === 'SET_FOCUS') {
        return {
            switches: state.switches,
            level: state.level,
            gameStarted: state.gameStarted,
            moves: state.moves,
            focus: setFocus(state, action.coords)
        }
    }
    return {
        switches: state.switches,
        level: state.level,
        gameStarted: state.gameStarted,
        moves: state.moves,
        focus: state.focus
    }
}

export default reducer;
