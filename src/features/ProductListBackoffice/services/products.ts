import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const deleteProductService = async (id: string) => {
  const config = {
    headers: {
      'tkn-authorize': sessionStorage.getItem('user-token'),
    },
  };
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
