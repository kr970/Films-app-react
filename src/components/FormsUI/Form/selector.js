export const formSelector = ({
    formData: {
        showSignUp,
        loginFailed,
        currentUser
    }
}) => ({
    showSignUp,
    loginFailed,
    currentUser
})