import { Grid, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products from '../../models/Product';
import { getJeweleryProducts } from '../../services/products';
import { Layout } from '../../templates';
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from '../../components/ProductCard/ProductCard';

const JewelryPage = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [filteredProducts, setFilteredProducts] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        try {
          const response = await getJeweleryProducts();
          setProducts(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getProducts();
      }, []);

    return (
        <Layout>
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
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
          {isLoading ? (
            <CircularProgress sx={{ marginTop: 10 }} />
          ) : (
            products
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
                  sx={{
                    marginLeft: 3,
                    marginRight: 3,
                  }}
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
        </Grid>
      </Layout>
    )
};

export default JewelryPage;