import axios from 'axios';
import { getToken } from '../../Login/utils/loginHelper';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const deleteProductService = async (id: string) => {
  const config = {
    headers: {
      'tkn-authorize': getToken(),
    },
  };
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
