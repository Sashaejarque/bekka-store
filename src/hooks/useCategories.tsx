import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useShoppingCart } from "../features/ShoppingCart/context/ShoppingCartProvider";
import Products from "../models/Product";
import {
  fetchElectronicsProducts,
  fetchJeweleryProducts,
  fetchMenClothingProducts,
  fetchWomenClothingProducts,
} from "../services/products";

const useCategories = (category: string) => {
  const [products, setProducts] = useState<Products[]>([]);
  const {
    actions: { getItemsFromLocalStorage },
  } = useShoppingCart();
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const categoryRequest = useCallback(() => {
    switch (category) {
      case "electronics":
        return fetchElectronicsProducts();
      case "jewelery":
        return fetchJeweleryProducts();
      case "menClothing":
        return fetchMenClothingProducts();
      case "womenClothing":
        return fetchWomenClothingProducts();
    }
  }, [category]);

  const handleFetch = useCallback(async () => {
    try {
      const response = await categoryRequest();
      setProducts(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [categoryRequest]);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (filter === "") {
          return product;
        } else if (product.title.toLowerCase().includes(filter.toLowerCase())) {
          return product;
        }
      }),
    [filter, products]
  );

  useEffect(() => {
    handleFetch();
    getItemsFromLocalStorage();
  }, [getItemsFromLocalStorage, handleFetch]);

  return { isLoading, products: filteredProducts, onChangeSearch: setFilter };
};

export default useCategories;
