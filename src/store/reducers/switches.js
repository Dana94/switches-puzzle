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

const setFocus = (state, {x, y}) => {
    const columnCount = state.level === 3 ? 4 : 3;

    // left arrow
    if (y % columnCount === 0) {
        return {
            x: x,
            y: y + (columnCount - 1)
        }
    }
    // right arrow
    if (y % columnCount === (columnCount - 1)) {
        return {
            x: x,
            y: y - (columnCount - 1)
        }
    }
    // down arrow
    if (x % columnCount === (columnCount - 1)) {
        const switchId = state.switches[state.switches.length - 1 - (columnCount - 1)].id
        return {
            x: switchId,
            y: y
        }
    }
    //up arrow
    // if (x % columnCount === (columnCount - 1)) {
    //     const switchId = state.switches[state.switches.length - 1 - (columnCount - 1)].id
    //     return {
    //         x: switchId,
    //         y: y
    //     }
    // }
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
            moves: 0
        }
    }
    if (action.type === 'END_GAME') {
        return {
            switches: [],
            level: null,
            gameStarted: false,
            moves: state.moves
        }
    }
    if (action.type === 'FLIP_SWITCH' && typeof action.id === 'number') {
        return {
            switches: updateSwitches(state, action.id, action.coords),
            level: state.level,
            gameStarted: state.gameStarted,
            moves: state.moves + 1
        }
    }
    return {
        switches: state.switches,
        level: state.level,
        gameStarted: state.gameStarted,
        moves: state.moves
    }
}

export default reducer;
