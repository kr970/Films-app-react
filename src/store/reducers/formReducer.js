const initialState = {
    showSignUp: false,
    loginFailed: false,
    userData: [{
        userName: 'test123',
        password: 'test123',
        email: 'test@test.com'
    }],
    currentUser: ''
    
}

export default function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SHOW_SIGN_UP_FLAG':
            return {
                ...state,
                loginFailed: false,    
                showSignUp: action.payload
            };
        case 'LOGIN':
            const {userName, password} = action.payload;
            const user = state.userData.find(item => 
                item.userName === userName && item.password === password)
            return {
                ...state,
                loginFailed: !user,
                currentUser: user
            };
            case 'ADD_USER_DATA':
                return {
                    ...state,
                    userData: [...state.userData, action.payload]
                }
        default:
            return state;
    }
}
