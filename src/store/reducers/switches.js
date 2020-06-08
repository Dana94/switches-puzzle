
const initialState = {
    switches: [
        { id: 0, isOn: true },
        { id: 1, isOn: true },
        { id: 2, isOn: false },
        { id: 3, isOn: false },
        { id: 4, isOn: true }
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.id) {
        case 0:
            // affects 1 too
            let newSwitches = state.switches.filter(s => s.id !== action.id && s.id !== 1);
            newSwitches.push(
                {
                    id: action.id,
                    isOn: !state.switches.find(s => s.id === action.id).isOn
                },
                {
                    id: 1,
                    isOn: !state.switches.find(s => s.id === 1).isOn
                }
            );
            return {
                switches: newSwitches
            }
        // case 1:
        //     // affects 0, 3 too
        //     newSwitches = state.switches.filter(s => s.id !== action.id && s.id !== 0 && s.id !== 3);
        //     newSwitches.push(
        //         {
        //             id: 0,
        //             isOn: !state.switches.find(s => s.id === 0).isOn
        //         },
        //         {
        //             id: action.id,
        //             isOn: !state.switches.find(s => s.id === action.id).isOn
        //         },
        //         {
        //             id: 3,
        //             isOn: !state.switches.find(s => s.id === 3).isOn
        //         }
        //     );
        //     return {
        //         switches: newSwitches
        //     }
        // case 2:
        //     return {

        //     }
        // case 3:
        //     // affects 0, 1, 4 too
        //     return {

        //     }
        // case 4:
        //     // affects 1 too
        //     return {

        //     }
        default:
            return state
    }
}

export default reducer;
