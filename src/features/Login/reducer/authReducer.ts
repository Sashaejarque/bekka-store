import AuthActions from '../actions/AuthActions';

interface AuthState {
  isLogged: boolean;
  jwt: string;
  loading: boolean;
}

export function authReducer(state: AuthState, action: AuthActions) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLogged: true,
        jwt: action.payload,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isLogged: false,
        jwt: '',
      };
    case 'LOADING_TRUE':
      return {
        ...state,
        loading: true,
      };
    case 'LOADING_FALSE':
      return {
        ...state,
        loading: false,
      };
  }
}
