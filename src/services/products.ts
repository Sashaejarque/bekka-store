import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (err) {
    console.error('Error fetching all products', err);
  }
};
