import { data }from '../__mock__/products.mock';
import {expect, it, describe} from '@jest/globals';
import { filteredProducts } from "../utils/filteredProducts";



describe("filteredProducts", () => {
    it("should return all products when filter and category are empty", () => {
        const result = filteredProducts(data, '', '');
        expect(result).toEqual(data);
    });
    
    it("should return products of electronics category when category is 'electronics' and filter is empty", () => {
       const result = filteredProducts(data, '', 'electronics');
         expect(result).toEqual(data.filter((product) => product.category === 'electronics'));
    });

    it("should return products of jewelery category when category is 'jewelery' and filter is empty", () => {
        const result = filteredProducts(data, '', 'jewelery');
        expect(result).toEqual(data.filter((product) => product.category === 'jewelery'));
    })

    it("should return products of men clothing category when category is 'men's clothing' and filter is empty", () => {
        const result = filteredProducts(data, '', "men's clothing")
        expect(result).toEqual(data.filter((product) => product.category === "men's clothing"));
    });

    it("should return products of women clothing category when category is 'women's clothing' and filter is empty", () => {
        const result = filteredProducts(data, '', "women's clothing")
        expect(result).toEqual(data.filter((product) => product.category === "women's clothing"));
    });

    it("should return products with 'Fjallraven' in title when filter is 'Fjallraven' and category is empty", () => {
        const result = filteredProducts(data, 'Fjallraven', '');
        expect(result).toEqual(data.filter((product) => product.title.toLowerCase().includes('fjallraven')));
    });

    it("should return products with 'Fjallraven' in title when category is men's clothing and filter is Fjallraven", () => {
        const result = filteredProducts(data, 'Fjallraven',"men's clothing");
        expect(result).toEqual(data.filter((product) => product.title.toLowerCase().includes('fjallraven')).filter((product) => product.category === "men's clothing"));
    });
    it("shouldnt return products if filter is '22222'", () => {
        const result = filteredProducts(data, '22222', '');
        expect(result).toEqual([]);
    });
    it("shouldnt return products if filter is '22222' and category is 'electronics'", () => {
        const result = filteredProducts(data, '22222', 'electronics');
        expect(result).toEqual([]);
    });
    
});
