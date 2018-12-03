export default (state = {}, action) => {
    state = {
        ...state
    }
    switch (action.type) {
        case 'GET_ROOMS_LIST':
            let rooms = action.payload;

            return {
                ...state,
                rooms: rooms
            }

        default:
            return state
    }
    return state;
}