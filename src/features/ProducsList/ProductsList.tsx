import {
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchAndFilter from "./components/SearchAndFilter";
import { filteredProducts } from "./utils/filteredProducts";
import { useProductListContext } from "./context/ProductsListProvider";

const ProductsList = () => {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const { state: { products, loading }, actions: { getAllProducts }  } = useProductListContext();

  const productsFiltered = useMemo(() => {
    return filteredProducts(products, filter, category);
  }, [products, filter, category])

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

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
              <ProductCard item={product} />
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
