import { AccountCircle } from '@mui/icons-material';
import { Grid, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Products from '../../models/Product';
import { getMenClothingProducts } from '../../services/products';
import { Layout } from '../../templates';
import SearchIcon from '@mui/icons-material/Search';


const MenClothing = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [filteredProducts, setFilteredProducts] = useState('');

    const getProducts = async () => {
        try {
            const response = await getMenClothingProducts();
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <Layout>
            <Grid container spacing={10} justifyContent="center" alignItems="center" mb={2}>
                <Grid container item xs={12} justifyContent="center" alignItems="center">
                    <TextField
                        id="input-with-icon-textfield"
                        sx={{ width: '80%', marginTop: 4 }}
                        label="Search for products"
                        onChange={e => setFilteredProducts(e.target.value)}
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
            {
                products.filter(product => {
                    if (filteredProducts === '') {
                        return product;
                    } else if (product.title.toLowerCase().includes(filteredProducts.toLowerCase())) {
                        return product;
                    }
                }).map((product) => (
                    <Grid
                        container 
                        item 
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
            }
            </Grid>
        </Layout>
    )
};

export default MenClothing;