import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCarousel from "../../components/CategoryCarousel/CategoryCarousel";
import { fetchCategories } from "../../services/categories";

const CategoriesCarousel = () => {
  // TODO: Agregar endpoint para carrousel de categorias
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Grid container item xs={12} mt={6}>
        <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
          Categories
        </Typography>
      </Grid>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" mt={4}>
          <CircularProgress sx={{ marginLeft: 4, marginTop: 10 }} />
        </Grid>
      ) : (
        <Grid container item xs={12} justifyContent="center">
          <CategoryCarousel data={categoriesList} />
        </Grid>
      )}
      <Grid container item xs={12} justifyContent="center">
        <Divider sx={{ width: "90%" }} />
      </Grid>
    </>
  );
};

export default CategoriesCarousel;
