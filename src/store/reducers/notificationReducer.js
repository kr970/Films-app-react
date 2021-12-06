const initialState = {
    notification: ''
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {
                ...state,
                notification: action.payload
            }
        default:
            return state;
    }
}