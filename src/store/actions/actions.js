export function changeShowSignUpFlag(showSignUp) {
    return {
        type: 'CHANGE_SHOW_SIGN_UP_FLAG',
        payload: showSignUp
    }
}

export function changeSignInFlag(isSignIn) {
    return {
        type: 'CHANGE_SING_IN_FLAG',
        payload: isSignIn
    }
}


