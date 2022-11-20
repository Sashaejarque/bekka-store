import {
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services/categories";
import { Layout } from "../templates";
import CircularProgress from "@mui/material/CircularProgress";
import Products from "../models/Product";
import { getAllProducts } from "../services/products";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchIcon from "@mui/icons-material/Search";
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";

const IndexPage = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [filter, setFilter] = useState("");
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

  const filteredProducts = allProducts.filter((product) => {
    if (filter === "") {
      return product;
    } else if (product.title.toLowerCase().includes(filter.toLowerCase())) {
      return product;
    }
  });

  useEffect(() => {
    categories();
  }, []);

  return (
    <Layout>
      <Grid container item xs={12} justifyContent="center" mt={6}>
        <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
          All categories
        </Typography>
      </Grid>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" mt={4}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container item xs={12} justifyContent="center">
          <CategoryCarousel data={categoriesList} />
        </Grid>
      )}
      <Grid container item xs={12} justifyContent="center">
        <Divider sx={{ width: "90%" }} />
      </Grid>
      <Grid container item xs={12} justifyContent="center" mt={-4}>
        <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
          All products
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          sx={{ width: "90%", marginTop: 4 }}
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
      <Grid container item xs={12} spacing={2}>
        {loading ? (
          <Grid container justifyContent="center" alignItems="center">
            <CircularProgress />
          </Grid>
        ) : (
          filteredProducts.map((product) => (
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
        {filteredProducts.length === 0 && !loading && (
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

export default IndexPage;
