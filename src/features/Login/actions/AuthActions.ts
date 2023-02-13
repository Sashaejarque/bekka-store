interface SignIn {
  type: 'SIGN_IN';
  payload: string;
}

interface LoadingFalse {
  type: 'LOADING_FALSE';
}

interface LoadingTrue {
  type: 'LOADING_TRUE';
}

interface SignOut {
  type: 'SIGN_OUT';
}

type AuthActions = SignIn | SignOut | LoadingFalse | LoadingTrue;

export default AuthActions;
