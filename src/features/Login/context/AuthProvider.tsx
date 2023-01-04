import { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import { FC, PropsWithChildren, useContext, useReducer } from "react";
import { login } from "../../../services/auth";
import { authReducer } from "../reducer/authReducer";
import { AuthContext } from "./CreateAuthContext";

interface IHttpResponse extends AxiosResponse {
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
    jwt: "",
  });

  const signIn = async (email: string, password: string) => {
    const response: IHttpResponse | undefined = await login(email, password);
    console.log(response);
    if (response) {
      const { data } = response;
      const { jwt } = data;
      sessionStorage.setItem('user-token', jwt);
      dispatch({ type: "SIGN_IN", payload: jwt });
    }
  };


  return (
    <AuthContext.Provider
      value={{
        state: {
          isLogged: state.isLogged,
          jwt: state.jwt,
        },
        actions: {
          signIn,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within a AuthContext");
  }
  return context;
};
