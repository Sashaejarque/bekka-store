import React, { useEffect } from 'react';
import { Layout } from '../templates';
import CategoriesCarousel from '../features/CategoriesCarousel/CategoriesCarousel';
import ProductsList from '../features/ProducsList/ProductsList';
import { useShoppingCart } from '../features/ShoppingCart/context/ShoppingCartProvider';

function IndexPage() {
  const {
    actions: { getItemsFromLocalStorage },
  } = useShoppingCart();

  useEffect(() => {
    getItemsFromLocalStorage();
  }, [getItemsFromLocalStorage]);

  return (
    <Layout>
      <ProductsList />
    </Layout>
  );
}

export default IndexPage;
