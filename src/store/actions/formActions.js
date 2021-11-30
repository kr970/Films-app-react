
export const changeShowSignUpFlag = (showSignUp) => {
    return {
        type: 'CHANGE_SHOW_SIGN_UP_FLAG',
        payload: showSignUp
    }
}

export const login = (userName, password) => {
    return {
        type: 'LOGIN',
        payload: { userName, password }
    }
}

export const addUserData = (userName, password, email) => {
    return {
        type: 'ADD_USER_DATA',
        payload: { userName, password, email }
    }
}