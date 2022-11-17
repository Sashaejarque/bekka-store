import axios from 'axios';
import { API_URL } from '../constants/server';

export const getJeweleryProducts = async () => {
    const response = await axios.get(`${API_URL}/products/category/jewelery`);
    return response;
};

export const getMenClothingProducts = async () => {
    const response = await axios.get(`${API_URL}/products/category/men's clothing`);
    return response;
};

export const getWomenClothingProducts = async () => {
    const response = await axios.get(`${API_URL}/products/category/women's clothing`);
    return response;
};

export const getElectronicsProducts = async () => {
    const response = await axios.get(`${API_URL}/products/category/electronics`);
    return response;
};

export const getAllProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response;
};