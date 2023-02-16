import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Router from 'next/router';
import {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { useToast } from 'use-toast-mui';
import { login } from '../../../services/auth';
import { authReducer } from '../reducer/authReducer';
import { AuthContext } from './CreateAuthContext';

export interface IHttpResponse extends AxiosResponse {
  data: {
    msg: string;
    jwt: string;
  };
  status: number;
  statusText: string;
  headers: any; // o cualquier otro tipo de dato específico
  config: AxiosRequestConfig;
  request?: any;
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLogged: false,
    jwt: '',
    loading: false,
  });

  const toast = useToast();

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        dispatch({ type: 'LOADING_TRUE' });
        const response: IHttpResponse | undefined = await login(
          email,
          password
        );

        if (response) {
          const { data } = response;
          const { jwt } = data;
          sessionStorage.setItem('user-token', jwt);
          dispatch({ type: 'SIGN_IN', payload: jwt });

          if (response.status === 200) {
            toast.success(`Bienvenido ${email}`);
            Router.push('/');
          }
        }
        if (!response) {
          toast.error('El usuario o la contraseña son incorrectos');
        }
        dispatch({ type: 'LOADING_FALSE' });
      } catch (error) {
        console.error(error);
      }
    },
    [toast]
  );

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('user-token');
    dispatch({ type: 'SIGN_OUT' });
    toast.success(`Hasta pronto!`);
  }, [toast]);

  const values = useMemo(
    () => ({
      state: {
        isLogged: state.isLogged,
        jwt: state.jwt,
        loading: state.loading,
      },
      actions: {
        signIn,
        signOut: handleLogout,
      },
    }),
    [signIn, state, handleLogout]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a AuthContext');
  }
  return context;
};
