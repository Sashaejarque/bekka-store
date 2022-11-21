import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

export const fetchAllProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response;
};