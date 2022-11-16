import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { getCategories } from '../services/categories';
import { Layout } from '../templates';
import CircularProgress from '@mui/material/CircularProgress';


const IndexPage = () => {

  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = async () => {
    try {
      const response = await getCategories();
      setCategoriesList(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categories();
  }, []);
  loading && <CircularProgress />;
  return (
    <Layout>
      <Grid container flexDirection="row" spacing={6} justifyContent="center" mt={4}>
        {
          loading ? (
              <CircularProgress />
          ) : (
            <Grid container flexDirection="row" spacing={6} justifyContent="center">
            {
              categoriesList.map((category) => (
                <Grid container justifyContent="center" item lg={6} xs={12} key={category}>
                  <CategoryCard categoryName={category} />
                </Grid>
              ))
            }
        </Grid>
          )
        }
      </Grid>
    </Layout>
  )
};

export default IndexPage;