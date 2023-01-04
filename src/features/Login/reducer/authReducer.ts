interface AuthState {
    isLogged: boolean;
    jwt: string;
}

interface AuthActions {
    type: 'SIGN_IN';
    payload: string;
}

export function authReducer (state: AuthState, action: AuthActions) {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isLogged: true,
                jwt: action.payload
            };
    }
};