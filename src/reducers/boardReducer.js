export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';

const initialState = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15, 0],
];

export default (state = initialState, action) => {
    switch (action.type) {
        case MOVE_RIGHT:
            return [
                ...state.slice(0, 3),
                [13,14,0,15],
            ];

        case MOVE_LEFT:
            return [
                ...state.slice(0, 3),
                [13,14,15,0],
            ];


        default:
            return state
    }
}


export const moveRight = () => ({
    type: MOVE_RIGHT,
});

export const moveLeft = () => ({
    type: MOVE_LEFT,
});