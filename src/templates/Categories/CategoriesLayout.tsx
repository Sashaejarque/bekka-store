import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import React, { FC } from "react";
import Products from "../../models/Product";
import ProductCard from "../../components/ProductCard/ProductCard";

interface CategoriesLayoutProps {
  onChangeSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  data: Products[];
}
const CategoriesLayout: FC<CategoriesLayoutProps> = ({
  onChangeSearch,
  isLoading,
  data,
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      mt={6}
      spacing={4}
      mb={4}
    >
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <TextField
          id="input-with-icon-textfield"
          sx={{ width: "80%", marginTop: 4 }}
          label="Search for products"
          onChange={(e) => onChangeSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          data-testid="search"
        />
      </Grid>
      {isLoading ? (
        <CircularProgress sx={{ marginTop: 30, marginLeft: 4 }} />
      ) : (
        data.map((product) => (
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
            <ProductCard item={product} />
          </Grid>
        ))
      )}
      {data.length === 0 && !isLoading && (
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
  );
};

export default CategoriesLayout;
