import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Products from "../../models/Product";
import { getJeweleryProducts } from "../../services/products";
import { Layout } from "../../templates";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useShoppingCart } from "../../features/ShoppingCart/context/ShoppingCartProvider";

const JewelryPage = () => {
  const [products, setProducts] = useState<Products[]>([]);
    const { actions: { getItemsFromLocalStorage } } = useShoppingCart();
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await getJeweleryProducts();
      setProducts(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredProducts = products.filter((product) => {
    if (filter === "") {
      return product;
    } else if (product.title.toLowerCase().includes(filter.toLowerCase())) {
      return product;
    }
  });

  useEffect(() => {
    getProducts();
    getItemsFromLocalStorage();
  }, [getItemsFromLocalStorage]);

  return (
    <Layout>
      <Grid container item xs={12} justifyContent="center" mt={6} spacing={4} mb={4}>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="input-with-icon-textfield"
            sx={{ width: "80%", marginTop: 4 }}
            label="Search for products"
            onChange={(e) => setFilter(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Grid>
        {isLoading ? (
          <CircularProgress sx={{ marginTop: 10 }} />
        ) : (
          filteredProducts.map((product) => (
            <Grid
              container
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={product.id}
              justifyContent="center"
              alignItems="center"
              sx={{
                marginLeft: 3,
                marginRight: 3,
              }}
            >
              <ProductCard item={product}/>
            </Grid>
          ))
        )}
        {filteredProducts.length === 0 && !isLoading && (
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
    </Layout>
  );
};

export default JewelryPage;
