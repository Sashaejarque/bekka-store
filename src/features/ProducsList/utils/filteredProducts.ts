import Products from '../../../models/Product';

export const filteredProducts = (
  products: Products[],
  filter: string,
  category: string
) => {
  const productsFilterBySearch = products.filter((product) => {
    if (filter === '') return true;
    return product.name.toLowerCase().includes(filter.toLowerCase());
  });
  return productsFilterBySearch;
};
