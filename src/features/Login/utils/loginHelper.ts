import Cookies from 'js-cookie';

const TOKEN_NAME = 'user-token';

export function setToken(token: string) {
  Cookies.set(TOKEN_NAME, token, {
    expires: 1 / 24, // token will expire in 1 hour
    /*     secure: process.env.NODE_ENV === 'production', // only send cookie over HTTPS in production
    sameSite: 'strict', // only send cookie for same-site requests */
  });
}

export function getToken() {
  return Cookies.get(TOKEN_NAME);
}

export function removeToken() {
  Cookies.remove(TOKEN_NAME);
}
