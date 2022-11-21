/* eslint-disable react/no-unescaped-entities */
import {
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
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
  const [category, setCategory] = useState("");

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
  const productsFilterByCategory = filteredProducts.filter((product) => {
    if (category === "") {
      return product;
    } else if (product.category === category) {
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
        <Grid item xs={12} md={9}>
          <TextField
            id="input-with-icon-textfield"
            sx={{ width: "100%", marginTop: 4 }}
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
        <Grid item xs={12} md={3}>
          <FormControl sx={{ width: "100%", marginTop: 4 }}>
            <InputLabel id="select-category">Filter by category</InputLabel>
            <Select
              labelId="select-category"
              id="simple-select-category"
              value={category}
              label="Filter by category"
              onChange={e => setCategory(e.target.value)}
              sx={{ width: "100%" }}
            >
              <MenuItem value="">All categories</MenuItem>
              <MenuItem value='electronics'>Electronics</MenuItem>
              <MenuItem value='jewelery'>Jewelery</MenuItem>
              <MenuItem value="men's clothing">Men's clothing</MenuItem>
              <MenuItem value="women's clothing">Women's clothing</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        {loading ? (
          <Grid container justifyContent="center" alignItems="center">
            <CircularProgress />
          </Grid>
        ) : (
          productsFilterByCategory.map((product) => (
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
        {productsFilterByCategory.length === 0 && !loading && (
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
