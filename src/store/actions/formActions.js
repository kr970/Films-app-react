import { FORM_TYPES } from './types';

export const changeShowSignUpFlag = (showSignUp) => {
    return {
        type: FORM_TYPES.CHANGE_SHOW_SIGN_UP_FLAG,
        payload: showSignUp
    }
}

export const login = (userName, password) => {
    return {
        type: FORM_TYPES.LOGIN,
        payload: { userName, password }
    }
}

export const logoutAC = () => {
    return {
        type: FORM_TYPES.LOGOUT,
        payload: null
    }
}

export const addUserData = (userName, password, email) => {
    return {
        type: FORM_TYPES.ADD_USER_DATA,
        payload: { userName, password, email }
    }
}