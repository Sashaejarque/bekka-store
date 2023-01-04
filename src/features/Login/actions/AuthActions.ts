interface SignIn {
    type: 'SIGN_IN';
    payload: string;
}

interface SignOut {
    type: 'SIGN_OUT';
}

type AuthActions = SignIn | SignOut;

export default AuthActions;