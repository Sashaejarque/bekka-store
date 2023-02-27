import { CookieHandler } from './../../Login/utils/CookieHandler';
import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const deleteProductService = async (id: string) => {
  const cookieToken = new CookieHandler();
  const config = {
    headers: {
      'tkn-authorize': cookieToken.getToken(),
    },
  };
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
