import {
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Products from "../../models/Product";
import SearchAndFilter from "./components/SearchAndFilter";
import { fetchAllProducts } from "../../services/products";
import { filteredProducts } from "./utils/filteredProducts";
import { useProductListContext } from "./context/ProductsListContext";

const ProductsList = () => {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const productsFiltered = useMemo(() => {
    return filteredProducts(allProducts, filter, category);
  }, [allProducts, filter, category])

  useEffect(() => {
    (async () => {
      try {
        const categories = await fetchAllProducts();
        setAllProducts(categories.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Grid container item xs={12} ml={4}>
        <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
          All products
        </Typography>

      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        m={2}
        spacing={2}
      >
        <SearchAndFilter
          selectValue={category}
          onChangeSelectCategory={(e) => setCategory(e.target.value)}
          onChangeSearchInput={(e) => setFilter(e.target.value)}
        />
      </Grid>
      <Grid container item xs={12} spacing={2}>
        {loading ? (
          <Grid container justifyContent="center" alignItems="center">
            <CircularProgress />
          </Grid>
        ) : (
          productsFiltered.map((product) => (
            <Grid
              container
              item
              md={4}
              sm={6}
              xs={12}
              key={product.id}
              justifyContent="center"
              alignItems="center"
              mb={4}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            </Grid>
          ))
        )}
        {productsFiltered.length === 0 && !loading && (
          <Grid item xs={12}>
            <Typography
              textAlign="center"
              sx={{ marginBottom: 10, fontSize: 20 }}
            >
              No products found, try with another name...
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ProductsList;
