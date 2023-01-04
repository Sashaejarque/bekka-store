import AuthActions from "../actions/AuthActions";

interface AuthState {
    isLogged: boolean;
    jwt: string;
}


export function authReducer (state: AuthState, action: AuthActions) {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isLogged: true,
                jwt: action.payload
            };
        case 'SIGN_OUT':
            return {
                ...state,
                isLogged: false,
                jwt: ''
            };
    }
};