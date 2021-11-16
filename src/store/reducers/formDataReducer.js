const initialState = {
    showSignUp: false,
    isSignIn: false
}

export default function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SHOW_SIGN_UP_FLAG':
            return {
                ...state,
                showSignUp: action.payload
            };
        case 'CHANGE_SING_IN_FLAG':
            return {
                ...state,
                isSignIn: action.payload
            };
        default:
            return state;
    }
}
