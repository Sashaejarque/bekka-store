import Cookies from 'js-cookie';

const TOKEN_NAME = 'user-token';

export class CookieHandler {
    key: string;

    constructor(key?: string) {
        this.key = key ?? TOKEN_NAME;
    }
    setToken(token: string) {
        Cookies.set(this.key, token, {
          expires: 1 / 24, // token will expire in 1 hour
          /*     secure: process.env.NODE_ENV === 'production', // only send cookie over HTTPS in production
          sameSite: 'strict', // only send cookie for same-site requests */
        });
      }
      
    getToken() {
        return Cookies.get(this.key);
      }
      
    removeToken() {
        Cookies.remove(this.key);
      }
}