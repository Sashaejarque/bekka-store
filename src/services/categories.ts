import axios from 'axios';
import { API_URL } from '../constants/server';

export const getCategories = async () => {
    const response = await axios.get(`${API_URL}/products/categories`);
    return response;
};