import Products from "../../../models/Product";

export const filteredProducts = (
  products: Products[],
  filter: string,
  category: string
) => {
  const productsFilterBySearch = products.filter((product) => {
    if (filter === "") return true;
    return product.title.toLowerCase().includes(filter.toLowerCase());
  });
  const productFilterByCategory = productsFilterBySearch.filter((product) => {
    if (category === "") return true;
    return product.category === category;
  });
  return productFilterByCategory;
};
