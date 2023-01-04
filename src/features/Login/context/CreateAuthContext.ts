import { createContext } from "react";

interface AuthState {
  isLogged: boolean;
  jwt: string;
}

export interface AuthContext {
  state: AuthState;
  actions: {
    signIn: (email: string, password: string) => void;
    signOut: () => void;
  };
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);