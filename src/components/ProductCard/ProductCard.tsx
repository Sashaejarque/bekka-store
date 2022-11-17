import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
    image: string;
    title: string;
    price: number;
}
const ProductCard: FC<Props> = ({
    image,
    title,
    price,
}) => {
    return (
        <Card sx={{ width: 300, height: 350 }}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ maxHeight: 200, objectFit: 'contain', maxWidth: 300 }}
            />
            <CardContent>
                <Typography textAlign="center">
                    {title}
                </Typography>
                <Typography textAlign="center">${price}</Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="center">
                    <Button size="small">
                        Add to cart
                    </Button>
                </Grid>
            </CardActions>
    </Card>
    )
};

export default ProductCard;