import { fetchCategories } from './../categories';
import { expect, it, describe,} from "@jest/globals";
import axios from "axios";

const instance = axios.create();

describe('Testing products service', () => {
    it('should fetch jewelery products', async () => {
        const response = await instance.get("https://fakestoreapi.com/products/category/jewelery");
        expect(response.status).toBe(200);
    });

    it('should fetch electronics products', async () => {
        const response = await instance.get("https://fakestoreapi.com/products/category/electronics");
        expect(response.status).toBe(200);
    });

    it('should fetch men clothing products', async () => {
        const response = await instance.get("https://fakestoreapi.com/products/category/men's clothing");
        expect(response.status).toBe(200);
    });

    it('should fetch women clothing products', async () => {
        const response = await instance.get("https://fakestoreapi.com/products/category/women's clothing");
        expect(response.status).toBe(200);
    });

    it('should fetch all products', async () => {
        const response = await instance.get("https://fakestoreapi.com/products");
        expect(response.status).toBe(200);
    });
});