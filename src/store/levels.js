export const level1 = [
    { id: 0, isOn: false, ids: [2] },
    { id: 1, isOn: false, ids: [0, 2] },
    { id: 2, isOn: false, ids: [0, 1] },
];

export const level2 = [
    { id: 0, isOn: false, ids: [2, 4] },
    { id: 1, isOn: false, ids: [0, 3] },
    { id: 2, isOn: false, ids: [] },
    { id: 3, isOn: false, ids: [0, 1, 4] },
    { id: 4, isOn: false, ids: [1] },
    { id: 5, isOn: false, ids: [1, 2, 3] }
];

export const level3 = [
    { id: 0, isOn: false, ids: [2] },
    { id: 1, isOn: false, ids: [0, 3] },
    { id: 2, isOn: false, ids: [] },
    { id: 3, isOn: false, ids: [0, 1, 4] },
    { id: 4, isOn: false, ids: [1] },
    { id: 5, isOn: false, ids: [1, 2, 3] },
    { id: 6, isOn: false, ids: [5, 8] },
    { id: 7, isOn: false, ids: [0, 3] },
    { id: 8, isOn: false, ids: [7, 11] },
    { id: 9, isOn: false, ids: [6, 9, 10] },
    { id: 10, isOn: false, ids: [4, 7] },
    { id: 11, isOn: false, ids: [8, 3, 1] }
];
