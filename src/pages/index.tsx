import { Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import { getCategories } from "../services/categories";
import { Layout } from "../templates";
import CircularProgress from "@mui/material/CircularProgress";
import Products from "../models/Product";
import { getAllProducts } from "../services/products";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchIcon from "@mui/icons-material/Search";

const IndexPage = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = async () => {
    try {
      const categories = await getCategories();
      const products = await getAllProducts();
      setCategoriesList(categories.data);
      setAllProducts(products.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categories();
  }, []);

  return (
    <Layout>
        <Grid container item xs={12} justifyContent="center" mt={-4}>
          <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
            All categories
          </Typography>
        </Grid>
        {
          loading ? (
            <Grid container justifyContent="center" alignItems="center">
              <CircularProgress />
              </Grid>
          ) : (
            categoriesList.map((category) => (
              <Grid
                container
                justifyContent="center"
                item
                lg={6}
                xs={12}
                key={category}
              >
                <CategoryCard categoryName={category} />
              </Grid>
            ))
          )
        }
        <Grid container item xs={12} justifyContent="center">
        <Divider sx={{ width: '90%'}} />
        </Grid>
        <Grid container item xs={12} justifyContent="center" mt={-4}>
          <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
            All products
          </Typography>
          <TextField
            id="input-with-icon-textfield"
            sx={{ width: "90%", marginTop: 4 }}
            label="Search for products"
            onChange={(e) => setFilteredProducts(e.target.value)}
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
        <Grid container item xs={12} spacing={2}>
        {
          loading ? (
            <Grid container justifyContent="center" alignItems="center">
              <CircularProgress />
              </Grid>
          ) : (
              allProducts
              .filter((product) => {
                if (filteredProducts === "") {
                  return product;
                } else if (
                  product.title
                    .toLowerCase()
                    .includes(filteredProducts.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product) => (
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
                >
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                </Grid>
              ))
          )
        }
        </Grid>
    </Layout>
  );
};

export default IndexPage;
